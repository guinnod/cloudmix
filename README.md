
## Installation

Use the package manager [npm](https://www.npmjs.com/) to install packages.

```bash
git clone https://github.com/abzalslamkozha/cloudmix.git
cd cloudmix
npm i
```
# Config

Before running this project, you need to set up environment variables by creating a `.env` file in the root directory. These environment variables are used to manage sensitive information such as secret keys.
Create a `.env` file and add the following variables with your own values:
```bash
NEXT_PUBLIC_BACKEND_URL=backend_url
```
## Getting Started

First, run the development server:

```bash
npm run dev
```
And open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Description

This Next.js project is a chat application with a modular architecture, incorporating various technologies and features, including:

- **Tailwind CSS:** Used for styling to create a sleek and responsive user interface.

- **Ant Design:** Incorporates Ant Design for UI components, enhancing the look and feel of the application.

- **Next.js App Router:** Utilizes the new routing system introduced by Next.js for improved performance and SEO benefits.

- **React Query:** Employs React Query for efficient data fetching and management, ensuring a smooth user experience.

- **Zustand:** Leverages Zustand for state management, simplifying the handling of application-wide and component-specific state.

## Features

- **User Authentication:** Users can register or log in to the application to access its features.

- **Main Page with Chat Creation:** After logging in, users are presented with the main page, where they can create chats with unique names.

- **Chat Options:**
  1. **ChatGPT:** A chatbot that interacts with users using natural language.
  2. **Image Chat:** Users can send images, and Google Lens will provide results based on the images.
