import { Header } from '../components/layout/Header';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { matchPets } from '../lib/ai';

const questions = [
  {
    id: 'environment',
    question: '您的居住环境是？',
    options: [
      { label: '公寓 (无阳台)', value: 'apartment_no_balcony' },
      { label: '公寓 (有阳台)', value: 'apartment_balcony' },
      { label: '别墅/自带院子', value: 'house_yard' },
    ]
  },
  {
    id: 'experience',
    question: '您的养宠经验？',
    options: [
      { label: '新手小白', value: 'none' },
      { label: '有短暂经验', value: 'some' },
      { label: '资深铲屎官', value: 'expert' },
    ]
  },
  {
    id: 'lifestyle',
    question: '您的生活方式？',
    options: [
      { label: '朝九晚五', value: 'office' },
      { label: '居家办公', value: 'remote' },
      { label: '经常出差/旅行', value: 'travel' },
    ]
  }
];

export default function Questionnaire() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recommendation, setRecommendation] = useState<any>(null);
  const navigate = useNavigate();

  const handleSelect = (value: string) => {
    setAnswers({ ...answers, [questions[step].id]: value });
  };

  const next = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      submit();
    }
  };

  const submit = async () => {
    setIsSubmitting(true);
    const result = await matchPets(answers);
    setRecommendation(result);
    setIsSubmitting(false);
  };

  if (recommendation) {
    return (
      <div className="min-h-screen bg-surface flex flex-col px-6 py-12">
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
          <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center text-primary animate-bounce">
            <Sparkles size={48} />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold">匹配成功！</h2>
            <p className="text-lg font-bold text-primary">最适合您的宠物类型：{recommendation.petType}</p>
            <Card className="p-6 bg-white/60 backdrop-blur-md border-none text-sm leading-relaxed text-on-surface-variant">
              {recommendation.reason}
            </Card>
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-bold">匹配度:</span>
              <span className="text-2xl font-black text-primary">{recommendation.compatibilityScore}%</span>
            </div>
          </div>
          <Button className="w-full rounded-full h-14 text-lg" onClick={() => navigate('/')}>去看看这些毛孩子</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Header title="领养评估" />
      
      <main className="flex-1 px-6 py-12 flex flex-col">
        <div className="mb-12 space-y-2">
          <div className="flex justify-between text-[10px] font-bold text-primary uppercase tracking-widest">
            <span>第 {step + 1} 步</span>
            <span>共 {questions.length} 步</span>
          </div>
          <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 space-y-8"
          >
            <h2 className="text-2xl font-extrabold leading-tight">{questions[step].question}</h2>
            
            <div className="space-y-4">
              {questions[step].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`w-full p-6 rounded-3xl border-2 transition-all flex items-center justify-between group ${
                    answers[questions[step].id] === option.value
                      ? 'border-primary bg-primary/5'
                      : 'border-surface-container hover:border-primary/30'
                  }`}
                >
                  <span className={`font-bold ${
                    answers[questions[step].id] === option.value ? 'text-primary' : 'text-on-surface'
                  }`}>
                    {option.label}
                  </span>
                  {answers[questions[step].id] === option.value && (
                    <CheckCircle2 size={24} className="text-primary" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex gap-4">
          <Button 
            variant="outline" 
            className="flex-1 rounded-full"
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
          >
            <ArrowLeft size={20} className="mr-2" /> 上一步
          </Button>
          <Button 
            className="flex-1 rounded-full"
            disabled={!answers[questions[step].id] || isSubmitting}
            onClick={next}
          >
            {isSubmitting ? 'AI 匹配中...' : step === questions.length - 1 ? '完成评估' : '下一步'}
            {!isSubmitting && <ArrowRight size={20} className="ml-2" />}
          </Button>
        </div>
      </main>
    </div>
  );
}

