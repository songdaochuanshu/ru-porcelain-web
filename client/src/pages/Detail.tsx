/**
 * 详情页 - 汝瓷单件展示
 */

import { useRoute, useLocation } from 'wouter';
import { PORCELAINS, COLORS } from '@/data';
import Navigation from '@/components/Navigation';

export default function Detail() {
  const [match, params] = useRoute('/detail/:id');
  const [, setLocation] = useLocation();

  if (!match) {
    return null;
  }

  const porcelain = PORCELAINS.find(p => p.id === params?.id);

  if (!porcelain) {
    setLocation('/404');
    return null;
  }

  const color = COLORS.find(c => c.id === porcelain.color);

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <Navigation />

      {/* 主要内容 */}
      <main className="pt-20">
        {/* 返回按钮 */}
        <div className="container max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 text-[#87B0C1] hover:text-[#6B8FA3] transition font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回收藏
          </button>
        </div>

        {/* 详情内容 */}
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 左侧：图片 */}
            <div className="animate-slide-in-left">
              <div className="bg-gradient-to-br from-[#87B0C1]/10 to-[#A8C5D1]/10 rounded-lg p-8 border border-[#D4E5ED]">
                <img
                  src={porcelain.imageUrl}
                  alt={porcelain.name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* 右侧：信息 */}
            <div className="animate-slide-in-right space-y-6">
              {/* 标题 */}
              <div>
                <h1 className="celadon-heading text-4xl mb-4">{porcelain.name}</h1>
                <div className="celadon-divider mb-4" />
              </div>

              {/* 基本信息 */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-[#87B0C1] font-bold min-w-fit">器型：</span>
                  <span className="text-[#6B8FA3]">{porcelain.shape}</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#87B0C1] font-bold min-w-fit">尺寸：</span>
                  <span className="text-[#6B8FA3]">{porcelain.size}</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#87B0C1] font-bold min-w-fit">馆藏：</span>
                  <span className="text-[#6B8FA3]">{porcelain.collection}</span>
                </div>
              </div>

              {/* 釉色信息 */}
              {color && (
                <div className="bg-gradient-to-br from-[#F5F3F0] to-[#E8EEF2] rounded-lg p-6 border border-[#D4E5ED]">
                  <h3 className="celadon-heading text-lg mb-4">釉色特征</h3>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-lg border-2 border-[#D4E5ED] shadow-sm"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="font-bold text-[#2C3E50]">{color.name}</p>
                      <p className="text-sm text-[#6B8FA3]">{color.description}</p>
                      <p className="text-xs text-[#9CA3AF] font-mono mt-1">{color.hex}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* 描述 */}
              <div>
                <h3 className="celadon-heading text-lg mb-3">器物描述</h3>
                <p className="text-[#6B8FA3] leading-relaxed">{porcelain.description}</p>
              </div>

              {/* 特征标签 */}
              <div>
                <h3 className="celadon-heading text-lg mb-3">工艺特征</h3>
                <div className="flex flex-wrap gap-3">
                  {porcelain.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-[#87B0C1] text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* 分类标签 */}
              <div className="pt-6 border-t border-[#D4E5ED]">
                <p className="text-sm text-[#9CA3AF] mb-2">分类</p>
                <div className="flex gap-2">
                  <span className="bg-[#D4E5ED] text-[#6B8FA3] px-3 py-1 rounded-full text-sm">
                    {porcelain.category === 'daily' && '日用器皿'}
                    {porcelain.category === 'display' && '陈设雅玩'}
                    {porcelain.category === 'ritual' && '礼仪祭祀'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 相关藏品 */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F5F3F0]">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="celadon-heading text-3xl md:text-4xl mb-4 text-center">
              相关藏品
            </h2>
            <div className="celadon-divider mb-12" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PORCELAINS.filter(p => p.id !== porcelain.id && p.shape === porcelain.shape).slice(0, 3).map(item => (
                <button
                  key={item.id}
                  onClick={() => setLocation(`/detail/${item.id}`)}
                  className="celadon-card overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer text-left"
                >
                  <div className="relative h-48 bg-gradient-to-br from-[#87B0C1]/10 to-[#A8C5D1]/10 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-[#87B0C1] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.shape}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="celadon-heading text-lg mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#6B8FA3] line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="bg-[#2C3E50] text-white py-12">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">天青之韵</h3>
                <p className="text-[#A8C5D1]">汝瓷数字博物馆 - 传承千年工艺</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">浏览</h4>
                <ul className="space-y-2 text-[#A8C5D1]">
                  <li><button onClick={() => setLocation('/')} className="hover:text-white transition">返回首页</button></li>
                  <li><a href="#" className="hover:text-white transition">按分类</a></li>
                  <li><a href="#" className="hover:text-white transition">按器型</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">了解</h4>
                <ul className="space-y-2 text-[#A8C5D1]">
                  <li><a href="#" className="hover:text-white transition">汝瓷知识</a></li>
                  <li><a href="#" className="hover:text-white transition">工艺介绍</a></li>
                  <li><a href="#" className="hover:text-white transition">馆藏信息</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">关于</h4>
                <ul className="space-y-2 text-[#A8C5D1]">
                  <li><a href="#" className="hover:text-white transition">联系我们</a></li>
                  <li><a href="#" className="hover:text-white transition">隐私政策</a></li>
                  <li><a href="#" className="hover:text-white transition">服务条款</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#6B8FA3] pt-8">
              <p className="text-center text-[#A8C5D1]">
                © 2026 天青之韵 - 汝瓷数字博物馆. 保留所有权利。
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
