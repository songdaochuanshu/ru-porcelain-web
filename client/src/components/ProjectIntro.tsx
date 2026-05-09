/**
 * 项目介绍组件
 * 设计理念：展示项目的核心愿景与技术选型
 */

export default function ProjectIntro() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        {/* 章节标题 */}
        <div className="text-center mb-16">
          <h2 className="celadon-heading text-4xl md:text-5xl mb-4">
            01. 项目愿景与技术栈
          </h2>
          <div className="celadon-divider mx-auto w-24 mb-8" />
          <p className="celadon-text text-lg md:text-xl text-[#9CA3AF]">
            构建一个极简、优雅的数字博物馆级官网，利用现代前端工具实现流畅的视觉体验与卓越的交互性能。
          </p>
        </div>

        {/* 内容网格 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左侧文本 */}
          <div>
            <h3 className="celadon-heading text-2xl mb-6">为什么选择 React + Vite</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#87B0C1] mb-2 text-lg">Vite 极速启动</h4>
                <p className="celadon-text text-[#9CA3AF]">
                  在手机端 Manus 开发时，Vite 的秒级热更新（HMR）能显著提升编码效率，实时查看天青色调的细微变化。
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#87B0C1] mb-2 text-lg">React 组件化架构</h4>
                <p className="celadon-text text-[#9CA3AF]">
                  将"开片背景"、"产品画廊"、"工艺说明"封装为独立组件，实现高度复用与清晰的代码逻辑维护。
                </p>
              </div>
            </div>
          </div>

          {/* 右侧图片 */}
          <div className="celadon-card p-8 flex items-center justify-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663629083491/5hmdyP2CR2fx6xHnFPhU4N/crackle-texture-D6FWWrETBvpQM4TiSQrdus.webp"
              alt="开片纹理"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
