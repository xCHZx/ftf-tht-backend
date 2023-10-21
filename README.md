
# GitLooker API

This is **GitLooker** only backend API version

This project is intended to run in a local environment.

## API Reference

#### Get all commits

```http
  GET /commits/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Octokit Token` | `string` | **Required**. Your Octokit token in .ENV file |

#### Get item

```http
  GET /commits/${sha}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `sha`      | `string` | **Required**. The SHA / Id of the commit |



# Demo

You can interact with a live frontend demo in this link:
[GitLooker Demo](https://gitlooker.netlify.app/)

# Installation


To install this project **with npm** you need to download the repository through a git clone:

```bash
git clone https://github.com/xCHZx/ftf-tht-backend.git
```
Once the project is downloaded, open your terminal in the directory of the folder and run the following command to install the dependencies:

```bash
npm install
```
This project needs a Personal Access Token from GitHub to be able to connect to the API.
Once you have the token, you need to place it in the .env file inside the project.
```bash
OCTOKIT_TOKEN = your_token_goes_here
```


To run the app, start the server running the following command:

```bash
npm run start
```

## Notes

This project is for testing purposes. For more information contact the repository owner.

This repository is intented to serve as a Frontend with services capabilities, using Octokit as provider. If you want to test the only backend API version check the next link:
[GitLooker Only Backend API](https://github.com/xCHZx/ftf-tht-backend)