import React from 'react';
import Leaf from '../leaf/leaf';
import PropTypes from 'prop-types';

/**
 * @todo use summary for collapsible elements!
 * @param {*} props 
 * @returns 
 */

const Tree = (props) => {

    let tree; 

    return(
        <ul id='tree'>

                <Leaf />
                <ul>
                    <Leaf />
                    <Leaf />
                    <Leaf />
                    <Leaf />
                </ul>
        </ul>
    );
};

Tree.propTypes = {
    data: PropTypes.array
};

export default Tree;