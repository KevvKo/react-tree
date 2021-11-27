import React from 'react';
import PropTypes from 'prop-types';
import './branch.css';
// Components 
import Leaf from '../leaf/leaf';
// Hooks
import { useServiceContext } from '../../hooks/useService';
import { useTreeContext } from '../../hooks/useTreeContext';

const Branch = (props) => {
    const nodes = props.nodes;
    const checkboxes = props.checkboxes;
    const service = useServiceContext();
    const tree = useTreeContext().tree;
    const setTree = useTreeContext().setTree;

    const branches = nodes.map( (node, index) => {
    
        if(node.hasChildren){ 

            const handleClick = () => {
                // service.changeNode( node );

                const newTree = [...tree];
                const index = newTree.indexOf(node);
                
                newTree[index] = node;
                setTree(newTree);

            };

            const handleChange = () => {

                service.changeNode( 
                    node, 
                    props.selectParents, 
                    props.selectChildren 
                );

                const newTree = [...tree];
                const index = newTree.indexOf(node);
                
                newTree[index] = node;
                setTree(newTree);

                if(props.onSelect){
                    props.onSelect();
                }
            };    

            return (
                <li className='branch' key={index}>
                    <details>
                        <summary onClick={handleClick}>
                            {checkboxes &&
                                <input 
                                    type='checkbox' 
                                    onChange={handleChange}
                                    checked={node.checked}
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