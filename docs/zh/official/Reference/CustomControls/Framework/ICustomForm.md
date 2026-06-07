---
title: ICustomForm
parent: Framework
permalink: /tB/Packages/CustomControls/Framework/ICustomForm
---

# ICustomForm interface
The form-class counterpart to [**ICustomControl**](/official/Reference/CustomControls/Framework/ICustomControl). Custom *form* classes --- top-level windows that host other custom controls --- implement this interface instead. The shape is identical to **ICustomControl** except that the **Initialize** callback receives a [**CustomFormContext**](/official/Reference/CustomControls/Framework/CustomFormContext) (which extends [**CustomControlContext**](/official/Reference/CustomControls/Framework/CustomControlContext) with **Show** and **Close**) rather than a plain **CustomControlContext**.

[**WaynesForm**](/official/Reference/CustomControls/WaynesForm/), the package's only concrete form class, does in fact implement [**ICustomControl**](/official/Reference/CustomControls/Framework/ICustomControl) and cast its context to **CustomFormContext** internally --- the **ICustomForm** interface is published for parity with **ICustomControl** but is not currently consumed by any class shipped with the package.

## Methods

### Destroy

Called once when the form is being released. See [**ICustomControl.Destroy**](/official/Reference/CustomControls/Framework/ICustomControl#destroy).

Syntax: *object*.**Destroy** ( )

### Initialize

Called once after the framework has constructed the form and deserialized any designer-set property values into it.

Syntax: *object*.**Initialize** ( *Context* )

*Context*
: *required* The [**CustomFormContext**](/official/Reference/CustomControls/Framework/CustomFormContext) for this form instance.

### Paint

Called every time the framework needs to redraw the form's client area. See [**ICustomControl.Paint**](/official/Reference/CustomControls/Framework/ICustomControl#paint).

Syntax: *object*.**Paint** ( *Canvas* )

*Canvas*
: *required* The [**Canvas**](/official/Reference/CustomControls/Framework/Canvas) drawing surface for this paint pass.
