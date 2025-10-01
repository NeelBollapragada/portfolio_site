import fridgeTrackerApp1 from "../images/fridge-tracker-app-1.png";
import fridgeTrackerApp2 from "../images/fridge-tracker-app-2.png";
import fridgeTrackerApp3 from "../images/fridge-tracker-app-3.png";
import fridgeTrackerApp4 from "../images/fridge-tracker-app-4.png";
import movieApp1 from "../images/movie-app-1.png";
import movieApp2 from "../images/movie-app-2.png";
import movieApp3 from "../images/movie-app-3.png";
import movieApp4 from "../images/movie-app-4.png";
import jobsPortal1 from "../images/jobs-portal-1.png";
import jobsPortal2 from "../images/jobs-portal-2.png";
import jobsPortal3 from "../images/jobs-portal-3.png";
import notesApp1 from "../images/notes-app-1.png";
import notesApp2 from "../images/notes-app-2.png";
import dinoGame from "../images/dino-game.png";
import weatherApp from "../images/weather-app.png";
import imageSearchApp from "../images/image-search.png";
import gmailClone from "../images/gmail-clone.png";
import netflixClone1 from "../images/netflix-clone-1.png";
import netflixClone2 from "../images/netflix-clone-2.png";
import netflixClone3 from "../images/netflix-clone-3.png";
import netflixClone4 from "../images/netflix-clone-4.png";

