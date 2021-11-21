import { treeService } from "./treeService";

describe('treeService.mapToTree',() => {
    const service = treeService;
    const mock = [
        {
          'name': 'xyz',
          'hasChildren': true,
          'children': ['abc', 'def'],
          'context': {}
        },
        {
          'name': 'abc',
          'hasChildren': false,
          'children': [],
          'context': {},
          'parent': 'xyz'
    
        },
        {
          'name': 'def',
          'hasChildren': true,
          'children': [],
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
                hasChildren: true,
                hasParent: false,
                parent: undefined,
                children: ['abc', 'def'],
                context: {}
            });
        });
        it('should return a treeNode with parent and no childs', () => {
            const node = mock[1];
            expect(service.mapToTreeNode(node)).toStrictEqual({
                name: 'abc',
                hasChildren: false,
                hasParent: true,
                parent: 'xyz',
                children: [],
                context: {}
            });
        });
    });
});