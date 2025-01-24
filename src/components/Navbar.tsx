import React from 'react';
import { Link } from 'react-router-dom';
import { Bot } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-16">
      <Link to="/" className="flex items-center space-x-2">
        <Bot className="w-8 h-8 text-blue-400" />
        <span className="text-2xl font-bold">JARVIS</span>
      </Link>
      <div className="space-x-8">
        <Link to="/features" className="hover:text-blue-400 transition-colors">Features</Link>
        <Link to="/security" className="hover:text-blue-400 transition-colors">Security</Link>
        <Link to="/download" className="hover:text-blue-400 transition-colors">Download</Link>
        <Link to="/download" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors">
          Get Started
        </Link>
      </div>
    </nav>
  );
}