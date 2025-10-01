import fridgeTrackerApp1 from "../images/fridge-tracker-app-1.png";
import fridgeTrackerApp2 from "../images/fridge-tracker-app-2.png";
import fridgeTrackerApp3 from "../images/fridge-tracker-app-3.png";
import fridgeTrackerApp4 from "../images/fridge-tracker-app-4.png";

export const projects = [
  {
    slug: "fridge-tracker-app",
    title: "Fridge Tracker App",
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
];
