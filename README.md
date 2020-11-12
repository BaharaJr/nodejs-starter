<h1 align="center">Welcome to node-starter 👋</h1>
<p>
  
  <a href="LICENCE.md" target="_blank">
    <img alt="License: WTFPL" src="https://img.shields.io/badge/License-WTFPL-yellow.svg" />
  </a>
</p>

  
Minimal Express / Nodejs Starter with PostgreSQL Database(No ORM)


## Requirements

- [Node.js](https://nodejs.org/) >= 6.x
- [PostgreSQL](https://www.postgresql.org/download/)

<br />

## Getting started

### Setting up for development

- Clone repo: `git clone git@github.com:BaharaJr/nodejs-starter.git`
```sh
$ git clone git@github.com:BaharaJr/nodejs-starter.git
```
- change directory to nodejs-starter:

```sh
$ cd nodejs-starter
```
- Create .env file and add db URL. Sample: `DATABASE_URL=postgres://username(DEFAULT is postgres):your-db-passowrd@your-hostname(i.e localhost):postgres-port(DEFAULT is 5432)/your-db-name`

```sh
$ cp .env.example .env
```

- In the .env file, also add the port you would like to use. i.e `PORT=4000`
- Install packages with 
```sh
$  npm i
```

<br />

**Run**

```bash
$ npm run start
```

> Runs the application with [nodemon]("https://nodemon.io/"). Server is listening on Port 4000 by default. This can be overwritten by `PORT` constant in `.env` file.

> The App will run on the port you added in your .env file (`localhost:YOUR-PORT`)


### Test Endpoint: `/test`

> Request

```
GET test
Host: localhost:4000
```

> Response

```JSON
{
  "title": "NodeJs Club is awesome"
}
```

### Test Database Connection: `/connection`

```
GET test
Host: localhost:4000
```
> Response

```JSON
{
  "databasename": "databse_name",
  "command": "SELECT",
  "catalogname": "current_catalog",
  "format": "text",
  "message": "Database was connected successfully"
}
```


## Run tests

```sh
npm test
```

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

This project is [WTFPL](/LICENSE.md) licensed.
