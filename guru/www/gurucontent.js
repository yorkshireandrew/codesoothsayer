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
]