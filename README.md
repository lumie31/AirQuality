# AirQuality App
A simple and interactive application that allows users to select an Indian city and have their local air quality displayed in cigarettes and particulate matter.The application is hosted online and can be viewed here: https://airquality.vercel.app

## Getting Started
These instructions will get you a copy of this project up and running on your local machine for development and testing purposes.

### Installing
- Open your local development terminal
- `cd` into the directory that you want the project to reside
```bash
cd projects
```
- Clone the repository into that directory
```bash
git clone https://github.com/lumie31/AirQuality.git
```
- Run `yarn install` to install the project dependencies
- Run `yarn run dev` to start a local development server
- Navigate to http://localhost:3000 to view the project

## Live demo
A fully functional demo of this project hosted on Vercel and is available here: https://airquality.vercel.app

## Built with
- [React (Next.js)](https://nextjs.org/) - React Framework for Production
- [React Intl](https://formatjs.io/docs/react-intl/) - For implementing internationalization
- [Chakra UI](https://chakra-ui.com/) - A simple component library for building React apps
- [Vercel](https://vercel.com/) - For Deployment of Nextjs apps
- [ Jest](https://jestjs.io/) - JavaScript Testing Framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - For testing React components

## Will this scale in a serverless environment or work on IE11?
Yes. To generate a build that would generate static files that can be served as flat files that would also work on IE11, Run the command below:

```bash
  yarn run build
```