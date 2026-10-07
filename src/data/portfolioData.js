export const initialPortfolioData = {
  personal: {
    name: "Shreyash Bobalade",
    role: "Full-Stack Developer & Problem Solver",
    title: "Information Technology",
    college: "Walchand College of Engineering, Sangli (Shivaji University)",
    degree: "B.Tech in Information Technology (2024 – 2028)",
    cgpa: "7.69 / 10.0 (till 4th Sem)",
    location: "Sangli / Solapur, Maharashtra, India",
    email: "shreyashbobalade2006@gmail.com",
    phone: "+91 9322782746",
    whatsapp: "https://wa.me/919322782746",
    status: "Open to Internships",
    bio: "Information Technology undergraduate with strong foundations in software engineering, DSA, OOP, and DBMS. Experienced in developing full-stack applications, backend APIs, Android applications, and AI-based solutions. Interested in building scalable, efficient, and reliable software systems.",
    subBio: "Passionate about engineering scalable web platforms, backend APIs, and computer vision systems. Competitive programmer with 300+ problems solved across LeetCode and CodeChef. Actively seeking Summer 2026 software engineering internships and collaborative opportunities.",
    github: "https://github.com/shreyash-bobalade",
    linkedin: "https://www.linkedin.com/in/shreyash-bobalade",
    leetcode: "https://leetcode.com/shreyash_codes",
    codechef: "https://www.codechef.com/users/shreyash_ccf"
  },

  stats: [
    { value: "300+", label: "Problems Solved", sublabel: "LeetCode & CodeChef" },
    { value: "2★", label: "CodeChef Star", sublabel: "Rated Contestant" },
    { value: "7.69", label: "B.Tech CGPA", sublabel: "WCE Sangli (till 4th Sem)" },
    { value: "12+", label: "Core Projects", sublabel: "Full-Stack, Vision, Mobile" }
  ],

  interests: [
    {
      title: "Web Development",
      icon: "code",
      desc: "Architecting modern, interactive, and responsive web platforms using React, Node.js, Express, MongoDB, and secure JWT authorization."
    },
    {
      title: "AI & Computer Vision",
      icon: "eye",
      desc: "Engineering real-time vision pipelines with OpenCV DNN, deep learning classifiers, and demographic attribute estimation models."
    },
    {
      title: "Mobile App Engineering",
      icon: "smartphone",
      desc: "Developing native Android applications in Java with Material Design, offline persistence, and zero-latency Firebase sync."
    },
    {
      title: "Algorithmic Problem Solving",
      icon: "cpu",
      desc: "Strong computer science fundamentals with 300+ problems solved across data structures, dynamic programming, and graph algorithms."
    },
    {
      title: "Cloud & DevOps",
      icon: "cloud",
      desc: "Conducted technical workshops on AWS Cloud fundamentals (EC2, S3, IAM) and hands-on system administration on Linux/Red Hat."
    },
    {
      title: "Software Engineering",
      icon: "git-branch",
      desc: "Studying scalable system patterns, modular REST architectures, and object-oriented design to craft clean, maintainable code."
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
        "Led an intra-club competitive programming event for 40+ students, promoting problem-solving and coding skills.",
        "Organized and delivered a technical session on AWS Cloud Services, introducing cloud fundamentals and real-world applications."
      ]
    }
  ],

  skills: {
    categories: [
      {
        id: "languages",
        title: "Languages",
        icon: "code",
        items: ["C", "C++", "Java", "Python", "JavaScript", "SQL"]
      },
      {
        id: "frontend",
        title: "Frontend",
        icon: "layout",
        items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
      },
      {
        id: "backend",
        title: "Backend & APIs",
        icon: "server",
        items: ["Node.js", "Express.js", "Django", "FastAPI", "REST APIs", "JWT Authentication"]
      },
      {
        id: "databases",
        title: "Databases",
        icon: "database",
        items: ["MongoDB", "MySQL", "Firebase Firestore"]
      },
      {
        id: "aiml",
        title: "AI & Data Science",
        icon: "sparkles",
        items: ["OpenCV", "TensorFlow", "NumPy", "Pandas", "Matplotlib"]
      },
      {
        id: "core",
        title: "Core CS",
        icon: "cpu",
        items: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks", "Software Engineering"]
      },
      {
        id: "tools",
        title: "Tools & Platforms",
        icon: "tool",
        items: ["Git", "GitHub", "Android Studio", "Cloudinary", "Docker", "Postman", "Vercel", "Render"]
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
      id: "interviewforge",
      title: "InterviewForge",
      category: "Machine Learning & AI",
      status: "Active",
      role: "AI & Full Stack Developer • 2025",
      desc: "AI-powered interview preparation platform generating personalized technical & behavioral questions, simulating sessions, and providing readiness feedback.",
      overview: "InterviewForge is an AI-powered interview preparation platform designed to help students and job seekers practice for technical and behavioral interviews. It generates personalized interview questions based on job roles, simulates realistic interview sessions, and provides structured AI-driven feedback and answer readiness scoring.",
      qualifications: [
        "Engineered role-specific AI prompt pipelines to dynamically generate tailored technical, behavioral, and algorithmic interview questions.",
        "Built an automated evaluation engine analyzing user answers for clarity, technical depth, and actionable improvement recommendations.",
        "Designed a responsive and accessible user interface for seamless session simulation and history tracking.",
        "Integrated secure API communication flows with low-latency response streaming for real-time practice."
      ],
      techStack: ["Python", "AI/LLM APIs", "Web Technologies", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/shreyash-bobalade",
      liveUrl: "https://github.com/shreyash-bobalade",
      badgeColor: "#38BDF8"
    },
    {
      id: "research-agent",
      title: "Research Agent",
      category: "Machine Learning & AI",
      status: "Completed",
      role: "AI & Python Developer • 2025",
      desc: "AI-driven research assistant designed to explore complex topics, retrieve relevant information, and generate structured research briefs.",
      overview: "An AI-powered autonomous research assistant designed to help users explore complex subjects, discover relevant information, and synthesize comprehensive, structured research responses through conversational AI workflows.",
      qualifications: [
        "Integrated AI/LLM APIs with information retrieval mechanisms to automate knowledge synthesis and topic exploration.",
        "Architected structured distillation workflows that transform multi-source findings into concise, readable briefs.",
        "Implemented a dynamic conversational interface for interactive multi-turn exploration and query refinement.",
        "Built error-handling routines for reliable query resolution and high response quality."
      ],
      techStack: ["Python", "AI/LLM APIs", "Web Technologies", "NLP", "JSON/REST"],
      githubUrl: "https://github.com/shreyash-bobalade",
      liveUrl: "https://github.com/shreyash-bobalade",
      badgeColor: "#818CF8"
    },
    {
      id: "nosy-neighbor",
      title: "Nosy Neighbor (Smart Security)",
      category: "Mobile & IoT",
      status: "Completed",
      role: "Lead Vision Developer • 2025",
      desc: "A smart home security monitor designed to capture camera feeds in real-time, stream video with low latency, and trigger instant safety notifications.",
      overview: "A smart home security and surveillance monitor designed to detect anomalies, capture camera feeds in real-time, stream video with low latency, and trigger instant safety notifications.",
      qualifications: [
        "Implemented computer vision motion detection algorithms to identify visual anomalies in live feeds.",
        "Configured video streaming pipeline with low latency for continuous surveillance.",
        "Integrated automated security alert dispatching and snapshot logging upon trigger events.",
        "Engineered a responsive dashboard interface for monitoring feeds across viewports."
      ],
      techStack: ["Python", "Flask", "OpenCV", "WebSockets", "HTML5", "CSS3"],
      githubUrl: "https://github.com/shreyash-bobalade",
      liveUrl: "https://github.com/shreyash-bobalade",
      badgeColor: "#00F0FF"
    },
    {
      id: "jarvis",
      title: "Jarvis (Virtual Assistant)",
      category: "Machine Learning & AI",
      status: "Completed",
      role: "AI & Python Developer • 2024 – 2025",
      desc: "A Python voice assistant that automates local operations, runs web searches, and processes desktop instructions hands-free.",
      overview: "A Python voice assistant that automates local operations, runs web searches, and processes desktop instructions hands-free through speech recognition and voice synthesis.",
      qualifications: [
        "Built natural speech-to-text processing for accurate command interpretation and speech feedback.",
        "Automated system operations including launching applications, executing file commands, and opening web URLs.",
        "Integrated dynamic query routing for quick Wikipedia, web search, and calculation answers.",
        "Created modular command handler structure to easily register new voice skills."
      ],
      techStack: ["Python", "SpeechRecognition", "Pyttsx3", "OS Automation"],
      githubUrl: "https://github.com/shreyash-bobalade",
      liveUrl: "https://github.com/shreyash-bobalade",
      badgeColor: "#38BDF8"
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
      id: "iot-water-sensor",
      title: "IoT Based Water Sensor",
      category: "Mobile & IoT",
      status: "Completed",
      role: "IoT & Hardware Developer • 2024",
      desc: "An automated IoT device measuring water reservoir levels and transmitting live telemetry metrics to prevent overflow and conserve resources.",
      overview: "An automated IoT device measuring water reservoir levels and transmitting live telemetry metrics to prevent overflow and conserve resources.",
      qualifications: [
        "Calibrated ultrasonic distance sensors for accurate water volume percentage calculations.",
        "Implemented threshold-triggered alerts and safety alarms when reservoir levels cross safe limits.",
        "Streamed live sensor metrics to cloud IoT endpoints for remote monitoring.",
        "Engineered reliable microcontroller firmware for continuous hardware uptime."
      ],
      techStack: ["C / C++", "Arduino / ESP32", "Ultrasonic Sensors", "IoT Cloud"],
      githubUrl: "https://github.com/shreyash-bobalade",
      liveUrl: "https://github.com/shreyash-bobalade",
      badgeColor: "#10B981"
    },
    {
      id: "amazon-clone",
      title: "Amazon Clone",
      category: "Full-Stack Web",
      status: "Completed",
      role: "Frontend Developer • 2025",
      desc: "Responsive e-commerce web application inspired by Amazon with product listings, multi-level navigation, and shopping cart layouts.",
      overview: "A responsive e-commerce web application inspired by Amazon, built to practice modern web development and user interface design principles. The project includes rich product listings, multi-level navigation, shopping layouts, and seamless responsiveness across devices.",
      qualifications: [
        "Constructed a high-fidelity Amazon-inspired layout featuring category banners, product grids, and header search navigation.",
        "Implemented client-side interactivity including cart state updates, dynamic pricing calculations, and responsive menus.",
        "Optimized mobile-first CSS architecture with fluid typography, responsive flexbox, and CSS grid layouts.",
        "Ensured clean semantic HTML5 markup and cross-browser consistency."
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/shreyash-bobalade",
      liveUrl: "https://github.com/shreyash-bobalade",
      badgeColor: "#F59E0B"
    },
    {
      id: "snake-water-gun",
      title: "Snake Water Gun Game",
      category: "Python & Games",
      status: "Completed",
      role: "Python Developer • 2024",
      desc: "Interactive game implementing classic Snake-Water-Gun game logic, random computer choices, score tracking, and result calculations.",
      overview: "A simple interactive game based on the classic Snake-Water-Gun concept. The project implements core game logic, user input handling, random computer choices, and result calculations with engaging user feedback.",
      qualifications: [
        "Engineered clean conditional game logic and random selection algorithms in Python.",
        "Implemented user input validation, round score tracking, and end-of-game summary statistics.",
        "Structured reusable function modules for game loops, win/loss evaluation, and replay choices.",
        "Designed clear and interactive feedback prompts for enjoyable gameplay sessions."
      ],
      techStack: ["Python", "Game Logic", "CLI / GUI", "Random Algorithms"],
      githubUrl: "https://github.com/shreyash-bobalade",
      liveUrl: "https://github.com/shreyash-bobalade",
      badgeColor: "#10B981"
    }
  ],

  education: [
    {
      institution: "Walchand College of Engineering, Sangli (Shivaji University)",
      degree: "B.Tech, Information Technology",
      period: "2024 – 2028",
      grade: "7.69 (till 4th Sem)",
      details: "Premier engineering institute affiliated with Shivaji University. Deep foundations in Data Structures & Algorithms, OOP, DBMS, Computer Networks, and Software Engineering."
    },
    {
      institution: "Ligadi-Patil Jr. College of Science, (Maharashtra Board)",
      degree: "Senior Secondary (Class XII) — MHT-CET & JEE Examination",
      period: "2022 – 2024",
      grade: "80.17% || 98.67 (MHT-CET) || 88.32 (JEE)",
      details: "Top 1.33 percentile in Maharashtra State Engineering Entrance Examination (MHT-CET: 98.67%ile, JEE: 88.32%ile). Strong foundations in Mathematics, Physics, and analytical logic."
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "300+ Problems Solved",
      desc: "Solved 300+ algorithmic challenges across LeetCode, CodeChef, and GeeksforGeeks.",
      badge: "Algorithmic Mastery",
      icon: "zap"
    },
    {
      id: "ach-2",
      title: "2★ CodeChef Rated Competitor",
      desc: "Active competitive programmer with 2-Star contest rating on CodeChef.",
      badge: "Global Contests",
      icon: "star"
    },
    {
      id: "ach-3",
      title: "98.67%ile in MHT-CET",
      desc: "Scored 98.67 percentile in Maharashtra State Engineering Entrance Examination (Top 1.33% statewide).",
      badge: "State Distinction",
      icon: "target"
    },
    {
      id: "ach-4",
      title: "AWS Cloud Workshop Speaker",
      desc: "Delivered an official departmental technical workshop on AWS Cloud fundamentals at SAIT WCE.",
      badge: "Technical Speaker",
      icon: "cloud"
    },
    {
      id: "ach-5",
      title: "40+ CP Event Lead",
      desc: "Organized and mentored a 40+ student competitive programming contest at SAIT WCE.",
      badge: "Leadership",
      icon: "award"
    },
    {
      id: "ach-6",
      title: "Red Hat Certified — Linux Fundamentals",
      desc: "Certified in Linux fundamentals, shell scripting, permissions, and system administration.",
      badge: "Certified",
      icon: "shield"
    }
  ],

  profiles: [
    {
      platform: "GitHub",
      handle: "shreyash-bobalade",
      url: "https://github.com/shreyash-bobalade",
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
      handle: "shreyash_codes",
      url: "https://leetcode.com/shreyash_codes",
      badge: "300+ Solved",
      icon: "code"
    },
    {
      platform: "CodeChef",
      handle: "shreyash_ccf",
      url: "https://www.codechef.com/users/shreyash_ccf",
      badge: "2★ Rated",
      icon: "star"
    }
  ],

  contact: {
    title: "Let's build something together.",
    subtitle: "I am open to Summer 2026 SDE Internships, Full-Stack development roles, and collaborative engineering projects.",
    email: "shreyashbobalade2006@gmail.com",
    phone: "+91 9322782746",
    linkedin: "https://www.linkedin.com/in/shreyash-bobalade",
    github: "https://github.com/shreyash-bobalade",
    location: "Sangli / Solapur, Maharashtra, India",
    options: [
      "Summer 2026 SDE Internship",
      "Full-Stack Web Development Role",
      "AI / Computer Vision Collaboration",
      "Android Application Project",
      "Technical Mentorship / Project Inquiry"
    ]
  }
};
