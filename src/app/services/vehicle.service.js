import axiosInstance from "../axios";


const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}vehicles/`


/**
 * Función para consultar con el backend la lista de todos los vehiculos.
 * @returns La data enviada desde el backend. 
 */
export const vehiclesList = async () => {
    const response = await axiosInstance.get(`${API_URL}`);
    if (response.status === 200) {
      return await response.data;
    }
  };

  /**
 * Función para consultar con el backend un vehiculo con el id específico.
 * @returns La data enviada desde el backend. 
 */

  export const getVehicle = async (vehicle_id) => {
    const response = await axiosInstance.get(`${API_URL}${vehicle_id}`);
    if (response.status === 200) {
      return await response.data;
    }
  };

  /**
 * Función Post para enviar los datos del formulario de registro de un nuevo vehiculo.
 * @returns La data enviada desde el backend. 
 */
export const RegisterVehicle = async (new_vehicle) => {
    const response = await axiosInstance.post(API_URL, new_vehicle);
    if (response.status === 201) {
      return await response.data;
    }
    else if(response.status === 400) {
      return await response.data;
    }
  };

  /**
 * Función para actualizar un vehiculo.
 * @returns La data enviada desde el backend. 
 */

  export const UpdateVehicle = async (vehicle_id, updated_vehicle) => {
    const response = await axiosInstance.put(
      API_URL + vehicle_id + "/",
      updated_vehicle
    );
    if (response.status === 200) {
      return await response.data;
    }
  };

/**
 * Función para eliminar un vehiculo.
 * @returns La data enviada desde el backend. 
 */
export const DeleteVehicle = async (vehicle_id) => {
  const response = await axiosInstance.delete(`${API_URL}${vehicle_id}`);
    if (response.status === 204) {
      console.log("Data eliminada!");
      return response;
    }
  };