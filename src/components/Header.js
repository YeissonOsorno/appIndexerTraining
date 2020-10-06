import React from 'react'
//import { Link} from 'react-router-dom';

const Header = () => {
    return (  
        <>
            <header>
                <nav>
                
                    <div className="nav-wrapper">                    
                    <a href="/sdd" className="brand-logo"> 
                        Educative App
                    </a>                    
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">dehaze</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/first-step">Primeros Pasos</a></li>  
                        <li><a href="/comming-soon">Herramientas</a></li>  
                        <li><a href="/comming-soon">CL</a></li>  
                        <li><a href="/comming-soon">QA</a></li>  
                        <li><a href="/comming-soon" id="login">Inciar Sesión</a></li>     
                        <li><a href="/comming-soon" id="signup">Registrarse</a></li>                         
                    </ul>
                    </div>
                </nav>

                
                <ul id="mobile-demo" className="sidenav">
                    <li><div className="user-view">
                    <div className="background">
                        
                    </div>
                    <a href="/"><img className="circle center-align" src="assets/logo.svg" alt="sasf"/></a>               
                    </div></li>
                    <br/>
                    <li><a className="waves-effect"  href="#!">Inicio</a></li>
                    
                    <li><div className="divider"></div></li>
                    <li><a className="waves-effect"  href="#!">Primeros Pasos <span class="new badge green" data-badge-caption="Nuevo"></span></a></li>
                    <li><a className="waves-effect"  href="#!">Herramientas<span class="new badge red" data-badge-caption="Pronto"></span></a></li>
                    <li><a className="waves-effect"  href="#!">CL<span class="new badge red" data-badge-caption="Pronto"></span></a></li>
                    <li><a className="waves-effect"  href="#!">QA<span class="new badge red" data-badge-caption="Pronto"></span></a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="waves-effect"  href="#!">Sobre La App</a></li>
                    
                </ul>
                
                
            </header>
        </>
    );
}
 
export default Header;