import React from 'react';
import PropTypes from 'prop-types';
// Components
import Branch from '../branch/branch';
// Hooks
import { useServiceContext } from '../../hooks/useService';
import { useTreeContext } from '../../hooks/useTree';
// Contexts
import { serviceContext } from '../../context/serviceContext';
import { treeContext } from '../../context/treeContext';

/**
 * @todo use summary for collapsible elements!
 * @param {*} props 
 * @returns 
 */

const Tree = (props) => {

    const service = useServiceContext();
    let tree;
    let leafs;
    const checkboxes = props.checkboxes;

    tree = service.mapToTree( props.data);
    leafs = tree
        .filter( treeNode => treeNode.hasParent === false); 

    return(
        <serviceContext.Provider value={service}>
            <treeContext.Provider value={tree}>
                <ul id='tree'>
                    <Branch 
                    nodes={leafs} 
                    checkboxes={checkboxes} 
                    onSelect={props.onSelect}
                    selectParents={props.selectParents}
                    selectChildren={props.selectChildren}
                    />
                </ul>
            </treeContext.Provider>
        </serviceContext.Provider>
    );
};

Tree.propTypes = {
    checkboxes: PropTypes.bool,
    data: PropTypes.array,
    onSelect: PropTypes.func,
    selectChildren: PropTypes.bool,
    selectParents: PropTypes.bool
};

Tree.defaultProps = {
    checkboxes: true,
    selectChildren: true,
    selectParents: true
};


export default Tree;
