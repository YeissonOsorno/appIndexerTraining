import React from 'react';
const Didactic = ({handleOnchange, handleOptions}) => {
    return ( 
        <>
            <h2>Didactic Session</h2>
            <input type="text" name="question" onChange={(e)=>handleOnchange(e)} placeholder="ingresa una pregunta"/> 
            <div className="row">
                <div className="col 6">
                    <input type="text" name="opt1" onChange={(e)=>handleOptions(e)} placeholder="ingrese valor opcion 1"/>                 
                </div>
                <div className="col s5">
                    <input type="text" name="opt2" onChange={(e)=>handleOptions(e)}  placeholder="ingrese valor opcion 2"/> 
                </div>
                <div className="col s5">
                    <input type="text" name="opt3" onChange={(e)=>handleOptions(e)}  placeholder="ingrese valor opcion 3"/> 
                </div>
                <div className="col s4">
                    <input type="text" name="opt4" onChange={(e)=>handleOptions(e)}  placeholder="ingrese valor opcion 4"/> 
                </div>
                    
            </div>


            <input type="text" name="correct_anwswer" onChange={(e)=>handleOnchange(e)} placeholder="ingrese la respuesta correcta"/>                   
        </>
     );
}
 
export default Didactic;