import React from 'react';
import PropTypes from 'prop-types';
import './branch.css';
// Components 
import Leaf from '../leaf/leaf';

const Branch = (props) => {
    const nodes = props.nodes;
    const checkboxes = props.checkboxes;
    const branches = nodes.map( node => {
        if(node.hasChildren){ 
            return (
                <li className='branch'>
                    {checkboxes &&
                        <input type='checkbox'/>
                     }
                    {node.name}
                    <ul>
                        <Branch 
                            nodes={node.childrenNodes} 
                            checkboxes={checkboxes}
                        />
                    </ul>
                </li>
            );
        }
        else {
            return <Leaf node={node} checkboxes={checkboxes} />; 
        }
    });
    return (
        <>
            {branches}
        </>
    );
};

Branch.propTypes = {
    nodes: PropTypes.array,
    checkboxes: PropTypes.bool
};

export default Branch;