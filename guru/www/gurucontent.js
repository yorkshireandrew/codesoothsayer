var ESCAPE_HTML = true;
var CONTENT_IS_RAW_HTML = false; 
var SHOW_CONTENT = true;
var HIDE_CONTENT = false;
var SHOW_IMAGE = true;
var HIDE_IMAGE = false;

var content = [

/* SINGLE RESPONSIBILITY PRINCIPLE */
	
["Single responsibility principle (SRP)", "Commits deserve single responsibility too.",
`When fixing a bug or adding a feature your next commit should include only that. Any refactoring and cleaning associated with your work should left out and put into a following commit (assuming you already have sufficient tests to check your refactoring).`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],


["Single responsibility principle (SRP)", "A class or method should have only one reason to change.",
`If you change a dependency only the code directly coupled to that dependency should require changing. Each class should encapsulate a single responsibility or concept so that it only needs to be modified when that responsibility or concept changes.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	
["Single responsibility principle (SRP)", "Deciding is one responsibility. Doing it is another.",
`Logic to decide what to do, or if to do something or not, is a responsibility that should be separated from the mechanism of actually doing it. Consider using a predicate decorator (that takes a predicate) around the action, or separating those responsibilities out into separate methods.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

["Single responsibility principle (SRP)", "Holding business data is a separate responsibility from processing and transportation",
`Classes representing business entities or logic should do just that and not also hold state or logic associated with processing, such as cache keys, version numbers, user authentication, required response format.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

["Single responsibility principle (SRP)", "Functions or methods should do one thing.",
`They should only do that one thing and they should do it well.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

["Single responsibility principle (SRP)", "Do not keep hit people with flags.",
`Using flag arguments to switch a methods behaviour is ugly. It may be more appropriate to use the template or command pattern instead. Also it could be more appropriate to implement the desired behaviours as two separate methods (refactoring the code these two methods have in common out into sub-methods)`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

["Single responsibility principle (SRP)", "Extract try-catch blocks.",
`Functions and methods should do just one thing... and error-handling is one thing. Extract error-handling out into a wrapping method or function; doing this  ensures the error-handling is fully decoupled from the doing and avoids cluttering-up the function that actually does the work.

Cleanly separate your happy-path from your error-path... these are two different directions.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

["Single responsibility principle (SRP)", "Constructing and starting up a system should be separate from the action of running it.",
`Choosing and resolving dependencies and wiring them together is a separate concern from normal running. Do not scatter set-up strategy, dependency resolution and the creation of permanent objects across an application.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

["Single responsibility principle (SRP)", "Classes and methods should be easy to describe.",
`You should be able to describe each class in 25 words or less, ideally without using 'if','and','or',but'.  If the implementation is hard to explain, it's a bad idea.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	
/* LISKOV SUBSTITUTION PRINCIPLE (LSP) */
	
["Liskov Substitution Principle (LSP)", "Clients must never need to know the exact class of a subtype.",
`Otherwise LSP is broken as the client then only supports a limited range of subtypes. This is why type-sniffing then down-casting to that type should be avoided.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
			
["Liskov Substitution Principle (LSP)", "Child classes must never throw new exceptions.",
`In other words it must not throw new or broader exceptions than those their parent class is expected to throw. Otherwise the subtype cannot be used as a substitute everywhere a parent class is used.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
			
["Liskov Substitution Principle (LSP)", "Children must be equally or less fussy than their parents.",
`Methods of a subtype (child class) cannot be more limiting about what are acceptable inputs (preconditions). It must not use a narrower input parameter type than its parents. Checks such as null checking or negative checking are not part of method signatures, but are also preconditions. Similarly adding a new field in a subclass (that cannot be left at default) is also a new precondition.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
			
["Liskov Substitution Principle (LSP)", "Generic inputs to subtype methods must be contravariant.",
`If a parent class (AnimalShelter) has a method that accepts List<Animal> as an input parameter, subtypes can have methods with wider inputs such as List<Object> … so that method could easily digest List<Animal> … but cannot have narrower more restrictive inputs such as List<Mouse> since our subclass can never be totally sure it will always get given a load of mice.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
			
["Liskov Substitution Principle (LSP)", "Children should only give you what their parents permit.",
`Postconditions cannot be weakened on outputs. Methods of a subtype (child class) cannot return less limited outputs than their parents would (postconditions). It must return an equal or narrower type than the parent class. Also if the parent made checked or implied assertions as part of its contract (say that it will never return a null) then subtypes need to also uphold that contract.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
			
["Liskov Substitution Principle (LSP)", "Generic outputs of subtype methods must be covariant.",
`If a parent class (SmallAnimalShelter) has a method (getAnimals) that returns List<SmallAnimal> then subtypes must return equal or narrower outputs, such as List<Mouse> but not a wider output such as List<Animal>, as it can never be totally sure its client can handle loads of big animals.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
			
["Liskov Substitution Principle (LSP)", "Children must preserve the rules enforced by their parents.",
`Invariants (rules) that restrict the properties or behaviours exhibited by a parent must be preserved by subclasses. In other words properties, thresholds and values that were controlled by rules within  a parent class (or implied somehow) must not be directly settable within a subclasses.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	
/* INTERFACE SEGREGATION PRINCIPLE (ISP) */
			
["Interface Segregation Principle(ISP)", "Use small stable interfaces.",
`Interfaces should be as small as practicable, have a single responsibility and only one reason to change making them more stable. Consider segregating large interfaces into separate read and write ones, or into command and query ones.

This does not mean that multiple implementation classes are required, a single implementation class could be written that provides both a read interface and a write interface.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	
["Interface Segregation Principle(ISP)", "Pass-through methods are a warning sign.",
`Multiple pass-through methods on a decorator class are a sign the interface or class would benefit from splitting.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	
/* DEPENDENCY INJECTION */

["Dependency injection (DI)", "Never get what you need, ask for it instead.",
`Be explicit and state what you need in your constructor or method signature and let your creator or caller be responsible for resolving those dependencies for you.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	
["Dependency injection (DI)", "Configuration is something you should be passed.",
`Classes should not need to fetch configuration, it should get passed as an argument to high level functions then passed appropriately to lower level functions. When you have many configuration variables these should get grouped appropriately and represented by appropriate classes.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	
["Dependency injection (DI)", "Inversion of control (IoC) is not dependency injection (DI).",
`Inversion of control is shifting of responsibility for creating business objects, wiring them and calling methods on them out into an encompassing framework. Dependency injection is the technique that IoC frameworks need so they can acquire control. In IoC dependencies should apply the Hollywood principle and not call the framework, let the framework call them instead.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	
["Dependency injection (DI)", "Dependency cycles when using dependency injection can be solved.",
`Where you have dependency cycles these can be hard to factor to dependency injection. However it can be achieved either through using an event/messaging approach or breaking the cycle with property injection (for example A => B => C … then inject A into C as a property)`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	
["Dependency injection (DI)", "Consider each objects intended life-cycle.",
`Is the life-cycle (1) Singleton (2) Transient (3) Per Graph (one instance per object graph – running with the same thread) (4) Web request scoped (5) Pooled (6) Lazy or (7) Future (proxy until the dependency becomes available). Ideally an inversion of control container should be responsible for managing the life-cycle of most objects.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	
["Dependency injection (DI)", "Do not be a control-freak.",
`Does the class you are working on create or destroy of other resources and dependencies? If so should it really be doing that? 

In most cases the responsibility for the lifetime of objects and resources should be delegated off to your inversion-of-control (IoC) container, so that it holds control of providing resources and lifetimes, making the code more adaptable and easier to test.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	
["Dependency injection (DI)", "Separate what you choose to create from when you choose to create it.",
`Factory classes and abstract factories allow your code to control when something gets created, but gives control to the Inversion-of-Control (IoC) container over what gets created and how that is achieved.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	
/* OBJECT ORIENTATED DESIGN */

/*
["Object orientated design (OOD)", "",
``
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

*/
]
