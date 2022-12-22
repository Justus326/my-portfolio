import React from 'react';
import unichatapp from '../assets/portfolio/unichatapp.jpeg';
import realestate from '../assets/portfolio/realestate.JPG';
import analogueClock from '../assets/portfolio/analogueClock.JPG';
import drumkit from '../assets/portfolio/drumkit.JPG';
import dashboard from '../assets/portfolio/dashboard.JPG';
import jscalculator from '../assets/portfolio/jscalculator.JPG';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: unichatapp,
            href1: "https://unichat-ochre.vercel.app/",
            href2: "https://github.com/Justus326/unichat.git"
        },
        {
            id: 2,
            src: drumkit,
            href1: "https://justus326.github.io/Drum-Kits/",
            href2: "https://github.com/Justus326/Drum-Kits.git"
        },
        {
            id: 3,
            href1: "https://justus326.github.io/analogue-clock/",
            href2: "https://github.com/Justus326/analogue-clock.git",
            src: analogueClock
        },
        {
            id: 4,
            href1: "https://j-best-dashboard.netlify.app/",
            href2: "https://github.com/Justus326/dashboard.git",
            src: dashboard
        },
        {
            id: 5,
            href1: "https://j-bestrealestate.netlify.app/",
            href2: "https://github.com/Justus326/j_best-realestate.git",
            src: realestate
        },
        {
            id: 6,
            href1: "https://justus326.github.io/Calculator-App/",
            href2: "https://github.com/Justus326/Calculator-App.git",
            src: jscalculator
        },
    ]


  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800
    w-full text-white h-full">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline-block border-b-4 border-gray-500 mt-30"
                >
                Portfolio
                </p>

                <p className="py-6">Check out some of my work right here</p>
            </div>              

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

            {
              portfolios.map(({id, src, href1, href2}) =>(
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">

                <img 
                src={src} 
                alt="" 
                className="rounded-md duration-200 hover:scale-105" 
                 />

                <div className="flex items-center justify-center">
                   <a href={href1} target="_blank" rel="noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gray-400">Demo</button>
                   </a>

                   <a href={href2} target="_blank" rel="noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gray-400">Code</button>
                  </a>
                    

                    
                </div>

            </div> 
              ))
              }                

            </div>

        </div>
    </div>
  )
}

export default Portfolio
