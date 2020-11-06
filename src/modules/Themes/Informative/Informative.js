import React from 'react';
const Informative = ({handleOnchange}) => {
    return ( 
        <>
            <h2>Informative Session</h2>   
             <input type="text" name="title" onChange={(e)=>handleOnchange(e)} placeholder="ingresa un sub titulo del articulo"/>
            <textarea type="text" name="textArea" onChange={(e)=>handleOnchange(e)} placeholder="ingresa informacion acerca del articulo"/>            
            {/*
            <h6>Imagenes Relacionadas</h6>
            <input type="image" src=""></input>
            */}
            
             <h6>URLs Relacionadas</h6>
            <input type="link" name="url" onChange={(e)=>handleOnchange(e)} placeholder="ingrese urls validas asociar documentacion"/>            

        </>
     );
}
 
export default Informative;