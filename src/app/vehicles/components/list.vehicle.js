"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import eliminarBh from "../../../../public/Assets/Icon_eliminar.svg";
import editarBt from "../../../../public/Assets/Icon_editar.svg";
import eliminarBh1 from "../../../../public/Assets/Icon_eliminar1.svg";
import editarBt1 from "../../../../public/Assets/Icon_editar1.svg";

import * as VehicleServer from "../../services/vehicle.service";

export const dynamic = "force-dynamic"


const ListVehicle= ({page, vehicles, setVehicles, editing}) =>{
    
    const getEditButtonImage = (vehicleid) => {
        return editing && vehicleid ? editarBt1 : editarBt; 
      };
    
    const getDeleteButtonImage = (vehicleid) => {
        return editing && vehicleid ? eliminarBh1 : eliminarBh; 
      };

    useEffect(() => {
        const fetchData = async () => {
            try {
              const result = await VehicleServer.vehiclesList();
              setVehicles(result);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
    }, [editing]);

    if (vehicles) {
        return (
            <div className='p-4 w-full'>
            <br />
            <table className="w-full text-md text-left rtl:text-center">
                <thead className="text-center">
                    <tr className="bg-[#E280BE] text-white font-medium">
                        <th className="px-4 border-4 border-white">Marca</th>
                        <th className="px-4 border-4 border-white">Sucursal</th>
                        <th className="px-4 border-4 border-white">Aspirante</th>
                    </tr>
                </thead>
                <tbody>
                { vehicles.map(vehicle => (
                    <tr key={vehicle.id} className="border-b border-[#E280BE]">
                        <td>{vehicle.marca}</td>
                        <td>{vehicle.sucursal}</td>
                        <td>
                            <div className="flex justify-between gap-x-2">
                                <div >{vehicle.aspirante}</div>
                                <div >
                                    <button className="appearance-none cursor-pointer bg-transparent float-left mr-2" onClick={() => page(vehicle, "add")}>
                                        <Image src={getEditButtonImage(vehicle.id)} className="w-5 h-5 rounded-full" alt="Botón 2"/>
                                    </button>
                                    <button className="appearance-none cursor-pointer bg-transparent float-right ml-2" onClick={() => page(vehicle, "delete")}>
                                        <Image src={getDeleteButtonImage(vehicle.id)} className="w-5 h-5 rounded-full" alt="Botón 1"/>
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )}
    }


export default ListVehicle
