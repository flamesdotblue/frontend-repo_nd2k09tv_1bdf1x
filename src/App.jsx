import React, { useState } from 'react';
import GoogleLogo from './components/GoogleLogo.jsx';
import SearchBar from './components/SearchBar.jsx';
import ActionButtons from './components/ActionButtons.jsx';
import SiteFooter from './components/SiteFooter.jsx';

function App() {
  const [fall, setFall] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col"
      onClick={() => setFall(true)}
    >
      {/* Top bar (spacer to mimic Google's clean top) */}
      <div className="flex items-center justify-end gap-6 px-6 py-4 text-sm text-gray-700">
        <a href="#" className="hover:underline" onClick={(e) => e.stopPropagation()}>Gmail</a>
        <a href="#" className="hover:underline" onClick={(e) => e.stopPropagation()}>Images</a>
        <div className="h-8 w-8 rounded-full bg-gray-200" />
      </div>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-start mt-24 select-none">
        <GoogleLogo fall={fall} />
        <div className="mt-8 w-full">
          <SearchBar />
        </div>
        <ActionButtons />
      </main>

      {/* Footer */}
      <div className="mt-auto w-full">
        <SiteFooter />
      </div>
    </div>
  );
}

export default App;
