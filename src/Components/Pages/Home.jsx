import React from 'react'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import heroImage from "../../assets/heroImage.png"

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800
     ">

        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4
        md:flex-row ">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-6xl font-bold text-white md:mt-6 sm:mt-4">
                    I'm a Front End Developer</h2>
                <p className="text-gray-500 py-4 max-w-md">
                    Currently , Pursuing MCA From ITM GWALIOR.<br/>
                    I Love to work On web application using 
                    Technologies like
                    React, Node , TailwindCSS, JavaScript and More.<br/>
                    Brushing Up my skills in Web development. Learning New Techs By MySelf.
                </p> 
                <div>
                   <button className="text-white w-fit px-6 py-3 my-2 flex items-center 
                   rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group">
                    Projects
                    <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight className="ml-1" />
                    </span>
                   </button>
                </div>
            </div>

           <div className=" max-w-md" >
            <img src={heroImage} alt="my profile" 
            className=""/>
           </div>




        </div>
    </div>
  )
}

export default Home;