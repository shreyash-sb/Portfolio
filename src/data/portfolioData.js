export const initialPortfolioData = {
  personal: {
    name: "Shreyash Bobalade",
    role: "Software Engineer & AIML Engineer",
    title: "Information Technology",
    college: "Walchand College of Engineering, Sangli (Shivaji University)",
    degree: "B.Tech in Information Technology (2024 – 2028)",
    cgpa: "7.69 / 10.0 (till 4th Sem)",
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
    { value: "7.69", label: "B.Tech CGPA", sublabel: "WCE Sangli (till 4th Sem)" },
    { value: "9+", label: "Core Projects", sublabel: "Full-Stack, AIML, Systems" },
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
      id: "apiforge",
      title: "APIForge – AI-Powered API Testing & Mocking Platform",
      category: "Full-Stack Web",
      status: "Featured",
      role: "Lead Full-Stack Developer • 2026",
      desc: "An intelligent API development, automated testing, and mocking platform powered by AI with dynamic payload synthesis and real-time schema validation.",
      overview: "APIForge is an AI-powered API development, testing, and mocking platform designed to accelerate backend engineering workflows. It provides intelligent payload synthesis, automated mock server generation, schema validation, and real-time request simulation with deep performance and response inspection.",
      qualifications: [
        "Engineered a full-stack platform for API testing, mock endpoint generation, and real-time request-response simulation.",
        "Built AI-powered payload synthesis and validation engines to automate edge-case discovery and schema compliance testing.",
        "Implemented dynamic route mocking with customizable response latency, status code simulation, and header overrides.",
        "Designed a responsive developer dashboard in TypeScript and React featuring syntax-highlighted JSON viewers and collection export."
      ],
      techStack: ["TypeScript", "React.js", "Node.js", "Express.js", "AI/LLM APIs", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/shreyash-sb/APIForge",
      liveUrl: "https://github.com/shreyash-sb/APIForge",
      badgeColor: "#00F0FF"
    },
    {
      id: "hexoai",
      title: "HexoAI – Autonomous AI Agent powered by Google Gemini",
      category: "Machine Learning & AI",
      status: "Featured",
      role: "AI & Systems Developer • 2026",
      desc: "Next-generation autonomous AI agent system powered by Google Gemini, capable of multi-step task planning, dynamic tool calling, and automated execution.",
      overview: "HexoAI is an advanced autonomous AI agent system engineered using Google Gemini APIs and modern agentic architectures. Features goal decomposition, dynamic tool orchestration, contextual memory retention, and automated execution pipelines for complex web and developer tasks.",
      qualifications: [
        "Architected an autonomous agent pipeline leveraging Google Gemini models for multi-step reasoning and dynamic tool execution.",
        "Implemented structured function-calling mechanisms, contextual conversation memory, and recursive error-recovery loops.",
        "Built real-time agent execution visualizer showcasing step-by-step thinking, tool invocations, and response distillation.",
        "Optimized latency and token consumption through intelligent context pruning and prompt caching."
      ],
      techStack: ["JavaScript", "Node.js", "Google Gemini API", "LLM Agents", "Web APIs", "AI Orchestration"],
      githubUrl: "https://github.com/shreyash-sb/HexoAI",
      liveUrl: "https://github.com/shreyash-sb/HexoAI",
      badgeColor: "#8B5CF6"
    },
    {
      id: "devforge",
      title: "DevForge – Version Control & Collaborative Code Platform",
      category: "Full-Stack Web",
      status: "Featured",
      role: "Full-Stack Developer • 2025 – 2026",
      desc: "A software development platform for managing code repositories, branches, cryptographic commit histories, and collaborative team workflows.",
      overview: "DevForge is a full-stack version control and repository management platform inspired by GitHub. It simulates Git core semantics including repository initialization, staging mechanisms, cryptographic commit hashing (SHA), commit tree DAG visualization, file diffing, and user repository management with a modern dark developer UI.",
      qualifications: [
        "Engineered repository management architecture simulating Git VCS workflows, cryptographic commit hashing, and staged changes.",
        "Implemented commit tree generation, branch tracking, file version history diffing, and directory explorer navigation.",
        "Architected secure user authentication, repository access control, and dynamic repository search and statistics.",
        "Designed a high-performance responsive developer dashboard with dark mode, markdown rendering, and syntax-highlighted code viewer."
      ],
      techStack: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Git Architecture", "Tailwind CSS"],
      githubUrl: "https://github.com/shreyash-sb/DevForge",
      liveUrl: "https://github.com/shreyash-sb/DevForge",
      badgeColor: "#38BDF8"
    },
    {
      id: "streamly",
      title: "Streamly – Real-Time Live Video & Streaming Platform",
      category: "Full-Stack Web",
      status: "Completed",
      role: "Real-Time & Full-Stack Developer • 2025",
      desc: "Real-time media communication and video streaming platform combining peer-to-peer WebRTC video feeds, low-latency signaling, and interactive conversations.",
      overview: "Streamly is a modern video streaming and real-time communication platform engineered for low-latency live video feeds, conference rooms, and interactive messaging. Employs WebRTC peer-to-peer protocols and WebSockets signaling for seamless audio/video transmission across browsers without third-party plugins.",
      qualifications: [
        "Engineered real-time video streaming architecture using WebRTC peer-to-peer audio/video streaming and media constraints.",
        "Implemented low-latency WebSockets signaling server for instant room creation, SDP handshake, and ICE candidate negotiation.",
        "Built interactive in-call chat channels, screen sharing capabilities, and dynamic grid layouts for multi-participant rooms.",
        "Optimized bitrate handling, camera/mic toggle controls, and responsive video player containers across viewports."
      ],
      techStack: ["JavaScript", "WebRTC", "WebSockets", "Node.js", "Express.js", "React.js", "HTML5 Media"],
      githubUrl: "https://github.com/shreyash-sb/Streamly",
      liveUrl: "https://github.com/shreyash-sb/Streamly",
      badgeColor: "#EF4444"
    },
    {
      id: "prescripto",
      title: "Prescripto – Doctor Appointment & Healthcare Platform",
      category: "Full-Stack Web",
      status: "Completed",
      role: "Lead Full-Stack Developer • 2025 – 2026",
      desc: "A full-stack healthcare platform with Patient, Doctor, and Admin portals, secure JWT authentication, digital prescriptions, and Gemini AI assistant.",
      overview: "Prescripto is a comprehensive healthcare appointment and clinical platform engineered to streamline scheduling and medical administration. Features dedicated secured portals for Patients, Doctors, and Administrators with strict JWT authentication, role-based access control, digital prescriptions, reviews/ratings, and Cloudinary image persistence, integrated with Gemini AI and deployed on Vercel, Render, and MongoDB Atlas.",
      qualifications: [
        "Built a full-stack healthcare platform with Patient, Doctor, and Admin portals, secure JWT authentication, appointment booking, and role-based access.",
        "Implemented digital prescriptions, reviews/ratings, doctor availability, and Cloudinary image uploads with MongoDB persistence.",
        "Integrated a project-aware Gemini AI assistant and deployed the platform using Vercel, Render, and MongoDB Atlas.",
        "Engineered responsive appointment scheduling workflows with automated status transitions (Booked, Completed, Cancelled)."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Gemini AI", "Tailwind CSS"],
      githubUrl: "https://github.com/shreyash-sb/prescripto",
      liveUrl: "https://github.com/shreyash-sb/prescripto",
      badgeColor: "#00F0FF"
    },
    {
      id: "proconnect",
      title: "ProConnect – Professional Networking & Career Discovery Platform",
      category: "Full-Stack Web",
      status: "Completed",
      role: "Full-Stack Developer • 2025",
      desc: "A platform for building professional relationships, showcasing verified technical skills, networking with peers, and discovering career opportunities.",
      overview: "ProConnect is a LinkedIn-inspired professional networking and career platform engineered to connect students, developers, and industry professionals. Features personalized profile portfolios, skill endorsements, activity feeds, connection requests, and dynamic career opportunity listings.",
      qualifications: [
        "Designed and implemented full-stack social networking architecture with user authentication, profile customization, and experience timelines.",
        "Engineered bidirectional connection request workflows, follower counters, and interactive post feeds with likes and comments.",
        "Built career discovery and job listing modules with keyword search, role filtering, and one-click application tracking.",
        "Developed normalized MongoDB schemas with optimized indexing for low-latency network feed queries and profile lookups."
      ],
      techStack: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/shreyash-sb/ProConnect",
      liveUrl: "https://github.com/shreyash-sb/ProConnect",
      badgeColor: "#0072FF"
    },
    {
      id: "finora",
      title: "Finora – Premium Financial & Wealth Management Platform",
      category: "Full-Stack Web",
      status: "Completed",
      role: "Full-Stack Developer • 2025",
      desc: "A modern financial intelligence platform to track multi-account cashflows, monitor investment budgets, and generate visual wealth analytics.",
      overview: "Finora is a premium personal finance and wealth management web platform designed to give individuals clear insights into their financial health. Delivers real-time expense classification, automated budget threshold alerts, monthly cashflow analytics, and interactive data visualization charts.",
      qualifications: [
        "Architected financial tracking engine supporting multi-account income/expense logging, category tagging, and recurring budgets.",
        "Built interactive financial analytics dashboards featuring income vs expense charts, category distributions, and monthly trends.",
        "Implemented dynamic budget threshold alerts and automated summary metrics for net savings and liquidity.",
        "Engineered a polished, responsive user interface with glassmorphism aesthetics, dark mode, and seamless transaction filtering."
      ],
      techStack: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS"],
      githubUrl: "https://github.com/shreyash-sb/Finora",
      liveUrl: "https://github.com/shreyash-sb/Finora",
      badgeColor: "#10B981"
    },
    {
      id: "age-gender-detection",
      title: "Real-Time Age & Gender Detection System",
      category: "Machine Learning & AI",
      status: "Completed",
      role: "Computer Vision & AI Engineer • 2025",
      desc: "A Deep Learning-based computer vision application that detects faces and predicts age groups and gender from live webcam streams using OpenCV DNN.",
      overview: "A high-performance computer vision system utilizing OpenCV DNN and pre-trained Caffe deep learning models to detect human faces and predict demographic attributes in real-time. Features robust frame-by-frame preprocessing, confidence thresholding, and optimized video stream inference.",
      qualifications: [
        "Built a real-time computer vision pipeline for facial detection, age estimation, and gender classification from webcam streams and images.",
        "Integrated OpenCV DNN module with pre-trained Caffe deep learning architectures for fast inference without heavy GPU dependencies.",
        "Implemented frame preprocessing, blob generation, confidence threshold filtering, and bounding box overlay rendering.",
        "Optimized multi-threaded frame processing loop to maintain steady real-time frame rates during live video analysis."
      ],
      techStack: ["Python", "OpenCV", "OpenCV DNN", "Deep Learning", "Caffe Models", "NumPy", "Computer Vision"],
      githubUrl: "https://github.com/shreyash-sb/Age-Gender-Detection-OpenCV",
      liveUrl: "https://github.com/shreyash-sb/Age-Gender-Detection-OpenCV",
      badgeColor: "#0072FF"
    },
    {
      id: "smart-expense-tracker",
      title: "Smart Expense Tracker – Android Mobile App",
      category: "Mobile & IoT",
      status: "Completed",
      role: "Android Mobile Developer • 2024 – 2025",
      desc: "Native Android application built with Java, XML & Firebase to record, categorize, and manage personal expenses with real-time cloud synchronization.",
      overview: "Smart Expense Tracker is a native Android mobile application with Material Design UI engineered for personal finance tracking. Supports zero-latency synchronization with Firebase Realtime Database, robust offline SQLite caching, automatic expense categorization, and interactive monthly analytics breakdowns.",
      qualifications: [
        "Built a native Android application in Java following clean MVC architectural patterns and Material Design guidelines in Android Studio.",
        "Integrated Firebase Realtime Database for zero-latency cloud sync, multi-device access, and offline data persistence.",
        "Implemented full CRUD operations for income/expense records, automated balance calculations, and category-wise breakdowns.",
        "Added transaction history filtering, date range queries, and spending threshold alerts for active financial management."
      ],
      techStack: ["Java", "Android SDK", "Firebase Realtime DB", "XML UI", "Material Design", "Android Studio"],
      githubUrl: "https://github.com/shreyash-sb/Smart-Expense-Tracker",
      liveUrl: "https://github.com/shreyash-sb/Smart-Expense-Tracker",
      badgeColor: "#10B981"
    }
  ],

  education: [
    {
      institution: "Walchand College of Engineering, Sangli (Shivaji University)",
      degree: "B.Tech, Information Technology",
      period: "2024 – 2028",
      grade: "7.69 (till 4th Sem)",
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
