

class HashMap {
    constructor(size = 16) {
        this.buckets = new Array(size);
    }



  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % this.buckets.length;
}

set(key, value) {
    const index = this.hash(key);
    if (this.buckets[index] === undefined) {
        this.buckets[index] = [];
    }
    this.buckets[index].push([key, value]);
}

  get(key) {
    const index = this.hash(key);
    if (this.buckets[index] === null) {
      return null;
    }
    for (const bucket of this.buckets[index]) {
      if (bucket[0] === key) {
        return bucket[1];
      }
    }
    return null;
  }

  hash(key) {
    let hashCode = 0;
      
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  remove(key) {
    const index = this.hash(key);
    if (this.buckets[index] === null) {
      return null;
    }
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        this.buckets[index].splice(i, 1);
        return true;
      }
    }
    return false;
  }

  length() {
    let counter = 0;
    for (const bucket of this.buckets) {
        console.log(this.buckets)
      if (bucket !== null) {
        counter += bucket.length;
      }
    }
    return counter;
  }

  clear() {
    this.buckets = new Array(10).fill(null);
  }

  keys(){
    let keys = [];
    for (const bucket of this.buckets) {
      if (bucket !== null) {
        for (const pair of bucket) {
          keys.push(pair[0]);
        }
      }
    }
    return keys;
  }

  values(){
    let values = [];
    for (const bucket of this.buckets) {
      if (bucket !== null) {
        for (const pair of bucket) {
          values.push(pair[1]);
        }
      }
    }
    return values;
  }

  entries(){
    let entries = [];
    for (const bucket of this.buckets) {
      if (bucket !== null) {
        for (const pair of bucket) {
          entries.push(pair);
        }
      }
    }
    return entries;
  }
  

}


const test = new HashMap() // or HashMap() if using a factory

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.get('apple')) // red
console.log(test.get('banana')) // yellow
console.log(test.length('carrot')) // orange