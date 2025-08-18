import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  if (!userData) {
    return <div className="p-8">Loading profile or no data found...</div>;
  }

  return (
    <div className="min-h-screen ">
      <div className="w-[375px] max-w-md mx-auto bg-white ">
        {/* Header */}
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold text-gray-800">Account Settings</h1>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Profile Info Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                className="w-20 h-20 rounded-full object-cover" 
                src="https://placehold.co/100x100/EFEFEF/333333?text=M" 
                alt="Profile" 
              />
              <div className="absolute bottom-0 right-0 bg-violet-600 rounded-full p-1 border-2 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">{userData.fullName}</h2>
              <p className="text-sm text-gray-500">{userData.email}</p>
            </div>
          </div>

          {/* Description Section */}
          <div>
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          
          {/* You can add more sections here */}

        </div>
      </div>
    </div>
  );
};
export default Profile;