export default function Blog() {
    return (
      <>
        <div className=" my-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white px-2">Blogs</h1>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 px-2 text-white bg-transparent ">
          <div className="border bg-transparent w-full min-h-20 rounded-xl p-4  hover:scale-102 transition-transform duration-300 hover:bg-gradient-to-br from-white/55 to-black">
            <a href="https://jwts.hashnode.dev/jwts-json-web-tokens" target="_blank" className="text-lg sm:text-xl font-bold mb-2">JSON Web Token</a> <br />
            <a href="https://jwts.hashnode.dev/jwts-json-web-tokens" target="_blank" className="text-sm sm:text-base leading-relaxed text-white/85">
              Implemented secure user authentication using JSON Web Tokens (JWT) for stateless session management.
            </a>
          </div>
  
          <div className="bg-transparent border w-full min-h-20 rounded-xl p-6  hover:scale-102 transition-transform duration-300 hover:bg-gradient-to-br from-white/55 to-black">
            <a href="https://salting-in-passwords.hashnode.dev/salting-passwords-in-backend-authentication" target="_blank" className="text-lg sm:text-xl font-bold mb-2">Salting Passwords in Backend Authentication</a><br />
            <a href="https://salting-in-passwords.hashnode.dev/salting-passwords-in-backend-authentication" target="_blank" className="text-sm sm:text-base leading-relaxed text-white/85">
              Integrated password salting and hashing to enhance security in backend authentication.
            </a>
          </div>
        </div>
      </>
    );
  }
  