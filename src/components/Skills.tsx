import React from 'react';
import {FaReact, FaAws, FaJava, FaDocker } from 'react-icons/fa';



const skillIcons = [

  {icon: <FaReact size={130}/>, label: "React"},
  {icon: <FaAws size={140}/>, label: "AWS"},
  {icon: <FaJava size={110}/>, label: "Java"},
  {icon: <FaDocker size={140}/>, label: "Docker"},
]

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
      <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
        <h2 className='text-6xl font-bold mb-4'>What I Do</h2>
        <div className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-6'>
          {skillIcons.map ((skill, index) => (
            <div
              key={index}
              className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                {skill.icon}
                <p className='mt-2'>{skill.label}</p>
            </div>
          ))}
        </div>
        <h2 className='mt-12 text-6xl font-bold mb-4'>And Much Moreeee</h2>
      </div>
    </div>
  )
}

export default Skills