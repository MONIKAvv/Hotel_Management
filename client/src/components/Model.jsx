import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Carousel,
} from "@material-tailwind/react";

export default function Model({ show, room, handlemodel }) {
  return (
    <div className="flex justify-center items-center">
    <Dialog
      open={show}
      handler={handlemodel}
      className="w-[40%] !max-w-none mx-auto bg-gradient-to-br from-[#1e293b] to-[#425167] text-white rounded-xl shadow-2xl p-6"
    >
      <DialogHeader className="text-2xl font-bold text-white border-b border-gray-600">
        {room?.name || "Room Details"}
      </DialogHeader>
  
      <DialogBody className="text-white space-y-4 flex flex-col items-center">
        <div className="w-full h-60 rounded-lg overflow-hidden">
          <Carousel
            autoplay
            loop
            className="h-full w-full rounded-lg"
            transition={{ duration: 0.5 }}
          >
            {room?.image?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Room image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ))}
          </Carousel>
        </div>
  
        <p className="text-sm text-gray-300 italic mt-2 text-center">
          "Enjoy your stay with comfy vibes and modern amenities."
        </p>
      </DialogBody>
  
      <DialogFooter className="flex gap-4 items-center border-t border-gray-600 pt-4">
        <Button
          variant="text"
          color="red"
          onClick={handlemodel}
          className="bg-red-300 p-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          <span>Cancel</span>
        </Button>
        <Button
          variant="gradient"
          color="green"
          onClick={handlemodel}
          className="bg-green-300 p-2 rounded-md hover:bg-green-700 transition duration-300"
        >
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  </div>
  
  );
}
