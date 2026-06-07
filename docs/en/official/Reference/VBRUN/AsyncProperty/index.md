---
title: AsyncProperty
parent: VBRUN Package
nav_order: 20
permalink: /tB/Packages/VBRUN/AsyncProperty/
---

# AsyncProperty class

The **AsyncProperty** object holds the results of an asynchronous read started with **UserControl.AsyncRead**. It is passed to the **AsyncReadComplete** and **AsyncReadProgress** events, where it identifies which read this notification refers to, reports how far the download has got, and --- once complete --- supplies the downloaded value. Every property is read-only: the runtime fills the object in before raising the event.

## Identifying the read

A user control may have several outstanding asynchronous reads at once, so the **AsyncProperty** passed to each event has to identify the one the event is for. [**PropertyName**](/en/official/Reference/VBRUN/AsyncProperty/PropertyName) returns the name supplied to **AsyncRead** when the request was started --- typically the name of the property the control is going to assign the value to. [**Target**](/en/official/Reference/VBRUN/AsyncProperty/Target) returns the URL or file path that was being downloaded. [**AsyncType**](/en/official/Reference/VBRUN/AsyncProperty/AsyncType) returns an **AsyncTypeConstants** value identifying how the data is being delivered --- as a picture, a file, or a byte array.

```vb
Private Sub UserControl_AsyncReadComplete(ByVal Prop As AsyncProperty)
    Select Case Prop.PropertyName
        Case "Picture"
            Set Picture = Prop.Value
        Case "DataFile"
            ' Prop.Value is the path to the downloaded temporary file.
    End Select
End Sub
```

## The downloaded value

Once the read finishes, [**Value**](/en/official/Reference/VBRUN/AsyncProperty/Value) holds the result. Its concrete subtype is determined by **AsyncType**: an **stdole.IPictureDisp** when the data was requested as a picture, a **String** containing the path of a downloaded temporary file when it was requested as a file, or a **Byte** array when the raw bytes were requested. **Value** is only meaningful in the **AsyncReadComplete** event --- during a progress notification the read has not yet finished.

## Tracking progress

While a read is in progress, the runtime raises **AsyncReadProgress** periodically so the control can update a progress indicator. [**BytesRead**](/en/official/Reference/VBRUN/AsyncProperty/BytesRead) reports how many bytes have arrived so far, and [**BytesMax**](/en/official/Reference/VBRUN/AsyncProperty/BytesMax) the total number expected --- though **BytesMax** may be zero when the server has not advertised a content length. [**Status**](/en/official/Reference/VBRUN/AsyncProperty/Status) returns a human-readable description of the current step ("Connecting", "Receiving response", and so on), and [**StatusCode**](/en/official/Reference/VBRUN/AsyncProperty/StatusCode) returns the corresponding **AsyncStatusCodeConstants** value for programmatic inspection.

## Members

- [AsyncType](/en/official/Reference/VBRUN/AsyncProperty/AsyncType) -- returns the kind of data being read (picture, file, or byte array)
- [BytesMax](/en/official/Reference/VBRUN/AsyncProperty/BytesMax) -- returns the total number of bytes expected for the read
- [BytesRead](/en/official/Reference/VBRUN/AsyncProperty/BytesRead) -- returns the number of bytes that have been read so far
- [PropertyName](/en/official/Reference/VBRUN/AsyncProperty/PropertyName) -- returns the name of the property the read is being performed for
- [Status](/en/official/Reference/VBRUN/AsyncProperty/Status) -- returns a human-readable description of the current read state
- [StatusCode](/en/official/Reference/VBRUN/AsyncProperty/StatusCode) -- returns the **AsyncStatusCodeConstants** value for the current read state
- [Target](/en/official/Reference/VBRUN/AsyncProperty/Target) -- returns the URL or path being read
- [Value](/en/official/Reference/VBRUN/AsyncProperty/Value) -- returns the downloaded value once the read has completed
