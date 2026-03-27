import { Header } from '../components/layout/Header';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mic, Image as ImageIcon, Plus, Search, Sparkles, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { analyzePetMood, identifyBreed } from '../lib/ai';

export default function Diary() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{ type: string, text: string } | null>(null);

  const handleAIAction = async (type: 'breed' | 'mood') => {
    setIsAnalyzing(true);
    setAnalysisResult(null);
    
    // In a real app, we would get the image from an input
    // For this demo, we'll use a placeholder base64 or a mock call
    const mockImage = "https://picsum.photos/seed/pet-analysis/400/400";
    
    try {
      // Simulate getting base64
      const response = await fetch(mockImage);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        const base64data = (reader.result as string).split(',')[1];
        let result = "";
        if (type === 'breed') {
          result = await identifyBreed(base64data);
        } else {
          result = await analyzePetMood(base64data);
        }
        setAnalysisResult({ type: type === 'breed' ? '品种识别' : '情绪分析', text: result });
        setIsAnalyzing(false);
      };
    } catch (error) {
      console.error(error);
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="pb-24">
      <Header title="智能日记" />
      
      <main className="px-6 space-y-8">
        {/* Diary Input */}
        <section className="space-y-4">
          <Card className="p-6 bg-surface-container-low border-none">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary">
                <Sparkles size={20} />
              </div>
              <span className="text-sm font-medium text-on-surface-variant">今天毛孩子有什么新鲜事？</span>
            </div>
            <div className="flex gap-3">
              <Button className="flex-1 rounded-2xl h-12 flex items-center gap-2">
                <Mic size={18} />
                语音记录
              </Button>
              <Button variant="outline" className="flex-1 rounded-2xl h-12 flex items-center gap-2">
                <ImageIcon size={18} />
                上传照片
              </Button>
            </div>
          </Card>
        </section>

        {/* AI Recognition Feature */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold">智能识别</h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => handleAIAction('breed')}
              disabled={isAnalyzing}
              className="p-4 bg-blue-50 border-none rounded-3xl flex flex-col items-center text-center gap-2 hover:bg-blue-100 transition-colors disabled:opacity-50"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Search size={24} />
              </div>
              <h5 className="font-bold text-xs">品种识别</h5>
              <p className="text-[9px] text-blue-800">拍照识别宠物品种与年龄</p>
            </button>
            <button 
              onClick={() => handleAIAction('mood')}
              disabled={isAnalyzing}
              className="p-4 bg-orange-50 border-none rounded-3xl flex flex-col items-center text-center gap-2 hover:bg-orange-100 transition-colors disabled:opacity-50"
            >
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <Sparkles size={24} />
              </div>
              <h5 className="font-bold text-xs">情绪分析</h5>
              <p className="text-[9px] text-orange-800">通过照片识别宠物心情</p>
            </button>
          </div>

          {isAnalyzing && (
            <div className="flex items-center justify-center py-8 gap-2 text-primary">
              <Loader2 size={24} className="animate-spin" />
              <span className="text-sm font-bold">AI 正在分析中...</span>
            </div>
          )}

          {analysisResult && (
            <Card className="p-6 bg-white/60 backdrop-blur-md border-primary/20 animate-in fade-in slide-in-from-bottom-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-primary" />
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{analysisResult.type}结果</span>
              </div>
              <p className="text-sm leading-relaxed">{analysisResult.text}</p>
            </Card>
          )}
        </section>

        {/* Diary Timeline */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">成长足迹</h3>
            <Button variant="ghost" size="sm" className="text-xs text-primary">查看全部</Button>
          </div>
          
          <div className="space-y-8 relative">
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-surface-container" />
            
            {[
              { date: '今天 10:30', content: '库珀今天在公园玩得非常开心，还交到了新朋友！', img: 'https://picsum.photos/seed/diary-1/600/400' },
              { date: '昨天 18:20', content: '露娜终于学会了“击掌”，真是个聪明的孩子。', img: 'https://picsum.photos/seed/diary-2/600/400' },
            ].map((entry, i) => (
              <div key={i} className="flex gap-6 relative z-10">
                <div className="w-8 h-8 rounded-full bg-primary border-4 border-surface flex-shrink-0" />
                <div className="flex-1 space-y-3">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">{entry.date}</span>
                  <Card className="p-4 space-y-3">
                    <p className="text-xs leading-relaxed">{entry.content}</p>
                    <img 
                      src={entry.img} 
                      alt="Diary" 
                      className="w-full aspect-video object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] rounded-md font-bold">#心情愉快</span>
                      <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[9px] rounded-md font-bold">#品种:金毛</span>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Button className="fixed bottom-28 right-6 w-14 h-14 rounded-full shadow-xl z-50">
        <Plus size={28} />
      </Button>
    </div>
  );
}

