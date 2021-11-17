import React from 'react';

const Leaf = (props) => {

    let leafNode = {
        name: 'computer',
        hasChildren: false,
        hasParent: true,
        parent: [],
        context: {}
    };
    let parent; 

    return(
        <li className='leaf'>{ leafNode.name }</li>
    );
};

export default Leaf;