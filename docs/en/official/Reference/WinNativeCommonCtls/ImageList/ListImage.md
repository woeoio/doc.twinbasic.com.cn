---
title: ListImage
parent: ImageList
permalink: /tB/Packages/WinNativeCommonCtls/ImageList/ListImage
---

# ListImage class
A **ListImage** is one picture inside an [**ImageList**](/en/official/Reference/WinNativeCommonCtls/ImageList)'s [**ListImages**](/en/official/Reference/WinNativeCommonCtls/ImageList/ListImages) collection. Returned from [**ListImages.Add**](/en/official/Reference/WinNativeCommonCtls/ImageList/ListImages#add) and from [**ListImages.Item**](/en/official/Reference/WinNativeCommonCtls/ImageList/ListImages#item).

The class is tagged `[COMCreatable(False)]` --- user code never instantiates a **ListImage** directly; the [**ListImages**](/en/official/Reference/WinNativeCommonCtls/ImageList/ListImages) collection creates them as part of its **Add** method.

```vb
Dim img As ListImage = ImageList1.ListImages.Add(, "open", LoadPicture("open.ico"))
img.Tag = "Open document command"
```

Properties
----------

### Index

The 1-based position of the image within the parent collection. **Long**, read-only. Equals [**ListImages.Item**](/en/official/Reference/WinNativeCommonCtls/ImageList/ListImages#item)(*key*).Index for the same image.

### Key

The string key the image was added under. **String**. Default: empty string. Lookups through [**ListImages.Item**](/en/official/Reference/WinNativeCommonCtls/ImageList/ListImages#item) accept either the numeric **Index** or the string **Key**.

### Picture

The original `StdPicture` that was passed to [**ListImages.Add**](/en/official/Reference/WinNativeCommonCtls/ImageList/ListImages#add). **StdPicture**. The image list also keeps an internal scaled bitmap copy; modifying the returned **Picture** does not change what the list renders.

### Tag

Arbitrary data the application can attach to the image. **Variant**.

Methods
-------

### Draw

Renders the image into a Win32 device context at a given position. Useful for owner-draw scenarios where the application needs to paint the icon itself rather than going through a consumer control.

Syntax: *object*.**Draw** *hDC* [, *x* [, *y* [, *Style* ] ] ]

*hDC*
: An **OLE_HANDLE** to the destination device context.

*x*
: *optional* A **Variant** containing the horizontal pixel offset. Default: 0.

*y*
: *optional* A **Variant** containing the vertical pixel offset. Default: 0.

*Style*
: *optional* A combination of [**ImlDrawConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/ImlDrawConstants) flags controlling the draw mode (normal, transparent, masked, selected, focused). Multiple flags can be **Or**-combined.

```vb
Private Sub PictureBox1_Paint()
    ImageList1.ListImages("doc").Draw _
        PictureBox1.hDC, 0, 0, _
        ImlDrawTransparent Or ImlDrawSelected
End Sub
```

### ExtractIcon

Returns a fresh `StdPicture` containing the image rendered as an `HICON`. Distinct from the [**Picture**](#picture) property, which returns the original bitmap; **ExtractIcon** is a new icon built from the cached bitmap with transparency applied.

Syntax: *object*.**ExtractIcon** **As IPictureDisp**

The returned **IPictureDisp** owns its icon handle and destroys it when it goes out of scope.

## See Also

- [ImageList](/en/official/Reference/WinNativeCommonCtls/ImageList) -- the parent control
- [ListImages](/en/official/Reference/WinNativeCommonCtls/ImageList/ListImages) -- the collection holding **ListImage** instances
- [ImlDrawConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/ImlDrawConstants) -- the *Style* flag combinations for [**Draw**](#draw)
