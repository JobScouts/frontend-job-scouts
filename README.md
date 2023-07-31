## Deployed Link
https://clever-starburst-91776f.netlify.app/

# Project Name : JobScouts
# Team Member : 
                1. Mohammad Samara
                2. Farah Elaydi
                3. Awes Alomari
                4. Saif Yahia
                5. Mohammad Mustafe


# Description
> JobScouts will be a valuable tool for job seekers, as it will simplify their job search process by aggregating job listings from various sources and presenting them in a clear and organized manner. The app will allow users to explore relevant job opportunities based on their location, providing them with a convenient and centralized platform to manage their job applications.

# Problem 
> The JobScouts web app aims to address the common challenges faced by job seekers when searching for employment opportunities. It provides an efficient and user-friendly platform for job seekers to find suitable job openings and streamlines the job application process.
# Version History

**Version 1.0.0**

Initial release
- created the components folder and added the main pages to it as directories. Each directory contains: Js file and Css file .
- create an initial Desgin using (Html, Css, Jsx) for each directory.

**Version 1.1.0**

- we start dealing with static desgin like : 
    - NavBar
    - Footer
    - About Us
    - Static Data on Home Page "on updte directory'

- Complete all pages design

**Version 1.1.1**

- After finishing the basic designs in each directory and completing the backend, we started fetching data from the API.
    - At first, we fetched all the jobs from API and enabled the search functionality, allowing the user to search for new job based on the JobTitle or location or both of them.
    - Then, we sent data from the API to the custom card component as props and applied a map function to display specific data on these cards

**Version 2.0.0**

- Using Auth0 to deal with login , take user information from Google Or Facebook.

**Version 2.1.0**

- We start working on Details component from Custom card we send 2 props one of them we use it to show more details about selected job and another one just to close the page.
- then we worked on SaveJob and make the all functionalty like:
   - if user try to save one job twice .
   - if user try to save job without login.
   - if user want to unsave job (delete).
- take a user info from Auth0 and display it on profile page.

**Version 2.1.1**
Latest Version 

- Edit some Design and check all website functionalty.
- deploy our project on Netlify.

#  Libraries, Frameworks, or Packages that Our Project requires
- react-bootstrap
- auth0/auth0-react
- fortawesome
    - @fortawesome/fontawesome-free
    - @fortawesome/free-brands-svg-icons
    - @fortawesome/free-solid-svg-icons
    - @fortawesome/react-fontawesome
- react-icons
- react-spinner-animated 
- react-router
- react-router-dom


