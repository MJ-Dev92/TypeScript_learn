{
  interface Stack {
    size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next: StackNode | undefined;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;

    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }

    push(value: string): void {
      if (this.size === this.capacity) {
        throw new Error("Stack is Full!!");
      }
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop() {
      if (this.head == null) {
        throw new Error("Stack is empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl();
  stack.push("bob");
  stack.push("MJ");
  stack.push("steve");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
