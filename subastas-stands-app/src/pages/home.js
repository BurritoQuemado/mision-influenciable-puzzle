import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import MisionVideo from "../assets/video/mision.mp4"

const valid_codes = [
  "123abc"
]

const initialValues = {
  accessCode: '',
}

function Home() {
  
  const [formValues, setFormValues] = useState(initialValues);
  const [denied_access, setDeniedAccess] = useState(false);

  const navigate = useNavigate();
  
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formValues)
      if (valid_codes.find(code => code === formValues.accessCode)) {
          navigate(`/mision/${formValues.accessCode}`)
      } else {
        setDeniedAccess(true);
      }
    };

    return (
        <div className="bg-transparent px-4 rounded-xl">
          <div className="mx-auto max-w-7xl pt-12 lg:py-24 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-10  lg:py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-principal sm:text-4xl">
                Te damos la bienvenida, para iniciar ingresa el código único que te fue proporcionado:
              </h2>
              <div className="pt-10 w-full h-[480px]">
                    <iframe
                        className="w-full h-full aspect-video"
                        src={MisionVideo}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        title="Youtube video"
                        allowFullScreen
                    ></iframe>
                </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="mt-6 flex flex-col gap-4 lg:flex-row max-w-md gap-x-4">
                  <label htmlFor="accessCode" className="sr-only">
                    Access code
                  </label>
                  {
                    denied_access? 
                    <label className="text-principal/90 font-medium text-base">
                      Access code invalid
                    </label>
                    : null
                  }
                  <input
                    id="accessCode"
                    name="accessCode"
                    type="password"
                    onChange={handleChange}
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Access Code"
                    />
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-principal/95 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                    Ingresar
                  </button>

                </div>
              </div>
            </div>
          </div>
      </div>
    );
}

export default Home;