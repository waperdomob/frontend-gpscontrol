import Image from "next/image";
import Link from 'next/link'

import Telefono from "../../public/Assets/Telefono-01.png";
import motion from "../../public/Assets/Imagologo_motion.svg";

import './globals.css';

export default function Home() {
  const SvgComponent = (props) => (
    <svg width="250" height="150" viewBox="0 0 250 150" id="verde">
      <path d="M50,130   L90,105  A40,45 -30 1,1 150 80  L200,55" style="stroke:#007700; stroke-width:3; fill:none;"></path>
    </svg>
  )
  return (
    <main className=" text-montserrat-xl" >
      <hr className="wave-element"></hr>
      <Image src={motion} alt="phone" to="/vehicles"/>
      <div className="flex min-h-screen flex-col items-center justify-center p-24 text-[#00249C]">
        <div className="absolute text-8xl mb-12 pb-8 font-bold" style={{zIndex:1}}>
          <h1>BIENVENIDO A</h1>
        </div>
        <div className="absolute" style={{zIndex:2}}>
          <Link href="/vehicles">
            <Image src={Telefono} alt="phone" to="/vehicles"/>
          </Link>          
        </div>
        <div className=" texto-resaltado texto-resaltado2 absolute text-6xl mt-12 pt-8 font-semibold" style={{zIndex:3}}>
          <h1>MONITORIN INNOVATION</h1>
        </div>
      </div>
      <div className="flex justify-between fixed bottom-20 w-full px-40 text-[#01BEDB]">
          <a href="https://monitoringinnovation.com/">MONITORINGINNOVATION</a>
          <a href="https://gpscontrol.co/">GPS CONTROL</a>
          <a href="https://github.com/waperdomob/frontend-gpscontrol">Link repo front</a>
          <a href="https://github.com/waperdomob/gpscontrol-backend">Link repo back</a>
      </div>
    </main>
  );
}
