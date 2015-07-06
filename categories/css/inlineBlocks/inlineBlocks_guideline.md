##InlineBlocks Guidelines
-----------------------

###Clarifying Questions (when asked in person):

- Why is there whitespace between the `span` elements when rendered

    - A typical characteristic of inline elements is that they respect the whitespace in the markup. This explains why a gap of space is generated between the elements.

- Can this be solved with CSS alone? If so how would you do it?
    
    - You could achieve this by changing the font size to 0 for the parent using the `font-size: 0` CSS property. Then you would have to also add a `font-size` property to each fo the children items.

- What is another way to solve this problem?

    - Most experienced web developers would change the whitespacing the html for this type of problem. For example instead of:

    ```javascript
    <p>
        <span> Foo </span>
        <span> Bar </span>
    </p>
    ```
    We can do this:

    ```javascript
    <p>
      <span>Foo</span><span>Bar</span>
    </p>
    ```

    Making this change in the HTML will be sufficient for eliminating the whitespace.


###Rubric:

  - **Remote:**

    - Run student's code and review. Pass or Fail based on whether or not student was able to eliminate the gap between spans

  - **In person:**

    - **Bonus points**
        - [ ] Student articulates why there is a whitespace between the spans

    - **Pass** (Achieves 1 out of 2 learning objectives):
        - [ ] Student writes CSS that solves the prompt
        - [ ] Student changes the html to solve the prompt
    
    - **Fail** (Student achieves less than 1 of the previous learning objectives)

###Additional Resources:

  - [stackoverflow: How to remove the space between inline-block elements?](http://stackoverflow.com/questions/5078239/how-to-remove-the-space-between-inline-block-elements)

  - [stackoverflow: Why is there an unexplainable gap between these inline-block div elements?](http://stackoverflow.com/questions/19038799/why-is-there-an-unexplainable-gap-between-these-inline-block-div-elements)

