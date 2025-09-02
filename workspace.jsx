import React from 'react';
import { ShoppingCart } from 'lucide-react';

// =================================================================
// Mock Data for Bookstore
// =================================================================
const mockBooks = [
    { id: 1, title: 'The Crimson Cipher', author: 'Jane Doe', price: 14.99, coverUrl: 'https://placehold.co/400x600/a34a4a/FFFFFF?text=The+Crimson+Cipher' },
    { id: 2, title: 'Galaxy Drifters', author: 'John Smith', price: 9.99, coverUrl: 'https://placehold.co/400x600/4a6aa3/FFFFFF?text=Galaxy+Drifters' },
    { id: 3, title: 'Alchemy & Algorithms', author: 'Alex Ray', price: 19.99, coverUrl: 'https://placehold.co/400x600/6aa34a/FFFFFF?text=Alchemy+%26+Algorithms' },
    { id: 4, title: 'Echoes of Yesterday', author: 'Emily White', price: 12.50, coverUrl: 'https://placehold.co/400x600/a34a9b/FFFFFF?text=Echoes+of+Yesterday' },
];

// =================================================================
// Component: BookCard
// =================================================================
const BookCard = ({ book }) => (
    <div className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden flex flex-col group">
        <div className="overflow-hidden">
             <img src={book.coverUrl} alt={`Cover of ${book.title}`} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"/>
        </div>
        <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-gray-800 truncate">{book.title}</h3>
            <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
            <p className="text-xl font-semibold text-purple-600 mt-auto mb-4">${book.price}</p>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2">
                <ShoppingCart size={18}/> Add to Cart
            </button>
        </div>
    </div>
);

// =================================================================
// Page: BookstorePage
// =================================================================
export default function BookstorePage({ onNavigate }) {
    return (
        <div className="min-h-screen bg-gray-50">
             <header className="bg-white shadow-sm p-4 flex justify-between items-center z-10">
                <h1 className="text-2xl font-bold text-purple-600 flex items-center gap-3"><ShoppingCart/> NovelNook Bookstore</h1>
                <div>
                     <button onClick={() => onNavigate('projectHub')} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition duration-200">
                        Back to My Projects
                    </button>
                </div>
            </header>
            <main className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {mockBooks.map(b => <BookCard key={b.id} book={b} />)}
                </div>
            </main>
        </div>
    );
};
