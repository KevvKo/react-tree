import React, { createContext } from 'react';
import PropTypes from 'prop-types';
// Components
import Leaf from '../leaf/leaf';
import Branch from '../branch/branch';
// Services
import { treeService } from '../../services/treeService';

/**
 * @todo use summary for collapsible elements!
 * @param {*} props 
 * @returns 
 */

const Tree = (props) => {

    const service = treeService;
    const ServiceContext = createContext(service);
    let tree;
    let leafs;

    tree = service.mapToTree( props.data);
    leafs = tree
        .filter( treeNode => treeNode.hasParent === false)
        .map( (treeNode, index ) => {
            return <Leaf key={index} node={treeNode} />;
        });  


    return(
        <ServiceContext.Provider>
            <ul id='tree'>
                <Branch />
                {leafs}
            </ul>
        </ServiceContext.Provider>
    );
};

Tree.propTypes = {
    data: PropTypes.array
};

export default Tree;