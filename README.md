## LnData_Assignment

## Catalog
  * [Installation](README.md#installation)
  * [Run this app](READ.md#run-this-app)
  * [Framework and Library](README.md#framework-and-library)
 

## Installation

1. Clone
```
git clone https://github.com/MyBackHurtsAlot/LnData_Assignment
```
2. Install `package.json`
```
npm install
```
3. Import `nba.sql`
```
mysql -u [ user ] -p [ password ] < backend/nba.sql
```
4. Go to `backend / pool.js` and change `user` and `password` to yours

## Run this app

- ```
  node backend/app.js
  ```
- ```
  npm run start
  ```

## Framework and Library

### Front end

| Technique | Description |
| --------- | ----------  |
| React | to build a Single Page Application |
| Router | to set up routes |
| Redux | for data storage |
| Chart.js | to show charts |
| Webpack |to bundle the modules |
| ESLint & Prettier | to organize coding styles |
| styled-components | to use CSS - in - jS |
| Custom hooks and shared styles | to reduce duplicated code |

### Back end

| Technique | Description |
| --------- | ----------  |
| Node.js | to create RESTful API with MVC |
| MySQL | as database |
| Connection pool | to maintain database connections |
| .env |to store sensitive data |
| Firebase | to deploy |
