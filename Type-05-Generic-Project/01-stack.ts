// 제네릭 타입으로 만들기
// 어떤 타입으로든 받을 수 있는 활용성 좋은

interface Stack<T> {
  size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next: StackNode<T> | undefined;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }

  push(value: T): void {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!!");
    }
    const node = { value, next: this.head }; // 타입으로 정의가 되어 있기 때문에 타입 추론을 활용하여 타입을 정의하지 않아도 된다.
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

const stack = new StackImpl<string>(10);
stack.push("bob");
stack.push("MJ");
stack.push("steve");
while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10);
stack2.push(142);
stack2.push(524);
stack2.push(133);
while (stack2.size !== 0) {
  console.log(stack2.pop());
}
