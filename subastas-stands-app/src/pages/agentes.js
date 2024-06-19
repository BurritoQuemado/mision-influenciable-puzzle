import React from "react";
import ArchivoBtn from "../assets/images/boton-archivo.webp"
import Agente1Img from "../assets/images/agentes/agente1.webp"
import Agente2Img from "../assets/images/agentes/agente2.webp"
import Agente3Img from "../assets/images/agentes/agente3.webp"
import Agente4Img from "../assets/images/agentes/agente4.webp"
import Agente5Img from "../assets/images/agentes/agente5.webp"
import Agente6Img from "../assets/images/agentes/agente6.webp"
import Agente7Img from "../assets/images/agentes/agente7.webp"
import Agente8Img from "../assets/images/agentes/agente8.webp"

const people = [
    {
        name: 'Agente 1',
        username: 'agente1',
        imageUrl: Agente1Img,
        active: true
    },
    {
        name: 'Agente 2',
        username: 'agente2',
        imageUrl: Agente2Img,
        active: true
    },
    {
        name: 'Agente 3',
        username: 'agente3',
        imageUrl: Agente3Img,
        active: true
    },
    {
        name: 'Agente 4',
        username: 'agente4',
        imageUrl: Agente4Img,
        active: true
    },
    {
        name: 'Agente 5',
        username: 'agente5',
        imageUrl: Agente5Img,
        active: true
    },
    {
        name: 'Agente 6',
        username: 'agente6',
        imageUrl: Agente6Img,
        active: true
    },
    {
        name: 'Agente 7',
        username: 'agente7',
        imageUrl: Agente7Img,
        active: true
    },
    {
        name: 'Agente 8',
        username: 'agente8',
        imageUrl: Agente8Img,
        active: true
    },
  ]

function Agentes(){
    return (
        <div className="bg-black py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-principal sm:text-4xl">Nuestros Agentes</h2>
                <p className="mt-6 text-lg leading-8 text-principal/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
                <ul
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
                >
                {people.map((person) => (
                    <li key={person.name} className="border border-principal rounded-xl p-4">
                        <img className="w-full rounded-2xl object-cover" src={person.imageUrl} alt={person.name} />
                        <h3 className="mt-6 text-lg font-semibold leading-8 text-center tracking-tight text-principal">{person.name}</h3>
                        <div className="mt-6 flex items-center justify-center gap-x-6">
                        <a
                            href={`/agente/${person.username}`}
                            className="rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-principal/80 shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <img src={ArchivoBtn} alt="ver archivo" className="h-20 w-auto"  />
                            </a>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default Agentes;