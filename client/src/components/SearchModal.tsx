/**
 * 搜索模态框组件
 * 支持按名称、器型、色系搜索汝瓷
 */

import { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import { PORCELAINS, COLORS } from '@/data';

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [, setLocation] = useLocation();

  const results = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return PORCELAINS.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.shape.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.collection.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSelectItem = (id: string) => {
    setLocation(`/detail/${id}`);
    onOpenChange(false);
    setSearchQuery('');
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
        {/* 搜索输入 */}
        <div className="p-6 border-b border-[#D4E5ED]">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#87B0C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="搜索汝瓷藏品...（输入名称、器型、馆藏等）"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="flex-1 outline-none text-lg text-[#2C3E50] placeholder-[#9CA3AF]"
            />
            <button
              onClick={() => {
                onOpenChange(false);
                setSearchQuery('');
              }}
              className="text-[#9CA3AF] hover:text-[#6B8FA3] transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* 搜索结果 */}
        <div className="max-h-96 overflow-y-auto">
          {searchQuery.trim() === '' ? (
            <div className="p-8 text-center text-[#9CA3AF]">
              <p>输入关键词开始搜索</p>
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y divide-[#D4E5ED]">
              {results.map(item => {
                const color = COLORS.find(c => c.id === item.color);
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectItem(item.id)}
                    className="w-full p-4 hover:bg-[#F5F3F0] transition flex items-start gap-4 text-left"
                  >
                    <div className="w-16 h-16 rounded bg-gradient-to-br from-[#87B0C1]/10 to-[#A8C5D1]/10 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#2C3E50] mb-1 line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-sm text-[#6B8FA3] mb-2 line-clamp-1">
                        {item.description}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs bg-[#D4E5ED] text-[#6B8FA3] px-2 py-1 rounded">
                          {item.shape}
                        </span>
                        {color && (
                          <span className="text-xs bg-[#D4E5ED] text-[#6B8FA3] px-2 py-1 rounded">
                            {color.name}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="p-8 text-center text-[#9CA3AF]">
              <p>未找到相关藏品</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
