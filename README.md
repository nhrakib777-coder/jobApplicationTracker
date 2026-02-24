**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
- **getElementById =>** grabs one element by its ID.
- **getElementsByClassName => **grabs all elements with that class, returns a live collection.
- **querySelector("selector") =>** grabs the first element that matches any css selector.
- **querySelectorAll("selector") =>** grabs all elements that match a css selector, returs a static list.

====================================================================
### 2. How do you create and insert a new element into the DOM?
Steps to create and insert an element:
1.** Create the element** -  const card = document.createElement('div');
2. **Add content or attributes** - card.className = 'card'; card.innerHTML = `<div class="card"></div>`;
3. **Insert it into the DOM** - document.body.appendChild(card);
  
====================================================================
### 3. What is Event Bubbling? And how does it work?
- **Event Bubbling**: when an event happens on an element, it first runs on that element then bubbles up to it's parent, then the grandParent, all the way to the document.
-** how to works**: Event triggers child first, then bubbles up to parents. 
- Examples: 
  **HTML-** <div id="parent">
              <button id="child"> Click me</button>
            </div>
**Js-**document.getElementById("parent").addEventListener("click",       (){console.log("parent clicked");}
document.getElementById("child").addEventListener("click", (){console.log("child clicked");}
===============================================================

### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans. **Event Delegation** : using one parent event listener to handle events for many child elements.
 **Why useful:** 
- save memory because we don't need to add many event listeners for many elements.
- Works for dynamic elements,
- Makes code cleaner and easier to manage and read.

Example: 
-** HTML:** <ul id="list">
          <li>item-1</li>
          <li>item-2</li>
          <li>item-3</li>
        </ul>
- **JS:** document.getElementById('list').addEventListener("click", function(event){if(event.target.tagName === 'li'){console.log('clicked:', event.target.textContent);}});

====================================================================

### 5. What is the difference between preventDefault() and stopPropagation() methods?
- **preventDefault():** it stops the default browser action.
- **stopPropagation():** it stops the event from bubbling up to parent elemnts.

