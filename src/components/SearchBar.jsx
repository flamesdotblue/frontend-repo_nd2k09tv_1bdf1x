import React from 'react';
import { Search, Mic, Camera } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="w-full flex items-center justify-center px-4">
      <div className="flex w-full max-w-[584px] items-center gap-3 rounded-full border border-gray-300/70 bg-white px-4 py-3 shadow-sm hover:shadow transition-shadow">
        <Search className="h-5 w-5 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
          placeholder="Search Google or type a URL"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="flex items-center gap-3 text-gray-500">
          <Mic className="h-5 w-5" />
          <Camera className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
