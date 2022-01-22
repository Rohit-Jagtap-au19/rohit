# Financepeer

In this project I created a web app that uses reactjs to **Financepeer**

As a demonstration of my skills, I built an app that utilizes components to fetch data from an internal server, introduces **routing** concepts, **authenticates** and **authorizes** users.

### Project Details

<details>
<summary>Click to view the Functionality that are added</summary>

#### Project Functionality

The app have the following functionalities

- Register Route

  - To create an account, users will need to provide their name,email address and password.
  - if u provide already registred email address There will be alert.
  - while registering if ur password and re-entred paessword should be the same or there will be alert.
  - provied data of the user (emailId) will be checked if that is already present in our collection user will see alert or this is new user then users emailId,password and name will be added to local mongodb/myuserdb/users

- Login Route

  - Login is easy with a valid username and password. Users will be able to access their accounts once they've registered.
  - Navigation links are provided in the Navbar for users to access Home, given data

- Home Route

  - JSON files can only be uploaded via this panel. I used Filereader to read the file containt and show it in console.
  - After clicking the logout link, users will be able to navigate to the login page.
  - Even user provide "/" path he will be redirected to log in page.

- Data

  - Given Jsondata is avilable here.

#### Project Details

- In order to focus my efforts on the functionality of this app rather than styling it, I used Bootstrap for quick styling for most of the components.
- I built a Register page to store user information in mongodb, and then I built a login page to cross-check user email with the email in mongodb, and if they do not   exist, There will be alert.
- Upon successfully entering user details and pressing login, the user will be redirected to the home page.


### Improvements to come

- json data will be saved in data base and showed on same page.
- A pagination was needed to limit the number of details displayed on each page to ten.
- Clicking a particular post will redirect the user to the posts by that particular user of that particular post
- A user interface and user experience needs to be improved to be attractive.

</details>
