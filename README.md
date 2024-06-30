## 🚀 Launch Your Next.js SaaS with this Powerhouse Boilerplate! 


⚡️ This isn't just another starter; it's your shortcut to building a high-performance SaaS. We've combined the best of Next.js (with App Router!), Tailwind CSS, and TypeScript, and sprinkled it with developer-friendly magic ✨.  

**Think:** blazing-fast performance, smooth development, and the flexibility to scale. Whether you're building the next big thing or just getting started, this boilerplate has your back 💪. 

### 🔥 What's Inside?

We're all about giving you the tools you need **without** the bloat. This boilerplate is **feature-packed** yet **easy to customize**:


🚀 Key Features:

Frontend & Routing:
- ⚡ Next.js with App Router for lightning-fast performance
- 💎 Sleek UI with Tailwind CSS and Shadcn UI components and Aceternity UI
- 🌐 Multi-language support via next-intl

Type Safety & Development:
- 🔥 Rock-solid type checking with TypeScript
- ✅ Strict Mode enabled for TypeScript and React 18
- 💡 Streamlined imports using '@' prefix

Authentication & Security:
- 🔒 Comprehensive auth system powered by Clerk
- 👤 Advanced features: MFA, Social Auth, User Impersonation

Database & ORM:
- 💽 Global database solution with Supabase
- 📦 Effortless schema management using Prisma

Forms & Validation:
- ⌨️ Smooth form handling with React Hook Form
- 🔴 Robust data validation courtesy of Zod

Code Quality & Standards:
- 📏 Linting with ESLint (NextJS, Core Web Vitals, Tailwind CSS, Airbnb configs)
- 💖 Code prettification via Prettier
- 🦊 Git hooks management using Husky
- 🚫 Lint-staged for targeted file linting
- 🚓 Commit message linting with Commitlint
- 📓 Standardized commit messages using Commitizen

Testing & Monitoring:
- 🦺 Unit testing capabilities with Jest
- 🚨 Real-time error tracking via Sentry

Automation & SEO:
- 🎁 Automated changelog generation with Semantic Release
- 🤖 SEO optimization: metadata, JSON-LD, Open Graph tags
- 🗺️ Auto-generated sitemap.xml and robots.txt

Developer Experience:
- 🗂 Preconfigured VSCode setup: Debug, Settings, Tasks, Extensions


🔧 Next.js Built-in Optimizations:

- ☕ Automatic HTML & CSS Minification
- 💨 Instant Hot Reloading for Rapid Development
- ✅ Smart Cache Busting for Optimal Performance


## 🚀 Quick Start Guide

📋 Prerequisites:
- 💻 Node.js 20+
- 📦 npm, yarn, or bun

🏁 Getting Started:

