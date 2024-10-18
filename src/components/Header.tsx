import React from 'react';
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MVA Fund Data House</h1>
        <nav>
          <Button variant="outline" className="text-white border-white hover:bg-blue-700">Login</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;