import React from 'react'

const About = () => {
  return (
    <div name="about"
    className="w-full h-full bg-gradient-to-b from-gray-800 to-black
    text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline-block border-b-4
                border-gray-500 mt-30 md:mt-30"
                >
                About
                </p>
            </div>
            <p className="text-xl">
               Welcome to <span className="font-bold text-gray-300">Justus</span> Portfolio website,
               my Names are <span className="font-bold text-gray-300">Justus Ejiofor Eze</span>. I am a B.Sc 
               holder in Plant Science and Biotechnology(Botany), Facaulty of Biological Sciences,
               University of Nigeria, Nsukka Enugu Nigeria. With a second class
               (<span className="font-bold text-gray-300">Uper Division</span>) honour. Field of specialization is Mycology/Agology.
            </p>

            <br />

            <p className="text-xl">
                i have always had a great passion to technologies, especially the the 
                field of web development. I started off from HTML to my current level of 
                programming language.
                i am driven with lots of zeal to learn more languages to improve myself and render 
                amazing services to all who need it.
                everyone makes mistakes, am ready to correct my bads and mistakes, feel free and
                reach out to me in the contact section.
                <span className="font-bold text-gray-300">Thanks </span>
            </p>
        </div>
    </div>
  )
}

export default About