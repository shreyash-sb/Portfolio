import React from "react";

export function ProjectSvgThumbnail({ projectId, title }) {
  switch (projectId) {
    case "apiforge":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="apiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B0F19" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" fill="url(#apiGrad)" />
          {/* Mock API Request Window */}
          <rect x="65" y="35" width="270" height="150" rx="12" fill="rgba(15, 23, 42, 0.85)" stroke="#00F0FF" strokeWidth="1.5" />
          <line x1="65" y1="65" x2="335" y2="65" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1" />
          {/* Window controls */}
          <circle cx="85" cy="50" r="4" fill="#EF4444" />
          <circle cx="98" cy="50" r="4" fill="#F59E0B" />
          <circle cx="111" cy="50" r="4" fill="#10B981" />
          {/* HTTP Method Tag */}
          <rect x="75" y="78" width="46" height="20" rx="4" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="1" />
          <text x="98" y="92" textAnchor="middle" fill="#10B981" fontSize="10" fontFamily="Outfit" fontWeight="700">POST</text>
          <text x="130" y="92" fill="#E2E8F0" fontSize="11" fontFamily="Outfit" fontWeight="500">/api/v1/mock/predict</text>
          {/* Status 200 pill */}
          <rect x="270" y="78" width="55" height="20" rx="4" fill="rgba(0, 240, 255, 0.15)" stroke="#00F0FF" strokeWidth="1" />
          <text x="297" y="92" textAnchor="middle" fill="#00F0FF" fontSize="10" fontFamily="Outfit" fontWeight="700">200 OK</text>
          {/* JSON Body lines */}
          <text x="80" y="122" fill="#8B5CF6" fontSize="11" fontFamily="Courier, monospace">&#123; &quot;status&quot;: &quot;success&quot;,</text>
          <text x="90" y="140" fill="#38BDF8" fontSize="11" fontFamily="Courier, monospace">&quot;ai_mock&quot;: true, &quot;latency&quot;: &quot;12ms&quot; &#125;</text>
          <path d="M280,145 L320,145 M300,125 L300,165" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" strokeDasharray="2 2" />
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );

    case "hexoai":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hexoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B0E14" />
              <stop offset="100%" stopColor="#1A1528" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" fill="url(#hexoGrad)" />
          {/* Hexagon Nodes & Agent Loop */}
          <polygon points="200,45 250,75 250,135 200,165 150,135 150,75" fill="rgba(139, 92, 246, 0.1)" stroke="#8B5CF6" strokeWidth="2" />
          <polygon points="200,65 230,85 230,125 200,145 170,125 170,85" fill="none" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="4 3" />
          {/* Gemini AI Core */}
          <circle cx="200" cy="105" r="14" fill="#8B5CF6" />
          <circle cx="200" cy="105" r="26" fill="none" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="200" cy="45" r="5" fill="#00F0FF" />
          <circle cx="250" cy="75" r="5" fill="#38BDF8" />
          <circle cx="250" cy="135" r="5" fill="#A855F7" />
          <circle cx="200" cy="165" r="5" fill="#00F0FF" />
          <circle cx="150" cy="135" r="5" fill="#A855F7" />
          <circle cx="150" cy="75" r="5" fill="#38BDF8" />
          {/* Badge */}
          <rect x="145" y="172" width="110" height="20" rx="10" fill="rgba(0, 240, 255, 0.1)" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="1" />
          <text x="200" y="186" textAnchor="middle" fill="#00F0FF" fontSize="9" fontFamily="Outfit" fontWeight="600" letterSpacing="0.8">
            GEMINI AGENT
          </text>
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );

    case "devforge":
    case "github-clone":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#0D1117" />
          {/* Main branch line */}
          <line x1="100" y1="95" x2="300" y2="95" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
          {/* Feature branch curve */}
          <path d="M 140,95 C 160,55 200,55 220,55 L 250,55 C 270,55 280,75 290,95" fill="none" stroke="#A855F7" strokeWidth="2.5" strokeDasharray="3 3" />
          {/* Main branch commits */}
          <circle cx="110" cy="95" r="7" fill="#0D1117" stroke="#38BDF8" strokeWidth="3" />
          <circle cx="160" cy="95" r="7" fill="#0D1117" stroke="#38BDF8" strokeWidth="3" />
          <circle cx="230" cy="95" r="7" fill="#0D1117" stroke="#38BDF8" strokeWidth="3" />
          <circle cx="290" cy="95" r="7" fill="#38BDF8" />
          {/* Feature branch commits */}
          <circle cx="180" cy="55" r="6" fill="#0D1117" stroke="#A855F7" strokeWidth="2.5" />
          <circle cx="235" cy="55" r="6" fill="#A855F7" />
          {/* Git branch icon badge / pill */}
          <rect x="145" y="125" width="110" height="26" rx="13" fill="rgba(56, 189, 248, 0.1)" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
          <text x="200" y="142" dominantBaseline="middle" textAnchor="middle" fill="#38BDF8" fontFamily="Outfit" fontWeight="600" fontSize="11" letterSpacing="0.5">
            main • 4 commits
          </text>
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );

    case "streamly":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B1120" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" fill="url(#streamGrad)" />
          {/* Video Frame */}
          <rect x="80" y="40" width="240" height="140" rx="14" fill="rgba(15, 23, 42, 0.85)" stroke="#00F0FF" strokeWidth="1.5" />
          {/* Camera / Streaming Lens */}
          <circle cx="180" cy="105" r="32" fill="none" stroke="#00F0FF" strokeWidth="2" />
          <circle cx="180" cy="105" r="16" fill="#0072FF" />
          <polygon points="215,95 240,80 240,130 215,115" fill="#00F0FF" opacity="0.8" />
          {/* Live broadcast waves */}
          <path d="M 248,90 A 20,20 0 0,1 248,120" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <path d="M 258,82 A 32,32 0 0,1 258,128" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          {/* REC / LIVE badge */}
          <rect x="95" y="52" width="58" height="18" rx="4" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" strokeWidth="1" />
          <circle cx="106" cy="61" r="3.5" fill="#EF4444" />
          <text x="128" y="65" textAnchor="middle" fill="#EF4444" fontSize="9" fontFamily="Outfit" fontWeight="700">LIVE</text>
          <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#E2E8F0" fontFamily="Outfit" fontWeight="600" fontSize="15">
            {title}
          </text>
        </svg>
      );

    case "prescripto":
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

    case "proconnect":
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

    case "finora":
      return (
        <svg className="project-svg-thumb" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="finGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B1322" />
              <stop offset="100%" stopColor="#111C30" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" fill="url(#finGrad)" />
          {/* Wealth Card & Chart */}
          <rect x="70" y="40" width="260" height="140" rx="14" fill="rgba(15, 23, 42, 0.85)" stroke="#10B981" strokeWidth="1.5" />
          {/* Header pill */}
          <rect x="85" y="55" width="105" height="26" rx="6" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="1" />
          <text x="137" y="72" textAnchor="middle" fill="#10B981" fontSize="11" fontFamily="Outfit" fontWeight="700">₹ 2,48,500.00</text>
          {/* Chart lines */}
          <path d="M 85,150 L 125,135 L 165,145 L 205,110 L 245,120 L 285,80 L 315,95" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="285" cy="80" r="4.5" fill="#00F0FF" />
          <line x1="285" y1="80" x2="285" y2="160" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
          {/* Bars */}
          <rect x="110" y="155" width="10" height="15" rx="2" fill="rgba(16, 185, 129, 0.3)" />
          <rect x="150" y="148" width="10" height="22" rx="2" fill="rgba(16, 185, 129, 0.3)" />
          <rect x="190" y="130" width="10" height="40" rx="2" fill="rgba(16, 185, 129, 0.4)" />
          <rect x="230" y="140" width="10" height="30" rx="2" fill="rgba(16, 185, 129, 0.4)" />
          <rect x="270" y="110" width="10" height="60" rx="2" fill="rgba(0, 240, 255, 0.5)" />
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
