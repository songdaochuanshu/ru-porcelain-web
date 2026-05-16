/**
 * 首页
 * 设计理念：新东方极简主义 - 融合传统汝瓷美学与现代数字设计
 */

import Hero from '@/components/Hero';
import ProjectIntro from '@/components/ProjectIntro';
import CeladonVisual from '@/components/CeladonVisual';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero 部分 */}
      <Hero />

      {/* 项目介绍 */}
      <ProjectIntro />

      {/* 核心视觉 */}
      <CeladonVisual />

      {/* 页脚 */}
      <footer className="bg-[#2C3E50] text-white py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">天青之韵</h3>
              <p className="text-[#A8C5D1]">一个数字博物馆级的汝瓷艺术展示平台</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">导航</h4>
              <ul className="space-y-2 text-[#A8C5D1]">
                <li><a href="#" className="hover:text-white transition">首页</a></li>
                <li><a href="#" className="hover:text-white transition">收藏展示</a></li>
                <li><a href="#" className="hover:text-white transition">工艺介绍</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">资源</h4>
              <ul className="space-y-2 text-[#A8C5D1]">
                <li><a href="#" className="hover:text-white transition">项目文档</a></li>
                <li><a href="#" className="hover:text-white transition">设计指南</a></li>
                <li><a href="#" className="hover:text-white transition">GitHub</a></li>
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
              © 2026 天青之韵 - 汝瓷官网. 保留所有权利。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
