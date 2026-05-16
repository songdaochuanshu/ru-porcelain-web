/**
 * 汝瓷收藏浏览器组件
 * 支持按分类、器型浏览
 */

import { useState } from 'react';
import { useLocation } from 'wouter';
import { CATEGORIES, SHAPES, PORCELAINS, type Porcelain } from '@/data';

interface CollectionBrowserProps {
  mode: 'category' | 'shape';
}

export default function CollectionBrowser({ mode }: CollectionBrowserProps) {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [, setLocation] = useLocation();

  // 按分类筛选
  const filterByCategory = (categoryId: string) => {
    return PORCELAINS.filter((p: Porcelain) => p.category === categoryId as any);
  };

  // 按器型筛选
  const filterByShape = (shape: string) => {
    return PORCELAINS.filter((p: Porcelain) => p.shape === shape);
  };

  const filters = mode === 'category' ? CATEGORIES : SHAPES.map((shape: string) => ({ id: shape, name: shape }));
  const getFilteredItems = (filterId: string) => {
    return mode === 'category' ? filterByCategory(filterId) : filterByShape(filterId);
  };

  const displayedItems = selectedFilter ? getFilteredItems(selectedFilter) : PORCELAINS;

  return (
    <div className="space-y-8">
      {/* 筛选器 */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setSelectedFilter(null)}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            selectedFilter === null
              ? 'celadon-button shadow-md'
              : 'border border-[#D4E5ED] text-[#6B8FA3] hover:border-[#87B0C1] hover:text-[#87B0C1]'
          }`}
        >
          全部
        </button>
        {filters.map((filter: any) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedFilter === filter.id
                ? 'celadon-button shadow-md'
                : 'border border-[#D4E5ED] text-[#6B8FA3] hover:border-[#87B0C1] hover:text-[#87B0C1]'
            }`}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {/* 藏品网格 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.length > 0 ? (
          displayedItems.map((item: typeof PORCELAINS[0]) => (
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
                <h3 className="celadon-heading text-lg mb-2 line-clamp-2">
                  {item.name}
                </h3>
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
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-[#6B8FA3] text-lg">暂无相关藏品</p>
          </div>
        )}
      </div>
    </div>
  );
}
