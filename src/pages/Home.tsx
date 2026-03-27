import { motion } from 'motion/react';
import { Header } from '../components/layout/Header';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MOCK_PETS } from '../lib/mockData';
import { Sparkles, MapPin, Filter, Heart, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pb-24">
      <Header />
      
      <main className="px-6 space-y-8">
        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden aspect-[16/9] bg-primary-container flex items-center px-8">
          <div className="space-y-4 z-10 max-w-[60%]">
            <h2 className="text-2xl font-extrabold text-on-primary-fixed leading-tight">
              寻找你的<br />命中注定
            </h2>
            <p className="text-xs text-on-primary-fixed/80">AI 智能匹配，为每只流浪毛孩子找到温暖的家。</p>
            <Link to="/questionnaire">
              <Button size="sm" className="rounded-full">开始匹配</Button>
            </Link>
          </div>
          <img 
            src="https://picsum.photos/seed/pet-hero/800/600" 
            alt="Happy pet" 
            className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* Categories */}
        <section className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {['全部', '狗狗', '猫咪', '兔子', '鸟类'].map((cat, i) => (
            <Button 
              key={cat} 
              variant={i === 0 ? 'primary' : 'outline'} 
              size="sm" 
              className="flex-shrink-0 px-6"
            >
              {cat}
            </Button>
          ))}
        </section>

        {/* Pet List */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Sparkles size={18} className="text-primary" />
              为你推荐
            </h3>
            <Button variant="ghost" size="sm" className="text-xs text-primary">
              <Filter size={14} className="mr-1" /> 筛选
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {MOCK_PETS.map((pet, index) => (
              <motion.div
                key={pet.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/pet/${pet.id}`}>
                  <Card className="overflow-hidden group">
                    <div className="relative aspect-[4/3]">
                      <img 
                        src={pet.images[0]} 
                        alt={pet.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary">
                        {pet.breed}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-4 right-4 bg-white/40 backdrop-blur-md rounded-full text-white hover:text-tertiary"
                      >
                        <Heart size={18} />
                      </Button>
                    </div>
                    <CardContent className="p-5 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold">{pet.name}</h4>
                        <span className="text-xs font-medium text-on-surface-variant">{pet.age} 岁 · {pet.gender === 'male' ? '男生' : '女生'}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-on-surface-variant">
                        <MapPin size={12} />
                        <span>距离你 2.5km · 阳光救助站</span>
                      </div>
                      <div className="flex gap-2 pt-2">
                        {pet.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 bg-surface-container rounded-md text-[10px] text-on-surface-variant">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Rescue Organizations */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold">合作救助机构</h3>
          <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
            {[1, 2, 3].map(i => (
              <Card key={i} className="flex-shrink-0 w-48 p-4 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-secondary">
                  <HomeIcon size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-sm">爱心救助站 {i}</h5>
                  <p className="text-[10px] text-on-surface-variant">已帮助 120+ 毛孩子</p>
                </div>
                <Button variant="outline" size="sm" className="w-full h-8 text-[10px]">查看详情</Button>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

