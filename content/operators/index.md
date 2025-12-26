---
title: "Operators"
source: zig
---

# {{ $frontmatter.title }}

There is no operator overloading. When you see an operator in Zig, you know that it is doing something from below, and nothing else.

## Addition
::: code-group
```zig [syntax]
a + b
a += b
```
:::
- Can cause overflow for integers.
- Invokes Peer Type Resolution for the operands.
- See also [@addWithOverflow](/builtin-functions/add-with-overflow).
::: code-group
```zig [example]
2 + 5 == 7
```
:::

## Wrapping Addition
::: code-group
```zig [syntax]
a +% b
a +%= b
```
:::
- Twos-complement wrapping behavior.
- Invokes Peer Type Resolution for the operands.
- See also [@addWithOverflow](/builtin-functions/add-with-overflow).
::: code-group
```zig [example]
@as(u32, 0xffffffff) +% 1 == 0
```
:::

## Saturating Addition
::: code-group
```zig [syntax]
a +| b
a +|= b
```
:::
- Invokes Peer Type Resolution for the operands.
::: code-group
```zig [example]
@as(u8, 255) +| 1 == @as(u8, 255)
```
:::

## Subtraction
::: code-group
```zig [syntax]
a - b
a -= b
```
:::
- Can cause overflow for integers.
- Invokes Peer Type Resolution for the operands.
- See also [@subWithOverflow](/builtin-functions/sub-with-overflow).
::: code-group
```zig [example]
2 - 5 == -3
```
:::

## Wrapping Subtraction
::: code-group
```zig [syntax]
a -% b
a -%= b
```
:::
- Twos-complement wrapping behavior.
- Invokes Peer Type Resolution for the operands.
- See also [@subWithOverflow](/builtin-functions/sub-with-overflow).
::: code-group
```zig [example]
@as(u8, 0) -% 1 == 255
```
:::

## Saturating Subtraction
::: code-group
```zig [syntax]
a -| b
a -|= b
```
:::
- Invokes Peer Type Resolution for the operands.
::: code-group
```zig [example]
@as(u32, 0) -| 1 == 0
```
:::

## Negation
::: code-group
```zig [syntax]
-a
```
:::
- Can cause overflow for integers.
::: code-group
```zig [example]
-1 == 0 - 1
```
:::

## Wrapping Negation
::: code-group
```zig [syntax]
-%a
```
:::
- Twos-complement wrapping behavior.
::: code-group
```zig [example]
-%@as(i8, -128) == -128
```
:::

## Multiplication
::: code-group
```zig [syntax]
a * b
a *= b
```
:::
- Can cause overflow for integers.
- Invokes Peer Type Resolution for the operands.
- See also [@mulWithOverflow](/builtin-functions/mul-with-overflow).
::: code-group
```zig [example]
2 * 5 == 10
```
:::

## Wrapping Multiplication
::: code-group
```zig [syntax]
a *% b
a *%= b
```
:::
- Twos-complement wrapping behavior.
- Invokes Peer Type Resolution for the operands.
- See also [@mulWithOverflow](/builtin-functions/mul-with-overflow).
::: code-group
```zig [example]
@as(u8, 200) *% 2 == 144
```
:::

## Saturating Multiplication
::: code-group
```zig [syntax]
a *| b
a *|= b
```
:::
- Invokes Peer Type Resolution for the operands.
::: code-group
```zig [example]
@as(u8, 200) *| 2 == 255
```
:::

## Division
::: code-group
```zig [syntax]
a / b
a /= b
```
:::
- Can cause overflow for integers.
- Can cause Division by Zero for integers.
- Can cause Division by Zero for floats in FloatMode.Optimized Mode.
- Signed integer operands must be comptime-known and positive. 
- In other cases, use [@divTrunc](/builtin-functions/div-trunc), [@divFloor](/builtin-functions/div-floor), or [@divExact](/builtin-functions/div-exact) instead.
- Invokes Peer Type Resolution for the operands.
::: code-group
```zig [example]
10 / 5 == 2
```
:::

