
var StockSpanner = function() {
    this.stack = [];
    this.curr = -1;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.curr++;
    if(!this.stack.length) {
        this.stack.push({pos: this.curr, val: price}); 
        return 1;
    } else {
        let {pos, val} = this.stack[this.stack.length - 1];
        while (val <= price) {
            // console.log('popping', val, price)
            this.stack.pop();
            if(!this.stack.length) break;
            console.log(this.stack[this.stack.length - 1] );
            const temp = this.stack[this.stack.length - 1]
            val = temp.val;
            pos = temp.pos;
        }
        // const top = this.stack[this.stack.length - 1] 
        this.stack.push({pos: this.curr, val: price});
        if(this.stack.length == 1) {
            return this.curr + 1;
        } else {
            return this.curr - pos;
        }
       
    }
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */