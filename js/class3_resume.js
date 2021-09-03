let resume = `
{
  "name": "KARTHIKEYAN GANESH",
  "mobile": "+91 741-899-9760",
  "email": "karthiknganesh96@gmail.com",
  "location": "Tiruppur, Tamilnadu 641687.",
  "summary": "Developer with experience in B2B ecommerce Application for 2.6 years. 
  Seeking to work as a full stack developer to improve my product development skills in all phase of software development. 
  Interested in working on any part of the development process in an efficient manner.",
  "skills": [
    {
      "frontend": [
        "React js",
        "Angular",
        "Rxjs",
        "HTML",
        "CSS",
        "Bootstrap"
      ]
    },
    {
      "backend": [
        "Java",
        "Node js",
        "Express js"
      ]
    },
    {
      "database": [
        "MySQL",
        "MongoDB",
        "PouchDB"
      ]
    },
    {
      "versionControlSystem": [
        "Git"
      ]
    },
    {
      "os": [
        "Understanding of Linux",
        "windows"
      ]
    }
  ],
  "experience": {
    "description": "Tata Consultancy Services, December 2018 – Current Chennai, Tamilnadu.",
    "clientproject": [
      {
        "description": "HP Business to Business ecommerce store where bulk orders placed by various business users globally."
      },
      {
        "dailytask": [
          "Collaborated with development, IT support operations to enhance software productivity.",
          "Developed frontend and backend code for enhancement of the application.",
          "Querying database based on business requirement and also for application need.",
          "Technologies used Angular,react,MySQL,nodejs,Java"
        ]
      }
    ]
  },
  "education": {
    "institute": "Dr.NGP Institute of technology, Coimbatore. ",
    "degree": "B.TECH",
    "specializaion": "INFORMATION TECHNOLOGY",
    "location": "Coimbatore"
  },
  "mini_projects": [
    {
      "description": "Invoice Application build using Angular, electronjs, pouchDB.",
      "url": "https://github.com/kn123g/gmkknits"
    },
    {
      "description": "Daily Challenge Mobile App build using Angular, Nativescript, Firebase Database and Authentication.",
      "url": "https://github.com/kn123g/FirstAngularNativeScriptProject/tree/master"
    }
  ],
  "strength": [
    "Positive attitude",
    "Self motivation"
  ],
  "declaration": "I, here by confirm that the information given above is true to the best of my knowledge and belief.",
  "date": "22/08/2021",
  "place": "Tiruppur"
}`;
console.log(resume)
document.getElementsByClassName('resumecontent')[0].querySelector('pre').querySelector('code').innerHTML = resume;