import React from 'react';
import './Nav.css';

 class Nav extends React.Component{
     render(){
         return <div>
             <img className="Logo" src = "./nfu.png"></img>
             <button className="Perfil">Perfil</button> 
             <button className="LinhaTempo">Linha do tempo</button>
             <div className="NomeUser">Samuel Fabián</div>
         </div>;
     }
 }
 export default Nav;