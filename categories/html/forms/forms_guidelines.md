##CrazyChars Guidelines
-----------------------

###Clarifying Questions (when asked in person):

- What can we put in the onsubmit attribute of the form:
  - Any javascript code. This is why we can return false here onsubmit and the form will not submit.

- What is the difference between e.preventDefault() and e.stopPropagation()? 
  - `stopPropagation` stops the event from bubbling up the event chain.

  - `preventDefault` prevents the default action the browser makes on that event.

###Rubric:

  - **Remote:**

    - Run student's code and review. Pass or Fail based on whether or not they were able to successfully prevent the form from submitting.

  - **In person:**

    - **Bonus points**
        - [ ] Student can clearly explain difference between stopPropagation and preventDefault

    - **Pass** (Achieves 2 out of 2 learning objectives):
        - [ ] Stops form submit with JQuery
        - [ ] Stops form submit using onsubmit attr only. 
    
    - **Fail** (Student does not achieve all of the previous learning objectives)

###Additional Resources:

  - [event.preventDefault() vs. return false](http://stackoverflow.com/questions/1357118/event-preventdefault-vs-return-false)
