import React from 'react'
import Bx1 from './br1'
import Bx2 from './br2'
import Bx3 from './br3'
function mainRight() {
    
  return (
    <div className='overflow-hidden absolute '>
     
    
      <Bx1/>
      <Bx2/>
      <Bx3/>
      
      
    </div>
  )
}

export default mainRight


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Bx1 from "./br1";
// import Bx2 from "./br2";
// import Bx3 from "./br3";

// function MainRight() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="overflow-auto h-screen relative">
//       <motion.div
//         initial={{ y: -200, opacity: 0 }}
//         animate={{ y: scrollY > 50 ? 0 : -200, opacity: scrollY > 50 ? 1 : 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Bx1 />
//       </motion.div>

//       <motion.div
//         initial={{ y: -200, opacity: 0 }}
//         animate={{ y: scrollY > 150 ? 0 : -200, opacity: scrollY > 150 ? 1 : 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Bx2 />
//       </motion.div>

//       <motion.div
//         initial={{ y: -200, opacity: 0 }}
//         animate={{ y: scrollY > 300 ? 0 : -200, opacity: scrollY > 300 ? 1 : 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Bx3 />
//       </motion.div>
//     </div>
//   );
// }

// export default MainRight;
