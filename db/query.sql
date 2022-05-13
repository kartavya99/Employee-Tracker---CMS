SELECT 
role_table.id AS role_id,
role_table.title AS title,
role_table.salary AS salary,
department.department_name AS department_name
FROM role_table
JOIN department
ON role_table.department_id = department.id;
