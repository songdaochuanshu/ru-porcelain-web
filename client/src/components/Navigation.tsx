/**
 * 导航栏组件
 * 设计理念：简洁优雅，强调品牡认同
 */

import { useState } from 'react';
import { useLocation } from 'wouter';
import SearchModal from './SearchModal';

export default function Navigation() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#D4E5ED]">
      <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => setLocation('/')}
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <div className="w-8 h-8 rounded-full bg-[#87B0C1] flex items-center justify-center">
            <span className="text-white font-bold text-sm">汝</span>
          </div>
          <span className="font-serif font-bold text-lg text-[#2C3E50]">天青之韵</span>
        </button>

        {/* 导航链接 */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => setLocation('/')}
            className="text-[#6B8FA3] hover:text-[#87B0C1] transition font-medium"
          >
            收藏展示
          </button>
          <a href="#" className="text-[#6B8FA3] hover:text-[#87B0C1] transition font-medium">
            工艺介绍
          </a>
          <a href="#" className="text-[#6B8FA3] hover:text-[#87B0C1] transition font-medium">
            馆藏信息
          </a>
        </div>

        {/* 搜索按钮 */}
        <button
          onClick={() => setSearchOpen(true)}
          className="px-4 py-2 rounded-md border border-[#87B0C1] text-[#87B0C1] hover:bg-[#87B0C1]/10 transition font-medium text-sm"
        >
          搜索
        </button>

        {/* 搜索模态框 */}
        <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
      </div>
    </nav>
  );
}
