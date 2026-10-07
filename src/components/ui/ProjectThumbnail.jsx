import React from "react";

export function ProjectSvgThumbnail({ projectId, title }) {
  switch (projectId) {
    case "doctor-appointment":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="medGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="100%" stopColor="#1C2541" />
            </linearGradient>
            <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="100%" stopColor="#0072FF" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" fill="url(#medGrad)" />
          <rect x="70" y="45" width="260" height="150" rx="14" fill="rgba(15, 23, 42, 0.7)" stroke="#00F0FF" strokeWidth="1.5" />
          <line x1="70" y1="80" x2="330" y2="80" stroke="rgba(0, 240, 255, 0.25)" strokeWidth="1.5" />
          <circle cx="95" cy="62" r="4" fill="#00F0FF" />
          <circle cx="115" cy="62" r="4" fill="#38BDF8" />
          <rect x="188" y="100" width="24" height="60" rx="4" fill="url(#cyanLine)" />
          <rect x="170" y="118" width="60" height="24" rx="4" fill="url(#cyanLine)" />
          <path d="M90,150 L140,150 L155,120 L165,165 L175,135 L185,150 L310,150" fill="none" stroke="#00F0FF" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="200" cy="130" r="45" fill="none" stroke="rgba(0, 240, 255, 0.2)" strokeDasharray="6 4" />
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );

    case "age-gender-detection":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#090D16" />
              <stop offset="100%" stopColor="#151A2E" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" fill="url(#aiGrad)" />
          <rect x="130" y="38" width="140" height="140" rx="20" fill="none" stroke="#0072FF" strokeWidth="2" strokeDasharray="8 4" />
          <circle cx="200" cy="98" r="46" fill="none" stroke="#00F0FF" strokeWidth="2" />
          <circle cx="185" cy="90" r="5" fill="#00F0FF" />
          <circle cx="215" cy="90" r="5" fill="#00F0FF" />
          <path d="M190,115 Q200,126 210,115" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M120,48 L120,38 L130,38 M270,38 L280,38 L280,48 M120,168 L120,178 L130,178 M270,178 L280,178 L280,168" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" />
          <rect x="80" y="55" width="45" height="18" rx="5" fill="rgba(0, 240, 255, 0.15)" stroke="#00F0FF" strokeWidth="1" />
          <text x="102" y="67" textAnchor="middle" fill="#00F0FF" fontSize="10" fontFamily="Outfit">Male</text>
          <rect x="275" y="55" width="55" height="18" rx="5" fill="rgba(0, 114, 255, 0.2)" stroke="#0072FF" strokeWidth="1" />
          <text x="302" y="67" textAnchor="middle" fill="#38BDF8" fontSize="10" fontFamily="Outfit">Age: 20-25</text>
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );

    case "smart-expense-tracker":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#0B1322" />
          <rect x="145" y="25" width="110" height="165" rx="18" fill="rgba(15, 23, 42, 0.85)" stroke="#10B981" strokeWidth="2" />
          <rect x="180" y="32" width="40" height="5" rx="2.5" fill="#334155" />
          <path d="M160,140 L180,115 L200,125 L225,85 L240,100" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="225" cy="85" r="4" fill="#00F0FF" />
          <rect x="155" y="50" width="90" height="26" rx="6" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="1" />
          <text x="200" y="67" textAnchor="middle" fill="#10B981" fontSize="11" fontFamily="Outfit" fontWeight="700">₹ 14,850.00</text>
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );

    case "campus-connect":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#090E1D" />
          <circle cx="200" cy="95" r="28" fill="rgba(0, 240, 255, 0.15)" stroke="#00F0FF" strokeWidth="2" />
          <circle cx="200" cy="95" r="12" fill="#00F0FF" />
          <circle cx="125" cy="70" r="16" fill="rgba(0, 114, 255, 0.2)" stroke="#0072FF" strokeWidth="1.5" />
          <circle cx="275" cy="70" r="16" fill="rgba(0, 114, 255, 0.2)" stroke="#0072FF" strokeWidth="1.5" />
          <circle cx="140" cy="140" r="16" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="1.5" />
          <circle cx="260" cy="140" r="16" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="1.5" />
          <line x1="200" y1="95" x2="125" y2="70" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1.5" strokeDasharray="4 2" />
          <line x1="200" y1="95" x2="275" y2="70" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1.5" strokeDasharray="4 2" />
          <line x1="200" y1="95" x2="140" y2="140" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1.5" strokeDasharray="4 2" />
          <line x1="200" y1="95" x2="260" y2="140" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );

    case "interviewforge":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#0A0E1A" />
          <circle cx="200" cy="98" r="44" fill="none" stroke="#00F0FF" strokeWidth="2.5" />
          <circle cx="200" cy="98" r="28" fill="none" stroke="#0072FF" strokeWidth="2" strokeDasharray="6 3" />
          <circle cx="200" cy="98" r="12" fill="#00F0FF" />
          <path d="M150,60 L135,60 L135,75 M250,60 L265,60 L265,75 M150,140 L135,140 L135,125 M250,140 L265,140 L265,125" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );

    case "research-agent":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#090D16" />
          <circle cx="185" cy="92" r="38" fill="none" stroke="#00F0FF" strokeWidth="3" />
          <line x1="212" y1="119" x2="245" y2="152" stroke="#0072FF" strokeWidth="4" strokeLinecap="round" />
          <circle cx="185" cy="92" r="14" fill="#0072FF" opacity="0.4" />
          <circle cx="140" cy="65" r="4" fill="#38BDF8" />
          <circle cx="230" cy="60" r="4" fill="#00F0FF" />
          <line x1="140" y1="65" x2="160" y2="78" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="230" y1="60" x2="205" y2="75" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );

    case "nosy-neighbor":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#0F172A" />
          <circle cx="200" cy="100" r="42" fill="none" stroke="#00F0FF" strokeWidth="3" />
          <circle cx="200" cy="100" r="16" fill="#0072FF" />
          <line x1="200" y1="20" x2="200" y2="55" stroke="#38BDF8" strokeWidth="2" />
          <line x1="200" y1="145" x2="200" y2="180" stroke="#38BDF8" strokeWidth="2" />
          <line x1="120" y1="100" x2="155" y2="100" stroke="#38BDF8" strokeWidth="2" />
          <line x1="245" y1="100" x2="280" y2="100" stroke="#38BDF8" strokeWidth="2" />
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );

    case "jarvis":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#0F172A" />
          <circle cx="200" cy="100" r="48" fill="none" stroke="#0072FF" strokeWidth="2" />
          <circle cx="200" cy="100" r="36" fill="none" stroke="#00F0FF" strokeWidth="3.5" strokeDasharray="10 5" />
          <circle cx="200" cy="100" r="10" fill="#00F0FF" />
          <path d="M150,100 L170,100 M230,100 L250,100 M200,55 L200,75 M200,125 L200,145" stroke="#38BDF8" strokeWidth="2" />
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );

    case "ai-chatbot":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#0F172A" />
          <rect x="135" y="60" width="130" height="75" rx="14" fill="none" stroke="#00F0FF" strokeWidth="2.5" />
          <circle cx="170" cy="95" r="9" fill="#0072FF" />
          <circle cx="230" cy="95" r="9" fill="#0072FF" />
          <path d="M180,120 Q200,132 220,120" fill="none" stroke="#00F0FF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="200" y1="35" x2="200" y2="60" stroke="#00F0FF" strokeWidth="2.5" />
          <circle cx="200" cy="30" r="6" fill="#0072FF" />
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );

    case "iot-water-sensor":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#0F172A" />
          <path d="M200,45 C155,100 155,145 200,165 C245,145 245,100 200,45 Z" fill="none" stroke="#00F0FF" strokeWidth="2.5" />
          <path d="M200,85 C175,115 175,140 200,155 C225,140 225,115 200,85 Z" fill="#0072FF" opacity="0.6" />
          <path d="M115,85 A 18,18 0 0,1 150,85" fill="none" stroke="#38BDF8" strokeWidth="2" />
          <path d="M250,85 A 18,18 0 0,1 285,85" fill="none" stroke="#38BDF8" strokeWidth="2" />
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );

    case "amazon-clone":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#0F172A" />
          <rect x="110" y="50" width="180" height="100" rx="10" fill="none" stroke="#00F0FF" strokeWidth="2.5" />
          <line x1="110" y1="78" x2="290" y2="78" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="1.5" />
          <circle cx="130" cy="64" r="4" fill="#00F0FF" />
          <circle cx="145" cy="64" r="4" fill="#38BDF8" />
          <path d="M150,110 C180,130 220,130 250,110" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" />
          <polygon points="252,108 245,105 248,114" fill="#FF9900" />
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );

    case "snake-water-gun":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#090D16" />
          <circle cx="200" cy="100" r="42" fill="none" stroke="#00F0FF" strokeWidth="2.5" />
          <path d="M175,90 Q190,75 200,90 T225,90" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
          <circle cx="170" cy="120" r="7" fill="#0072FF" />
          <circle cx="230" cy="120" r="7" fill="#38BDF8" />
          <line x1="160" y1="100" x2="240" y2="100" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1.5" />
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );

    default:
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#090D16" />
          <circle cx="200" cy="100" r="42" fill="none" stroke="#00F0FF" strokeWidth="2.5" />
          <circle cx="200" cy="100" r="24" fill="none" stroke="#0072FF" strokeWidth="2" strokeDasharray="6 3" />
          <circle cx="200" cy="100" r="10" fill="#00F0FF" />
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );
  }
}
