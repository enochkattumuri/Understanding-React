### HTML Authoring

[Link to the official JSX specification](https://facebook.github.io/jsx/)

JSX does not have any semantics which means that the tags do not have any
inherent meaning.

However, when JSX is used to build web applications and websites, is ultimately
making a tree that has meaning - DOM Tree.

Each of the HTML elements has specific meaning.

Authoring HTML means looking at the content and using the most appropriate
element to mark it up

Example of bad HTML authoring

```
<div>
  <div>
    <span>One</span>
    <span>Two</span>
    <span>Three</span>
  </div>
</div>
```

The `div` and `span` elements have no meaning.

Content which is not semantic makes it tough to understanding the content, and
is less accessible because the screen readers would not be able to interpret it.

The point of semantic HTML is to provide meaning.

It is also not future proof.

Example of good HTML authoring

```
<section>
  <ui>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
</section>
```

Carefully authored HTML is self-describing, it is meaningful, easier to read and easier to maintain.
