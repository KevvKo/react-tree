import React from 'react';
import PropTypes from 'prop-types';
import './branch.css';
// Components 
import Leaf from '../leaf/leaf';

const Branch = (props) => {
    const nodes = props.nodes;
    const checkboxes = props.checkboxes;
    const branches = nodes.map( (node, index) => {
        if(node.hasChildren){ 
            return (
                <li className='branch' key={index}>
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
                            selectParents={props.selectParents}
                            selectChildren={props.selectChildren}
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
                    selectParents={props.selectParents}
                    selectChildren={props.selectChildren}
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
    onSelect: PropTypes.func,
    selectChildren: PropTypes.bool,
    selectParents: PropTypes.bool
};

export default Branch;