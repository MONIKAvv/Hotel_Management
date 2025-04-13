import React, { useState } from "react";
import Model from "./model";

export default function Room({ room }) {
  const [show, setShow] = useState(false)

  const handlemodelOpen = () => {
setShow(true);
  }
  const handlemodelClose = () => {
setShow(false);
  }
  
  return (
    <div className="w-full flex justify-center items-center p-6">
    <div className="flex w-[70%] max-w-5xl h-[20rem] border border-gray-300 rounded-2xl shadow-lg overflow-hidden">
      
      {/* Image Section */}
      <div className="w-1/2 h-full">
        <img 
          src={room.image[0]} 
          alt="room" 
          className="w-full h-full object-cover" 
        />
      </div>
  
      {/* Details Section */}
      <div className="w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-2">{room.name}</h1>
          <p className="text-gray-700 mb-1 font-bold">Max Count: <span className="font-medium">{room.maxCount}</span></p>
          <p className="text-gray-700 mb-1 font-bold">Phone Number: <span className="font-medium">{room.phoneNumber}</span></p>
          <p className="text-gray-700 font-bold">Room Type: <span className="font-medium">{room.type}</span></p>
        </div>
  
        <div className="mt-4 flex justify-end mr-10">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300" onClick={handlemodelOpen}>
            View Details
          </button>
        </div>
      </div>
    </div>
<div>
  
</div>
    {show && <Model show={show} handlemodel= {handlemodelClose} room={room} />}
  </div>
  
  );
}
