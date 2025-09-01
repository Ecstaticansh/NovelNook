import React, { useState } from 'react';
import { Home, Search, Compass, MessageSquare, Bookmark, User, PenSquare, ThumbsUp, GitCommitHorizontal, PlusSquare, Settings } from 'lucide-react';

// --- Mock Data (for frontend demonstration) ---
const mockPosts = [
  {
    id: 1,
    author: 'Virginia Woolf',
    handle: 'v_woolf',
    avatarUrl: 'https://placehold.co/100x100/3A4F41/F8F5F2?text=VW',
    timestamp: '2h ago',
    content: 'Pondering the stream of consciousness for my next piece. The inner world of a character is a universe unto itself, wouldn\'t you agree? Trying to capture its fleeting, fragmented nature.',
    type: 'author_update',
    bookTitle: 'Mrs Dalloway',
    likes: 1247,
    comments: 92,
  },
  {
    id: 2,
    author: 'Reader_Alex',
    handle: 'alexreads',
    avatarUrl: 'https://placehold.co/100x100/AE8E6A/FFFFFF?text=A',
    timestamp: '5h ago',
    content: 'Just finished "To the Lighthouse" and I\'m emotionally wrecked in the best way possible. Virginia Woolf is a genius. Any recommendations for what to read next?',
    type: 'user_post',
    likes: 78,
    comments: 15,
  },
  {
    id: 3,
    author: 'Leo Tolstoy',
    handle: 'leo_t',
    avatarUrl: 'https://placehold.co/100x100/3A4F41/F8F5F2?text=LT',
    timestamp: '1d ago',
    content: 'The first draft of a new chapter is complete. It is long, it is dense, and it concerns the philosophical implications of war. Now, for the endless process of refinement.',
    type: 'author_update',
    bookTitle: 'War and Peace',
    likes: 856,
    comments: 45,
  },
];

const mockUser = {
    name: 'BookLover22',
    handle: 'reader_life',
    avatarUrl: 'https://placehold.co/100x100/AE8E6A/FFFFFF?text=B',
};


// --- The Main Page Component ---
export default function CommunityFeedPage() {

  return (
    <div className="bg-[#F8F5F2] font-sans text-stone-800 antialiased flex">
      {/* --- Instagram-style Sidebar --- */}
      <aside className="fixed top-0 left-0 h-full w-[250px] bg-[#FDFBF7] border-r border-stone-200/80 p-6 flex flex-col">
        <a href="#" className="flex items-center gap-2 text-3xl font-serif text-[#3A4F41] font-bold mb-10">
            <GitCommitHorizontal size={28} />
            NovelNook
        </a>
        <nav className="flex flex-col gap-4 flex-grow">
          <NavItem icon={<Home size={24}/>} label="Home" active />
          <NavItem icon={<Search size={24}/>} label="Search" />
          <NavItem icon={<Compass size={24}/>} label="Explore" />
          <NavItem icon={<MessageSquare size={24}/>} label="Messages" />
          <NavItem icon={<PlusSquare size={24}/>} label="Create" />
          <NavItem icon={<User size={24}/>} label="Profile" />
        </nav>
        <div className="mt-auto">
            <NavItem icon={<Settings size={24}/>} label="Settings" />
        </div>
      </aside>
      
      {/* --- Main Content Feed --- */}
      <main className="ml-[250px] w-full p-8 md:p-12">
        <div className="max-w-2xl mx-auto">
          {/* The Posts */}
          <div className="space-y-8">
            {mockPosts.map(post => <PostCard key={post.id} post={post} />)}
          </div>
        </div>
      </main>
    </div>
  );
}

// --- Sidebar Navigation Item Component ---
function NavItem({ icon, label, active = false }) {
    return (
        <a href="#" className={`flex items-center gap-4 p-3 rounded-lg text-lg transition-colors ${
            active 
            ? 'font-bold text-[#3A4F41] bg-stone-200/60' 
            : 'text-stone-600 hover:bg-stone-200/60'
        }`}>
            {icon}
            <span>{label}</span>
        </a>
    );
}

// --- Sub-component for a single Post ---
function PostCard({ post }) {
  return (
    <div className="bg-[#FDFBF7] rounded-lg shadow-sm border border-stone-200/80">
      <div className="p-5">
        <div className="flex items-center gap-4">
          <img src={post.avatarUrl} alt={post.author} className="w-12 h-12 rounded-full border-2 border-stone-200"/>
          <div>
            <p className="font-bold">{post.author}</p>
            <p className="text-stone-500 text-sm">@{post.handle}</p>
          </div>
        </div>

        <p className="my-4 text-stone-700 leading-relaxed">{post.content}</p>
      </div>

      {post.type === 'author_update' && (
        <div className="flex items-center gap-2 text-sm text-stone-700 bg-stone-100 p-3 border-t border-stone-200/80">
          <PenSquare size={16} className="text-[#3A4F41] flex-shrink-0" />
          <span>Currently working on <strong>{post.bookTitle}</strong></span>
        </div>
      )}
      
      <div className="flex items-center gap-6 text-stone-500 p-4 border-t border-stone-200/80">
        <button className="flex items-center gap-2 hover:text-[#AE8E6A] transition-colors">
          <ThumbsUp size={18}/> {post.likes}
        </button>
        <button className="flex items-center gap-2 hover:text-[#AE8E6A] transition-colors">
          <MessageSquare size={18}/> {post.comments}
        </button>
        <div className="flex-grow text-right text-xs text-stone-400">
            {post.timestamp}
        </div>
      </div>
    </div>
  );
}

