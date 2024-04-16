"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export const dynamic = "force-dynamic"
import { useRouter } from "next/navigation";
import * as VehicleServer from "../../services/vehicle.service";

import Icon_crear from "../../../../public/Assets/Icon_crear.svg";
import Icon_vehiculo from "../../../../public/Assets/Icon_vehiculo.svg";
import Icon_puntoubicacion from "../../../../public/Assets/Icon_puntoubicacion.svg";
import Icon_persona from "../../../../public/Assets/Icon_persona.svg";


const FormVehicle= ({vehicle_data, setVehicle_data, editing, setEditing, updateVehicles, isHidden, setIsHidden}) =>{
    const router = useRouter();
    const handleInputChange = (e) => {
        let target = e.target;
        let name = target.name;
        setVehicle_data({ ...vehicle_data, [name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("marca", vehicle_data.marca);
        formData.append("sucursal", vehicle_data.sucursal);
        formData.append("aspirante", vehicle_data.aspirante);
        if (editing) {
            try {
                const res = await VehicleServer.UpdateVehicle(vehicle_data.id, formData);
                updateVehicles(res)
                setEditing(false);
                router.refresh();
            } catch (error) {
                console.log("error",error);
            }
        }
        else {
            try {
                const res = await VehicleServer.RegisterVehicle(formData);
                updateVehicles(res)
                router.refresh();
            } catch (error) {
                console.log("error", error);
            }
        }
        setVehicle();
    };
    const setVehicle = () =>{
        setVehicle_data({
            id: 0,
            marca: "",
            sucursal: "",
            aspirante: ""
        });
    }
    const ClickCancel = (e) => {
        e.preventDefault();
        setVehicle();
        setEditing(false);
        setIsHidden(true);
    }
    
    return (
        
        <div className='rounded-md space-y-5 p-10 border border-[#C5C5C5] '>
            <button 
                onClick={()=>{setIsHidden(false)}}
            >
                <Image src={Icon_crear} className="w-5 h-5 flex items-start" alt="Botón 2"/>
            </button>
        <form action=""  onSubmit={handleSubmit}>
            <div className="flex justify-between gap-x-4 mb-2">
                <Image src={Icon_vehiculo}  alt="Botón 2"/>
                <input 
                value={vehicle_data?.marca || ""}
                type="text" name='marca' 
                className='block rounded-md border-0 p-2 mb-2 w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-100 sm:text-sm sm:leading-6'
                onChange={handleInputChange}/>
            </div>
            <div className="flex justify-between gap-x-4 mb-2">
                <Image src={Icon_puntoubicacion}  alt="Botón 2"/>
                <input 
                value={vehicle_data?.sucursal || ""}
                type="text" name='sucursal'
                className='block rounded-md border-0 p-2 mb-2 w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6' 
                onChange={handleInputChange}/>
            </div>

            <div className="flex justify-between gap-x-4 mb-2">
                <Image src={Icon_persona}  alt="Botón 2"/>
                <input 
                value={vehicle_data?.aspirante || ""}
                type="text" name='aspirante'
                className='block rounded-md border-0 p-2 mb-2 w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6' 
                onChange={handleInputChange}/>
            </div>            
            {!isHidden && (
            <div className="flex justify-between gap-x-2 ">
                <button 
                onClick={ClickCancel}
                className="block rounded-md px-8 py-2 w-full text-gray-900 shadow-sm ring-1 ring-inset ring-red-600 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                >
                    Cancelar
                </button>
                <button type="submit" className="block rounded-md px-8 py-2 w-full text-gray-900 shadow-sm ring-1 ring-inset ring-01BEDB-600 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                    Crear
                </button>
            </div>
            )}
        </form>
        </div>
    )}


export default FormVehicle
