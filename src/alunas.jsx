import { Disclosure, Menu, Transition } from "@headlessui/react";
import Geo from "./assets/images/geogebra.jpg";
import Madu from "./assets/images/maduu.jpg";

const navigation = [
  { name: "Estação MeteorolóGica", href: "/", current: false },
  { name: "Componentes Eletrônicos", href: "/componentes", current: false },
  { name: "Tecnologias", href: "/tecnologias", current: false },
  { name: "Alunas", href: "/alunas", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Alunas() {
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
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
                <div className="flex justify-around mt-2">
                  <div className="flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-2">
                      <span className="text-indigo-400">G</span>eórgia Carin
                    </h1>
                    <img
                      src={Geo}
                      alt=""
                      className="w-52 h-52 rounded-full mx-auto"
                    />
                    <p className="mt-4 max-w-sm text-justify">
                      &nbsp;Geórgia Carin é aluna do 4° semestre de Ciências e
                      tecnologia na UFRN. Atualmente é monitora de Pré-Cálculo e Cálculo
                      1 na ECT.
                    </p>
                  </div>
                  <div className="flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-2">
                      <span className="text-indigo-400">M</span>aria Eduarda Luz
                    </h1>
                    <img
                      src={Madu}
                      alt=""
                      className="w-52 h-52 rounded-full mx-auto"
                    />
                    <p className="mt-4 max-w-sm text-justify">
                      &nbsp;Maria Eduarda Luz é aluna do 4° semestre de Ciências
                      e tecnologia na UFRN. Atualmente faz iniciação tecnológica e faz
                      estágio de desenvolvimento Web na Radix.
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
