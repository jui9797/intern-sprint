import Banner from "../components/Banner";

export default function Home({ message }) {
  return (
    <>
      <Banner />
      {/* Content Section */}
      <div className="p-5 bg-gray-100 border-2">
        <h1 className="text-purple-600 text-2xl font-semibold">Home Page</h1>
        <p className="text-gray-600 italic mt-2">{message}</p>
        <p className="font-bold text-3xl mt-4">Hello</p>
      </div>
    </>
  );
}
