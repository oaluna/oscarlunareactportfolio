/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Oscar Armando Luna",
  subTitle:
    "I'm a San Francisco native, and a React developer looking to gain work experience. I've been learning all I can about full-stack web development for a year and have grown partial towards using React to build my web applications.",
  resumeLink: "https://drive.google.com/file/d/1_1pQKx80VLPiANvbpneFOYMkCLcfOvnZ/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/oaluna",
  linkedin: "https://www.linkedin.com/in/oscar-a-luna/",
  gmail: "CaporalesLuna@gmail.com",
  twitter: "https://twitter.com/OscarLilMonster",
  facebook: "https://www.facebook.com/luna.monster",
  stackoverflow: "https://stackoverflow.com/users/12301044/oscar-luna"
};

// Your Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "I make full-stack web applications using React as either a frontend library or for server-side-rendering",
  skills: [
    "⚡ Develop dynamic UI components using ReactJS",
    "⚡ Write unit, integration, and functional testing with Mocha and Chai",
    "⚡ Integration of third party services such as Firebase/ Azure / Heroku"
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3"
    },
    {
      skillName: "bootstrap4",
      fontAwesomeClassname: "fab fa-bootstrap"

    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fa fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fa fa-fire"
    },
    {
      skillName: "redux",
      fontAwesomeClassname: "fab fa-redux"
    },
    {
      skillName: "AngularJS",
      fontAwesomeClassname: "fab  fa-angular"
    },
    {
      skillName: "VueJS",
      fontAwesomeClassname: "fab fa-vuejs"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "0e0848d7b154201b01f760d4b2ad9aaaed69f5b8",
  githubUserName: "oaluna"
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "COMING SOON",
  projects: [
    {
      image: "",
      link: ""
    },
    {
      image: "",
      link: ""
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: "Achievements And Certifications 🏆 ",
  subtitle: "TBC",

  achivementsCards: [
    {
      title: "",
      description: "",
      image:
        "",
      footerLink: [
        { 
          name: "", 
          url: "" 
      },
        { 
          name: "", 
          url: "" 
        },
        { 
          name: "", 
          url: "" 
        }
      ]
    },
    {
      title: "",
      description: "",
      image: "",
      footerLink: [
        { 
          name: "", 
          url: "" 
        }
      ]
    },
    {
      title: "",
      description: "",
      image: "",
      footerLink: [
        { 
          name: "", 
          url: "" 
        },
        { 
          name: "", 
          url: "" 
        }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "",

  blogs: [
    {
      url: "",
      image: "",
      title: "",
      description: ""
    },
    {
      url: "",
      image: "",
      title: "",
      description: ""
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: "",

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
      image: ""
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: "Podcasts",
  subtitle: "Coming Soon",

  // Please Provide with Your Podcast embeded Link
  podcast: [ "" ]
};

const contactInfo = {
  title: "Contact Info ☎️",
  subtitle: "Hire me, buy me a coffee, or better yet, both!",
  number: "(415) 246-7206",
  email_address: "CaporalesLuna@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "OscarLilMonster"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
