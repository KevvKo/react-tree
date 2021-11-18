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
    let tree = service.mapToTree( props.data);

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