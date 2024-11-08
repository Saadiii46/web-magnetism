import React from 'react'
import arrow from '../../Assets/arrow.png'

const Hero = () => {
  return (
    <div className="w-full min-h-[700px] bg-gradient-to-r from-[#5b53f9] via-[#ac71d6] to-[#ff8e57] text-white flex items-center justify-center px-5 box-border">
      <div className="mt-[-250px] text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-semibold md:text-4xl sm:text-3xl">WEB MAGNETISM</h1>
        <p className="max-w-md mx-auto my-4 leading-relaxed text-lg sm:text-base">
          Transforming Businesses with unique Web design and strategic digital marketing for impactful online visibility.
        </p>
        <button className="flex items-center px-6 py-2 mt-4 text-white transition-colors duration-200 border-2 border-white rounded-[100px] cursor-pointer bg-gradient-to-r from-[#f24ab1] to-[#ff66c4] hover:opacity-90 mx-auto">
  GET A PROPOSAL
  <img src={arrow} alt="" className="ml-2" />
</button>

      </div>
    </div>
  )
}

export default Hero
