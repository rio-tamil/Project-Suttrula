import React, { useEffect, useState } from 'react';

const PopularTours = () => {
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Replace this URL with the actual API endpoint
    const fetchTours = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/tours/'); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Tour Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour: any) => (
            <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{tour.duration}</span>
                  <span className="text-blue-600 font-bold">from {tour.price}</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularTours;
