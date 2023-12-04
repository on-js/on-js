# on-js

## Installation

Add the script tag to your `head`

```html
<script src="//unpkg.com/@on-js/on-js@0.3.0" defer></script>
```

Or install with npm

```bash
npm i @on-js/on-js
```

```js
import "@on-js/on-js";
```

## How to use

`on-js` parses object literals into a set of commands. These object literals come in two formats:

```html
<div js-on="{event: {target: {...options}}}"></div>
<div js-hover="{target: {...options}}"></div>
```

When using `js-on` the top level keys are the events to listen for, e.g `click` and `focus`. If multiple events are to trigger the same command then a space-separated list is allowed. Each event must have an object as its value.

The `target` is the element(s) on which to apply the options. The `target` must be one of `self`, `parent`, or a query selector. Multiple targets may be passed. Each target must have an object as its value.

`js-on` example

```html
<div
  class="inline-block"
  js-on="{'pointerenter pointerleave': {'#dropdown1': {toggle: 'hidden'}}}"
>
  <div>Dropdown</div>
  <ul id="dropdown1" class="absolute hidden">
    <li>Dropdown item 1</li>
    <li>Dropdown item 2</li>
    <li>Dropdown item 3</li>
  </ul>
</div>
```

`js-hover` example (equivalent to the above)

```html
<div class="inline-block" js-hover="{'#dropdown2': {toggle: 'hidden'}}">
  <div>Dropdown</div>
  <ul id="dropdown2" class="absolute hidden">
    <li>Dropdown item 1</li>
    <li>Dropdown item 2</li>
    <li>Dropdown item 3</li>
  </ul>
</div>
```

`js-load` example

```html
<ul js-load="{li: {context: 'self', on: {click: {self: {delete: true}}}}}">
  <li>Click to delete me 1</li>
  <li>Click to delete me 2</li>
  <li>Click to delete me 3</li>
</ul>
```

## Options

`context`\
The context of any `target` query selector. Must be `'self'`, `'parent'`, or `'document'`. The default is `'document'`.

`delete`\
Delete the `target`. Must be `true` or `false`.

`toggle`\
Toggle the `target`'s classes using a space-separated list.

`add`\
Add to the `target`'s classes using a space-separated list.

`remove`\
Remove the `target`'s classes using a space-separated list.

`toggleattr`\
Toggle the `target`'s boolean attributes using a space-separated list.

`attr`\
Set the `target`'s attributes using an object of name-value pairs. Values must be a string or a boolean. A value of `true` will add a boolean attribute and a value of `false` will remove a boolean attribute.

`content`\
Set the `innerHTML` of the `target`.

`move`\
Move the `target`. Must be `'up'` or `'down'`.

`movebefore`\
Move the `target` before the selected element. Must be `'parent'` or a single element query selector.

`moveafter`\
Move the `target` after the selected element. Must be `'parent'` or a single element query selector.

`movetostart`\
Prepend the `target` to the selected element. Must be `'parent'` or a single element query selector.

`movetoend`\
Append the `target` to the selected element. Must be `'parent'` or a single element query selector.

`swap`\
Swap the `target` with the selected element. Must be a single element query selector.

`clonebefore`\
Clone the `target` before the selected element(s). Must be `'self'`, `'parent'`, or a query selector.

`cloneafter`\
Clone the `target` after the selected element(s). Must be `'self'`, `'parent'`, or a query selector.

`clonetostart`\
Prepend a clone of the `target` to the selected element(s). Must be `'self'`, `'parent'`, or a query selector.

`clonetoend`\
Append a clone of the `target` to the selected element(s). Must be `'self'`, `'parent'`, or a query selector.

`on`\
Apply a `js-on` rule to the `target`.

`dispatch`\
Dispatch a space-separated list of events to the `target`.

## Available attributes

```
js-on

js-blur
js-change
js-click
js-focus
js-hover
js-input
js-keydown
js-keyup
js-load
js-pointerdown
js-pointerenter
js-pointerleave
js-pointermove
js-pointerout
js-pointerover
js-pointerup
js-reset
js-submit
```
