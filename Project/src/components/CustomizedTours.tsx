import React, { useState } from 'react';
import { Calendar, Map, Compass, Plane } from 'lucide-react';
import axios from 'axios';

const CustomizedTours = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [duration, setDuration] = useState(1);
  const [interests, setInterests] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const tourData = {
      destination,
      start_date: startDate,
      duration,
      interests,
    };

    axios.post('http://localhost:8000/api/customized-tour/', tourData)
      .then(response => {
        alert('Custom tour requested successfully!');
      })
      .catch(error => {
        console.error('Error requesting custom tour:', error);
      });
  };

  return (
    <section id="customized-tours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Create Your Perfect Trip</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Why Choose Custom Tours?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[{
                  icon: <Calendar className="w-8 h-8 text-green-600" />,
                  title: 'Flexible Dates',
                  description: 'Travel on your preferred dates',
                },
                {
                  icon: <Map className="w-8 h-8 text-green-600" />,
                  title: 'Custom Itinerary',
                  description: 'Design your perfect route',
                },
                {
                  icon: <Compass className="w-8 h-8 text-green-600" />,
                  title: 'Personal Interests',
                  description: 'Focus on what you love most, whether it’s history, adventure, or relaxation',
                },
                {
                  icon: <Plane className="w-8 h-8 text-green-600" />,
                  title: 'Travel Style',
                  description: 'Choose your comfort level, from budget to luxury',
                }].map((feature, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl">
                  {feature.icon}
                  <h4 className="text-lg font-semibold mt-4 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 mt-2 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Request Your Custom Tour</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="destination" className="block text-lg font-medium">Destination</label>
                  <input
                    type="text"
                    id="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Where would you like to go?"
                  />
                </div>
                <div>
                  <label htmlFor="start-date" className="block text-lg font-medium">Start Date</label>
                  <input
                    type="date"
                    id="start-date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="duration" className="block text-lg font-medium">Duration (Days)</label>
                  <input
                    type="number"
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full px-4 py-2 border rounded-md"
                    min="1"
                  />
                </div>
                <div>
                  <label htmlFor="interests" className="block text-lg font-medium">Personal Interests</label>
                  <input
                    type="text"
                    id="interests"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="What are your interests?"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full py-3 bg-green-600 text-white font-semibold rounded-md"
                >
                  Submit Tour Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizedTours;
