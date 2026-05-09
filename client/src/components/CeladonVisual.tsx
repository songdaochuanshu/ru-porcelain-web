/**
 * 核心视觉组件
 * 设计理念：展示天青釉色的梦幻质感
 */

export default function CeladonVisual() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#F5F3F0] to-[#E8EEF2]">
      <div className="container max-w-6xl mx-auto px-4">
        {/* 章节标题 */}
        <div className="text-center mb-16">
          <h2 className="celadon-heading text-4xl md:text-5xl mb-4">
            核心视觉：天青釉色
          </h2>
          <div className="celadon-divider mx-auto w-24 mb-8" />
          <p className="celadon-text text-lg md:text-xl text-[#9CA3AF]">
            梦幻般的"雨过天青"
          </p>
        </div>

        {/* 内容网格 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左侧描述 */}
          <div>
            <p className="celadon-text text-lg mb-6 leading-relaxed">
              汝瓷之美，首在釉色。在 React 项目中，我们将通过 CSS 变量精确定义不同光效下的天青色值：
            </p>
            <div className="bg-white rounded-lg p-6 border border-[#D4E5ED]">
              <code className="text-sm font-mono text-[#2C3E50]">
                <div>--celadon-primary: #87B0C1;</div>
                <div>--celadon-secondary: #A8C5D1;</div>
                <div>--celadon-dark: #6B8FA3;</div>
                <div>--celadon-light: #D4E5ED;</div>
              </code>
            </div>
            <p className="celadon-text text-lg mt-6 text-[#9CA3AF]">
              这种介于蓝绿之间的雅致色彩，是网站的主视觉基调。
            </p>
          </div>

          {/* 右侧颜色展示 */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 rounded-lg bg-[#87B0C1] shadow-lg" />
              <div>
                <h4 className="font-bold text-[#2C3E50]">天青主色</h4>
                <p className="text-[#9CA3AF]">#87B0C1</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 rounded-lg bg-[#A8C5D1] shadow-lg" />
              <div>
                <h4 className="font-bold text-[#2C3E50]">豆青辅色</h4>
                <p className="text-[#9CA3AF]">#A8C5D1</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 rounded-lg bg-[#6B8FA3] shadow-lg" />
              <div>
                <h4 className="font-bold text-[#2C3E50]">深青色</h4>
                <p className="text-[#9CA3AF]">#6B8FA3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
