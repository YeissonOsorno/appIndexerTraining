import React from 'react';
const Didactic = ({onchange}) => {
    return ( 
        <>
            <h1>Didactic workit</h1>
            <input type="text" name="didactic" onChange={(e)=>onchange(e)} placeholder="ingresa nombre"/>
      
        </>
     );
}
 
export default Didactic;