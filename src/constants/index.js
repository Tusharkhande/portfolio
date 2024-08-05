import project1 from "../assets/projects/project-1.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "April 2023 - July 2023",
    role: "Android Developer Intern",
    company: "Technovate Infotech",
    description: `Developed a Wi-Fi scanning and connectivity android app using React Native. Contributed to React Native and React web development projects.`,
    technologies: ["Javascript", "React.js", "React Native", "MySQL", "Tailwind CSS"],
  },
  {
    year: "March 2023 - April 2023",
    role: "Java Developer Intern",
    company: "Mass Technologies",
    description: ` Contributed to an advanced Java web project titled MediCrypt - Advanced Symmetric Encryption over Medical Cloud Data. Involved in the implementation of key technologies such as JSP, Servlets, and JDBC for frontend development and database connectivity.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "GenAI",
    image: project1,
    description:
      "Developed an AI assistant that engages users in dynamic conversations and produces captivating AI images and artwork! It leverages various models, including OpenAIs GPT-3.5 and DALLE 2.0, Googles Gemini, and open source models from HuggingFace. The app has five interactive chat assistants, each with a unique set of features, including image generation, text generation, and image detection. Additionally, GenAI utilizes Firebase authentication and firestore, ensuring seamless user experience and secure data management.",
    technologies: ["React Native", "Tailwind CSS", "OpenAI API", "Firebase", "HuggingFace", "Google Gemini"],
  },
  {
    title: "SwiftCart",
    image: project1,
    description:
      "Fullstack Microservices-Based Online Shopping React Web App implementing synchronous inter-process communication, a Discovery Server, API Gateway, secure Authentication and Authorization, Circuit Breaker for resilience, and Distributed Tracing making it a robust and secure ecommerce platform.",
    technologies: ["React", "Spring Boot", "Eureka Server", "Spring Security", "MongoDB", "MySQL", "Kafka", "Docker"],
  },
  {
    title: "Chatify",
    image: project1,
    description:
      "Developed a Java-based chatting application, leveraging advanced Java, MySQL, and Socket.IO. It enables seamless real-time messaging, group chats, and multimedia sharing. With socket programming, Chatify ensures fast message delivery and an unparalleled chatting experience. ",
    technologies: ["Java", "Socket.IO", "MySQL", "Java Swing" ],
  },
  {
    title: "NewsBrew",
    image: project1,
    description:
      "Developed a React.js web application that delivers the latest news articles from various categories. The app utilizes the News API to fetch real-time news data and presents it in an organized and user-friendly manner. Users can browse news articles based on categories such as business, entertainment, health, etc.The app features a responsive design with a navigation bar for easy category selection. Additionally, it incorporates infinite scrolling, allowing users to seamlessly explore an extensive collection of news articles.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "React.js", "News API"],
  },
];

export const CONTACT = {
  address: "Deolali Pravara, Rahuri, Ahmednagar, Maharashtra, India - 413716",
  phoneNo: "+91 9322392593",
  email: "tusharkhande09@gmail.com",
};
