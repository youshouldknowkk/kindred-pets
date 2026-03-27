import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_PETS } from '../lib/mockData';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ArrowLeft, Heart, Share2, MapPin, ShieldCheck, Info, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function PetDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pet = MOCK_PETS.find(p => p.id === id);

  if (!pet) return <div>未找到宠物信息</div>;

  return (
    <div className="pb-32">
      {/* Hero Image */}
      <div className="relative aspect-square">
        <img 
          src={pet.images[0]} 
          alt={pet.name} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center bg-gradient-to-b from-black/40 to-transparent">
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-white/20 backdrop-blur-md rounded-full text-white"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="bg-white/20 backdrop-blur-md rounded-full text-white">
              <Share2 size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/20 backdrop-blur-md rounded-full text-white">
              <Heart size={20} />
            </Button>
          </div>
        </div>
      </div>

      <main className="px-6 -mt-10 relative z-10 space-y-8">
        {/* Main Info Card */}
        <Card className="p-8 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold">{pet.name}</h1>
              <p className="text-sm text-on-surface-variant mt-1">{pet.breed} · {pet.age} 岁 · {pet.gender === 'male' ? '男生' : '女生'}</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">待领养</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-on-surface-variant">
            <MapPin size={14} className="text-primary" />
            <span>上海市浦东新区 · 阳光救助站 (2.5km)</span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: '体型', value: pet.size === 'large' ? '大型' : pet.size === 'medium' ? '中型' : '小型' },
              { label: '性格', value: pet.tags[0] },
              { label: '已绝育', value: pet.healthInfo.neutered ? '是' : '否' },
            ].map((item, i) => (
              <div key={i} className="bg-surface-container-low p-3 rounded-2xl flex flex-col items-center gap-1">
                <span className="text-[10px] text-on-surface-variant font-medium">{item.label}</span>
                <span className="text-xs font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Description */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold">关于 {pet.name}</h3>
          <p className="text-sm leading-relaxed text-on-surface-variant">
            {pet.description} 库珀是一只非常懂事的狗狗，它在救助站已经待了半年了。它非常渴望有一个温暖的家，能陪它一起散步、玩耍。它已经完成了所有的疫苗接种和绝育手术，非常健康。
          </p>
          <div className="flex flex-wrap gap-2">
            {pet.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-surface-container rounded-full text-xs font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </section>

        {/* Health Info */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold">健康档案</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, label: '疫苗接种', status: pet.healthInfo.vaccinated ? '已完成' : '未完成' },
              { icon: ShieldCheck, label: '体内外驱虫', status: pet.healthInfo.dewormed ? '已完成' : '未完成' },
              { icon: Info, label: '绝育手术', status: pet.healthInfo.neutered ? '已完成' : '未完成' },
              { icon: Info, label: '健康体检', status: '已完成' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-outline-variant/10">
                <item.icon size={18} className="text-green-600" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-on-surface-variant font-medium">{item.label}</span>
                  <span className="text-xs font-bold">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AR Trial Entry */}
        <section>
          <Card className="p-6 bg-primary-container/20 border-none flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center text-primary">
              <Sparkles size={28} />
            </div>
            <div className="flex-1">
              <h5 className="font-bold text-sm">AR 虚拟试养</h5>
              <p className="text-[10px] text-on-surface-variant">在领养前，先在家里“试养”一下吧！</p>
            </div>
            <Button size="sm" onClick={() => navigate('/ar-trial')}>立即体验</Button>
          </Card>
        </section>
      </main>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-surface/80 backdrop-blur-xl border-t border-outline-variant/10 flex gap-4 z-50">
        <Button variant="outline" className="flex-1 rounded-full h-14">咨询机构</Button>
        <Button className="flex-[2] rounded-full h-14 text-lg font-bold">申请领养</Button>
      </div>
    </div>
  );
}
