import React from 'react';
import PropTypes from 'prop-types';
// Components 
import Leaf from '../leaf/leaf';

const Branch = (props) => {
    const nodes = props.nodes;
    const leafs = nodes.map( node => {
        if(node.hasChildren){ 
            return (
                <li>
                    {node.name}
                    <ul>
                        <Branch nodes={node.childrenNodes} />
                    </ul>
                </li>
            );
        }
        else {
            return <Leaf node={node} />; 
        }
    });
    return (
        <>
            {leafs}
        </>
    );
};

Branch.propTypes = {
    nodes: PropTypes.array
};

export default Branch;