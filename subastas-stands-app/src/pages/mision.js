import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PistasBtn from "../assets/images/boton-pistas.webp"
import Pista1Img from "../assets/images/pistas/pista1.webp"
import Pista2Img from "../assets/images/pistas/pista2.webp"
import Pista3Img from "../assets/images/pistas/pista3.webp"

const misiones = [
   {
    access_code: "123abc",
    agent: "riversgg",
    youtube_id: "bf-B1QORoMM",
    images: [
        {
            name:  "Pista 1",
            src: Pista1Img
        },
        {
            name:  "Pista 2",
            src: Pista2Img
        },
        {
            name:  "Pista 3",
            src: Pista3Img
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

function Mision() {
    const { access_code } = useParams();
    const [playing, setPlaying] = useState(false);
    const [playingTime, setPlayingTime] = useState(0);
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
            setShowError(true);
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
        <div className="bg-black my-10 sm:py-32 rounded-3xl">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <p className="mt-2 text-3xl font-bold tracking-tight text-principal sm:text-4xl">
                    Bienvenido al primer reto eliminatorio de Misión Influencible
                </p>
                <p className="mt-6 text-sm lg:text-lg text-left leading-8 text-principal/95">
                Estás a punto de embarcarte en una misión desafiante que pondrá a prueba tu ingenio y habilidades de convocatoria. Al hacer click en el botón de inicio se develarán tres pistas que te llevarán a descubrir una cifra crucial para avanzar en la competencia. Antes de comenzar, por favor, revisa las siguientes instrucciones cuidadosamente.
                </p>
                <p className="mt-2 text-sm lg:text-lg  text-left leading-8 text-principal/95">
                    Instrucciones:
                </p>
                <p className="mt-2 text-sm lg:text-lg  text-left leading-8 text-principal/95">
                Revisión de Pistas: <br />
                Al hacer clic en el botón "Develar Pistas", recibirás tres pistas. La primera será una imagen que muestra una sección de un lugar en México, y la 
                segunda será un elemento adicional que refleja el uso o un aspecto histórico del lugar, la tercera te ayudará a redondear la información.<br />
                Resolución de Pistas:<br />
                Usa tus habilidades de observación y deducción para interpretar las pistas. Te recomendamos pedir ayuda a tus seguidores publicando las pistas en tus redes sociales.<br />
                Interacción con Seguidores:<br />
                Comparte las pistas con tus seguidores y solicita su ayuda para identificar el lugar. La colaboración es clave para encontrar la respuesta correcta rápidamente.<br />
                Ingreso de cifra:<br />
                Una vez que creas tener la respuesta, introduce la cifra exacta en el campo “Detener cronómetro”. Esto no tiene un limite de intentos.<br />
                Detener el Reloj:<br />
                El reloj comenzará a correr tan pronto hagas clic en "Develar Pistas" y se detendrá automáticamente cuando ingreses las coordenadas correctas.<br />
                Confidencialidad del Tiempo:<br />
                Solo conocerás el tiempo que has registrado, no la posición en el ranking general. Cada participante tiene su propio reloj, que se activa individualmente al iniciar.<br />
                Avance en la Competencia:<br />
                El mayor tiempo en completar la misión será eliminado.<br />
                Recuerda:<br />
                La precisión y rapidez son esenciales.<br />
                La colaboración con tus seguidores puede ser la clave para tu éxito.<br />
                ¡Buena suerte y que comience la misión!
                </p>
                
            </div>
            {
                playing ? 
                <div className="flex flex-col justify-center items-center">
                <div className="w-full flex flex-row justify-evenly">
                    <p className="mt-20 text-xl font-bold text-principal/95 sm:text-4xl">
                        {formatPlayingTime(playingTime)}
                    </p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {mision.images.map((image) => (
                        <div key={image.name} className="group relative">
                        <div className="aspect-[1/1] w-full object-contain overflow-hidden bg-gray-200 lg:aspect-none lg:h-94">
                            <img
                            src={image.src}
                            alt={image.name}
                            className="h-full w-full object-fit object-center lg:h-full lg:w-full"
                            />
                        </div>
                        </div>
                    ))}
                    </div>
                <div className="mt-6 flex flex-col gap-4 lg:flex-row justify-center items-center">
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
                                <label className="text-red-500 font-medium text-base">
                                    Error
                                    </label>
                                : null
                        }
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="flex-non rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-principal/95 shadow-sm hover:bg-gray-700/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-700/50"
                        >
                        Enviar respuesta
                    </button>
                </div>
            </div> 

                :
                    playingTime === 0?
                        <div className="flex items-center justify-center">
                            <button
                                onClick={() => setPlaying(true)}
                                className="flex-non mt-4 ml-4 rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-principal/95 shadow-sm hover:bg-gray-700/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-700/50"
                                >
                                <img src={PistasBtn} alt="Develar pistas" className="h-32 w-auto" />
                            </button>
                        </div>
                    : null
            }
            {
                won && !playing ? 
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-principal sm:text-4xl">
                            Bien hecho agente lo conseguiste en {formatPlayingTime(playingTime)}, espera nuevas instrucciones
                        </p>            
                    </div> 
                : null
            }
            </div>
        </div>
    )
}

export default Mision;