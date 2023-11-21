DROP TABLE IF EXISTS "TASKS";

CREATE TABLE "TASKS"(
    id serial primary key NOT NULL,
    task_name character varying(20) NOT NULL,
    detail character varying(200) NULL,
    state int default 1 NOT NULL,
    date date,
    time time
);

INSERT INTO "TASKS"(TASK_NAME, DETAIL, STATE, DATE, TIME)
VALUES
    ('tarea 2', 'Es el tarea 2', 1, '2023/11/01', '13:00:00'),
    ('tarea 1', 'Es el tarea 1', 1, '2023/11/01', '13:00:00'),
    ('tarea 3', 'Es el tarea 3', 1, '2023/11/01', '13:00:00'),
    ('tarea 4', 'Es el tarea 4', 1, '2023/11/01', '13:00:00'),
    ('tarea 5', 'Es el tarea 5', 1, '2023/11/01', '13:00:00'),
    ('tarea 6', 'Es el tarea 6', 1, '2023/11/01', '13:00:00');

SELECT * FROM "TASKS"