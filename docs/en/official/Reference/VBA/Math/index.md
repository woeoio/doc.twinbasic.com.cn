---
title: Math Module
parent: VBA Package
permalink: /tB/Modules/Math/
---

# Math module

The **Math** module groups together the standard numeric functions --- sign and magnitude, trigonometry, exponentials and logarithms, the square root, rounding to a chosen number of decimal places, and pseudo-random number generation. Most members return a **Double**, so intermediate results stay in floating point until they are written back to a narrower variable.

## Sign and magnitude

[**Abs**](/en/official/Reference/VBA/Math/Abs) returns the absolute value of its argument --- its distance from zero, with the sign discarded --- and preserves the argument's data type, so `Abs(-3#)` is a **Double** and `Abs(-3)` an **Integer**. [**Sgn**](/en/official/Reference/VBA/Math/Sgn) is the complement: it discards the magnitude and returns just the sign, as `-1`, `0`, or `+1`. Together they decompose a number into its sign and magnitude.

```vb
Debug.Print Abs(-7.5)            ' 7.5
Debug.Print Sgn(-7.5)            ' -1
```

## Trigonometry

[**Sin**](/en/official/Reference/VBA/Math/Sin), [**Cos**](/en/official/Reference/VBA/Math/Cos), and [**Tan**](/en/official/Reference/VBA/Math/Tan) take an angle in radians and return its sine, cosine, and tangent. [**Atn**](/en/official/Reference/VBA/Math/Atn) goes the other way --- given a tangent, it returns the angle whose tangent that is, in the range `-pi/2` to `pi/2`. All four work exclusively in radians; multiply degrees by `pi / 180` to convert to radians, or radians by `180 / pi` to convert back.

```vb
Const Pi As Double = 3.14159265358979
Debug.Print Sin(Pi / 2)          ' 1
Debug.Print Atn(1) * 4           ' 3.14159265358979 — pi
```

The other inverse trigonometric functions (arcsine, arccosine) and the hyperbolic functions are not provided directly, but each can be derived from **Atn**, **Log**, **Exp**, and **Sqr** in a couple of lines --- see the worked examples on [**Atn**](/en/official/Reference/VBA/Math/Atn), [**Log**](/en/official/Reference/VBA/Math/Log), and [**Cos**](/en/official/Reference/VBA/Math/Cos).

## Exponentials and logarithms

[**Exp**](/en/official/Reference/VBA/Math/Exp) raises *e* (≈ 2.71828) to a chosen power, and [**Log**](/en/official/Reference/VBA/Math/Log) is its inverse, returning the natural (base-*e*) logarithm. To compute a logarithm in another base, divide by **Log** of that base: `Log(x) / Log(10)` for base 10, `Log(x) / Log(2)` for base 2, and so on.

```vb
Debug.Print Exp(1)               ' 2.71828182845905 — e
Debug.Print Log(100) / Log(10)   ' 2 — base-10 log of 100
```

## Square root

[**Sqr**](/en/official/Reference/VBA/Math/Sqr) returns the square root of a non-negative number as a **Double**. Passing a negative value raises a run-time error rather than returning a complex or **NaN** result; if a calculation may legitimately produce a negative input, guard the call with [**Sgn**](/en/official/Reference/VBA/Math/Sgn) or a comparison to zero.

## Rounding

[**Round**](/en/official/Reference/VBA/Math/Round) rounds a number to a chosen number of decimal places using *banker's rounding* --- when the value lies exactly half-way between two possible results, it rounds toward the nearest **even** digit, so `Round(0.5, 0)` is `0` and `Round(1.5, 0)` is `2`. This avoids the systematic upward bias of always-round-half-up and matches VBA's behaviour. For *truncation* rather than rounding, see [**Int**](/en/official/Reference/VBA/Conversion/Int) and [**Fix**](/en/official/Reference/VBA/Conversion/Fix) in the [**Conversion**](/en/official/Reference/VBA/Conversion) module; for narrowing-with-rounding to a specific integer type, see [**CInt**](/en/official/Reference/VBA/Conversion/CInt) and [**CLng**](/en/official/Reference/VBA/Conversion/CLng).

## Random numbers

[**Randomize**](/en/official/Reference/VBA/Math/Randomize) seeds the pseudo-random number generator, and [**Rnd**](/en/official/Reference/VBA/Math/Rnd) draws from it, returning a **Single** in the half-open range `[0, 1)`. Without an explicit call to **Randomize**, **Rnd** produces the same sequence every time the program runs --- convenient for reproducible tests; for unpredictable output, call **Randomize** once at startup with no argument so the system timer is used as the seed.

The standard idiom for a uniformly distributed integer between *lower* and *upper* (inclusive) combines **Rnd** with [**Int**](/en/official/Reference/VBA/Conversion/Int):

```vb
Randomize
Dim Roll As Long
Roll = Int((6 - 1 + 1) * Rnd + 1)    ' a die roll, 1..6
```

## Members

- [Abs](/en/official/Reference/VBA/Math/Abs) -- returns the absolute value of a number
- [Atn](/en/official/Reference/VBA/Math/Atn) -- returns the arctangent of a number, in radians
- [Cos](/en/official/Reference/VBA/Math/Cos) -- returns the cosine of an angle
- [Exp](/en/official/Reference/VBA/Math/Exp) -- returns *e* raised to a power
- [Log](/en/official/Reference/VBA/Math/Log) -- returns the natural (base-*e*) logarithm of a number
- [Randomize](/en/official/Reference/VBA/Math/Randomize) -- initialises the random-number generator
- [Rnd](/en/official/Reference/VBA/Math/Rnd) -- returns a pseudo-random number in the range `[0, 1)`
- [Round](/en/official/Reference/VBA/Math/Round) -- rounds a number to a chosen number of decimal places, using banker's rounding
- [Sgn](/en/official/Reference/VBA/Math/Sgn) -- returns the sign of a number
- [Sin](/en/official/Reference/VBA/Math/Sin) -- returns the sine of an angle
- [Sqr](/en/official/Reference/VBA/Math/Sqr) -- returns the square root of a number
- [Tan](/en/official/Reference/VBA/Math/Tan) -- returns the tangent of an angle
