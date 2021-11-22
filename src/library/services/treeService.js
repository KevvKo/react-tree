
const treeService = {

    /**
     * 
     * @param {Object} dataObject 
     * @returns 
     */
    mapToTree: ( dataObject ) => {

        const treeNodes = dataObject.map( ( element ) => {
           return treeService.mapToTreeNode(element);
                
        });

        return treeNodes.map( (node) => {
            if(node.hasParent){
                node.parentNode = treeNodes.find( 
                    element => element.name === node.parent
                );
            }

            if(node.hasChildren){
                node.childrenNodes = treeNodes.filter( 
                    element => element.parent === node.name
                );
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
            hasChildren: dataObject?.children.length > 0,
            hasParent: dataObject.parent?.length > 0,
            parent: dataObject?.parent,
            children: dataObject.children,
            isOpen: false,
            state: 'closed',
            context: dataObject?.context
        };
    },

    traverse: () => {
        
    },

    /**
     * 
     * @param {Object} node 
     * @param {Boolean} selectParents
     * @param {Boolean} selectChildren
     */
    changeNode: ( node, selectParents, selectChildren ) => {
        if(node.hasParent){
            treeService.modifyParent(
                node, 
                selectParents
            );            
        }
        if(node.hasChildren){
            treeService.modifiyChildren(
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
    modifiyChildren: ( node, selectChildren ) => {
        node.childrenNodes.map((childNode) => {
            childNode.isOpen = !childNode.isOpen;
            if(childNode.hasChildren){
                treeService.modifiyChildren(childNode);
            }
        });
    },

    /**
     * 
     * @param {Object} node 
     * @param {Boolean} selectParents 
     */
    modifyParent: ( node, selectParents ) => {
        while( node.parentNode ){
            node = node.parentNode;
            node.isOpen = !node.isOpen;
        }
    }
};

export {
    treeService,
};