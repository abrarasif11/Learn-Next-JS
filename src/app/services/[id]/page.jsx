import React from "react";

export default function ServiceDetailsPage({ params }) {
  const data = [
    {
      _id: 1,
      name: "Food Delivery",
      description:
        "Fast and reliable delivery of meals from nearby restaurants.",
      category: "Food",
      priceRange: "100-500",
      rating: 4.6,
      isAvailable: true,
      vendor: "Foodie Express",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
    {
      _id: 2,
      name: "Event Catering",
      description:
        "Professional catering services for weddings, birthdays, and corporate events.",
      category: "Event",
      priceRange: "5000-20000",
      rating: 4.8,
      isAvailable: true,
      vendor: "Royal Caterers",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
    {
      _id: 3,
      name: "Decoration Service",
      description:
        "Customized decoration packages for parties and special occasions.",
      category: "Event",
      priceRange: "3000-15000",
      rating: 4.4,
      isAvailable: false,
      vendor: "Dream Decor",
      image: "https://images.unsplash.com/photo-1511798616182-aab3698ac53e",
    },
    {
      _id: 4,
      name: "Cleaning Service",
      description: "Home and office cleaning services on demand.",
      category: "Household",
      priceRange: "800-3000",
      rating: 4.2,
      isAvailable: true,
      vendor: "CleanUp BD",
      image:
        "https://plus.unsplash.com/premium_photo-1667520405114-47d3677f966e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW5pbmclMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const id = parseInt(params.id);
  const singleData = data.find((d) => d._id === id);

  if (!singleData) {
    return (
      <p className="text-center text-red-600 text-xl">Service not found 🚫</p>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Service Details</h1>
      <p className="mb-2">ID : {id}</p>
      <p className="mb-2 font-semibold">Name : {singleData.name}</p>
      <img
        src={singleData.image}
        alt={singleData.name}
        className="w-[400px] rounded-2xl mb-4"
      />
      <p className="mb-2">Vendor : {singleData.vendor}</p>
      <p className="text-gray-600">{singleData.description}</p>
    </div>
  );
}
