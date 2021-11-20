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
                    <details>
                        <summary>
                            {checkboxes &&
                                <input 
                                    type='checkbox' 
                                    onClick={props.onSelect}
                                />
                            }
                            {node.name}
                        </summary>
                        <ul>
                        <Branch 
                            nodes={node.childrenNodes} 
                            checkboxes={checkboxes}
                            onSelect={props.onSelect}
                            />
                        </ul>
                    </details>
                </li>
            );
        }
        else {
            return (         
                <Leaf 
                    node={node} 
                    checkboxes={checkboxes} 
                    onSelect={props.onSelect}
                /> 
            );
        }
    });
    return (
        <>
            {branches}
        </>
    );
};

Branch.propTypes = {
    checkboxes: PropTypes.bool,
    nodes: PropTypes.array,
    onSelect: PropTypes.func
};

export default Branch;