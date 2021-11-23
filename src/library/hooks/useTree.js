import { useContext } from 'react';
import { treeContext } from '../treeContext';

const useTreeContext = () => {
    return useContext( treeContext );
};

export { useTreeContext };