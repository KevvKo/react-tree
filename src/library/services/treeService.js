
const treeService = {


    mapToTree: ( dataObject ) => {
        let tree = {};

        dataObject.map( (element) => {
            return this.mapToTreeNode(element);
        });

        return tree;
    },

    /**
     * @params (Object) data
     * @returns (treeNode)
     */
    mapToTreeNode: ( dataObject ) => {
        let treeNode = {};
        console.log(dataObject)
        return treeNode;
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
}