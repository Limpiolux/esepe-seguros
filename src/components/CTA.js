import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { AiOutlinePhone,AiOutlineArrowDown } from "react-icons/ai";

function CTA() {
  return (

<section className="overflow-hidden sm:grid sm:grid-cols-2">
    
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div
      className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
    >
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
      Confianza y Experiencia en Seguros de Autos
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
      Mantén tu inversión más preciada, tu vehículo, protegida con Esepe Seguros Nuestro compromiso es tu seguridad y tranquilidad en cada viaje. Completa el formulario y da el primer paso hacia una conducción más segura en Argentina.
      </p>

      <div className="mt-4 md:mt-8">
      <Button as={Link} style={{backgroundColor:"#339999"}} href="#llenar" variant="flat">
        <AiOutlineArrowDown className="text-white"/>
            <span className="text-white	">Llená formulario</span>
          </Button>
      </div>
    </div>
  </div>

  <img
    alt="Student"
    src="https://sayhueque.com/wp-content/uploads/2020/11/self-drive-torres-del-paine.jpg"
    className="h-56 w-full object-cover sm:h-full"
    style={{height: "450px"}}
  />
</section>

  );
}

export default CTA;
