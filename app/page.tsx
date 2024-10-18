import Image from "next/image";
import CurdOperation from "../components/CurdOperation"
import ThemeToggler from "@/components/Header/ThemeToggler";

export default function Home() {

  console.log("This is Server Side component");
  return (
    <>
    {/* <ThemeToggler/> */}

    <CurdOperation />
    </>
  );
}
