USE employeeDB;

INSERT INTO department (name)
VALUES  ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES  ("Lead Engineer", 150000, 1),
        ("Software Engineer", 120000, 1),
        ("Accountant", 80000, 2),
        ("Lawyer", 190000, 3),
        ("Legal Team Lead", 200000, 3),
        ("Salesperson", 75000, 4),
        ("Sales Lead", 90000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe", 7, 3),
        ("Mike", "Chan", 6, 1),
        ("Ashley", "Rodriguez", 1, null),
        ("Kevin", "Tupik", 2, 3),
        ("Dare", "Moe", 1, null),
        ("Malia", "Brown", 3, null),
        ("Sarah", "Lourd", 5, null),
        ("Tom", "Allen", 4, 7),
        ("Christian", "Eckenrode", 1, 2);