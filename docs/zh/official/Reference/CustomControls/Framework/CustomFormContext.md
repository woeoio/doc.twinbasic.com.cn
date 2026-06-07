---
title: CustomFormContext
parent: Framework
permalink: /tB/Packages/CustomControls/Framework/CustomFormContext
---

# CustomFormContext class
The form-class counterpart to [**CustomControlContext**](/official/Reference/CustomControls/Framework/CustomControlContext). Extends the base context with **Show** and **Close** --- the operations a top-level form needs that an embedded control does not.

[**WaynesForm**](/official/Reference/CustomControls/WaynesForm/) receives its context as a [**CustomControlContext**](/official/Reference/CustomControls/Framework/CustomControlContext) (because it implements [**ICustomControl**](/official/Reference/CustomControls/Framework/ICustomControl)) and casts it to **CustomFormContext** internally so that it can call **Show** from its own **Show** method and **Close** from its **Close** method.

```vb
Private Sub OnInitialize(ByVal Ctx As CustomControls.CustomControlContext) _
        Implements CustomControls.ICustomControl.Initialize

    Set Me.ControlContext = CType(Of CustomFormContext)(Ctx)
End Sub
```

## Inherited

A **CustomFormContext** includes every member from [**CustomControlContext**](/official/Reference/CustomControls/Framework/CustomControlContext) --- [**ChangeFocusedElement**](/official/Reference/CustomControls/Framework/CustomControlContext#changefocusedelement), [**CreateTimer**](/official/Reference/CustomControls/Framework/CustomControlContext#createtimer), [**GetSerializer**](/official/Reference/CustomControls/Framework/CustomControlContext#getserializer), and [**Repaint**](/official/Reference/CustomControls/Framework/CustomControlContext#repaint) --- and adds the two form-specific members below.

## Methods

### Close

Closes the underlying window. Equivalent to the user clicking the title-bar close button. Application code typically calls [**WaynesForm.Close**](/official/Reference/CustomControls/WaynesForm/#close), which in turn calls into this method.

Syntax: *object*.**Close** ( )

### Show

Shows the underlying window. Application code typically calls [**WaynesForm.Show**](/official/Reference/CustomControls/WaynesForm/#show), which in turn calls into this method.

Syntax: *object*.**Show** ( )
