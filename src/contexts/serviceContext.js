import React, { useReducer } from "react"
import { APIservices } from "../config/const";
import axios from 'axios';

export const serviceContext = React.createContext()
const INIT_STATE = {
    services: null,
    serviceToEdit: null
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_SERVICES":
            return { ...state, services: action.payload }
        case "GET_SERVICES_TO_EDIT":
            return { ...state, serviceToEdit: action.payload }
        case "CLEAR_STATE":
            return { ...state, serviceToEdit: action.payload }
        default:
            return state
    }
}

const ServiceContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    // ! CREATE

    const addServices = async (service) => {
        try {
            const response = await axios.post(APIservices, service)
            getServices()
        } catch (e) {
            console.log(e)
        }
    }

    // ! READ 

    const getServices = async () => {
        try {
            const response = await axios(APIservices)
            let action = {
                type: "GET_SERVICES",
                payload: response.data
            }
            dispatch(action)
        } catch (e) {
            console.log(e)
        }
    }

    // ! UPDATE 

    const getServicesToEdit = async (id) => {
        try {
            const response = await axios(`${APIservices}/${id}`)
            let action = {
                type: "GET_SERVICES_TO_EDIT",
                payload: response.data,
            }
            dispatch(action)
        } catch (e) {
            console.log(e)
        }
    }

    const saveEditedServices = async (editedServices) => {
        try {
            const response = await axios.patch(`${APIservices}/${editedServices.id}`, editedServices)
            getServices()
            clearState()
        } catch (e) {
            console.log(e)
        }
    }

    const clearState = () => {
        let action = {
            type: "CLEAR_STATE",
            payload: null
        }
        dispatch(action)
    }
    const deleteService = async (id) => {
        try {
            await axios.delete(`${APIservices}/${id}`)
            getServices()
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <serviceContext.Provider value={{
            addServices: addServices,
            getServices: getServices,
            getServicesToEdit: getServicesToEdit,
            saveEditedServices: saveEditedServices,
            deleteService: deleteService,
            serviceToEdit: state.serviceToEdit,
            services: state.services,
        }}>
            {props.children}
        </serviceContext.Provider>
    )
}

export default ServiceContextProvider;