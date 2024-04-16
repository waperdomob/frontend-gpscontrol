"use client";

import React, { useState, useEffect } from "react";
export const dynamic = "force-dynamic"
import { useRouter } from "next/navigation";
import * as VehicleServer from "../../services/vehicle.service";

const FormVehicle= ({vehicle_data, setVehicle_data, editing, setEditing}) =>{
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
                setEditing(false);
                router.refresh();
            } catch (error) {
                console.log("error",error);
            }
        }
        else {
            try {
                const res = await VehicleServer.RegisterVehicle(formData);
                router.refresh();
            } catch (error) {
                console.log("error", error);
            }
        }
    };

    const ClickCancel = (e) => {
        e.preventDefault();
        setVehicle_data({
            id: 0,
            marca: "",
            sucursal: "",
            aspirante: ""
        });
        setEditing(false); // Reset editing state (if applicable)
    }
    
    return (
        
        <div className='rounded-md space-y-3 p-10 border border-[#C5C5C5] '>
        <form action=""  onSubmit={handleSubmit}>
            <input 
            value={vehicle_data?.marca || ""}
            type="text" name='marca' 
            className='block rounded-md border-0 p-2 mb-2 w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
            onChange={handleInputChange}/>
            <input 
            value={vehicle_data?.sucursal || ""}
            type="text" name='sucursal'
            className='block rounded-md border-0 p-2 mb-2 w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6' 
            onChange={handleInputChange}/>
            <input 
            value={vehicle_data?.aspirante || ""}
            type="text" name='aspirante'
            className='block rounded-md border-0 p-2 mb-2 w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6' 
            onChange={handleInputChange}/>
            
            <div className="flex justify-between gap-x-2">
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
        </form>
        </div>
    )}


export default FormVehicle
