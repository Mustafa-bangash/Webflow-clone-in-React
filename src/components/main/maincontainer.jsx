import React from 'react-dom'
import MainLeft from "../leftside/mainLeft";
import MainRight from "../rightSide/mainRight";

function Maincontainer() {
 

  return (
    <div className="flex sticky">
      <div >
        <MainLeft />
      </div>
      <div >
        <MainRight/> 
      </div>
    </div>
  );
}

export default Maincontainer;
