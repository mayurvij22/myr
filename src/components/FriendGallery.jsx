import React from 'react';

// Example data
const friends = [
  { name: "Rahul", image: "https://photos.fife.usercontent.google.com/pw/AP1GczNoBYWnCVXa034elnBhtkv5LtJdXYvZ9jSneNJY7W6MAclIQa4LoLMH=w1004-h753-s-no-gm?authuser=0", story: "Goa trip 2024" },
  { name: "Sneha", image: "/images/sneha.jpg", story: "College fest" },
  { name: "Amit", image: "/images/amit.jpg", story: "Birthday bash" },
  { name: "Priya", image: "/images/priya.jpg", story: "Trek memories" },
  { name: "Manish", image: "/images/manish.jpg", story: "Old school days" },
  // Add more...
];

export default function FriendGallery() {
  return (
    <div className="p-8 bg-gradient-to-b from-pink-50 to-blue-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10">My Friend Gallery 📸</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {friends.map((friend, index) => {
          // random rotation between -6deg and +6deg
          const rotation = (Math.random() * 12 - 6).toFixed(2);
          return (
            <div
              key={index}
              className={`bg-white p-2 rounded shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
              style={{ rotate: `${rotation}deg` }}
            >
              <img
                src={friend.image}
                alt={friend.name}
                className="w-48 h-64 object-cover rounded"
              />
              <div className="text-center mt-2">
                <h3 className="text-lg font-semibold">{friend.name}</h3>
                <p className="text-sm text-gray-600">{friend.story}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
