class Node {
    constructor() {
         this.hash = new Map();
         this.isEnd = false;
 }
}
class Trie {
 /**
  * Initialize your data structure here.
  */
 constructor() {
     this.root = new Node();
 }
 
 /**
  * Inserts a word into the trie. 
  * @param {string} word
  * @return {void}
  */
 insert(word) {
     let node = this.root;
     for (let i = 0; i < word.length; i++) {
         const char = word.charAt(i);
         if (node.hash.has(char)) {  
             node = node.hash.get(char);
         } else {
             const newNode = new Node();
             node.hash.set(char, newNode)
             node = newNode;
         }
         if (i == word.length - 1) {
             node.isEnd = true;
         }
     }
 }
 
 /**
  * Returns if the word is in the trie. 
  * @param {string} word
  * @return {boolean}
  */
 
 search(word) {
     let node = this.root;
     for (let i = 0; i < word.length; i++) {
         const char = word.charAt(i);
         if (node.hash.has(char)) {
             node = node.hash.get(char);
         } else {
             return false;
         }
     }
     if (node.isEnd) {
         return true;
     } else {
         return false;
     }
 }
 /**
  * Returns if there is any word in the trie that starts with the given prefix. 
  * @param {string} prefix
  * @return {boolean}
  */
 startsWith(prefix) {
     let node = this.root;
     for (let i = 0; i < prefix.length; i++) {
         const char = prefix.charAt(i);
         if (node.hash.has(char)) {
             node = node.hash.get(char);
         } else {
             return false;
         }
     }
     return true;
 }
}

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/