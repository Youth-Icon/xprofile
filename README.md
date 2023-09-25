# XProfile

## Overview

XProfile is a platform that allows you to create personalized profile pages with links to your various social media accounts, websites, and more. Additionally, it offers a unique feature: the ability to explore profiles based on specific criteria. Whether you want to discover profiles with the most GitHub stars, XProfile makes it easy.

## Features

- **Personalized Profiles**: Create your own profile page with links to your various online presence.

- **Explore Profiles**: Browse and discover profiles that has most GitHub stars

- **Open Source**: Unlike other projects out there, XProfile is an open-source project, meaning it's developed and maintained by a community of contributors.

## Local Setup

To run XProfile locally for development, follow these steps:

1. Install Node if not by heading to [Node](https://nodejs.org/en/download) it comes with npm (Node package Manager)

2. Clone the repository
   ```
   git clone https://github.com/Youth-Icon/xprofile.git
   ```
   
3. Change Directory to the project
   ```
   cd xprofile
   ```

4. If you want to run it with yarn install yarn otherwise skip to step 3:
   ```
   npm install -g yarn
   ```
5. Install dependencies by running the command:
   - For yarn devs:
     ```
     yarn install
     ```
   - For npm devs:
     ```
     npm install
     ```
6. Run the development Server:
   - For yarn dev:
     ```
     yarn run dev
     ```
   - For npm devs:
     ```
     npm run dev
     ```

Finally You can see the website running in port 3000. Access it by hitting the url: `http://localhost:3000`

Head over to [Contributing guide](#contributing-guide) to get an idea on how to contribute to this project.


# Contributing Guide

To get started with XProfile, follow these steps:

1. **Fork the Repository**: Click the "Fork" button at the top right corner of this repository's page on GitHub. This will create a copy of the repository under your GitHub account.

2. **Clone Your Fork**: After forking, you need to clone your forked repository to your local machine. Use the following command, replacing `<YourUsername>` with your GitHub username:

   ```
   git clone https://github.com/<YourUsername>/xprofile.git
   ```

3. **Create a New Branch**: Before you start working on a new feature or bug fix, create a new branch to work in. Name your branch descriptively to indicate the purpose of your changes. For example:
   ```
   git branch <branch-name>
   ```
4. **Use New Branch**: Switch to the newly created branch to make changes.
   
   ```
   git checkout <branch-name>
   ```
5. **Make Changes**: Make your desired changes or additions to the codebase.

6. **Testing**: Ensure that your changes pass all existing tests and write new tests if necessary. Maintaining test coverage is important.

6. **Commit Your Changes**: Commit your changes with a clear and concise commit message. For example:
   ```
   git commit -m "Add feature: [Brief Description]"
   ```
7. **Push Your Changes**: Push your changes to your forked repository on GitHub:

```
git push origin <branch-name>
```

8. **Submit a Pull Request (PR)**: Go to the main repository's page on GitHub and click the "New Pull Request" button. Select your branch from the base repository and branch dropdowns.

9. **Describe Your Changes**: Provide a clear and detailed description of your changes in the PR. Explain why these changes are necessary and how they address the issue or improve the project.

10. **Review and Discussion**: Engage in any discussions or reviews related to your pull request. Be open to feedback and make necessary adjustments.

11. **Merge**: Once your PR has been reviewed and approved, it will be merged into the main project. Congratulations, you've contributed to XProfile!
    
Thank you for your interest in XProfile, and happy exploring!
