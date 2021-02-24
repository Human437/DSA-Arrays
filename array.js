let Memory = require("./memory");
Memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = Memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    Memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    if (this.ptr === null) {
      throw new Error("Out of Memory");
    }
    Memory.copy(this.ptr, oldPtr, this.length);
    Memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    return Memory.get(this.ptr + index);
  }

  pop() {
    if (this.length == 0) {
      throw new Error("Index error");
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    Memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}
Array.SIZE_RATIO = 3;

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr);
}

// main()
// Array { length: 1, _capacity: 3, ptr: 0 }
// After adding additonal push statements: Array { length: 6, _capacity: 12, ptr: 3 }
// Since pushing 4 or more values into the array would exceed the original capacity of the array, the capacity is exapnded by multiplying the length of new array by the SIZE_RATIO in this case 3. The ponter also has to be updatd to store the new memory address.

// After adding the pop() methods: Array { length: 3, _capacity: 12, ptr: 3 }
// Three values are removed from the array, but the capacity nor the memory address are changed.

function test() {
  Array.SIZE_RATIO = 3;
  let arr = new Array();
  arr.push(1);
  console.log(arr.get(0));

  arr.pop();

  arr.push("tauhida");
  console.log(arr);
  console.log(arr.get(0));
}

test();
// Results in NaN. This is due to the fact that memory in the class Memory is set to hold only floating point numbers and not strings. So when attemping to insert a string into memory it is only stored as a NaN, so when the value is retrieved all that is returned is a NaN.
// The purpose of the _resize() function is to copy all the values from the old memory to the new memory and expand the capacity of the new memory my 3 times the current size of the memory
