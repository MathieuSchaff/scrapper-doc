---
sidebar_position: 1
---

# Database

You will learn how to launch and run the postgre db
## Installation:


Move to the backend folder:

```shell
cd backend
```


## What is in the container docker?

The container includes a postgres database and an admin panel called adminer.

Open a terminal or command prompt, navigate to your project's directory, and run the following command:
```shell
docker-compose up
```
or
```shell
docker compose up
```
if it does not work,  it probably will prompt you the error. In many case you'll need an elevation of priviledge.
Try sudo, or just add your user to the docker group:

```shell
sudo usermod -aG docker $USER 
```

## docker-compose.yml

The `docker-compose.yml` file defines the services required for your application using Docker Compose. It specifies the containers, volumes, ports, and environment variables needed to run the services.

### Example:

```yaml
version: "3"
services:
  db:
    image: postgres
    restart: always
    volumes:
      - ./data/db:/var/lib/postgresql/data
    ports:
      - 5432:5432
    environment:
      - POSTGRES_DB=testDB
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres

  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080
```
### Mounting:

he volume mounting syntax mentioned (./data/db:/var/lib/postgresql/data) should work on both Windows and macOS systems,
as well as Linux. However, there might be some differences in file path syntax between operating systems.
#### For Windows:

You can use the absolute file path format for volume mounting. 
Assuming your project is in C:\path\to\your-project, you can modify the volume mounting line in the docker-compose.yml file like this:
```yaml
volumes:
  - C:\path\to\your-project\data\db:/var/lib/postgresql/data
```


#### For macOs:

The relative file path format should work as mentioned in the example (./data/db:/var/lib/postgresql/data).

### Explanation:
The db service uses the postgres image and ensures it always restarts. It mounts the local ./data/db directory to /var/lib/postgresql/data in the container to persist the PostgreSQL database data. The service maps port 5432 on the host to port 5432 in the container. The environment variables POSTGRES_DB, POSTGRES_USER, and POSTGRES_PASSWORD define the name of the database, the username, and the password, respectively.

The adminer service uses the adminer image and also ensures it always restarts. It maps port 8080 on the host to port 8080 in the container, allowing access to the Adminer UI.

Please note that the provided YAML file assumes the existence of a ./data/db directory in your project structure for persisting the PostgreSQL data. Adjust the volume mapping as needed for your project.
### Adminer

You can access the Adminer UI in your web browser at **http://localhost:8080.**

Use the provided PostgreSQL credentials (postgres:postgres) to connect to the database.

And don't forget to select the postgresql database.


