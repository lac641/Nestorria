import React, { useState } from 'react'
import { dummyProperties } from '../assets/data' // ✅ import your dummy data

const PropertyImages = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0) // initially first image is expanded

  // ✅ Get the first property’s images from dummyProperties
  const property = dummyProperties[0] // you can change [0] to another property index
  const images = property.images

  const imageCaptions = [
    {
      heading: 'Front View',
      desc: 'Experience a stunning first impression with elegant curb appeal.',
    },
    {
      heading: 'Living Area',
      desc: 'Spacious interiors designed for comfort and style.',
    },
    {
      heading: 'Master Bedroom',
      desc: 'A private retreat featuring comfort, light, and relaxation.',
    },
    {
      heading: 'Modern Kitchen',
      desc: 'Fully equipped kitchen with sleek finishes and modern appliances.',
    },
  ]

  return (
    <div className="flex gap-2"> {/* ✅ added flex so images line up properly */}
      {images.map((pImg, index) => {
        const caption = imageCaptions[index]
        const isHovered = hoveredIndex === index

        return (
          <div
            key={index}
            className={`relative group transition-all duration-500 h-[400px] overflow-hidden rounded-2xl ${
              isHovered ? 'flex-grow w-full' : 'max-sm:w-10 max-md:w-20 w-56'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(0)} // revert to first image
          >
            <img
              src={pImg}
              alt=""
              className="w-full h-full object-cover object-center rounded-2xl"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl">
              <h3 className="h3">{caption.heading}</h3>
              <p className="text-white/90">{caption.desc}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PropertyImages
