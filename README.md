
# NodeJs Starter

Express / Nodejs Starter with PostgreSQL


<br />

## Requirements
- [Node.js](https://nodejs.org/) >= 6.x

<br />

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

### Test Database Connection: `/test`

```
GET test
Host: localhost:4000
```
```JSON
{"schema": {}}
```
<br />
## Setting up for development
* clone repo: `git clone git@github.com:BaharaJr/nodejs-starter.git` 
* change directory to nodejs-starter: 
* Install packages with `npm i`
<br />

**Run**
```bash
$ npm run start
```
Runs the application with [nodemon]("https://nodemon.io/"). Server is listening on Port 4000 by default. This can be overwritten by `PORT` constant in `.env` file. 
<br />

## License
WTFPL

