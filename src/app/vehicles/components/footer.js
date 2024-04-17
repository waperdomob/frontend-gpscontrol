import React from 'react';
import Image from "next/image";
import Imagologo_motion from "../../../../public/Assets/Imagologo_motion.svg";
import Imagologotipo_motion from "../../../../public/Assets/Imagologotipo_motion.svg";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-4">
      <Image
        className="h-10 w-auto"
        src={Imagologo_motion}
        alt="Footer Image"
      />
      <Image
        className="h-10 w-auto absolute ml-12 mb-2" // Set top position to 0
        src={Imagologotipo_motion}
        alt="Footer Image"
      />
    </footer>
  );
};

export default Footer;
