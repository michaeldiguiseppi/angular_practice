### Part 1
- Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?  Angular is the most widely used, as well as the most fully featured.  Angular also has the fastest load times and the smallest application sizes.
- People have some very strong opinions about Angular. What are 3 common complaints people have about Angular? Client side rendering, hard to learn, scoping issues.
- Is Angular an MVC framework? It can be, but doesn't have to be.  It is also considered an MVVM framework.
- Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for? ng-app is used to specify the root element of the application.  It is typically placed as an attribute on the html or the body tags, so that the entire page can use the application scoped variables and controllers. ng stands for a core module.

### Part 2
- What does ng-model do? ng-model creates a data model to bind an element to.  For example, we use ng-model to bind a text field to another element so that the value of the input can be used in the other element with {{}}.
- What is "dirty checking"? Dirty checking is the process by which the view constantly checks for changes made to the data model.
- Find a way to set the initial value of "name" as "BoJack" (without writing a controller). you can use ng-init="name='BoJack'".
- What are those {{ }} expressions? Are they Handlebars? the {{ }} expressions are used to pass variables into the view from ng-models.
- Explain what two-way data binding is. Two-way data binding is the ability to bind a piece of data to a variable, so that every time it changes, it sends the information of the change to the model, and then the changes back to the variable for rendering.
- BONUS: Research the $digest loop.  Every time the data model could change, the application calls $digest on the event loop to check for changes and then do something with them if found.

### Part 4
- What are Angular expressions? How do they compare to tags from templating engines you've used before? Angular expressions are simple expressions inside of {{ }}.  They can represent a variable or an expression.  Swig is very similar, but lacks the real-time data binding.
- What happens when you write invalid code in an expression? What type of error do you get? When you have a piece of invalid code in an expression, none of your expressions get parsed to their values, they all just show up the {{ }} with the raw expression inside. Also, it throws a parse error.
- What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet. Angular filters are similar to swig filters, they convert the data in the expression to a more usable form. Examples include uppercase, lowercase, currency, and json.
- What's the syntax for filters? {{ expression | filter }}
- Can you use more than one filter? Yes, you can chain them, such as {{ 33.34345 | number:2 | currency:'€'}}, although many of them are not necessary to chain (because in this case, currency auto rounds the number to two places).
- We'll soon see how to create custom filters. What is a use case for a custom filter? To parse something as an integer, there is no built in conversion for that.  Therefore you could write a custom filter to parseInt something.

### Part 5
- Inspect an element that is hidden by ng-show/hide in the browser. What does Angular do to hide an element? They add a class of ng-hide, which gives it display none !important.
- What is the purpose of ng-init? ng-init allows you to evaluate an expression in the current scope.  Can be abused to add extra logic or data into your view, which should actually be done in the controller.
- Why use ng-src and ng-href? ng-src and ng-href allow angular to substitute {{ }} values before the tag fetches the data from that src or href.
- What are directives? Directives are attributes passed to elements that allow the angular compiler to know that it needs to do something with them.
- Does ng-class require an object to be passed in? No.  ng-class can take an object or a string.
- What order does an ng-repeat display items in? ng-repeat displays items in the index order.
- How does ng-repeat handle duplicate data? if breaks on duplicate data, unless you specify a way to track the data, such as 'track by'.

### Part 6
- What is $scope?
- What are Angular modules? What's the syntax for defining a module?
- Why do we pass in $scope as an argument to controller functions?
- In Express, what are Angular controllers most analogous to?

### Part 7
- What is $rootScope?
- Explain how $scope is passed from a parent to child controller
- List five built in directives that create their own scope.  ng-if, ng-repeat, ng-controller, ng-view, ng-switch
- "Scope becomes tricky when you try to 2 way data bind to a primitive defined on the parent scope from inside the child scope" - what does this mean? 
