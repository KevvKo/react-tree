
const treeService = {

    /**
     * 
     * @param {Object} dataObject 
     * @returns 
     */
    mapToTree: ( dataObject ) => {

        const treeNodes = treeService.mapToTreeNodes( dataObject );
        return treeService.mapToParentAndChild( treeNodes );
    },

    /**
     * 
     * @param {Array} nodes 
     */
    mapToParentAndChild: ( nodes ) => {
        return nodes.map( (node) => {
            if(node.hasParent){
                const parentNode = nodes.find( 
                    element => element.name === node.parent
                );
                
                parentNode.hasChildren = true;
                parentNode.childNodes.push(node);
                node.parentNode = parentNode;

            }

            return node;
        });
    },
    /**
     * @params (Object) data
     * @returns (treeNode)
     */
    mapToTreeNode: ( dataObject ) => {
        return {
            name: dataObject?.name,
            hasParent: dataObject.parent?.length > 0,
            parent: dataObject?.parent,
            open: false,
            checked: false,
            childNodes: [],
            state: 'closed',
            context: dataObject?.context
        };
    },

    /**
     * 
     * @param {Array} data 
     */
    mapToTreeNodes: ( data ) => {
        return data.map( ( element ) => {
            return treeService.mapToTreeNode(element);     
         });
    },

    /**
     * 
     * @param {Object} node 
     * @param {Boolean} selectParents
     * @param {Boolean} selectChildren
     */
    changeNode: ( node, selectParents, selectChildren ) => {

        node.checked = !node.checked;

        if(node.hasParent && selectParents){
            treeService.modifyParent(
                node, 
                selectParents
            );            
        }
        if(node.hasChildren && selectChildren){
            treeService.modifyChildren(
                node, 
                selectChildren
            );            
        }
    },

    /**
     * 
     * @param {Object} node 
     * @param {Boolean} selectChildren 
     */
    modifyChildren: ( node, selectChildren ) => {
        
        node.childNodes.map((childNode) => {
            if(node.checked !== childNode.checked && selectChildren){
                childNode.checked = !childNode.checked;
            }

            if(childNode.hasChildren && selectChildren){
                    treeService.modifyChildren(childNode, selectChildren);
            }
        });
    },

    /**
     * 
     * @param {Object} node  
     */
    modifyParent: ( node ) => {
        while( node.parentNode ){
            let parentNode = node.parentNode;
            
            if( !parentNode.checked && node.checked){
                parentNode.checked = !parentNode.checked;
            }

            node = parentNode;
        }
    },

    /**
     * 
     * @param {Object} node 
     */
    toggleNode: ( node ) => {
        node.open = !node.open;
    }
};

export {
    treeService,
};