
export default function Project(){

    return (
        <>
        <div className="font-bold text-3xl leading-loose bg-transparent text-white">Projects</div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white bg-transparent">

 {/*1st */}           
  <div className="transition-all duration-500 hover:scale-105 cursor-pointer w-full bg-black border rounded-3xl">
    <p className="font-bold text-lg p-4 pt-8 ">
      Project Name
    </p>
    
    <p className="p-4 leading-tight text-justify">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, eaque sapiente voluptas ullam officia amet nesciunt laboriosam vol
    </p>

    {/* Button container with spacing and responsive left margin */}
    <div className="flex gap-4 ml-4 sm:ml-4 md:ml-8 mb-2.5 ">
      <button className="bg-red-400 rounded-lg p-2">View Code</button>
      <button className="bg-red-400 rounded-lg p-2">View Demo</button>
    </div>
  </div>
 {/*2nd */}
  <div className="transition-all duration-500 hover:scale-105 cursor-pointer w-full  bg-black border rounded-3xl">
    <p className="font-bold text-lg p-4 pt-8 ">
      Project Name
    </p>
    
    <p className="p-4 leading-tight text-justify">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, eaque sapiente voluptas ullam officia amet nesciunt laboriosam vol
    </p>

    {/* Button container with spacing and responsive left margin */}
    <div className="flex gap-4 ml-4 sm:ml-4 md:ml-8 mb-2.5">
      <button className="bg-red-400 rounded-lg p-2">View Code</button>
      <button className="bg-red-400 rounded-lg p-2">View Demo</button>
    </div>
  </div>

{/*3rd */}
  <div className="transition-all duration-500 hover:scale-105 cursor-pointer w-full bg-black border rounded-3xl">
    <p className="font-bold text-lg p-4 pt-8 ">
      Project Name
    </p>
    
    <p className="p-4 leading-tight text-justify">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, eaque sapiente voluptas ullam officia amet nesciunt laboriosam vol
    </p>

    {/* Button container with spacing and responsive left margin */}
    <div className="flex gap-4 ml-4 sm:ml-4 md:ml-8 mb-2.5">
      <button className="bg-red-400 rounded-lg p-2">View Code</button>
      <button className="bg-red-400 rounded-lg p-2">View Demo</button>
    </div>
  </div>

{/*4th */}
  <div className="transition-all duration-500 hover:scale-105 cursor-pointer w-full bg-black border  rounded-3xl">
    <p className="font-bold text-lg p-4 pt-8 ">
      Project Name
    </p>
    
    <p className="p-4 leading-tight text-justify">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, eaque sapiente voluptas ullam officia amet nesciunt laboriosam vol
    </p>

    {/* Button container with spacing and responsive left margin */}
    <div className="flex gap-4 ml-4 sm:ml-4 md:ml-8 mb-2">
      <button className="bg-red-400 rounded-lg p-2">View Code</button>
      <button className="bg-red-400 rounded-lg p-2">View Demo</button>
    </div>
  </div>
</div>
        </>
    )
}