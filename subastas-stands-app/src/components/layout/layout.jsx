import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import Logo from '../../assets/images/logo.webp'
import LogoGarra from '../../assets/images/logo-garra.webp'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


const navigation = [
    { 
      name: 'La Misión', 
      href: '/'
    },
    { 
      name: 'Nuestros Agentes', 
      href: '/agentes'
    },
]

const footerNavigation = {

  legal: [
    { name: 'Aviso de Privacidad', 
      href: '/privacidad' 
    },
  ],
}

class Layout extends Component{

  render() {
    const {logged_in, children, logout} = this.props;
    const logged = logged_in;
    return (
      <div className="bg-main bg-cover bg-no-repeat">
        <div className="relative overflow-hidden">
          <Popover as="header" className="relative">
            <div className="bg-black pt-4 pb-0">
              <nav
                className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
                aria-label="Global"
              >
                <div className="flex flex-1 items-center">
                  <div className="flex w-full items-center align-middle justify-between md:w-auto">
                    <Link to="/">
                      <span className="sr-only">Mision Influencible</span>
                      <img
                        className="h-10 w-auto lg:h-32"
                        src={Logo}
                        alt="logo"
                      />
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-principal p-2 text-black focus:outline-none focus:ring-2 focus:ring-black">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="hidden space-x-8 top-0 md:ml-10 md:flex">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-base font-medium text-principal hover:text-principal/50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-6">
                  { logged ?  
                     <Link
                        to='/'
                        onClick={logout}
                        className="inline-flex items-center rounded-md border border-transparent bg-principal px-4 py-2 text-base font-medium text-black"
                      >
                     Salir
                   </Link>
                  : null
                  }
                </div>
              </nav>
              <hr className='mt-4 bg-principal w-full h-2 lg:h-4' />
            </div>
  
            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel focus className="absolute inset-x-0 top-2 z-10 origin-top transform p-2 transition md:hidden">
                <div className="overflow-hidden rounded-lg bg-black shadow-md ring-1 ring-principal ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <Link to='/'>
                      <img
                        className="h-8 w-auto"
                        src={Logo}
                        alt="logo-empresa"
                      />
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-principal p-2 text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="pt-5 pb-6">
                    <div className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-principal"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    { logged ? <div className="mt-6 px-5">
                      <Link
                        to='/'
                        onClick={logout}
                        className="block w-full rounded-md bg-black py-3 px-4 text-center font-medium text-principal shadow hover:from-teal-600 hover:to-cyan-700"
                      >
                        Salir
                      </Link>
                    </div> 
                      : null 
                    }
                    
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <main className="container mx-auto sm:px-6 lg:px-8">
            {children}
          </main>
          <footer className="bg-gray-800" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
              Footer
            </h2>
            <div className="mx-auto max-w-md px-4 sm:max-w-7xl sm:px-6 lg:px-8 lg:pt-10">
            <div className="flex flex-col lg:flex-row items-center justify-evenly">
                <div className="py-4 flex flex-col  md:flex-row items-center justify-between gap-10 lg:gap-32">
                    <img
                        className="mx-auto h-32 w-auto"
                        src={ Logo }
                        alt="mision influencible"
                    />
                    <img
                        className="mx-auto h-56 w-auto"
                        src={ LogoGarra }
                        alt="mision influencible"
                    />
                </div>
                <div className="mt-0 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
                  <div className="md:grid md:grid-cols-1 md:gap-8">
                    <div className="mt-4 md:mt-0">
                      <h3 className="text-base font-medium text-principal/30">Legal</h3>
                      <ul className="mt-4 space-y-4">
                        {footerNavigation.legal.map((item) => (
                          <li key={item.name}>
                            <a target="_blank" rel='noreferrer' href={item.href} className="text-base text-principal/75 hover:text-principal/20">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 border-t border-principal py-8">
                <p className="text-base text-principal/40 xl:text-center">
                  &copy; 2024 - 2025 Polar Multimedia. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout;