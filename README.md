# Project Name

## Overview

My Portfolio website

## Lighthouse Report

### Desktop

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [BranchingStrategy](#branching-strategy)
- [Contributing](#contributing)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/abhijithp05/abhijith.git

   ```

2. Navigate to the project directory:

### `cd project-name`

3. Install the dependencies:

### `npm install`

4. To run the application locally, use the following command

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Deployment

For deployment,

1. Prod Env

For deployment, create a Pull request from the development branch to the main branch and once changes are merged deployment will happen automatically.
https://kelick.vercel.app/

## Folder Structure

## Features

1. Sidebar Navigation: Easy navigation through different sections of the application.
2. Charts: Visual representation of data using bar charts, line graphs, and pie charts.
3. Employee Dashboard: Bulk upload employee detail using xlsx or csv files
4. Responsive Design: Optimized for various screen sizes.

## Branching Strategy

### Git Flow

Branches in Git Flow:

1. main: Contains the production-ready code. Each commit on master represents a stable, deployable state.

2. developmewnt: This is the integration branch for ongoing work. All features are merged here before being released to production.

3.feature/\*: Feature branches are used to develop new features or bug fixes. These are created from the develop branch and merged back into develop when complete.

4. release/_: When develop is ready for a release, a release/_ branch is created to prepare the code for production. This branch allows for last-minute bug fixes, documentation updates, or version number changes.

5. hotfix/\*: These are emergency fixes made directly to master (or main). After the fix, the changes are merged into both master and develop to ensure consistency.

### Flow Example:

1. Start with main and development.
2. Create a feature/ branch from development.
3. Merge the feature back into development.
4. When ready for a release, create a release/ branch from development.
5. Merge release/ into both main and development.
6. For urgent fixes, create a hotfix/ branch from main, fix, then merge into both main and development.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1.Fork the repository.

2. Create a new branch:

### `git checkout -b feature/your-feature-name`

3. Make your changes and commit them:

### `git commit -m 'Add some feature'`

4. Push to the branch:

### `git push origin feature/your-feature-name`

5. Open a pull request.
