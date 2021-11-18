import React from 'react';
import PropTypes from 'prop-types';

const Leaf = (props) => {

    let treeNode = props.node; 
    return(
        <li className='leaf'>{treeNode.name }</li>
    );
};

Leaf.propTypes = {
    node: PropTypes.object
};

export default Leaf;