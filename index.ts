// namespace import test
/*
// namespace import
import { Network } from './src/Get';
namespace App {
  Network.get<any>('https://api.github.com/repos/Microsoft/typescript');
}
//*/
// namespace import test

// namespace use test
// /*
namespace Network {
  export function get<T>(url: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {});
  }
}

namespace App {
  Network.get<any>('https://api.github.com/repos/Microsoft/typescript');
}
//*/
// namespace use test

// namespace export test
/*
namespace Network {
  export namespace HTTP {
    export function get<T>(url: string): Promise<T> {
      return new Promise<T>((resolve, reject) => {});
    }
  }

  export namespace TCP {
    function listenOn(port: number): string {
      return 'listenOn';
    }
  }

  export namespace UDP {}

  export namespace IP {}
}

Network.HTTP.get<any>('http://www.google.com');
Network.TCP;
// Network.TCP.listenOn(8896); // error
//*/
// namespace export test

// namespace divide test
/*
// HTTPS.ts
namespace Network {
  export namespace HTTP {
    export function get<T>(url: string): Promise<T> {
      return new Promise<T>((resolve, reject) => {});
    }
  }
}
// UDP.ts
namespace Network {
  export namespace UDP {
    export function send(url: string, packets: any): Promise<void> {
      return new Promise<void>((resolve, reject) => {});
    }
  }
}
// MyApp.ts
Network.HTTP.get<any[]>('http://url.com/dogs');
Network.UDP.send('http://url.com/cats', {});
//*/
// namespace divide test

// namespace alias test
/*
// A.ts
namespace A {
  export namespace B {
    export namespace C {
      export let d = 3;
    }
  }
}

// MyApp.ts
import d = A.B.C.d;
let e = d * 3;
console.log(e);
//*/
// namespace alias test

// namespace conflict test1
/*
// HTTP.ts
namespace Network {
  export function request<T>(url: string): T {
    let t: T;
    return t;
  }
}

namespace Network {
  export function request<T>(url: string): T {
    let t: T;
    return t;
  }
}

//*/
// namespace conflict test1

// namespace overloaded test2
/*
// HTTP.ts
declare namespace Network {
  export function request<T>(url: string): T {
    let t: T;
    return t;
  }
}

namespace Network {
  export function request<T>(url: string, priority: number): T {
    let t: T;
    return t;
  }
}

//*/
// namespace overloaded test2

// namespace compile test
/*
// Flower.ts
namespace Flower {
  export function give(count: number) {
    return count + 'flower';
  }
}
//*/

/*
//Flower.js
var Flower;
(function (Flower) {
  function give(count) {
    return count + 'flower';
  }
  Flower.give = give;
})(Flower || (Flower = {}));

//*/
// namespace compile test
