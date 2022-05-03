# tutorial
[01-birthday-reminder](https://github.com/john-smilga/react-projects)

# avatar generator
[get image urls](https://getavataaars.com/)

# UI css framework
[BULMA](https://bulma.io/) 

# summary

- component get the data from  a higher level component that needed put data by prop
```js
// in App.js
<List people={people} />
```
```js
// in List.js
const List = ({ people }) => {...}
```
- extract values from objects
[Destructuring Assignment ES6](https://hugo-mauve-six.vercel.app/posts/javascript-1/#destructuring-assignment)
```js
const { id, name, age, image } = person;
```
- handling events
 [事件处理](https://zh-hans.reactjs.org/docs/handling-events.html)
 [React onClick Event Handling (With Examples)](https://upmostly.com/tutorials/react-onclick-event-handling-with-examples)
```js
// in App.js
<button class="button is-link is-light " onClick={() => setPeople([])}>clear all</button>

```