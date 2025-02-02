import React from 'react';
import { Search, MapPin, Calendar, Sun } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="images/adv_tour.jpeg"
          alt="Travel"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/70 to-blue-600/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
         Explore with Suttrula
        </h1>
        <p className="text-xl text-white mb-12">
        Where Every Journey Tells Story!   
        </p>

        <div className="bg-white rounded-lg p-6 shadow-lg max-w-4xl">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="text-orange-600" />
                <label htmlFor="location" className="font-medium text-gray-700">
                  Select Location
                </label>
              </div>
              <select
                id="location"
                name="location"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="iceland">Iceland</option>
                <option value="paris">Paris</option>
                <option value="tokyo">Tokyo</option>
                <option value="new-york">New York</option>
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Calendar className="text-orange-600" />
                <label htmlFor="duration" className="font-medium text-gray-700">
                  Select Duration
                </label>
              </div>
              <select
                id="duration"
                name="duration"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="3">3 Days</option>
                <option value="5">5 Days</option>
                <option value="7">7 Days</option>
                <option value="10">10 Days</option>
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Sun className="text-orange-600" />
                <label htmlFor="season" className="font-medium text-gray-700">
                  Best Time to Visit
                </label>
              </div>
              <select
                id="season"
                name="season"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="summer">Summer</option>
                <option value="winter">Winter</option>
                <option value="spring">Spring</option>
                <option value="fall">Fall</option>
              </select>
            </div>

            <div className="md:col-span-3">
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition duration-300 font-medium"
              >
                Explore Packages
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;