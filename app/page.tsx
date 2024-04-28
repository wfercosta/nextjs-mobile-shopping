import {
  ArrowPathIcon,
  BanknotesIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  ListBulletIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { CallActionButton, InformationButton } from "./components/buttons";

export default function Home() {
  return (
    <section className="produtct-details">
      <article>
        <section>
          <div className="p-5 space-y-10">
            <p className="text-gray-500 text-sm">
              Copo Térmico Stanley Everyday 296ml Branco
            </p>
            <figure>
              <Image
                src={"/assets/stanley-erveryday.png"}
                width={500}
                height={500}
                alt="Copo Térmico Stanley Everyday 296ml Branco"
              />
              <figcaption>
                Copo Térmico Stanley Everyday 296ml Branco
              </figcaption>
            </figure>
            <div className="flex flex-col text-gray-500 text-xs">
              <span className="text-lg text-orange-500 font-semibold">
                R$ 185,00
              </span>
              <span>
                <b>12x</b> de <b>R$ 15,42</b> sem juros
              </span>
            </div>
            <div className="flex justify-between text-blue-700 text-xs rounded-sm bg-blue-100 p-2 items-center">
              <span>
                pague à vista com Pix e <b>ganhe 5% de desconto</b>
              </span>
              <InformationCircleIcon className="w-4 text-blue-700" />
            </div>
            <div className="text-gray-500 text-xs border border-gray-300 rounded-md p-2 space-y-5">
              <div className="flex justify-between">
                <div className="flex items-center space-x-5">
                  <TruckIcon className="w-10" />
                  <div className="flex flex-col">
                    <span>
                      entrega: <b>R$ 15,18</b>
                    </span>
                    <span>
                      <b>quarta-feira 8 de maio</b>
                    </span>
                  </div>
                </div>
                <ChevronRightIcon className="w-4 text-gray-400" />
              </div>
              <div className="line-clamp-1">
                R. ANY WHERE, 438, ANY NEIBORHOOD, COMPLEMENTS - CITTY - STATE
              </div>
            </div>
            <p className="text-gray-500 text-xs">
              Vendido e entregue por: <b>Top Store</b>
            </p>
            <CallActionButton label="comprar" />
            <div className="text-xs text-gray-500 flex space-x-5">
              <BanknotesIcon className="text-blue-700 w-6" />
              <span>
                Use o seu saldo de <b>pontos e cashback</b> na hora de pagar:{" "}
                <span className="text-blue-700">R$ 252,000</span>
                &nbsp;(5.080 pts)
              </span>
            </div>
            <div className="text-xs text-gray-500 flex space-x-5 bg-gray-100  p-4 rounded-lg">
              <ArrowPathIcon className="w-6" />
              <span>
                Você poderá <b>trocarr ou devolver o produto</b> em até 7 dias
                após recebê-lo
              </span>
            </div>
          </div>
        </section>
        <section>
          <div className="p-3 flex-col space-y-2">
            <InformationButton
              Icon={CurrencyDollarIcon}
              label="formas de pagamento"
            />
            <InformationButton
              Icon={ListBulletIcon}
              label="descrição do produto"
            />
            <InformationButton
              Icon={DocumentTextIcon}
              label="características do produto"
            />
            <InformationButton
              Icon={BanknotesIcon}
              label="regras de Pontos e Cashback"
            />
          </div>
        </section>
      </article>
    </section>
  );
}
