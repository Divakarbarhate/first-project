import Image from "next/image";
import CurdOperation from "../components/CurdOperation"
import ThemeToggler from "@/components/Header/ThemeToggler";
import { Metadata } from "next";

export const metaData:Metadata = {
  title: "Home Page",
  description: "This is the home page of the website",
}

export default function Home() {

  console.log("This is Server Side component");
  return (
    <>
    {/* <ThemeToggler/> */}

    <CurdOperation />
    </>
  );
}
