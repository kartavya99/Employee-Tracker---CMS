
-- created new database under employye_db
USE DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

-- created table under department 
DROP TABLE IF EXISTS department;
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR (30) NOT NULL
);

-- created table for the role which includes id, title, salary and department id
DROP TABLE IF EXISTS role_table;
CREATE TABLE role_table (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    -- seeting department_id as FK and connecting it by referecing it to id coloum of departmetn table
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

-- created table for the employee details including First and last name, role id, manager id.
DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    -- setting role_id as FK and connecting it by referecing it to id coloum of role_table table
    FOREIGN KEY(role_id)
    REFERENCES role_table(id)
    ON DELETE SET NULL,
    -- employee_title VARCHAR(30) NOT NULL,
    -- FOREIGN KEY (employee_title)
    -- REFERENCES role_table(title),
    manager_id INT,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
    
);

