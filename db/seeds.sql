
USE employee_db;

INSERT INTO department (department_name)
VALUES  ("Sales"),
        ("Customer Service"),
        ("IT"),
        ("Finance"),
        ("Admin");

INSERT INTO role_table (title, salary, department_id)
VALUES  ("Sales Manager", 120000, 1),
        ("CS Manager", 100000, 2),
        ("IT Manager", 140000, 3),
        ("Finance Manager", 120000, 4),
        ("Admin Manager", 90000, 5);
        

INSERT INTO employee (last_name, first_name, role_id, manager_id)
VALUES  ("Smith", "John", 1, NULL),
        ("Phillips", "Andrew", 2, NULL),
        ("Rich", "Emma", 3, NULL),
        ("Doe", "Jane", 4, NULL),
        ("Hanks", "Tom", 5, NULL);


