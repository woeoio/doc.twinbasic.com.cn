## Modern IDE features

While the twinBASIC IDE still has a lot of work planned, it already includes a number of features that make life much easier found in other modern IDE, but not the ancient VBx IDEs, including:

* Fully theme-able, with Dark (default), Light, and Classic (Light) built in, and an easy inheritance-based system to add your own themes via CSS files.

* Code folding, with foldable custom-defined regions via `#Region "name" ... #End Region` blocks.

* Fully customizable keyboard shortcuts covering all commands, with ability to save and switch between different sets.

* Sticky-scroll, which keeps context lines at the top showing major sections of code like module, region, method, `With` blocks, etc.

* Indent guides, lines drawn along common indent points to help line things up right.

* Auto-indent on paste.

* Paste as comment.

* Full Unicode support in .twin files, so you can use the full Unicode range of the font in your comments and strings.

* Inline code hints, which provide annotations at the end of blocks for what the block is (see picture).

* Code mini-map, shows a graphics overview of the code structure alongside the scroll bar, helping to guide your scrolling.

* Advanced Information popup, which shows offsets for UDT members, their total size via both `Len()` plus `LenB()`, and their alignment; and v-table entry offsets for interfaces and classes, as well as their inheritance chain.

* A type library viewer for controls and TLB files that displays the full contents in twinBASIC-style syntax rather than ODL.

* Color-matching for parentheses and brackets.

* A History panel containing a list of recently modified methods.

* An Outline panel with selectable categories.

* Problems panel, provides a list of all current errors and warnings (you can filter to show only one or the other).

* On the Form Designer, control with `Visible = False` are faded to visually indicate this. Also, pressing and holding Control shows the tab index of each tab stop.

![image](https://github.com/twinbasic/documentation/assets/7834493/014a1d28-30af-4a4d-8b9b-83ab6084f00a)\
[Full size](https://www.twinbasic.com/images/fafaloneIDEscreenshot1.png)

* New code structure based Project Explorer:\
![image](https://github.com/twinbasic/documentation/assets/7834493/9a5c50d5-a9f8-44a7-96f7-ae84548bd7ef)

The classic file-based view is still used by default, you can activate the new view with a toggle button:\
![image](https://github.com/twinbasic/documentation/assets/7834493/b000d3aa-3689-4d94-88e3-bca44f8b7de6)


## Package Server

Code can be grouped as a package, and published to an online server. You can have Private packages, visible only to you, or Public packages, visible to everyone.

![image](https://github.com/user-attachments/assets/5951dab6-738e-4b63-83c4-3331ec6d36b9)

For more information, see the following Wiki entries:

[twinBASIC Packages What is a package](https://github.com/twinbasic/documentation/wiki/twinBASIC-Packages-What-is-a-package)

[twinBASIC Packages Creating a TWINPACK package](https://github.com/twinbasic/documentation/wiki/twinBASIC-Packages-Creating-a-TWINPACK-package)

[twinBASIC Packages Importing a package from a TWINPACK file](https://github.com/twinbasic/documentation/wiki/twinBASIC-Packages-Importing-a-package-from-a-TWINPACK-file)

[twinBASIC Packages Importing a package from TWINSERV](https://github.com/twinbasic/documentation/wiki/twinBASIC-Packages-Importing-a-package-from-TWINSERV)

[twinBASIC Packages Updating a package](https://github.com/twinbasic/documentation/wiki/twinBASIC-Packages-Updating-a-package)

## View Forms and Packages as JSON
Project forms and packages are stored as JSON format data, and you can view this by right-click in Project Explorer and selecting 'View as JSON'. This is particularly interesting for packages as it exposes the entire code in a much more easily parsed format.

![image](https://github.com/twinbasic/documentation/assets/7834493/22660f54-ff5d-4b21-93d3-39715f1f35ed)

![image](https://github.com/twinbasic/documentation/assets/7834493/a6525b1d-ac22-4303-ae27-7984c20eba0c)


---

# Many more to come!

This list has covered all new features at the present time. There's many more planned, including built-in multithreading syntax, unsigned variable types, native support for aliases (currently supported in type libraries only), full inheritance, and more! If there's a feature you'd like to see, please feel welcome to make a feature request by [posting an issue in the main twinBASIC GitHub repository](https://github.com/twinbasic/twinbasic/issues).