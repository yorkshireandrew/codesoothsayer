var ESCAPE_HTML = true;
var CONTENT_IS_RAW_HTML = false; 
var SHOW_CONTENT = true;
var HIDE_CONTENT = false;
var SHOW_IMAGE = true;
var HIDE_IMAGE = false;

var content = [

/* ============================================== */	
/* SINGLE RESPONSIBILITY PRINCIPLE */
/* ============================================== */	
	
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

/* ============================================== */	
/* LISKOV SUBSTITUTION PRINCIPLE (LSP) */
/* ============================================== */	
	
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

/* ============================================== */		
/* INTERFACE SEGREGATION PRINCIPLE (ISP) */
/* ============================================== */	
			
["Interface Segregation Principle(ISP)", "Use small stable interfaces.",
`Interfaces should be as small as practicable, have a single responsibility and only one reason to change making them more stable. Consider segregating large interfaces into separate read and write ones, or into command and query ones.

This does not mean that multiple implementation classes are required, a single implementation class could be written that provides both a read interface and a write interface.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Interface Segregation Principle(ISP)", "Pass-through methods are a warning sign.",
`Multiple pass-through methods on a decorator class are a sign the interface or class would benefit from splitting.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

/* ============================================== */	
/* DEPENDENCY INJECTION */
/* ============================================== */	

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

/* ============================================== */	
/* OBJECT ORIENTATED DESIGN */
/* ============================================== */	

["Object orientated design (OOD)", "Objects can be evil too.",
`Objects should not be used as a way for many functions to implicitly share a big bag of mutable state.

Each object should have a clear compartmentalized responsibility, be as immutable as practicable and deal mainly with their own fields and properties. If this desire is not followed several objects can form into closely coupled groups, expose there internal processes and start having an orgy`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Object orientated design (OOD)", "Classes should be compact and have cohesion.",
`Classes should aim to have a small number of variables and each method should use or manipulate one or more of these. It should not contain groups of unrelated variables or methods.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Object orientated design (OOD)", "Never call virtual methods from a constructor.",
`Because the over-ridding method a child class may supply could access other methods or properties on the class which are not ready to run or have not yet been initialised.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

/* ============================================== */	
/* SOFTWARE DESIGN */
/* ============================================== */	
	
["Software design", "Use the Hollywood pattern or principle.",
`The adage is “Don't call us we'll call you”. For example if instance (A) creates some other instance (B) then avoid passing a reference to instance (A) into instance (B). It is better to have instance (A) ask things of instance (B) then have instance (A) manipulates its own state appropriately.

The Hollywood pattern is where an object's (or component's) initial condition and ongoing life cycle is handled by its environment rather than by the object itself.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Infrastructure as code (IaC) and Configuration as code (CaC) is a good thing.",
`Managing, provisioning and releasing services and data-centres and should be done using files rather than manually via interactive configuration tools. This permits automation, removes human error from provisioning and allows configuration data such as firewall settings to be documented and held in source-control (or a configuration-database). Example IaC tools are Ansible and Puppet.

Regardless of whether the management of services is automated or not, the configurations used for services and any adjustments made to those configurations over time should be clearly recorded using some suitable process or technology (configuration management).`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Resource acquisition is initialisation (RAII).",
`In RAII resources (e.g. memory or database connections) are acquired during object construction and released when the object is finalized (garbage collected). RAII ensures an object is fully initialised after construction, that resource allocation is done in one place in the class, and resources are freed once the object no longer used.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Do not summon an entourage.",
`In the same way rulers rarely live among there workers – an interface should rarely live in the same assembly as a group of associated concrete implementations. This allows clients to only reference what they need (the interface and a chosen implementation) without being forced to hold references to an entourage of implementations and all their hangers-on. Follow the stairway pattern.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Define protocols outside of the client-service implementations that use them.",
`Interfaces or classes that define a protocol between a client and a service should live in a separate assembly. This permits clients and services to access to just the protocol, without having to  hold references to something at other side - and all its associated hangers-on (stairway pattern).`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Avoid referencing implementation classes when defining interfaces.",
`If possible reference another interface instead. Otherwise the interface is forcing its users to have references to those implementation classes. Referencing stable data-structures is not as harmful.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "When you push a commit it should build and work.",
`Ensure your code-base is up-to-date and run tests before committing. Ensure you have added in every file associated with your change. Ensure you 'save all' and commit the files that your IDE altered for you, such as Visual Studio (.csproj) and (.sln) files. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Do not (add a feature) or (fix) or (clean) simultaneously... just do one at once.",
`Cleaning is making code better without altering function. Fixing is altering function by introducing a minimal change to the code-base. These two things are diametrically opposed - so trying to do both makes the results in a muddled and unclear commit. Do one then go do the other.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Concrete implementation classes act like gerbils.",
`Keep alert! Concrete implementation classes will always attempt to escape from the methods, classes and assemblies that contain them and will sneak into interfaces while your not looking.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Consider using mix-ins and duck-typing (C#).",
`In C# you can use duck-typing by using the “dynamic” keyword or Impromptu interface (nuget) which is a run-time adapter. Mix-ins can be implemented using C# extension methods, but these can be hard to test, Re-motion Remix is another alternative.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Be expressive through using fluent interfaces.",
`Code should as far as possible read like a natural language. If your code is performs lots of selection, filtering or logic it may be clearer and more expressive if you develop a fluent interface or use the specification pattern. A fluent interface is one which extensively uses method chaining (where methods called on an instance of an interface usually return another instance of that same interface). `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "The answer every client seeks is an immutable one.",
`Subtle bugs are created when something assumes what it is given is immutable, which later gets changed. Most answers to questions should either be or quickly become immutable. Be especially careful whenever you provide the same mutable object to several clients, avoid doing this accidentally.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Avoid leaking dependencies across layers or domains.",
`Callers to your layer/domain should not need to also have direct dependencies to any of your layers dependencies. Translate all classes and exceptions returned from other domains or libraries that your layer/domain uses into ones owned by your layer/domain.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Impossibility should be suitably encapsulated.",
`For example weights should not be represented with a simple float; It should be a represented by a class that prohibits negative values. Similarly most (DateTime) differences should only be positive. Doing this catches bugs early and avoids having to put in multiple precondition checks elsewhere.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Arguments should be for run-time information.",
`Methods should not be passed information through arguments that was available to the class when it was constructed. In many cases where the information was available to the class at a suitable earlier moment, in which case the class should have been injected with it at that point using a property.

Balance the desire minimise method arguments with the desire to choose or create the information a method uses at the latest responsible moment. Also consider the additional memory the class might hold throughout its lifetime.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Design important interfaces first, then program against them.",
`Coding to interfaces (rather than starting by writing concrete implementations first) forces concrete implementations to require and return the defined interfaces, reducing the likelihood of producing leaky abstractions. 

Balance this with the desire to not go down a big design up-front route or add unnecessary abstractions into the code.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Know and minimise your dependency footprint.",
`Are you aware of all your dependencies dependencies? Can you replace a significant dependency with a simpler but adequate alternative?

Balance this with the desire to not re-invent the wheel.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Do not repeat yourself (DRY).",
`Factor out repeated code into new methods or apply the template or command patterns to avoid having duplicate code. Is there a new abstraction or collection type trying to appear that could better represent the repeated code?

Balance this with the desire to keep the code-bases of services independent. When there are multiple requirements then having several code-paths (and accepting some duplication) may prove better than  trying meeting all requirements with a single code-path that is excessively complicated.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Recognise and code cross-cutting concerns appropriately.",
`Rather than repeating yourself if a similar task is likely to be required by several classes or methods, for example checking user permissions, logging, auditing and persisting entities consider making that code more adaptive by factoring it into a aspect-orientated-programming (AOP) solution, decorator class or into some kind of request interceptor or filter.  `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	
["Software design", "Domain entities should be kept clean and dry.",
`The object graph (how domain objects contain other objects) should precisely represent the domain. These objects should be normalized as far as is practicable (i.e. contain no duplicate data) and be free of other fields related to processing, presentation or persistence.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Domain objects and business logic should be implemented with plain objects.",
`Persistence, Caching, Transactions, Security, Concurrency and Fault-tollerance etcetera represent concerns that are separate that of holding business information or performing business logic. After you have got all your business objects working properly you can attach these other computing and processing concerns without polluting your domain objects by using decoration, sub-classing, dynamic proxy or an aspect-orientated-programming (AOP) solution.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Defer doing work or calculations to the latest responsible moment.",
`If your method or class is responsible for doing work such as deriving values, fixing-up data and securing resources should ideally leave doing that work to the latest moment (i.e. aim to create or prepare objects as close to their first use as is possible.). This ensures you are always doing the work with the most up-to-date information available.

Balance this with the desire to keep the overall design simple and minimise the number of arguments on methods.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Keep it simple - follow the path of minimal complexity (KISS).",
`Code should be no more complex than is required for the story you are working on - don't add it if you don't need it. If however some preliminary refactoring allows you to simplify an area of complex code before you begin adding more to it, then this is a path you should take.

Balance this with the desire to keep commits associated with stories and code-cleaning separate, meet all the customers true needs and add interfaces at points where flexibility or extension is anticipated.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Dodge the things that others throw – provided someone else is there to catch them.",
`Exceptions thrown by framework classes (or framework classes you inherit from) are often intended to be caught by that same framework somewhere higher up the stack, your business logic need not interfere.

Where you know this is not the case then rethrow the framework exception as your own domain specific exception then handle it appropriately.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Catch exceptions close to where you throw them.",
`High level code should not have to deal with the details of failures within the dependencies that their minions are using. Minions should handle these details in some manner then inform higher levels appropriately.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Balance functional-programming versus object-orientated-design.",
`Procedural programming in which processes are defined that check the types of the objects they have to work on then act appropriately, make it easy to add new functions, without having to change the existing family of classes. However adding a new class to that family requires changing all the existing functions to accommodate it.

Object orientated design on the other hand makes it easy to add new class to a family of classes, but adding a new function to that family requires changing all the existing classes. 

Consider if it is changes to the family of classes or changes to the family of functions that are most likely to occur, then choose your programming style accordingly.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Classes should intend to act either as objects or data-structures.",
`Objects should have methods with no or few public fields or settable properties. Data-structures on the other hand, for example data-transfer-objects (DTOs), should contain no business logic. 

This avoids muddles where the intent is unclear - which makes it hard to add new methods. It also avoids tempting external functions to use its public fields in a procedural manner.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Law of Demeter  - Talk to friends not strangers.",
`A method of a class should only call methods on:

1) That class.
2) An property or field of that class.
3) An object passed to that method.
4) An object created by that method.

