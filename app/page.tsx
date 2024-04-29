"use client";
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
import Navigation from "./components/navigation";
import { CustomerType, OfferType, PdpType } from "./components/types";
import { useEffect, useState } from "react";

const baseUrl = "https://d1foq43mo0xvfa.cloudfront.net";

export async function fetchData() {
  let res = await fetch(`${baseUrl}/api/customer`);
  const customer = await res.json();
  console.log(customer);

  res = await fetch(`${baseUrl}/api/pdp`);
  const pdp = await res.json();
  console.log(pdp);

  res = await fetch(`${baseUrl}/api/offer`);
  const offer = await res.json();
  console.log(offer);

  return { customer, pdp, offer };
}

export default function Home() {
  const [customer, setCustomer] = useState<CustomerType>();
  const [offer, setOffer] = useState<OfferType>();
  const [pdp, setPdp] = useState<PdpType>();
  const [isLoading, setLoadingState] = useState<boolean>(true);

  useEffect(() => {
    async function execute() {
      let res = await fetch(`${baseUrl}/api/customer`);
      let data = await res.json();
      console.log(data);
      setCustomer(data as unknown as CustomerType);

      res = await fetch(`${baseUrl}/api/pdp`);
      data = await res.json();
      console.log(data);
      setPdp(data as unknown as PdpType);

      res = await fetch(`${baseUrl}/api/offer`);
      data = await res.json();
      console.log(data);
      setOffer(data as unknown as OfferType);

      setLoadingState(false);
    }
    execute();
  }, []);

  // const {
  //   customer,
  //   pdp,
  //   offer,
  // }: { customer: CustomerType; pdp: PdpType; offer: OfferType } =
  //   await fetchData();

  return isLoading ? (
    <p>LOADING</p>
  ) : (
    <>
      <Navigation customer={customer} />
      <main>
        <section className="produtct-details">
          <article>
            <section>
              <div className="p-5 space-y-10">
                <p className="text-gray-500 text-sm">{pdp?.name}</p>
                <figure>
                  {pdp && (
                    <Image
                      src={`${baseUrl}${pdp.image.url}`}
                      width={500}
                      height={500}
                      alt={pdp.image.alt}
                      priority={true}
                    />
                  )}
                  <figcaption>{pdp?.image.alt}</figcaption>
                </figure>
                <div className="flex flex-col text-gray-500 text-xs">
                  <span className="text-lg text-orange-500 font-semibold">
                    {offer?.price}
                  </span>
                  <span>
                    <b>{offer?.installments.times}</b> de&nbsp;
                    <b>{offer?.installments.value}</b> sem juros
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
                          entrega: <b>{offer?.shipping.value}</b>
                        </span>
                        <span>
                          <b>{offer?.shipping.date}</b>
                        </span>
                      </div>
                    </div>
                    <ChevronRightIcon className="w-4 text-gray-400" />
                  </div>
                  <div className="line-clamp-1">{customer?.address}</div>
                </div>
                <p className="text-gray-500 text-xs">
                  Vendido e entregue por: <b>{offer?.seller}</b>
                </p>
                <CallActionButton label="comprar" />
                <div className="text-xs text-gray-500 flex space-x-5">
                  <BanknotesIcon className="text-blue-700 w-6" />
                  <span>
                    Use o seu saldo de <b>pontos e cashback</b> na hora de
                    pagar:&nbsp;
                    <span className="text-blue-700">
                      {customer?.loyalty.cashback}
                    </span>
                    &nbsp;({customer?.loyalty.points} pts)
                  </span>
                </div>
                <div className="text-xs text-gray-500 flex space-x-5 bg-gray-100  p-4 rounded-lg">
                  <ArrowPathIcon className="w-6" />
                  <span>
                    Você poderá <b>trocarr ou devolver o produto</b> em até 7
                    dias após recebê-lo
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
      </main>
    </>
  );
}
