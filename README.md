
# emoployee-directory-services

This repository serves as a back-end office for employee-directory-client repository.

It uses manually generated mock data from [https://randomuser.me](https://randomuser.me/documentation).

It is deployed on AWS EC2 instance served with nginx on ubuntu 18.04LTS.

It contains unit tests written with jest library.

## Tech Stack

**Server:** Node: express, graphql-http (express-graphql is now depricated)

**Entry point**: server.js

**Start command**: npm start

**Additional Packages**: eslint, nodemon

## Deployment

This project is configured with CI/CD pipelines using Github workflow actions & self-hosted action runners.

#### Found under: .github/workflows
- docker-image.yml generates docker image & pushes to docker hub
- docker-deployment.yml runs the docker image on the machine running the self-hosted action runner script






## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## API Reference

#### Get all users

```http
  Query getUsers
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pagination` | `{ pageSize: number, pageNumber: number }` | **Optional** Get Paginated Users |

#### Get users by field

```http
  Query getUsersByCategory
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `string` | **Required**. Field name to apply filter on |
| `value`      | `string` | **Required**. Value to filter by |

#### Get user

```http
  Query getUserById
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. User Id |

#### Get saved values for a specific field

```http
  Query getCategoryValues
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `string` | **Required**. Field name |

#### Get user by email

```http
  Query getUserByEmail
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. User email |

#### filterList (array, keyword)

Takes an array of objects and a keyword search and returns the objects that include the keyword.

#### paginateList (array, pageSize, pageNumber)

Takes an array of objects with pagination parameters and returns specific chunk of users based on the pageSize & pageNumber specified.

#### Mutations

```http
  createUser
```

```http
  updateUser
```

```http
  deleteUser
```
