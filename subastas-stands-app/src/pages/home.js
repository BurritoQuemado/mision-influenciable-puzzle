import React from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

function Home() {
    
    return (
        <div className="bg-black">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-principal sm:text-4xl">
                Misión Influencible
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-principal">
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/agentes"
                  className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-principal/95 shadow-sm hover:bg-gray-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Conoce a los agentes <ArrowRightIcon className="inline h-6 w-6"/>
                </a>
              </div>
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
              >
                <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.9" />
                <defs>
                  <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                    <stop stopColor="#65a890" />
                    <stop offset={1} stopColor="#a43722" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
      </div>
    );
}

export default Home;