import React from 'react';

const Hackathons = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Upcoming Hackathons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/7376/startup-photos.jpg"
            alt="Hackathon event"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-white font-semibold text-xl mb-2">ETHGlobal London</h3>
            <p className="text-white/60 mb-4">Build the future of web3 with developers from around the world</p>
            <div className="flex justify-between items-center">
              <span className="text-white/80">Mar 15-17, 2024</span>
              <button className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hackathons;