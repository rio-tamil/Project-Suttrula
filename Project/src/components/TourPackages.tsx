import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const TourPackages = () => {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Replace with your actual API endpoint
    const fetchPackages = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/tour-packages/'); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Failed to fetch tour packages');
        }
        const data = await response.json();
        setPackages(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section id="tour-packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Tour Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg: any) => (
            <div key={pkg.id} className="border rounded-xl overflow-hidden shadow-lg">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{pkg.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-green-600 mr-2" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-green-600 mr-2" />
                    <span>{pkg.groupSize}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-green-600 mr-2" />
                    <span>{pkg.startDate}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">{pkg.price}</span>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