## Remainder Division
::: code-group
```zig [syntax]
a % b
a %= b
```
:::
- Can cause Division by Zero for integers.
- Can cause Division by Zero for floats in FloatMode.Optimized Mode.
- Signed or floating-point operands must be comptime-known and positive. In other cases, use [@rem](/builtin-functions/rem) or [@mod](/builtin-functions/mod) instead.
- Invokes Peer Type Resolution for the operands.
::: code-group
```zig [example]
10 % 3 == 1
```
:::

## Bit Shift Left
::: code-group
```zig [syntax]
a << b
a <<= b
```
:::
- Moves all bits to the left, inserting new zeroes at the least-significant bit.
- b must be comptime-known or have a type with log2 number of bits as a.
- See also @shlExact.
- See also @shlWithOverflow.
::: code-group
```zig [example]
0b1 << 8 == 0b100000000
```
:::

## Saturating Bit Shift Left
::: code-group
```zig [syntax]
a <<| b
a <<|= b
```
:::
- See also [@shlExact](/builtin-functions/shl-exact).
- See also [@shlWithOverflow](/builtin-functions/shl-with-overflow).
::: code-group
```zig [example]
@as(u8, 1) <<| 8 == 255
```
:::

## Bit Shift Right
::: code-group
```zig [syntax]
a >> b
a >>= b
```
:::
- Moves all bits to the right, inserting zeroes at the most-significant bit.
- b must be comptime-known or have a type with log2 number of bits as a.
- See also [@shrExact](/builtin-functions/shr-exact).
::: code-group
```zig [example]
0b1010 >> 1 == 0b101
```
:::

## Bitwise And
::: code-group
```zig [syntax]
a & b
a &= b
```
:::
- Invokes Peer Type Resolution for the operands.
::: code-group
```zig [example]
0b011 & 0b101 == 0b001
```
:::

## Bitwise Or
::: code-group
```zig [syntax]
a | b
a |= b
```
:::
- Invokes Peer Type Resolution for the operands.
::: code-group
```zig [example]
0b010 | 0b100 == 0b110
```
:::

## Bitwise Xor
::: code-group
```zig [syntax]
a ^ b
a ^= b
```
:::
- Invokes Peer Type Resolution for the operands.
::: code-group
```zig [example]
0b011 ^ 0b101 == 0b110
```
:::

## Bitwise Not
::: code-group
```zig [syntax]
~a
```
:::
::: code-group
```zig [example]
~@as(u8, 0b10101111) == 0b01010000
```
:::

## Defaulting Optional Unwrap
::: code-group
```zig [syntax]
a orelse b
```
:::
- If a is null, returns b ("default value"), otherwise returns the unwrapped value of a. Note that b may be a value of type [noreturn](/noreturn).
::: code-group
```zig [example]
const value: ?u32 = null;
const unwrapped = value orelse 1234;
unwrapped == 1234
```
:::

## Optional Unwrap
::: code-group
```zig [syntax]
a.?
```
:::

- Equivalent to: `a orelse unreachable`
::: code-group
```zig [example]
const value: ?u32 = 5678;
value.? == 5678
```
:::

## Defaulting Error Unwrap
::: code-group
```zig [syntax]
a catch b
a catch |err| b
```
:::
- If `a` is an `error`, returns `b` ("default value"), otherwise returns the unwrapped value of `a`. Note that `b` may be a value of type [noreturn](/noreturn). `err` is the `error` and is in scope of the expression b.
::: code-group
```zig [example]
const value: anyerror!u32 = error.Broken;
const unwrapped = value catch 1234;
unwrapped == 1234
```
:::

## Logical And
::: code-group
```zig [syntax]
a and b
```
:::
- If `a` is false, returns `false` without evaluating `b`. Otherwise, returns `b`.
::: code-group
```zig [example]
(false and true) == false
```
:::

## Logical Or
::: code-group
```zig [syntax]
a or b
```
:::
- If `a` is true, returns `true` without evaluating `b`. Otherwise, returns `b`.
::: code-group
```zig [example]
(false or true) == true
```
:::

