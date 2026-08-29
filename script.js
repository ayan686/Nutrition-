/* ==========================================================================
   NUTRIMAA AI — CORE APPLICATION SCRIPT
   React 18 Production Bundle | Team NEXORA
   ========================================================================== */

const { useState, useEffect, useRef, useMemo, createElement: h, Fragment } = React;

// --------------------------------------------------------------------------
// 1. BRAND LOGO SVG COMPONENT
// --------------------------------------------------------------------------
function BrandLogoSvg({ size = 24 }) {
  return h('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  },
    h('path', {
      d: 'M12 21.5s-8-4.8-10.3-9.9C-0.3 7.8 1.5 4.2 5.2 3.4c2.2-.4 4.3.4 5.6 2.2.1.2.4.2.5 0 1.3-1.8 3.4-2.6 5.6-2.2 3.7.8 5.5 4.4 4.2 7.9-2.3 5.1-10.3 9.9-10.3 9.9Z',
      fill: 'currentColor',
      fillOpacity: '0.2'
    }),
    h('path', {
      d: 'M12 21.5s-8-4.8-10.3-9.9C-0.3 7.8 1.5 4.2 5.2 3.4c2.2-.4 4.3.4 5.6 2.2.1.2.4.2.5 0 1.3-1.8 3.4-2.6 5.6-2.2 3.7.8 5.5 4.4 4.2 7.9-2.3 5.1-10.3 9.9-10.3 9.9Z',
      stroke: 'currentColor',
      strokeWidth: '1.8',
      strokeLinejoin: 'round'
    }),
    h('path', {
      d: 'M12 13.5c0-3.3 1-5.1 2.8-6.3M12 13.5c1.8.3 3.6-.2 4.4-1.9M12 13.5c0-2.2-1.1-3.5-3-4.3',
      stroke: 'currentColor',
      strokeWidth: '1.6',
      strokeLinecap: 'round'
    })
  );
}

// --------------------------------------------------------------------------
// 2. FOOD DATABASE (TRADITIONAL & EVERYDAY NUTRITION WITH LOCAL NAMES)
// --------------------------------------------------------------------------
const FOOD_DATABASE = [
  {
    id: 'spinach',
    name: 'Spinach (Palak)',
    localName: 'पालक / পালং শাক',
    category: 'Vegetable',
    calories: '23 kcal',
    protein: '2.9 g',
    iron: '3.6 mg',
    calcium: '99 mg',
    folate: '194 mcg',
    cost: '₹15 / bunch',
    affordability: 'High',
    bioTip: 'Pair with Vitamin C (lemon juice) to triple non-heme iron absorption.'
  },
  {
    id: 'moringa',
    name: 'Moringa Leaves (Sahjan)',
    localName: 'सहजन / সজনে পাতা',
    category: 'Vegetable',
    calories: '64 kcal',
    protein: '9.4 g',
    iron: '4.0 mg',
    calcium: '185 mg',
    folate: '40 mcg',
    cost: '₹10 / portion',
    affordability: 'Very High',
    bioTip: 'Super-dense in micronutrients, excellent for lactating mothers.'
  },
  {
    id: 'ragi',
    name: 'Finger Millet (Ragi)',
    localName: 'रागी / মড়ুয়া',
    category: 'Millets',
    calories: '328 kcal',
    protein: '7.3 g',
    iron: '3.9 mg',
    calcium: '344 mg',
    folate: '18 mcg',
    cost: '₹45 / kg',
    affordability: 'High',
    bioTip: 'Highest plant calcium source. Ideal for weaning infants & maternal bone density.'
  },
  {
    id: 'lentils',
    name: 'Yellow Moong Dal',
    localName: 'मूंग दाल / মুগ ডাল',
    category: 'Legumes',
    calories: '105 kcal',
    protein: '7.0 g',
    iron: '1.4 mg',
    calcium: '27 mg',
    folate: '159 mcg',
    cost: '₹120 / kg',
    affordability: 'Moderate',
    bioTip: 'Easily digestible protein for pregnant women and young children.'
  },
  {
    id: 'chana',
    name: 'Roasted Bengal Gram',
    localName: 'भुना चना / ছোলা ভাজা',
    category: 'Legumes',
    calories: '360 kcal',
    protein: '18.6 g',
    iron: '5.3 mg',
    calcium: '58 mg',
    folate: '180 mcg',
    cost: '₹90 / kg',
    affordability: 'High',
    bioTip: 'Convenient high-protein snack paired with jaggery for anemia prevention.'
  },
  {
    id: 'jaggery',
    name: 'Organic Jaggery (Gud)',
    localName: 'गुड़ / গুড়',
    category: 'Sweets',
    calories: '383 kcal',
    protein: '0.4 g',
    iron: '11.0 mg',
    calcium: '80 mg',
    folate: '0 mcg',
    cost: '₹60 / kg',
    affordability: 'High',
    bioTip: 'Natural iron booster, replaces refined sugar in maternal diet.'
  },
  {
    id: 'eggs',
    name: 'Boiled Egg (Whole)',
    localName: 'अंडा / ডিম',
    category: 'Protein',
    calories: '78 kcal',
    protein: '6.3 g',
    iron: '1.2 mg',
    calcium: '28 mg',
    folate: '22 mcg',
    cost: '₹7 / egg',
    affordability: 'High',
    bioTip: 'Contains choline for fetal brain development & complete amino acid profile.'
  },
  {
    id: 'paneer',
    name: 'Fresh Paneer (Cottage Cheese)',
    localName: 'पनीर / ছানা',
    category: 'Dairy',
    calories: '265 kcal',
    protein: '18.3 g',
    iron: '0.2 mg',
    calcium: '480 mg',
    folate: '12 mcg',
    cost: '₹90 / 200g',
    affordability: 'Moderate',
    bioTip: 'Rich in bioavailable calcium and healthy fats for third trimester weight gain.'
  }
];

// --------------------------------------------------------------------------
// 3. DICTIONARY FOR MULTILINGUAL SUPPORT (EN, HI, BN)
// --------------------------------------------------------------------------
const I18N = {
  en: {
    heroEyebrow: "AI-POWERED NUTRITION & MATERNAL-CHILD HEALTH",
    heroTitle1: "Empowering Every Mother.",
    heroTitle2: "Nourishing Every Child.",
    heroSub: "NutriMaa AI uses artificial intelligence to provide personalized nutrition guidance, monitor maternal and child health, identify nutrition risks early, and support healthcare workers with actionable insights.",
    startAssessment: "Start Assessment",
    explorePlatform: "Explore Platform",
    pitchDeck: "Pitch Deck",
    problemHeading: "Nutrition should not depend on guesswork.",
    solutionHeading: "From reactive healthcare to proactive nutrition intelligence.",
    nutritionIntelligence: "Nutrition Intelligence",
    whoItServes: "Who It Serves",
    maternalHealth: "Maternal Health Module",
    childGrowth: "Child Growth Module",
    recommendationEngine: "Nutrition Recommendation Engine",
    aiAssistant: "AI Chat Assistant",
    foodVision: "AI Food Recognition",
    riskPrediction: "Malnutrition Risk Prediction",
    offlineSync: "Offline-First Sync",
    impact: "Technology with a Human Purpose",
    whyNutrimaa: "Why NutriMaa AI?",
    trustSafety: "Trust, Safety & Privacy",
    finalVision: "No mother left without nutrition guidance. No child left without a chance to grow.",
    disclaimer: "NutriMaa AI is designed to support nutrition education, screening and monitoring. It does not replace qualified healthcare professionals or emergency medical care."
  },
  hi: {
    heroEyebrow: "एआई-संचालित पोषण एवं मातृ-शिशु स्वास्थ्य",
    heroTitle1: "हर मां को सशक्त बनाना।",
    heroTitle2: "हर बच्चे को सुपोषित करना।",
    heroSub: "NutriMaa AI कृत्रिम बुद्धिमत्ता के माध्यम से व्यक्तिगत पोषण मार्गदर्शन, मातृ एवं शिशु स्वास्थ्य निगरानी, पोषण संबंधी जोखिमों की प्रारंभिक पहचान और स्वास्थ्य कार्यकर्ताओं को व्यावहारिक अंतर्दृष्टि प्रदान करता है।",
    startAssessment: "आकलन शुरू करें",
    explorePlatform: "मंच देखें",
    pitchDeck: "पिच डेक",
    problemHeading: "पोषण किसी अनुमान पर निर्भर नहीं होना चाहिए।",
    solutionHeading: "सक्रिय पोषण बुद्धिमत्ता से सुरक्षित भविष्य।",
    nutritionIntelligence: "पोषण बुद्धिमत्ता",
    whoItServes: "किसके लिए उपयोगी है",
    maternalHealth: "मातृ स्वास्थ्य मॉड्यूल",
    childGrowth: "शिशु विकास मॉड्यूल",
    recommendationEngine: "पोषण सिफारिश इंजन",
    aiAssistant: "एआई सहायक (चैट)",
    foodVision: "एआई भोजन पहचान",
    riskPrediction: "कुपोषण जोखिम भविष्यवाणी",
    offlineSync: "ऑफलाइन सिंक",
    impact: "मानवीय उद्देश्य के साथ तकनीक",
    whyNutrimaa: "NutriMaa AI क्यों?",
    trustSafety: "विश्वास, सुरक्षा और गोपनीयता",
    finalVision: "कोई मां पोषण मार्गदर्शन से वंचित न रहे। कोई बच्चा बढ़ने के अवसर से पीछे न छूटे।",
    disclaimer: "NutriMaa AI पोषण शिक्षा, स्क्रीनिंग और निगरानी का समर्थन करता है। यह योग्य स्वास्थ्य पेशेवरों या आपातकालीन चिकित्सा का विकल्प नहीं है।"
  },
  bn: {
    heroEyebrow: "এআই-চালিত পুষ্টি ও মাতৃ-শিশু স্বাস্থ্য",
    heroTitle1: "প্রতিটি মাকে ক্ষমতায়ন।",
    heroTitle2: "প্রতিটি শিশুকে পুষ্টিকর সূচনা।",
    heroSub: "NutriMaa AI কৃত্রিম বুদ্ধিমত্তার মাধ্যমে ব্যক্তিগতকৃত পুষ্টি নির্দেশিকা, মাতৃ ও শিশু স্বাস্থ্য পর্যবেক্ষণ এবং স্বাস্থ্যকর্মীদের রিয়েল-টাইম তথ্য প্রদান করে।",
    startAssessment: "অ্যাসেসমেন্ট শুরু করুন",
    explorePlatform: "প্ল্যাটফর্ম দেখুন",
    pitchDeck: "পিচ ডেক",
    problemHeading: "পুষ্টি কখনো অনুমানের ওপর নির্ভর করা উচিত নয়।",
    solutionHeading: "সক্রিয় পুষ্টি বুদ্ধিমত্তার মাধ্যমে নিরাপদ ভবিষ্যৎ।",
    nutritionIntelligence: "পুষ্টি বুদ্ধিমত্তা",
    whoItServes: "কাদের জন্য উপযোগী",
    maternalHealth: "মাতৃ স্বাস্থ্য মডিউল",
    childGrowth: "শিশু বিকাশ মডিউল",
    recommendationEngine: "পুষ্টি সুপারিশ ইঞ্জিন",
    aiAssistant: "এআই সহকারী",
    foodVision: "এআই খাদ্য শনাক্তকরণ",
    riskPrediction: "অপুষ্টি ঝুঁকি পূর্বাভাস",
    offlineSync: "অফলাইন সিঙ্ক",
    impact: "মানবিক উদ্দেশ্যে প্রযুক্তি",
    whyNutrimaa: "কেন NutriMaa AI?",
    trustSafety: "বিশ্বাস, সুরক্ষা ও গোপনীয়তা",
    finalVision: "কোনো মা যেন পুষ্টি নির্দেশিকা থেকে বঞ্চিত না হন। কোনো শিশু যেন বেড়ে ওঠার সুযোগ না হারায়।",
    disclaimer: "NutriMaa AI পুষ্টি শিক্ষা ও স্ক্রীনিংয়ের জন্য তৈরি। এটি চিকিৎসকদের পরামর্শ বা জরুরি সেবার বিকল্প নয়।"
  }
};

