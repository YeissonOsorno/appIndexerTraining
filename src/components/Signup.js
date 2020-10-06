import React from 'react';
const Signup = () => {
    return ( 
        <>
            <div className="container">
            <div class="row center">
            <form class="col s12 m4 l4 xl8 center-align">
                <div class="row">
                    <div class="input-field col s6">
                    <input placeholder="Nombre" id="first_name" type="text" class="validate"/>
                    <label for="first_name">Nombre y Apellido</label>
                    </div>
                    <div class="input-field col s6">
                    <input id="last_name" type="text" class="validate"/>
                    <label for="last_name">Apellido</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input placeholder="Ingresa tu email" id="email" type="email" class="validate"/>
                    <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input  placeholder="Crea una contraseña" id="password" type="password" class="validate"/>
                    <label for="password">contraseña</label>
                    </div>
                </div>
                <div class="row">                   
                    <div className="col s12 m6 l6 xl6">
                    <select class="browser-default">
                        <option value="" disabled selected>Cual es tu cargo</option>
                        <option value="1">Indexer</option>
                        <option value="2">TL</option>
                        <option value="3">Manager</option>
                    </select>
                    </div>
                    <div className="col s12 m6 l6 xl6">
                    <select class="browser-default">
                        <option value="" disabled selected>Quien es tu TL</option>
                        <option value="1">Rudy</option>
                        <option value="2">Daniel</option>
                        <option value="3">Andrea</option>
                    </select>
                    </div>
                </div>
            </form>
        </div>
            </div>
        </>
     );
}
 
export default Signup;