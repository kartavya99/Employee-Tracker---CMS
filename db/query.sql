SELECT 
role_table.id AS Role_id,
role_table.title AS Job_Title,
role_table.salary AS Salary,
department.department_name AS Department_name
    FROM role_table
    JOIN department
        ON role_table.department_id = department.id;

SELECT
employee.id AS Employee_id,
employee.first_name AS First_name,
employee.last_name AS Last_name,
role_table.title AS Job_Title,
role_table.salary AS Salary,
department.department_name AS Department_name,
employee.first_name AS Manager_First_name,
employee.last_name AS Manager_First_name
    FROM employee
    JOIN role_table ON employee.role_id = role_table.id
    JOIN department ON employee.department_id = department.id;
    LEFT OUTER JOIN employee ON employee.manager_id = employee.id;