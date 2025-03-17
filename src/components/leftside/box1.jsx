

import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../images/logo.png';
import arrow from '../../images/arrow.png';
import '../../responsive.css';

const text = 'A gentle blend of fresh orange a whole malt crisp lager';

function Box1() {
  return (
    <div>
      <div className='w-[50vw] h-[100vh] bg-[url("./images/orange1.jpg")] bg-cover bg-center'>
        <div className="logob1  p-16 w-[15vw] h-[15vh]">
          <img src={logo} alt="logo" className=' w-[4vw] h-[8.5vh]' />
        </div>
        <div className='mt-66 ml-15  w-[32vw]'>
          <p className='bxtopT h-[2vh] font-didot text-amber-50 text-[20px] font-light'>
            Orange N<span className='text-[19px]'>o2</span>
          </p>
          <div className='mt-10 leading-[53px] '>
            <h3 className='b1Text font-Ageo text-[3vw] font-[300] w-[452px] h-[150px] text-white tracking-[1.5px]'>
              {text.split("").map((char, ind) => (
                <motion.span
                className="inline-block"
                  key={ind}
                  initial={{ opacity: 0, y:20 }}
                  animate={{ opacity: 1, y:0 }}
                  transition={{
                    delay: ind * 0.03, 
                    duration: 0.3,
                    ease:"easeInOut"
                  }}
                  
                >
                  {char === " " ?"\u00A0":char }
                </motion.span>
              ))}
            </h3>
          </div>
          <div>
            <motion.img src={arrow} alt="arrow" className=' arr w-[20px] h-[20px] mt-[35px]'
              initial={{ opacity: 0,  }}
              animate={{ opacity: 2,  }}
              transition={{
                delay:2, 
                duration: 0.4,
                
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box1;
