/**
 * Hero 组件
 * 设计理念：新东方极简主义 - 融合传统汝瓷美学与现代数字设计
 * 核心特性：
 * - 天青色渐变背景
 * - 简洁优雅的排版
 * - 沉浸式的视觉体验
 */

export default function Hero() {
  const heroImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663629083491/5hmdyP2CR2fx6xHnFPhU4N/hero-celadon-bg-LG8j7MRbofZBDLCbTDU8By.webp';

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* 半透明遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(135,176,193,0.1)] to-[rgba(135,176,193,0.2)]" />

      {/* 内容区域 */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in-up">
        {/* 标题 */}
        <h1 className="celadon-heading text-5xl md:text-7xl mb-6 font-serif font-bold tracking-wider">
          天青之韵
        </h1>

        {/* 副标题 */}
        <p className="text-xl md:text-2xl text-[#6B8FA3] mb-8 font-light tracking-wide">
          汝瓷官网 React + Vite 项目构建方案
        </p>

        {/* 引言 */}
        <div className="celadon-divider my-8" />
        <p className="text-lg md:text-xl text-[#9CA3AF] italic mb-12 font-serif">
          "雨过天青云破处，这般颜色做将来"
        </p>

        {/* CTA 按钮 */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="celadon-button px-8 py-3 text-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            探索收藏
          </button>
          <button className="px-8 py-3 text-lg font-medium border-2 border-[#87B0C1] text-[#87B0C1] rounded-md hover:bg-[#87B0C1]/10 transition-all duration-300">
            了解工艺
          </button>
        </div>
      </div>

      {/* 滚动提示 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-float">
          <svg
            className="w-6 h-6 text-[#87B0C1]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
