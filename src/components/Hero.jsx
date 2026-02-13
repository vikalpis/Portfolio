import pic from '../assets/pic1.jpg';

export default function Hero() {
  return (<div>
    <div className='bg-transparent w-full flex align-center text-white px-2'>

        <div className="flex flex-col py-10">
      <img
        src={pic}
        alt="Vikalp"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl transition-transform duration-700 hover:scale-110 cursor-pointer"
      />

      <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight ">
        Hi, I'm Vikalp
      </h1>
      <h1 className="mt-4 text-md sm:text-2xl font-medium tracking-tighter leading-1 text-white/90 ">
        21, Rewa | Web🕸️Developer
      </h1>
      <br />
      <p className="leading-tight tracking-tighter mt-4 text-sm sm:text-xl text-justify text-white/70">
      Computer Science undergraduate with a solid foundation in software development. Proficient in JavaScript, Typescript, React.js, Express, and MongoDB, with experience in building and deploying responsive, full-stack web applications. Skilled in developing RESTful APIs, managing state with modern libraries, and implementing secure user authentication. Familiar with tools like Git, Postman, and modern UI frameworks such as Tailwind CSS.
      </p>
    </div>
    </div>
    </div>
  );
}
