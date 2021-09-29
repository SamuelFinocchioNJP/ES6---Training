// Una classe può implementare una interfaccia
interface Polygon {
  name: string;
  angles: number;
  get area(): number;
}

class Triangle implements Polygon {
  constructor(
    public name: string,
    public angles: number,
    public base: number,
    public height: number
  ) {}

  get area(): number {
    return (this.base * this.height * 1) / 2;
  }
}

// Una classe può essere parametrizzata
class BinaryTree<T> {
  public left: BinaryTree<T> | undefined;
  public right: BinaryTree<T> | undefined;

  constructor(public root: T) {}
}

// Una classe può essere estesa
class BinarySearchTree<T> extends BinaryTree<T> {
  get inorder(): Array<T> {
    return [];
  }

  get preorder(): Array<T> {
    return [];
  }

  get postorder(): Array<T> {
    return [];
  }

  public insert(value: T): void {
    // ...
  }
}
