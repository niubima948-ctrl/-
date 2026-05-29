import { useState, useMemo, useEffect, useRef } from 'react';
import { parasiteData } from './data';
import { Category } from './types';
import { ParasiteCard } from './components/ParasiteCard';
import { 
  Search, 
  Microscope, 
  Trophy, 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  BookOpen 
} from 'lucide-react';

interface QuizQuestion {
  stageId: string;
  correctAnswer: string;
  image: string;
  options: string[];
  parasiteId: string;
  category: Category;
}

type ExamState = 'start' | 'quiz' | 'results';
type ExamLanguage = 'zh' | 'en';

function generateExam(data: typeof parasiteData, lang: ExamLanguage): QuizQuestion[] {
  const allStages: { stage: any; parasite: any }[] = [];
  data.forEach(p => {
    p.stages.forEach(s => {
      if (s.imageUrls && s.imageUrls.length > 0) {
        allStages.push({ stage: s, parasite: p });
      }
    });
  });

  const shuffledStages = [...allStages].sort(() => 0.5 - Math.random());
  const selectedStages = shuffledStages.slice(0, 10);

  return selectedStages.map(item => {
    const { stage, parasite } = item;
    const randomImage = stage.imageUrls[Math.floor(Math.random() * stage.imageUrls.length)];
    
    const correctAnswer = lang === 'zh'
      ? stage.name.replace(/^\d+\.\s*/, '')
      : stage.englishName;

    // Filter out correct answer to prevent duplicate in distractors
    const distractors = allStages
      .filter(x => x.stage.id !== stage.id)
      .map(x => (lang === 'zh' ? x.stage.name.replace(/^\d+\.\s*/, '') : x.stage.englishName))
      .filter(name => name && name.trim() !== '' && name !== correctAnswer);

    const uniqueDistractors = Array.from(new Set(distractors));
    const selectedDistractors = uniqueDistractors
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const options = [correctAnswer, ...selectedDistractors].sort(() => 0.5 - Math.random());

    return {
      stageId: stage.id,
      correctAnswer,
      image: randomImage,
      options,
      parasiteId: parasite.id,
      category: parasite.category as Category
    };
  });
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category | '全部'>('全部');
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll hiding header states
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const isProgrammaticScroll = useRef(false);
  const programmaticScrollTimeout = useRef<any>(null);

  // Scroll listener to hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at the very top of the page
      if (currentScrollY <= 10) {
        setShowHeader(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // If it is a programmatic scroll (from tabs/dropdowns), keep header visible
      if (isProgrammaticScroll.current) {
        lastScrollY.current = currentScrollY;
        return;
      }

      // Ignore minor scroll shifts
      if (Math.abs(currentScrollY - lastScrollY.current) < 8) {
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        // Scroll down -> hide header
        setShowHeader(false);
      } else {
        // Scroll up -> show header
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (programmaticScrollTimeout.current) clearTimeout(programmaticScrollTimeout.current);
    };
  }, []);

  // Exam States
  const [isExamMode, setIsExamMode] = useState(false);
  const [examState, setExamState] = useState<ExamState>('start');
  const [examLanguage, setExamLanguage] = useState<ExamLanguage>('zh');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  const categories: (Category | '全部')[] = ['全部', '医学原虫', '医学吸虫', '医学绦虫', '医学线虫'];

  const dropdownAlignment: Record<Category, string> = {
    '医学原虫': 'left-0 origin-top-left',
    '医学吸虫': 'left-1/2 -translate-x-1/2 origin-top',
    '医学绦虫': 'left-1/2 -translate-x-1/2 origin-top',
    '医学线虫': 'right-0 origin-top-right',
  };

  const handleSpeciesClick = (category: Category, parasiteId: string) => {
    setActiveCategory(category);
    setShowHeader(true);
    isProgrammaticScroll.current = true;
    if (programmaticScrollTimeout.current) clearTimeout(programmaticScrollTimeout.current);
    programmaticScrollTimeout.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 1000);

    setTimeout(() => {
      const element = document.getElementById(parasiteId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleStartExam = (lang: ExamLanguage) => {
    setExamLanguage(lang);
    const newQuestions = generateExam(parasiteData, lang);
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setExamState('quiz');
  };

  const handleSelectOption = (option: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: option
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < 9) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setExamState('results');
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const score = useMemo(() => {
    let correctCount = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.correctAnswer) {
        correctCount += 10;
      }
    });
    return correctCount;
  }, [questions, userAnswers]);

  const correctAnswersCount = useMemo(() => {
    return questions.filter((q, index) => userAnswers[index] === q.correctAnswer).length;
  }, [questions, userAnswers]);

  const filteredParasites = useMemo(() => {
    return parasiteData.filter(p => {
      const matchesCategory = activeCategory === '全部' || p.category === activeCategory;
      const matchesSearch = p.chineseName.includes(searchQuery) || 
                            p.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description.includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-teal-200">
      {/* Header */}
      <header className={`sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Microscope className="w-6 h-6 text-teal-600" />
            <h1 className="text-lg font-bold tracking-tight text-gray-900 hidden sm:block">
              医学寄生虫学<span className="text-teal-600">实验识图系统</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
             {/* Segmented Switcher */}
             <div className="flex bg-gray-100 p-0.5 rounded-xl border border-gray-200/50 text-xs font-semibold shrink-0">
               <button
                 onClick={() => setIsExamMode(false)}
                 className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                   !isExamMode
                     ? 'bg-white text-teal-700 shadow-sm font-bold'
                     : 'text-gray-500 hover:text-gray-700'
                 }`}
               >
                 学习模式
               </button>
               <button
                 onClick={() => {
                   setIsExamMode(true);
                   if (questions.length === 0) {
                     setExamState('start');
                   }
                 }}
                 className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                   isExamMode
                     ? 'bg-white text-teal-700 shadow-sm font-bold'
                     : 'text-gray-500 hover:text-gray-700'
                 }`}
               >
                 在线测试
               </button>
             </div>

             {/* Search input (only visible in study mode) */}
             {!isExamMode && (
                <div className="relative group w-32 sm:w-60 transition-all">
                   <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                     <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400 group-focus-within:text-teal-500 transition-colors" />
                   </div>
                   <input
                     type="text"
                     placeholder="搜索..."
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="block w-full pl-8 sm:pl-10 pr-2.5 sm:pr-3 py-1 sm:py-1.5 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-xs transition-all shadow-inner"
                   />
                </div>
             )}
          </div>
        </div>
        
        {/* Mobile / Horizontal Category Nav (only visible in study mode) */}
        {!isExamMode && (
          <div className="border-t border-gray-100 bg-white/50 overflow-x-auto md:overflow-visible hide-scrollbar">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex space-x-2 md:overflow-visible">
                {categories.map((cat) => (
                  <div key={cat} className="relative group">
                    <button
                      onClick={() => {
                        setActiveCategory(cat);
                        setShowHeader(true);
                        isProgrammaticScroll.current = true;
                        if (programmaticScrollTimeout.current) clearTimeout(programmaticScrollTimeout.current);
                        programmaticScrollTimeout.current = setTimeout(() => {
                          isProgrammaticScroll.current = false;
                        }, 1000);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                        activeCategory === cat
                          ? 'bg-teal-600 text-white shadow-sm'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {cat}
                    </button>

                    {cat !== '全部' && (
                      <div className={`absolute top-full pt-1.5 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform scale-95 group-hover:scale-100 ${dropdownAlignment[cat as Category]}`}>
                        <div className="rounded-2xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 py-2">
                          <div className="px-4 pb-2 mb-1.5 border-b border-gray-100 text-xs font-semibold text-gray-400 select-none">
                            {cat} 小类列表
                          </div>
                          <div className="max-h-80 overflow-y-auto scrollbar-thin">
                            {parasiteData
                              .filter((p) => p.category === cat)
                              .map((parasite) => (
                                <button
                                  key={parasite.id}
                                  onClick={() => handleSpeciesClick(cat as Category, parasite.id)}
                                  className="w-full text-left px-4 py-2 hover:bg-teal-50/80 text-gray-700 hover:text-teal-700 transition-colors block cursor-pointer group/item"
                                >
                                  <span className="font-semibold block text-sm transition-colors">
                                    {parasite.chineseName}
                                  </span>
                                  <span className="font-mono italic text-[10px] text-gray-400 group-hover/item:text-teal-600/70 transition-colors block mt-0.5">
                                    {parasite.scientificName}
                                  </span>
                                </button>
                              ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isExamMode ? (
          /* Render Exam Mode UI */
          examState === 'start' ? (
            <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden mt-4 animate-fade-in-up">
              <div className="p-8 sm:p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-50 text-teal-600 mb-6">
                  <Trophy className="w-10 h-10" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-955">
                  医学寄生虫学<span className="text-teal-600">模拟测验</span>
                </h2>
                <p className="mt-4 text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
                  本测验从系统图库中随机抽取 10 张镜下图片，考查您对不同寄生虫发育阶段（如虫卵、包囊、滋养体、成虫等）形态特征的识别能力。
                </p>

                {/* Language Selector */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                  <button
                    onClick={() => setExamLanguage('zh')}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                      examLanguage === 'zh'
                        ? 'border-teal-500 bg-teal-50/50 shadow-sm ring-1 ring-teal-500'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-bold ${examLanguage === 'zh' ? 'text-teal-800' : 'text-gray-950'}`}>
                        中文名称测验
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 font-semibold scale-90">ZH</span>
                    </div>
                    <p className="mt-2 text-xs text-gray-500 leading-normal">
                      考查镜下图片与中文发育阶段（如：溶组织内阿米巴包囊）的识别匹配。
                    </p>
                  </button>

                  <button
                    onClick={() => setExamLanguage('en')}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                      examLanguage === 'en'
                        ? 'border-teal-500 bg-teal-50/50 shadow-sm ring-1 ring-teal-500'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-bold ${examLanguage === 'en' ? 'text-teal-800' : 'text-gray-950'}`}>
                        英文与学术名称测验
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold scale-90">EN</span>
                    </div>
                    <p className="mt-2 text-xs text-gray-500 leading-normal">
                      考查拉丁学名与英文学术发育阶段名称（如：Giardia lamblia cyst）的匹配。
                    </p>
                  </button>
                </div>

                <div className="mt-10">
                  <button
                    onClick={() => handleStartExam(examLanguage)}
                    className="w-full sm:w-auto px-8 py-3.5 bg-teal-600 hover:bg-teal-700 active:scale-[0.98] text-white rounded-full font-bold shadow-lg shadow-teal-600/20 transition-all cursor-pointer text-sm"
                  >
                    开始测验
                  </button>
                </div>
              </div>
            </div>
          ) : examState === 'quiz' && questions.length > 0 ? (
            <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden mt-4 animate-fade-in-up" key={currentQuestionIndex}>
              {/* Progress bar */}
              <div className="w-full bg-gray-100 h-1.5 relative">
                <div
                  className="bg-teal-500 h-1.5 transition-all duration-300 rounded-r-full"
                  style={{ width: `${((currentQuestionIndex + 1) / 10) * 100}%` }}
                ></div>
              </div>

              <div className="p-6 sm:p-8">
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    第 {currentQuestionIndex + 1} / 10 题
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-50 text-teal-700">
                    {examLanguage === 'zh' ? '中文测试模式' : '英文学术测试模式'}
                  </span>
                </div>

                {/* Main content grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Image side */}
                  <div className="flex flex-col items-center justify-center bg-gray-55 rounded-2xl border border-gray-200/50 p-4 aspect-[4/3] md:aspect-auto md:h-80 overflow-hidden relative group">
                    <img
                      src={questions[currentQuestionIndex].image}
                      alt="显微镜下形态"
                      className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Options side */}
                  <div className="flex flex-col justify-center space-y-3">
                    <div className="text-sm font-semibold text-gray-500 mb-2">
                      根据图片选择最精确的描述阶段：
                    </div>
                    {questions[currentQuestionIndex].options.map((option, oIdx) => {
                      const isSelected = userAnswers[currentQuestionIndex] === option;
                      const label = String.fromCharCode(65 + oIdx); // A, B, C, D
                      return (
                        <button
                          key={option}
                          onClick={() => handleSelectOption(option)}
                          className={`w-full flex items-center gap-3 p-4 rounded-xl border text-left transition-all cursor-pointer active:scale-[0.99] ${
                            isSelected
                              ? 'border-teal-500 bg-teal-50/70 shadow-sm ring-1 ring-teal-500 text-teal-900 font-medium'
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50/80 text-gray-700'
                          }`}
                        >
                          <span className={`flex items-center justify-center w-6 h-6 rounded-full border text-xs font-bold shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-teal-600 border-teal-600 text-white'
                              : 'bg-white border-gray-300 text-gray-500'
                          }`}>
                            {label}
                          </span>
                          <span className="text-xs sm:text-sm break-words leading-relaxed flex-1">
                            {option}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Actions and Dot Map */}
                <div className="border-t border-gray-150 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-y-4">
                  {/* Prev / Next buttons */}
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={handlePrev}
                      disabled={currentQuestionIndex === 0}
                      className={`flex items-center gap-1.5 px-4 py-2 border rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                        currentQuestionIndex === 0
                          ? 'border-gray-150 bg-gray-50 text-gray-300 cursor-not-allowed'
                          : 'border-gray-250 hover:bg-gray-50 text-gray-700 active:scale-95'
                      }`}
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      上一题
                    </button>
                    <button
                      onClick={handleNext}
                      className={`flex items-center justify-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold text-white shadow-md active:scale-95 transition-all cursor-pointer shrink-0 ${
                        currentQuestionIndex === 9
                          ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-600/10'
                          : 'bg-teal-600 hover:bg-teal-700 shadow-teal-600/10'
                      }`}
                    >
                      {currentQuestionIndex === 9 ? '提交试卷' : '下一题'}
                      {currentQuestionIndex !== 9 && <ArrowRight className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Little Dot Map for question navigator */}
                  <div className="flex items-center gap-1.5 flex-wrap justify-center">
                    {questions.map((_, index) => {
                      const isCurrent = currentQuestionIndex === index;
                      const isAnswered = userAnswers[index] !== undefined;
                      return (
                        <button
                          key={index}
                          onClick={() => setCurrentQuestionIndex(index)}
                          title={`第 ${index + 1} 题`}
                          className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
                            isCurrent
                              ? 'ring-2 ring-teal-500 bg-teal-600 text-white shadow-sm font-extrabold scale-110'
                              : isAnswered
                              ? 'bg-teal-100/70 border border-teal-200 text-teal-800'
                              : 'bg-gray-100 border border-gray-250 text-gray-500 hover:bg-gray-200'
                          }`}
                        >
                          {index + 1}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Render Results Page */
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
              {/* Score Card Dashboard */}
              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
                <div className="p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-br from-teal-50 via-white to-white">
                  <div className="text-center md:text-left">
                    <div className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                      测验完成
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                      考试结果分析
                    </h2>
                    <p className="mt-3 text-sm text-gray-500 max-w-md leading-relaxed">
                      {score >= 90
                        ? '太棒了！您的镜下形态识别能力非常优秀，完美掌握了相关知识要点！'
                        : score >= 60
                        ? '表现不错！您已经掌握了大部分寄生虫特征，部分易混阶段可以再去温习一下。'
                        : '继续加油！部分形态特征还需要继续学习巩固，建议针对错题进行专项复习。'}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                      <button
                        onClick={() => handleStartExam(examLanguage)}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 active:scale-95 text-white text-xs font-bold rounded-full shadow-lg shadow-teal-600/15 cursor-pointer transition-all"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        重新测验
                      </button>
                      <button
                        onClick={() => setIsExamMode(false)}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-gray-250 hover:bg-gray-50 active:scale-95 text-gray-700 text-xs font-bold rounded-full cursor-pointer transition-all"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        回到学习模式
                      </button>
                    </div>
                  </div>

                  {/* Score circle */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#F3F4F6"
                          strokeWidth="8"
                          fill="transparent"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke={score >= 90 ? '#0D9488' : score >= 60 ? '#D97706' : '#DC2626'}
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={2 * Math.PI * 40}
                          strokeDashoffset={2 * Math.PI * 40 * (1 - score / 100)}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center">
                        <span className="text-3xl font-extrabold text-gray-950">{score}</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">分</span>
                      </div>
                    </div>
                    <div className="mt-3 text-xs font-bold text-gray-500 text-center">
                      答对 <span className="text-emerald-600 font-extrabold">{correctAnswersCount}</span> / 10 题
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed review list */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 px-1">错题与解答回顾</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {questions.map((q, idx) => {
                    const isCorrect = userAnswers[idx] === q.correctAnswer;
                    return (
                      <div
                        key={idx}
                        className={`bg-white rounded-2xl border overflow-hidden p-5 flex gap-4 transition-all ${
                          isCorrect
                            ? 'border-emerald-100 shadow-sm shadow-emerald-50/50'
                            : 'border-rose-100 shadow-sm shadow-rose-50/50'
                        }`}
                      >
                        {/* Small preview image */}
                        <div className="w-24 h-24 bg-gray-50 rounded-xl border border-gray-150 p-1 shrink-0 flex items-center justify-center overflow-hidden">
                          <img src={q.image} alt="题目预览" className="w-full h-full object-contain rounded-lg" />
                        </div>

                        {/* Answers summary info */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-extrabold text-gray-400">第 {idx + 1} 题</span>
                              {isCorrect ? (
                                <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 px-1.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-100">
                                  <CheckCircle2 className="w-2.5 h-2.5" />
                                  正确
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-rose-600 px-1.5 py-0.5 rounded-full bg-rose-50 border border-rose-100">
                                  <XCircle className="w-2.5 h-2.5" />
                                  错误
                                </span>
                              )}
                            </div>
                            
                            {/* User Answer */}
                            <div className="mt-2 text-xs">
                              <span className="text-gray-400 block mb-0.5">您的答案：</span>
                              <span className={`font-medium block break-all text-xs leading-relaxed ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                                {userAnswers[idx] || '(未回答)'}
                              </span>
                            </div>

                            {/* Correct Answer */}
                            {!isCorrect && (
                              <div className="mt-1.5 text-xs">
                                <span className="text-gray-400 block mb-0.5">正确答案：</span>
                                <span className="font-semibold text-emerald-700 block break-all text-xs leading-relaxed">
                                  {q.correctAnswer}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Go Study link */}
                          <div className="mt-3 text-right">
                            <button
                              onClick={() => {
                                setIsExamMode(false);
                                handleSpeciesClick(q.category, q.parasiteId);
                              }}
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-600 hover:text-teal-700 transition-colors cursor-pointer"
                            >
                              <BookOpen className="w-3.5 h-3.5" />
                              去温习该虫种
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )
        ) : (
          /* Render Study Mode UI */
          filteredParasites.length === 0 ? (
            <div className="text-center py-20 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                 <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">未找到相关虫种</h3>
              <p className="text-gray-500 mt-1">请尝试其他关键词或类别</p>
            </div>
          ) : (
            <div className="space-y-8 animate-fade-in-up" key={activeCategory}>
              {filteredParasites.map(parasite => (
                <ParasiteCard key={parasite.id} parasite={parasite} />
              ))}
            </div>
          )
        )}
      </main>
    </div>
  );
}
