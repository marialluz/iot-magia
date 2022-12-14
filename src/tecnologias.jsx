import { Disclosure, Menu, Transition } from "@headlessui/react";
import React from "react";
import Arduino from "./assets/images/arduino.png"
import ReactLogo from "./assets/images/react.png"
import Tailwind from "./assets/images/tailwind.jpg"
import Thing from "./assets/images/thingspeak.png"

const navigation = [
  { name: "Estação MeteorolóGica", href: "/", current: false },
  { name: "Componentes Eletrônicos", href: "/componentes", current: false },
  { name: "Tecnologias", href: "/tecnologias", current: true },
  { name: "Alunas", href: "/alunas", current: false },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Componentes() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Estação <span className="text-indigo-400">M</span>eteoroló
              <span className="text-indigo-400">G</span>ica
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
                <div className="grid gap-8 grid-cols-2 grid-rows-2 mt-4">
                  <div className="flex-col items-center justify-center">
                    <img src={Arduino} alt="Logo arduino" className="w-32 mx-auto" />
                    <p className="text-center mt-2">Plataforma de prototipagem eletrônica</p>
                  </div>
                  <div className="flex-col items-center justify-center">
                    <img src={ReactLogo} alt="Logo react" className="w-36 mx-auto" />
                    <p className="text-center mt-2">Biblioteca front-end JavaScript</p>
                  </div>
                  {/* <div className="flex-col items-center justify-center">
                    <img src={Bmp} alt="BMP180" className="w-36 mx-auto" />
                    <p className="text-center">Sensor de Temperatura e Pressão</p>
                  </div> */}
                  <div className="flex-col items-center justify-center">
                    <img src={Tailwind} alt="Logo Tailwind" className="w-48 mx-auto" />
                    <p className="text-center">Estrutura CSS de código aberto</p>
                  </div>
                  <div className="flex-col items-center justify-center">
                    <img src={Thing} alt="Logo ThingSpeak" className="w-36 mx-auto" />
                    <p className="text-center mt-2">Software de comunicação Wifi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
