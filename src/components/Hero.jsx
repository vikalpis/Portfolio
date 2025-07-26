import pic from '../assets/pic1.jpg';

export default function Hero() {
  return (<div className='flex justify-center'>
    <div className='bg-red-200 w-158'>

        <div className="flex flex-col py-10">
      <img
        src={pic}
        alt="Vikalp"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl transition-transform duration-700 hover:scale-110 cursor-pointer"
      />

      <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight ">
        HI, I'm Vikalp
      </h1>
      <h1 className="mt-4 sm:text-xl tracking-tighter leading-0.5 ">
        21, Rewa | MERN Stack Developer
      </h1>
      <br />
      <h1 className='leading-tight tracking-tighter'>
      Computer Science undergraduate with a solid foundation in software development. Proficient in JavaScript, React.js, Express, and MongoDB, with experience in building and deploying responsive, full-stack web applications. Skilled in developing RESTful APIs, managing state with modern libraries, and implementing secure user authentication. Familiar with tools like Git, Postman, and modern UI frameworks such as Tailwind CSS.
      </h1>
    </div>
    </div>
    </div>
  );
}
