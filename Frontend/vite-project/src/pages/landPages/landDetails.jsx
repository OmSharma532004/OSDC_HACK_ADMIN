import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function LandDetails() {
  const url = window.location.href;
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);
  const id = params.get('id');
  const [land, setLand] = useState(null);

  const fetchLandsById = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/lands/getLandbyid/${id}`);
      const data = await response.json();
      setLand(data);
    } catch (error) {
      console.error('Error fetching lands:', error);
    }
  };

  useEffect(() => {
    fetchLandsById();
  }, []);

  // const [tenancy, setTenancy] = useState({});
  const [tenancy, setTenancy] = useState({ about: '', leaseDetails: '' });
  const [addTenancy, setAddTenancy] = useState(false);

 

  return (
    <div className="w-full min-h-screen bg-black mx-auto p-6">
      {land ? (
        <div className="bg-black text-white border-2 flex flex-col items-center justify-center shadow-md rounded-md p-5"> 
          <img src={land.image[0]} alt={land.title} className="h-64 object-cover mb-4 rounded-t-md" />
          <h2 className="text-3xl font-bold mb-3">{land.title}</h2>
          <p className="text-white mb-2">Price: ${land.price}</p>
          <p className="text-white mb-2">Location: {land.location}</p>
          <p className="text-white mb-4">{land.description}</p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Why Invest?</h3>
            <p className="text-white">{land.whyInvest}</p>
          </div>
          {land.isApproved ? <p className="text-green-500">Approved</p> : <p className="text-red-500">Not Approved</p>}
          <button onClick={() => setAddTenancy(true)}>Add Tenancy Details</button>
          {addTenancy && (
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
              <div className='bg-white p-5 rounded flex flex-col items-center justify-center gap-4 relative'>
                <button className="absolute top-2 right-2 text-xl font-bold" onClick={() => setAddTenancy(false)}>&times;</button>
                <input value={tenancy.about} type="text" placeholder="About Tenancy" className='text-black ' onChange={(e) => setTenancy({ ...tenancy, about: e.target.value })} />
                <input value={tenancy.leaseDetails} type="text" placeholder="Lease Details" className='text-black ' onChange={(e) => setTenancy({ ...tenancy, leaseDetails: e.target.value })} />
                <button className='text-black ' onClick={() => setAddTenancy(false)}>Save</button>
                <button className="text-black" onClick={() => setAddTenancy(false)}>Cancel</button>
              </div>
            </div>
          )}
          {/* tenancy && (
            <div>
              <h3>About Tenancy</h3>
              <p>{tenancy.about}</p>
              <h3>Lease Details</h3>
              <p>{tenancy.leaseDetails}</p>
          </div>)*/
          }
        </div>
      ) : (
        <div>Loading land details...</div>
      )}
    </div>
  );
}

export default LandDetails;
