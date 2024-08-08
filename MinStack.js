class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];//to store the minimum elements.
    }

    push(value) {
        this.stack.push(value);
        if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(value);//If minStack is empty or value is less than or equal to the top element of minStack, push value onto minStack.
        }
    }

    pop() {
        if (this.stack.length === 0) {
            return;
        }
        const removedElement = this.stack.pop();
        if (removedElement === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();//If the popped element is equal to the top element of minStack, pop it from minStack
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
