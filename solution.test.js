class MaxStack {
  constructor () {
    this.stack = [];
    this. MaxStack = [];
  }

  push (value) {
     this.stack.push(value);
      
     if(this.MaxStack.length === 0) {
      this.MaxStack.push(value);
     } else {
      const currentMax = this.MaxStack[this.MaxStack.length -1];
      this.MaxStack.push(Math.max(value , currentMax));
     } 
  }
  pop () {
  this.MaxStack.pop();
  return this.stack.pop();
  }
  currentMax() {
    return this.MaxStack[this.MaxStack.length - 1];
  }
}

test ("Maxstack returns max" , () => {
  
  const stack  = new MaxStack();

  stack.push(0);
  stack.push(5);
  stack.push(1);

  expect(stack.currentMax()).toBe(5);
  stack.pop();
   expect (stack.currentMax()).toBe(5);


   stack.pop();
   expect(stack.currentMax()).toBe(0);

});