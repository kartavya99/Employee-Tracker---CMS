
USE employee_db;

INSERT INTO department (department_name)
VALUES  ("Sales"),
        ("Customer Service"),
        ("IT"),
        ("Finance"),
        ("Admin");

INSERT INTO role_table (title, salary, department_id)
VALUES  ("Sales Manager", "120000", 1),
        ("Sales Rep", 80000, 1),
        ("CS Manager", 100000, 2),
        ("CSR", 55000, 2),
        ("IT Manager", 140000, 3),
        ("Junior Web Dev, 75000", 3),
        ("Senior Wer Dev", 90000, 3),
        ("Network Enginner", 90000, 3),
        ("Finance Manager", 120000, 4),
        ("Financial accountant", 70000, 4),
        ("Admin Manager", 90000, 5),
        ("Office Support", 55000, 5);

INSERT INTO employee (last_name, first_name, role_id, manager_id)
VALUES  ("Smith", "John", 1, NULL),
        ("Hopkins", "Jenny", 2, NULL),
        ("Phillips", "Andrew", 3, NULL),
        ("Perry", "Helen", 4, NULL),
        ("Rich", "Emma", 5, NULL),
        ("Mary", "Jane", 6, 2),
        ("Doe", "Jane", 7, 3),
        ("Hanks", "Tom", 8, 4),
        ("Parker", "Peter", 9, 1),
        ("Smith", "Molly", 10, 5);


