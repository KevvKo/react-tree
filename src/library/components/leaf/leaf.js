import React from 'react';
import PropTypes from 'prop-types';
import './leaf.css';

const Leaf = (props) => {

    let treeNode = props.node; 
    const checkbox = props.checkboxes;

    return(
        <li className='leaf'>
            {checkbox &&
                <input type='checkbox'/>
            }
            {treeNode.name }

        </li>
    );
};

Leaf.propTypes = {
    node: PropTypes.object,
    checkboxes: PropTypes.bool
};

export default Leaf;