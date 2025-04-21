import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Code2, Globe, Zap, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">
              Find the Perfect Team for your Next Web3 Hackathon
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8">
              Connect with skilled developers, designers, and blockchain enthusiasts to build amazing projects and win hackathons together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/hackathons"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/30 transition-all w-full sm:w-auto"
              >
                Browse Hackathons
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/find-teammates"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all w-full sm:w-auto"
              >
                Find Teammates
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 w-full max-w-2xl lg:max-w-none mx-auto">
            <div className="relative aspect-video sm:aspect-[4/3] lg:aspect-[16/10]">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl">
              <img
                src={'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'}
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
                loading="lazy"
              />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-16">
          Why Choose HackTeamFinder?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Skilled Teammates</h3>
            <p className="text-sm sm:text-base text-white/70">
              Connect with verified developers, designers, and blockchain experts.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Web3 Native</h3>
            <p className="text-sm sm:text-base text-white/70">
              Built for Web3 builders with wallet-based authentication.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Global Community</h3>
            <p className="text-sm sm:text-base text-white/70">
              Join a worldwide network of blockchain enthusiasts and innovators.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Win Together</h3>
            <p className="text-sm sm:text-base text-white/70">
              Form balanced teams with complementary skills to succeed in hackathons.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Ready to find your dream team?
        </h2>
        <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8">
          Connect your wallet now and start exploring upcoming hackathons or find teammates with the skills you need.
        </p>
        <Link
          to="/hackathons"
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/30 transition-all w-full sm:w-auto"
        >
          Explore Hackathons
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-white" />
            <span className="text-white font-semibold">HackTeamFinder</span>
          </div>
          <p className="text-white/60 text-sm text-center sm:text-left">
            © 2025 HackTeamFinder. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;