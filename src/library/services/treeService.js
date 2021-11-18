
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
            context: dataObject?.context
        };
    },

    traverse: () => {
        
    }
};

const branchModifier = () => {

};

const leafModifier = () => {

};

export {
    treeService,
    branchModifier,
    leafModifier
};