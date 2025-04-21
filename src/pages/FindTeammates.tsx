import React from 'react';
import { Search, Filter } from 'lucide-react';

const FindTeammates = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Find Teammates</h1>
      <p className="text-white/80 mb-8">Discover potential teammates for your next hackathon</p>
      
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-white/60" />
            <input
              type="text"
              placeholder="Search by name, skills, or bio..."
              className="w-full bg-white/5 text-white placeholder-white/60 rounded-lg pl-10 pr-4 py-2 border border-white/20 focus:outline-none focus:border-white/40"
            />
          </div>
          <select className="bg-white/5 text-white border border-white/20 rounded-lg px-4 py-2">
            <option value="relevant">Most Relevant</option>
            <option value="recent">Most Recent</option>
            <option value="experienced">Most Experienced</option>
          </select>
          <button className="flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30">
            <Filter className="h-5 w-5" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for user cards - will be populated with real data */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div>
              <h3 className="text-white font-semibold">Ankit Kumar</h3>
              <p className="text-white/60 text-sm">Full Stack Developer</p>
            </div>
          </div>
          <button className="w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/30">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default FindTeammates;