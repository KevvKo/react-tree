import { treeService } from "./treeService";

describe('treeService',() => {
    const service = treeService;
    const mock = [
        {
          'name': 'xyz',
          'context': {}
        },
        {
          'name': 'abc',
          'context': {},
          'parent': 'xyz'
    
        },
        {
          'name': 'def',
          'parent': 'xyz',
          'context': {}
        },
    ];

    describe( 'mapToTree' ,() => {
        it('should return a single treeNode', () => {
            const node = mock[0];
            expect(service.mapToTree([node])).toHaveLength(1);
        });
        it('should return a list of three treeNode', () => {
            expect(service.mapToTree(mock)).toHaveLength(3);
        });
    });

    describe( 'mapToTreeNode' ,() => {
        it('should return a treeNode with no parent', () => {
            const node = mock[0];
            expect(service.mapToTreeNode(node)).toStrictEqual({
                name: 'xyz',
                hasParent: false,
                parent: undefined,
                childNodes: [],
                state: 'closed',
                isOpen: false,
                context: {}
            });
        });
        it('should return a treeNode with parent and no childs', () => {
            const node = mock[1];
            expect(service.mapToTreeNode(node)).toStrictEqual({
                name: 'abc',
                hasParent: true,
                parent: 'xyz',
                childNodes: [],
                state: 'closed',
                isOpen: false,
                context: {}
            });
        });
    });

    describe('changeNode', () => {
        it('should change the open-property', () => {
            const nodes = service.mapToTree(mock);
            
            service.changeNode(nodes[0]);
            expect(nodes[0].isOpen).toBe(true);
            expect(nodes[1].isOpen).toBe(true);
            expect(nodes[2].isOpen).toBe(true);

            service.changeNode(nodes[0]);
            expect(nodes[0].isOpen).toBe(false);
            expect(nodes[1].isOpen).toBe(false);
            expect(nodes[2].isOpen).toBe(false);
        });
    });
    describe('modifiyParent', () => {

        let node1 = {
            name: 'xyz',
            isOpen: false
        };
        let node2 = {
            name: 'xyz',
            isOpen: false,
            parentNode: node1
        };
        let node3 = {
            name: 'xyz',
            isOpen: false,
            parentNode: node2
        };

        it('should change the open-property for parent nodes', () => {
            service.modifyParent( node3 );
            expect(node2.isOpen).toBe(true);
            expect(node1.isOpen).toBe(true);

            service.modifyParent( node3 );
            expect(node2.isOpen).toBe(false);
            expect(node1.isOpen).toBe(false);
        });
    });
    describe('modifyChildren', () => {

        let node1 = {
            name: 'xyz',
            isOpen: false,
            childNodes: []
        };
        let node2 = {
            name: 'xyz',
            isOpen: false,
        };
        let node3 = {
            name: 'xyz',
            isOpen: false,
        };

        node1.childNodes.push(node2, node3);

        it('should change the open-property for childnodes', () => {
            service.modifiyChildren( node1 );
            expect(node2.isOpen).toBe(true);
            expect(node3.isOpen).toBe(true);
            
            service.modifiyChildren( node1 );
            expect(node2.isOpen).toBe(false);
            expect(node3.isOpen).toBe(false);
        });
    });
});