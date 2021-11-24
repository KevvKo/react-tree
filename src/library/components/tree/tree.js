import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// Components
import Provider from '../Provider/provider';
import Index from '../index/index';

/**
 * @todo use summary for collapsible elements!
 * @param {*} props 
 * @returns 
 */

const Tree = (props) => {

    return(
        <Provider data={ props.data }>
            <Index 
            checkboxes={props.checkboxes} 
            onSelect={props.onSelect}
            selectParents={props.selectParents}
            selectChildren={props.selectChildren}
            />
        </Provider>
    );
};

Tree.propTypes = {
    checkboxes: PropTypes.bool,
    data: PropTypes.array,
    onSelect: PropTypes.func,
    selectChildren: PropTypes.bool,
    selectParents: PropTypes.bool
};

Tree.defaultProps = {
    checkboxes: true,
    selectChildren: true,
    selectParents: true
};


export default Tree;
