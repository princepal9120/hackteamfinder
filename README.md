# HackTeamFinder

HackTeamFinder is a web3-enabled platform that connects developers, designers, and blockchain enthusiasts for hackathon collaborations. Find the perfect teammates based on skills, experience, and availability to build winning projects together.

## Features

- **Web3 Authentication**: Secure wallet-based authentication system
- **Profile Management**: Create and manage detailed developer profiles
- **Advanced Search**: Find teammates based on skills, experience, and availability
- **Real-time Messaging**: Direct communication with potential teammates
- **Hackathon Directory**: Browse and join upcoming hackathon events
- **Team Formation**: Create or join teams with compatible members
- **Skill Matching**: Smart compatibility scoring system

## Tech Stack

- React 18 with TypeScript
- Tailwind CSS for styling
- Ethers.js for Web3 integration
- React Router for navigation
- Supabase for backend services
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- A Web3 wallet (e.g., MetaMask)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hack-team-finder.git
```

2. Navigate to the project directory:
```bash
cd hack-team-finder
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file in the root directory and add your environment variables:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
hack-team-finder/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page components
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── public/              # Static assets
└── ...config files
```

## Features in Detail

### User Profiles
- Technical skills selection
- Experience level indication
- Previous hackathon history
- Current/upcoming hackathon interests
- Time zone and location
- GitHub and portfolio links
- Preferred roles and contributions
- Languages spoken
- Availability status

### Search & Filter System
- Filter by technical skills
- Filter by hackathon event
- Filter by location/timezone
- Filter by experience level
- Advanced multi-criteria search

### Matching System
- Direct messaging
- Team formation requests
- Skill compatibility scoring
- Availability matching

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://github.com/yourusername/hack-team-finder](https://github.com/yourusername/hack-team-finder)

## Acknowledgments

- [Ethers.js](https://docs.ethers.org/v6/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [Lucide Icons](https://lucide.dev/)
