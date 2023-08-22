export const projectData = [
  {
    name: "Guessagram",
    liveLink: "https://guessagram.vercel.app/",
    image: "./src/assets/guesswords-screenshot.png",
    imageName: "guesswords-screenshot",
    github: "https://github.com/AdamShelley/Guessagram",
    npm: "",
    skills: ["Typescript", "Tailwind", "Prisma", "Railway", "NextJS"],
    screenshots: [
      "Guessagram1.png",
      "Guessagram2.png",
      "Guessagram3.png",
      "Guessagram4.png",
    ],
    description: "A word guessing game, automatically reset daily.",
    background:
      "With the success of Wordle, many have tried making their own small addictive game. This is my version. I used NextJS to handle the frontend and Tailwind for the styling. I used Prisma to link to a postgres database hosted on Railway. The database is automatically reset daily using a cron job.  ",
    learnings: "First time using prisma to link to a postgres database.",
  },
  {
    name: "Samantha Foo Pottery",
    liveLink: "https://sam-foo-pottery.vercel.app/",
    image: "./src/assets/pottery-screenshot.png",
    imageName: "pottery-screenshot",
    github: "https://github.com/AdamShelley/Samantha-Foo-Pottery",
    npm: "",
    skills: ["ReactJS", "ThreeJS", "GSAP", "Blender"],
    screenshots: ["pottery1.png", "pottery2.png", "pottery3.png"],
    description: "A portfolio website for Samantha Foo.",
    background:
      "This portfolio is built with ReactJS, and ThreeJs to handle the 3D model that I made in Blender of Samantha's studio. I used the GSAP animation package to handle the movement of the 3D model and HTML around the screen.",
    learnings:
      "This was my first deep dive into combining ReactJS with ThreeJS. I also honed my skills in 3D modeling using Blender and discovered the potential of GSAP for enhancing user interaction through animations",
  },
  {
    name: "react-onboarder-tool",
    liveLink: "https://onboarder-demonstration.web.app/",
    image: "./src/assets/onboarder-tool.png",
    imageName: "onboarder-tool",
    github: "https://github.com/AdamShelley/react-onboarder-tool",
    npm: "https://www.npmjs.com/package/react-onboarder-tool",
    skills: ["React", "npm"],
    screenshots: [, "onboarding2.png", "onboarding3.png", "onboarding1.jpg"],
    description:
      "This is a tool for React that is easily implemented into your website to create an onboarding experience for first-time users. ",
    background: `I created this tool as a way to introduce new users to my websites. Instead of creating an introduction or a guide page for each individual website, I could provide an interactive experience.`,
    learnings:
      "Creating this tool was a lesson in package development and distribution. It was my first experience publishing to NPM, and I learned a lot about the process of creating a package, documenting and versioning it in an understandable way.",
  },
  {
    name: "Scribbler",
    liveLink: "https://scribbler-app.com/",
    image: "./src/assets/scribbler-screenshot.png",
    imageName: "scribbler-screenshot",
    github: "https://github.com/AdamShelley/scribbler",
    npm: "",
    description:
      "A online markdown editor that organises your notes and keeps them stored.",
    skills: ["React", "Firebase", "Auth"],
    screenshots: [
      "scribbler3.png",
      "scribbler4.png",
      "scribbler5.png",
      "scribbler6.png",
      "scribbler7.png",
      "scribbler2.jpg",
    ],
    background: `I wanted to create a website that would be both helpful for my learning and useful in daily life. This tool is built using react on the frontend with firebase storage on the backend.`,
    learnings:
      "Firebase deployment, authentication using email, authentication using github signin. ",
  },
];
