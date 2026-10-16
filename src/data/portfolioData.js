export const initialPortfolioData = {
  personal: {
    name: "Shreyash Bobalade",
    role: "Software Engineer & AIML Engineer",
    title: "Information Technology",
    college: "Walchand College of Engineering, Sangli (Shivaji University)",
    degree: "B.Tech in Information Technology (2024 – 2028)",
    cgpa: "8.1 / 10.0 (till 4th Sem)",
    location: "Sangli, Maharashtra, India",
    email: "shreyashbobalade2006@gmail.com",
    phone: "+91 9322782746",
    whatsapp: "https://wa.me/919322782746",
    bio: "Information Technology undergraduate with strong foundations in software engineering, DSA, OOP, and DBMS. Experienced in developing full-stack applications, backend APIs, Android applications, and AI-based solutions. Interested in building scalable, efficient, and reliable software systems.",
    subBio: "Passionate about engineering scalable web platforms, backend APIs, and computer vision systems. Competitive programmer with 300+ problems solved across LeetCode and CodeChef. Actively seeking Summer 2026 software engineering internships and collaborative opportunities.",
    github: "https://github.com/shreyash-sb",
    linkedin: "https://www.linkedin.com/in/shreyash-bobalade",
    leetcode: "https://leetcode.com/u/Shreyash1_6/",
    codechef: "https://www.codechef.com/users/shreyash_61",
    hackerrank: "https://www.hackerrank.com/profile/shreyash_16"
  },

  stats: [
    { value: "8.1", label: "B.Tech CGPA", sublabel: "WCE Sangli (till 4th Sem)" },
    { value: "6+", label: "Core Projects", sublabel: "Full-Stack, AIML, Systems" },
    { value: "300+", label: "Problems Solved", sublabel: "LeetCode" },
    { value: "2★", label: "CodeChef Star", sublabel: "Rated Contestant" }
  ],

  interests: [
    {
      title: "Web Development",
      icon: "code",
      desc: "Building scalable full-stack applications with MERN (React.js, Node.js, Express, MongoDB). Experienced in RESTful API design, state management, RBAC authorization, JWT authentication, and database indexing for high-performance web systems."
    },
    {
      title: "AI & Computer Vision",
      icon: "eye",
      desc: "Developing real-time computer vision and deep learning pipelines with OpenCV DNN and TensorFlow. Skilled in CNN architectures, demographic attribute classification, image preprocessing, frame-rate optimization, and LLM API integrations."
    },
    {
      title: "Cloud & DevOps",
      icon: "cloud",
      desc: "Hands-on experience with AWS Cloud infrastructure (EC2, S3, IAM), Linux/Red Hat system administration, shell scripting, and containerization with Docker. Proven leadership conducting technical cloud workshops at SAIT WCE."
    },
    {
      title: "Software Engineering",
      icon: "git-branch",
      desc: "Strong core foundations in Data Structures & Algorithms, Object-Oriented Design (OOP), SOLID principles, and DBMS schema normalization (ACID). Focused on writing clean, modular, and maintainable production-grade code."
    }
  ],

  experience: [
    {
      role: "Assistant Web Developer",
      organization: "SAIT, WCE (Students' Association of Information Technology)",
      period: "2025 – 2026",
      location: "Sangli, Maharashtra",
      badge: "Positions of Responsibility",
      points: [
        "Spearheaded and organized an intra-club competitive programming contest for 40+ students, designing algorithmic challenges and mentoring peers on data structures and efficient coding practices.",
        "Conducted an interactive technical workshop on AWS Cloud Fundamentals, introducing 50+ attendees to cloud infrastructure, core services (EC2, S3, IAM), and scalable deployment workflows.",
        "Collaborated on designing and maintaining departmental web platforms, ensuring high responsiveness, modern UI standards, and seamless student event registration flows."
      ]
    }
  ],

  skills: {
    categories: [
      {
        id: "languages",
        title: "Languages",
        icon: "code",
        items: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"]
      },
      {
        id: "frontend",
        title: "Frontend Development",
        icon: "layout",
        items: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Vite", "Responsive UI"]
      },
      {
        id: "backend",
        title: "Backend & APIs",
        icon: "server",
        items: ["Node.js", "Express.js", "Django", "FastAPI", "RESTful APIs", "JWT Authentication"]
      },
      {
        id: "databases",
        title: "Databases",
        icon: "database",
        items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase Firestore", "Firebase Realtime DB"]
      },
      {
        id: "aiml",
        title: "AI & Data Science",
        icon: "sparkles",
        items: ["OpenCV", "OpenCV DNN", "TensorFlow", "Deep Learning (CNNs)", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "Gemini AI API"]
      },
      {
        id: "cloud",
        title: "Cloud & DevOps",
        icon: "cloud",
        items: ["AWS (EC2, S3, IAM)", "Docker", "Linux / Red Hat", "CI/CD Pipelines", "Vercel", "Render", "Nginx"]
      },
      {
        id: "core",
        title: "Core CS",
        icon: "cpu",
        items: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Computer Networks", "Operating Systems", "Software Engineering"]
      },
      {
        id: "tools",
        title: "Tools & Platforms",
        icon: "tool",
        items: ["Git", "GitHub", "Android Studio", "Postman", "VS Code", "Cloudinary"]
      }
    ]
  },

  projects: [
    {
      id: "prescripto",
      title: "Prescripto – Doctor Appointment & Healthcare Platform",
      category: "Full-Stack Web",
      status: "Featured",
      role: "Lead Full-Stack Developer • 2025 – 2026",
      desc: "A full-stack healthcare platform with Patient, Doctor, and Admin portals, secure JWT authentication, digital prescriptions, and Gemini AI assistant.",
      overview: "Prescripto is a comprehensive healthcare appointment and clinical platform engineered to streamline scheduling and medical administration. Features dedicated secured portals for Patients, Doctors, and Administrators with strict JWT authentication, role-based access control, digital prescriptions, reviews/ratings, and Cloudinary image persistence, integrated with Gemini AI and deployed on Vercel, Render, and MongoDB Atlas.",
      qualifications: [
        "Built a full-stack healthcare platform with Patient, Doctor, and Admin portals, secure JWT authentication, appointment booking, and role-based access.",
        "Implemented digital prescriptions, reviews/ratings, doctor availability, and Cloudinary image uploads with MongoDB persistence.",
        "Integrated a project-aware Gemini AI assistant and deployed the platform using Vercel, Render, and MongoDB Atlas."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Gemini AI", "Tailwind CSS"],
      githubUrl: "https://github.com/shreyash-bobalade",
      liveUrl: "https://github.com/shreyash-bobalade",
      badgeColor: "#00F0FF"
    },
    {
      id: "age-gender-detection",
      title: "Real-Time Age & Gender Detection System",
      category: "Machine Learning & AI",
      status: "Featured",
      role: "AI & Computer Vision Engineer • 2025",
      desc: "A real-time deep learning computer vision system for face, age, and gender detection using webcam and image preprocessing.",
      overview: "High-performance computer vision system utilizing OpenCV DNN and TensorFlow deep learning models to detect human faces and predict demographic attributes in real-time. Features robust frame-by-frame preprocessing and optimized video stream inference.",
      qualifications: [
        "Built a real-time system for face, age, and gender detection using webcam and images.",
        "Implemented image preprocessing and deep-learning inference with OpenCV DNN and TensorFlow models.",
        "Optimized frame processing for fast real-time predictions and visualization."
      ],
      techStack: ["Python", "OpenCV", "OpenCV DNN", "TensorFlow", "NumPy", "Deep Learning", "Computer Vision"],
      githubUrl: "https://github.com/shreyash-bobalade",
      liveUrl: "https://github.com/shreyash-bobalade",
      badgeColor: "#0072FF"
    },
    {
      id: "smart-expense-tracker",
      title: "Smart Expense Tracker Mobile App",
      category: "Mobile & IoT",
      status: "Completed",
      role: "Android Mobile Developer • 2024 – 2025",
      desc: "A native Android mobile application to record, categorize, and manage personal expenses with real-time cloud synchronization.",
      overview: "A native Android mobile application with Material Design UI engineered for personal finance tracking. Supports zero-latency synchronization with Firebase Realtime Database, robust offline SQLite caching, automatic expense categorization, and interactive monthly analytics breakdowns.",
      qualifications: [
        "Built a native Android app in Java following clean MVC patterns and Material Design guidelines.",
        "Integrated Firebase Realtime Database for zero-latency cloud sync, multi-device access, and offline persistence.",
        "Implemented CRUD operations for transactions, automated balance calculation, and category-wise expense breakdowns.",
        "Added transaction history filtering, search capabilities, and spending threshold alerts for financial tracking."
      ],
      techStack: ["Java", "Android SDK", "Firebase Realtime DB", "XML UI", "Material Design", "Android Studio"],
      githubUrl: "https://github.com/shreyash-bobalade",
      liveUrl: "https://github.com/shreyash-bobalade",
      badgeColor: "#10B981"
    },
    {
      id: "campus-connect",
      title: "Campus Connect Platform",
      category: "Full-Stack Web",
      status: "Active",
      role: "Full-Stack Developer • 2025",
      desc: "A centralized digital portal for university clubs, event registration workflows, announcements, and student participation tracking.",
      overview: "A centralized digital community portal for technical clubs, departmental bulletins, event registration workflows, and live participation tracking at Walchand College of Engineering. Features dynamic role management, ticketing pass generation, and administrative approvals.",
      qualifications: [
        "Designed student and organizer flows for club announcements, registrations, and participation tracking.",
        "Implemented administrative approval workflows for campus activities and automated registration counters.",
        "Created a responsive announcement feed with fast search and category filtering.",
        "Architected RESTful API endpoints with Express and MongoDB with indexing for fast student record lookups."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/shreyash-bobalade",
      liveUrl: "https://github.com/shreyash-bobalade",
      badgeColor: "#00F0FF"
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot",
      category: "Machine Learning & AI",
      status: "Completed",
      role: "ML Developer • 2025",
      desc: "An intelligent conversational chatbot trained to comprehend user intentions, classify queries, and generate dynamic responses in real-time.",
      overview: "An intelligent conversational chatbot trained to comprehend user intentions, classify input queries, and generate dynamic responses in real-time.",
      qualifications: [
        "Constructed NLP text processing pipeline for intent recognition and query classification.",
        "Implemented lightweight response dispatching with fast inference time.",
        "Built fallback handlers to gracefully handle ambiguous or unrecognized inputs.",
        "Embedded into an interactive web chat widget for user engagement."
      ],
      techStack: ["Python", "NLP", "Scikit-Learn", "Flask", "JavaScript"],
      githubUrl: "https://github.com/shreyash-bobalade",
      liveUrl: "https://github.com/shreyash-bobalade",
      badgeColor: "#0072FF"
    },
    {
      id: "github-clone",
      title: "Version Control System (GitHub Clone)",
      category: "Full-Stack Web",
      status: "Completed",
      role: "Full-Stack Developer • 2025",
      desc: "Full-stack version control and repository management platform simulating Git workflows, commit histories, branching, and code exploration.",
      overview: "A full-stack version control and repository hosting platform inspired by GitHub. Implements core VCS mechanics including repository initialization, staging area simulation, cryptographic commit hashing (SHA), commit tree traversal, file diffing, and user repository management with an intuitive modern developer UI.",
      qualifications: [
        "Engineered a full-stack repository management platform simulating Git architecture, cryptographic commit hashing, and staged changes.",
        "Implemented commit tree generation, branch tracking, file version history diffing, and directory explorer navigation.",
        "Architected secure user authentication, repository access control, and dynamic repository search and statistics.",
        "Designed a high-performance responsive developer dashboard with dark mode, markdown rendering, and syntax-highlighted code viewer."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Git Concepts", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/shreyash-bobalade",
      liveUrl: "https://github.com/shreyash-bobalade",
      badgeColor: "#8B5CF6"
    }
  ],

  education: [
    {
      institution: "Walchand College of Engineering, Sangli (Shivaji University)",
      degree: "B.Tech, Information Technology",
      period: "2024 – 2028",
      grade: "8.1 (till 4th Sem)",
      details: ""
    },
    {
      institution: "Ligadi-Patil Jr. College of Science, (Maharashtra Board)",
      degree: "Senior Secondary (Class XII) — MHT-CET & JEE Examination",
      period: "2022 – 2024",
      grade: "80.17% || 98.67 (MHT-CET) || 88.32 (JEE)",
      details: ""
    },
    {
      institution: "Maharashtra State Board (SSC)",
      degree: "Secondary School Certificate (Class X)",
      period: "2021 – 2022",
      grade: "90.20%",
      details: ""
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "Red Hat Certified — Linux Fundamentals",
      desc: "Certified in Linux fundamentals, shell scripting, permissions, and system administration.",
      badge: "Certified",
      icon: "shield"
    },
    {
      id: "ach-2",
      title: "HackerRank Certified — Problem Solving",
      desc: "Verified skill certificate demonstrating proficiency in algorithms, data structures, and computational problem solving.",
      badge: "Certified",
      icon: "hackerrank"
    },
    {
      id: "ach-3",
      title: "AWS Cloud Workshop Speaker",
      desc: "Delivered an official departmental technical workshop on AWS Cloud fundamentals at SAIT WCE.",
      badge: "Technical Speaker",
      icon: "cloud"
    },
    {
      id: "ach-4",
      title: "40+ CP Event Lead",
      desc: "Organized and mentored a 40+ student competitive programming contest at SAIT WCE.",
      badge: "Leadership",
      icon: "award"
    }
  ],

  profiles: [
    {
      platform: "GitHub",
      handle: "shreyash-sb",
      url: "https://github.com/shreyash-sb",
      badge: "Repositories",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      handle: "shreyash-bobalade",
      url: "https://www.linkedin.com/in/shreyash-bobalade",
      badge: "Professional",
      icon: "linkedin"
    },
    {
      platform: "LeetCode",
      handle: "Shreyash1_6",
      url: "https://leetcode.com/u/Shreyash1_6/",
      badge: "300+ Solved",
      icon: "code"
    },
    {
      platform: "CodeChef",
      handle: "shreyash_61",
      url: "https://www.codechef.com/users/shreyash_61",
      badge: "2★ Rated",
      icon: "star"
    },
    {
      platform: "HackerRank",
      handle: "shreyash_sb",
      url: "https://www.hackerrank.com/profile/shreyash_16",
      badge: "Problem Solving",
      icon: "hackerrank"
    }
  ],

  contact: {
    title: "Let's build something together.",
    subtitle: "I am open to SDE Internships, Full-Stack development roles, and collaborative engineering projects.",
    email: "shreyashbobalade2006@gmail.com",
    phone: "+91 9322782746",
    linkedin: "https://www.linkedin.com/in/shreyash-bobalade",
    github: "https://github.com/shreyash-sb",
    location: "Sangli / Solapur, Maharashtra, India",
    options: [
      "SDE Internship",
      "Full-Stack Development Role",
      "AIML Role",
      "Android Development Role",
      "Project Collaboration"
    ]
  }
};
