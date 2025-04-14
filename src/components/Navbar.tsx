
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Menu, X, User, Bell } from "lucide-react";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-pulse-purple rounded-full animate-pulse-slow"></div>
            <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
              <span className="text-pulse-purple font-bold text-sm">P</span>
            </div>
          </div>
          <span className="text-2xl font-bold text-gradient">Pulse</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/events" className="font-medium hover:text-pulse-purple transition-colors">Events</Link>
          <Link to="/venues" className="font-medium hover:text-pulse-purple transition-colors">Venues</Link>
          <Link to="/artists" className="font-medium hover:text-pulse-purple transition-colors">Artists</Link>
          <Link to="/about" className="font-medium hover:text-pulse-purple transition-colors">About</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <User size={20} />
          </Button>
          <Button>Sign In</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-40 bg-background backdrop-blur-lg transition-transform duration-300 transform md:hidden pt-20",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="container mx-auto px-4 py-6 flex flex-col space-y-6">
          <Link to="/events" className="text-2xl font-medium hover:text-pulse-purple transition-colors">Events</Link>
          <Link to="/venues" className="text-2xl font-medium hover:text-pulse-purple transition-colors">Venues</Link>
          <Link to="/artists" className="text-2xl font-medium hover:text-pulse-purple transition-colors">Artists</Link>
          <Link to="/about" className="text-2xl font-medium hover:text-pulse-purple transition-colors">About</Link>
          <div className="h-px bg-border my-4"></div>
          <Button className="w-full" size="lg">Sign In</Button>
          <div className="flex justify-between mt-4">
            <Button variant="outline" size="icon">
              <Search size={20} />
            </Button>
            <Button variant="outline" size="icon">
              <Bell size={20} />
            </Button>
            <Button variant="outline" size="icon">
              <User size={20} />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
