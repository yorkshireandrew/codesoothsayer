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
	
/* SOFTWARE DESIGN */
	
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
	/*
["Software design", "",
``
	,"", ESCAPE_HTML, SHOW_CONTENT, HIDE_IMAGE],
	*/



]
