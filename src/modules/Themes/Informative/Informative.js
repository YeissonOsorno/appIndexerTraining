import React from 'react';
const Informative = ({onchange}) => {
    return ( 
        <>
            <h1>Informative Work it!</h1>   
            <input type="text" name="informative" onChange={(e)=>onchange(e)} placeholder="ingresa nombre"/>
        </>
     );
}
 
export default Informative;