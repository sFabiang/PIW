import React from 'react';
import './post.css';
class Post extends React.Component {
    render() { 
        return <div className="Principal"> <br></br>
                
                <h1 className="TituloPost">Postagens</h1>
                
                <ul className="PostCorpo">
                    
                    <li className="Impar">
                        <div className="Name">João Pedro</div>
                        <div>Hoje tem aula de PIW.</div>
                        <button>Like</button>
                        <button>Comment</button>
                    </li>
                    <li className="Par">
                        <div className="Name">Marcos Oliveira</div>
                        <div>Eu vi um pato hoje na lagoa.</div>
                        <button>Like</button>
                        <button>Comment</button>
                    </li>
                    <li className="Impar">
                        <div className="Name">Felipe Ferreira</div>
                        <div>Choveu demais hoje.</div>
                        <button>Like</button>
                        <button>Comment</button>
                    </li>




                </ul>
            </div>
        ;
    }
}
 
export default Post ;