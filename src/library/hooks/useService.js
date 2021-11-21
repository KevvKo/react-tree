import { useContext } from "react";
import { serviceContext } from "../context/serviceContext";

const useServiceContext = () => {
    return useContext( serviceContext );
};

export { useServiceContext };