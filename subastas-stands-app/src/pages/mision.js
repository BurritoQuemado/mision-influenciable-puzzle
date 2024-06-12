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
        },
        {
            name:  "riversvsrivers",
            src: "https://imgs.search.brave.com/6AVrbAH-9a3hYUc0EVhSAwfWDjliFINDf3Z0VVxOrqg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzLzY1ODE5/ZC92ZWxhZGEtMy0w/Mi80NTBfMTAwMC53/ZWJw"
        },
        {
            name:  "riversvsrivers",
            src: "https://imgs.search.brave.com/6AVrbAH-9a3hYUc0EVhSAwfWDjliFINDf3Z0VVxOrqg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzLzY1ODE5/ZC92ZWxhZGEtMy0w/Mi80NTBfMTAwMC53/ZWJw"
        },
        {
            name:  "riversvsrivers",
            src: "https://imgs.search.brave.com/6AVrbAH-9a3hYUc0EVhSAwfWDjliFINDf3Z0VVxOrqg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzLzY1ODE5/ZC92ZWxhZGEtMy0w/Mi80NTBfMTAwMC53/ZWJw"
        },
        ],
    riddle: `Soy algo que se te da todos los días, pero nunca lo posees.

            Se pierde en la noche y regresa con la luz.

            Todos lo necesitan, pero nadie lo puede comprar.`,
    answer: "respuesta"
    },
]

const initialValues = {
    answer: '',
  }

const MAX_TRIES = 3;


function Mision() {
    const { access_code } = useParams();
    const [playing, setPlaying] = useState(false);
    const [playingTime, setPlayingTime] = useState(0);
    const [intentos, setIntentos] = useState(3);
    const [formValues, setFormValues] = useState(initialValues);
    const [showError, setShowError] = useState(false);
    const [won, setWon] = useState(false);

    const mision = misiones.find(mision => mision.access_code === access_code)

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
        if (formValues.answer === mision.answer) {
            setPlaying(false);
            setWon(true);
        } else {
            setIntentos((intentos) => intentos - 1)
            setShowError(true);
            if (intentos === 0) {
                setPlaying(false);
            }
        }
    };

    useEffect(() => {
        let intelvalId;
        if (playing) {
            intelvalId = setInterval(() => {
                setPlayingTime((playingTime) => playingTime + 1)
            }, 1000);
            }
            return () => clearInterval(intelvalId);
    }, [playing, playingTime])

    const formatPlayingTime = (time) => {
        const hours = Math.floor(playingTime / 3600);
        const minutes_aux = playingTime % 3600;
        const minutes = Math.floor(minutes_aux  / 60);
        const seconds = minutes_aux % 60;
        return  `${hours.toString().padStart(2, '0')}hr ${minutes.toString().padStart(2, "0")} min ${seconds.toString().padStart(2, "0")}s`
    }
    return (
        <div className="bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <p className="mt-2 text-3xl font-bold tracking-tight text-principal sm:text-4xl">
                    Preparate para la misión
                </p>
                <p className="mt-6 text-lg leading-8 text-principal/95">
                    Una vez que inicies la misión tendrás que resolverla lo más rápido posible para no quedarte atrás.
                </p>
                <p className="mt-2 text-lg leading-8 text-principal/95">
                    Recuerda que solo tienes 3 intentos para resolver la misión.
                </p>
                
            </div>
            {
                playing && intentos > 0 ? 
                <div className="flex flex-col justify-center items-center">
                <div className="w-full flex flex-row justify-evenly">
                    <p className="mt-2 text-xl font-bold text-principal/95 sm:text-4xl">
                       {formatPlayingTime(playingTime)}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-principal/95 sm:text-4xl">
                        Intentos: {intentos}/{MAX_TRIES}
                    </p>
                </div>
                <div className="pt-6 w-full h-[480px]">
                    <iframe
                        className="w-full h-full aspect-video"
                        src={`https://www.youtube.com/embed/${mision.youtube_id}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        title="Youtube video"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {mision.images.map((image) => (
                        <div key={image.name} className="group relative">
                        <div className="aspect-[1/1] w-full object-contain overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                            src={image.src}
                            alt={image.name}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        </div>
                    ))}
                    </div>
                <div className="py-4 px-4">
                    <p className="text-principal/95">
                        {mision.riddle}
                    </p>
                </div>
                <div className="mt-6">
                    <input
                        id="answer"
                        name="answer"
                        type="text"
                        onChange={handleChange}
                        required
                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-bg-principal/80 sm:text-sm sm:leading-6"
                        placeholder="Respuesta"
                        />
                        {
                            showError ? 
                                <label className="text-principal/90 font-medium text-base">
                                    Error
                                    </label>
                                : null
                        }
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="flex-non ml-4 rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-principal/95 shadow-sm hover:bg-gray-700/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-700/50"
                        >
                        Enviar
                    </button>
                </div>
            </div> 

                :
                    intentos > 0 && playingTime === 0?
                        <div className="flex flex-col">
                            <button
                                onClick={() => setPlaying(true)}
                                className="flex-non mt-4 ml-4 rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-principal/95 shadow-sm hover:bg-gray-700/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-700/50"
                                >
                                Comenzar Misión
                            </button>
                        </div>
                    : null
            }
            {
                won && !playing ? 
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-principal sm:text-4xl">
                            Bien hecho agente lo conseguiste en {formatPlayingTime(playingTime)}, regresa mañana para la siguiente misión
                        </p>            
                    </div> 
                : null
            }
            {
                !won && !playing && intentos === 0 ? 
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-principal sm:text-4xl">
                            Mejor suerte para la proxima agente
                        </p>            
                    </div> 
                : null
            }
            </div>
        </div>
    )
}

export default Mision;