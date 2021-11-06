# Excerpt - A Book Review Application

Excerpt is an application for writing and collating reviews on the books you read. It's a simple way to keep track of your book reviews, and to help you improve your reading habits.

The application is set up with user authentication and authorisation to protect your book reviews. The application uses a database to store the book reviews.

## Demo

Not added yet

## Running Locally

#### 1. Initial Setup

Clone the repo by running `git clone https://github.com/ross-crawford/excerpt.git` and then install the dependencies by running `npm install`.

#### 2. Set up Supabase

Sign up to [Supabase](https://app.supabase.io) and create a new project. Wait for your database to start.

#### 3. Run "User Management Starter" Quickstart

Once your database has started, run the "User Management Starter" quickstart. Inside of your project, enter the `SQL editor` tab and scroll down until you see `User Management Starter: Sets up a **public** Profiles table which you can access with your API.`

#### 4. Get the URL and Key

Go to the Project Settings (the cog icon), open the API tab, and find your API URL and `anon` key. Create a `.env.local` file in the root of your project and add the following lines with your API URL and `anon` key:

- `REACT_APP_SUPABASE_URL="your_url"`
- `REACT_APP_SUPABASE_KEY="your_key"`

#### 5. Update this list with Storage setup

Set up Storage in Supabase to hold the data...

#### 6. Run the app

Run the application by running `npm start`.

## Tools & Technologies

#### Front End

- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [React Router](https://reacttraining.com/react-router/)

#### Back End

- [Supabase](https://supabase.io/)

## Authors

- [Ross Crawford](https://github.com/ross-crawford)
