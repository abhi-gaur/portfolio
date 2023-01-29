import React from 'react'

const About = () => {
  return (
    <div name="about" 
    className="w-full h-screen bg-gradient-to-b from-gray-800
    to-black text-white ">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
         w-full h-full">

            <div className="pb-8" >

               <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p> 
            
            </div>

            <p className="text-2xl mt-20 text-gray-500 hover:text-gray-200 italic text-justify">
            I am from gwalior, I belong to nuclear family, I have done my 10 and 12 from S.J.V.S From C.B.S.E BOARD , Gwalior .
            I have done my UG from PIMG Gwalior and now currently Pursuing Masters from ITM Gwalior In MCA .
            I have keen Interest in C++ AND MERN STACK . I have done Certain Projects on it as Well 
            My hobbies are Internet surfing ,playing guitar and I love to travel.
            That's all about me , thank you  ! 
            </p>
            {/* <br/>
            <p className="text-xl">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Veritatis et dolores eos blanditiis?
               Amet, odit distinctio consectetur tempora laudantium error et illo voluptatem
               dicta perspiciatis iste quibusdam repudiandae expedita accusamus, deleniti facilis ea.
               Libero, quidem ipsa sequi nisi quo minus assumenda explicabo pariatur eos numquam officiis nesciunt consequuntur, eum et!   
            </p> */}
        </div>
    </div>
  )
}

export default About