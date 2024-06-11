import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const misiones = [
   {
    access_code: "123abc",
    agent: "riversgg",
    youtube_id: "bf-B1QORoMM",
    images: [
        {
            name:  "riversvsrivers",
            src: "https://imgs.search.brave.com/6AVrbAH-9a3hYUc0EVhSAwfWDjliFINDf3Z0VVxOrqg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzLzY1ODE5/ZC92ZWxhZGEtMy0w/Mi80NTBfMTAwMC53/ZWJw"
        }
        ],
    riddle: `Soy algo que se te da todos los días, pero nunca lo posees.

            Se pierde en la noche y regresa con la luz.

            Todos lo necesitan, pero nadie lo puede comprar.`
    }
]

const MAX_TRIES = 3;


function Mision() {
    const { access_code } = useParams();
    const [playing, setPlaying] = useState(true);
    const [playingTime, setPlayingTime] = useState(0);
    const [intentos, setIntentos] = useState(3);

    useEffect(() => {
        let intelvalId;
        if (playing) {
            intelvalId = setInterval(() => {
                setPlayingTime(playingTime + 1)
            }, 1000);
            }
            return () => clearInterval(intelvalId);
    }, [playing, playingTime])

    const formatPlayingTime = (playingTime) => {
        const hours = (Math.floor(playingTime / 3600));
        const minutes_aux = playingTime % 3600;
        const minutes = (Math.floor(minutes_aux  / 60));
        const seconds = (minutes % 60);
        return  `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    }
    const mision = misiones.find(mision => mision.access_code === access_code)
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Agente: {mision.agent}</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Preparate para la misión
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Una vez que inicies la misión tendrás que resolverla lo más rápido posible para no quedarte atrás.
                </p>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Recuerda que solo tienes 3 intentos para resolver la misión.
                </p>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Da clic en comenzar
                </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="w-full flex flex-row justify-evenly">
                    <p className="mt-2 text-xl font-bold text-gray-900 sm:text-4xl">
                       {formatPlayingTime(playingTime)}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-gray-900 sm:text-4xl">
                        Intentos: {intentos}/{MAX_TRIES}
                    </p>
                </div>
                <div>
                    <iframe
                        width="853"
                        height="480"
                        src={`https://www.youtube.com/embed/${mision.youtube_id}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        title="Youtube video"
                        allowFullScreen
                    />
                </div>
                <div>
                    aqui van las imagenes
                </div>
                <div>
                    <p>
                        {mision.riddle}
                    </p>
                </div>
            </div> 
            </div>
        </div>
    )
}

export default Mision;