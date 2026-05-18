/**
 * 工艺介绍页面 - 汝瓷制作工艺详解
 * 设计理念：新东方极简主义 - 展现传统工艺的精妙
 */

import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';

export default function Craftsmanship() {
  const [, setLocation] = useLocation();

  const craftSteps = [
    {
      id: 'selection',
      title: '第一步：选土取土',
      subtitle: '精选上乘陶土',
      description: '汝瓷的成功首先源于对原料的精心选择。工匠们深入汝州周边的山区，精心挑选含有适当铁质和硅酸盐成分的陶土。这些陶土需要具有高度的可塑性和烧成后的稳定性。选中的陶土经过严格的检验，去除杂质，确保每一块土料都符合制瓷的最高标准。这个环节看似简单，却需要数十年的经验积累才能准确判断土质的优劣。',
      image: '/images/63N3Zo3z38dJ.jpeg',
      details: [
        '选择含铁量适中的陶土，确保烧成后釉色呈现天青色',
        '陶土需具有高可塑性，便于后续的拉坯成型',
        '严格去除砂粒和杂质，提高成品率',
        '陶土需经过自然风化，增强其工艺性能'
      ]
    },
    {
      id: 'clay-preparation',
      title: '第二步：制泥练泥',
      subtitle: '将陶土化为可塑之泥',
      description: '选好的陶土需要经过复杂的加工过程才能成为可用的制瓷泥料。首先，陶土被放入水中浸泡，使其充分软化。然后通过传统的石碾或水碾反复碾压，使陶土中的颗粒均匀混合。这个过程需要数天甚至数周的时间。随后，泥料被放入练泥池中，工匠们用脚踩踏或用木棒反复搅拌，排出泥料中的气泡。只有经过充分练泥的泥料，才能在拉坯时保持稳定，烧成后不易开裂。',
      image: '/images/QXqbTuZD0T2g.webp',
      details: [
        '陶土浸水软化，使其达到最佳可塑状态',
        '石碾反复碾压，使泥料颗粒均匀细腻',
        '练泥过程排出气泡，防止成型后出现气孔',
        '泥料需静置数天，使其性能更加稳定'
      ]
    },
    {
      id: 'shaping',
      title: '第三步：拉坯成型',
      subtitle: '工匠手中的艺术创造',
      description: '拉坯是汝瓷制作中最富有艺术性的环节。经过精心准备的泥料被放在陶工轮上，随着轮子的旋转，工匠用双手轻轻引导泥料，使其逐渐上升、扩张，形成所需的器型。这个过程需要极高的技巧和丰富的经验。工匠需要凭借手感判断泥料的厚度是否均匀，力度是否适当。每一件汝瓷器物的成型，都是工匠与泥料之间的对话。一个水仙盆、一个温碗、一个洗，每一个器型都有其独特的成型技巧。这个环节往往决定了最终成品的成败。',
      image: '/images/UqgCEKe4ibdD.jpg',
      details: [
        '工匠需要掌握陶工轮的转速，保持稳定的旋转',
        '双手配合，引导泥料均匀上升，形成器型',
        '通过手感判断泥料厚度，确保壁厚均匀',
        '不同器型需要不同的拉坯技巧和时间',
        '拉坯完成后，器物需要自然干燥数天'
      ]
    },
    {
      id: 'trimming',
      title: '第四步：修坯打底',
      subtitle: '精雕细琢的完善',
      description: '拉坯完成的器物还需要进一步的修整。当泥料干燥到半干状态时，工匠将器物倒扣在陶工轮上，用特制的刀具仔细修整器物的底部和外壁。修坯不仅是为了美观，更重要的是调整器物的厚度，使其在烧成时受热均匀，防止开裂。同时，工匠还会在器物底部打上标记，这些标记既是工匠的签名，也是质量控制的重要手段。修坯完成后，器物需要继续干燥，直到达到可以施釉的状态。',
      image: '/images/NMs9juKjrsjp.jpg',
      details: [
        '器物干燥到半干状态时进行修坯，时机至关重要',
        '修坯刀需要锋利，以确保切面光滑',
        '修坯过程中调整器物厚度，使其受热均匀',
        '在器物底部打上支钉痕，这是汝瓷的独特标志',
        '修坯完成后继续干燥，防止后续施釉时变形'
      ]
    },
    {
      id: 'glaze-preparation',
      title: '第五步：制釉配方',
      subtitle: '天青釉色的秘密',
      description: '汝瓷最独特之处在于其釉色。天青釉的配制是汝瓷工艺中最神秘的部分。传统的汝瓷釉料主要由长石、石英、高岭土等矿物质组成，加入适量的铁质和其他微量元素。这些原料需要按照特定的比例混合，然后放入坩埚中，在高温下熔融。釉料的配制需要极高的精准度——即使是百分之一的偏差，也可能导致釉色的巨大变化。历代汝瓷工匠都将釉料配方视为最高的商业机密，代代相传。现代的汝瓷烧制者通过对古代遗物的研究和大量的实验，才逐渐接近了古代汝瓷釉料的配方。',
      image: '/images/yn1WzpAvgD7s.jpg',
      details: [
        '釉料主要成分：长石、石英、高岭土、铁质',
        '需要严格按照配方比例混合，精确到克',
        '原料需要研磨至极细的粉末状',
        '釉料在坩埚中高温熔融，形成均匀的釉浆',
        '釉浆需要静置沉淀，去除杂质和气泡'
      ]
    },
    {
      id: 'glazing',
      title: '第六步：施釉上釉',
      subtitle: '赋予器物生命的色彩',
      description: '经过精心准备的釉料被涂抹在干燥的器物表面。汝瓷的施釉方法主要有两种：蘸釉和刷釉。工匠需要根据器物的形状和大小选择合适的施釉方法。施釉时需要确保釉层厚度均匀，太厚会导致釉料流淌，太薄则无法呈现理想的釉色。特别是对于汝瓷这样的高端瓷器，施釉的质量直接关系到最终的成品效果。施釉完成后，器物需要进一步干燥，直到釉层完全干燥，才能进入烧窑阶段。',
      image: '/images/QqAlXE3bI0CT.jpg',
      details: [
        '蘸釉法：将器物浸入釉浆中，快速取出',
        '刷釉法：用毛刷将釉料均匀涂抹在器物表面',
        '需要确保釉层厚度在0.5-1mm之间',
        '特别注意器物底部不能有釉料，防止粘窑',
        '施釉完成后需要完全干燥，通常需要数天'
      ]
    },
    {
      id: 'kiln-loading',
      title: '第七步：装窑排窑',
      subtitle: '精密的空间布局',
      description: '装窑是一项极其精细的工作。工匠需要根据器物的大小、形状和烧成时所需的温度，将数百件器物精心排列在窑内。汝瓷采用的是"一钵一器"的支钉烧成法，即每件器物都被放在一个陶制的垫座上，通过支钉与垫座接触。这种烧成方法虽然降低了单次烧成的产量，但大大提高了成品率和釉色的质量。装窑时需要考虑窑内的温度分布，确保每件器物都能在适当的温度下烧成。装窑完成后，窑口需要用砖块密封，为烧成做好准备。',
      image: '/images/NVszuhCvFHI2.jpg',
      details: [
        '采用"一钵一器"支钉烧成法，每件器物独立烧制',
        '支钉的位置需要精心设计，通常在器物底部',
        '器物之间需要保持适当的间距，便于热量流通',
        '装窑时需要考虑窑内温度分布的均匀性',
        '装窑完成后用砖块和泥浆密封窑口'
      ]
    },
    {
      id: 'firing',
      title: '第八步：装窑烧窑',
      subtitle: '火焰中的蜕变',
      description: '烧窑是整个制瓷过程中最关键的环节。汝瓷的烧成温度通常在1200-1300℃之间，烧成时间需要12-24小时。烧窑过程分为升温、保温和降温三个阶段。在升温阶段，工匠需要逐步增加火力，使窑内温度均匀上升。升温过快会导致器物开裂，过慢则会影响釉色效果。到达目标温度后，需要保持一段时间，使釉料充分熔融。最后的降温阶段同样重要，需要缓慢降温，防止器物因温度变化过快而开裂。整个烧成过程中，工匠需要通过观火孔观察窑内的情况，根据经验判断火候，适时调整火力。这需要数十年的经验积累和对火焰的深刻理解。',
      image: '/images/Zf7alFxVmccI.jpg',
      details: [
        '烧成温度：1200-1300℃，精确控制至关重要',
        '升温阶段需要缓慢均匀，防止器物开裂',
        '保温阶段需要维持适当时间，使釉料充分熔融',
        '降温阶段同样需要缓慢进行，防止冷却过快',
        '整个烧成过程需要12-24小时',
        '工匠需要通过观火孔观察窑内情况，实时调整'
      ]
    },
    {
      id: 'cooling',
      title: '第九步：冷却出窑',
      subtitle: '最后的检验时刻',
      description: '烧成完成后，窑需要自然冷却。这个过程通常需要2-3天。只有当窑内温度完全降低到室温时，才能打开窑门。打开窑门的那一刻，是所有工匠最紧张的时刻——他们将看到自己数周工作的成果。每件器物都经历了火的洗礼，釉色已经定型，无法再改变。成功的器物呈现出温润如玉的天青色，失败的器物可能因为各种原因而报废。即使是经验丰富的工匠，成品率也只有30-40%。这也是为什么传世的汝瓷如此珍贵——每一件都是工匠们无数次尝试和失败的结晶。',
      image: '/images/63N3Zo3z38dJ.jpeg',
      details: [
        '冷却过程需要2-3天，不能加速',
        '温度降至室温后才能打开窑门',
        '打开窑门需要谨慎，防止器物因温度变化而破损',
        '成功的器物呈现天青色，釉面莹润如玉',
        '成品率通常只有30-40%，失败品需要报废',
        '成功出窑的器物需要进行最后的检验和处理'
      ]
    }
  ];

  const craftCharacteristics = [
    {
      title: '支钉烧成法',
      description: '汝瓷采用独特的"一钵一器"支钉烧成法。每件器物都被放在陶制的垫座上，通过三个支钉与垫座接触。这种方法虽然降低了产量，但大大提高了成品率和釉色质量。支钉在器物底部留下的三个小孔，成为了鉴别真正汝瓷的重要标志。'
    },
    {
      title: '天青釉色',
      description: '汝瓷最著名的特征是其独特的天青釉色。这种釉色呈现出"雨过天青云破处"的意境，温润如玉，清雅素净。釉色的形成需要精确的配方、适当的施釉厚度和完美的烧成火候。即使是微小的变化，也会导致釉色的巨大差异。'
    },
    {
      title: '器型古朴',
      description: '汝瓷的器型设计遵循"大道至简"的哲学。器型古朴大方，线条流畅，没有过度的装饰。这种简洁的设计风格体现了北宋文人的审美理念——追求内在的气质而非外在的华丽。'
    },
    {
      title: '工艺精湛',
      description: '汝瓷的制作工艺要求极高。从选土到出窑，每一个环节都需要精心把控。工匠需要具备丰富的经验和深厚的技艺。这种对工艺的执着追求，使得汝瓷成为了中国陶瓷工艺的巅峰之作。'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <Navigation />

      {/* Hero 部分 */}
      <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-[#F5F3F0] to-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="celadon-heading text-5xl md:text-6xl mb-6">
              汝瓷制作工艺
            </h1>
            <div className="celadon-divider mb-6" />
            <p className="text-xl text-[#6B8FA3] font-light max-w-2xl mx-auto">
              从选土到出窑，每一步都是工匠与火焰的对话。
              在这个过程中，普通的陶土被赋予了生命，
              成为了传世千年的艺术珍品。
            </p>
          </div>
        </div>
      </section>

      {/* 工艺流程详解 */}
      <main className="py-16 md:py-24">
        {craftSteps.map((step, index) => (
          <section
            key={step.id}
            className={`py-16 md:py-24 ${
              index % 2 === 0
                ? 'bg-white'
                : 'bg-gradient-to-b from-[#F5F3F0] to-white'
            }`}
          >
            <div className="container max-w-6xl mx-auto px-4">
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* 文字部分 */}
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-[#87B0C1] text-white rounded-full text-sm font-medium mb-4">
                      {step.subtitle}
                    </span>
                  </div>
                  <h2 className="celadon-heading text-3xl md:text-4xl mb-4">
                    {step.title}
                  </h2>
                  <div className="celadon-divider mb-6" />
                  <p className="text-lg text-[#6B8FA3] leading-relaxed mb-8">
                    {step.description}
                  </p>

                  {/* 细节要点 */}
                  <div className="space-y-3">
                    <h3 className="celadon-heading text-lg font-bold text-[#2C3E50] mb-4">
                      工艺要点：
                    </h3>
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#87B0C1] mt-2 flex-shrink-0" />
                        <p className="text-[#6B8FA3]">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 图片部分 */}
                <div
                  className={`animate-slide-in-${
                    index % 2 === 0 ? 'right' : 'left'
                  }`}
                >
                  <div className="bg-gradient-to-br from-[#87B0C1]/10 to-[#A8C5D1]/10 rounded-lg p-8 border border-[#D4E5ED] overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* 工艺特征 */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F5F3F0]">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="celadon-heading text-4xl md:text-5xl mb-4">
              汝瓷工艺特征
            </h2>
            <div className="celadon-divider mb-6" />
            <p className="text-lg text-[#6B8FA3] max-w-2xl mx-auto">
              这些特征使得汝瓷成为了中国陶瓷工艺的巅峰之作
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {craftCharacteristics.map((char, idx) => (
              <div
                key={idx}
                className="celadon-card p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="celadon-heading text-2xl mb-4">{char.title}</h3>
                <div className="celadon-divider mb-4" />
                <p className="text-[#6B8FA3] leading-relaxed">{char.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 工艺传承 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="celadon-heading text-4xl md:text-5xl mb-6 text-center">
              工艺传承
            </h2>
            <div className="celadon-divider mb-8" />
            <div className="space-y-6 text-lg text-[#6B8FA3] leading-relaxed">
              <p>
                汝瓷的制作工艺在北宋时期达到了巅峰，但在之后的历史中逐渐失传。直到20世纪，才有工匠开始尝试恢复这一古老的工艺。这个过程充满了挑战——没有完整的文献记载，没有现成的配方，只有对古代遗物的研究和无数次的实验。
              </p>
              <p>
                经过几代工匠的努力，汝瓷的制作工艺终于被重新掌握。现代的汝瓷烧制者在尊重传统工艺的基础上，结合现代的科学知识，使得汝瓷的制作更加稳定和可靠。但无论如何改进，汝瓷的核心精神——对工艺的执着追求和对美的不懈探索——从未改变。
              </p>
              <p>
                每一件现代汝瓷都承载着这份传承。工匠们用双手和火焰，延续着千年前的工艺传统。他们知道，自己做的不仅是陶瓷，更是在传承一份文化遗产。这份责任感，使得每一个工艺环节都被认真对待，每一件成品都值得珍视。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 返回按钮和导航 */}
      <section className="py-12 bg-gradient-to-b from-white to-[#F5F3F0]">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <button
            onClick={() => setLocation('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#87B0C1] text-white rounded-lg hover:bg-[#6B8FA3] transition font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </button>
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
                <li><button onClick={() => setLocation('/')} className="hover:text-white transition">首页</button></li>
                <li><a href="#" className="hover:text-white transition">收藏展示</a></li>
                <li><a href="#" className="hover:text-white transition">工艺介绍</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">了解</h4>
              <ul className="space-y-2 text-[#A8C5D1]">
                <li><a href="#" className="hover:text-white transition">汝瓷知识</a></li>
                <li><a href="#" className="hover:text-white transition">工艺流程</a></li>
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
    </div>
  );
}
