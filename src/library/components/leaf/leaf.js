import React from 'react';
import PropTypes from 'prop-types';
import './leaf.css';

const Leaf = (props) => {

    let treeNode = props.node; 
    const checkbox = props.checkboxes;
    return(
        <li className='leaf'>
            {checkbox &&
                <input 
                type='checkbox' 
                role='checkbox'
                onClick={props.onSelect}/>
            }
            {treeNode?.name }

        </li>
    );
};

Leaf.propTypes = {
    checkboxes: PropTypes.bool,
    node: PropTypes.object,
    onSelect: PropTypes.func
};

export default Leaf;