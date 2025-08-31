import React, { useState } from 'react';
import { BookOpen, AtSign, KeyRound, User } from 'lucide-react';

export default function App () {
  const [isSignUp, setIsSignUp] = useState(false);

  // Common styles for form inputs for consistency
  const inputStyle = "w-full px-3 py-2 bg-transparent border-b-2 border-stone-300 focus:border-[#3A4F41] outline-none transition-colors duration-300 placeholder-stone-400";

  return (
    <div className="bg-[#F8F5F2] font-sans text-stone-800 antialiased min-h-screen flex items-center justify-center p-4" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-grunge.png')"}}>
      
      {/* --- Book Container --- */}
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg flex overflow-hidden flex-col md:flex-row min-h-[600px]">
        
        {/* --- Left Page (Brand/Welcome Message) --- */}
        <div className="w-full md:w-1/2 p-10 md:p-12 bg-[#5D4037] text-white flex flex-col justify-center items-center text-center">
          <BookOpen size={48} className="mb-4 text-[#AE8E6A]" />
          <h1 className="font-serif text-4xl font-bold mb-3">NovelNook</h1>
          <p className="text-stone-200 leading-relaxed">
            "A reader lives a thousand lives before he dies . . . The man who never reads lives only one."
          </p>
          <p className="mt-4 text-stone-300 text-sm font-style: italic">- George R.R. Martin</p>
        </div>

        {/* --- Right Page (Form) --- */}
        <div className="w-full md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
          <h2 className="font-serif text-3xl font-bold text-stone-800 mb-2">
            {isSignUp ? 'Create Your Account' : 'Welcome Back'}
          </h2>
          <p className="text-stone-500 mb-8">
            {isSignUp ? 'Begin your journey with us.' : 'Please sign in to continue.'}
          </p>

          <form className="w-full">
            <div className="space-y-6">
              {isSignUp && (
                <div className="relative">
                  <User className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
                  <input type="text" placeholder="Full Name" className={`${inputStyle} pl-8`} />
                </div>
              )}
              <div className="relative">
                <AtSign className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
                <input type="email" placeholder="Email Address" className={`${inputStyle} pl-8`} />
              </div>
              <div className="relative">
                <KeyRound className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
                <input type="password" placeholder="Password" className={`${inputStyle} pl-8`} />
              </div>
            </div>

            <button type="submit" className="w-full bg-[#AE8E6A] text-white py-3 rounded-md font-semibold mt-10 hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-px">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-stone-500">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <button onClick={() => setIsSignUp(!isSignUp)} className="font-semibold text-[#3A4F41] hover:underline ml-2">
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

