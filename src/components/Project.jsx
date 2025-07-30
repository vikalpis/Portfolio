import { useEffect, useState } from "react"
import {  Link, MoveUpRight } from "lucide-react";


export default function Project(){
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    setTimeout(() => setVisible(true), 500);
  },[])
    return (
        <>
        <div className="font-bold text-3xl leading-loose bg-transparent text-white px-2">Projects</div>
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 text-white bg-transparent px-2 `}>

 {/*1st */}           
  <div className={`transition-all duration-500 hover:scale-105 cursor-pointer w-full bg-black border rounded-3xl ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
    <p className="font-bold text-lg p-4 pt-8 ">
      Project Name
    </p>
    
    <p className="p-4 leading-tight text-justify">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, eaque sapiente voluptas ullam officia amet nesciunt laboriosam vol
    </p>

    {/* Button container with spacing and responsive left margin */}
    <div className="flex gap-4 ml-4 sm:ml-4 md:ml-8 mb-2.5 ">
      <button className="transition-all duration-500 hover:scale-x-125 rounded-lg p-2 bg-transparent"><Link/></button>
      <button className="transition-all duration-500 hover:scale-x-125 rounded-lg p-2 bg-transparent"><MoveUpRight/></button>
    </div>
  </div>
 {/*2nd */}
 <div className={`transition-all duration-500 hover:scale-105 cursor-pointer w-full bg-black border rounded-3xl ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
 <p className="font-bold text-lg p-4 pt-8 ">
      Project Name
    </p>
    
    <p className="p-4 leading-tight text-justify">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, eaque sapiente voluptas ullam officia amet nesciunt laboriosam vol
    </p>

    {/* Button container with spacing and responsive left margin */}
    <div className="flex gap-4 ml-4 sm:ml-4 md:ml-8 mb-2.5">
    <button className="transition-all duration-500 hover:scale-x-125 rounded-lg p-2 bg-transparent"><Link/></button>
    <button className="transition-all duration-500 hover:scale-x-125 rounded-lg p-2 bg-transparent"><MoveUpRight/></button>
    </div>
  </div>

{/*3rd */}
<div className={`transition-all duration-500 hover:scale-105 cursor-pointer w-full bg-black border rounded-3xl ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
  <p className="font-bold text-lg p-4 pt-8 ">
      Project Name
    </p>
    
    <p className="p-4 leading-tight text-justify">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, eaque sapiente voluptas ullam officia amet nesciunt laboriosam vol
    </p>

    {/* Button container with spacing and responsive left margin */}
    <div className="flex gap-4 ml-4 sm:ml-4 md:ml-8 mb-2.5">
    <button className="transition-all duration-500 hover:scale-x-125 rounded-lg p-2 bg-transparent"><Link/></button>
    <button className="transition-all duration-500 hover:scale-x-125 rounded-lg p-2 bg-transparent"><MoveUpRight/></button>
    </div>
  </div>

{/*4th */}
<div className={`transition-all duration-500 hover:scale-105 cursor-pointer w-full bg-black border rounded-3xl ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
  <p className="font-bold text-lg p-4 pt-8 ">
      Project Name
    </p>
    
    <p className="p-4 leading-tight text-justify">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, eaque sapiente voluptas ullam officia amet nesciunt laboriosam vol
    </p>

    {/* Button container with spacing and responsive left margin */}
    <div className="flex gap-4 ml-4 sm:ml-4 md:ml-8 mb-2">
    <button className="transition-all duration-500 hover:scale-x-125 rounded-lg p-2 bg-transparent "><Link/></button>
    <button className="transition-all duration-500 hover:scale-x-125 rounded-lg p-2 bg-transparent"><MoveUpRight/></button>
    </div>
  </div>
</div>
        </>
    )
}