# `quizly-app`
This is the README file for the Quiz App, a semester project of database subject developed by using React.js, Node.js, and MySQL database. The Quiz App allows users to participate in a quiz by answering multiple-choice questions and stores the user's information and score in a MySQL database.

# `Project Structure`
The project consists of two main components: the frontend and the backend.

# `Frontend:`
The frontend is developed using React.js, a popular JavaScript library for building user interfaces. The frontend provides a user-friendly interface for users to interact with the Quiz App. The following are the main components of the frontend:
`Login Page:` This page prompts the user to enter their name and email. It provides an input field for each and a login button to proceed to the quiz.
`Quiz Page:` This page displays three multiple-choice questions for the user to answer. The user can select one option for each question.
`Score Page:` After submitting the answers, the score page is displayed, showing the user's final score in the quiz.

 # `Backend:`
The backend of the Quiz App is developed using Node.js, a JavaScript runtime environment, and utilizes the MySQL database for storing user data. The backend handles the following tasks:
Database Connection: The backend establishes a connection with the MySQL database.
User Registration: When a user logs in with their name and email, the backend stores the user's information in the database.
Quiz Submission: After the user completes the quiz, the backend calculates the user's score and saves it in the database along with their name and email.

# `Prerequisites:`
To run the Quiz App on your local machine, ensure that you have the following software installed:
`Node.js: https://nodejs.org`
`MySQL: https://www.mysql.com`

# `Usage:`
1. Go to `localhost:3000` in your browser
2. Enter your name and email and click `Login`
3. Answer the three simple questions.
4. Your score will be displayed

# `Setup Instructions:`
To set up the Quiz App project, follow these steps:

# `Navigate to the project directory in the terminal run following commands:`
`cd Quiz-Frontend
npm install
npm start`

# `Configure the backend:`
Create a MySQL database for the project.
Add details of the your database (user, password and database name) in server.js file.
Open new terminal in the main project directory(Database Project):
Start the backend server run following command:
node server.js

Open your web browser and access the Quiz App at http://localhost:3000.

# `Database Schema:`
The MySQL database schema for the Quiz App consists of a single table named quiz-info. This table stores the user's information and quiz score. The table schema is as follows:

# `MySQL Query:`
`CREATE TABLE quiz-info (
    user_name VARCHAR(25) NOT NULL,
    email VARCHAR(50) NOT NULL,
    quiz_score INT NOT NULL
);`

# `Conclusion:`
The Quiz App is a semester project that demonstrates the use of React.js, Node.js, and MySQL database. It provides a simple and interactive quiz experience for users, allowing them to enter their name and email, answer multiple-choice questions, and view their final score. The project also integrates with a MySQL database to store user information and scores for future reference.
