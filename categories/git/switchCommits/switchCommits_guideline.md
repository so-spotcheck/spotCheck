##SwitchCommits Guidelines
-----------------------

###Clarifying Questions (when asked in person):

  - What do you need to worry about if you've already published the repo that you're changing?

    - Rewriting a git history that other people are using is a bad idea! You will most likely end up with divergent/unmergable repos

  - How would you manage these questions the repo has already been published?

    - 'Git revert' allows you to create patch commits to cancel out previous commits instead of rewriting a repo's commit history

###Rubric:

  - **Remote:**

    - Review student's git commands. Pass or Fail based on whether or not the student correctly the student solves all three problems. (Note: these solutions are the most commonly accepted/upvoted SO solutions, but there are some variants available in the SO resources)

  - **In person:**

    - **Bonus points**
        - [ ] Student asks about/presents solutions that deal with an already published repo (git revert)

    - **Pass** (Achieves 4 out of 4 learning objectives):
        - [ ] Student checks out the previous commit hash for question 1
        - [ ] Student hard resets to the previous commit hash for question 2
        - [ ] Student amends the previous commit for question 3

    - **Fail** (Student doesn't achieve all of the previous learning objectives)

###Additional Resources:

  - [stackoverflow: Revert to a previous Git commit](http://stackoverflow.com/questions/4114095/revert-to-a-previous-git-commit)

  - [stackoverflow: Edit an incorrect commit message in Git](http://stackoverflow.com/questions/179123/edit-an-incorrect-commit-message-in-git)
