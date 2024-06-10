import React from "react";
import { useParams } from "react-router-dom";

const misiones = [
   {
    access_code: "123abc",
    agent: "username",
    youtube_url: "http://youtube.com",
    images: [
        {
            name:  "img1",
            src: "src/to/image"
        }
        ],
    riddle: "lorem"
    }
]


function Mision() {
    const { access_code } = useParams();

    const mision = misiones.find(mision => mision.access_code === access_code)
    
    return (
        <div>
            <h1>Agente {mision.agent} los detalles de tu mision los encontraras aqui </h1>
            <div>
                aqui va el video
            </div>
            <div>
                aqui van las imagenes
            </div>
            <div>
                aqui va el riddle
            </div>
        </div> 
    )
}

export default Mision;