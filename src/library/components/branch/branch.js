import React from 'react';
import PropTypes from 'prop-types';
import './branch.css';
// Components 
import Leaf from '../leaf/leaf';
// Hooks
import { useServiceContext } from '../../hooks/useService';
import { useTreeContext } from '../../hooks/useTree';
const Branch = (props) => {
    const nodes = props.nodes;
    const checkboxes = props.checkboxes;
    const service = useServiceContext();
    const tree = useTreeContext();
    
    const branches = nodes.map( (node, index) => {
    
        if(node.hasChildren){ 
               
            const handleClick = () => {
                service.changeNode( node );
            };    

            return (
                <li className='branch' key={index}>
                    <details>
                        <summary>
                            {checkboxes &&
                                <input 
                                    type='checkbox' 
                                    onClick={ handleClick}
                                />
                            }
                            {node.name}
                        </summary>
                        <ul>
                        <Branch 
                            nodes={node.childNodes} 
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