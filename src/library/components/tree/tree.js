import React from 'react';
import PropTypes from 'prop-types';
// Components
import Leaf from '../leaf/leaf';
// Services
import { treeService } from '../../services/treeService';

/**
 * @todo use summary for collapsible elements!
 * @param {*} props 
 * @returns 
 */

const Tree = (props) => {

    const service = treeService;
    let tree;
    let leafs;

    tree = service.mapToTree( props.data);
    leafs = tree
        .filter( treeNode => treeNode.hasParent === false)
        .map( (treeNode, index ) => {
            return <Leaf key={index} node={treeNode} />;
        });  


    return(
        <ul id='tree'>
            { leafs}
        </ul>
    );
};

Tree.propTypes = {
    data: PropTypes.array
};

export default Tree;