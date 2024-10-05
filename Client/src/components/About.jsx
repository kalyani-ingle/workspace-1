import React from 'react';
import { Palette, Gem, Gift } from 'lucide-react';

const About = () => {

  const featureData = [
    {
      icon: Palette,
      title: "Artisan Crafted",
      description: "Every piece is handcrafted with brilliance, infused with care and attention to detail."
    },
    {
      icon: Gem,
      title: "Unique Creations",
      description: "From diyas to cardboard and paper items, each product is a one-of-a-kind masterpiece."
    },
    {
      icon: Gift,
      title: "Perfect for Any Occasion",
      description: "Embellished with mirrors, pearls, and more to add a touch of magic to your space."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-pink-100 via-magenta-100 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 text-center mb-12">
          Crafting Dreams into Reality
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8 md:p-10">
          <p className="text-gray-800 mb-6 leading-relaxed">
            Welcome to our world of handcrafted wonders! Every item in our collection is lovingly created by hand, one piece at a time.
          </p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            What makes our creations truly special is that they're all made singlehandedly by our skilled artisan. With years of experience and an eye for detail, our creator breathes life into each diya, cardboard creation, paper craft, and clay item, transforming simple materials into extraordinary pieces of art.
          </p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Our products range from delicate paper crafts to sturdy cardboard items and beautiful clay creations. Each piece is thoughtfully embellished with mirrors, pearls, and other decorative elements, making them perfect for any occasion - be it a festive celebration, a home decor upgrade, or a unique gift.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Our commitment to quality and personal touch means that when you bring one of our items into your home, you're not just getting a product – you're getting a piece of our heart and a story to tell.
          </p>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg p-6 text-center transform transition duration-500 hover:scale-105">
      <div className="flex justify-center mb-4">
        <Icon className="w-12 h-12 text-pink-500" />
      </div>
      <h3 className="text-xl font-semibold text-blue-700 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};


export default About;