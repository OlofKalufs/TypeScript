//// [typeParameterConstraints2.ts]
declare function test1<Fn extends <Context>(arg1: Context) => [Context]>(fn: Fn): ReturnType<Fn>;
declare function test2<Fn extends <Context>(arg1: Context) => { key: Context }>(fn: Fn): ReturnType<Fn>;

// Ok in TypeScript 4.4.2
test1((arg2) => [arg2]);

// Error in TypeScript 3.3.3 - 4.4.2;
// TS2719: Type 'Context' is not assignable to type 'Context'. Two different types with this name exist, but they are unrelated.
//   'Context' could be instantiated with an arbitrary type which could be unrelated to 'Context'.
test2((arg2) => ({ key: arg2 }));

// Error in TypeScript 3.3.3 - 4.4.2;
// TS2345: Argument of type '<Context>(arg2: Context) => { key: Context; }' is not assignable to parameter of type '<Context>(arg1: Context) => { key: Context; }'.
//   Call signature return types '{ key: Context; }' and '{ key: Context; }' are incompatible.
//     The types of 'key' are incompatible between these types.
//       Type 'Context' is not assignable to type 'Context'. Two different types with this name exist, but they are unrelated.
//         'Context' could be instantiated with an arbitrary type which could be unrelated to 'Context'.
test2((arg2) => { return { key: arg2 } });
test2(function(arg2) { return { key: arg2 }; });


//// [typeParameterConstraints2.js]
// Ok in TypeScript 4.4.2
test1(function (arg2) { return [arg2]; });
// Error in TypeScript 3.3.3 - 4.4.2;
// TS2719: Type 'Context' is not assignable to type 'Context'. Two different types with this name exist, but they are unrelated.
//   'Context' could be instantiated with an arbitrary type which could be unrelated to 'Context'.
test2(function (arg2) { return ({ key: arg2 }); });
// Error in TypeScript 3.3.3 - 4.4.2;
// TS2345: Argument of type '<Context>(arg2: Context) => { key: Context; }' is not assignable to parameter of type '<Context>(arg1: Context) => { key: Context; }'.
//   Call signature return types '{ key: Context; }' and '{ key: Context; }' are incompatible.
//     The types of 'key' are incompatible between these types.
//       Type 'Context' is not assignable to type 'Context'. Two different types with this name exist, but they are unrelated.
//         'Context' could be instantiated with an arbitrary type which could be unrelated to 'Context'.
test2(function (arg2) { return { key: arg2 }; });
test2(function (arg2) { return { key: arg2 }; });
