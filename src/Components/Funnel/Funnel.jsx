import React from 'react'
import img from '../../Assets/funnel.png'

const Funnel = () => {
  return (
    <div className="w-full py-24 px-6 sm:px-4 md:px-8 flex flex-col items-center justify-center">
      <div className="text-center max-w-[853px]">
        <h2 className="text-4xl font-semibold text-[#261234] leading-[56px]">
          An Integrated Team for unique Web design and strategic digital marketing
        </h2>
        <p className="text-[#433E47] text-base leading-6 mt-4">
          Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan.
        </p>
      </div>
      <div className="mt-12 w-3/4 sm:w-4/5 md:w-1/2">
        <img src={img} alt="Funnel" className="w-full" />
      </div>
    </div>
  )
}

export default Funnel
