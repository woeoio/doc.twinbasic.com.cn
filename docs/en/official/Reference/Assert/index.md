---
title: Assert Package
parent: Packages
nav_order: 4
permalink: /tB/Packages/Assert/
---

# Assert Package

The **Assert** built-in package supplies the assertion functions used to write unit tests for twinBASIC code. Each assertion checks an expected condition; on failure, it records a test failure with the call site and an optional message. The test runner --- the twinBASIC IDE's Test Explorer, or any equivalent harness --- collects those results, decides which tests passed, failed, or were skipped, and reports them.

The package's three modules --- [**Exact**](/en/official/Reference/Assert/Exact), [**Strict**](/en/official/Reference/Assert/Strict), and [**Permissive**](/en/official/Reference/Assert/Permissive) --- expose the same fifteen assertion functions; only the *comparison semantics* differ. Each flavour matches a different strictness level for equality evaluation.

| Module                       | String comparisons | Numeric and other comparisons                                                                                                                              |
|------------------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [**Exact**](/en/official/Reference/Assert/Exact)           | case-sensitive     | no implicit conversions; datatypes must match exactly (`5` ≠ `5.0`); `vbNullString` is distinct from `""`; `Empty` is distinct from `0`, `False`, and `""`; object default members are *not* evaluated |
| [**Strict**](/en/official/Reference/Assert/Strict)         | case-sensitive     | evaluated as if the comparison were written directly in twinBASIC code; object default members are *not* evaluated                                         |
| [**Permissive**](/en/official/Reference/Assert/Permissive) | case-insensitive   | evaluated as if the comparison were written directly in twinBASIC code                                                                                     |

`Null` is never considered equal to anything --- not even to itself --- under any of the three flavours. To test for **Null** explicitly, use the [**IsNull**](/en/official/Reference/Assert/Exact#isnull) / [**IsNotNull**](/en/official/Reference/Assert/Exact#isnotnull) assertions rather than `AreEqual(..., Null)`.

```vb
Sub TestStringReverse()
    Strict.AreEqual "olleh", StrReverse("hello")
    Strict.AreEqual "", StrReverse("")
End Sub
```

## Calling convention

Every member of every module is tagged `[MustBeQualified(True)]` --- calls *must* be written with the module name, even from inside a project that has imported the **Assert** package:

```vb
Strict.IsTrue x > 0          ' OK
IsTrue x > 0                 ' compile error — module qualifier required
```

If a project references more than one package that exposes a module called **Strict**, qualify further with the package name as well: **Assert.Strict.IsTrue** *x*.

## Debug-only

Every assertion is tagged `[DebugOnly(True)]` --- the calls compile to *nothing* in release builds, in the same way that [**Debug.Print**](/en/official/Reference/Core/Print) and the **Debug.Assert** statement do. A test runner therefore needs to build the project with debug enabled.

## Modules

- [Exact](/en/official/Reference/Assert/Exact) -- strictest comparisons; datatypes must match and conversions never happen
- [Strict](/en/official/Reference/Assert/Strict) -- case-sensitive strings, but otherwise equality matches a direct comparison in twinBASIC code
- [Permissive](/en/official/Reference/Assert/Permissive) -- case-insensitive strings; otherwise equality matches a direct comparison in twinBASIC code

## Members

Each module exposes the same fifteen functions, grouped here by purpose:

- **Diagnostic outcome** --- **Succeed**, **Fail**, **Inconclusive**
- **Equality** --- **AreEqual** / **AreNotEqual**, **AreSame** / **AreNotSame**
- **Boolean** --- **IsTrue**, **IsFalse**
- **Reference and value state** --- **IsNothing** / **IsNotNothing**, **IsNull** / **IsNotNull**
- **Sequence** --- **SequenceEquals** / **NotSequenceEquals**

See the per-module pages for the full signatures and the comparison semantics that apply to each member.
