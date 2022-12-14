import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Estação MeteorolóGica", href: "/", current: true },
  { name: "Componentes Eletrônicos", href: "/componentes", current: false },
  { name: "Tecnologias", href: "/tecnologias", current: false },
  { name: "Alunas", href: "/alunas", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function iot() {
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
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
                <div className="flex justify-around mt-6">
                  <div className="">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-2">
                      Umidade <span className="text-indigo-400">[DHT11]</span>
                    </h1>
                    <iframe
                      className="w-[500px] h-72 border border-white p-1 bg-indigo-300 rounded-xl"
                      src="https://thingspeak.com/channels/1980487/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=.&type=line"
                    ></iframe>
                  </div>
                  <div className="">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-2 ">
                      Temperatura{" "}
                      <span className="text-indigo-400">[DHT11]</span>
                    </h1>
                    <iframe
                      className="w-[500px] h-72 border border-white p-1 bg-indigo-300 rounded-xl"
                      src="https://thingspeak.com/channels/1980487/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=.&type=line"
                    ></iframe>
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
