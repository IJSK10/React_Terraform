import React from "react"

export const HomePage: React.FC = () => {
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Student Data App</h1>
      <p className="text-lg text-white mb-6">Use the navigation bar to manage student data.</p>
    </div>
  );
}