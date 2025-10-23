import React from 'react';

export default function ActionButtons() {
  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      <button
        className="rounded bg-gray-100 px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 border border-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        Google Search
      </button>
      <button
        className="rounded bg-gray-100 px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 border border-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        I'm Feeling Lucky
      </button>
    </div>
  );
}
