interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

class ComporessibleStore<T> extends Store<T> {
  compress() {}
}
let store = new ComporessibleStore<Product>();

class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}
