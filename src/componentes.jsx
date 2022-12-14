import { Disclosure, Menu, Transition } from "@headlessui/react";
import Bmp from "./assets/images/bmp180.jpg";
import Dht from "./assets/images/dht11.jpg";
import Esp from "./assets/images/esp32.jpg";
import Jumpers from "./assets/images/jumpers.jpg";
import Mini from "./assets/images/miniprotoboard.jpg";
import { Link } from "react-router-dom";


const navigation = [
  { name: "Estação MeteorolóGica", href: "/", current: false },
  { name: "Componentes Eletrônicos", href: "/componentes", current: true },
  { name: "Tecnologias", href: "/tecnologias", current: false },
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
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
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
                <div className="grid gap-8 grid-cols-2 grid-rows-2">
                  <div className="flex-col items-center justify-center">
                    <img src={Esp} alt="ESP32" className="w-36 mx-auto" />
                    <p className="text-center">Microcontrolador Wi-fi</p>
                  </div>
                  <div className="flex-col items-center justify-center">
                    <img src={Dht} alt="DHT11" className="w-36 mx-auto" />
                    <p className="text-center">
                      Sensor de Temperatura e Umidade
                    </p>
                  </div>
                  {/* <div className="flex-col items-center justify-center">
                    <img src={Bmp} alt="BMP180" className="w-36 mx-auto" />
                    <p className="text-center">Sensor de Temperatura e Pressão</p>
                  </div> */}
                  <div className="flex-col items-center justify-center">
                    <img
                      src={Jumpers}
                      alt="Fios jumpers"
                      className="w-36 mx-auto"
                    />
                    <p className="text-center">Fios para realizar conexões</p>
                  </div>
                  <div className="flex-col items-center justify-center">
                    <img
                      src={Mini}
                      alt="Mini protoboard"
                      className="w-36 mx-auto"
                    />
                    <p className="text-center">
                      Placa para auxiliar nas conexões
                    </p>
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