## Boolean Not
::: code-group
```zig [syntax]
!a
```
:::
::: code-group
```zig [example]
!false == true
```
:::

## Equality
::: code-group
```zig [syntax]
a == b
```
:::
- Returns `true` if `a` and `b` are equal, otherwise returns false. 
- Invokes Peer Type Resolution for the operands.
::: code-group
```zig [example]
(1 == 1) == true
```
:::

## Null Check
::: code-group
```zig [syntax]
a == null
```
:::
- Returns true if a is null, otherwise returns false.
::: code-group
```zig [example]
const value: ?u32 = null;
(value == null) == true
```
:::

## Inequality
::: code-group
```zig [syntax]
a != b
```
:::
- Returns false if a and b are equal, otherwise returns true. Invokes Peer Type Resolution for the operands.
::: code-group
```zig [example]
(1 != 1) == false
```
:::

## Non-Null Check
::: code-group
```zig [syntax]
a != null
```
:::
- Returns false if `a` is `null`, otherwise returns `true`.
::: code-group
```zig [example]
const value: ?u32 = null;
(value != null) == false
```
:::

## Greater Than
::: code-group
```zig [syntax]
a > b
```
:::
- Returns true if `a` is greater than `b`, otherwise returns `false`. Invokes Peer Type Resolution for the operands.
::: code-group
```zig [example]
(2 > 1) == true
```
:::

## Greater or Equal
::: code-group
```zig [syntax]
a >= b
```
:::
- Returns `true` if `a` is greater than or equal to `b`, otherwise returns `false`. Invokes Peer Type Resolution for the operands.
::: code-group
```zig [example]
(2 >= 1) == true
```
:::

## Less Than
::: code-group
```zig [syntax]
a < b
```
:::
- Returns `true` if `a` is less than `b`, otherwise returns `false`. Invokes Peer Type Resolution for the operands.
::: code-group
```zig [example]
(1 < 2) == true
```
:::

## Lesser or Equal
::: code-group
```zig [syntax]
a <= b
```
:::
- Returns `true` if `a` is less than or equal to `b`, otherwise returns `false`. Invokes Peer Type Resolution for the operands.
::: code-group
```zig [example]
(1 <= 2) == true
```
:::

## Array Concatenation
::: code-group
```zig [syntax]
a ++ b
```
:::
- Only available when the lengths of both a and b are compile-time known.
::: code-group
```zig [example]
const mem = @import("std").mem;
const array1 = [_]u32{1,2};
const array2 = [_]u32{3,4};
const together = array1 ++ array2;
mem.eql(u32, &together, &[_]u32{1,2,3,4})
```
:::

## Array Multiplication
::: code-group
```zig [syntax]
a ** b
```
:::
- Only available when the length of `a` and `b` are compile-time known.
::: code-group
```zig [example]
const mem = @import("std").mem;
const pattern = "ab" ** 3;
mem.eql(u8, pattern, "ababab")
```
:::

## Pointer Dereference
::: code-group
```zig [syntax]
a.*
```
:::
::: code-group
```zig [example]
const x: u32 = 1234;
const ptr = &x;
ptr.* == 1234
```
:::

## Address Of
::: code-group
```zig [syntax]
&a
```
:::
::: code-group
```zig [example]
const x: u32 = 1234;
const ptr = &x;
ptr.* == 1234
```
:::

## Error Set Merge
::: code-group
```zig [syntax]
a || b
```
:::
::: code-group
```zig [example]
const A = error{One};
const B = error{Two};
(A || B) == error{One, Two}
```
:::

## Precedence
```zig
x() x[] x.y x.* x.?
a!b
x{}
!x -x -%x ~x &x ?x
* / % ** *% *| ||
+ - ++ +% -% +| -|
<< >> <<|
& ^ | orelse catch
== != < > <= >=
and
or
= *= *%= *|= /= %= += +%= +|= -= -%= -|= <<= <<|= >>= &= ^= |=
```