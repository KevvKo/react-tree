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
                checked: false,
                childNodes: [],
                state: 'closed',
                open: false,
                context: {}
            });
        });
        it('should return a treeNode with parent and no childs', () => {
            const node = mock[1];
            expect(service.mapToTreeNode(node)).toStrictEqual({
                name: 'abc',
                hasParent: true,
                parent: 'xyz',
                checked: false,
                childNodes: [],
                state: 'closed',
                open: false,
                context: {}
            });
        });
    });

    describe('changeNode', () => {
        it('should change the checked-property', () => {
            const nodes = service.mapToTree(mock);
            
            service.changeNode(nodes[0]);
            expect(nodes[0].checked).toBe(true);
            expect(nodes[1].checked).toBe(false);
            expect(nodes[2].checked).toBe(false);

            service.changeNode(nodes[0]);
            expect(nodes[0].checked).toBe(false);
            expect(nodes[1].checked).toBe(false);
            expect(nodes[2].checked).toBe(false);
        });
        it('should change the checked-property for all children', () => {
            const nodes = service.mapToTree(mock);
            
            service.changeNode(nodes[0], false, true);
            expect(nodes[0].checked).toBe(true);
            expect(nodes[1].checked).toBe(true);
            expect(nodes[2].checked).toBe(true);

            service.changeNode(nodes[0], false, true);
            expect(nodes[0].checked).toBe(false);
            expect(nodes[1].checked).toBe(false);
            expect(nodes[2].checked).toBe(false);
        });
        it('should change the checked-property for all parents', () => {
            const nodes = service.mapToTree(mock);
            
            service.changeNode(nodes[2], true);
            expect(nodes[0].checked).toBe(true);
            expect(nodes[1].checked).toBe(false);
            expect(nodes[2].checked).toBe(true);

            service.changeNode(nodes[2], true);
            expect(nodes[0].checked).toBe(false);
            expect(nodes[1].checked).toBe(false);
            expect(nodes[2].checked).toBe(false);
        });
    });
    describe('modifiyParent', () => {

        let node1 = {
            name: 'xyz',
            checked: false
        };
        let node2 = {
            name: 'xyz',
            checked: false,
            parentNode: node1
        };
        let node3 = {
            name: 'xyz',
            checked: false,
            parentNode: node2
        };

        it('should change the checked-property for parent nodes', () => {
            service.modifyParent( node3 );
            expect(node2.checked).toBe(true);
            expect(node1.checked).toBe(true);

            service.modifyParent( node3 );
            expect(node2.checked).toBe(false);
            expect(node1.checked).toBe(false);
        });
    });
    describe('modifyChildren', () => {

        let node1 = {
            name: 'xyz',
            checked: false,
            childNodes: []
        };
        let node2 = {
            name: 'xyz',
            checked: false,
        };
        let node3 = {
            name: 'xyz',
            checked: false,
        };

        node1.childNodes.push(node2, node3);

        it('should change the checked-property for childnodes', () => {
            service.modifiyChildren( node1 );
            expect(node2.checked).toBe(true);
            expect(node3.checked).toBe(true);
            
            service.modifiyChildren( node1 );
            expect(node2.checked).toBe(false);
            expect(node3.checked).toBe(false);
        });
    });
});