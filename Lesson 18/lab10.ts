// NameSpace

namespace Util{
    export const PI = Math.PI;
    const EXP = Math.E;

    export function foo1(): boolean{
        return true;
    }

    function foo2(): boolean{
        return false;
    }

}

console.log(Util.PI);
console.log(Util.foo1());