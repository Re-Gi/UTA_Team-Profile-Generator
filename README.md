# Team-Profile Generator
<!-- ![Screenshot of a team-profile page generated using this application.]() -->

## Description
This application generates an HTML file displaying the profiles of members of a software development team, consisting of the team manager along with any engineers or interns on the team.

For each team member, the user will need to input a name, ID, email, and finally a fourth value pertaining to their position. The user will be prompted after each member to either add another employee or quit the team building process. Once the team members are all added and the user has stopped the application, the user's custom team-profile HTML will be generated with all of the team members and their submitted information.

## Installation
N/A

## Usage
To run this application the user must start it by using the command-line prompt `node server.js`.

Then, the user will be prompted to enter the team manager's name, ID, email, and office number. After the office number is entered, the user will be prompted to enter another employee with the options of 'Engineer', 'Intern', or 'No more employees.'
<!-- ![Screenshot of an open terminal with prompts for the team manager's information followed by a prompt for adding a new employee.]() -->

When entering an Engineer, the user will be prompted to provide a name, ID, email, and GitHub username.

When entering an Intern, the user will be prompted to provide a name, ID, email, and school attended.

When the user is done and selects 'No more employees.', the terminal will log 'Success!' and a team.html file will be generated into the distribution folder.

<!-- ![Screenshot of open terminal with answered prompts followed by a log reading 'Success!' and a new team.html file in the distribution folder.]() -->

<!-- ![Screenshot of the newly generated team.html file.]() -->

## Credits
I recieved assistance in this project from [Chris Zavala](https://github.com/ChrisZavala), who provided me with a ready to use HTML template, as well as [Karen Paezzoni](https://github.com/kpeazzoni), [Joshua Goeke](https://github.com/joshuagoeke), and [Myeonghun Jeong](https://github.com/mjtic) who all provided me with inspiration and support while building.

## License
Refer to licensing in the project repository.
