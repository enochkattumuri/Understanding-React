// An attempt to define the markup of the counter used in Section 02 as a POJO

/* This is a kind of virtual DOM, which is declarative. We are stating how the
DOM has to look, but not specifying how we can get there */
let markup = {
  type: 'article',
  children: [
    {
      type: 'h2',
      children: [
        {
          type: 'text',
          value: 'Counter',
        }
      ],
    },
    {
      type: 'p',
      children: [
        {
          type: 'text',
          value: 'You clicked ',
        },
        {
          type: 'strong',
          children: [
            {
              type: 'em',
              children: [
                {
                  type: 'text',
                  value: '1',
                }
              ],
            }
          ],
        },
        {
          type: 'text',
          value: ' times',
        },
      ],
    },
    {
      type: 'button',
      children: [
        {
          type: 'text',
          value: 'Click me',
        },
      ],
    },
  ],
}

console.log(markup);

/* The imperative program, which takes the fake DOM and transforms it into the
real DOM */
const main = document.getElementById("app");

function addElements(pojoElement, parentDOMNode) {
  let newDOMNode = pojoElement.type === 'text'
    ? document.createTextNode(pojoElement.value)
    : document.createElement(pojoElement.type);

  if (pojoElement.children) {
    pojoElement.children.forEach((child) => {
      addElements(child, newDOMNode);
    })
  }

  console.log(parentDOMNode);
  parentDOMNode.appendChild(newDOMNode);
}

addElements(markup, main);

/* This is how React works. It takes a declarative program from the user, to
create a virtual DOM and creates/updates the real DOM based on the changes in
the declarative program */
