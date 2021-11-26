import React from 'react';
import PropTypes from 'prop-types';
// Components
import Branch from '../branch/branch';
// Hooks
import { useTreeContext } from '../../hooks/useTreeContext';

const Index = (props) => {

    const tree = useTreeContext().tree;
    const checkboxes = props.checkboxes;
    const leafs = tree
        .filter( treeNode => treeNode.hasParent === false); 
    
    return(
        <ul>
            <Branch 
            nodes={leafs} 
            checkboxes={checkboxes} 
            onSelect={props.onSelect}
            selectParents={props.selectParents}
            selectChildren={props.selectChildren}
            />
        </ul>
    );
};

Index.propTypes = {
    checkboxes: PropTypes.bool,
    children: PropTypes.node,
    onSelect: PropTypes.func,
    selectChildren: PropTypes.bool,
    selectParents: PropTypes.bool
};

export default Index;