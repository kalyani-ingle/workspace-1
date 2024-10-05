require("./db/connection");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const apiRoutes = require('./Routes/apiRoutes')


app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

// const bodyParser = require("body-parser");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const path =  require('path');

// const { graphqlHTTP } = require("express-graphql");
// const { addPath } = require("graphql/jsutils/Path");
// const { buildSchema } = require("graphql");

// const allowedOrigins = process.env.FRONTEND_URL.split(',').map(origin => origin.trim());

// CORS options
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true
// };


const corsOptions = {
  origin: '*',
  methods: ['POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
};


// Add a root route
// app.get("/", (req, res) => {
//   res.send(
//     "Welcome to the GraphQL Server. Please use the /graphql endpoint to submit queries and mutations."
//   );
// });


app.get("/", (req, res) => {
  res.json({ message: 'Its working!' });
});

// const schema = buildSchema(`
//   type User {
//     _id: ID!
//     email: String!
//     token: String
//   }
  
//   type AuthData {
//     userId: ID!
//     token: String!
//     expirationTime: Int!
//   }
    
//   input UserInput {
//     email: String!
//     password: String!
//   }

//   type RootQuery {
//     login(email: String!, password: String!): AuthData!
//     user: User
//   }

//   type RootMutation {
//     createUser(userInput: UserInput!): User
//     logout: Boolean!
//   }
  
//   schema {
//     query: RootQuery
//     mutation: RootMutation
//   }
// `);

// const root = {
//   login: async ({ email, password }, context) => {
//     try {
//       if (!(email && password)) {
//         throw new Error("Email and password are required");
//       }

//       // Check if user is registered
//       let user = await User.findOne({ email });

//       if (!user) {
//         throw new Error("User is not registered.");
//       }

//       // Compare password
//       let isPasswordValid = await bcrypt.compare(password, user.password);

//       if (!isPasswordValid) {
//         throw new Error("Invalid credentials");
//       }

//       const token = jwt.sign(
//         { id: user._id, email },
//         process.env.JWT_SECRET_KEY,
//         {
//           expiresIn: "2h",
//         }
//       );

//       // If you need to set cookies, you can do so on the context.res object
//       if (context && context.res) {
//         const options = {
//           expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
//           httpOnly: true,
//           path: "/",
//           secure: process.env.NODE_ENV === "production",
//           sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
//         };
//         context.res.cookie("token", token, options);
//       }

//       return {
//         userId: user._id,
//         token: token,
//         expirationTime: Math.floor(Date.now() / 1000) + 7200 // 2 hours from now
//       };
//     } catch (error) {
//       throw error;
//     }
//   },

//   user: () => {
//     return {
//       _id: "user123",
//       email: "sample@example.com",
//     };
//   },

//   createUser: async ({ userInput }) => {
//     try {
//       const { email, password } = userInput;

//       // Check if email and password are provided
//       if (!(email && password)) {
//         throw new Error("Email and password are required");
//       }

//       // Check if user with the email exists
//       let existingUser = await User.findOne({ email });

//       if (existingUser) {
//         throw new Error("User already exists");
//       }

//       // Encrypt the password
//       const hashPassword = await bcrypt.hash(password, 10);

//       // Create and save the user in db
//       const user = new User({
//         email,
//         password: hashPassword,
//       });

//       const result = await user.save();

//       // Generate JWT token
//       const token = jwt.sign(
//         { id: result._id, email },
//         process.env.JWT_SECRET_KEY,
//         { expiresIn: "2h" }
//       );

//       // Return user data (excluding password) and token
//       return {
//         _id: result.id,
//         email: result.email,
//         token,
//       };
//     } catch (err) {
//       console.error("Error creating user:", err);
//       throw err;
//     }
//   },
  
//   logout: () => {
//     return true;
//   },
// };

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );

app.listen(4000, () => {
  console.log(`Server running at http://localhost:4000`);
});
