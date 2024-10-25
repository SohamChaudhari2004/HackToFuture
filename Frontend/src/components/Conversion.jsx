// Conversion.jsx
import React from 'react';
import Card from './Card'; // Importing the Card component

// Conversion Component: Displaying multiple cards
export default function Conversion() {
  const cards = [
    {
      title: 'Convert to PNG',
      description:
        'Compress JPG, PNG, SVG, and GIFs while saving space and maintaining quality.',
    },
    {
      title: 'Convert to ---',
      description:
        'Define your dimensions, by percent or pixel, and resize your JPG, PNG, SVG, and GIF images.',
        icon : 'git1.jpg',
    },
    {
      title: 'Convert to ---',
      description:
        'Crop JPG, PNG, or GIFs with ease; Choose pixels to define your rectangle or use our visual editor.',
    },
    {
      title: 'Convert to JPG',
      description:
        'Turn PNG, GIF, TIF, PSD, SVG, WEBP, HEIC, or RAW format images to JPG in bulk with ease.',
        icon : 'imgtry1.png',
        link : '/convert-jpg',
    },
    {
      title: 'Convert from JPG',
      description:
        'Turn JPG images to PNG and GIF. Choose several JPGs to create an animated GIF in seconds!',
    },
    {
      title: 'Convert to ---',
      description:
        'Spice up your pictures with text, effects, frames or stickers. Simple editing tools for your image needs.',
    },
    {
      title: 'Convert to ---',
      description:
        'Enlarge your images with high resolution. Easily increase the size of your JPG and PNG images while maintaining visual quality.',
      isNew: true,
    },
    {
      title: 'Convert to ---',
      description:
        'Quickly remove image backgrounds with high accuracy. Instantly detect objects and cut out backgrounds with ease.',
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
