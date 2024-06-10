import React from "react";

function Home() {
    
    return (
        <div className="bg-black">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-principal sm:text-4xl">
                Bienvenido Agente
              </h2>
              <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="mt-6 flex max-w-md gap-x-4">
                  <label htmlFor="access-code" className="sr-only">
                    Access code
                  </label>
                  <input
                    id="access-code"
                    name="access-code"
                    type="password"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Access Code"
                  />
                  <button
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