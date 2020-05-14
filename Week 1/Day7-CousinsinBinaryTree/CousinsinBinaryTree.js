/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if( x <= 1 || y <= 1 ) return false;
    
    const getDeepnes = function( node, head = root, parent = root, deepnes = 0 ){
        if( !head ) return false;
        
        if( head.val == node )
            return [parent, deepnes];
        
        deepnes++
        
        return getDeepnes( node, head.left, head, deepnes ) || getDeepnes( node, head.right, head, deepnes )
    }
    
    const [xParent, xDeepnes] = getDeepnes(x);
    const [yParent, yDeepnes] = getDeepnes(y);
    
    return ( xDeepnes == yDeepnes ) && ( xParent.val != yParent.val )
};
