import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import axios from 'axios';

const Destinations = () => {
  const [destinations, setDestinations] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from Django API
    axios.get('http://localhost:8000/api/destinations/')
      .then(response => {
        setDestinations(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching destinations');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Loading Destinations...</h2>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{error}</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="text-xl font-semibold">{destination.name}</h3>
                </div>
                <p className="text-gray-600">{destination.description}</p>
                <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
