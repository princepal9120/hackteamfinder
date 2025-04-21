import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Code, Users, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FindTeammates from './pages/FindTeammates';
import Hackathons from './pages/Hackathons';
import Messages from './pages/Messages';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-teammates" element={<FindTeammates />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;