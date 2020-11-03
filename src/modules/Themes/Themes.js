import React ,{ useState } from 'react';
import Informative from '../../modules/Themes/Informative/Informative';
import Didactic from '../../modules/Themes/Didactic/Didactic';
import {database} from '../../config/Firebase';

const Themes = () => {

    const inicialStateValues = {title: "", author: "", article: [] }
    const inicialStateInformative= {title:"" ,textArea:"", img: "", url: ""}
    const inicialStateDidactic= {
            question: "",            
            options:{
                opt1:"",
                opt2:"",
                opt3:"",
                opt4:""
                },
            correct_anwswer: ""
    }        
    const [data, setData] = useState(inicialStateValues);
    const [informative, setInformative] = useState(inicialStateInformative);
    const [didactic, setDidactic] = useState(inicialStateDidactic);

    const handleOnchangeInformative =(e)=>{
        setInformative({
            ...informative,
            [e.target.name]:e.target.value
        })
    } 

    const handleOnchangeOptions =(e)=>{        
        setDidactic({   
            ...didactic,                     
            options: {...didactic.options, [e.target.name]: e.target.value}
        })        
    } 
    
    const handleOnchangeDidatic =(e)=>{
        setDidactic({
            ...didactic,
            [e.target.name]:e.target.value            
        })
    }

    const handleOnchange =(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit =()=>{
        const article = {informative, didactic};
        setData({
            ...data,
            article: [...data.article, article] 
        });
        setInformative(inicialStateInformative);
        setDidactic(inicialStateDidactic);
    }

    const handleSave = async ()=>{        
        await database.collection('themes').doc().set(data)
        setData(inicialStateValues); 
        setInformative(inicialStateInformative);
        setDidactic(inicialStateDidactic);
    }
    return ( 
        <>
            
            <div className="container">
                <div className="row">
                    <h1>Crea un tema</h1>
                    <input 
                        onChange={(e)=>handleOnchange(e)} 
                        type="text" 
                        name="title" 
                        placeholder="Crea el titulo" 
                        value= {data.titulo}
                    />
                </div>
                <div className="row">
                    <Informative handleOnchange={handleOnchangeInformative}></Informative>
                </div>
                <div className="row">
                    <Didactic handleOnchange={handleOnchangeDidatic} handleOptions={handleOnchangeOptions}></Didactic>
                </div>
                <button onClick={handleSubmit}>Guardar y crear otro articulo</button>
                <button onClick={handleSave}>Subir a database</button>
            </div>

        </>
     );
}
 
export default Themes;