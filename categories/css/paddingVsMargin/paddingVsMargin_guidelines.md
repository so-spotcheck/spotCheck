##PaddingVsMargin Guidelines
-----------------------

###Clarifying Questions (when asked in person):

1) How come the distance between the buttons is 10px? Since the top button has a margin-bottom of 10px and 
the bottom button has a margin-top of 10px we would expect the distance to be 20px.
Correct the style so the distance is 20px.

2) Change the style of the buttons to have a 10px distance from the button text to the top and bottom borders
and 15px to the right and left borders. 

- How come the distance between the buttons is 10px? Since the top button has a margin-bottom of 10px and 
the bottom button has a margin-top of 10px we would expect the distance to be 20px. Correct the style so the distance is 20px.

    - The top and bottom margins are collapsing. Margins of adjacent vertical items will overlap, so even though there is a total
    of 20px margin, they are collapsing into one another resulting in 10px.

- What would happen if these buttons were next to one another horizontally? Would the margins separating them still collapse?

    - No. Horizontal margins never collapse.

- How can we change the style of the buttons so that there is a 10px distance from the button text to the top and bottom borders
and 15px to the right and left borders. 

    - We would apply {padding: 10px 15px} to the button tag.

###Rubric:

  - **Remote:**

    - Run student's code and review. Pass or Fail based on whether or not buttons are styled correctly (vertical margin between buttons = 20px & button padding = 10px 15px.

  - **In person:**

    - **Pass** (Achieves 2 out of 3 learning objectives):
        - [ ] Student articulates why we the margins are collapsing
        - [ ] Student explains what happens to margin if buttons are placed horizontally to each other
        - [ ] Student writes CSS that adds correct padding to buttons
    
    - **Fail** (Student achieves less than 2 of the previous learning objectives)

###Additional Resources:

  - [stackoverflow: When to use margin vs padding in CSS](http://stackoverflow.com/questions/2189452/when-to-use-margin-vs-padding-in-css)

