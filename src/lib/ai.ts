import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function matchPets(answers: Record<string, string>) {
  const prompt = `Based on the following user lifestyle and environment, recommend the best type of pet (dog, cat, or others) and explain why.
  Environment: ${answers.environment}
  Experience: ${answers.experience}
  Lifestyle: ${answers.lifestyle}
  
  Return the recommendation in JSON format with 'petType', 'reason', and 'compatibilityScore'.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            petType: { type: Type.STRING },
            reason: { type: Type.STRING },
            compatibilityScore: { type: Type.NUMBER }
          },
          required: ["petType", "reason", "compatibilityScore"]
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("AI Matching Error:", error);
    return null;
  }
}

export async function analyzePetMood(imageBase64: string) {
  const prompt = "Analyze the mood of the pet in this image. Is it happy, sad, anxious, or playful? Provide a brief explanation.";
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: {
        parts: [
          { text: prompt },
          { inlineData: { mimeType: "image/jpeg", data: imageBase64 } }
        ]
      }
    });
    return response.text;
  } catch (error) {
    console.error("AI Mood Analysis Error:", error);
    return "无法识别宠物情绪";
  }
}

export async function identifyBreed(imageBase64: string) {
  const prompt = "Identify the breed of the pet in this image. If it's a mixed breed, mention the dominant ones. Also estimate the age if possible.";
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: {
        parts: [
          { text: prompt },
          { inlineData: { mimeType: "image/jpeg", data: imageBase64 } }
        ]
      }
    });
    return response.text;
  } catch (error) {
    console.error("AI Breed Identification Error:", error);
    return "无法识别宠物品种";
  }
}
