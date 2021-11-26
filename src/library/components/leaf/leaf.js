import React from 'react';
import PropTypes from 'prop-types';
import './leaf.css';
// Hooks
import { useServiceContext } from '../../hooks/useService';
import { useTreeContext } from '../../hooks/useTreeContext';

const Leaf = (props) => {

    let treeNode = props.node; 
    const checkbox = props.checkboxes;
    const service = useServiceContext();
    const tree = useTreeContext().tree;
    const setTree = useTreeContext().setTree;

    const handleClick = () => {
        service.changeNode( treeNode );

        const newTree = [...tree];
        const index = newTree.indexOf(treeNode);
        
        newTree[index] = treeNode;
        setTree(newTree);

        if(props.onSelect){
            props.onSelect();
        }
    };

    return(
        <li className='leaf'>
            {checkbox &&
                <input 
                type='checkbox' 
                role='checkbox'
                onClick={ handleClick }
                />
            }
            {treeNode?.name }

        </li>
    );
};

Leaf.propTypes = {
    checkboxes: PropTypes.bool,
    node: PropTypes.object,
    onSelect: PropTypes.func,
    selectChildren: PropTypes.bool,
    selectParents: PropTypes.bool
};

export default Leaf;