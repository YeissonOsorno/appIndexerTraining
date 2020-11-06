import React ,{ useState } from 'react';

import Informative from '../../modules/Themes/Informative/Informative';
import Didactic from '../../modules/Themes/Didactic/Didactic';

import {database} from '../../config/Firebase';
const Themes = () => {
    const [data, setData] = useState({ informative:"", didactic:"",titulo:""});
    const [questions, setQuestion] = useState([]);

    const handleOnchange =(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })

    }

    const handleSubmit =()=>{
        setQuestion([...questions,{question:data.didactic,category:"didactic"}]);
        
    }
     const handleSave = async ()=>{
        const themeData = {data,questions};
        await database.collection('themes').doc().set(themeData);
        setData({ informative:"", didactic:"",titulo:""});
        setQuestion([])
     }
    return ( 
        <>
            
            <div className="container">
                <div className="row">
                    <h1>Crea un tema</h1>
                    <input 
                        onChange={(e)=>handleOnchange(e)} 
                        type="text" 
                        name="titulo" 
                        placeholder="Crea el titulo" 
                        value= {data.titulo}    
                    />
                </div>
                <div className="row">
                    <Informative onchange={handleOnchange}></Informative>
                </div>
                <div className="row">
                    <Didactic onchange={handleOnchange}></Didactic>
                </div>
                <button onClick={handleSubmit}>Guardar y crear otra pregunta</button>
                <button onClick={handleSave}>Subir a database</button>
            </div>

        </>
     );
}
 
export default Themes;