export const projects = [
  {
    slug: "fridge-tracker-app",
    title: "Fridge Tracker App",
    repo: "https://github.com/NeelBollapragada/FridgeTrackerApp",
    overview:
      "A mobile application to track fridge items, built to reduce food waste, help shared household kitchen management and streamline cooking tasks with AI assistance. I developed this app to make it easier to manage my fridge as well as keep track of expiry dates. The goal was to be able to add items to a virtual fridge to keep of track of quantity, expiry etc. I also wanted to make it easy for multiple users to share a fridge in a household. I added extra useful features such as a shopping list and an AI cooking assistant.",
    stack: {
      "React Native + Expo": "used for UI frontend and app routing.",
      SQLite:
        "used for offline local storage of fridge, shopping list, AI chats, and food database.",
      Appwrite:
        "used for authentication and backend syncing - used to keep household and fridge data.",
      ExpressJS: "used for backend functions, deployed on Render.",
      "Open Food Facts API": "for food search and initial food database.",
      "Mistral (via OpenRouter)": "for AI recipe chats.",
      "NativeWind, Native-Paper": "used for styling.",
      NetInfo:
        "Fridge CRUD actions work locally offline first then on cloud if online using @react-native-community/netinfo.",
    },
    usage: [
      "Launch the app",
      "*(Optional)* Register with a unique username if you want cloud sync and household features",
      "Search items to add to your fridge",
      "Tap on a item to edit quantity, unit or expiry",
      "Use the shopping list tab to make a shopping list and for easy check of items already in fridge",
      "Use the AI-assistant for recipes, and cooking ideas",
      "Create or join a household to share your fridge with others",
      "Switch between personal and household fridge views",
      "Works offline, internet is needed for AI chats, cloud sync and household features",
    ],
    future: [
      "Add local notifications for items nearing expiry",
      "Complete barcode scanning functionality",
      "Add calender of daily food logs with nutritional breakdown",
      "Add internationalization for multilingual support",
    ],
    custom: {
      h3: "App Features",
      ul: [
        "Offline-first design for basic functionality without internet",
        "Search functionality to add food from local database or Open Food Facts",
        "AI recipe assistant included with 5 prompts per day",
        "Household collaboration mode for shared fridges",
        "Shopping list with fridge checking feature",
        "Add custom food items which are saved for future reuse",
        "Quantity and expiry tracking for every fridge item",
        "Cloud sync to keep data across devices and used for household collaboration",
      ],
      h3: "Gallery",
      gallery: [
        fridgeTrackerApp1,
        fridgeTrackerApp2,
        fridgeTrackerApp3,
        fridgeTrackerApp4,
      ],
    },
  },
  {
    slug: "cpp-compiler",
    title: "C++ Compiler",
    repo: "https://github.com/NeelBollapragada/Compiler",
    overview:
      "Developed a C++ compiler from scratch using C++. The compiler takes input of simple C code and goes through all stages of compilation - from lexical analysis to x86 code generation. The compiler supports basic constructs such as variables, arithmetic operations, conditionals, loops, and functions. I designed and implemented a pipeline, creating a lexer, parser to abstract syntax tree, semantic analysis and then code generation. I built this project to gain a better understanding of how compilers work under the hood and to improve my C++ skills.",
    stack: {
      "C++": "used for all stages of the compiler.",
      C: "used for testing and input code samples.",
    },
    usage: [
      "Clone the github repo `git clone http://github.com/yourusername/Compiler.git`",
      "Navigate to the project directory `cd Compiler`",
      "Compile the code using `g++ src/main.cpp src/lexer.cpp src/parser.cpp -o compiler && ./compiler src/test.c`",
      "View lexed tokens, AST, semantic analysis output and generated x86 code in terminal",
    ],
    future: [
      "Add support for different data types such as float, char",
      "Implement more complex constructs such as arrays, structs",
      "Improve error handling and reporting",
    ],
    custom: {
      h3: "The Pipeline",
      p: 'The compiler goes through the following stages: tokenization, parsing to AST, semantic analysis, and code generation. Each stage builds on the previous one to transform the input C code. Tokenization and preprocessing break the code into meaningful words called tokens, for example `x = 5 + 3` tokenizes to `IDENTIFIER(x)`, `ASSIGNMENT_OP(=)`, `INTEGER_LITERAL(5)`, `ARITHMETIC_OP(+)`, `INTEGER_LITERAL(3)`. Parsing looks at the sequence of tokens and tries to understand the grammar, how tokens combine to form valid statements and expressions. The parser builds an Abstract Syntax Tree (AST) to represent the hierarchical structure of the code. Semantic analysis checks if the code "makes sense" - it uses symbol tables to verify variable and function declarations and ensures types are used correctly. Finally the compiler takes the AST and generates assembly code (x86 in this case) that can be assembled and run on a machine.',
    },
  },
  {
    slug: "movie-app",
    title: "Movie App",
    repo: "https://github.com/NeelBollapragada/Movie-App",
    overview:
      "A mobile application to browse and search movies. The app allows users to view trending movies, search for specific titles, and view detailed information about each movie including ratings, synopsis, and cast. Registered users can also create a watchlist to save movies or mark then as favourites. I built this app to practice React Native and get familiar with Appwrite for backend services. All movie data is fetched from the [The Movie Database (TMDB)](https://www.themoviedb.org/).",
    stack: {
      "React Native + Expo": "used for UI frontend and app routing.",
      Appwrite: "used for authentication, storing user movie and search data.",
      "TMDB API": "used for fetching all movie data.",
      "NativeWind, Native-Paper": "used for styling.",
    },
    usage: [
      "Launch the app and register using email and password",
      "Browse latest and trending movies",
      "Search movies via search page",
      "Click on movie to see movie information",
      "Save and like movies",
      "Browse through saved movies and liked movies on saved and profile pages",
    ],
    future: [
      "Add notifications for new movie updates",
      "Add user specific recommended movies using user movie data from saved, liked and search movies",
      "Add avatar for user profiles",
    ],
    custom: {
      h3: "App Features",
      ul: [
        "Search functionality to search movie by title",
        "Trending movies list showing most popular movies based off user search",
        "Saved and liked movies feature with a saved page to display saved movies",
        "Movie info displayed with one click",
        "Cloud sync and authentication to keep user movie data across devices",
      ],
      h3: "Gallery",
      gallery: [movieApp1, movieApp2, movieApp3, movieApp4],
    },
  },
  {
    slug: "jobs-portal",
    title: "Jobs Portal",
    repo: "https://github.com/NeelBollapragada/JobsApp",
    overview:
      "A simple web application to view, add, edit and delete job listings. I built this app to learn ReactJS. The app fetches job data from a mock JSON server and displays it in a clean, user friendly interface.",
    stack: {
      ReactJS: "used for UI frontend and app routing.",
      "JSON Server":
        "used as a mock backend for job data - uses `jobs.json` file.",
      TailWindCSS: "used for styling.",
    },
    usage: [
      "Launch JSON server using `npm run server`",
      "In a separate terminal launch app using `npm run dev`",
      "Click on localhost link",
      "Browse, add, edit, or remove jobs",
    ],
    future: [
      "Run backend on a remote server such as Firebase, rather than locally hosted",
      "Add user authentication to differentiate between employers and potential employees",
    ],
    custom: {
      h3: "Gallery",
      gallery: [jobsPortal1, jobsPortal2, jobsPortal3],
    },
  },
  {
    slug: "notes-app",
    title: "Notes App",
    repo: "https://github.com/NeelBollapragada/NotesApp",
    overview:
      "A very simple mobile notes app with user authentication and cloud storage. I built this app to learn React Native and get familiar with Appwrite for backend services.",
    stack: {
      "React Native + Expo": "used for UI frontend and app routing.",
      Appwrite: "used for authentication and storing user notes.",
    },
    usage: [
      "Launch the app and register using email and password",
      "View and add notes",
      "Edit or delete notes",
    ],
    future: [
      "Add collaborative notes between users",
      "Add password protection for notes",
    ],
    custom: {
      h3: "Gallery",
      gallery: [notesApp1, notesApp2],
    },
  },
  {
    slug: "chrome-dino-game",
    title: "Chrome Dino Game",
    repo: "https://github.com/NeelBollapragada/Chrome-Dino-Game",
    overview:
      "A simple recreation of the Google Chrome Dino Game using HTML, CSS and JavaScript. I built this project for fun just to mess around with JavaScript and practice DOM manipulation.",
    stack: {
      HTML: "",
      CSS: "",
      JavaScript: "",
    },
    usage: [
      "Clone the repo `git clone https://github.com/NeelBollapragada/Chrome-Dino-Game.git`",
      "Open `index.html` in a web browser",
      "Press Enter to start the game and spacebar to jump",
    ],
    custom: {
      h3: "Gallery",
      gallery: [dinoGame],
    },
  },
  {
    slug: "weather-app",
    title: "Weather App",
    repo: "https://github.com/NeelBollapragada/JS-Weather-App",
    overview:
      "A simple weather app that fetches weather data from [OpenWeather API](https://openweathermap.org/). I built this project to practice working with APIs and asynchronous JavaScript. The app allows users to search for any city and view the current weather conditions including temperature, humidity, and wind speed. There isn't even a dedicated `.js` file since there is only around 60 lines of script.",
    usage: [
      "Clone the repo `git clone https://github.com/NeelBollapragada/JS-Weather-App.git`",
      "Open `index.html` in a web browser",
      "Search for any city to view current weather",
    ],
    custom: {
      h3: "Gallery",
      gallery: [weatherApp],
    },
  },
  {
    slug: "image-search-app",
    title: "Image Search App",
    repo: "https://github.com/NeelBollapragada/Image-Search-App",
    overview:
      "A simple image search app that fetches images from the [Unsplash API](https://unsplash.com). I built this project to practice working with APIs and asynchronous JavaScript. The app allows users to search for any keyword and view a grid of related images.",
    stack: {
      HTML: "",
      CSS: "",
      JavaScript: "",
    },
    usage: [
      "Clone the repo `git clone https://github.com/NeelBollapragada/Image-Search-App.git`",
      "Open `index.html` in a web browser",
      "Search for any keyword to view related images",
    ],
    custom: {
      h3: "Gallery",
      gallery: [imageSearchApp],
    },
  },
  {
    slug: "gmail-clone",
    title: "Gmail Clone",
    repo: "https://github.com/NeelBollapragada/GmailClone",
    overview:
      "A web application used to mimic the gmail email service. The app allows to users to send, receive, and read emails. There is also a filtering system to view starred, important, and sent emails, as well as a search functionality. I built this app to practice ReactJS and get familiar with Firebase for backend services.",
    stack: {
      "ReactJS + Redux": "used for UI frontend and app state management.",
      Firebase: "used for authentication and storing user emails.",
      "Material UI": "used for styling and icons.",
    },
    usage: [
      "Launch the app using `npm run dev`",
      "Click on localhost link",
      "Register or login using Google authentication",
      "Browse or search emails",
      "Send, star, or mark emails as important",
      "Check sent, starred, and important emails in their respective folders",
    ],
    future: [
      "Add functionality for other folders such as drafts, spam, and trash",
      "Add email attachments",
      "Hide API keys and sensitive information using environment variables",
    ],
    custom: {
      h3: "App Features",
      ul: [
        "Search functionality to search emails by subject, message, and sender/receiver if checking sent/inbox folder",
        "Multiple functional folders including, inbox, starred, sent, important",
        "Star and mark is important feature with starred and important folders",
        "Email content shown with one click",
        "Google authentication and cloud storage using Firebase",
      ],
      h3: "Gallery",
      gallery: [gmailClone],
    },
  },
  {
    slug: "netflix-clone",
    title: "Netflix Clone",
    repo: "https://github.com/NeelBollapragada/NetflixClone",
    overview:
      "A web application used to model the Netflix streaming service - without viewing the actual movies/TV shows. The app allows users to browse trending movies, view movies by category, as well as use different subscriptions plans using Stripe. I built this app to practice ReactJS and learn how to integrate Stripe payments with Firebase for backend services.",
    stack: {
      "ReactJS + Redux": "used for UI frontend and app state management.",
      Firebase: "used for authentication and storing user subscription data.",
      Stripe: "used for handling user payments and subscriptions.",
      "Material UI": "used for styling and icons.",
      "TMDB API": "used for fetching all movie data.",
    },
    usage: [
      "Launch the app using `npm run dev`",
      "Click on localhost link",
      "Register or login using email and password",
      "Browse movies by category or trending",
      "Subscribe to a plan using Stripe payments",
      "View and manage subscription in profile page",
    ],
    future: [
      "Add search movie functionality",
      "Display movie details on click",
      "Hide API keys and sensitive information using environment variables",
    ],
    custom: {
      h3: "App Features",
      ul: [
        "Display movies in several categories, such as Action, Horror, Comedy etc.",
        "Authentication provided by Firebase",
        "Stripe payment used for user subscriptions",
      ],
      h3: "Gallery",
      gallery: [netflixClone1, netflixClone2, netflixClone3, netflixClone4],
    },
  },
];
