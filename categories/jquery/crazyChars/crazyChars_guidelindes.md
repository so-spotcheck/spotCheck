##CrazyChars Guidelines
-----------------------

###Clarifying Questions (when asked in person):

- What will happen if you place the .on('click') event listener directly on individual div elements?

    - Event listeners applied like that will only be attached to elements already on screen when that jQuery code is run.

    Incorrect:

    ```javascript
    $('div').on('click', function() {
      // do something...
    })
    ```
    Correct:

    ```javascript
    $('body').on('click', 'div', function() {
      // do something...
    })
    ```

###Rubric:

  - **Remote:**

    - Run student's code and review. Pass or Fail based on whether or typing letters or characters makes them permanently appear at random positions on the screen and clicking on one alerts it to the window

  - **In person:**

    - **Bonus points**
        - [ ] Student accounts for the height and the width of the current document when selecting a random x and y coordinate for the new element
        - [ ] Student clearly articulates why placing the event listener on all child elements of a parent element is different than placing it on all individual instances of an element

    - **Pass** (Achieves 2 out of 2 learning objectives):
        - [ ] Letters and numbers appear in random positions on screen after being pressed
        - [ ] Clicking on a character alerts that character to the window
    
    - **Fail** (Student does not achieve all of the previous learning objectives)

###Additional Resources:

  - [stackoverflow: Event binding on randomly created elements?](http://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements)

  - [stackoverflow: Random position of divs in javascript](http://stackoverflow.com/questions/4796743/random-position-of-divs-in-javascript)

  - [stackoverflow: How to get the element clicked (for the whole document)?](http://stackoverflow.com/questions/9012537/how-to-get-the-element-clicked-for-the-whole-document)
