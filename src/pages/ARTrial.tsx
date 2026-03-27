import { motion } from 'motion/react';
import { ArrowLeft, Settings, Heart, Maximize2, RotateCw, Share2, Camera, History, Eye, Video, PawPrint } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export default function ARTrial() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {/* AR Background (Mock) */}
      <div className="absolute inset-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiU3a6clZrKyElJuZ8U8OSuKm-sFbNc0mSjSPk00W0KMaUFHlfMBgSEMw1Ex9Y0a9y6MrpWyxs3hqLmXFPI69ETDVLr5BiysFATJ__6kJEt_aCyqB30e-w2HYZAtKc85qAubzezK5J3sIDJL__0MesEcRj3vwcOgIjyuCNJMEPp2Z6R1gu7nogUC1qNajFey7Web4TAeEDKlYyMnobmhHgwIBXSS-GIxNro8v6Dbxkjwbe0Qmld51ftAcOVBHLcBf68afsPmk_2ai1" 
          alt="AR Background" 
          className="w-full h-full object-cover"
        />
        
        {/* Virtual Pet */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="relative w-72 h-72 translate-y-24"
          >
            {/* Shadow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-black/20 rounded-[100%] blur-xl" />
            
            {/* Scanner Ring */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-40 h-10 border-2 border-white/60 rounded-[100%] animate-pulse flex items-center justify-center">
              <div className="w-32 h-6 border border-white/30 rounded-[100%]" />
            </div>
            
            {/* The Pet */}
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjjIapTejfrE7brtSALuV9_O8GSJZKmU_yYfQbFWNG8qX3_uSjxJO8XQYTjNZfE-LRVqf0tQJGCRJJtUVRgchVoOWSEo9ox5Tl0599C1T9aAQDwojkCkEYDaEioCg9POnyGOb4C3E9hIA_SuEVPyuupwiV6ZA0hbg0OxYMY4H_-xjW_YvcgfU13tmn5DE8cnr7SlCgMiUx50D5SbMpSCDJQdCes2jeuW3-tD-lpaR-YPxnCWr-sr-nYyOv8BkNOhyLB65fD19om6wt" 
              alt="Cooper" 
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64 h-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Top Nav */}
      <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-white/40 backdrop-blur-md rounded-full text-stone-900 border border-white/20"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="font-bold text-lg text-stone-900 drop-shadow-sm">AR 试养</h1>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="bg-white/40 backdrop-blur-md rounded-full text-stone-900 border border-white/20"
        >
          <Settings size={20} />
        </Button>
      </nav>

      {/* UI Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between pt-24 pb-32 px-6 pointer-events-none">
        {/* Pet Info Card */}
        <div className="flex justify-start pointer-events-auto">
          <div className="bg-white/80 backdrop-blur-2xl p-4 rounded-2xl shadow-lg flex items-center gap-4 border border-white/60">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-primary-container ring-2 ring-white/50">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAV5op6Lcxb9WGj5ETUZAP1mtfUrxs_GAQs7FoVaS8BflP_e0cmCjeQnHw-3luCDZ7vueVBX48QFq4mCFFhni6FXWxAZygZ4KlDsDJFxVj_f4YAPITPmUwxxzH7KocVRYbwX0mvALq2YQ0eC8pEThoHzU1vWZgCZ4ay9u9yub8NhuD5LgPUO5YxR2OGrdyiPa-GqOM8iqtwYLoncVN2HtzJ-PX2sd8NYgftEEU5aX1d-JI-4USpvUmLEq5Fb_aEO3jl5LzM4j8TWA3" alt="Cooper" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-stone-900 text-base">库珀 (Cooper)</span>
              <span className="text-[13px] text-stone-600 font-medium">金毛犬 · 3岁</span>
            </div>
            <div className="ml-4">
              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-primary/10 text-primary">
                <Heart size={18} fill="currentColor" />
              </Button>
            </div>
          </div>
        </div>

        {/* Center Prompt */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <div className="bg-stone-900/85 backdrop-blur-xl px-7 py-2.5 rounded-full shadow-lg border border-white/10">
            <span className="text-white text-[13px] font-medium tracking-widest uppercase">点击屏幕放置宠物</span>
          </div>
          <div className="flex items-center gap-2 text-stone-900/80 font-semibold bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-4 h-4 border-2 border-stone-900/20 border-t-stone-900 rounded-full"
            />
            <span className="text-[11px] tracking-wider">正在寻找平面...</span>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="space-y-6 pointer-events-auto">
          <div className="bg-white/70 backdrop-blur-2xl rounded-[2rem] p-6 shadow-2xl border border-white/40">
            <div className="flex justify-center items-center gap-3 mb-6">
              <Button variant="outline" size="sm" className="bg-white/60 rounded-full text-[13px] font-bold text-primary border-white/40">
                <Maximize2 size={18} className="mr-2" /> 调整大小
              </Button>
              <Button variant="outline" size="sm" className="bg-white/60 rounded-full text-[13px] font-bold text-primary border-white/40">
                <RotateCw size={18} className="mr-2" /> 旋转
              </Button>
            </div>
            
            <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar px-2">
              {[
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDTDFs13z-yBVnBUJ75xIp7UOgsbLxnob9GQ0gPcydDktEvenbwUK-Ksmm2VIp-vUTbT53eOWzKwi4tKFdU5XMfYCIjy6Qr74dnjEf_I25raRRFySRcXJO_u3BDsNapz3u_hyEHBDx0Dn34rIo5OV6B5bZ9wzEMGuuhp-lkCaJH5ydAIcRHmbZjUqmubZHfWghMi9WdBn3EZgreVPgMNOSe9tk31NXAx9xDjawOC7lvgFuymCq75dssGdzPRU6il7GVR_SSm_1LMf5Y',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCf3zGQq2EH-Tf4PbWUunxWySrzU0_K4r4HwLf-JyfiX4nwoXEXbt1w7v2XqQDm9UJB0WHhJJZ7PWHaW3nRM0p4pMHz5yaxXhoPz44RtBR8y0kEbvKuXcK1Q-ysTQUqCgEyJE3lOynQeq0gyylKJXXJGO-qdkpPySIZPUCBpyORtK2S-k0WeV0pHJq9kFSYohXZ7F6jB0ZQIdc0wbOgwLsGQBx1Jl4YVHmntlex5lFhSvGI46C_AzAimsg30OCy_VjcOh0lFNsE0G7c',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAr4Y6DmnPWaNwSrsU_j1Az5dq38hCoWV9Z2b9RlOSfoYOoFiHZKmMafwkmnCnJ9Qf2srFb7TIPyKfKvBpRUpbu3BmYE8iOUAIkpHgjC6ySEsja62eMu7kPp45MYVKSb5Mfvz88dYEJb9D1iLBYr6oWBbncf3OTtfpZHPXTvrIeizIysicLHrBsCA6HtCeBkZp2ndd1das1qL1tzZtw22tTVWU6n40uenf0rEV8Ac6YnS48JhonWPEb-51j7UUbCrNPdaqES41_j6OT'
              ].map((img, i) => (
                <div key={i} className={`flex-shrink-0 w-14 h-14 rounded-full p-0.5 border-2 ${i === 0 ? 'border-primary' : 'border-transparent opacity-60'}`}>
                  <img src={img} alt="Pet" className="w-full h-full rounded-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-10 pb-4">
            <Button variant="ghost" size="icon" className="w-14 h-14 bg-white/50 backdrop-blur-xl rounded-full border-white/40">
              <History size={24} />
            </Button>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/25 rounded-full blur-2xl" />
              <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2 shadow-2xl relative z-10 border border-white/80 active:scale-90 transition-transform">
                <div className="w-full h-full rounded-full border-[4px] border-primary/20 flex items-center justify-center">
                  <div className="w-14 h-14 bg-primary rounded-full" />
                </div>
              </button>
            </div>
            <Button variant="ghost" size="icon" className="w-14 h-14 bg-white/50 backdrop-blur-xl rounded-full border-white/40">
              <Share2 size={24} />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Nav (AR Mode) */}
      <footer className="fixed bottom-0 w-full z-50 rounded-t-[2.5rem] bg-white/70 backdrop-blur-3xl border-t border-white/50">
        <div className="flex justify-around items-center px-8 py-5">
          <PawPrint size={24} className="text-stone-500" />
          <Video size={24} className="text-stone-500" />
          <div className="bg-primary text-on-primary rounded-full w-14 h-14 flex items-center justify-center shadow-lg border-4 border-white">
            <Camera size={24} />
          </div>
          <Eye size={24} className="text-stone-500" />
          <History size={24} className="text-stone-500" />
        </div>
      </footer>
    </div>
  );
}
