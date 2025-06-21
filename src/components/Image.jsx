import React from 'react';

export default function Image() {
  return (
    <div>
      <img
        src="/profile.jpg" // ✅ image is in public/
        alt="Profile"
        className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-xl"
      />
    </div>
  );
}
