import { useContext } from 'react';
import { treeContext } from '../context/treeContext';

const useTreeContext = () => {
    return useContext( treeContext );
};

export { useTreeContext };