In contrast it is permissible to pick a specific properties or elements from a complex data-structure (e.g. session.user.name) then place that item within an appropriately named variable. Consider object envy too - Would it be better to get the object you are querying to do something for you rather than pulling out its internals?`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Though finding it may be challenging, follow the one obvious path to your goal.",
`Clean-code should provide one and only one obvious way to achieve something - follow that way wherever possible. The more diverse and esoteric your code-base becomes the less clean it is.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Follow the principle of least astonishment.",
`Does it do what it appears to do? Does it do it in the way that you would expect it to do it? If it uses data or techniques in unexpected ways can it be made less astonishing.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	

["Software design", "Avoid shared mutable state.",
`Shared mutable state introduces action at a distance. Although entanglement works well in quantum physics - it makes testability and tracing the cause of issues significantly more difficult.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	

["Software design", "Develop a domain specific language and use it consistently throughout the implementation.",
`Spend time to name abstractions, idioms and patterns used by the domain clearly and concisely. This reduces the risk of incorrectly translating the domain whilst building the implementation. Consider using interpreters (such as specflow or cucumber) or a fluent syntax.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	

["Software design", "Embrace emergent design rather than big design up-front (BDUF).",
`To write code that is sufficient, but no more complex than required:
(1) Choose an appropriate feature to add (2) Write tests (3) Run tests (4) Refactor (5) Minimise duplication (6) Make your code more expressive (de-obfuscation) (7) Look for patterns that add openness for change and reduce complexity. (8) Minimise class and function counts (9) Repeat.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	

["Software design", "Idiot users must be both tolerated and expected.",
`Never underestimate a users ability to misunderstand or do things totally wrong. If the user is a complete fool then your code should respond politely and clearly and point them in the right direction. Sometimes users are downright evil, crafting URLs and requests to kill your service, these must be managed appropriately too.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	

["Software design", "Apply Command – Query-Response Segregation (CQRS).",
`Calls to a service or method should be either (1) A command that causes an action or state change. (2) A query that obtains information. Methods or service calls that are doing both indicate that it has multiple responsibilities (being a query with side-effects) and will be much clearer if re-factored. 

Consider breaking classes, interfaces and services down into two separate ones that deal with just commands or just queries.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	

["Software design", "Having lots of arguments usually causes many more arguments.",
`Methods should have tests covering all possible argument values (or at least the values that are both sides of boundary conditions internal to the method) as well as all possible argument combinations. Consider as well the possible states the instance might be in.

Reduce the number of input parameters a method has to improve readability, reliability and testability. Achieve this by using constructor/property injection where appropriate, identifying groups of related arguments (data-clumps) and  by breaking methods down so they are as small as focussed as possible.

When adding a new argument to a method, ask yourself is it time to refactor that method.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	

["Software design", "An interface can be used to substitute an enumeration (enum).",
`This makes adding new values easy (simply add a new class that implements that interface that represents the value), otherwise you need to recompile all the code and services that make use of that enum, which might not always be practical or possible.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	

["Software design", "Return query-objects or exceptions.",
`Returning a status-code forces the caller to process that code immediately. Whereas returning a query-object  (containing both a status-code and a result value) allows the caller to defer processing of the status-code to when and where it wants to. 

Throwing an exception is another way of liberating the caller from dealing directly with problems; it may be more appropriate and provides a way to cleanly separate your error-handling from your happy-path.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	

["Software design", "Stand on the shoulders of giants then help lift them up.",
`Mankind has always progressed by applying the discoveries of collogues or ancestors. If your  issue, problem or component feels like it may be a common one then check the open-source community to see if someone already has the answer. If the opportunity arises open-source your work or add to open-source projects so that you are helping the world flourish as well as yourself.

Should you wish to contribute to this website you can do so via ***TODO***

Balance this with the desire to minimise dependencies on a wide range of libraries and frameworks.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	

["Software design", "Do not re-invent the wheel (DRTW).",
`If it seems like a common problem it is worth researching to see if there a language-idiom, standard library, company library or suitable (apache, nuget, pip, github) module or library to covers your use-case or one that can be easily extended. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	

["Software design", "Do not re-invent the square wheel (DRTSW).",
`Re-inventing the square-wheel is where you create or adopt an existing incorrect or overly complex solution because the problem is more complex than was originally anticipated and suitable libraries or prior art for the solution already exists. 

Balance this with the desire to minimise dependencies on a wide range of libraries and frameworks.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	

["Software design", "A good framework should disappear from view.",
`A well designed framework (or family of classes) should not impose architectural constraints or pollute other concerns, for example the classes responsible for holding business data or logic. 

For example if a framework provides an abstract class for users to extend, the user should not have to know the finer details about how it works or the interfaces the it provides, the user simply needs to know how to apply that abstract class properly in the framework.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	

["Software design", "Avoid premature decision making.",
`Logical decisions in code should generally be made as close as possible to where that result is first required. they should also be made by the object that is most qualified to make that decision... In other words it should be made at the latest-responsible-moment, unless there is good reason to do otherwise.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Avoid passing or returning a null.",
`It is rarely appropriate to use null as way to trigger error handling. Where null is used appropriately to represent some absence of data, this should be documented in comments or otherwise be made clear in the code. Like exceptions, nulls should be caught and handled appropriately, ideally at a point close to where it was raised.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Avoid mixing languages within a file.",
`Having a mix of languages (such as html and java in a .jsp file) or (c# and html in a .cshtml file) makes the file difficult to understand. Ensure each file clearly favours a specific language by using templates or by creating helper classes that encapsulate most of the code of one of the languages.

Trying to mix java, javascript and html together in a file or in your head will hurt your brain.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Software design", "Development environments should be easy to create and destroy.",
`Ideally this should be as simple as running a script. It must be well documented so there is no need to guess any of the steps or what any configurations need to be. Building correct development environment should be kept up to date with changes to the available versions of components and the live environment. The development environment for a given product or service should be suitably isolated from the environment needed for other products, by using technology such as virtual machines or containerization.

Without this the code from different developers may differ in subtle and hard to detect ways.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	

["Software design", "Identify the key classes required to simplify and reduce the code early.",
`Pause to find the key abstractions and classes a project requires (such as helper classes to parse input or produce output, specialised queueing classes, entities, control interfaces) early will save time by reducing the amount of code a project requires.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

/* ============================================== */	
/* TEST DRIVEN DEVELOPMENT */
/* ============================================== */	
	
["Test driven development (TDD)", "Avoid over-specifying tests.",
`Are you testing the expected behaviour or are you really testing an implementation detail? How a service under test chooses to use its dependencies (such as methods it calls on them) is technically an implementation detail.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Test driven development (TDD)", "The first step to killing bugs successfully is being able to reliably catch them.",
`To reliably fix a bug you must first write a failing test that defines it, then go fix the code so that test passes.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Test driven development (TDD)", "Every great change is built up of many much smaller changes.",
`Plan your big change so you can achieve it with many small increments, testing each increment as you go. In a well planned big change it should be possible to keep the system fully tested and running at all times.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Test driven development (TDD)", "Every good plan should fail first – then succeed – then fail again.",
`(1) Do not write production code until you have a failing test for it.
(2) Do not write more test than is sufficient to fail (i.e. Once you have got it failing stop writing the test)
(3) Do not write more production code than is sufficient to get the test to pass.
(4) Repeat the preceding steps and keep repeating them until you are sure you have covered all the cases that your production code could be subjected to.
(5) Move on to a new method or area of code and write the first failing test for that one.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Test driven development (TDD)", "You must KNOW it works now and will always work.",
`Aim for full coverage and assert all the functionality of all your different code-paths behave as expected. You might somehow know or trust that your code works now, but if the next person to work on that code is the worst coder you have ever known, are you sure your test suite is adequate?`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Test driven development (TDD)", "Quality assurance should always find nothing.",
`Do not pass code to quality assurance (QA or your test department) you feel might be faulty, because you are not certain about it. QA is only there to catch defects in code you are certain worked properly, it is not a safety-net to catch every defect a substandard product might have. 

If QA does find something the root cause of how it got that close to being released should be examined.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Test driven development (TDD)", "Add tests around third-party libraries.",
`As you are experimenting with third-party libraries write tests around them which prove and document the assumptions you are making about them.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Test driven development (TDD)", "Tests deserve be cleanly coded too.",
`Tests are less likely to be checked they still work correctly after being altered. For this reason  tests need love and it is important to refactor them so they remain clean and simple and easy to extend. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Test driven development (TDD)", "Each test should cover a single concept.",
`It is important tests are precise about what failed and that every aspect of the code is tested. However writing a separate test for every single field or property may make test code excessively long and difficult to maintain.  A compromise is to ensure each test covers one concept of the method being tested.

Example of concepts are (1) The inputs were used properly (2) The objects state changed as expected (3) The object interacted with other object expected (4) The return value is correct.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
["Test driven development (TDD)", "Tests should be easy to run.",
`Ideally this should be as simple as clicking a button within your IDE, or running a script or executable from the command-line. If multiple steps are required then these should be automated so re-running a suite of tests after each new build is a straightforward task.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	

/* ============================================== */	
/* ANTI PATTERNS */
/* ============================================== */

["Anti-patterns", "Avoid using a service locator.",
`The service locator pattern decouples classes from how their dependencies are obtained by providing those dependencies via a locator service. This is widely considered an anti-pattern because the class is being dishonest about its dependencies are (by hiding them). It makes finding all the users of a dependency difficult and defers the construction or resolving of dependencies to an arbitrary point in run-time.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Anti-patterns", "Avoid constrained construction.",
`Constrained construction is where classes that implement an interface must have default constructors, a specific constructor, or use a configuration file within their constructors. It permits instances to be created on demand by specifying the type <a target="_blank" href="http://blog.ploeh.dk/2011/04/27/Providerisnotapattern/">(the provider pattern)</a>, but also ties implementations of that interface to have that specific construction (and possibly dependencies). It also ties clients of the interface to construct all concrete implementations in a given way.`
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Anti-patterns", "Avoid bastard injection of default parameters",
`Generally default parameters are bad and work against dependency injection. However if you must provide default parameters (or overloaded constructors that provide them) ensure the default value is a local default (i.e. a class within the current domain without foreign dependencies). Also be aware that a different package or assembly (in languages such as C#) will continue to use the older default value until it gets recompiled.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Anti-patterns", "Avoid leaky abstractions.",
`If an interface gets shared between domains or separate areas of code be very careful where all the interfaces and classes that it refers to get defined.

If we extract an interface from a concrete type, should the input parameters or the return types referenced in the interface be concrete, or defined within the same assembly as the concrete implementation, then the abstraction is leaky to some extent. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Anti-patterns", "Avoid blocking singletons.",
`A singleton that only permits one client to use it at once can inadvertently cause deadlocks. Blocking singletons should be avoided unless they either represent a limited resource or one that is very costly to construct.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Anti-patterns", "Avoid short lived objects.",
`Poltergeists are short-lived objects or classes used to seed or invoke other classes through temporary associations. They usually hold no state and have methods named 'start...'. If possible move their functionality inside the evoked class, possibly using inheritance or a mix-in.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Anti-patterns", "Avoid the lava-flow.",
`Lava-flow is dead or forgotten code that remains in the code-base that is not well understood and makes the solution rigid and hard to follow. Take the time to remove old code or refactor it so that it is documented, more easy to follow and less brittle.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Anti-patterns", "Avoid the golden hammer.",
`When you have a golden hammer every problem looks like a nail. A golden hammer is where a familiar technology or concept is being used excessively or inappropriately.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Anti-patterns", "Avoid the anchor.",
`An anchor is costly software or hardware that serves little purpose on a project and burdens it with a heavy dependency or vendor lock-in; Anchors are frequently chosen for political reasons rather than practical reasons.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	

/* ============================================== */	
/* CODE SMELLS */
/* ============================================== */
	
["Code-smells", "Avoid multi-stage initialisation.",
`Multi-stage initialisation is where a constructor only partially makes a new instance ready for use, further property setting or method calls (say to an initialise()) need to follow to make the instance operational. This makes the code unclear and can lead to instances being in a zombie state.

Similarly if changing the state of an object from one valid state to another requires multiple calls, consider if it would be better to combine that action on the object into a single call.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Avoid long comments.",
`If a method (especially a low-level method) or class requires a lengthy comment then this is a sign it is doing to much and breaking the single-responsibility-principle.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Can you describe it without using 'if' 'and' 'when' 'or' 'but' and 'then'?",
`If you need these words such as these to describe a method or class then it is a sign it is breaking the single-responsibility-principle and doing more than one thing.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Avoid vertical complexity in a file.",
`Files should read nicely with high-level methods and entry-points arranged at the top following on to low-level detail at the bottom. Associated functions or methods should appear in close proximity.

If achieving a nice ordering of methods becomes difficult, then consider factoring some of them out into separate files or classes.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Avoid methods in excess of one hundred lines.",
`This is a sign the method has multiple responsibilities or are mixes several levels of abstraction. Ideally methods should not exceed twenty lines.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Avoid methods that have been split into sections.",
`If method contains several distinct areas separated by empty lines it is a sign that method has multiple responsibilities. Consider factoring these distinct areas out into separate methods at either a higher or lower level.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Avoid high cyclomatic complexity ('if soup').",
`Stop and count the number of 'if', 'else', 'for', 'while' and 'try-catch' blocks contained within each method; this should always be kept low. Making sure this is low when you commit ensures that complexity remains bearable if others decide to shovel in a few more blocks. 

Avoid nesting code-blocks within a single method more than three deep, in order to keep the method's complexity within safely manageable levels.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Avoid down-casting.",
`Casting a base class or interface to one a derived class (or specific implementation) is breaking the abstraction model. If you need to do this it is usually a sign you are using the abstraction incorrectly or the abstraction needs refactoring or should be eliminated (maybe it is too big).`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Watch out for data-clumps.",
`Data-clumps are groups of variables that are passes around together, that could be better represented as a class. Identifying and naming a data-clump may help improve your domain model.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Watch out for rifts forming within classes.",
`Rifts are groupings in the linkage between a classes methods and its fields. It is a sign a new and separate class is trying to emerge when group of fields appearing to only get used by a subset of the available methods. Similarly you may find groups of closely related fields that interact quite a lot with each other but little with others outside that group. In such cases consider if it would be beneficial to use inheritance or a mix-in to split the class, separating out the distinct functionalities.  `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Avoid excessive returns.",
`Methods should return no more information than what the caller needed or asked for. Also question what the caller intends to do with that  information, it may be work that your class should doing.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Avoid duplicate abstractions.",
`Duplicate abstractions share names, methods or implementations and should be avoided. If they lay within different domains this may be acceptable as it allows the domains to change independently.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Avoid using a database for interprocess communication.",
`It is inappropriate to use a data-base as a message queue, either use some other lightweight mechanism that is sufficient for the job or a proper messaging system that is more appropriate.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Watch out for multiple similar switch statements.",
`If you have multiple similar switch statements (or similar if – else if clusters) it is a sign you should really be using a factory or abstract factory (containing a single switch statement) to return a polymorphic type that implements all the required behaviour. Alternatively you should be using the 'state' design pattern to implement the behaviour of multiple states more cleanly.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Avoid functions or methods with side-effects - they are lies.",
`If a method has side-effects (performs a state change  unrelated to its main functionality) then both its name and its design promise to do one thing – but it lies, it does other stuff as well.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Watch for methods such as 'calculate..', '..manager','..controller', 'calculate..', 'display..'.",
`These kind of names indicate the class or method might contain large chunks of functional programming – Is it a stove-pipe solution that limits adaptiveness? Can the responsibility for doing some of the work can be pushed out into domain classes or other supporting classes?`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Avoid large call graphs pulling in data from multiple objects.",
`Methods and classes containing large call graphs that pull data out from a wide range of objects to be worked on hint there may be excessive functional programming or a stove-pipe solution. Can you refactor so the domain classes hold some responsibility and do some of that work upon the data they encapsulate. In other words move toward a more object orientated design.

Would it be cleaner if the functionality spread throughout several types be concentrated into simpler controller/orchestrator that then handles and leverages domain objects in an object orientated way?`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Avoid using or manipulating some other objects data.",
`This is data-envy and in many cases can be avoided by asking the object to do something for you instead. If your pulling data out of an object look what work you are using it for and is it more appropriate to refactor so the object also does that work for you.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Avoid lots of constructors.",
`This indicates construction of the class is getting complex and should be factored out using the builder pattern or factory method pattern. It is also a sign it may be possible be separated the class out into several smaller classes that have clear and distinct functionalities.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Code-smells", "Interface names which are not verbs.",
`Interfaces should be used where there are (or are likely to be) multiple concrete implementations. Interface names based on verbs such as drivable or steerable imply they implement some behaviour where the implementation may vary, whereas interface names based on nouns (such as irequest) may indicate that the interface is simply an unnecessary abstraction of a simple data-type. If the property getters and setters vary between implementations then the interface may still be justified.

Interfaces in front of concrete implementations that provide either no or the same implementation logic represent an unnecessary abstraction.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
/* ============================================== */	
/* CLEAN CODE TIPS */
/* ============================================== */
	
["Clean-code tips", "Separate  if-else blocks from whatever follows.",
`Add a space or two after every if-else block, it makes the code easier to follow and reduces the risk the  contents of the else block will get combined with what follows accidentally in the future. In some cases it may be appropriate to separate the if-else block out completely from the surrounding code by putting it in a separate method. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Clean-code tips", "Suffix every asynchronous method names with \"Async\".",
`Adding Async to the end of the method name makes the code more expressive and reduces the likelihood the method will be called without using (await) accidentally.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Clean-code tips", "Keep methods and fields encapsulated wherever possible.",
`Generally start by keeping methods and fields as encapsulated as possible moving them toward protected/public only once a need for extension requires it. It is easier to make something more public later than it is to make something more private (especially if it exists in published interfaces). Public fields and methods should always be well documented, unless their use is obvious and self-documenting.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Clean-code tips", "The cleanest path has one way in and one way out.",
`Avoid multiple return points or using break or continue statements. Where using them would make the code clearer or more expressive, use them within small localised methods.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Clean-code tips", "A good comment do not make up for bad code.",
`Good reasons for comments are explanations of intent, clarification, a warning (i.e. side-effects of the call) or mentioning something important that the code cannot adequately say for itself.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Clean-code tips", "Comments and log messages must never be allowed to mislead.",
`They should always be kept up-to-date and truthful and close to the code they refer to (ideally on the same line). Take care especially when cutting-and-pasting code to ensure that the comments and log messages contained within that code remain correct in their new context.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Clean-code tips", "Comments should always express something the code cannot.",
`Comments should not contain redundant information, something unrelated to the code, or details that can be made explicit through renaming or refactoring the code.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
	
["Clean-code tips", "Local variables should live like pop-stars.",
`They should be expressive, turning up in style just before a gig (their first use) then either get into something and leave, or die not long after their performance.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Deliberately stateless classes should delegate to static methods internally.",
`Where a class is deliberately made stateless (to make it thread-safe for example), if it delegates all its procedures to internal static methods it will resist state being added. The class then acts mainly as a namespace to encompass a bunch of related methods.

Consider adding a comment to the class and associated interfaces explaining why it is deliberately stateless.

Instances of the stateless class should still be used when composing the service or application, rather than calling the static methods directly. This permits substitution, testability and extensibility.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Avoid mentioning the underlying collection or class in names.",
`Doing this helps encourage people to think about what the collection represents to the domain - rather than being distracted by implementation details. Also the underlying collection might get changed. For example 'accounts' trumps 'accountList' and 'accountsById' trumps 'accountIdDict'.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Avoid names that look frightfully similar.",
`Class, function, argument and variable names should be both meaningful and distinct. If it is likely the compiler would let such a mistake compile (e.g. if they both represent the same type) then doubly so. Where the word you intended to use has already been taken in the code-base and represents something  different, an online thesaurus is a handy way find a new name that is suitable.

Balance this with the desire to use consistent naming where the meaning is the same.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Seek consistent naming.",
`Within a domain look at the existing code and use the same phrases nouns and verbs when they mean the same thing. If it is a new thing ensure there is consensus in your team as to what it should be called.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Avoid output arguments.",
`Passing an object reference as an argument to a function for the purpose of receiving information from that method is unclear and therefore counter-productive. It is better to return a class or tuple containing all the required output information, or obtain the required information through multiple method calls instead.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "The reader should not have to mentally map names.",
`Names such as 'POPI_by_DOB' requires the reader to do work to understand the meaning. Use full domain specific names where practicable and only use single letter variable names when it is more expressive, their scope is very small and they are used close to where they are declared.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Make names easily searchable.",
`Single character names or numbers are difficult to find in a body of text. Also avoid using short ubiquitous class names (such as Request, Response, Result or Query) which make searching the code-base for all occurrences of that class difficult (whereas ShoppingCartQuery is likely to be unique)

Balance this with the desire to avoid encoding redundant or unnecessary information into names, for example: MySuperApplicationQueryUsingTheCustomersUsername.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Static factory methods can be more expressive than using overridden constructors.",
`Complex.FromReal(x) is more expressive than: new Complex(x). Enforce static factory method use by making the corresponding constructor private, if serialization allows.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Code should aspire to be pure.",
`It should be free of politics, opinions, distracting humour, comic references, showing off and any unnecessary dependencies. None-code such as domain concepts, design documentation, development history and variable mappings should be documented in an appropriate place away from the code itself.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Seek out and use language idioms that are well known.",
`Each language has a most efficient and best way to achieve something, which is usually the way most commonly used. Research if there is an appropriate idiom <a target="_blank" href="https://www.programming-idioms.org">www.programming-idioms.org</a> or cookbook recipe for what you need before you cooking up your own method for it.

Balance this with the desire to avoid esoteric features of a language that are not widely understood.`
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "If your code is worth writing - then its worth spelling it correctly too.",
`Typos and spelling mistakes make life harder for others who use the correct spelling and makes the code hard to read. Some team member is likely to have to waste their time putting it right for you.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Complex systems that are clean are accompanied with diagrams.",
`Many people are visual learners and will not immediately perceive the simplicity and beauty by looking at the code alone. A picture paints a thousand words so make things clear and quick to understand by providing easy-to-find event-diagrams, call-graphs, UML or pseudo-code.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Avoid mixing levels of abstraction in functions, methods or classes.",
`It should either be high-level calling other high-or-medium-level functions, or if it is a low-level function itself then it should deal only with performing low-level detail. Drawing the call-graph or writing pseudo-code before coding the methods might help you avoid mixing levels of abstraction. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Avoid writing code that you will have to ignore later.",
`While reading about some functionality, the code you find yourself having to skip over or ignore represents a distraction and a dark corner in which bugs can hide. Avoid writing it in the first place wherever possible, such as by factoring out unnecessary heavily duplicated code.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Encode parameter names into the method name.",
`Methods such as: 	
AssertDateEqualsExpected(date, expected)
Tells people reading the caller what the method expects and hints about the correct ordering, making your code easier to use and read. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "",
`Methods such as:	
fullThrottle()
Tells readers of the call precisely what state on the object is being changed, and what it is changing to.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Values in the code-base should use troll counting – be either zero, one or many.",
`Avoid using special numbers in the code-base. It is likely to be suitably obvious why a zero and one gets used - but any specific 'many' value should to be represented as a well named constant, a configuration value or be a data-driven value (pulled from a database or similar).`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "(C#) Do not use var where you cannot easily determine the type being represented.",
`The var keyword is abstract class on steroids - able to represent anything, so use it carefully. Avoid using it where it is difficult to determine the type that it represents from the surrounding code.  `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Complex is better than complicated.",
`Where appropriate hide many steps in an easy-to-use method or behind an interface. This means the code is more complex (you now need to know what the interface means) but less complicated because you do not need to wade through and interpret many many steps.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Everything should live in a logical place.",
`There should be a place for everything and everything in its place, in other words code should be tidy. Good code is only good if it is where you expect it to be (and only there); if it is not then refactor the code get it there.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Clean code should be shiny.",
`It should not contain debris, dead-code, code that has been commented out, code that is only used run once, unnecessary comments or other historical artefacts.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Code should be honest about what it does and its dependencies.",
`Code that depends on a service locator (or sometimes static classes) is not being honest about what it needs to function properly. If its methods have unanticipated side-effects it is not being honest about what it does. Classes that uses 'new' have a dependency that not apparent in its constructor.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Aim for names that are easy to read, type and pronounce.",
`Names should be composed in such a way that they are easily read by the  humans that will support that code. It is an added benefit if they can be pronounced since this makes talking about code details easier.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Make data-structures easy to read.",
`Handling data-structures is our bread and butter, so they should have a logical structure and be easy to read and locate the appropriate fields in. Group fields that are closely associated to each other together and name them appropriately to make that grouping explicit. Data-structures should possess sufficient hierarchy  to make them easy to navigate and read, but no more than that.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],	
	
	
["Clean-code tips", "Prefer non-static methods over static methods.",
`
Non-static methods can be extended using polymorphism, whereas static methods cannot. That said static methods may be the appropriate choice if either the class is deliberately stateless or the method is not closely associated to a specific instance or the data it works on (such as Math.max)`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],

	
/* ============================================== */	
/* THE CODING PROCESS */
/* ============================================== */

["The coding process", "Honour your fellow developers.",
`Honour your fellow developers.
When using another's code do not forget to pay them credit when discussing the code or in your commit message. If another developer produced an elegant solution do not immediately go and kludge it with a horrible extension, copy it, give reference to it then kludge the copy respecting both their code and the single-responsibility-principle as much as possible.

I would also like to honour Robert C Martin whose excellent book (Clean Code) was inspiration for this work as well as the Zen of Python by Tim Peters.  <a target="_blank" href="http://wiki.c2.com/?PatternIndex">The pattern index</a> and <a target="_blank" href="https://en.wikipedia.org/wiki/Software_design_pattern">Wikipedia</a> and the GameDeveloper magazine.`
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Creating and observing your data should be easy.",
`If you have to hand-craft complex data twice, or have to search for complex data by hand twice, creating a script or tool to do so likely to pay-off in the long-run, as well as being something useful for your support/ops department to use.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Update from source control before working on a story.",
`If you are working with others updating from source-control first reduces the risk your working on stale code and putting stale code back into the code-base accidentally when you eventually commit. If your working on a long running story  periodically take the time to merge in work done by others into your work, otherwise you will end up having to do a risky and difficult 'mother of all merges' when you finally come to integrate your feature.  `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Do no harm to quality or structure.",
`Do no harm to the quality and structure of your products. Be professional and accountable. You have a responsibility to leave the code-base (and environment) your working on cleaner than you found it. You also have a responsibility to ensure you do not introduce bugs or brittleness - which you can achieve by adding suitable tests and having your code reviewed.  `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Know when you are in a swamp.",
`If progress is unexpectedly slow it could be you are in a swamp. It may be better to examine the code your working on with a view to refactoring or clean any messes before proceeding. Bulldozing onward without hesitation through a swamp rarely ends in having produced something less swampy.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "When your in a hole stop digging.",
`Some technical pathways are either impossible or represent the long way round. Have the courage to abandon an idea that is failing and switch to an alternative, or get requirements adjusted when  you know they cannot be successfully achieved in their current form.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "If you want to ensure your code is flexible, then flex it.",
`You should never be afraid to make changes to code or refactor it periodically – If you are afraid it is a sign the tests are lacking, or the structure has become excessively complex. Alternatively it is a sign the code is not sufficiently expressive about how it operates or is not sufficiently documented.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "You have a responsibility to know your domain.",
`It is a programmers responsibility to understand the domain (i.e. the model and business logic) of the solution they are programming sufficiently well and ask the product owner about specific details. Bugs frequently arise from false assumptions that programmers made about the domain.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Defend your objectives.",
`Saying  'yes', 'no' or 'I'll try' to someone just to avoid conflict when you know that is misleading or compromises the objectives you have been set, means your acting unprofessionally. Hold true to the truth, present facts not opinions and always be as open and honest as possible. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Do not compromise testing to achieve a target.",
`Achieving a goal by skipping tests or assurance is misleading and unprofessional. Effective testing actually means you can maintain and change code faster and safer. Time spent finding a bug is always far less profitable than time spent writing a test that ensures that bug can never happen.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Commit to what you say.",
`If you say it then you should commit to it, mean it and do it, as doing otherwise is unprofessional unclear. The following phrases are the sound of an un-commitment being made to something... 'I hope...',' I should...', 'I wish...', 'I'll try', ' Lets all …' and 'We should...'`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Follow the open-closed principle socially.",
`Be open to advice and feedback that extends or modifies what you do to be a better developer. Be open to lending a hand to others in your company. Be open to progress and alternative ways to achieve something. Be closed to company bickering, rudeness and negativity.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Focus first on making your business logic clear and elegant.",
`Persistence, caching and other environment and implementation details and concerns should be done after the business logic and entities have been written and tested.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Big-design-up-front (BDUF) can inhibit agility.",
`Attempting to produce a complete big-design-up-front can result in analysis paralysis where time is lost waiting for questions to be answered before commencing work. It can also lead to an over-engineered solution that compromises the separation of concerns. 

Instead seek a simple design with a neatly decoupled architecture that permits radical changes to be introduced as required in an economically feasible manner.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Always test all your hypothesis.",
`When it comes to finding what is the best implementation in terms of performance, design, third-party-software or deciding if something is needed... write some simple tests that backup your hypothesis with facts and also improve your understanding of the problem-space.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Running a legacy system alongside its replacement means doing twice the work.",
`Maintaining a legacy system as well as running live replacement system will involve twice the work of running a single system alone. This is expensive and can delay full completion of the replacement. Always plan dual-running and any associated data-migration with care.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Maintainable efficient code beats faster complex code.",
`Do testing to check if optimisations are required and will be effective before adding them. Code should be only as complex as needed to be sufficiently efficient.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Produce one simple way to create the environment.",
`Ideally this should be a single build script that creates the entire environment that the project needs to run, for example all the databases, web server instances and user groups. Ensure this script is maintained and is sufficiently documented. A less ideal method is having a clearly documented set of instructions to follow that is complete enough to ensure everyone will have the same environment and ensures no guessing is required.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Consider the network properly.",
`Is there a way to ensure firewalls get configured correctly and is there sufficient bandwidth in the network to support all your services. Consider what will happen if part of the network is lost or if it becomes congested. Are there other services using your network that are periodically greedy?`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Devise a cunning rollback plan.",
`If you are releasing code devise your rollback plan carefully ahead of time rather than having to make it up should the release fail. The roll-back and data-restoration of data needs careful consideration where there are multiple inter-related services, in-flight requests or data-replication. If you have groups of roll-back actions get these automated to make roll-backs easier and swifter.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "If you can start something, then be damn certain you can stop it.",
`Learn from the sorcerers apprentice and ensure all activities you can start also implement stop functionality.

Throttling or dynamically configuring live services may also be worth considering. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["The coding process", "Remember to commit little and often.",
`A series of small commits that have well considered commit messages is far easier to follow than one huge commit which alters dozens of files and has a more general commit message. Small commits makes loosing work less likely and gives colleagues visibility of your progress. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	
	
/* ============================================== */	
/* CONCURRENCY */
/* ============================================== */
	
["Concurrency", "Concurrency is a single responsibility.",
`Dealing with concurrency is difficult to grasp and complex so separate it from other code, making it easier to debug. Test it by trying to force failures by adding hooks that permit testing, instrumentation or injection of jiggling delays. Also adjust any tuning you may have (such as time-outs) in order to discover how tuning effects stability.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Decouple your what from your when.",
`Code that deals with threads, tasks, locking and blocking are primarily concerned with WHEN something happens. WHAT happens is a separate concern that should be dealt with separately.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Make critical sections as small and simple as possible.",
`Critical sections are areas of code covered by a lock so that only one thread may enter (for example synchronized blocks or methods). To maximise performance these critical sections should be as small as possible and mainly operate on shared data or state. Consider indicating to other threads what activities are occurring using flags or messaging instead.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Limit access to shared data.",
`Minimise the amount of data and locks shared between threads. Minimise the number of times a thread needs to coordinate its activities with others.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Reveal what a lock protects and restrict its visibility.",
`Restrict visibility of locks, it is bad practice to lock 'this' or 'string' because it will make the lock accessible to others. Document what each lock protects and minimise the code under the lock.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Work with copies of shared data.",
`Consider working with copies of shared data (or immutable collections) then merge your changes back into the shared data in a thread-safe way afterwards (for example by using a critical section or single thread). This technique allows you to minimise critical sections and reduces the risk of concurrency bugs.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "First make your service work properly - then make it work concurrently.",
`Ensure your business logic fully works before attempting to add concurrency. Time can be lost hunting a 'concurrency bug' that turns out to be a simple business logic bug. If your service misbehaves separate debugging your concurrency logic from debugging your business logic. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Know your concurrency toolbox.",
`Know what concurrency classes and patterns are available, such as... Dining-philosophers problem, reader writer problem, client-based locking, server-based locking, adapted server (locking by an independent service), pessimistic locking, optimistic locking, atomic integer, executors, renterant lock, semaphore, countdown latch, concurrent dictionary, producer-consumer (queues), immutable collection classes (set, list, dictionary,stack, queue), blocking collection classes, async collection classes, asyncproducerconsumerqueue and buffer block.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Know your execution model.",
`Understand the details of how your application executes such as bound resources (e.g. database connections), mutual exclusions, thread starvations, deadlock, live-lock (resonance while retrying), retry strategies and timeout strategies.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Beware of changes occurring between synchronized method calls.",
`A caller may call one synchronized method (critical section) then call another expecting nothing to have changed. However another thread in the meantime has the opportunity to interfere.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Avoid async void (C#).",
`Avoid creating async void methods in C#. Exceptions are thrown within async void methods the exception are silently lost. Instead return a (Task) object which allows the exception to propagate back to the caller.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Know the five demons necessary for summoning sudden deadlock.",
`(1) Multiple threads or coupled processes.
(2) No pre-emption – A thread cannot ask another to release resources.
(3) Mutual exclusion – A Resource that is limited or cannot be used by multiple threads.
(4) Lock&Wait – A thread will not release a resource until it has all it needs and has completed.
(5) Circular wait – Thread#1 has a resource thread#2 needs, thread#2 has a resource thread#1 needs.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Those who use threads with sequential instructions have many paths to follow.",
`Given (N) sequential instructions in each thread and (T) threads, the number of potential code-paths (P) is likely to be astronomical. P = (TN)!/((N!) to the power of T). Using the minimum number of threads, trying to make sequential instructions unrelated to other threads and considered use locks and critical sections lowers the number of potential code-paths and makes code more reliable.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Avoid mutual exclusion.",
`Use or develop (thread-safe) resources that permit simultaneous use. Ensure you have more resources than threads. Check all the resources your thread needs to do its work are available before allowing it to acquire any of them.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Avoid lock-and-wait.",
`Check all resources your thread needs are available. Alternatively release all resources and retry if one is blocked.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Break pre-emption.",
`Allow one thread to request resources from another if that thread is also blocked. Doing this will reduce the number of threads that have to an abandon-and-retry.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Seek one omnipotent order of acquisition if you wish to avoid deadlock.",
`Avoid circular wait by always locking resources in a given order rather than their order of use. If possible encapsulate the order into a class with that single responsibility. If the required resources are selected by ID, lock these in a consistent manner by ordering them by ID first (or possibly by sort by name).`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "When using asynchronous code use async all the way.",
`When using async avoid having multiple wait (or wait for a result) points in your code, ideally these should only occur at a few places at the very top-level of your call stack. This avoids deadlocking when you have limited threads or only one UI thread  .This can happen easily as the code below demonstrates. 

// (2) After executing the delay the line below waits for the context (thread) to become available, 
//      but that thread will never become available, because it is held by (1).
async task WaitAsync(){await Task.Delay(one_second)};

Task myjob = WaitAsync();
// (1) The line below synchronously waits for the job to complete, 
//       but in doing so captures the the single UI thread (It should really have been.. await myjob)
myjob.wait();`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "If your not care about getting any result back then tell your task that.",
`When using async if you are awaiting a fire-or-forget task (such as a UI or background task) where you do not require it to return to the current context with a result (or exception) many languages permit you to inform the task, improving performance and reducing deadlocking. In C# this can be done  using (.ConfigureAwait(false))`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Async tasks should be normal in size.",
`If the task is very short running then a lot of processor time is lost to task scheduling. However if the task is very long running then the thread-pool cannot dynamically adjust well.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Seek simple concurrency and consider alternatives to concurrency.",
`Complexity increases very rapidly with the number of inter-related threads or processes involved in achieving some work. Always aim to minimise your inter-related threads or processes. Consider using sharding or <a target="_blank" href="https://en.wikipedia.org/wiki/Reactor_pattern">the reactor pattern</a> to avoid concurrency in your processing logic.`
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, HIDE_IMAGE],		

	
["Concurrency", "Be aware of the concurrency patterns available.",
`<a target="_blank" href="https://en.wikipedia.org/wiki/Concurrency_pattern">Concurrency patterns</a>

<a target="_blank" href="https://en.wikipedia.org/wiki/Reactor_pattern">The reactor pattern</a>
<a target="_blank" href="https://www.dre.vanderbilt.edu/~schmidt/PDF/HS-HA.pdf">Half-Sync/Half-Async</a>
<a target="_blank" href="https://en.wikipedia.org/wiki/Leaders/followers_pattern">Leader-followers</a>
<a target="_blank" href="https://en.wikipedia.org/wiki/Actor_model">Actor model</a>
<a target="_blank" href="https://en.wikipedia.org/wiki/Active_object">Active object</a>
<a target="_blank" href="https://en.wikipedia.org/wiki/Monitor_(synchronization)">Monitor objects (locks and semaphores)</a>
`
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, HIDE_IMAGE],		

/* ============================================== */	
/* SECURITY */
/* ============================================== */
	
	
["Security", "HTML Injection – URLs.",
`Ensure the URLs in pages cannot be manipulated by a well crafted query. If you create a URL in a page (e.g. HTML forms that get post-ed back to the current pages URL in order to get processed) ensure user input cannot be used to manipulate that URL. For example in PHP do not use $_SERVER['PHP_SELF'] directly, you must sanitize it by stripping out % characters and pass it through htmlentities() as well as do a final check that it is still going to your site!`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

],


["Security", "HTML Injection – Javascript.",
`Ensure user input (for example input query parameters) cannot be used to inject javascript into your response page. Otherwise an evil user can craft a URL for your site then send that evil url to someone they want to attack (say by email). When the victim then uses that URL to visit your site, your site will run that evil javascript on their machine.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

],


["Security", "SQL Injection.",
`Applications should use stored procedures to create, update, read and delete material on a database, so user content cannot be crafted to run arbitrary SQL. If user content is used to create SQL queries it should be escaped so it contains no special SQL characters (such as ') or html characters such as (< or >)`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

],


["Security", "Avoid using standard ports.",
`Make it harder for evil hackers by using non standard ports, For example do not use port 22 for SSH. Also consider using tools such as netfilter to rate-limit incoming connections.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

],


["Security", "Limit access to SSH, VNC,RDP and database ports.",
`Use firewalls to ensure access to the ports of vital services is only permitted from your businesses address ranges. Consider blocking all inbound traffic from the IP ranges of countries known for launching cyberattacks.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

],


["Security", "Use public key based logins to access servers rather than passwords.",
`For example use public-private key pairs generated with ssh-keygen.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

],


["Security", "Disable root user login (Debian/Ubuntu).",
`Linux:
Beforehand ensure ops users are able to login in as root by adding them to the sudo group (sudo adduser someone sudo) then alter sshd_config to...

PermitRootLogin no
ChallengeResponseAuthentication no
PasswordAuthentication no
UsePAM no 
IgnoreRhosts yes `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

],


["Security", "Limit users ssh access.",
`Linux:
alter sshd_config to include
AllowUsers someone1 someone2`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

],


["Security", "Check what services you have installed and remove ones that are not needed.",

`Check what ports you have open and why. Consider stopping those services so they do not add to your attack footprint.
Linux:

/sbin/chkconfig --list |grep '3:on'
chkconfig serviceName off

netstat -tulpn
ss -tulpn

Windows:

netstat
-a Displays all connections and listening ports
-b Displays the executable involved in creating each connection or listening port.
-n Displays addresses and port numbers in numerical form.
-o Displays the owning process ID associated with each connection.
`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

],


["Security", "Check what packages you have installed and remove ones you do not need.",
`Linux:
sudo apt-get remove package-name`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

],


["Security", "Check accounts for empty passwords.",
`Linux:
cat /etc/shadow | awk -F: '($2==""){print $1}'`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

],


["Security", "One service - once system.",
`Use virtualisation so each service runs in its own VM or container. So if a service is successfully exploited there is a limit to the services that are affected.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

],


["Security", "Keep your operating system and applications up-to-date.",
`Linux:
sudo apt-get update
sudo apt-get upgrade
sudo apt-get dist-upgrade 
`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

],


["Security", "Set up file and folder permissions to prevent unauthorised access.",
`Also consider setting up separate disc or file partitions for different services.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

],


["Security", "Ensure web server services run under a user account that has limited access privileges.",
`So that if someone does manage to be able to run some malicious code via your web server it has to run under an account that has limited privileges on services such as databases, limiting the damage.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		

],


/* ============================================== */	
/* GAME DEVELOPMENT */
/* ============================================== */


["Game development", "Do not be unrealistic.",
`Creating assets and coding features always takes more time than you think. Avoid wasting time designing and working on assets and features you do not realistically have the time to complete properly.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Game development", "Have a great narrative.",
`There should be a good story that guides the user through the product. Great gameplay and features are not sufficient by themselves. Plan for this upfront.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Game development", "Make it look interesting.",
`Do not make your product look like everything else out there, it should look and feel unique. This could be simply a case of using a different font, theme or skinning.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Game development", "Care what your users think.",
`Provide monitoring and metrics so you can observe user behaviour and provide channels so users can feedback to you and allow you to improve the product. Creating a product is the act of preparing to make money – Maintaining the product and providing a service is the act of actually making money.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Game development", "Do not butt your release date directly up against the end of your private beta.",
`You are going to need time to fix all those unexpected problems your private beta users feed back to you, otherwise what was the point in having a private beta!`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Game development", "Focus on the three C s - Camera, Character and Controls.",
`The user interface and movements should always look fluid and be fun. Complete these before moving on to things that depend on them, such as perfecting the level design.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Game development", "Find the fun through testing.",
`Its better to have a well tuned product with good game-play and functionality than it is to have one with lots of bells and whistles... Its not done until its fun! `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Game development", "Define the concept before writing the code.",
`Defining a game's concept first helps stimulate creativity. It also allows you to focus, identify areas of risk and prioritise the high value features of the product.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Game development", "Focus on what matters.",
`Focus on the few key area that users say would make the product better. Do attempt to make every little bit of a product better without justification.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Game development", "Consider designing your AI characters so they support co-op gameplay.",
`Consider designing AI enemies to support multiple adversary, so it makes co-op gameplay possible.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Game development", "The user-interface should be separated from controlling the game.",
`Create an interface that controls the game. The user-interface should then attach to this. This abstraction makes developing multiplayer easier, recording a user, moving to other platforms and may aid testing and debugging.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Game development", "Do not use Facebook for your account management.",
`It is likely to put people off if you do not provide alternatives. Always explain how their Facebook will be used.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Game development", "Playing games is a really social thing so plan to be social.",
`Releasing a game successfully involves marketing, publicity, social media promotions and responding to the comments and wishes of your gaming community. This is going to take resources and time so consider how doing this will fit into your work-flow.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],

/* ============================================== */	
/* PHILOSOPHY */
/* ============================================== */

["Philosophy", "Bugs frequently appear in paste.",
`When cut-and-paste is necessary always take the time to ensure fields, argument names, method names, behaviour and comments of pasted code are correct for the location they get pasted into. Ensure that tests for the pasted code get written or ported across as well, do not assume it will just work.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Gathering data is only half the problem.",
`Gathering data is half the problem, interpreting it and making it useful to humans is the other half.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Be open to asking for help, be open to being asked for help.",
`Nobody can be an expert in everything - Asking someone's help is likely to save you both time in the long run. Discover who happens to be good with certain technologies, and if you happen to be good with something take the time to tell others.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "To know what is wrong with a service or concept, deliver that concept early.",
`Prototypes and pre-releases inspire innovation. They also allow users to express their desires and identify the functionality defects that annoy them the most. Learn through iteration.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Youthful flexibility comes from removing old inflexible components.",
`Remove obsolete components and update active components. Legacy code should be reviewed every three to five years and updated to use new architectures and services and meet new expectations and requirements, either through extensive refactoring or through replacement.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Working code is not sufficient – it must also be expressive.",
`Commercial maintained code will be read at least ten times more often than it is written. Working code is not sufficient, it must also be expressive, easy to read and easily testable.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Seek the balance between conflicting ideals.",
`Embrace standards and good practices but also be pragmatic. A clean code-base has no place for damaging pointless dogmatism. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "All code costs but pseudo-code costs far less.",
`If it is a significant component it is likely you will throw away or massively refactor your first implementation before or during its first code review. Therefore it is better for that first implementation fails early and cheaply at the design stage, than later after writing many lines of code. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Love code in all its forms.",
`SQL-functions, Build-scripts, Infrastructure-code, Configuration-code, Test-code and Tools all deserve to be written in a clean way and follow SOLID principles.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Difficult problems require disengagement.",
`Intelligence, inspiration and creativity are fleeting states of mind that are impossible to attain when you are highly-focused or tired. Take a break or share the problem with others then let the brilliance of your creative subconscious deal with it and come up with an innovative solution. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "If you are going to be fail or be late then do it early.",
`Be honest and announce that you are going to miss a deadline or goal as soon as you become aware that this is likely to happen. This gives others opportunity to adapt to the new situation.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Haste, Apathy, Ignorance, Limited imagination, Sloth, Complexity and Pride.",
`These are the root causes of anti-patterns... Which one caused that last code-smell?`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Delivering something sufficient in time beats delivering something exceptional too late.",
`There are usually good business or financial reasons for deadlines being in place that should be respected. Sometimes though delivering something late or never is better than delivering something faulty, risky or appalling right now.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "In the face of ambiguity, refuse the temptation to guess.",
`Research or keep asking questions and push back until the correct way to proceed is known. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Errors should never pass silently.",
`Unless they are explicitly silenced.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Practicality beats purity.",
`Patterns, clean-coding, object orientated principles and using language idioms are all worthy goals but do should not come at the expense of simple and practical. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Special cases aren't special enough to break the rules.",
`If you break a rule it does not really exist anymore, so then everyone will break it.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Plan for easy maintenance.",
`Three quarters of commercial software development is maintenance, so being readable is as vital as being functional. Consider what tools may be needed to maintain and support your services.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Worthwhile code must periodically evolve.",
`A good system must be comprised of modular components so that it can be rebuilt from scratch every seven years. This is a necessity for commercial code so it can advance and  incorporate new features, changes in technology and increases in customer expectations.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Quality is the result of a million selfless acts of care.",
`Making small changes to improve an application will eventually result in a quality product.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Coding is much like surgery.",
`You do not have to take the time to do it cleanly, scientifically and in a modern manner... But if you aim to be successful and professional at it then you should.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Bad code and grumbling acts as a permission giver.",
`Grumbling about code or sticking bad code into a code-base tempts others to also add to the mess and let it grow. A professional coder should care passionately about all the code they touch regardless of its current state and where possible pass that love of the code on to others. `
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "First solve the problem, then write the code.",
`Otherwise you will write code that does not solve the problem.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Intelligent behaviour without control is worse than simple behaviour.",
`It is important to understand and have control over intelligent systems.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Remember Brooks law.",
`Adding more manpower to a late software project makes it even later.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "If you just did something really good, write a script to do it again.",
`Really good things deserve to be documented, shared and automated.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Any fool can write code a computer understands.",
`A good programmer writes code that humans understand.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Which will cost you most - CPU hours or a developer hours.",
`If using a difficult service, component or language is necessary to improve performance, this will increase your developer hours and is likely to have an ongoing cost. How does that developer cost compare to the cost of increasing the CPU hours available on your infrastructure.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "If you cannot explain it to a customer – then it is a bad idea.",
``
	,"", ESCAPE_HTML, HIDE_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "It is better to train people and risk they will leave,  than do nothing and risk they will stay.",
``
	,"", ESCAPE_HTML, HIDE_CONTENT, HIDE_IMAGE],		
],


["Philosophy", "Code is something developers discover, not something developers own.",
`All arrangements of realizable processes existed as a possibility in the universe before it was written down by a developer. Knowledge of discovered code should be shared so if that developer leaves, dies or goes on holiday so it does not become lost to mankind.`
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


/* ============================================== */	
/* CREATIONAL PATTERNS */
/* ============================================== */


["Creational patterns", "Abstract factory pattern.",
`<a target="_blank" href="https://en.wikipedia.org/wiki/Abstract_factory_pattern">Abstract factory pattern</a> provides an interface for creating families of related or dependent objects without specifying their concrete classes. For example an abstract factory could be used to generate the components of a user interface. If you could then choose to use a &apos;windows&apos; or &apos;mac&apos; abstract factory to get a web interface with a given style.`
	,"designpatternsimage\abstract_factory_uml.JPG", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Creational patterns", "Builder pattern.",
`<a target="_blank" href="https://en.wikipedia.org/wiki/Builder_pattern">Builder pattern</a> separates the construction of a complex object from the object being created, allowing the same construction process to create various representations or objects. Builders may hold state allowing creation to be done incrementally and the choosing of some elements of the complex object to be deferred until the appropriate time. The builder pattern also allows different build strategies to be swapped in or out.`
	,"designpatternsimage\builder_uml.JPG", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],			
],


["Creational patterns", "Factory method pattern.",
`<a target="_blank" href="https://en.wikipedia.org/wiki/Factory_method_pattern">Factory method pattern</a> Defines the interface for creating an object (which provides some service usually via an interface) while the factory retains control over selecting which class gets instantiated. Factories are often used alongside dependency injection so that clients are able to construct objects when required, but the dependency injection framework still controls what is instantiated. `
	,"designpatternsimage\factory_uml.JPG", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],			
],


["Creational patterns", "Lazy initialization pattern.",
`<a target="_blank" href="https://en.wikipedia.org/wiki/Lazy_initialization">Lazy initialization pattern</a> delays an expensive process, such as creation of an object, until when is first needed.`
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Creational patterns", "Object pool pattern.",
`<a target="_blank" href="https://en.wikipedia.org/wiki/Object_pool_pattern">Object pool pattern</a> avoids expensive acquisition and release of resources by recycling objects that are no longer in use. Object pools can also be used to control access to a limited resource, such as database connections. A common example of an object pool is a thread-pool.`
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],


["Creational patterns", "Prototype pattern.",
`<a target="_blank" href="https://en.wikipedia.org/wiki/Prototype_pattern">Prototype pattern</a> provides a new object by copying an existing example. This allows specifying which object to create to be deferred to runtime and may provide a performance increase in situations where cloning is simple but construction is complex.`
	,"designpatternsimage\prototype_uml.JPG", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Creational patterns", "Singleton pattern.",
`<a target="_blank" href="https://en.wikipedia.org/wiki/Singleton_pattern">Singleton pattern</a> Ensures a class has only one instance, and provide a global point of access to it. See also the similar <a target="_blank" href="https://en.wikipedia.org/wiki/Multiton_pattern">Multiton pattern</a>`
	,"designpatternsimage\singleton_uml.JPG", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Creational patterns", "Revealing module pattern.",
`<a target="_blank" href="https://weblogs.asp.net/dwahlin/techniques-strategies-and-patterns-for-structuring-javascript-code-revealing-module-pattern">Revealing module pattern</a> is a javascript pattern allowing you to only expose the functions you want to.`
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, HIDE_IMAGE],		
],

/* ============================================== */	
/* STRUCTURAL PATTERNS */
/* ============================================== */


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],


["Structural patterns", "",
``
	,"", CONTENT_IS_RAW_HTML, SHOW_CONTENT, SHOW_IMAGE],		
],




]
