import React from 'react'

const Jokes = ({ data, index }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-gray-950 flex items-center justify-center p-6">
      
      <div className="w-full max-w-2xl rounded-3xl border border-slate-700/40 bg-slate-900/70 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.6)] p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(99,102,241,0.35)]">
        
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Joke {index + 1}
          </h1>

          <span className="px-4 py-1 rounded-full text-sm font-medium bg-slate-800 text-slate-300 border border-slate-700">
            {data.categories.length > 0 ? data.categories : "Random"}
          </span>
        </div>

        <div className="space-y-4">
          <p className="text-slate-300 leading-8 text-lg">
            {data.content}
          </p>
        </div>

      </div>
    </div>
  )
}

export default Jokes