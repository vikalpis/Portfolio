export default function Blog() {
    return (
      <>
        <div className=" my-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Blogs</h1>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 px-4 text-white bg-transparent">
          <div className="border bg-black w-full min-h-40 rounded-3xl p-4  hover:scale-105 transition-transform duration-300">
            <h2 className="text-lg sm:text-xl font-bold mb-2">JSON Web Token</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Implemented secure user authentication using JSON Web Tokens (JWT) for stateless session management.
            </p>
          </div>
  
          <div className="bg-black border w-full min-h-40 rounded-3xl p-4  hover:scale-105 transition-transform duration-300">
            <h2 className="text-lg sm:text-xl font-bold mb-2">Salting Passwords in Backend Authentication</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Integrated password salting and hashing to enhance security in backend authentication.
            </p>
          </div>
        </div>
      </>
    );
  }
  