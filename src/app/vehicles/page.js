"use client";
import { useState } from "react";
import FormVehicle from "./components/form.vehicle";
import ListVehicle from "./components/list.vehicle";
import Footer from "./components/footer";

import * as VehicleServer from "../services/vehicle.service";

export const dynamic = "force-dynamic"

function Vehicle(params) {
    const [vehicles, setVehicles] = useState(null)
    const [vehicle_data, setVehicle_data] = useState(null);
    const [editing, setEditing] = useState(false);
    const [isHidden, setIsHidden] = useState(true);


    const deleteVehicle = async (vehicleId) => {
        try {
        const result = await VehicleServer.DeleteVehicle(vehicleId);
        setVehicles((prevVehicles) => prevVehicles.filter((vehicle) => vehicle.id !== vehicleId));
        } catch (error) {
        console.error("Error deleting vehicle:", error); 
        }
    };
    const page = (vehicle, control_action) => {
        if (control_action === "add") {
            setVehicle_data(vehicle);
            setEditing(true);
            setIsHidden(false);
        } else {
            deleteVehicle(vehicle.id);
        }
    }
    const updateVehicles = (newVehicle) => {
        if (!editing) {
            setEditing(false);
            setVehicles((vehicles) => [...vehicles, newVehicle]); 
        }        
      };

    return (
        <div className="container mx-auto bg-white">
            <div className="flex gap-x-10">
                <FormVehicle 
                vehicle_data={vehicle_data} 
                setVehicle_data={setVehicle_data} 
                editing={editing} 
                setEditing={setEditing}
                updateVehicles={updateVehicles}
                isHidden = {isHidden}
                setIsHidden = {setIsHidden}
                />
                <ListVehicle 
                page={page} 
                setVehicles={setVehicles}
                vehicles = {vehicles}
                editing = {editing}
                />
            </div>
            <Footer/>
        </div>
    )
}
export default Vehicle;