##FactoryFunction Guidelines
-----------------------

###Clarifying Questions (when asked in person):

  - Why is it best practice to use factories/services instead of storing everything in a controller?

    - That functionality can be made available to other controllers
    - Factories are services are only loaded once at the initialization of the app, controllers are reloaded multiple times
    - Separation of concerns, abstracting unnecessary functionality out of the controller

###Rubric:

  - **Remote:**

    - Run and review student's code. Pass or Fail whether or not the text changes through proper use of a factory.

  - **In person:**

    - **Pass** (Achieves 2 out of 2 learning objectives):
        - [ ] Student fixes all broken code
        - [ ] Text changes correctly upon button click

    - **Fail** (Student doesn't achieve all of the previous learning objectives)

###Additional Resources:

  - [sitepoint: Tidy up your angular controllers with factories and services](http://www.sitepoint.com/tidy-angular-controllers-factories-services/)