1. 📥 Clone the repo:
   ```shell
   git clone --depth=1 https://github.com/Lkados/soraakit.git my-awesome-project
   cd my-awesome-project

## 🔧 Install dependencies:

```sh
npm install
```

## 🚀 Launch development server:

```sh
npm run dev
```
🌐 check it out:
Open http://localhost:3000 in your favorite browser!

## 🔐 Setting Up Authentication:

📝 Create a Clerk account at Clerk.com
🔨 Set up a new application in the Clerk Dashboard
🔑 Copy your keys into .env.local:

```shell
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_pub_key_here
CLERK_SECRET_KEY=your_secret_key_here
```
✨ Voila! You now have a fully-functional auth system including:

📝 Sign up
🔐 Sign in/out
🔑 Password management
👤 Profile updates
✉️ Email changes
🗑️ Account deletion...and more!

### 💽 Set up remote database

🗃️ Setting Up Your Remote Database

This project leverages Prisma, a powerful and type-safe ORM, paired with Supabase for a robust, scalable PostgreSQL database solution.

1. 🌟 Create a Supabase Account:
   - 🔗 Visit [Supabase](https://supabase.com) and sign up
   - 🆕 Create a new project

2. 🔑 Gather Your Credentials:
   - In your Supabase project dashboard, find:
     - Project URL : transaction mode and also session mode

3. 🔐 Configure Your Environment:
   Update your `.env.local` file with Supabase details:
```SHELL
DATABASE_URL=Transaction url
DIRECT_URL=Session Url
```	
## ✨ Prisma Integration

Prisma is a powerful tool for working with databases in a type-safe way.

1. 📦 Install Prisma:
   
```shell
npm install prisma --save-dev
```
1. 🗃️ Update Your Prisma Schema:
In the prisma/schema.prisma file, define your data model. Here's an example:

```shell

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    String
  authorId  Int?
}
```
3. 🔄 Migrate Your Database:
Run the following commands to create and apply migrations:

```shell
npx prisma migrate dev --name dev
npx prisma generate
```
🎉 Done!

You now have a fully functional Prisma setup with a remote Supabase database. Happy coding! 🚀


### 📂 Project Structure

```shell
.
.
├── 📄 README.md                       # README file
├── 🛠️ .husky                          # Husky configuration
├── 📘 coverage                        # Coverage folder
├── 🖥️ .vscode                         # VSCode configuration
├── 📦 prisma                          # Prisma configuration and migrations
├── 🌍 public                          # Public assets folder
├── 📂 src
│   ├── 🌐 app                         # Next.js App (App Router)
│   ├── 🧩 components                  # Reusable components
│   ├── 📚 lib                         # 3rd party libraries configuration
│   ├── 🌍 locales                     # Locales folder (i18n messages)
│   ├── 🗃️ providers                   # Providers
│   ├── 📝 templates                   # Templates folder
│   ├── 🗂️ types                       # Type definitions
│   └── 🛠️ utils                       # Utilities folder
├── 🧪 tests                           # Tests
├── 🖌️ tailwind.config.js              # Tailwind CSS configuration
└── 📝 tsconfig.json                   # TypeScript configuration
```


### 🎨 Committing Your Changes

To commit your changes, run:

```shell
npm run commit
```
🔄 Why Conventional Commits ? :

Using Conventional Commits helps automate the release process by:

📜 Generating a CHANGELOG File: Automatically keeps track of changes and updates the changelog.
📈 Determining the Next Version Number: Based on commit types (e.g., feat, fix, chore), it calculates the new version number for you!
🧪 Running Tests
All unit tests are located alongside the source code, which keeps everything organized and easy to find. We use Jest and React Testing Library for our testing needs.

To run the tests, use:

```shell
npm run test
```

🔍 What Are Tests For?:

✅ Unit Tests: Ensure that each part of the application works correctly.
📊 Test Coverage: Verify that all important code paths are tested.
Feel free to reach out if you have any questions or run into issues! 🚀

### 🚀 Deploy to Production

When you're ready to deploy your application to production, follow these steps:

🏗️ Build Your Production Version
The database migration runs automatically during the build process, so you don't need to run it manually. Just make sure you have DATABASE_URL and DATABASE_AUTH_TOKEN set in your environment variables.

To create an optimized production build, run:

```shell
$ npm run build
```

🔨 What Does This Do?

🏗️ Generates: An optimized production build of the boilerplate.
📦 Prepares: Your app for deployment with all necessary optimizations.
🚀 Start Your Production Server
To test your production build locally, use:


```shell
$ npm run start
```

🌟 What Does This Do?

🖥️ Starts: A local server with the production build.
🌐 Access: Open http://localhost:3000 in your favorite browser to see the production version of your project.

## 🌟 Tips for Production Deployment
🚀 Automate Builds: Consider setting up a CI/CD pipeline for automated builds and deployments.
📜 Monitor: Use tools like Sentry for error monitoring and logging.
🔒 Secure: Ensure that all environment variables and secrets are properly managed and not exposed.

### 🛠️ Error Monitoring

To keep track of errors and issues in your application, we use Sentry for robust error monitoring and management. Here’s how you can set up and configure Sentry for both development and production environments. 🌟

🌟 Development Environment

For development, Sentry and Spotlight (Sentry for Development) are already integrated into the project. You don’t need to do anything additional! 🎉

What’s Happening?

🧑‍💻 Automatic Setup: Errors are automatically sent to your local Spotlight instance.
🛠️ Try Locally: Experience Sentry’s features in your development environment.
💡 Tip: You can explore your local Sentry setup and check for errors right from your development machine!

🚀 Production Environment

For the production environment, follow these steps to configure Sentry for error monitoring and management:

Create a Sentry Account and Project:

📝 Sign Up: Go to Sentry and create an account.
🆕 New Project: Set up a new project for your application.

Add Your Sentry DSN:

🔑 Configure: Add your Sentry DSN (Data Source Name) in the following files:
sentry.client.config.ts
sentry.edge.config.ts
sentry.server.config.ts


##🤝 Contributions

We welcome contributions from everyone! Whether you’re a seasoned developer or a newcomer, your input is valuable to us. Here’s how you can get involved and contribute to the project:

### 🚀 How to Contribute

📝 Open an Issue:

If you have a question, find a bug, or have a feature request, open an issue on GitHub.

🔍 Describe the Issue: Provide details about the problem or your suggestion.

🔄 Submit a Pull Request:

Fork the repository, make your changes, and submit a pull request.

🌟 Follow Guidelines: Ensure your changes adhere to the project's contributing guidelines.

💬 Join the Discussion:

Engage with other contributors and maintainers on GitHub Discussions or join our community.

🤔 Have Questions?

📫 Contact Us: If you need help or have questions, feel free to open an issue.

🌐 Join Us: Be a part of our community and share your thoughts.

🤝 We Appreciate Your Contributions!

Whether it’s a bug report, feature request, or code contribution, we appreciate your help in making this project better. Together, we can achieve great things! 🌟🚀

💡 Suggestions & Improvements

✨ Suggest Features: Got an idea for a new feature? Let us know!

🔧 Improve Documentation: Help us improve the documentation and make it clearer for everyone.

📜 Contribution Guidelines

Before contributing, please read our contributing guidelines to ensure that your contributions align with our project’s goals and standards. 📜

🙏 Thank You!

Thank you for considering contributing to this project! Your efforts are greatly appreciated. 🙏✨

🏷️ Example Contributions

Here are some examples of how you can contribute:

🐛 Bug Fixes: Fixing issues or bugs that you find in the codebase.

🚀 New Features: Adding new functionalities or features to the project.

📚 Documentation: Improving or updating the project's documentation.

🎨 Design: Enhancing the design and user experience of the application.

🎉 Let's Collaborate!

We look forward to your contributions and ideas. Together, we can make this project even better! 🚀✨



### License

Licensed under the MIT License, Copyright © 2024

See [LICENSE](LICENSE) for more information.
