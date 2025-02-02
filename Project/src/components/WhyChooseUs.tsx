import React from 'react';
import { Shield, Users, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: 'Safe & Secure',
    description: 'Your safety is our top priority with 24/7 support and trusted partners',
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: 'Expert Guides',
    description: 'Professional guides with extensive knowledge and experience',
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: 'Flexible Booking',
    description: 'Easy booking process with flexible payment options',
  },
  {
    icon: <Award className="w-12 h-12 text-blue-600" />,
    title: 'Best Price Guarantee',
    description: 'We offer competitive prices and value for money packages',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Suttrula</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;