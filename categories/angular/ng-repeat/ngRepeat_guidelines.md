##ngRepeat Guidelines
-----------------------

###Clarifying Questions (when asked in person):

- How would you use ng-repeat to display a list of data?

    - We would insert ng-repeat in the line item: <li ng-repeat='customer in customers'>
    - And for each piece of data, if it is an object, we could create an additional tag: <div>{{customer.name}}</div> etc.

- How can we order the list by customer's name?

    - We would use the orderBy filter.

###Rubric:

  - **Remote:**

    - Run student's code and review. Pass or Fail based on whether or not the list is rendered correctly..

  - **In person:**

    - **Pass** (Achieves 2 out of 3 learning objectives):
        - [ ] Student articulates how we can use ng-repeat to display a list of data
        - [ ] Student explains how to order the list
        - [ ] Student writes code that renders the customers list correctly
    
    - **Fail** (Student achieves less than 2 of the previous learning objectives)
