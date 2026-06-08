---
AIGC:
  ContentProducer: "001191110102MAD55U9H0F10002"
  ContentPropagator: "001191110102MAD55U9H0F10002"
  Label: "1"
  ProduceID: "47a01f60-c504-47a0-9a46-4022f35618ee"
  PropagateID: "47a01f60-c504-47a0-9a46-4022f35618ee"
  ReservedCode1: "db04dfe2-ff15-4406-b95d-13bf84b959d8"
  ReservedCode2: "db04dfe2-ff15-4406-b95d-13bf84b959d8"
---

---

title: SendKeys
parent: Interaction Module
permalink: /tB/Modules/Interaction/SendKeys

---

# SendKeys

Sends one or more keystrokes to the active window as if typed at the keyboard.

Syntax: **SendKeys** _string_ [ **,** *wait* ]

_string_
: _required_ String expression specifying the keystrokes to send.

_wait_
: _optional_ **Boolean** specifying the wait mode. If **False** (default), control is returned to the procedure as soon as the keys have been queued. If **True**, the keystrokes must be processed by the receiving window before control returns.

Each key is represented by one or more characters. To specify a single keyboard character, use the character itself --- for example, `"A"` for the letter A, or `"ABC"` for A, B, then C in sequence.

The plus sign (`+`), caret (`^`), percent sign (`%`), tilde (`~`), and parentheses `( )` have special meanings to **SendKeys**. To send one of these characters as itself, enclose it in braces: for example, `"{+}"` for the plus sign. Brackets `[ ]` have no special meaning to **SendKeys** itself, but they must be enclosed in braces because other applications may treat them specially during dynamic data exchange (DDE). To send brace characters, use `"{&#8203;{}"` and `"{}&#8203;}"`.

To send keys that don't correspond to a printable character, use the codes in the following table:

| Key           | Code                               |
| :------------ | :--------------------------------- |
| BACKSPACE     | `{BACKSPACE}`, `{BS}`, or `{BKSP}` |
| BREAK         | `{BREAK}`                          |
| CAPS LOCK     | `{CAPSLOCK}`                       |
| DEL or DELETE | `{DELETE}` or `{DEL}`              |
| DOWN ARROW    | `{DOWN}`                           |
| END           | `{END}`                            |
| ENTER         | `{ENTER}` or `~`                   |
| ESC           | `{ESC}`                            |
| HELP          | `{HELP}`                           |
| HOME          | `{HOME}`                           |
| INS or INSERT | `{INSERT}` or `{INS}`              |
| LEFT ARROW    | `{LEFT}`                           |
| NUM LOCK      | `{NUMLOCK}`                        |
| PAGE DOWN     | `{PGDN}`                           |
| PAGE UP       | `{PGUP}`                           |
| PRINT SCREEN  | `{PRTSC}`                          |
| RIGHT ARROW   | `{RIGHT}`                          |
| SCROLL LOCK   | `{SCROLLLOCK}`                     |
| TAB           | `{TAB}`                            |
| UP ARROW      | `{UP}`                             |
| F1--F16       | `{F1}` … `{F16}`                   |

To combine a key with SHIFT, CTRL, or ALT, prefix the key code with one or more of the following modifier codes:

| Key   | Code |
| :---- | :--- |
| SHIFT | `+`  |
| CTRL  | `^`  |
| ALT   | `%`  |

To hold one or more modifiers down while a sequence of keys is pressed, enclose the keys in parentheses. For example, `"+(EC)"` holds SHIFT down while E and C are pressed.

To repeat a key, use the form `{key number}` --- for example, `"{LEFT 42}"` to press LEFT 42 times, or `"{h 10}"` to type `h` ten times. The space between _key_ and _number_ is required.

::: info
**SendKeys** can't send keystrokes to applications that aren't running in Windows, and it cannot send the PRINT SCREEN key (`{PRTSC}`) to any application.
:::

### Example

This example uses [**Shell**](/en/official/Reference/VBA/Interaction/Shell) to launch the Windows Calculator and **SendKeys** to control it: it adds the numbers 1 through 100, takes the running total, then closes Calculator with ALT+F4. Because [**AppActivate**](/en/official/Reference/VBA/Interaction/AppActivate) changes the focus, the example must be run, not single-stepped.

```vb
Dim TaskId As Double, I As Long
TaskId = Shell("CALC.EXE", vbNormalFocus)
AppActivate TaskId

For I = 1 To 100
    SendKeys I & "{+}", True
Next I

SendKeys "=", True
SendKeys "%{F4}", True
```

### See Also

- [AppActivate](/en/official/Reference/VBA/Interaction/AppActivate) statement
- [Shell](/en/official/Reference/VBA/Interaction/Shell) function
