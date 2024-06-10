import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const people = [
    {
        name: 'Agente W',
        username: 'werevertumorro',
        imageUrl:
        'https://pbs.twimg.com/profile_images/1660218462193549313/O_uIodQF_400x400.jpg',
        active: true
    },
    {
        name: 'Agente W',
        username: 'werevertumorro',
        imageUrl:
        'https://pbs.twimg.com/profile_images/1660218462193549313/O_uIodQF_400x400.jpg',
        active: true
    },
    {
        name: 'Agente W',
        username: 'werevertumorro',
        imageUrl:
        'https://pbs.twimg.com/profile_images/1660218462193549313/O_uIodQF_400x400.jpg',
        active: true
    },
    {
        name: 'Agente W',
        username: 'werevertumorro',
        imageUrl:
        'https://pbs.twimg.com/profile_images/1660218462193549313/O_uIodQF_400x400.jpg',
        active: true
    },
    {
        name: 'Agente W',
        username: 'werevertumorro',
        imageUrl:
        'https://pbs.twimg.com/profile_images/1660218462193549313/O_uIodQF_400x400.jpg',
        active: true
    },
    {
        name: 'Agente W',
        username: 'werevertumorro',
        imageUrl:
        'https://pbs.twimg.com/profile_images/1660218462193549313/O_uIodQF_400x400.jpg',
        active: true
    },
    {
        name: 'Agente W',
        username: 'werevertumorro',
        imageUrl:
        'https://pbs.twimg.com/profile_images/1660218462193549313/O_uIodQF_400x400.jpg',
        active: true
    },
    {
        name: 'Agente W',
        username: 'werevertumorro',
        imageUrl:
        'https://pbs.twimg.com/profile_images/1660218462193549313/O_uIodQF_400x400.jpg',
        active: true
    },
  ]

function Agentes(){
    return (
        <div className="bg-black py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
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
                            className="rounded-md bg-gray-900/95 px-3.5 py-2.5 text-sm font-semibold text-principal/80 shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Archivo del agente <ArrowRightIcon className="inline h-6 w-6"/>
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