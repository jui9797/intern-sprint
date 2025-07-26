const Banner = () => {
  return (
    <div className="bg-[#7C5A4C] text-white text-center py-24 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to Our Website
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Discover the latest innovations and insights here.
      </p>
      <button className="bg-[#634538] hover:bg-white hover:text-black text-white border border-gray-100 px-6 py-3 rounded-md text-lg font-medium transition">
        Explore Now
      </button>
    </div>
  );
};

export default Banner;
