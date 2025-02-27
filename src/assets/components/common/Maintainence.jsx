import React from "react";
import { Wrench, AlertCircle } from "lucide-react";

const Maintainence = () => {
  return (
    <div className="pt-[96px] w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex justify-center gap-4 mb-6">
          <Wrench className="w-12 h-12 md:w-16 md:h-16 text-blue-600 animate-bounce" />
          <AlertCircle className="w-12 h-12 md:w-16 md:h-16 text-blue-600 animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Under Maintenance
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          We're currently working on this page to serve you better.
          Please check back soon!
        </p>
        <div className="h-2 w-48 bg-blue-600 mx-auto rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Maintainence;