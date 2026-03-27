import { Header } from '../components/layout/Header';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ClipboardList, FileCheck, MessageSquare, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  { icon: ClipboardList, title: '提交申请', desc: '填写详细领养问卷', status: 'completed' },
  { icon: MessageSquare, title: '初审沟通', desc: '救助员与您进一步交流', status: 'active' },
  { icon: FileCheck, title: '实地考察', desc: '确认居住环境是否合适', status: 'pending' },
  { icon: HeartHandshake, title: '签署协议', desc: '完成电子合同签署', status: 'pending' },
];

export default function Adopt() {
  return (
    <div className="pb-24">
      <Header title="领养管理" />
      
      <main className="px-6 space-y-8">
        {/* Application Progress */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold">我的申请进度</h3>
          <Card className="p-6">
            <div className="space-y-6 relative">
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-surface-container" />
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-surface ${
                    step.status === 'completed' ? 'bg-primary text-on-primary' : 
                    step.status === 'active' ? 'bg-primary-container text-primary' : 
                    'bg-surface-container text-on-surface-variant'
                  }`}>
                    <step.icon size={20} />
                  </div>
                  <div className="flex-1 pt-1">
                    <h5 className="font-bold text-sm">{step.title}</h5>
                    <p className="text-[10px] text-on-surface-variant">{step.desc}</p>
                  </div>
                  {step.status === 'active' && (
                    <Button variant="outline" size="sm" className="h-8 text-[10px]">查看反馈</Button>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Adoption Questionnaire */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold">领养前置评估</h3>
          <Card className="p-6 bg-secondary-container/30 border-none">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center text-secondary">
                <ClipboardList size={28} />
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-sm">智能匹配问卷</h5>
                <p className="text-[10px] text-on-surface-variant">完成问卷，AI 将为您推荐最合适的毛孩子。</p>
              </div>
              <Button size="sm" className="rounded-full">去填写</Button>
            </div>
          </Card>
        </section>

        {/* Success Stories */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold">领养成功故事</h3>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map(i => (
              <Card key={i} className="overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/success-${i}/400/300`} 
                  alt="Success story" 
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                <CardContent className="p-3">
                  <h6 className="font-bold text-xs truncate">库珀的新家生活</h6>
                  <p className="text-[10px] text-on-surface-variant line-clamp-2 mt-1">
                    领养库珀已经三个月了，它现在是我们家不可或缺的一员...
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
