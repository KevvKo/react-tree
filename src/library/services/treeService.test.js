import { treeService } from "./treeService";

describe('treeService.mapToTree',() => {
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
});