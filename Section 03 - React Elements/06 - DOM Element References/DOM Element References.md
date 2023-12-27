### DOM Element References
When we do `document.getElementById`, we are searching for a reference to a DOM node that is already present. This DOM node is present in the computer's memory and its address is returned to us. We provide this reference to React and then subsequent operations take place.

It is important to understand that we need a DOM element to already exist, in order to be able to get a reference to it, when searching through the DOM

This helps us figure the timing of when React is doing the DOM updates.
