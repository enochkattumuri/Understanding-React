### DOM Manipulation:
The HTML we written is converted into DOM which is then used to create what we see on the screen

This DOM can then be manipulated later on, which is the basis of modern web development

The DOM can be changed after the HTML is read and the DOM is created

When the DOM tree is changed, the browser re-renders to match the new DOM

The browser contains both the Javascript Engine and the Rendering Engine, both in C++. The Rendering Engine paints the DOM tree to the screen. The Javascript code can be written to give instructions to the Rendering engine.

#### Application Programming Interface (API)
The functions, objects, URLs, etc. that define how a program can be communicated with


DOM manipulation comes with a cost <br/>
The browser needs to do work to update the DOM and the screen
The developer needs to do work to manipulate the DOM

Saving the work done by the browser and the developer is at the root of what React is designed to do
