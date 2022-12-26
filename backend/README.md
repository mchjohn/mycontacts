
# My Contacts 📱

API for contact management implemented with NodeJS, ExpressJS and Postgres.

- **Singleton**: It guarantees the existence of only one instance of a class, maintaining a global point of access to its object.
- **Repository**: Are classes or components that encapsulate the logic required to access data sources. They centralize common data access functionality, providing better maintainability and decoupling the infrastructure or technology used to access databases from the domain model layer.


## Running locally 🖥️

Clone the project

```bash
  git clone git@github.com:mchjohn/mycontacts.git
```

Enter the project directory

```bash
  cd mycontacts
```

Install the dependencies

```bash
  yarn
```

Start the server

```bash
  yarn start
```

Use the `src/database/schema.sql` file to create your database and tables

With Docker: 🐳

Download the postgres image
```bash
  docker pull postgres
```

Create the container
```bash
  docker run --name pgres -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

Start postgres
```bash
  docker exec -it pgres bash
```

Log in with your username
```bash
  psql -U root
```

Create your database
```bash
  CREATE DATABASE mycontacts;
```

Connect to your database
```bash
  \c mycontacts
```

Copy and paste each command from the `src/database/schema.sql` file

Use this insomnia file to perform requests
## Stack used 🧰

**Front-End:** 🚧

**Back-End:** Node, Express and PostgreSQL

