import React, { useEffect, useState } from 'react';
import { Users, Calendar, Star } from 'lucide-react';

interface GroupTour {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  nextDate: string;
  duration: string;
  price: string;
}

const GroupTours = () => {
  const [groupTours, setGroupTours] = useState<GroupTour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Replace the URL with your API endpoint
    fetch('https://api.example.com/group-tours')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        return response.json();
      })
      .then((data) => {
        setGroupTours(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="group-tours" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Loading...</h2>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="group-tours" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Error: {error}</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="group-tours" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Join Our Group Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groupTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src={tour.image}
                  alt={`Image of the ${tour.title}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
                  <span className="text-sm font-semibold">{tour.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{tour.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{tour.nextDate}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{tour.reviews} reviews</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">Duration:</span>
                    <span>{tour.duration}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <div>
                    <span className="text-sm text-gray-500">From</span>
                    <p className="text-lg font-bold text-green-600">{tour.price}</p>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition-colors">
                    View Details
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

export default GroupTours;
