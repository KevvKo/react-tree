import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// Hooks
import { useServiceContext } from '../../hooks/useService';
// Contexts
import { serviceContext } from '../../context/serviceContext';
import { treeContext } from '../../context/treeContext';
const Provider = (props) => {

    const service = useServiceContext();
    const [ tree, setTree ] = useState([]);

    useEffect(() => {
        setTree( service.mapToTree( props.data ));
    }, []);
    
    const treeContainer = {
        tree: tree,
        setTree: ( value ) => {
            setTree(value);
        }
    };
    return(
        <serviceContext.Provider value={service}>
            <treeContext.Provider value={treeContainer}>
                {props.children}
            </treeContext.Provider>
        </serviceContext.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.node,
    data: PropTypes.array
};

export default Provider;