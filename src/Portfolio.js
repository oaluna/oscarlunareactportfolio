const greeting = {
  /* Your Summary And Greeting Section */
  title: "Oscar Armando Luna",
  subTitle:
    "I'm a San Francisco native, and a React developer looking to gain work experience. I've been learning all I can about full-stack web development for a year and have grown partial towards using React to build my web applications.",
  resumeLink: "https://drive.google.com/file/d/1UzCeY24WmewEaXUxmIoNSB9iI0j_atrQ/view?usp=sharing"
};


const socialMediaLinks = {

  github: "https://github.com/oaluna",
  linkedin: "https://www.linkedin.com/in/oscar-a-luna/",
  gmail: "CaporalesLuna@gmail.com",
  twitter: "https://twitter.com/OscarLilMonster",
  facebook: "https://www.facebook.com/luna.monster",
  stackoverflow: "https://stackoverflow.com/users/12301044/oscar-luna"
};


const skillsSection = {
  title: "Skills",
  subTitle: "I make full-stack web applications using React as either a frontend library or for server-side-rendering",
  skills: [
    "⚡ Develop dynamic UI components using ReactJS",
    "⚡ Write unit, integration, and functional testing with Mocha and Chai",
    "⚡ Integration of third party services such as Firebase/ Azure / Heroku"
  ],


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
  githubConvertedToken: "53d7a8e7cd605c5fc5138a820fda8243ea86ac37",
  githubUserName: "oaluna",
  showGithubProfile: "true"
};



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


const achievementSection = {

  title: "Achievements And Certifications 🏆 ",
  subtitle: "TBC",

  achievementsCards: [
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

  podcast: [ "" ]
};

const contactInfo = {
  title: "Contact Info ☎️",
  subtitle: "Hire me, buy me a coffee, or better yet, both!",
  number: "(415) 508-7194",
  email_address: "CaporalesLuna@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "OscarLilMonster"
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
