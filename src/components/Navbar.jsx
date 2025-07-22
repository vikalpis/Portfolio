import React from 'react'

function Navbar() {
  return (
    <div >
        <div style={{display : "flex", background : "black", height: "10vh", width : "100%", borderRadius :"20px", margin:"1vh",justifyContent :"center", alignItems:"center", color:"white", gap:"2rem"}}>
         
                <p>Home</p>
                <p>Skills</p>
                <p>About</p>
                <p>Contact</p>
           
        </div>
    </div>
  )
}

export default Navbar