/**
 * 首页 - 汝瓷数字博物馆
 * 设计理念：新东方极简主义 - 融合传统汝瓷美学与现代数字设计
 */

import { useState } from 'react';
import { useLocation } from 'wouter';
import Hero from '@/components/Hero';
import CollectionBrowser from '@/components/CollectionBrowser';
import ColorShowcase from '@/components/ColorShowcase';
import Navigation from '@/components/Navigation';

export default function Home() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<'category' | 'shape' | 'color'>('category');

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <Navigation />

      {/* Hero 部分 */}
      <Hero />

      {/* 主要内容区域 */}
      <main className="bg-white">
        {/* 汝瓷分类浏览 */}
        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="celadon-heading text-4xl md:text-5xl mb-4">
                汝瓷艺术收藏
              </h2>
              <div className="celadon-divider my-6" />
              <p className="text-lg text-[#6B8FA3] font-light">
                探索北宋官窑的传世精品，感受天青釉色的千年韵味
              </p>
            </div>

            {/* 标签页切换 */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              <button
                onClick={() => setActiveTab('category')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'category'
                    ? 'celadon-button shadow-md'
                    : 'border-2 border-[#87B0C1] text-[#87B0C1] hover:bg-[#87B0C1]/10'
                }`}
              >
                按分类
              </button>
              <button
                onClick={() => setActiveTab('shape')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'shape'
                    ? 'celadon-button shadow-md'
                    : 'border-2 border-[#87B0C1] text-[#87B0C1] hover:bg-[#87B0C1]/10'
                }`}
              >
                按器型
              </button>
              <button
                onClick={() => setActiveTab('color')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'color'
                    ? 'celadon-button shadow-md'
                    : 'border-2 border-[#87B0C1] text-[#87B0C1] hover:bg-[#87B0C1]/10'
                }`}
              >
                按色系
              </button>
            </div>

            {/* 内容展示 */}
            {activeTab === 'category' && <CollectionBrowser mode="category" />}
            {activeTab === 'shape' && <CollectionBrowser mode="shape" />}
            {activeTab === 'color' && <ColorShowcase />}
          </div>
        </section>

        {/* 关于汝瓷 */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F5F3F0]">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h3 className="celadon-heading text-3xl md:text-4xl mb-6">
                  天青之韵
                </h3>
                <div className="celadon-divider mb-6" />
                <p className="text-lg text-[#6B8FA3] leading-relaxed mb-4">
                  汝瓷，北宋五大名窑之首，以其"温润似玉而胜于玉"的质感和"雨过天青云破处"的独特釉色闻名于世。
                </p>
                <p className="text-lg text-[#6B8FA3] leading-relaxed mb-4">
                  汝窑烧制时间极短，仅约20年，传世品极少，全世界记录在册仅存70余件，被历代视为稀世珍宝。
                </p>
                <p className="text-lg text-[#6B8FA3] leading-relaxed">
                  本平台精选传世汝瓷精品，以数字博物馆的形式呈现，让您在指尖感受千年工艺的精妙。
                </p>
              </div>
              <div className="animate-slide-in-right bg-gradient-to-br from-[#87B0C1]/10 via-[#A8C5D1]/10 to-[#D4E5ED]/10 rounded-lg p-8 border border-[#D4E5ED]">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#87B0C1] flex items-center justify-center text-white font-bold flex-shrink-0">
                      70
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2C3E50] mb-1">传世精品</h4>
                      <p className="text-sm text-[#6B8FA3]">全世界仅存70余件汝瓷</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#87B0C1] flex items-center justify-center text-white font-bold flex-shrink-0">
                      北宋</div>
                    <div>
                      <h4 className="font-bold text-[#2C3E50] mb-1">时代背景</h4>
                      <p className="text-sm text-[#6B8FA3]">北宋官窑，烧制约20年</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#87B0C1] flex items-center justify-center text-white font-bold flex-shrink-0">
                      天青</div>
                    <div>
                      <h4 className="font-bold text-[#2C3E50] mb-1">釉色特征</h4>
                      <p className="text-sm text-[#6B8FA3]">雨过天青云破处的意境</p>
                    </div>
                  </div>
                </div>
              </div>
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
                  <li><button onClick={() => setActiveTab('category')} className="hover:text-white transition">按分类</button></li>
                  <li><button onClick={() => setActiveTab('shape')} className="hover:text-white transition">按器型</button></li>
                  <li><button onClick={() => setActiveTab('color')} className="hover:text-white transition">按色系</button></li>
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
