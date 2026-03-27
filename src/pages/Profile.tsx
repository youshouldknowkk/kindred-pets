import { Header } from '../components/layout/Header';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Settings, ChevronRight, Wallet, Award, Heart, Share2, Info } from 'lucide-react';

const menuItems = [
  { icon: Wallet, label: '我的钱包', extra: '积分: 1250' },
  { icon: Award, label: '成就勋章', extra: '已获得 5 枚' },
  { icon: Heart, label: '我的收藏', extra: '12 只毛孩子' },
  { icon: Share2, label: '分享应用', extra: '' },
  { icon: Info, label: '关于我们', extra: '' },
];

export default function Profile() {
  return (
    <div className="pb-24">
      <Header title="个人中心" />
      
      <main className="px-6 space-y-8">
        {/* User Info */}
        <section className="flex items-center gap-4 py-4">
          <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary-container/30">
            <img 
              src="https://picsum.photos/seed/user-avatar/200/200" 
              alt="User" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">爱宠达人</h2>
            <p className="text-xs text-on-surface-variant">ID: 1955350250 · 资深领养人</p>
            <div className="flex gap-2 mt-2">
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-[9px] rounded-full font-bold">已认证</span>
              <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[9px] rounded-full font-bold">志愿者</span>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Settings size={20} />
          </Button>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-3 gap-4">
          {[
            { label: '已领养', value: '2' },
            { icon: Heart, label: '关注中', value: '15' },
            { icon: Share2, label: '动态', value: '48' },
          ].map((stat, i) => (
            <Card key={i} className="p-4 flex flex-col items-center justify-center gap-1">
              <span className="text-lg font-extrabold text-primary">{stat.value}</span>
              <span className="text-[10px] text-on-surface-variant font-medium">{stat.label}</span>
            </Card>
          ))}
        </section>

        {/* Growth Archive Entry */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold">我的宠物档案</h3>
          <Card className="p-6 bg-primary-container/10 border-none">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-primary">
                <Award size={24} />
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-sm">成长档案与年度报告</h5>
                <p className="text-[10px] text-on-surface-variant">查看库珀、露娜的完整成长曲线与医疗记录。</p>
              </div>
              <ChevronRight size={20} className="text-on-surface-variant" />
            </div>
          </Card>
        </section>

        {/* Menu List */}
        <section className="space-y-2">
          {menuItems.map((item, i) => (
            <Button 
              key={i} 
              variant="ghost" 
              className="w-full h-14 px-4 flex items-center justify-between hover:bg-surface-container-low rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant">
                  <item.icon size={20} />
                </div>
                <span className="text-sm font-bold">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.extra && <span className="text-[10px] text-on-surface-variant">{item.extra}</span>}
                <ChevronRight size={16} className="text-on-surface-variant" />
              </div>
            </Button>
          ))}
        </section>

        {/* Logout */}
        <section className="pt-4">
          <Button variant="outline" className="w-full text-red-600 border-red-100 hover:bg-red-50 hover:text-red-700">退出登录</Button>
        </section>
      </main>
    </div>
  );
}
