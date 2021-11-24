import React from 'react';
import PropTypes from 'prop-types';
// Hooks
import { useServiceContext } from '../../hooks/useService';
// Contexts
import { serviceContext } from '../../context/serviceContext';
import { treeContext } from '../../context/treeContext';
const Provider = (props) => {

    const service = useServiceContext();
    const tree = service.mapToTree(props.data);

    return(
        <serviceContext.Provider value={service}>
            <treeContext.Provider value={tree}>
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