/**
 * 汝瓷色系展示组件
 * 展示汝瓷的五大釉色特征
 */

import { useLocation } from 'wouter';
import { COLORS, PORCELAINS } from '@/data';

export default function ColorShowcase() {
  const [, setLocation] = useLocation();
  
  // 按色系分组藏品
  const getItemsByColor = (colorId: string) => {
    return PORCELAINS.filter((p: typeof PORCELAINS[0]) => p.color === colorId);
  };

  return (
    <div className="space-y-12">
      {/* 色系介绍 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {COLORS.map((color: typeof COLORS[0]) => (
          <div
            key={color.id}
            className="celadon-card p-4 text-center hover:shadow-md transition-shadow duration-300"
          >
            {/* 色块 */}
            <div
              className="w-full h-24 rounded-lg mb-4 border-2 border-[#D4E5ED] shadow-sm"
              style={{ backgroundColor: color.hex }}
            />
            {/* 色名 */}
            <h4 className="celadon-heading text-lg mb-2">{color.name}</h4>
            {/* 描述 */}
            <p className="text-sm text-[#6B8FA3] italic">{color.description}</p>
            {/* 色值 */}
            <p className="text-xs text-[#9CA3AF] mt-2 font-mono">{color.hex}</p>
          </div>
        ))}
      </div>

      {/* 按色系展示藏品 */}
      <div className="space-y-8">
        {COLORS.map((color: typeof COLORS[0]) => {
          const items = getItemsByColor(color.id);
          if (items.length === 0) return null;

          return (
            <div key={color.id} className="space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b border-[#D4E5ED]">
                <div
                  className="w-8 h-8 rounded-full border-2 border-[#D4E5ED]"
                  style={{ backgroundColor: color.hex }}
                />
                <h3 className="celadon-heading text-2xl">{color.name}色系</h3>
                <span className="ml-auto text-sm text-[#6B8FA3]">{items.length}件</span>
              </div>

              {/* 该色系的藏品 */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item: typeof PORCELAINS[0]) => (
                  <button
                    key={item.id}
                    onClick={() => setLocation(`/detail/${item.id}`)}
                    className="celadon-card overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer text-left"
                  >
                    {/* 图片区域 */}
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

                    {/* 内容区域 */}
                    <div className="p-4">
                      <h4 className="celadon-heading text-lg mb-2 line-clamp-2">
                        {item.name}
                      </h4>
                      <p className="text-sm text-[#6B8FA3] mb-3 line-clamp-2">
                        {item.description}
                      </p>

                      {/* 特征标签 */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.features.slice(0, 2).map((feature: string, idx: number) => (
                          <span
                            key={idx}
                            className="text-xs bg-[#D4E5ED] text-[#6B8FA3] px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* 馆藏信息 */}
                      <div className="text-xs text-[#9CA3AF] border-t border-[#D4E5ED] pt-3">
                        <p className="font-medium text-[#2C3E50]">馆藏：{item.collection}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
