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
    const checkboxes = props.checkboxes;

    tree = service.mapToTree( props.data);
    leafs = tree
        .filter( treeNode => treeNode.hasParent === false); 


    return(
        <ServiceContext.Provider>
            <ul id='tree'>
                <Branch nodes={leafs} checkboxes={ checkboxes }/>
            </ul>
        </ServiceContext.Provider>
    );
};

Tree.propTypes = {
    data: PropTypes.array,
    checkboxes: PropTypes.bool
};

Tree.defaultProps = {
    checkboxes: true
};


export default Tree;