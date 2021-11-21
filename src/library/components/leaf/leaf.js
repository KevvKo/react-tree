import React from 'react';
import PropTypes from 'prop-types';
import './leaf.css';
// Hooks
import { useServiceContext } from '../../hooks/useService';

const Leaf = (props) => {

    let treeNode = props.node; 
    const checkbox = props.checkboxes;
    const service = useServiceContext();

    const handleClick = () => {
        console.log(service)
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