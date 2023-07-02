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
if it does not work it probably will prompt you the error. In many case you'll need an elevation of priviledge.
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

### Montage :

La syntaxe de montage de volume mentionnée (./data/db:/var/lib/postgresql/data) devrait fonctionner sur les systèmes Windows et macOS,
ainsi que sur Linux. Cependant, il peut y avoir des différences dans la syntaxe des chemins d'accès aux fichiers entre les systèmes d'exploitation.
#### Pour Windows :

Vous pouvez utiliser le format de chemin d'accès absolu pour le montage de volumes. 
En supposant que votre projet se trouve dans C:\path\to\votre-projet, vous pouvez modifier la ligne de montage de volume dans le fichier docker-compose.yml comme suit :
```yaml
volumes :
  - C:\NPath_to\Nvotre_projet\Ndata\Ndb:/var/lib/postgresql/data
```

#### Pour macOs :

Le format de chemin de fichier relatif devrait fonctionner comme indiqué dans l'exemple (./data/db:/var/lib/postgresql/data).

### Explication :
Le service db utilise l'image postgres et s'assure qu'elle redémarre toujours. Il monte le répertoire local ./data/db vers /var/lib/postgresql/data dans le conteneur pour conserver les données de la base PostgreSQL. Le service fait correspondre le port 5432 de l'hôte au port 5432 du conteneur. Les variables d'environnement POSTGRES_DB, POSTGRES_USER et POSTGRES_PASSWORD définissent respectivement le nom de la base de données, le nom d'utilisateur et le mot de passe.

Le service adminer utilise l'image adminer et s'assure qu'il redémarre toujours. Il fait correspondre le port 8080 de l'hôte au port 8080 du conteneur, ce qui permet d'accéder à l'interface utilisateur d'Adminer.

Veuillez noter que le fichier YAML fourni suppose l'existence d'un répertoire ./data/db dans la structure de votre projet pour la persistance des données PostgreSQL. Ajustez le mappage des volumes en fonction de votre projet.
### Adminer

Vous pouvez accéder à l'interface Adminer dans votre navigateur web à **http://localhost:8080.**

Utilisez les identifiants PostgreSQL fournis (postgres:postgres) pour vous connecter à la base de données.

N'oubliez pas de sélectionner la base de données postgresql.


