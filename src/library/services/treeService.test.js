import { node } from "prop-types";
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
            expect(nodes[0].checked).toBe(true);
            expect(nodes[1].checked).toBe(false);
            expect(nodes[2].checked).toBe(false);
        });
        it('should not uncheck the parent if a child is clicked', () => {
            const nodes = service.mapToTree(mock);

            service.changeNode(nodes[2], true);
            expect(nodes[0].checked).toBe(true);
            expect(nodes[1].checked).toBe(false);
            expect(nodes[2].checked).toBe(true);

            service.changeNode(nodes[1], true);
            expect(nodes[0].checked).toBe(true);
            expect(nodes[1].checked).toBe(true);
            expect(nodes[2].checked).toBe(true);
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
            expect(node2.checked).toBe(true);
            expect(node1.checked).toBe(true);
        });
    });
    describe('modifyChildren', () => {

        let node1 = {
            name: 'xyz',
            checked: false,
            hasChildren: true,
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
            node1.checked = true;
            service.modifyChildren( node1, true );
            expect(node2.checked).toBe(true);
            expect(node3.checked).toBe(true);
            
            node1.checked = false;
            service.modifyChildren( node1, true );
            expect(node2.checked).toBe(false);
            expect(node3.checked).toBe(false);
        });
        it('should not toggle the checked-property', () => {
            treeService.changeNode(node1, true, true);
            expect(node1.checked).toBe(true);
            expect(node2.checked).toBe(true);
            expect(node3.checked).toBe(true);

            node2.checked = false;
            treeService.changeNode(node1, true, true);
            expect(node1.checked).toBe(false);
            expect(node2.checked).toBe(false);
            expect(node3.checked).toBe(false);
        });
    });
    describe('toggleNode', () => {
        it('should switch the open state for the node', () => {
            let node = {
                name: 'xyz',
                open: false,
                childNodes: []
            };

            treeService.toggleNode( node );
            expect(node.open).toBe(true);


            treeService.toggleNode( node );
            expect(node.open).toBe(false);
        });
    });
});