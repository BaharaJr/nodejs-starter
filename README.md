# NodeJs Starter

Express / Nodejs Starter with PostgreSQL

<br />

## Requirements

- [Node.js](https://nodejs.org/) >= 6.x
- [PostgreSQL](https://www.postgresql.org/download/)

<br />

## Setting up for development

- clone repo: `git clone git@github.com:BaharaJr/nodejs-starter.git`
- change directory to nodejs-starter:
- Create .env file and add db URL. Sample: `DATABASE_URL=postgres://postgres:YOUR-DB-PASSOWRD@YOUR-DB-SERVER(i.e localhost):POSTGRES-PORT(DEFAULT IS 5432)/YOUR0-DB-NAME `
- In the .env file, also add the port you would like to use. i.e `PORT=4000`
- Install packages with `npm i`
  <br />

**Run**

```bash
$ npm run start
```

> Runs the application with [nodemon]("https://nodemon.io/"). Server is listening on Port 4000 by default. This can be overwritten by `PORT` constant in `.env` file.

> The App will run on the port you added in your .env file (`localhost:YOUR-PORT`)

### Test Endpoint: `/test`

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
"databasename": "YOUR-DB-NAME",
"command": "SELECT",
"catalogname": "current_catalog",
"format": "text",
"message": "Database was connected successfully"
}
```

## License

[WTFPL](/LICENSE.md)

