import { useEffect, useState } from "react"
import {  Link, MoveUpRight } from "lucide-react";


export default function Project(){
  
    return (
        <>
        <div className="font-bold text-3xl leading-loose bg-transparent text-white px-2">Projects</div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white bg-transparent px-2">

 {/*1st */}           
  <div className= "transition-all duration-500 hover:scale-105 cursor-pointer w-full bg-black border rounded-3xl  hover:bg-gradient-to-br from-white/55 to-black ">
    <p className="font-bold text-lg p-4 pt-8 ">
      TrackMyMood
    </p>
    
    <p className="p-4 leading-tight text-justify text-white/85">
    TrackMyMood is a web application that helps users log and track their daily moods. It provides visual insights, supports mental health awareness, and promotes emotional well-being through interactive charts, mood entries, and an intuitive, user-friendly interface.
    </p>

    <div className="flex gap-4 ml-4 sm:ml-4 md:ml-8 mb-2.5 ">
      <a href="https://github.com/vikalpis/TrackMyMood" target="_blank" className="transition-all duration-500 hover:scale-x-125 rounded-lg p-2 bg-transparent"><Link/></a>
      <a href="https://track-my-mood-lac.vercel.app/" target="_blank" className="transition-all duration-500 hover:scale-x-125 rounded-lg p-2 bg-transparent"><MoveUpRight/></a>
    </div>
  </div>
 {/*2nd */}
 <div className="transition-all duration-500 hover:scale-105 cursor-pointer w-full bg-black border rounded-3xl hover:bg-gradient-to-br from-white/55 to-black">
 <p className="font-bold text-lg p-4 pt-8 ">
      To-Do
    </p>
    
    <p className="p-4 leading-tight text-justify text-white/85">
    To-Do is a simple and efficient task management web app built with ReactJS. It allows users to create, read, update, and delete daily tasks, helping improve personal productivity through a clean interface and responsive user experience.    </p>

    
    <div className="flex gap-4 ml-4 sm:ml-4 md:ml-8 mb-2.5">
    <a href="https://github.com/vikalpis/To-Do" target="_blank" className="transition-all duration-500 hover:scale-x-125 rounded-lg p-2 bg-transparent"><Link/></a>
    <a href="https://to-do-zeta-five.vercel.app/" target="_blank" className="transition-all duration-500 hover:scale-x-125 rounded-lg p-2 bg-transparent"><MoveUpRight/></a>
    </div>
  </div>

{/*3rd */}
<div className= "transition-all duration-500 hover:scale-105 cursor-pointer w-full bg-black border rounded-3xl  hover:bg-gradient-to-br from-white/55 to-black">
  <p className="font-bold text-lg p-4 pt-8 ">
      Blog App
    </p>
    
    <p className="p-4 leading-tight text-justify text-white/85">
    BlogApp is a full-stack blogging platform built with ReactJS and Appwrite. It enables users to create, edit, and delete blog posts with ease. Featuring a modern UI and secure backend integration, it showcases seamless content management functionality.    </p>

    <div className="flex gap-4 ml-4 sm:ml-4 md:ml-8 mb-2.5">
    <a href="https://github.com/vikalpis/BlogApp" target="_blank" className="transition-all duration-500 hover:scale-x-125 rounded-lg p-2 bg-transparent"><Link/></a>
    <a href="https://blog-app-two-green-11.vercel.app/" target="_blank" className="transition-all duration-500 hover:scale-x-125 rounded-lg p-2 bg-transparent"><MoveUpRight/></a>
    </div>
  </div>

{/*4th */}
<div className=" transition-all duration-500 hover:scale-105 cursor-pointer w-full bg-black border rounded-3xl hover:bg-gradient-to-br from-white/55 to-black">
  <p className="font-bold text-lg p-4 pt-8 ">
     Course Selling App
    </p>
    
    <p className="p-4 leading-tight text-justify text-white/85">
    This is the backend of a course-selling platform built using JavaScript, Express.js, MongoDB, and Zod for schema validation. It handles user authentication, course creation, purchase logic, and API routing for a smooth and secure learning platform experience.    </p>

    <div className="flex gap-4 ml-4 sm:ml-4 md:ml-8 mb-2">
    <a href="https://github.com/vikalpis/Course-Selling-App" target="_blank" className="transition-all duration-500 hover:scale-x-125 rounded-lg p-2 bg-transparent "><Link/></a>
    <a href="https://github.com/vikalpis/Course-Selling-App" target="_blank" className="transition-all duration-500 hover:scale-x-125 rounded-lg p-2 bg-transparent"><MoveUpRight/></a>
    </div>
  </div>
</div>
        </>
    )
}