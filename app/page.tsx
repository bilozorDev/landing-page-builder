"use client";
import { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Settings from "@/components/SettingsSlider/Settings";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Body from "@/components/Body/Body";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-screen flex flex-col ">
      <div>
        <Banner />
        <Header />
      </div>

      <Body />
      <div className="mt-auto ">

      <Footer />
      </div>
      <Settings show={open} setShow={setOpen} />
      <div
        className="  top-24 right-0 fixed flex justify-end pr-7 py-2 items-center group hover:cursor-pointer "
        onClick={() => setOpen(true)}
      >
        <ArrowLeftIcon className="h-6 w-6 inline-flex group-hover:mr-2 transition-all duration-300" />
        <span className="font-thin">Settings </span>
      </div>
    </div>
  );
}
