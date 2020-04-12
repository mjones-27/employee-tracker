USE employeeDB;

INSERT INTO departments (name)
VALUES  ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Lead Engineer", 150000, 1),
        ("Software Engineer", 120000, 1),
        ("Accountant", 80000, 2),
        ("Lawyer", 190000, 3),
        ("Legal Team Lead", 200000, 3),
        ("Salesperson", 75000, 4),
        ("Sales Lead", 90000, 4);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
INSERT INTO employees (first_name, last_name, role_id)
VALUES  ("John", "Doe", 7),
        ("Mike", "Chan", 6 ),
        ("Ashley", "Rodriguez", 1),
        ("Kevin", "Tupik", 2 ),
        ("Dare", "Moe", 1 ),
        ("Malia", "Brown", 3),
        ("Sarah", "Lourd", 5),
        ("Tom", "Allen", 4 ),
        ("Christian", "Eckenrode", 1 );

SELECT * FROM employees;
SELECT * FROM departments;
SELECT * FROM roles;