"use client";

import { useState } from "react";
import FormVehicle from "./components/form.vehicle";
import ListVehicle from "./components/list.vehicle";

function Vehicle(params) {
    const [vehicle_data, setVehicle_data] = useState(null);
    const [editing, setEditing] = useState(false);

    const page = (vehicle) => {
      setVehicle_data(vehicle);
      setEditing(true);
    }
    return (
        <div className="container mx-auto">
            <div className="flex gap-x-10">
                <FormVehicle 
                vehicle_data={vehicle_data} 
                setVehicle_data={setVehicle_data} 
                editing={editing} 
                setEditing={setEditing} 
                />
                <ListVehicle page={page}/>
            </div>
        </div>
    )
}
export default Vehicle;