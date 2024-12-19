Please answer the following questions.

1. What is your name?
   Kenneth Chen

2. How long did you work on this project?
   1 and 30 mins.
3. What is the most challenging part of the project?
   The most challenging part of the project was finding out that you need to place static routes before dynamic routes.
   For example based on the outline of the requirements I created the dynamic routes before the static like creating a task using ID, which is a dynamic route, and when I tried to list all the completed and pending tasks, the tasks wouldnt appear. When I was debugging this I checked the database to ensure that the tasks were sorted correctly, which wasnt a problem. I eventually figured out that when the /task/:id is defined before the /tasks/completed, any requests to the /tasks/completed will be interpreted as a request to /tasks/:id, which means that the id is equaled to "completed".

4. What did you learn from this project?
   In this project I learned how to build a CRUD application using Node.js, Express.js, and Sequelize. I gained experiences in setting up RESTful API endpoints, organizing routes in Express.js to prevent conflicts and also debug.

5. What would you like to add or improve in this project?
   For this project I would like to add User Authentication, a Front-end Interface, Task Prioritization, Due dates and reminders,and maybe search/filter.

6. What is your feedback on this project?
   The project provides a solid foundation for building a CRUD application using Node.js, Express.js, and Sequelize. It effectively demonstrates RESTful API development, route handling, database interactions, and error handling.

7. What is your suggestion for this project?
   If there was a front-end interface then this project should implement search/filter because it shows that you can grab task out of the database as well.
8. Could you mark which of the following requirements you have completed?

Create a Todo App todo the following requirements:

- [✅] It should be possible to create a task.
- [✅] It should be possible to read a task.
- [✅] It should be possible to mark a task as completed.
- [✅] It should be possible to update the title of task.
- [✅] It should be possible to delete a task.
- [✅] It should be possible to list all tasks.
- [✅] It should be possible to list all completed tasks.
- [✅] It should be possible to list all pending tasks.

Once competed, you can submit a pull request to the original repository.

Ensure:

- [✅] The code is clean and readable.
- [✅] The code is well-structured.
- [✅] The code is well-commented.
- [✅] Only the required files are committed.
- [✅] Answer the questions in the pull request template.
