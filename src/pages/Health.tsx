import { Header } from '../components/layout/Header';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Calendar as CalendarIcon, Syringe, Bug, Activity, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const reminders = [
  { icon: Syringe, title: '狂犬疫苗', date: '2026-04-15', pet: '库珀', type: 'vaccine' },
  { icon: Bug, title: '体内驱虫', date: '2026-03-28', pet: '露娜', type: 'deworm' },
  { icon: Activity, title: '年度体检', date: '2026-05-10', pet: '糯米', type: 'checkup' },
];

export default function Health() {
  return (
    <div className="pb-24">
      <Header title="健康管理" />
      
      <main className="px-6 space-y-8">
        {/* Health Calendar Summary */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">健康日历</h3>
            <Button variant="ghost" size="sm" className="text-xs text-primary">查看完整日历</Button>
          </div>
          <Card className="p-6 bg-primary-container/20 border-none">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <CalendarIcon size={20} className="text-primary" />
                <span className="font-bold text-sm">2026年3月</span>
              </div>
              <div className="flex gap-1">
                {[24, 25, 26, 27, 28, 29, 30].map(d => (
                  <div key={d} className={`w-8 h-10 rounded-xl flex flex-col items-center justify-center text-[10px] ${
                    d === 27 ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'
                  }`}>
                    <span>{d}</span>
                    <div className={`w-1 h-1 rounded-full mt-1 ${d === 28 ? 'bg-tertiary' : 'hidden'}`} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">即将到来</h4>
              {reminders.map((rem, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-white/60 rounded-2xl border border-white/40">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    rem.type === 'vaccine' ? 'bg-blue-100 text-blue-600' :
                    rem.type === 'deworm' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    <rem.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-sm">{rem.title}</h5>
                    <p className="text-[10px] text-on-surface-variant">{rem.pet} · {rem.date}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-[10px] text-primary">已完成</Button>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Symptom Checker */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold">症状自查</h3>
          <Card className="p-6 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-tertiary-container flex items-center justify-center text-tertiary">
              <Activity size={28} />
            </div>
            <div className="flex-1">
              <h5 className="font-bold text-sm">AI 智能辅助诊断</h5>
              <p className="text-[10px] text-on-surface-variant">通过引导式问答，获取初步健康建议。</p>
            </div>
            <Button size="sm" variant="outline" className="rounded-full">开始自查</Button>
          </Card>
        </section>

        {/* Emergency Navigation */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold">紧急联系</h3>
          <Card className="p-6 bg-red-50 border-red-100">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h5 className="font-bold text-sm text-red-900">附近宠物医院</h5>
                <p className="text-[10px] text-red-700">最近的 24h 医院距离 1.2km</p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center gap-2">
                <MapPin size={16} />
                一键导航
              </Button>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}
