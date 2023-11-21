
Desarrollador:
    Darlin Estrada Patiño

Aplicacion de gestion de tareas

    La aplicacion permite crear, listar, consultar y borrar tareas.
    Los datos se almacenan en una base de datos en postgres que se puede montar con 
    la imagen de docker que se adjunta en los archivos.
    De las tareas se almacenas los datos del (task_name)nombre de la tarea, (detail)detalles de la tarea, (state) estado de la tarea (1: Activa, 2: Pendiente, 3: Terminada), (date) fecha de la tarea y (time) hora de la tarea. 

Comandos para ejecutar la aplicacion:
    npm install
    docker-compose up --build
    npm run dev / npm start

Los datos de conexion a la base de datos de Postgres estan en el archivo.
    src\config\db_config.js

Para probar la ejecucion se utiliza Postman. Se muestran algunos ejemplos:

    GET
        http://localhost:3000/tasks/all    -> consulta todas las tareas
        http://localhost:3000/tasks/2      -> consulta tarea id 2

    POST
        http://localhost:3000/tasks

        Body - raw - Json
        {
            "task_name": "tarea 7",
            "detail": "Es el tarea 7",
            "state": 1,
            "date": "2023-11-01",
            "time": "13:00:00"
        }

    PACTH
        http://localhost:3000/tasks/3       -> actualiza tarea id 3

        Body - raw - Json
        {
            "task_name": "tarea 3 actualizada",
            "detail": "Es el tarea 3 actualizada",
            "state": 2,
            "date": "2023-11-02",
            "time": "14:00:00"
        }

    DELETE
        http://localhost:3000/tasks/7       -> elimina tarea id 7


- comandos para la creacion del proyecto
    git init
    npm init -y
    npm install express --save
    npm install nodemon
    npm install pg //postgresql
    npm i -S sequelize dotenv pg pg-hstore

- Docker
    docker-compose up --build
    docker-compose down