### Tree Reconciliation and the Tree Edit Distance Problem

#### Reconciliation
Comparing two items to find difference between them

#### Tree Reconciliation
Comparing two trees (or equivalent portions of trees) and finding the steps
needed to make them match.

Turning one tree to match the other and minimising the steps needed to do so is
called the Tree Edit Distance problem

#### Tree Edit Distance Problem
What is the algorithm to find the smallest number of steps to change one tree to
match another?

The distance between trees is the minimum number of steps needed to change one
tree to another.

Finding those numbers of steps is important too because minimising the number of
steps means minimising the work needed to be done.

Not only the minimum number of steps, but the methodology to find the minimum
number of steps also needs to be an efficient algorithm.

Inside React, there is an algorithm for carrying out the tree reconciliation by
solving the Tree Edit Distance problem.
