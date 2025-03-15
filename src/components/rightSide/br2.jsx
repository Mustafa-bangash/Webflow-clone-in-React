import React from 'react'
import arrow from '../../images/arrow.png';
function br2() {
  return (
    <div>
          <div className='w-[50vw] h-[100vh] bg-[url("./images/greenOrange.jpg")] bg-cover bg-center '>
                      
                      <div className='pt-[52%]  ml-15 w-[32vw]'>
                        <p className='font-didot text-amber-50 text-[20px] font-light'>Lime N<span className='text-[19px]'>o2</span></p>
                       <div className='mt-10 leading-[53px]'>
                        <h3 className='font-Ageo text-[3vw]
                          font-[300] text-white'>A gentle blend of</h3>
                    
                        <h3 className='font-Ageo text-[3vw]
                          font-[300] text-white'>fresh lime a whole</h3>
                        <h3 className='font-Ageo text-[3vw]
                          font-[200] text-white'>malt crisp lager</h3>
                    </div>
                     <div>
                        <img src={arrow} alt="arrow" className='w-[20px] h-[20px] mt-[35px]' />
                     </div>
                      </div>
                    </div>
    </div>
  )
}

export default br2