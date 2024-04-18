import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function LandDetails() {
  const { id } = useParams(); 
  const [land, setLand] = useState(null);

  // Dummy Data for Land Details
  const dummyLands = // Match the structure of your main dummy data
    {
      _id: '1',
      title: "Prime Lakeside Property",
      description: "Beautiful plot with stunning lake views.  Ideal for residential development or a peaceful retreat.",
      price: 250000,
      location: "Lakewood, CA",
      image: ["https://via.placeholder.com/600x400"], // Larger image
      size: 2000,
      whyInvest: "Potential for development or a peaceful retreat. Close proximity to lake amenities."
    };
    // ... more detailed land objects
  

  useEffect(() => {
    // Find the land object with the matching ID
    setLand(dummyLands);
  }, []);

  return (
    <div className=" w-full min-h-screen bg-black mx-auto p-6">
      {land ? (
        <div className="bg-black text-white border-2 flex flex-col items-center justify-center shadow-md rounded-md p-5"> 
          <img src={land.image[0]} alt={land.title} className=" h-64 object-cover mb-4 rounded-t-md" />
          <h2 className="text-3xl font-bold mb-3">{land.title}</h2>
          <p className="text-white mb-2">Price: ${land.price}</p>
          <p className="text-white mb-2">Location: {land.location}</p>
          <p className="text-white mb-4">{land.description}</p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Why Invest?</h3>
            <p className="text-white">{land.whyInvest}</p>
          </div>
        </div>
      ) : (
        <div>Loading land details...</div>
      )}
    </div>
  );
}

export default LandDetails;
