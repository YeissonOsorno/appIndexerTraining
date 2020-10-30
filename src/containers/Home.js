import React from 'react';
import {Link} from 'react-router-dom';
//Components
import Header from '../components/Header.js'
const Home = () => {
    return ( 
        <>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                <div className="col s12 m12 l12 xl12 center-align" id="jumbotron">
                    <img src="assets/logo.svg" id="#navbar_img-logo" alt="logo"/>
                    <h1>Educative App</h1>
                    <p>Una biblioteca para los nuevos indexadores... para que tu comienzo sea un poco mas facil</p>
                    <div>
                        {/*<button onClick={(e)=>{location.push('/first-steps')}}></button>*/}
                        <Link to="/themes"className="btn">Primeros Pasos</Link>  
                    </div>
                </div>                
            </div>
            
            
            <div className="row">
                <div class="carousel">
                        <a class="carousel-item center" href="#one!"><img src="assets/Product Release.svg" alt="imgen3"/>Primeros Pasos</a>
                        <a class="carousel-item center" href="#two!"><img src="assets/Error.svg" alt="image1"/>QA</a>
                        <a class="carousel-item center" href="#three!"><img src="assets/Idea.svg" alt="imagew"/>CL</a>
                        <a class="carousel-item center" href="#four!"><img src="assets/Settings.svg"  alt="image2"/>Herramientas</a>
                        
                </div>
            </div>
            
        </div>
    </>
     );
}
 
export default Home;