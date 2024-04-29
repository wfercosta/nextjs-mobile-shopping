"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  ShareIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

type CustomerType = {
  zipcode: string;
  city: string;
  address: string;
  loyalty: {
    points: string;
    cashback: string;
  };
};

export default function Navigation() {
  let [customer, setCustomer] = useState<CustomerType>();

  useEffect(() => {
    async function execute() {
      const res = await fetch(
        "https://d1foq43mo0xvfa.cloudfront.net/api/customer"
      );
      const data = await res.json();
      console.log(data);
      setCustomer(data as unknown as CustomerType);
    }
    execute();
  }, []);

  return (
    <header className=" flex-col">
      <div className="flex justify-between p-5 bg-blue-700">
        <div className="flex  space-x-5">
          <ChevronLeftIcon className="w-6" />
          <span className="text-sm">produto</span>
        </div>
        <div className="flex space-x-10">
          <ShareIcon className="w-6" />
          <ShoppingBagIcon className="w-6" />
          <UserCircleIcon className="w-6" />
        </div>
      </div>
      <div className="flex justify-between bg-gray-200 border-2 border-t-orange-500 border-b-gray-300 p-2">
        <div className="flex items-center">
          <MapPinIcon className="w-6 border text-gray-500 " />
          <span className="text-gray-500 text-xs">
            enviar para <b>{customer?.zipcode}</b>, {customer?.city}
          </span>
        </div>
        <ChevronRightIcon className="w-6 text-gray-500" />
      </div>
    </header>
  );
}
