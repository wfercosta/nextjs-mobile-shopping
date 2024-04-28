import "./globals.css";
import {
  ArrowPathIcon,
  BanknotesIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  ListBulletIcon,
  MapPinIcon,
  ShareIcon,
  ShoppingBagIcon,
  TruckIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import Navigation from "./components/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer />
      </body>
    </html>
  );
}