// --------------------------------------------------------------------------
// 4. MAIN APP COMPONENT
// --------------------------------------------------------------------------
function NutriMaaApp() {
  // Navigation & Language
  const [lang, setLang] = useState('en');
  const t = I18N[lang];

  // Loading Sequence State
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loadPhase, setLoadPhase] = useState('AI INITIALIZING');

  // Interactive Modals
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [pitchDeckOpen, setPitchDeckOpen] = useState(false);
  const [chatModalOpen, setChatModalOpen] = useState(false);

  // Hero OS Dashboard Active Tab
  const [heroDashTab, setHeroDashTab] = useState('maternal');

  // Maternal Health Interactive States
  const [maternalWeek, setMaternalWeek] = useState(24);
  const [maternalHb, setMaternalHb] = useState(11.4);
  const [maternalWeight, setMaternalWeight] = useState(58);
  const [maternalWater, setMaternalWater] = useState(2.4);

  // Child Growth Interactive States
  const [childAgeMonths, setChildAgeMonths] = useState(18);
  const [childHeight, setChildHeight] = useState(82.5);
  const [childWeight, setChildWeight] = useState(11.2);

  // Food Matrix Filters
  const [foodSearch, setFoodSearch] = useState('');
  const [foodCategory, setFoodCategory] = useState('All');

  // Computer Vision Scanner State
  const [selectedScanPreset, setSelectedScanPreset] = useState('palak_paneer');
  const [isScanningFood, setIsScanningFood] = useState(false);

  // ML Risk Engine States
  const [riskHb, setRiskHb] = useState(10.8);
  const [riskDietScore, setRiskDietScore] = useState(7);
  const [riskGestationalAge, setRiskGestationalAge] = useState(28);
  const [riskSocioIndex, setRiskSocioIndex] = useState(6);

  // Offline Sync Simulator State
  const [isNetworkOnline, setIsNetworkOnline] = useState(true);
  const [queuedOfflineRecords, setQueuedOfflineRecords] = useState(3);
  const [isSyncing, setIsSyncing] = useState(false);

  // AI Chat Messages & Speech
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'ai',
      text: "Namaste! I am NutriMaa AI Copilot. How can I assist with your maternal nutrition, child growth, or diet planning today?"
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [isListeningVoice, setIsListeningVoice] = useState(false);

  // Immunization Schedule Status
  const [vaccineStates, setVaccineStates] = useState({
    bcg: true,
    opv0: true,
    penta1: true,
    rota1: true,
    penta2: true,
    mr1: false,
    vita: false
  });

  // ------------------------------------------------------------------------
  // XAMPUS-INSPIRED MULTI-PHASE INTRO LOADING SEQUENCE (1.5 - 2.0s)
  // ------------------------------------------------------------------------
  useEffect(() => {
    // Check if session flag is set
    const hasSeenIntro = sessionStorage.getItem('nutrimaa_intro_seen');
    if (hasSeenIntro) {
      setLoadingComplete(true);
      return;
    }

    const interval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoadingComplete(true);
            sessionStorage.setItem('nutrimaa_intro_seen', 'true');
          }, 400);
          return 100;
        }

        const next = prev + 4;
        if (next < 25) setLoadPhase('AI INITIALIZING');
        else if (next < 60) setLoadPhase('NUTRITION ENGINE');
        else if (next < 90) setLoadPhase('HEALTH INTELLIGENCE');
        else setLoadPhase('READY');

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Ambient Particle Canvas Animation
  useEffect(() => {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 160, ${p.alpha})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // ------------------------------------------------------------------------
  // COMPUTED ML RISK SCORE (Random Forest / XGBoost Ensemble Simulation)
  // ------------------------------------------------------------------------
  const calculatedRiskScore = useMemo(() => {
    let score = 20;
    if (riskHb < 9.0) score += 45;
    else if (riskHb < 11.0) score += 25;
    else if (riskHb < 12.0) score += 8;

    if (riskDietScore < 4) score += 30;
    else if (riskDietScore < 7) score += 15;

    if (riskGestationalAge > 36) score += 10;
    if (riskSocioIndex < 4) score += 18;

    return Math.min(Math.max(score, 8), 96);
  }, [riskHb, riskDietScore, riskGestationalAge, riskSocioIndex]);

  const riskCategory = calculatedRiskScore > 65 ? 'High Risk' : calculatedRiskScore > 35 ? 'Moderate Risk' : 'Low Risk';
  const riskClass = calculatedRiskScore > 65 ? 'high' : calculatedRiskScore > 35 ? 'moderate' : 'low';

  // ------------------------------------------------------------------------
  // AI CHAT HANDLER WITH SPEECH SYNTHESIS & RECOGNITION
  // ------------------------------------------------------------------------
  const handleSendMessage = (textToSend) => {
    const query = textToSend || chatInput;
    if (!query.trim()) return;

    const newMsgs = [...chatMessages, { sender: 'user', text: query }];
    setChatMessages(newMsgs);
    setChatInput('');
    setIsAiTyping(true);

    setTimeout(() => {
      let reply = "NutriMaa AI recommends incorporating iron-rich local greens like Spinach (Palak) or Moringa leaves paired with Vitamin C (lemon juice) to enhance absorption. Maintain adequate hydration of 2.5L daily.";
      const lower = query.toLowerCase();

      if (lower.includes('anemia') || lower.includes('iron') || lower.includes('hemoglobin') || lower.includes('खून')) {
        reply = "For improving hemoglobin, pair roasted chana with jaggery (gud) and consume green leafy vegetables. Avoid drinking tea or coffee within 1 hour of meals as tannins inhibit iron absorption.";
      } else if (lower.includes('underweight') || lower.includes('weight') || lower.includes('growth') || lower.includes('वजन')) {
        reply = "For healthy child growth, introduce energy-dense foods like Ragi porridge with milk, mashed boiled eggs, and lentil-khichdi with a teaspoon of ghee. Track height-for-age monthly.";
      } else if (lower.includes('cost') || lower.includes('affordable') || lower.includes('cheap') || lower.includes('सस्ता')) {
        reply = "Top affordable nutrient powerhouses under ₹30/portion: Drumstick/Moringa leaves (High Calcium & Iron), Roasted Chana (High Protein), Banana (Potassium & Energy), and Moong Dal.";
      }

      setChatMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
      setIsAiTyping(false);

      // Web Speech Synthesis (Realistic AI Voice Simulation)
      if ('speechSynthesis' in window) {
        const utter = new SpeechSynthesisUtterance(reply);
        utter.rate = 1.0;
        utter.pitch = 1.05;
        window.speechSynthesis.speak(utter);
      }
    }, 900);
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert("Speech recognition is supported in modern Chrome, Edge, and Safari browsers.");
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = lang === 'hi' ? 'hi-IN' : lang === 'bn' ? 'bn-BD' : 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => setIsListeningVoice(true);
    recognition.onend = () => setIsListeningVoice(false);
    recognition.onerror = () => setIsListeningVoice(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setChatInput(transcript);
      handleSendMessage(transcript);
    };

    recognition.start();
  };

  // ------------------------------------------------------------------------
  // OFFLINE SYNC TOGGLE
  // ------------------------------------------------------------------------
  const handleNetworkToggle = () => {
    if (!isNetworkOnline) {
      setIsNetworkOnline(true);
      setIsSyncing(true);
      setTimeout(() => {
        setQueuedOfflineRecords(0);
        setIsSyncing(false);
      }, 1400);
    } else {
      setIsNetworkOnline(false);
      setQueuedOfflineRecords((prev) => prev + 1);
    }
  };

  // ------------------------------------------------------------------------
  // FILTERED FOOD DATABASE
  // ------------------------------------------------------------------------
  const filteredFoods = useMemo(() => {
    return FOOD_DATABASE.filter((food) => {
      const matchesSearch = food.name.toLowerCase().includes(foodSearch.toLowerCase()) ||
        food.localName.toLowerCase().includes(foodSearch.toLowerCase()) ||
        food.category.toLowerCase().includes(foodSearch.toLowerCase());
      const matchesCat = foodCategory === 'All' || food.category === foodCategory;
      return matchesSearch && matchesCat;
    });
  }, [foodSearch, foodCategory]);

  return (
    h('div', { className: 'app-root' },
      // --------------------------------------------------------------------
      // A. INTRO LOADER OVERLAY
      // --------------------------------------------------------------------
      h('div', {
        className: `loader-overlay ${loadingComplete ? 'fade-out' : ''}`
      },
        h('div', { className: 'loader-content' },
          h('div', { className: 'loader-logo-ring' },
            h('div', { className: 'loader-spinner' }),
            h(BrandLogoSvg, { size: 36 })
          ),
          h('h1', { className: 'loader-title gradient-mint-text' }, 'NUTRIMAA AI'),
          h('p', { className: 'loader-tagline' }, 'Empowering Every Mother, Nourishing Every Child'),
          h('div', { className: 'loader-phase-tag' }, loadPhase),
          h('div', { className: 'loader-progress-track' },
            h('div', {
              className: 'loader-progress-bar',
              style: { width: `${loadProgress}%` }
            })
          ),
          h('div', { className: 'loader-percentage' }, `${loadProgress}%`),
          h('button', {
            className: 'loader-skip',
            onClick: () => {
              setLoadingComplete(true);
              sessionStorage.setItem('nutrimaa_intro_seen', 'true');
            }
          }, 'Skip Intro →')
        )
      ),

      // --------------------------------------------------------------------
      // B. TOP STICKY HEADER
      // --------------------------------------------------------------------
      h('header', { className: 'site-header' },
        h('div', {
          className: 'brand-wrapper',
          onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' })
        },
          h('div', { className: 'brand-icon-box' },
            h(BrandLogoSvg, { size: 20 })
          ),
          h('div', { className: 'brand-text' },
            h('span', { className: 'brand-name' }, 'NutriMaa AI'),
            h('span', { className: 'brand-sub' }, 'NUTRITION INTELLIGENCE')
          )
        ),

        h('nav', { className: 'nav-center-links' },
          h('a', { href: '#dashboard-showcase', className: 'nav-link' }, 'Dashboard'),
          h('a', { href: '#problem-solution', className: 'nav-link' }, 'Intelligence'),
          h('a', { href: '#maternal-child', className: 'nav-link' }, 'Maternal & Child'),
          h('a', { href: '#food-matrix', className: 'nav-link' }, 'Food Library'),
          h('a', { href: '#frontline-gov', className: 'nav-link' }, 'Community & Gov'),
          h('a', { href: '#architecture-tech', className: 'nav-link' }, 'Architecture')
        ),

        h('div', { className: 'nav-actions' },
          // Language selector
          h('div', { className: 'lang-selector' },
            h('button', {
              className: `lang-btn ${lang === 'en' ? 'active' : ''}`,
              onClick: () => setLang('en')
            }, 'EN'),
            h('button', {
              className: `lang-btn ${lang === 'hi' ? 'active' : ''}`,
              onClick: () => setLang('hi')
            }, 'हिन्दी'),
            h('button', {
              className: `lang-btn ${lang === 'bn' ? 'active' : ''}`,
              onClick: () => setLang('bn')
            }, 'বাংলা')
          ),

          // Pitch deck launcher
          h('button', {
            className: 'btn btn-secondary btn-sm',
            onClick: () => setPitchDeckOpen(true)
          },
            h('i', { className: 'fa-solid fa-layer-group' }),
            ' Pitch Deck'
          ),

          // Start assessment CTA
          h('button', {
            className: 'btn btn-primary btn-sm',
            onClick: () => setAssessmentModalOpen(true)
          },
            t.startAssessment,
            h('i', { className: 'fa-solid fa-arrow-right', style: { fontSize: '0.75rem' } })
          )
        )
      ),

      // --------------------------------------------------------------------
      // C. HERO SECTION & INTERACTIVE DASHBOARD SHOWCASE
      // --------------------------------------------------------------------
      h('section', { className: 'hero-section' },
        h('div', { className: 'hero-glow-1' }),
        h('div', { className: 'hero-glow-2' }),

        h('div', { className: 'hero-content' },
          h('div', { className: 'eyebrow' },
            h('i', { className: 'fa-solid fa-circle' }),
            t.heroEyebrow
          ),
          h('h1', { className: 'hero-headline' },
            t.heroTitle1,
            h('br'),
            h('span', { className: 'gradient-mint-text' }, t.heroTitle2)
          ),
          h('p', { className: 'hero-lead' }, t.heroSub),

          h('div', { className: 'hero-cta-group' },
            h('button', {
              className: 'btn btn-primary',
              onClick: () => setAssessmentModalOpen(true)
            },
              t.startAssessment,
              h('i', { className: 'fa-solid fa-sparkles' })
            ),
            h('a', {
              href: '#dashboard-showcase',
              className: 'btn btn-secondary'
            },
              t.explorePlatform,
              h('i', { className: 'fa-solid fa-arrow-down' })
            )
          ),

          h('div', { className: 'hero-badges-strip' },
            h('div', { className: 'hero-badge-item' },
              h('i', { className: 'fa-solid fa-shield-halved' }),
              ' WHO Clinical Guidelines Calibrated'
            ),
            h('div', { className: 'hero-badge-item' },
              h('i', { className: 'fa-solid fa-wifi' }),
              ' Offline-First Rural Sync'
            ),
            h('div', { className: 'hero-badge-item' },
              h('i', { className: 'fa-solid fa-microchip' }),
              ' Random Forest & YOLOv8 Ensemble'
            )
          )
        ),

        // Live Product OS Dashboard Preview
        h('div', { className: 'dashboard-preview-window', id: 'dashboard-showcase' },
          h('div', { className: 'dash-window-header' },
            h('div', { className: 'dash-window-controls' },
              h('div', { className: 'dash-dot red' }),
              h('div', { className: 'dash-dot yellow' }),
              h('div', { className: 'dash-dot green' })
            ),

            // Tab switchers for different views
            h('div', { className: 'dash-tabs' },
              h('button', {
                className: `dash-tab-btn ${heroDashTab === 'maternal' ? 'active' : ''}`,
                onClick: () => setHeroDashTab('maternal')
              },
                h('i', { className: 'fa-solid fa-person-pregnant' }),
                ' Maternal Health'
              ),
              h('button', {
                className: `dash-tab-btn ${heroDashTab === 'child' ? 'active' : ''}`,
                onClick: () => setHeroDashTab('child')
              },
                h('i', { className: 'fa-solid fa-baby' }),
                ' Child Growth'
              ),
              h('button', {
                className: `dash-tab-btn ${heroDashTab === 'asha' ? 'active' : ''}`,
                onClick: () => setHeroDashTab('asha')
              },
                h('i', { className: 'fa-solid fa-user-nurse' }),
                ' ASHA / Frontline'
              ),
              h('button', {
                className: `dash-tab-btn ${heroDashTab === 'gov' ? 'active' : ''}`,
                onClick: () => setHeroDashTab('gov')
              },
                h('i', { className: 'fa-solid fa-chart-pie' }),
                ' Gov Analytics'
              )
            ),

            h('div', { className: 'dash-live-badge' },
              h('div', { className: 'dash-live-beacon' }),
              ' INTELLIGENCE ENGINE LIVE'
            )
          ),

          h('div', { className: 'dash-window-body' },
            // TAB 1: MATERNAL HEALTH VIEW
            heroDashTab === 'maternal' && h(Fragment, null,
              h('div', { className: 'dash-metric-cards' },
                h('div', { className: 'dash-mini-card' },
                  h('div', { className: 'dash-mini-card-header' },
                    h('span', { className: 'dash-mini-card-label' }, 'Gestational Phase'),
                    h('div', { className: 'dash-mini-card-icon' }, h('i', { className: 'fa-solid fa-calendar-check' }))
                  ),
                  h('div', { className: 'dash-mini-card-value' }, 'Week 24'),
                  h('div', { className: 'dash-mini-card-status' },
                    h('i', { className: 'fa-solid fa-circle-check' }),
                    ' 2nd Trimester · Optimal Weight Gain'
                  )
                ),
                h('div', { className: 'dash-mini-card' },
                  h('div', { className: 'dash-mini-card-header' },
                    h('span', { className: 'dash-mini-card-label' }, 'Hemoglobin Level'),
                    h('div', { className: 'dash-mini-card-icon' }, h('i', { className: 'fa-solid fa-droplet' }))
                  ),
                  h('div', { className: 'dash-mini-card-value' }, '11.4 g/dL'),
                  h('div', { className: 'dash-mini-card-status' },
                    h('i', { className: 'fa-solid fa-check' }),
                    ' Normal range (No Anemia)'
                  )
                ),
                h('div', { className: 'dash-mini-card' },
                  h('div', { className: 'dash-mini-card-header' },
                    h('span', { className: 'dash-mini-card-label' }, 'Hydration & Vitals'),
                    h('div', { className: 'dash-mini-card-icon' }, h('i', { className: 'fa-solid fa-heart-pulse' }))
                  ),
                  h('div', { className: 'dash-mini-card-value' }, '2.4 L / 118/76'),
                  h('div', { className: 'dash-mini-card-status' },
                    h('i', { className: 'fa-solid fa-arrow-trend-up' }),
                    ' Blood Pressure Stable'
                  )
                )
              ),
              h('div', { className: 'dash-main-split' },
                h('div', { className: 'dash-panel' },
                  h('div', { className: 'dash-panel-title' },
                    'Daily Micronutrient Fulfillment',
                    h('small', null, 'Target vs Consumed')
                  ),
                  h('div', { className: 'dash-progress-row' },
                    h('div', { className: 'dash-progress-meta' },
                      h('span', null, 'Elemental Iron (27 mg req.)'),
                      h('span', null, '22.4 mg (83%)')
                    ),
                    h('div', { className: 'dash-bar-track' },
                      h('div', { className: 'dash-bar-fill', style: { width: '83%' } })
                    )
                  ),
                  h('div', { className: 'dash-progress-row' },
                    h('div', { className: 'dash-progress-meta' },
                      h('span', null, 'Dietary Folate (600 mcg req.)'),
                      h('span', null, '540 mcg (90%)')
                    ),
                    h('div', { className: 'dash-bar-track' },
                      h('div', { className: 'dash-bar-fill', style: { width: '90%' } })
                    )
                  ),
                  h('div', { className: 'dash-progress-row' },
                    h('div', { className: 'dash-progress-meta' },
                      h('span', null, 'Calcium (1000 mg req.)'),
                      h('span', null, '880 mg (88%)')
                    ),
                    h('div', { className: 'dash-bar-track' },
                      h('div', { className: 'dash-bar-fill', style: { width: '88%' } })
                    )
                  ),
                  h('div', { className: 'dash-ai-alert' },
                    h('i', { className: 'fa-solid fa-wand-magic-sparkles' }),
                    h('p', null,
                      h('strong', null, 'AI Bioavailability Tip: '),
                      'Consume your spinach & lentil meal with half a fresh lemon to triple non-heme iron absorption.'
                    )
                  )
                ),
                h('div', { className: 'dash-panel' },
                  h('div', { className: 'dash-panel-title' }, 'Upcoming Care Action'),
                  h('div', { style: { padding: '10px 0', borderBottom: '1px solid var(--border-subtle)' } },
                    h('div', { style: { fontSize: '0.82rem', fontWeight: '700', color: 'var(--accent-mint)' } }, 'ASHA Home Check-in'),
                    h('div', { style: { fontSize: '0.75rem', color: 'var(--text-muted)' } }, 'Scheduled in 4 days · Hemoglobin re-test')
                  ),
                  h('div', { style: { padding: '10px 0' } },
                    h('div', { style: { fontSize: '0.82rem', fontWeight: '700' } }, 'Tetanus Toxoid (TT-2)'),
                    h('div', { style: { fontSize: '0.75rem', color: 'var(--text-muted)' } }, 'Completed · PHC Sector 4')
                  )
                )
              )
            ),

            // TAB 2: CHILD GROWTH VIEW
            heroDashTab === 'child' && h(Fragment, null,
              h('div', { className: 'dash-metric-cards' },
                h('div', { className: 'dash-mini-card' },
                  h('div', { className: 'dash-mini-card-header' },
                    h('span', { className: 'dash-mini-card-label' }, 'Child Age & Sex'),
                    h('div', { className: 'dash-mini-card-icon' }, h('i', { className: 'fa-solid fa-child' }))
                  ),
                  h('div', { className: 'dash-mini-card-value' }, '18 Months'),
                  h('div', { className: 'dash-mini-card-status' }, 'Female · Active Milestones')
                ),
                h('div', { className: 'dash-mini-card' },
                  h('div', { className: 'dash-mini-card-header' },
                    h('span', { className: 'dash-mini-card-label' }, 'Height / Weight'),
                    h('div', { className: 'dash-mini-card-icon' }, h('i', { className: 'fa-solid fa-ruler-vertical' }))
                  ),
                  h('div', { className: 'dash-mini-card-value' }, '82.5 cm / 11.2 kg'),
                  h('div', { className: 'dash-mini-card-status' },
                    h('i', { className: 'fa-solid fa-check' }),
                    ' WHO Z-Score: +0.4 SD (Normal)'
                  )
                ),
                h('div', { className: 'dash-mini-card' },
                  h('div', { className: 'dash-mini-card-header' },
                    h('span', { className: 'dash-mini-card-label' }, 'Malnutrition Risk'),
                    h('div', { className: 'dash-mini-card-icon' }, h('i', { className: 'fa-solid fa-shield-heart' }))
                  ),
                  h('div', { className: 'dash-mini-card-value', style: { color: 'var(--accent-mint)' } }, 'Low Risk (12%)'),
                  h('div', { className: 'dash-mini-card-status' }, 'No Stunting / Wasting Detected')
                )
              ),
              h('div', { className: 'dash-main-split' },
                h('div', { className: 'dash-panel' },
                  h('div', { className: 'dash-panel-title' },
                    'WHO Standard Growth Velocity Curve',
                    h('small', null, 'Height-for-Age (0 - 24 Mo)')
                  ),
                  h('div', { style: { height: '140px', background: 'rgba(5, 9, 12, 0.6)', borderRadius: '8px', padding: '12px', display: 'flex', alignItems: 'flex-end', gap: '8px' } },
                    [48, 54, 60, 66, 71, 75, 78, 82.5].map((val, idx) => (
                      h('div', { key: idx, style: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' } },
                        h('div', {
                          style: {
                            width: '100%',
                            height: `${(val / 90) * 100}%`,
                            background: idx === 7 ? 'var(--accent-mint)' : 'rgba(0, 245, 160, 0.3)',
                            borderRadius: '4px'
                          }
                        }),
                        h('span', { style: { fontSize: '0.65rem', color: 'var(--text-muted)' } }, `${idx * 2.5}m`)
                      )
                    ))
                  )
                ),
                h('div', { className: 'dash-panel' },
                  h('div', { className: 'dash-panel-title' }, 'Dietary Diversity Score'),
                  h('div', { style: { fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent-mint)', marginBottom: '8px' } }, '6 / 8 Groups'),
                  h('p', { style: { fontSize: '0.8rem', color: 'var(--text-secondary)' } },
                    'Adequate diversity. Includes grains, pulses, dairy, eggs, and vitamin-A rich vegetables.'
                  )
                )
              )
            ),

            // TAB 3: ASHA / FRONTLINE VIEW
            heroDashTab === 'asha' && h(Fragment, null,
              h('div', { className: 'dash-metric-cards' },
                h('div', { className: 'dash-mini-card' },
                  h('div', { className: 'dash-mini-card-header' },
                    h('span', { className: 'dash-mini-card-label' }, 'Active Beneficiaries'),
                    h('div', { className: 'dash-mini-card-icon' }, h('i', { className: 'fa-solid fa-users' }))
                  ),
                  h('div', { className: 'dash-mini-card-value' }, '48 Mothers'),
                  h('div', { className: 'dash-mini-card-status' }, 'Anganwadi Sector 7')
                ),
                h('div', { className: 'dash-mini-card' },
                  h('div', { className: 'dash-mini-card-header' },
                    h('span', { className: 'dash-mini-card-label' }, 'Priority Follow-ups'),
                    h('div', { className: 'dash-mini-card-icon', style: { color: 'var(--accent-gold)' } }, h('i', { className: 'fa-solid fa-bell' }))
                  ),
                  h('div', { className: 'dash-mini-card-value', style: { color: 'var(--accent-gold)' } }, '3 High Attention'),
                  h('div', { className: 'dash-mini-card-status' }, 'Hb < 10 g/dL · Nutritional kits assigned')
                ),
                h('div', { className: 'dash-mini-card' },
                  h('div', { className: 'dash-mini-card-header' },
                    h('span', { className: 'dash-mini-card-label' }, 'Offline Queue'),
                    h('div', { className: 'dash-mini-card-icon' }, h('i', { className: 'fa-solid fa-database' }))
                  ),
                  h('div', { className: 'dash-mini-card-value' }, `${queuedOfflineRecords} Records`),
                  h('div', { className: 'dash-mini-card-status' }, isNetworkOnline ? 'Auto-synced to Cloud' : 'Queued locally (Offline)')
                )
              ),
              h('div', { className: 'dash-panel' },
                h('div', { className: 'dash-panel-title' }, 'Rapid Beneficiary Triage Queue'),
                h('div', { style: { display: 'grid', gap: '8px' } },
                  [
                    { name: 'Sunita Devi', type: 'Pregnant (30w)', status: 'Moderate Anemia (9.8 g/dL)', priority: 'Urgent' },
                    { name: 'Pooja Roy', type: 'Lactating (4mo)', status: 'Nutrition On-Track', priority: 'Routine' },
                    { name: 'Baby Aarav', type: 'Child (14mo)', status: 'Weight Stagnation (-1.2 SD)', priority: 'High' }
                  ].map((b, i) => (
                    h('div', {
                      key: i,
                      style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px'
                      }
                    },
                      h('div', null,
                        h('strong', { style: { fontSize: '0.88rem' } }, b.name),
                        h('span', { style: { fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '8px' } }, b.type)
                      ),
                      h('span', { style: { fontSize: '0.78rem', color: 'var(--text-secondary)' } }, b.status),
                      h('span', {
                        className: `risk-pill-badge ${b.priority === 'Urgent' ? 'high' : b.priority === 'High' ? 'moderate' : 'low'}`
                      }, b.priority)
                    )
                  ))
                )
              )
            ),

            // TAB 4: GOVERNMENT ANALYTICS VIEW
            heroDashTab === 'gov' && h(Fragment, null,
              h('div', { className: 'dash-metric-cards' },
                h('div', { className: 'dash-mini-card' },
                  h('div', { className: 'dash-mini-card-header' },
                    h('span', { className: 'dash-mini-card-label' }, 'District Coverage'),
                    h('div', { className: 'dash-mini-card-icon' }, h('i', { className: 'fa-solid fa-map-location-dot' }))
                  ),
                  h('div', { className: 'dash-mini-card-value' }, '14,820'),
                  h('div', { className: 'dash-mini-card-status' }, 'Maternal Beneficiaries Screened')
                ),
                h('div', { className: 'dash-mini-card' },
                  h('div', { className: 'dash-mini-card-header' },
                    h('span', { className: 'dash-mini-card-label' }, 'Stunting Reduction'),
                    h('div', { className: 'dash-mini-card-icon' }, h('i', { className: 'fa-solid fa-arrow-trend-down' }))
                  ),
                  h('div', { className: 'dash-mini-card-value', style: { color: 'var(--accent-mint)' } }, '-4.6% YoY'),
                  h('div', { className: 'dash-mini-card-status' }, 'Aggregated Population Metric')
                ),
                h('div', { className: 'dash-mini-card' },
                  h('div', { className: 'dash-mini-card-header' },
                    h('span', { className: 'dash-mini-card-label' }, 'Supply Chain Efficiency'),
                    h('div', { className: 'dash-mini-card-icon' }, h('i', { className: 'fa-solid fa-truck-medical' }))
                  ),
                  h('div', { className: 'dash-mini-card-value' }, '98.2%'),
                  h('div', { className: 'dash-mini-card-status' }, 'Take Home Ration (THR) Fulfillment')
                )
              ),
              h('div', { className: 'dash-panel' },
                h('div', { className: 'dash-panel-title' }, 'Aggregated District Heat Index (Demo Statistics)'),
                h('p', { style: { fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '14px' } },
                  'Early warning indicators empower health administrators to direct fortified rations and mobile nutrition units proactively.'
                ),
                h('div', { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
                  ['District A: 8.2% Anemia (Low)', 'District B: 24.1% Anemia (Moderate)', 'District C: 38.4% Anemia (Intervention Active)'].map((d, idx) => (
                    h('div', {
                      key: idx,
                      style: {
                        padding: '8px 14px',
                        borderRadius: '6px',
                        background: idx === 2 ? 'rgba(244, 63, 94, 0.1)' : 'rgba(0, 245, 160, 0.08)',
                        border: `1px solid ${idx === 2 ? 'rgba(244, 63, 94, 0.3)' : 'rgba(0, 245, 160, 0.2)'}`,
                        fontSize: '0.78rem'
                      }
                    }, d)
                  ))
                )
              )
            )
          )
        )
      ),

      // --------------------------------------------------------------------
      // D. THE PROBLEM & SOLUTION SECTION
      // --------------------------------------------------------------------
      h('section', { className: 'section-container', id: 'problem-solution' },
        h('div', { className: 'section-header' },
          h('div', { className: 'eyebrow' }, 'SYSTEMIC CHALLENGES'),
          h('h2', { className: 'section-title' }, t.problemHeading),
          h('p', { className: 'section-subtitle' },
            'Traditional maternal-child healthcare often suffers from manual data collection, delayed risk detection, and generic one-size-fits-all nutrition advice.'
          )
        ),

        h('div', { className: 'problem-grid' },
          h('div', { className: 'glass-card problem-card' },
            h('div', { className: 'problem-card-top' },
              h('div', { className: 'problem-icon-wrap' }, h('i', { className: 'fa-solid fa-triangle-exclamation' })),
              h('div', { className: 'problem-stat' }, '43%'),
              h('h3', { className: 'problem-title' }, 'Maternal Anemia Burden'),
              h('p', { className: 'problem-desc' }, 'Nearly half of expectant mothers suffer from preventable micronutrient and iron deficiencies due to late identification.')
            ),
            h('ul', { className: 'problem-list' },
              h('li', null, h('i', { className: 'fa-solid fa-xmark' }), ' Inadequate dietary diversity'),
              h('li', null, h('i', { className: 'fa-solid fa-xmark' }), ' Low iron & folate bioavailability awareness')
            )
          ),

          h('div', { className: 'glass-card problem-card' },
            h('div', { className: 'problem-card-top' },
              h('div', { className: 'problem-icon-wrap' }, h('i', { className: 'fa-solid fa-child-reaching' })),
              h('div', { className: 'problem-stat' }, '35.5%'),
              h('h3', { className: 'problem-title' }, 'Child Stunting & Wasting'),
              h('p', { className: 'problem-desc' }, 'Growth failure often goes unnoticed until irreversible cognitive and physical developmental delays occur.')
            ),
            h('ul', { className: 'problem-list' },
              h('li', null, h('i', { className: 'fa-solid fa-xmark' }), ' Irregular anthropometric monitoring'),
              h('li', null, h('i', { className: 'fa-solid fa-xmark' }), ' Delayed frontline intervention')
            )
          ),

          h('div', { className: 'glass-card problem-card' },
            h('div', { className: 'problem-card-top' },
              h('div', { className: 'problem-icon-wrap' }, h('i', { className: 'fa-solid fa-hourglass-half' })),
              h('div', { className: 'problem-stat' }, '1 : 12k'),
              h('h3', { className: 'problem-title' }, 'Rural Nutritionist Gap'),
              h('p', { className: 'problem-desc' }, 'Frontline Anganwadi and ASHA workers are burdened with manual paper registries instead of real-time clinical decision support.')
            ),
            h('ul', { className: 'problem-list' },
              h('li', null, h('i', { className: 'fa-solid fa-xmark' }), ' Paper logbook overhead'),
              h('li', null, h('i', { className: 'fa-solid fa-xmark' }), ' Zero automated risk scoring')
            )
          )
        ),

        // 6-STAGE SOLUTION PIPELINE
        h('div', { style: { marginTop: '100px' } },
          h('div', { className: 'section-header' },
            h('div', { className: 'eyebrow' }, 'THE SOLUTION PIPELINE'),
            h('h2', { className: 'section-title' }, t.solutionHeading),
            h('p', { className: 'section-subtitle' },
              'NutriMaa AI unifies screening, AI prediction, localized dietary guidance, and continuous frontline tracking into one seamless continuum of care.'
            )
          ),

          h('div', { className: 'pipeline-track' },
            [
              { step: '01', name: 'ASSESS', desc: 'Biometrics & dietary recall screening', icon: 'fa-solid fa-clipboard-check' },
              { step: '02', name: 'ANALYZE', desc: 'WHO standard growth & nutrient gap parsing', icon: 'fa-solid fa-chart-simple' },
              { step: '03', name: 'PREDICT', desc: 'Ensemble ML malnutrition risk forecasting', icon: 'fa-solid fa-brain' },
              { step: '04', name: 'RECOMMEND', desc: 'Affordable, traditional food meal plans', icon: 'fa-solid fa-bowl-food' },
              { step: '05', name: 'MONITOR', desc: 'Digital growth chart & milestone curves', icon: 'fa-solid fa-heart-pulse' },
              { step: '06', name: 'FOLLOW UP', desc: 'ASHA reminder loops & reassessment alerts', icon: 'fa-solid fa-arrows-rotate' }
            ].map((p, i) => (
              h('div', { key: i, className: 'pipeline-step-card' },
                h('span', { className: 'pipeline-num' }, `STAGE ${p.step}`),
                h('div', { className: 'pipeline-icon' }, h('i', { className: p.icon })),
                h('h4', { className: 'pipeline-name' }, p.name),
                h('p', { className: 'pipeline-sub' }, p.desc)
              )
            ))
          )
        )
      ),

      // --------------------------------------------------------------------
      // E. 6 MAIN USER GROUPS
      // --------------------------------------------------------------------
      h('section', { className: 'section-container' },
        h('div', { className: 'section-header' },
          h('div', { className: 'eyebrow' }, t.whoItServes),
          h('h2', { className: 'section-title' }, 'Tailored for Every Stakeholder in the Ecosystem'),
          h('p', { className: 'section-subtitle' },
            'From expecting mothers at home to frontline community workers in remote villages and health administrators managing regional policies.'
          )
        ),

        h('div', { className: 'user-roles-grid' },
          [
            {
              role: 'Pregnant Women',
              desc: 'Personalized trimester-specific nutrition guidance, anemia screening, and maternal milestone monitoring.',
              tag: 'BENEFICIARY',
              icon: 'fa-solid fa-person-pregnant',
              points: ['Trimester dietary plans', 'Iron/Folate synergy alerts', 'Hydration & vitals log']
            },
            {
              role: 'Lactating Mothers',
              desc: 'Nutritional support during the critical post-pregnancy period to promote postpartum recovery and breastmilk quality.',
              tag: 'POSTPARTUM',
              icon: 'fa-solid fa-person-breastfeeding',
              points: ['Galactagogue food recommendations', 'Postpartum healing nutrition', 'Energy balance guide']
            },
            {
              role: 'Children & Parents',
              desc: 'Continuous growth tracking, complementary feeding plans, and early stunting/wasting prevention.',
              tag: 'PEDIATRICS',
              icon: 'fa-solid fa-baby',
              points: ['WHO Z-Score curves', 'First 1000 days milestones', 'Weaning food suggestions']
            },
            {
              role: 'ICDS / Anganwadi Workers',
              desc: 'Digital beneficiary registry, automated Take-Home Ration (THR) tracking, and community anthropometry recording.',
              tag: 'COMMUNITY',
              icon: 'fa-solid fa-people-roof',
              points: ['Fast bulk anthropometry', 'THR ration distribution', 'Child growth categorizer']
            },
            {
              role: 'ASHA / Health Workers',
              desc: 'Touch-friendly field application with offline-first data capture, urgent home visit triage, and voice assistance.',
              tag: 'FRONTLINE',
              icon: 'fa-solid fa-user-nurse',
              points: ['Urgent triage prioritization', 'Offline sync resilience', 'Voice local-language input']
            },
            {
              role: 'Government & Administrators',
              desc: 'High-level aggregated population health analytics, regional heat maps, and evidence-informed supply chain planning.',
              tag: 'POLICY & ADMIN',
              icon: 'fa-solid fa-landmark',
              points: ['District malnutrition trends', 'Resource allocation insights', 'Intervention impact metrics']
            }
          ].map((u, i) => (
            h('div', { key: i, className: 'glass-card role-card' },
              h('div', null,
                h('div', { className: 'role-card-header' },
                  h('div', { className: 'role-icon-box' }, h('i', { className: u.icon })),
                  h('span', { className: 'role-tag' }, u.tag)
                ),
                h('div', { className: 'role-card-body' },
                  h('h3', null, u.role),
                  h('p', null, u.desc),
                  h('ul', { className: 'role-features' },
                    u.points.map((pt, pIdx) => (
                      h('li', { key: pIdx },
                        h('i', { className: 'fa-solid fa-circle-check' }),
                        ` ${pt}`
                      )
                    ))
                  )
                )
              ),
              h('button', {
                className: 'btn btn-glass btn-sm',
                onClick: () => setAssessmentModalOpen(true)
              }, 'Start Targeted Assessment →')
            )
          ))
        )
      ),

      // --------------------------------------------------------------------
      // F. MATERNAL HEALTH & CHILD GROWTH DUAL MODULES
      // --------------------------------------------------------------------
      h('section', { className: 'section-container', id: 'maternal-child' },
        h('div', { className: 'section-header' },
          h('div', { className: 'eyebrow' }, 'CLINICAL SUPPORT MODULES'),
          h('h2', { className: 'section-title' }, 'Precision Biometrics & Growth Tracking'),
          h('p', { className: 'section-subtitle' },
            'Interact with our clinical support simulators below to see how NutriMaa AI translates raw vitals into actionable dietary guidance.'
          )
        ),

        h('div', { className: 'modules-split-grid' },
          // MODULE 1: MATERNAL HEALTH
          h('div', { className: 'glass-card interactive-module-card' },
            h('div', { className: 'module-header' },
              h('div', { className: 'module-icon-title' },
                h('div', { className: 'module-icon-badge' }, h('i', { className: 'fa-solid fa-person-pregnant' })),
                h('div', { className: 'module-title-wrap' },
                  h('h3', null, 'Maternal Health Simulator'),
                  h('span', null, 'Better nutrition for safer motherhood')
                )
              ),
              h('span', {
                className: `risk-pill-badge ${maternalHb < 10 ? 'high' : maternalHb < 11.5 ? 'moderate' : 'low'}`
              }, maternalHb < 10 ? 'Moderate Anemia' : maternalHb < 11.5 ? 'Mild Deficiency' : 'Optimal Hemoglobin')
            ),

            h('div', { className: 'biometric-inputs-row' },
              h('div', { className: 'bio-input-box' },
                h('span', { className: 'bio-input-label' }, 'Gestational Week'),
                h('div', { className: 'bio-input-value-row' },
                  h('span', { className: 'bio-input-value' }, `W${maternalWeek}`),
                  h('span', { className: 'bio-input-unit' }, maternalWeek < 13 ? 'Trimester 1' : maternalWeek < 27 ? 'Trimester 2' : 'Trimester 3')
                ),
                h('input', {
                  type: 'range',
                  min: 4,
                  max: 40,
                  value: maternalWeek,
                  onChange: (e) => setMaternalWeek(Number(e.target.value)),
                  className: 'bio-slider'
                })
              ),

              h('div', { className: 'bio-input-box' },
                h('span', { className: 'bio-input-label' }, 'Hemoglobin Level'),
                h('div', { className: 'bio-input-value-row' },
                  h('span', { className: 'bio-input-value' }, `${maternalHb}`),
                  h('span', { className: 'bio-input-unit' }, 'g/dL')
                ),
                h('input', {
                  type: 'range',
                  min: 7.0,
                  max: 15.0,
                  step: 0.1,
                  value: maternalHb,
                  onChange: (e) => setMaternalHb(Number(e.target.value)),
                  className: 'bio-slider'
                })
              ),

              h('div', { className: 'bio-input-box' },
                h('span', { className: 'bio-input-label' }, 'Maternal Weight'),
                h('div', { className: 'bio-input-value-row' },
                  h('span', { className: 'bio-input-value' }, `${maternalWeight}`),
                  h('span', { className: 'bio-input-unit' }, 'kg')
                ),
                h('input', {
                  type: 'range',
                  min: 40,
                  max: 95,
                  value: maternalWeight,
                  onChange: (e) => setMaternalWeight(Number(e.target.value)),
                  className: 'bio-slider'
                })
              ),

              h('div', { className: 'bio-input-box' },
                h('span', { className: 'bio-input-label' }, 'Daily Hydration'),
                h('div', { className: 'bio-input-value-row' },
                  h('span', { className: 'bio-input-value' }, `${maternalWater}`),
                  h('span', { className: 'bio-input-unit' }, 'Litres/day')
                ),
                h('input', {
                  type: 'range',
                  min: 1.0,
                  max: 4.5,
                  step: 0.1,
                  value: maternalWater,
                  onChange: (e) => setMaternalWater(Number(e.target.value)),
                  className: 'bio-slider'
                })
              )
            ),

            h('div', { className: 'dash-ai-alert' },
              h('i', { className: 'fa-solid fa-circle-info' }),
              h('p', null,
                maternalHb < 11.0
                  ? 'Alert: Mild to moderate anemia indicator detected. AI recommends supplementing meals with roasted chana, jaggery, drumstick leaves, and consulting an ASHA worker for IFA tablets.'
                  : 'Vitals stable. Trimester caloric requirement: +350 kcal/day with balanced calcium (paneer/ragi) and folic acid.'
              )
            ),

            h('div', { className: 'disclaimer-box' },
              'Disclaimer: NutriMaa AI provides decision-support and screening indicators. It does not provide medical diagnosis.'
            )
          ),

          // MODULE 2: CHILD MONITORING
          h('div', { className: 'glass-card interactive-module-card' },
            h('div', { className: 'module-header' },
              h('div', { className: 'module-icon-title' },
                h('div', { className: 'module-icon-badge' }, h('i', { className: 'fa-solid fa-baby' })),
                h('div', { className: 'module-title-wrap' },
                  h('h3', null, 'Child Growth & WHO Curves'),
                  h('span', null, 'Every child deserves a healthy start')
                )
              ),
              h('span', { className: 'risk-pill-badge low' }, 'WHO Growth Normal')
            ),

            h('div', { className: 'growth-curve-container' },
              h('div', { style: { display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '10px' } },
                h('span', null, `Age: ${childAgeMonths} Months`),
                h('span', null, `Height: ${childHeight} cm | Weight: ${childWeight} kg`)
              ),

              h('input', {
                type: 'range',
                min: 1,
                max: 36,
                value: childAgeMonths,
                onChange: (e) => {
                  const m = Number(e.target.value);
                  setChildAgeMonths(m);
                  setChildHeight(Number((50 + m * 1.8).toFixed(1)));
                  setChildWeight(Number((3.5 + m * 0.42).toFixed(1)));
                },
                className: 'bio-slider'
              }),

              h('div', { style: { marginTop: '16px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' } },
                h('div', { style: { background: 'rgba(255,255,255,0.03)', padding: '8px', borderRadius: '6px' } },
                  h('small', { style: { color: 'var(--text-muted)', fontSize: '0.7rem' } }, 'Stunting Status'),
                  h('b', { style: { display: 'block', fontSize: '0.85rem', color: 'var(--accent-mint)' } }, 'Normal Height')
                ),
                h('div', { style: { background: 'rgba(255,255,255,0.03)', padding: '8px', borderRadius: '6px' } },
                  h('small', { style: { color: 'var(--text-muted)', fontSize: '0.7rem' } }, 'Wasting Status'),
                  h('b', { style: { display: 'block', fontSize: '0.85rem', color: 'var(--accent-mint)' } }, 'Normal Weight')
                ),
                h('div', { style: { background: 'rgba(255,255,255,0.03)', padding: '8px', borderRadius: '6px' } },
                  h('small', { style: { color: 'var(--text-muted)', fontSize: '0.7rem' } }, 'Diet Diversity'),
                  h('b', { style: { display: 'block', fontSize: '0.85rem', color: 'var(--accent-cyan)' } }, 'Tier 1 Complete')
                )
              )
            ),

            h('div', { className: 'dash-ai-alert' },
              h('i', { className: 'fa-solid fa-lightbulb' }),
              h('p', null,
                `For age ${childAgeMonths} months, ensure 3 meals + 2 nutritious snacks per day. Recommended: Ragi porridge, mashed lentils, seasonal fruit puree, and continued breastfeeding.`
              )
            ),

            h('div', { className: 'disclaimer-box' },
              'WHO Reference: Child growth assessments follow WHO Multi-centre Growth Reference Study standards.'
            )
          )
        )
      ),

      // --------------------------------------------------------------------
      // G. FOOD INTELLIGENCE & AI COMPUTER VISION SCANNER
      // --------------------------------------------------------------------
      h('section', { className: 'section-container', id: 'food-matrix' },
        h('div', { className: 'section-header' },
          h('div', { className: 'eyebrow' }, 'FOOD INTELLIGENCE'),
          h('h2', { className: 'section-title' }, 'Find the Right Nutrition in Everyday Traditional Food'),
          h('p', { className: 'section-subtitle' },
            'NutriMaa AI bridges clinical nutrient deficiencies with accessible, culturally familiar, and low-cost local foods.'
          )
        ),

        // Search & Category Filter Pills
        h('div', { className: 'food-intelligence-search-bar' },
          h('i', { className: 'fa-solid fa-magnifying-glass', style: { color: 'var(--text-muted)' } }),
          h('input', {
            type: 'text',
            placeholder: 'Search spinach, ragi, lentils, calcium, iron, protein...',
            value: foodSearch,
            onChange: (e) => setFoodSearch(e.target.value)
          })
        ),

        h('div', { className: 'food-filter-pills' },
          ['All', 'Vegetable', 'Legumes', 'Millets', 'Protein', 'Dairy', 'Sweets'].map((cat) => (
            h('button', {
              key: cat,
              className: `food-filter-btn ${foodCategory === cat ? 'active' : ''}`,
              onClick: () => setFoodCategory(cat)
            }, cat)
          ))
        ),

        // Food Grid
        h('div', { className: 'food-matrix-grid' },
          filteredFoods.map((f) => (
            h('div', { key: f.id, className: 'glass-card food-item-card' },
              h('div', null,
                h('div', { className: 'food-card-top' },
                  h('div', null,
                    h('h4', { className: 'food-name' }, f.name),
                    h('span', { className: 'food-local-name' }, f.localName)
                  ),
                  h('span', { className: 'food-badge' }, f.category)
                ),

                h('div', { className: 'food-nutrients-grid' },
                  h('div', { className: 'food-nutrient-item' },
                    h('small', null, 'Calories'),
                    h('b', null, f.calories)
                  ),
                  h('div', { className: 'food-nutrient-item' },
                    h('small', null, 'Protein'),
                    h('b', null, f.protein)
                  ),
                  h('div', { className: 'food-nutrient-item' },
                    h('small', null, 'Iron'),
                    h('b', null, f.iron)
                  ),
                  h('div', { className: 'food-nutrient-item' },
                    h('small', null, 'Calcium'),
                    h('b', null, f.calcium)
                  )
                ),

                h('p', { style: { fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '14px' } },
                  h('strong', { style: { color: 'var(--accent-mint)' } }, 'Bioavailability: '),
                  f.bioTip
                )
              ),

              h('div', { className: 'food-card-bottom' },
                h('span', { className: 'food-affordability' },
                  h('i', { className: 'fa-solid fa-tag' }),
                  ` ${f.cost} (${f.affordability})`
                ),
                h('span', { style: { color: 'var(--text-muted)', fontSize: '0.72rem' } }, 'Verified Database')
              )
            )
          ))
        ),

        // COMPUTER VISION / FOOD RECOGNITION PROTOTYPE
        h('div', { style: { marginTop: '100px' } },
          h('div', { className: 'section-header' },
            h('div', { className: 'eyebrow' }, 'AI FOOD RECOGNITION — PROTOTYPE'),
            h('h2', { className: 'section-title' }, 'Understand Food Through Computer Vision'),
            h('p', { className: 'section-subtitle' },
              'Simulating our proposed YOLOv8 + OpenCV multi-class food recognition pipeline for real-time macro estimation from mobile camera snapshots.'
            )
          ),

          h('div', { className: 'vision-scanner-container' },
            // Scanner Viewfinder Card
            h('div', { className: 'scanner-viewfinder-card' },
              h('div', { className: 'viewfinder-overlay' }),
              isScanningFood && h('div', { className: 'scanner-laser-line' }),

              // Simulated bounding boxes
              selectedScanPreset === 'palak_paneer' && h(Fragment, null,
                h('div', {
                  className: 'yolo-box',
                  style: { top: '30%', left: '20%', width: '38%', height: '40%' }
                },
                  h('span', { className: 'yolo-tag' }, 'Palak Paneer (98.4%)')
                ),
                h('div', {
                  className: 'yolo-box',
                  style: { top: '45%', right: '15%', width: '28%', height: '32%' }
                },
                  h('span', { className: 'yolo-tag' }, 'Whole Wheat Roti (96.1%)')
                )
              ),

              selectedScanPreset === 'khichdi' && h('div', {
                className: 'yolo-box',
                style: { top: '25%', left: '25%', width: '50%', height: '50%' }
              },
                h('span', { className: 'yolo-tag' }, 'Mix Veg Moong Khichdi (99.1%)')
              ),

              selectedScanPreset === 'ragi_porridge' && h('div', {
                className: 'yolo-box',
                style: { top: '30%', left: '30%', width: '42%', height: '44%' }
              },
                h('span', { className: 'yolo-tag' }, 'Ragi Millet Porridge (97.8%)')
              )
            ),

            // Scan Results & Controls
            h('div', { className: 'glass-card', style: { padding: '30px' } },
              h('h3', { style: { fontSize: '1.3rem', marginBottom: '8px' } }, 'Multi-Class Meal Detection'),
              h('p', { style: { fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' } },
                'Select a sample meal below to test the automated bounding box segmentation and macro breakdown algorithm.'
              ),

              h('div', { className: 'scanner-presets-strip' },
                [
                  { id: 'palak_paneer', label: 'Palak Paneer & Roti' },
                  { id: 'khichdi', label: 'Moong Dal Khichdi' },
                  { id: 'ragi_porridge', label: 'Ragi Porridge & Milk' }
                ].map((preset) => (
                  h('button', {
                    key: preset.id,
                    className: `preset-chip ${selectedScanPreset === preset.id ? 'active' : ''}`,
                    onClick: () => {
                      setIsScanningFood(true);
                      setSelectedScanPreset(preset.id);
                      setTimeout(() => setIsScanningFood(false), 900);
                    }
                  }, preset.label)
                ))
              ),

              h('div', { style: { marginTop: '24px', background: 'rgba(10,17,24,0.7)', padding: '18px', borderRadius: '12px', border: '1px solid var(--border-subtle)' } },
                h('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '12px' } },
                  h('span', { style: { fontSize: '0.82rem', color: 'var(--text-muted)' } }, 'Estimated Calories'),
                  h('b', { style: { color: 'var(--accent-mint)', fontFamily: 'var(--font-mono)' } },
                    selectedScanPreset === 'palak_paneer' ? '460 kcal' : selectedScanPreset === 'khichdi' ? '320 kcal' : '280 kcal'
                  )
                ),
                h('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '12px' } },
                  h('span', { style: { fontSize: '0.82rem', color: 'var(--text-muted)' } }, 'Protein & Iron Content'),
                  h('b', { style: { fontFamily: 'var(--font-mono)' } },
                    selectedScanPreset === 'palak_paneer' ? '21g Protein · 4.6mg Iron' : selectedScanPreset === 'khichdi' ? '12g Protein · 2.8mg Iron' : '9g Protein · 3.9mg Iron'
                  )
                ),
                h('div', { style: { display: 'flex', justifyContent: 'space-between' } },
                  h('span', { style: { fontSize: '0.82rem', color: 'var(--text-muted)' } }, 'Model Latency'),
                  h('b', { style: { color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' } }, '42 ms (YOLOv8-nano)')
                )
              )
            )
          )
        )
      ),

      // --------------------------------------------------------------------
      // H. ML RISK PREDICTION & VACCINATION SCHEDULE
      // --------------------------------------------------------------------
      h('section', { className: 'section-container' },
        h('div', { className: 'section-header' },
          h('div', { className: 'eyebrow' }, t.riskPrediction),
          h('h2', { className: 'section-title' }, 'Identify Malnutrition Risks Earlier with Machine Learning'),
          h('p', { className: 'section-subtitle' },
            'Our proposed Random Forest / XGBoost ensemble integrates multi-variable clinical & socio-environmental determinants to alert healthcare workers before acute malnutrition sets in.'
          )
        ),

        h('div', { className: 'risk-engine-panel' },
          // Controls
          h('div', { className: 'glass-card risk-controls-card' },
            h('h3', { style: { fontSize: '1.2rem', marginBottom: '20px' } }, 'Multi-Factor Predictive Inputs'),

            h('div', { className: 'risk-slider-group' },
              h('div', { className: 'risk-slider-header' },
                h('span', null, 'Maternal Hemoglobin Level'),
                h('span', null, `${riskHb} g/dL`)
              ),
              h('input', {
                type: 'range',
                min: 7.0,
                max: 14.5,
                step: 0.1,
                value: riskHb,
                onChange: (e) => setRiskHb(Number(e.target.value)),
                className: 'bio-slider'
              })
            ),

            h('div', { className: 'risk-slider-group' },
              h('div', { className: 'risk-slider-header' },
                h('span', null, 'Dietary Diversity Score (0-10)'),
                h('span', null, `${riskDietScore} / 10`)
              ),
              h('input', {
                type: 'range',
                min: 1,
                max: 10,
                value: riskDietScore,
                onChange: (e) => setRiskDietScore(Number(e.target.value)),
                className: 'bio-slider'
              })
            ),

            h('div', { className: 'risk-slider-group' },
              h('div', { className: 'risk-slider-header' },
                h('span', null, 'Gestational Age (Weeks)'),
                h('span', null, `Week ${riskGestationalAge}`)
              ),
              h('input', {
                type: 'range',
                min: 4,
                max: 40,
                value: riskGestationalAge,
                onChange: (e) => setRiskGestationalAge(Number(e.target.value)),
                className: 'bio-slider'
              })
            ),

            h('div', { className: 'risk-slider-group' },
              h('div', { className: 'risk-slider-header' },
                h('span', null, 'Clean Water & Sanitation Index'),
                h('span', null, `${riskSocioIndex} / 10`)
              ),
              h('input', {
                type: 'range',
                min: 1,
                max: 10,
                value: riskSocioIndex,
                onChange: (e) => setRiskSocioIndex(Number(e.target.value)),
                className: 'bio-slider'
              })
            )
          ),

          // Output Gauge
          h('div', { className: 'glass-card risk-gauge-card' },
            h('div', {
              className: 'risk-meter-circle',
              style: { '--risk-percent': calculatedRiskScore }
            },
              h('div', { className: 'risk-meter-inner' },
                h('span', { className: 'risk-meter-score', style: { color: riskClass === 'high' ? 'var(--accent-rose)' : riskClass === 'moderate' ? 'var(--accent-gold)' : 'var(--accent-mint)' } }, `${calculatedRiskScore}%`),
                h('span', { className: 'risk-meter-label' }, 'Risk Index')
              )
            ),

            h('h4', { style: { fontSize: '1.25rem', marginBottom: '8px' } }, `Predicted Status: ${riskCategory}`),
            h('p', { style: { fontSize: '0.84rem', color: 'var(--text-secondary)', maxWidth: '340px' } },
              riskClass === 'high'
                ? 'High probability of moderate-to-severe nutritional deficit. Frontline ASHA notification dispatched for supplementary nutrition ration.'
                : riskClass === 'moderate'
                  ? 'Moderate nutritional deficiency indicator. Recommend diet enrichment with drumstick greens and millet-based snacks.'
                  : 'Low risk profile. Growth velocity and maternal micronutrient indicators are within healthy thresholds.'
            )
          )
        ),

        // VACCINATION SCHEDULE TRACKER
        h('div', { style: { marginTop: '80px' } },
          h('div', { className: 'section-header' },
            h('div', { className: 'eyebrow' }, 'IMMUNIZATION & TIMELINE'),
            h('h2', { className: 'section-title' }, 'Maternal & Child Vaccination Schedule'),
            h('p', { className: 'section-subtitle' },
              'Calibrated with the National Immunization Schedule (NIS). Interactive status tracker for frontline workers and parents.'
            )
          ),

          h('div', { className: 'glass-card', style: { padding: '30px' } },
            h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' } },
              [
                { id: 'bcg', name: 'BCG (Tuberculosis)', due: 'At Birth', done: vaccineStates.bcg },
                { id: 'opv0', name: 'OPV-0 (Oral Polio)', due: 'At Birth', done: vaccineStates.opv0 },
                { id: 'penta1', name: 'Pentavalent-1 (DPT+HepB)', due: '6 Weeks', done: vaccineStates.penta1 },
                { id: 'rota1', name: 'Rotavirus-1', due: '6 Weeks', done: vaccineStates.rota1 },
                { id: 'penta2', name: 'Pentavalent-2', due: '10 Weeks', done: vaccineStates.penta2 },
                { id: 'mr1', name: 'Measles-Rubella (MR-1)', due: '9-12 Months', done: vaccineStates.mr1 },
                { id: 'vita', name: 'Vitamin A (1st Dose)', due: '9 Months', done: vaccineStates.vita }
              ].map((v) => (
                h('div', {
                  key: v.id,
                  onClick: () => setVaccineStates((prev) => ({ ...prev, [v.id]: !prev[v.id] })),
                  style: {
                    padding: '14px',
                    borderRadius: '10px',
                    background: v.done ? 'rgba(0, 245, 160, 0.08)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${v.done ? 'rgba(0, 245, 160, 0.3)' : 'var(--border-subtle)'}`,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }
                },
                  h('div', null,
                    h('strong', { style: { display: 'block', fontSize: '0.84rem' } }, v.name),
                    h('small', { style: { color: 'var(--text-muted)', fontSize: '0.72rem' } }, `Due: ${v.due}`)
                  ),
                  h('i', {
                    className: `fa-solid ${v.done ? 'fa-circle-check' : 'fa-circle'}`,
                    style: { color: v.done ? 'var(--accent-mint)' : 'var(--text-muted)' }
                  })
                )
              ))
            ),
            h('p', { style: { fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '20px', textAlign: 'center' } },
              'Official Guideline Note: Vaccination dates should be validated against Mother-Child Protection (MCP) card.'
            )
          )
        )
      ),

      // --------------------------------------------------------------------
      // I. AI ASSISTANT CHAT & VOICE INTERACTION
      // --------------------------------------------------------------------
      h('section', { className: 'section-container', id: 'ai-assistant' },
        h('div', { className: 'section-header' },
          h('div', { className: 'eyebrow' }, t.aiAssistant),
          h('h2', { className: 'section-title' }, 'Nutrition Guidance, Explained Simply'),
          h('p', { className: 'section-subtitle' },
            'Ask questions via voice or text in English, Hindi, or Bengali. Powered by our contextual nutrition inference engine.'
          )
        ),

        h('div', { className: 'chat-showcase-window' },
          h('div', { className: 'chat-header-bar' },
            h('div', { className: 'chat-copilot-info' },
              h('div', { className: 'chat-avatar-ring' },
                h('i', { className: 'fa-solid fa-sparkles' })
              ),
              h('div', null,
                h('h4', { style: { fontSize: '0.95rem' } }, 'NutriMaa AI Copilot'),
                h('span', { style: { fontSize: '0.72rem', color: 'var(--accent-mint)' } }, '● Online · Multilingual Audio Ready')
              )
            ),
            h('div', { style: { display: 'flex', gap: '8px' } },
              h('span', { className: 'risk-pill-badge low' }, 'Speech Synthesis Active')
            )
          ),

          // Message Stream
          h('div', { className: 'chat-body-stream' },
            chatMessages.map((msg, idx) => (
              h('div', {
                key: idx,
                className: `chat-bubble ${msg.sender}`
              }, msg.text)
            )),
            isAiTyping && h('div', { className: 'chat-bubble ai' },
              h('span', { style: { fontStyle: 'italic', color: 'var(--text-muted)' } }, 'NutriMaa AI is analyzing nutrition guidelines...')
            )
          ),

          // Quick Suggestion Pills
          h('div', { className: 'chat-quick-prompts' },
            [
              'What foods boost hemoglobin during pregnancy?',
              'Affordable protein sources under ₹30?',
              'How to manage child underweight conditions?',
              'आयरन बढ़ाने के लिए क्या खाएं?'
            ].map((p, i) => (
              h('button', {
                key: i,
                className: 'prompt-pill',
                onClick: () => handleSendMessage(p)
              }, p)
            ))
          ),

          // Input Bar
          h('div', { className: 'chat-input-toolbar' },
            h('input', {
              type: 'text',
              placeholder: 'Ask about pregnancy diet, child growth, anemia, food swaps...',
              value: chatInput,
              onChange: (e) => setChatInput(e.target.value),
              onKeyDown: (e) => e.key === 'Enter' && handleSendMessage(),
              className: 'chat-input-field'
            }),
            h('button', {
              className: `voice-btn ${isListeningVoice ? 'listening' : ''}`,
              onClick: handleVoiceInput,
              title: 'Voice Input'
            },
              h('i', { className: `fa-solid ${isListeningVoice ? 'fa-microphone-lines' : 'fa-microphone'}` })
            ),
            h('button', {
              className: 'btn btn-primary btn-sm',
              onClick: () => handleSendMessage()
            },
              h('i', { className: 'fa-solid fa-paper-plane' })
            )
          )
        )
      ),

      // --------------------------------------------------------------------
      // J. OFFLINE-FIRST & SYSTEM ARCHITECTURE
      // --------------------------------------------------------------------
      h('section', { className: 'section-container', id: 'architecture-tech' },
        h('div', { className: 'section-header' },
          h('div', { className: 'eyebrow' }, t.offlineSync),
          h('h2', { className: 'section-title' }, 'Engineered for Real-World Rural Connectivity'),
          h('p', { className: 'section-subtitle' },
            'Frontline health workers operate in remote areas with zero cell connectivity. NutriMaa AI runs offline using local encrypted storage and seamlessly syncs to the cloud backend upon reconnection.'
          )
        ),

        // Interactive Network Simulator
        h('div', { className: 'glass-card', style: { padding: '24px', textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' } },
          h('h4', { style: { fontSize: '1.05rem', marginBottom: '8px' } }, 'Interactive Connectivity Simulator'),
          h('p', { style: { fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '16px' } },
            `Current Network State: ${isNetworkOnline ? '🟢 Connected (Online)' : '🔴 Disconnected (Offline Mode)'}`
          ),
          h('div', { style: { display: 'flex', justifyContent: 'center', gap: '14px' } },
            h('button', {
              className: `btn ${isNetworkOnline ? 'btn-secondary' : 'btn-primary'} btn-sm`,
              onClick: handleNetworkToggle
            },
              isNetworkOnline ? 'Disconnect Network (Simulate Offline)' : 'Reconnect & Sync Records'
            )
          ),
          isSyncing && h('p', { style: { color: 'var(--accent-mint)', fontSize: '0.78rem', marginTop: '12px' } },
            'Syncing local IndexedDB cache with PostgreSQL backend...'
          )
        ),

        // System Architecture Diagram
        h('div', { className: 'arch-diagram-card' },
          h('div', { className: 'arch-flow-row' },
            h('div', { className: 'arch-node-box' },
              h('div', { className: 'arch-node-icon' }, h('i', { className: 'fa-solid fa-mobile-screen-button' })),
              h('h4', { className: 'arch-node-title' }, 'Client Tier'),
              h('p', { className: 'arch-node-desc' }, 'Flutter Mobile & Responsive Web')
            ),
            h('div', { className: 'arch-connector' }, '→'),

            h('div', { className: 'arch-node-box' },
              h('div', { className: 'arch-node-icon' }, h('i', { className: 'fa-solid fa-server' })),
              h('h4', { className: 'arch-node-title' }, 'Backend API'),
              h('p', { className: 'arch-node-desc' }, 'Django REST & FastAPI')
            ),
            h('div', { className: 'arch-connector' }, '→'),

            h('div', { className: 'arch-node-box' },
              h('div', { className: 'arch-node-icon' }, h('i', { className: 'fa-solid fa-brain' })),
              h('h4', { className: 'arch-node-title' }, 'AI & ML Engine'),
              h('p', { className: 'arch-node-desc' }, 'PyTorch, XGBoost, YOLOv8')
            ),
            h('div', { className: 'arch-connector' }, '→'),

            h('div', { className: 'arch-node-box' },
              h('div', { className: 'arch-node-icon' }, h('i', { className: 'fa-solid fa-database' })),
              h('h4', { className: 'arch-node-title' }, 'Encrypted Data Store'),
              h('p', { className: 'arch-node-desc' }, 'PostgreSQL & Supabase')
            ),
            h('div', { className: 'arch-connector' }, '→'),

            h('div', { className: 'arch-node-box' },
              h('div', { className: 'arch-node-icon' }, h('i', { className: 'fa-solid fa-chart-line' })),
              h('h4', { className: 'arch-node-title' }, 'Government Analytics'),
              h('p', { className: 'arch-node-desc' }, 'Regional Health Decision Support')
            )
          )
        )
      ),

      // --------------------------------------------------------------------
      // K. WHY NUTRIMAA AI? & TRUST/SAFETY
      // --------------------------------------------------------------------
      h('section', { className: 'section-container', id: 'trust-safety' },
        h('div', { className: 'section-header' },
          h('div', { className: 'eyebrow' }, t.whyNutrimaa),
          h('h2', { className: 'section-title' }, 'A Paradigm Shift in Maternal-Child Nutrition'),
          h('p', { className: 'section-subtitle' },
            'Comparing legacy healthcare approaches with NutriMaa AI’s proactive nutrition intelligence.'
          )
        ),

        h('div', { className: 'comparison-matrix-grid' },
          // Traditional
          h('div', { className: 'compare-box traditional' },
            h('h3', { className: 'compare-header', style: { color: 'var(--accent-rose)' } },
              h('i', { className: 'fa-solid fa-circle-xmark' }),
              ' Traditional Health Model'
            ),
            h('ul', { className: 'compare-items-list' },
              h('li', null, h('i', { className: 'fa-solid fa-xmark' }), ' Generic, non-personalized diet advice'),
              h('li', null, h('i', { className: 'fa-solid fa-xmark' }), ' Manual paper-based growth monitoring'),
              h('li', null, h('i', { className: 'fa-solid fa-xmark' }), ' Delayed identification after complications emerge'),
              h('li', null, h('i', { className: 'fa-solid fa-xmark' }), ' Fragmented communication between clinics and home'),
              h('li', null, h('i', { className: 'fa-solid fa-xmark' }), ' Reliance on memory for immunization & follow-ups')
            )
          ),

          // NutriMaa AI
          h('div', { className: 'compare-box nutrimaa' },
            h('h3', { className: 'compare-header', style: { color: 'var(--accent-mint)' } },
              h('i', { className: 'fa-solid fa-circle-check' }),
              ' NutriMaa AI Platform'
            ),
            h('ul', { className: 'compare-items-list' },
              h('li', null, h('i', { className: 'fa-solid fa-check' }), ' AI-assisted personalized bioavailable meal plans'),
              h('li', null, h('i', { className: 'fa-solid fa-check' }), ' Real-time digital WHO growth & milestone tracking'),
              h('li', null, h('i', { className: 'fa-solid fa-check' }), ' Predictive ML early warning for malnutrition risks'),
              h('li', null, h('i', { className: 'fa-solid fa-check' }), ' Offline-first frontline sync with ASHA / Anganwadi loops'),
              h('li', null, h('i', { className: 'fa-solid fa-check' }), ' Multilingual voice copilot in Hindi, Bengali, English')
            )
          )
        ),

        // Trust & Safety Badges
        h('div', { className: 'trust-badges-grid' },
          [
            { title: 'Privacy-Aware', desc: 'Encrypted end-to-end telemetry and HIPAA/GDPR aligned anonymization.', icon: 'fa-solid fa-lock' },
            { title: 'Role-Based Access', desc: 'Strict granular permission boundaries for mothers, ASHA, and admins.', icon: 'fa-solid fa-user-shield' },
            { title: 'Evidence-Informed', desc: 'Calibrated with ICMR-NIN guidelines and WHO pediatric standards.', icon: 'fa-solid fa-book-medical' },
            { title: 'Professional Support', desc: 'Designed to empower healthcare workers, not replace clinicians.', icon: 'fa-solid fa-stethoscope' }
          ].map((item, idx) => (
            h('div', { key: idx, className: 'trust-badge-card' },
              h('div', { className: 'trust-badge-icon' }, h('i', { className: item.icon })),
              h('h4', { className: 'trust-badge-title' }, item.title),
              h('p', { className: 'trust-badge-desc' }, item.desc)
            ))
          )
        ),

        h('div', { className: 'disclaimer-box', style: { marginTop: '40px', textAlign: 'center' } },
          h('strong', null, 'Medical Disclaimer: '),
          t.disclaimer
        )
      ),

      // --------------------------------------------------------------------
      // L. FINAL VISION & JUDGE STATEMENT
      // --------------------------------------------------------------------
      h('section', { className: 'final-vision-section' },
        h('div', { className: 'eyebrow' }, 'OUR CORE MISSION'),
        h('h2', { className: 'final-vision-title' },
          'No mother left without nutrition guidance.',
          h('br'),
          h('span', { className: 'gradient-mint-text' }, 'No child left without a chance to grow.')
        ),

        h('div', { className: 'final-statement-box' },
          '“NutriMaa AI is not just a nutrition app. It is an ',
          h('strong', null, 'AI-powered nutrition intelligence platform'),
          ' designed to empower mothers, support children, assist healthcare workers, and enable data-driven decision making across communities.”'
        ),

        h('div', { style: { display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' } },
          h('button', {
            className: 'btn btn-primary',
            onClick: () => setAssessmentModalOpen(true)
          },
            'Start Guided Assessment',
            h('i', { className: 'fa-solid fa-sparkles' })
          ),
          h('button', {
            className: 'btn btn-secondary',
            onClick: () => setPitchDeckOpen(true)
          },
            'View Executive Pitch Deck',
            h('i', { className: 'fa-solid fa-presentation-screen' })
          )
        )
      ),

      // --------------------------------------------------------------------
      // M. FOOTER
      // --------------------------------------------------------------------
      h('footer', { className: 'site-footer' },
        h('div', { className: 'footer-top' },
          h('div', { className: 'brand-wrapper' },
            h('div', { className: 'brand-icon-box' }, h(BrandLogoSvg, { size: 20 })),
            h('div', { className: 'brand-text' },
              h('span', { className: 'brand-name' }, 'NutriMaa AI'),
              h('span', { className: 'brand-sub' }, 'NEXORA INITIATIVE')
            )
          ),
          h('div', { style: { fontSize: '0.88rem', color: 'var(--text-secondary)' } },
            'Empowering Every Mother, Nourishing Every Child Through Artificial Intelligence.'
          )
        ),
        h('div', { className: 'footer-bottom' },
          h('span', null, '© 2026 NutriMaa AI · Team NEXORA · All Rights Reserved.'),
          h('span', null, 'Designed for Healthcare Equity, Rural Resilience, and Child Survival.')
        )
      ),

      // --------------------------------------------------------------------
      // N. FLOATING CHAT TRIGGER FAB
      // --------------------------------------------------------------------
      h('button', {
        className: 'chat-fab-trigger',
        onClick: () => {
          const el = document.getElementById('ai-assistant');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        },
        title: 'Open NutriMaa AI Copilot'
      },
        h('i', { className: 'fa-solid fa-comments' })
      ),

      // --------------------------------------------------------------------
      // O. ASSESSMENT WIZARD MODAL
      // --------------------------------------------------------------------
      assessmentModalOpen && h(AssessmentModalComponent, {
        onClose: () => setAssessmentModalOpen(false)
      }),

      // --------------------------------------------------------------------
      // P. PITCH DECK PRESENTATION MODAL
      // --------------------------------------------------------------------
      pitchDeckOpen && h(PitchDeckModalComponent, {
        onClose: () => setPitchDeckOpen(false)
      })
    )
  );
}

// --------------------------------------------------------------------------
// 5. ASSESSMENT WIZARD MODAL COMPONENT
// --------------------------------------------------------------------------
function AssessmentModalComponent({ onClose }) {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState('Pregnant Woman');
  const [goal, setGoal] = useState('Anemia & Hemoglobin Optimization');
  const [dietaryHabit, setDietaryHabit] = useState('Vegetarian + Dairy');
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    h('div', {
      className: 'modal-backdrop',
      onClick: (e) => e.target === e.currentTarget && onClose()
    },
      h('div', { className: 'assessment-wizard-card' },
        h('button', { className: 'modal-close-btn', onClick: onClose },
          h('i', { className: 'fa-solid fa-xmark' })
        ),

        h('div', { className: 'eyebrow' }, 'NUTRIMAA CLINICAL ASSESSMENT'),

        h('div', { className: 'wizard-stepper' },
          [1, 2, 3].map((s) => (
            h('div', {
              key: s,
              className: `wizard-step-indicator ${step >= s ? 'active' : ''}`
            })
          ))
        ),

        !isCompleted ? h(Fragment, null,
          step === 1 && h(Fragment, null,
            h('h2', { style: { fontSize: '1.4rem', marginBottom: '8px' } }, 'Step 1: Select Your Profile'),
            h('p', { style: { fontSize: '0.88rem', color: 'var(--text-secondary)' } }, 'Please specify who this nutritional assessment is for:'),
            h('div', { className: 'wizard-options-list' },
              ['Pregnant Woman', 'Lactating Mother', 'Child / Infant (0 - 5 yrs)', 'ASHA / Frontline Worker'].map((opt) => (
                h('button', {
                  key: opt,
                  className: `wizard-opt-btn ${selectedRole === opt ? 'selected' : ''}`,
                  onClick: () => setSelectedRole(opt)
                },
                  h('span', null, opt),
                  h('i', { className: `fa-solid ${selectedRole === opt ? 'fa-circle-check' : 'fa-circle'}`, style: { color: selectedRole === opt ? 'var(--accent-mint)' : 'var(--text-muted)' } })
                )
              ))
            )
          ),

          step === 2 && h(Fragment, null,
            h('h2', { style: { fontSize: '1.4rem', marginBottom: '8px' } }, 'Step 2: Primary Health Focus'),
            h('p', { style: { fontSize: '0.88rem', color: 'var(--text-secondary)' } }, 'What is the primary target for this assessment cycle?'),
            h('div', { className: 'wizard-options-list' },
              [
                'Anemia & Hemoglobin Optimization',
                'Healthy Fetal / Infant Weight Gain',
                'Postpartum Lactation & Healing',
                'Balanced Complementary Weaning Foods'
              ].map((opt) => (
                h('button', {
                  key: opt,
                  className: `wizard-opt-btn ${goal === opt ? 'selected' : ''}`,
                  onClick: () => setGoal(opt)
                },
                  h('span', null, opt),
                  h('i', { className: `fa-solid ${goal === opt ? 'fa-circle-check' : 'fa-circle'}`, style: { color: goal === opt ? 'var(--accent-mint)' : 'var(--text-muted)' } })
                )
              ))
            )
          ),

          step === 3 && h(Fragment, null,
            h('h2', { style: { fontSize: '1.4rem', marginBottom: '8px' } }, 'Step 3: Dietary Pattern & Access'),
            h('p', { style: { fontSize: '0.88rem', color: 'var(--text-secondary)' } }, 'Select daily food accessibility:'),
            h('div', { className: 'wizard-options-list' },
              [
                'Vegetarian + Dairy (Lacto-Veg)',
                'Vegetarian + Eggs (Ovo-Lacto)',
                'Non-Vegetarian (Fish / Poultry)',
                'Millet & Plant-based Staples'
              ].map((opt) => (
                h('button', {
                  key: opt,
                  className: `wizard-opt-btn ${dietaryHabit === opt ? 'selected' : ''}`,
                  onClick: () => setDietaryHabit(opt)
                },
                  h('span', null, opt),
                  h('i', { className: `fa-solid ${dietaryHabit === opt ? 'fa-circle-check' : 'fa-circle'}`, style: { color: dietaryHabit === opt ? 'var(--accent-mint)' : 'var(--text-muted)' } })
                )
              ))
            )
          ),

          h('div', { style: { display: 'flex', justifyContent: 'space-between', marginTop: '30px' } },
            step > 1 ? h('button', {
              className: 'btn btn-secondary btn-sm',
              onClick: () => setStep(step - 1)
            }, 'Back') : h('div'),

            h('button', {
              className: 'btn btn-primary btn-sm',
              onClick: () => {
                if (step < 3) setStep(step + 1);
                else setIsCompleted(true);
              }
            }, step < 3 ? 'Continue →' : 'Generate Clinical Plan')
          )
        ) : h(Fragment, null,
          // Report
          h('div', { style: { textAlign: 'center', padding: '20px 0' } },
            h('div', { style: { width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0, 245, 160, 0.15)', color: 'var(--accent-mint)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '1.5rem' } },
              h('i', { className: 'fa-solid fa-check' })
            ),
            h('h2', { style: { fontSize: '1.5rem', marginBottom: '8px' } }, 'Personalized Plan Ready'),
            h('p', { style: { fontSize: '0.88rem', color: 'var(--text-secondary)' } },
              `Customized nutrition matrix generated for ${selectedRole} targeting ${goal}.`
            )
          ),

          h('div', { style: { background: 'rgba(10, 17, 24, 0.8)', padding: '18px', borderRadius: '12px', border: '1px solid var(--border-subtle)', marginBottom: '20px' } },
            h('div', { style: { fontSize: '0.84rem', color: 'var(--accent-mint)', fontWeight: '700', marginBottom: '8px' } }, 'KEY AI RECOMMENDATIONS:'),
            h('ul', { style: { listStyle: 'none', display: 'grid', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' } },
              h('li', null, '✓ Daily intake: 25g roasted chana + 15g jaggery for non-heme iron synthesis.'),
              h('li', null, '✓ Add 1 serving of Moringa / Sahjan leaves or Spinach (Palak) with lemon.'),
              h('li', null, '✓ Ragi porridge with milk to meet 1000 mg/day elemental calcium target.'),
              h('li', null, '✓ Ensure minimum 2.5 Litres of water daily to maintain amniotic volume.')
            )
          ),

          h('button', {
            className: 'btn btn-primary',
            style: { width: '100%' },
            onClick: onClose
          }, 'Done & View Dashboard')
        )
      )
    )
  );
}

// --------------------------------------------------------------------------
// 6. EXECUTIVE PITCH DECK MODAL (XAMPUS INSPIRED 10 SLIDES)
// --------------------------------------------------------------------------
function PitchDeckModalComponent({ onClose }) {
  const [slide, setSlide] = useState(0);

  const SLIDES = [
    {
      eyebrow: 'PROJECT · NUTRIMAA AI',
      title: 'Empowering Every Mother, Nourishing Every Child',
      subtitle: 'An AI-powered nutrition intelligence and maternal-child health platform designed to eradicate preventable malnutrition and assist frontline health systems.',
      meta: 'TEAM: NEXORA · REFERENCE: XAMPUS INSPIRATION'
    },
    {
      eyebrow: 'THE PROBLEM',
      title: 'Nutrition should not depend on guesswork.',
      subtitle: 'Over 43% of pregnant women suffer from anemia and 35.5% of children face stunting due to manual, delayed screening and one-size-fits-all generic diets.',
      meta: 'CHALLENGE: 1 : 12,000 Specialist-to-Patient Ratio in Rural Communities'
    },
    {
      eyebrow: 'THE SOLUTION',
      title: 'From reactive healthcare to proactive intelligence.',
      subtitle: 'NutriMaa AI unifies clinical biometrics, computer vision food recognition, ML malnutrition risk forecasting, and frontline offline synchronization.',
      meta: 'ECOSYSTEM: Assess → Analyze → Predict → Recommend → Monitor → Follow Up'
    },
    {
      eyebrow: 'NUTRITION INTELLIGENCE',
      title: 'Connecting nutrient need with everyday traditional foods.',
      subtitle: 'Our smart recommendation engine matches clinical deficiencies with affordable local Indian staples like Moringa, Ragi, Roasted Chana, and Spinach.',
      meta: 'ACCESSIBILITY: High Bioavailability Combinations under ₹30 / day'
    },
    {
      eyebrow: 'COMPUTER VISION AI',
      title: 'Automated Food Recognition via YOLOv8.',
      subtitle: 'Enables mobile camera meal scanning, automated bounding box detection, calorie estimation, and micronutrient breakdown in sub-50ms latency.',
      meta: 'TECH PROTOTYPE: YOLOv8-nano + OpenCV Mobile Pipeline'
    },
    {
      eyebrow: 'ML RISK FORECASTING',
      title: 'Predictive Malnutrition Scoring Engine.',
      subtitle: 'Ensemble Random Forest & XGBoost models analyze multi-factor inputs (Hb, Gestational Age, Dietary Diversity) to forecast risk levels before acute onset.',
      meta: 'SAFETY: Clinical Screening & Decision-Support Model'
    },
    {
      eyebrow: 'FRONTLINE INTEGRATION',
      title: 'Technology for the people closest to the community.',
      subtitle: 'Optimized for Anganwadi (ICDS) and ASHA workers with large touch-friendly interfaces, rapid bulk triage, and offline-first IndexedDB sync.',
      meta: 'RELIABILITY: 100% Functionality with Zero Cellular Network'
    },
    {
      eyebrow: 'TECHNICAL FEASIBILITY',
      title: 'Modern, Scalable & Production-Ready Architecture.',
      subtitle: 'Frontend in Flutter / Web · Backend in FastAPI & Django REST · Database in PostgreSQL / Supabase · AI in PyTorch & TensorFlow.',
      meta: 'STACK: High throughput microservices with role-based security'
    },
    {
      eyebrow: 'IMPACT & POLICY',
      title: 'From individual health to population-level insight.',
      subtitle: 'Aggregated regional health indicators provide government administrators with real-time supply chain and intervention efficiency metrics.',
      meta: 'IMPACT: Data-driven resource allocation and stunting reduction'
    },
    {
      eyebrow: 'FINAL VISION',
      title: 'No mother left without guidance. No child left behind.',
      subtitle: 'NutriMaa AI connects artificial intelligence, nutrition intelligence, and community healthcare to support healthier generations.',
      meta: 'TEAM NEXORA · NUTRIMAA AI'
    }
  ];

  const current = SLIDES[slide];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    h('div', {
      className: 'modal-backdrop',
      onClick: (e) => e.target === e.currentTarget && onClose()
    },
      h('div', { className: 'pitch-deck-container' },
        h('div', { className: 'pitch-deck-header' },
          h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
            h('span', { className: 'brand-icon-box', style: { width: '28px', height: '28px' } },
              h(BrandLogoSvg, { size: 14 })
            ),
            h('strong', { style: { fontSize: '0.88rem' } }, 'NutriMaa AI · Executive Presentation')
          ),
          h('div', { style: { display: 'flex', alignItems: 'center', gap: '10px' } },
            h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' } },
              `SLIDE ${String(slide + 1).padStart(2, '0')} / ${String(SLIDES.length).padStart(2, '0')}`
            ),
            h('button', { className: 'modal-close-btn', style: { position: 'static', width: '28px', height: '28px' }, onClick: onClose },
              h('i', { className: 'fa-solid fa-xmark' })
            )
          )
        ),

        h('div', { className: 'pitch-deck-slide-content' },
          h('div', { className: 'eyebrow' }, current.eyebrow),
          h('h1', { className: 'pitch-slide-title gradient-mint-text' }, current.title),
          h('p', { style: { fontSize: '1.18rem', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '780px', marginBottom: '30px' } }, current.subtitle),
          h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' } },
            current.meta
          )
        ),

        h('div', { className: 'pitch-deck-footer' },
          h('button', {
            className: 'btn btn-secondary btn-sm',
            disabled: slide === 0,
            style: { opacity: slide === 0 ? 0.3 : 1 },
            onClick: () => setSlide(slide - 1)
          }, '← Previous'),

          h('div', { style: { display: 'flex', gap: '6px' } },
            SLIDES.map((_, i) => (
              h('div', {
                key: i,
                onClick: () => setSlide(i),
                style: {
                  width: i === slide ? '24px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  background: i === slide ? 'var(--accent-mint)' : 'rgba(255,255,255,0.15)',
                  cursor: 'pointer',
                  transition: '0.2s'
                }
              })
            ))
          ),

          h('button', {
            className: 'btn btn-primary btn-sm',
            disabled: slide === SLIDES.length - 1,
            style: { opacity: slide === SLIDES.length - 1 ? 0.3 : 1 },
            onClick: () => setSlide(slide + 1)
          }, 'Next →')
        )
      )
    )
  );
}

// --------------------------------------------------------------------------
// 7. MOUNT APPLICATION TO ROOT
// --------------------------------------------------------------------------
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(h(NutriMaaApp));
}
