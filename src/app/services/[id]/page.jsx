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
  return (
    <div>
      <h1>Service Details </h1>
      <p>ID : {id}</p>
      <p>Name : {singleData.name} </p>
      <img src={singleData.image} className="w-[400px] rounded-2xl" />
      <p>Vendor : {singleData.vendor}</p>
    </div>
  );
}
