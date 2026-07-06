// عناصر الصفحة (مع حماية)
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const typing = document.getElementById("typing");

// 📚 قاعدة بيانات ذكية
const responses = [
  {
    keywords: ["ما هو المشروع", "ايه هو المشروع", "ايه المشروع", "ممكن تعرفني المشروع", "اشرحلي المشروع", "المشروع عبارة عن ايه", "المشروع ده ايه", "ايه فكرة المشروع", "عايز اعرف المشروع", "وضحلي المشروع", "قوللي عن المشروع", "المشروع بيعمل ايه", "ايه استخدام المشروع", "المشروع ده بيستخدم في ايه", "ممكن شرح بسيط للمشروع", "اديني فكرة عن المشروع", "يعني ايه SolTech", "ايه SolTech", "SolTech ده ايه", "project ده ايه", "what is the project", "tell me about the project", "project idea ايه", "define the project", "project description", "عايز description للمشروع", "المشروع معمول ليه", "المشروع بيتكلم عن ايه", "المشروع فكرته ايه"],
    answer: "هو وحدة معالجة حرارية ذكية بتقوم بالتسخين والبسترة والتعقيم والتبريد."
  },
  {
    keywords: ["وظيفة", "بيعمل", "بيسوي", "عمل", "function", "بيشتغل ازاي"],
    answer: "الجهاز بيعمل تسخين وتعقيم وتبريد بدقة باستخدام PID."
  },
  {
    keywords: ["سعة", "حجم", "لتر", "capacity", "كام لتر"],
    answer: "السعة 20 لتر لكل دورة."
  },
  {
    keywords: ["طاقة", "كهرباء", "فولت", "power", "بيشتغل على ايه"],
    answer: "يعمل على كهرباء 220 فولت أو طاقة شمسية."
  },
  {
    keywords: ["تحكم", "controller", "pid", "نظام التحكم"],
    answer: "نظام التحكم عبارة عن Microcontroller + PID Controller."
  },
  {
    keywords: ["تبريد", "cooling", "بيبرد ازاي"],
    answer: "تبريد مائي باستخدام Water Jacket."
  },
  {
    keywords: ["خامات", "مصنوع من", "material", "ستانلس"],
    answer: "مصنوع من Stainless Steel 304 آمن غذائياً."
  },
  {
    keywords: ["مكونات", "اجزاء", "بيتكون من", "components"],
    answer: "خزان + سخان + حساس + مضخة + لوحة تحكم."
  },
  {
    keywords: ["حساس", "sensor", "pt100"],
    answer: "يستخدم حساس حرارة PT100 بدقة عالية."
  },
  {
    keywords: ["مضخة", "pump"],
    answer: "يحتوي على مضخة 12V لضمان توزيع الحرارة بشكل منتظم."
  },
  {
    keywords: ["سخان", "heater"],
    answer: "السخان بقدرة 1.5 كيلو وات لتسخين سريع وفعال."
  },
  {
    keywords: ["السلامة", "امان", "pressure"],
    answer: "يحتوي على صمام ضغط لزيادة الأمان أثناء التشغيل."
  },
  {
    keywords: ["مرحبا", "اهلا", "hello", "hi"],
    answer: "أهلاً 👋 اسألني عن المشروع."
  },
  {
    keywords: ["مبرمج الويب سايت", "مصمم السايت", "مين اللي عمل السايت", "مين مصمم الموقع", "مصمم الموقع"],
    answer: "هو (احمد الصبحي) طالب في كلية الصناعه والطاقه - قسم تكنولوجيا التصنيع الغذائي و هو ايضاً عضو في فريق SOLTECH والمسؤل عن جزء التصميم والبرمجه"
  },
  {
   keywords: [
    "المشروع ده ايه", "ايه المشروع", "يعني ايه المشروع", "عرفني المشروع",
    "المشروع بتاعكم ايه", "ده ايه", "ايه ده", "فكرة المشروع ايه",
    "احكيلي عن المشروع", "المشروع عبارة عن ايه",
    "ما هو المشروع", "ما طبيعة المشروع", "ما فكرة المشروع",
    "عرف المشروع", "اشرح المشروع", "ما هذا المشروع",
    "what is the project", "project meaning", "tell me about the project",
    "what is this project", "project idea", "explain the project",
    "project description", "what does this project do",
    "can you describe the project", "project overview",
    "about the project", "define the project",
    "what is soltech project", "soltech ايه"
    ],
   answer: "هو وحدة معالجة حرارية ذكية متعددة الوظائف (Smart Thermal Processing Unit)."
 },
 {
   keywords: [
    "المشروع تابع لأنهي كلية", "في كلية ايه", "انتو منين",
    "المشروع ده تبع ايه", "انتو طلاب فين", "الكلية ايه",
    "تابعين لأي جامعة", "المشروع ده تابع لمين",
    "انتو في كلية ايه", "المشروع معمول فين",
    "ما هي الكلية", "يتبع أي كلية", "ما الجهة التعليمية",
    "اسم الكلية", "الكلية التابع لها المشروع",
    "ما المؤسسة التعليمية", "أين تم تنفيذ المشروع",
    "which college", "what college", "project belongs to which college",
    "where is this project from", "university name",
    "which faculty", "project university",
    "where was this made", "college of project",
    "origin of project", "project institution",
    "academic affiliation", "faculty name"
   ],
   answer: "كلية تكنولوجيا صناعة وطاقة."
 },
 {
   keywords: [
    "المشكلة اللي بيحلها ايه", "المشروع ده بيحل ايه",
    "ليه عملتوا المشروع", "ايه المشكلة",
    "كان في مشكلة ايه", "هدف المشروع ايه",
    "بيحل مشكلة ايه في الأكل", "المشكلة الأساسية",
    "المشروع مفيد في ايه", "ايه الأزمة اللي بيحلها",
    "ما المشكلة الرئيسية", "ما الهدف من المشروع",
    "ما الفائدة", "ما المشكلة التي يعالجها",
    "سبب إنشاء المشروع", "ما الغرض",
    "problem solved", "what problem does it solve",
    "why this project", "project purpose",
    "main problem", "what issue",
    "problem in food industry", "what challenge",
    "reason for project", "what does it fix",
    "main issue solved", "food problem solution"
   ],
   answer: "عدم التحكم بدقة في درجة الحرارة خاصة للمنتجات الحساسة مثل العسل والشوكولاتة مما يؤدي لفقد الجودة."
 },
 {
   keywords: [
    "بيحل المشكلة ازاي", "ازاي اتحلت المشكلة",
    "طريقة الحل ايه", "ازاي بتتحكم في الحرارة",
    "بيشتغل ازاي", "ازاي بيعالج الحرارة",
    "نظام التحكم عامل ازاي", "التحكم بيتم ازاي",
    "ازاي بيظبط الحرارة", "كيف يعمل",
    "كيف يحل المشكلة", "آلية العمل",
    "كيف يتم التحكم", "طريقة التشغيل",
    "كيف يتم الضبط", "ما التقنية المستخدمة",
    "how does it solve", "how it works",
    "working mechanism", "how control works",
    "temperature control how", "system operation",
    "control system", "how it handles heat",
    "solution method", "technology used",
    "process method", "how system functions"
   ],
   answer: "باستخدام حساسات دقيقة مثل PT100 و DS18B20 مع نظام تحكم ذكي مثل Arduino أو Raspberry Pi."
 },
 {
   keywords: [
    "بيوفر كهرباء ازاي", "استهلاك الطاقة ايه",
    "بيوفر طاقة؟", "هل موفر للكهرباء",
    "بيشتغل بكام كهرباء", "هل فيه طاقة شمسية",
    "بيستخدم طاقة ايه", "موفر ولا لأ",
    "حل مشكلة الكهرباء ايه", "استهلاك الطاقة",
    "energy problem", "power consumption",
    "energy saving", "does it save energy",
    "what power used", "electricity usage",
    "energy efficiency", "power solution",
    "solar energy", "energy source",
    "low power?", "power optimization",
    "electric usage", "power system",
    "energy cost", "energy reduction",
    "how saves power", "power improvement",
    "alternative energy", "solar usage"
   ],
   answer: "يقلل استهلاك الطاقة باستخدام مصدر طاقة شمسية بجانب الكهرباء."
  },
  {
   keywords: [
    "بيعمل كام وظيفة", "عدد الوظائف ايه",
    "ايه استخداماته", "بيعمل ايه",
    "وظايف الجهاز ايه", "يستخدم في ايه",
    "ايه اللي بيعمله", "كم وظيفة",
    "وظائف المشروع", "بيستخدم في ايه بالظبط",
    "number of functions", "how many functions",
    "what can it do", "device functions",
    "features list", "functions of device",
    "what operations", "capabilities",
    "multi function?", "uses",
    "application", "device usage",
    "how many uses", "system features",
    "operations list", "what tasks",
    "functionality", "feature overview"
   ],
   answer: "يقوم بـ 6 وظائف: بسترة، إذابة تبلور، إذابة شوكولاتة، خلط، تسخين، تبريد."
 },
 {
   keywords: [
    "بيسجل البيانات ازاي", "هل فيه تسجيل",
    "هل بيخزن البيانات", "تسجيل الحرارة",
    "هل فيه شاشة", "بيتابع ازاي",
    "هل فيه memory", "بيحفظ البيانات",
    "data logging", "record data",
    "does it store data", "data storage",
    "temperature recording", "data system",
    "monitoring system", "log system",
    "data tracking", "storage method",
    "how data saved", "data logger",
    "record system", "data capture",
    "tracking info", "store readings",
    "save temperature", "log temperature"
   ],
   answer: "يحتوي على شاشة LCD ووحدة تخزين مثل SD أو EEPROM لتسجيل كل البيانات."
 },
 {
  keywords: [
    "بيضمن الجودة ازاي", "هل الجودة ثابتة",
    "هل المنتج بيطلع ثابت", "جودة المنتج",
    "هل في فرق بين الدفعات", "ثبات الجودة",
    "quality control", "consistent quality",
    "same output?", "quality stable",
    "product consistency", "quality assurance",
    "uniform batches", "same quality",
    "repeat quality", "quality system",
    "production consistency", "stable output",
    "quality improvement", "same results",
    "batch consistency", "product quality",
    "uniform output", "quality guarantee"
  ],
  answer: "بفضل التحكم الآلي تخرج كل الدفعات بنفس الجودة بدون اختلاف."
},
{
  keywords: [
    "هل آمن", "الأمان ازاي", "فيه خطر",
    "هل بيمنع التلوث", "نظام الأمان",
    "حماية الجهاز", "سلامة الغذاء",
    "safe system", "is it safe",
    "food safety", "safety features",
    "contamination prevention", "hygiene system",
    "secure device", "safety control",
    "health safety", "protection system",
    "risk prevention", "safe processing",
    "food contamination", "clean system",
    "safe operation", "safety level",
    "secure processing", "hygienic system"
  ],
  answer: "يعتمد على نظام مغلق يقلل التلوث ويحتوي على وسائل أمان للحماية."
},
{
  keywords: [
    "سعة الجهاز كام", "بيشيل كام لتر",
    "الحجم قد ايه", "سعة الخزان",
    "capacity كام", "حجم التشغيل",
    "كام لتر", "الكمية قد ايه",
    "tank capacity", "how many liters",
    "device capacity", "volume",
    "how big", "tank size",
    "processing volume", "liters capacity",
    "batch size", "max volume",
    "container size", "system capacity",
    "unit size", "how much it holds",
    "capacity of device", "liters per batch",
    "volume size", "storage size"
  ],
  answer: "السعة التشغيلية 20 لتر لكل دورة."
},
{
  keywords: [
    "الجهاز مصنوع من ايه", "الخامات ايه",
    "مادة التصنيع", "نوع المعدن",
    "ستانلس ولا ايه", "الخزان معمول من ايه",
    "material ايه", "جسم الجهاز من ايه",
    "what material", "device material",
    "made of what", "tank material",
    "construction material", "steel type",
    "what is it made from", "build material",
    "metal used", "material type",
    "structure material", "body material",
    "device build", "مواد التصنيع",
    "نوع الخامة", "الخامة المستخدمة",
    "composition material", "product material"
  ],
  answer: "مصنوع من ستانلس ستيل 304 آمن غذائياً."
},
{
  keywords: [
    "نوع الحساسات ايه", "حساس الحرارة ايه",
    "بيستخدم ايه في القياس", "sensor ايه",
    "حساس الحرارة نوعه ايه", "فيه كام حساس",
    "temperature sensor", "sensor type",
    "what sensors used", "heat sensor",
    "which sensor", "sensor model",
    "PT100 ولا ايه", "DS18B20 ايه",
    "measurement sensor", "temp sensor type",
    "what measures temperature", "sensor system",
    "نوع أجهزة القياس", "وسيلة القياس",
    "temperature measuring device", "sensor list"
  ],
  answer: "يستخدم حساسات حرارة مثل PT100 و NTC و DS18B20."
},
{
  keywords: [
    "نظام التحكم ايه", "التحكم ازاي",
    "control system ايه", "نوع الكنترول",
    "PID ولا ايه", "بيتحكم ازاي",
    "لوحة التحكم ايه", "system control",
    "control method", "controller type",
    "what controller used", "control unit",
    "microcontroller ايه", "arduino ولا ايه",
    "raspberry pi؟", "system brain",
    "control technology", "automation system",
    "smart control", "device control",
    "control mechanism", "controller system",
    "نوع نظام التحكم", "آلية التحكم"
  ],
  answer: "نظام التحكم عبارة عن Microcontroller مع PID Controller مثل Arduino أو Raspberry Pi."
},
{
  keywords: [
    "بيشتغل على ايه", "مصدر الطاقة ايه",
    "كهرباء ولا ايه", "فولت كام",
    "هل فيه طاقة شمسية", "power source",
    "energy source", "voltage",
    "electric or solar", "power type",
    "what power used", "device power",
    "220 فولت؟", "solar support",
    "electricity requirement", "power input",
    "voltage requirement", "energy system",
    "مصدر التشغيل", "نوع الطاقة",
    "power supply", "device voltage",
    "electric specs", "energy input"
  ],
  answer: "يعمل على كهرباء 220 فولت أو طاقة شمسية."
},
{
  keywords: [
    "المكثف بيعمل ايه", "وظيفة المكثف",
    "ليه فيه condenser", "المكثف فايدته ايه",
    "condensor ايه", "دوره ايه",
    "what is condenser", "condenser function",
    "why condenser", "steam condenser",
    "وظيفة التكثيف", "تحويل البخار",
    "steam to water", "condensation role",
    "water recovery", "steam control",
    "condenser role", "vapor system",
    "تبخير وتكثيف", "وظيفة وحدة التكثيف",
    "condensation system", "vapor control"
  ],
  answer: "يقوم بتحويل البخار الناتج إلى مياه مقطرة بدلاً من فقده."
},
{
  keywords: [
    "وسائل الأمان ايه", "هل فيه أمان",
    "حماية الجهاز", "safety ايه",
    "فيه حماية من الحرارة", "system safety",
    "safety features", "device protection",
    "is it safe", "safety system",
    "overheat protection", "secure device",
    "risk prevention", "safety control",
    "protection system", "safety measures",
    "حماية المستخدم", "وسائل الحماية",
    "safety level", "secure operation",
    "fault protection", "safety mechanism"
  ],
  answer: "يحتوي على حساسات حرارة وفصل تلقائي وحماية من الحمل الزائد."
},
{
  keywords: [
    "مين العملاء", "مين يستخدمه",
    "الفئة المستهدفة", "بيتباع لمين",
    "مين هيشتريه", "target users",
    "target market", "who uses it",
    "customers", "who needs it",
    "intended users", "market segment",
    "user type", "client base",
    "who benefits", "intended audience",
    "food factories?", "home projects?",
    "small business?", "who buys",
    "customer group", "user category",
    "target audience", "market users"
  ],
  answer: "المصانع الصغيرة والمتوسطة، معامل الشوكولاتة، مشاريع منزلية، ومراكز بحثية."
},
{
  keywords: [
    "بيكسب ازاي", "مصادر الربح",
    "business model ايه", "الدخل منين",
    "ازاي المشروع بيجيب فلوس", "revenue",
    "income sources", "profit model",
    "how make money", "business income",
    "earnings", "monetization",
    "revenue streams", "profit source",
    "financial model", "income plan",
    "cash flow", "business revenue",
    "ازاي يربح", "مصادر الدخل",
    "project profit", "money source"
  ],
  answer: "بيع الجهاز + الصيانة + قطع الغيار + التحديثات البرمجية."
},
{
  keywords: [
    "تكلفة الجهاز كام", "المكونات بكام",
    "السعر ايه", "تكلفته قد ايه",
    "كام تكلفة", "price",
    "cost", "device cost",
    "component cost", "total cost",
    "how much cost", "estimated price",
    "price range", "budget",
    "manufacturing cost", "build cost",
    "expense", "device price",
    "تكلفة التصنيع", "سعر الجهاز",
    "financial cost", "cost estimate"
  ],
  answer: "التكلفة التقريبية للمكونات حوالي 15800."
},
{
  keywords: [
    "تكلفة الجهاز كام", "المكونات بكام",
    "السعر ايه", "تكلفته قد ايه",
    "كام تكلفة", "price",
    "cost", "device cost",
    "component cost", "total cost",
    "how much cost", "estimated price",
    "price range", "budget",
    "manufacturing cost", "build cost",
    "expense", "device price",
    "تكلفة التصنيع", "سعر الجهاز",
    "financial cost", "cost estimate"
  ],
  answer: "التكلفة التقريبية للمكونات حوالي 75000."
},
{
  keywords: [
    "المشروع بيمشي ازاي", "بيشتغل ازاي بشكل عام",
    "طريقة تشغيل المشروع", "آلية عمل المشروع",
    "ازاي الجهاز ده بيشتغل", "نظام التشغيل بتاعه ايه",
    "how does the project work", "working principle",
    "how the system works", "device operation",
    "mechanism of project", "how it functions",
    "طريقة العمل", "تشغيل الجهاز",
    "system working", "operation method",
    "how it runs", "functioning process",
    "project workflow", "device mechanism",
    "تشغيل المشروع", "ازاي بيشتغل",
    "how does it function", "system process"
  ],
  answer: "يعتمد على تسخين وتبريد وتحريك المنتج باستخدام نظام تحكم ذكي لضبط الحرارة بدقة."
},
{
  keywords: [
    "مميزات الجهاز ايه", "ايه اللي بيميزه",
    "ليه الجهاز ده احسن", "مميزاته ايه",
    "advantages ايه", "features",
    "what are the advantages", "device features",
    "benefits", "why is it better",
    "unique features", "key features",
    "مزايا الجهاز", "نقاط القوة",
    "what makes it special", "ميزة المشروع",
    "project advantages", "system benefits",
    "ليه اختاره", "افضل من ايه",
    "why choose it", "device strengths"
  ],
  answer: "يتميز بتعدد الوظائف، توفير الطاقة، التحكم الذكي، وتسجيل البيانات."
},
{
  keywords: [
    "مميزات الجهاز ايه", "ايه اللي بيميزه",
    "ليه الجهاز ده احسن", "مميزاته ايه",
    "advantages ايه", "features",
    "what are the advantages", "device features",
    "benefits", "why is it better",
    "unique features", "key features",
    "مزايا الجهاز", "نقاط القوة",
    "what makes it special", "ميزة المشروع",
    "project advantages", "system benefits",
    "ليه اختاره", "افضل من ايه",
    "why choose it", "device strengths"
  ],
  answer: "يتميز بتعدد الوظائف، توفير الطاقة، التحكم الذكي، وتسجيل البيانات."
},
{
  keywords: [
    "هل الجهاز آمن", "فيه خطورة",
    "مستوى الأمان", "هل فيه حماية",
    "safe ولا لا", "safety",
    "is it safe", "device safety",
    "safety level", "protection system",
    "secure operation", "risk",
    "هل فيه مخاطر", "أمان الجهاز",
    "safety features", "is it dangerous",
    "safe usage", "protection",
    "user safety", "system security",
    "هل آمن للاستخدام", "درجة الأمان"
  ],
  answer: "الجهاز آمن بفضل أنظمة الحماية مثل فصل الحرارة التلقائي وصمامات الأمان."
},
{
  keywords: [
    "بيستخدم في ايه", "استخداماته ايه",
    "بيفيد في ايه", "يستخدم في اي منتجات",
    "applications", "uses",
    "what is it used for", "device usage",
    "where to use", "application areas",
    "use cases", "usage",
    "مجالات الاستخدام", "بيشتغل في ايه",
    "used for what", "product use",
    "industrial use", "food usage",
    "how to use it", "usage purpose",
    "بيفيد في اي", "مجال الاستخدام"
  ],
  answer: "يستخدم في معالجة منتجات مثل العسل، الشوكولاتة، العصائر، والمربى."
},
{
  keywords: [
    "هل سهل الاستخدام", "سهل ولا صعب",
    "سهولة التشغيل", "هل معقد",
    "easy to use", "user friendly",
    "is it simple", "سهولة الاستخدام",
    "operation difficulty", "simple device",
    "user experience", "easy operation",
    "هل محتاج خبرة", "سهولة التعامل",
    "can beginners use", "ease of use",
    "simple to operate", "user ease",
    "هل سهل", "درجة السهولة",
    "is it complicated", "سهولة الجهاز"
  ],
  answer: "الجهاز سهل الاستخدام بفضل واجهة تحكم بسيطة وشاشة عرض واضحة."
},
{
  keywords: [
    "هل محتاج تدريب", "لازم تدريب",
    "هل صعب استخدامه", "هل محتاج خبرة",
    "training required", "need training",
    "does it require training", "learning curve",
    "skill needed", "user training",
    "training needed", "experience required",
    "هل لازم كورس", "تدريب المستخدم",
    "هل محتاج تعلم", "user skill",
    "easy to learn", "can use directly",
    "هل سهل التعلم", "learning difficulty"
  ],
  answer: "لا يحتاج تدريب معقد ويمكن تعلم استخدامه بسهولة في وقت قصير."
},
{
  keywords: [
    "حجم الجهاز قد ايه", "ابعاده ايه",
    "حجم الهيكل", "device size",
    "dimensions", "how big",
    "device dimensions", "size of device",
    "overall size", "machine size",
    "frame size", "physical size",
    "حجم الجهاز", "ابعاد الجهاز",
    "device measurement", "structure size",
    "big or small", "size specs",
    "كم حجمه", "dimension details"
  ],
  answer: "الأبعاد التقريبية للجهاز 70×50×100 سم."
},
{
  keywords: [
    "وزن الجهاز كام", "تقيل ولا خفيف",
    "وزنه ايه", "device weight",
    "how heavy", "machine weight",
    "weight of device", "approx weight",
    "heavy or light", "device mass",
    "وزن تقريبي", "weight details",
    "machine mass", "device load",
    "كم وزنه", "وزن الجهاز",
    "weight specs", "is it heavy"
  ],
  answer: "الوزن غير محدد بدقة لكنه مصمم ليكون ثابت وسهل الحركة بعجلات."
},
{
  keywords: [
    "هل بيتحرك", "فيه عجلات",
    "سهل نقله", "mobility",
    "portable", "can it move",
    "is it movable", "has wheels",
    "easy to transport", "device movement",
    "transportation", "portable device",
    "هل سهل النقل", "حركة الجهاز",
    "mobility system", "move easily",
    "transportable", "device wheels",
    "can relocate", "سهولة النقل"
  ],
  answer: "نعم، مزود بعجلات لتسهيل الحركة داخل المكان."
},
{
  keywords: [
    "هل فيه شاشة", "فيه display",
    "شاشة عرض", "screen",
    "does it have display", "lcd screen",
    "user interface", "display system",
    "monitor", "screen type",
    "واجهة المستخدم", "شاشة الجهاز",
    "visual display", "control screen",
    "هل فيه واجهة", "interface",
    "display panel", "screen available",
    "user display", "monitoring screen"
  ],
  answer: "نعم، يحتوي على شاشة LCD لعرض البيانات والتحكم."
},
{
  keywords: ["هل فيه تسجيل بيانات","data logging","بيسجل بيانات","data record","storage data","log system","data save","record system","monitor data","tracking data","data tracking","log info","data history","save info","store data","system logging","device logging","data memory","record info","data archive","log storage","data system","record tracking","save records","monitoring system","data capture","tracking system","device record","log feature","data save system"],
  answer: "نعم، يحتوي على نظام تسجيل بيانات باستخدام SD أو EEPROM."
},
{
  keywords: ["هل فيه شاشة","lcd","display","screen","display screen","monitor","interface","screen device","visual display","display panel","user interface","screen system","lcd screen","device screen","monitor screen","display unit","screen type","visual panel","display info","screen feature","interface screen","display system","screen control","screen panel","lcd display","monitor unit","screen output","display feature","screen details","interface display"],
  answer: "نعم، يحتوي على شاشة LCD لعرض البيانات والتحكم."
},
{
  keywords: ["كام تكلفة الطاقة الشمسية","solar cost","solar price","system solar","solar system cost","panel price","renewable cost","solar expense","solar budget","energy solar","solar investment","solar setup","solar power cost","panel cost","solar estimate","renewable energy cost","solar system price","solar installation cost","solar value","solar system expense","solar pricing","energy system cost","solar cost estimate","solar amount","solar fees","solar total cost","solar setup price","solar value cost","solar budget estimate","solar system budget"],
  answer: "تكلفة النظام الشمسي حوالي 25000."
},
{
  keywords: ["كام عدد الفريق","team size","number of members","team members","project team","team count","group size","members count","team number","project group","work team","team info","members info","team details","group members","team structure","project members","team amount","team list","members total","team data","group info","project staff","team workers","members number","team capacity","group size info","project team size","team composition","members details"],
  answer: "عدد أفراد فريق المشروع حوالي 24 عضو."
},
{
  keywords: ["مين عمل المشروع","developer","who made","designer","creator","project maker","who designed","team leader","project designer","who built","developer name","creator name","designer name","who created","project author","builder","maker","team creator","main developer","project owner","who programmed","site designer","developer info","creator info","project developer","team designer","who worked","maker info","developer details","project builder"],
  answer: "المشروع من تنفيذ فريق SOLTECH ومن ضمنهم احمد الصبحي."
},
{
  keywords: ["نوع الحساس","sensor type","pt100","sensor","temperature sensor","heat sensor","sensor device","sensor system","measurement sensor","thermal sensor","sensor unit","sensor details","sensor info","sensor model","sensor type used","heat measurement","temp sensor","sensor technology","sensor accuracy","sensor setup","sensor component","sensor hardware","sensor function","sensor role","sensor data","sensor reading","sensor input","sensor output","sensor design","sensor feature"],
  answer: "يستخدم حساسات مثل PT100 و DS18B20 لقياس الحرارة بدقة."
},
{
  keywords: ["قدرة السخان","heater power","heater","power heater","heating power","heater watt","heater capacity","heating system","heater device","power system","heater unit","heater energy","heater output","heater strength","heater wattage","heater details","heater info","heating element","heater element","heater size","heater spec","heater rating","heater load","heater performance","heater usage","heater system","heater function","heater data","heater control","heater design"],
  answer: "قدرة السخان حوالي 1.5 كيلو وات."
},
{
  keywords: ["نوع المضخة","pump type","pump","water pump","dc pump","pump system","pump device","pump model","pump info","pump details","fluid pump","circulation pump","pump function","pump role","pump design","pump setup","pump capacity","pump speed","pump voltage","pump power","pump system type","pump component","pump usage","pump structure","pump data","pump hardware","pump control","pump mechanism","pump operation","pump feature"],
  answer: "يحتوي على مضخة 12V لضمان توزيع الحرارة بشكل منتظم."
},
{
  keywords: ["هل فيه تبريد","cooling","cooling system","cooling feature","cooling available","device cooling","system cooling","cooling method","cooling process","cooling unit","cooling function","cooling option","cooling support","cooling ability","cooling tech","cooling design","cooling setup","cooling performance","cooling usage","cooling system type","cooling data","cooling feature info","cooling support system","cooling control","cooling module","cooling flow","cooling mechanism","cooling details","cooling operation","cooling structure"],
  answer: "نعم، يحتوي على نظام تبريد مائي Water Jacket."
},
{
  keywords: ["هل فيه خلط","mixing","mixing system","stirring","agitator","mixing feature","mixing device","mixing process","mixing unit","mixing function","mixing capability","mixing support","mixing method","mixing tech","mixing design","mixing setup","mixing performance","mixing speed","mixing control","mixing system type","mixing module","mixing operation","mixing mechanism","mixing flow","mixing details","mixing hardware","mixing feature info","mixing support system","mixing usage","mixing ability"],
  answer: "نعم، يحتوي على نظام خلط لضمان توزيع الحرارة بشكل متساوي."
},
{
  keywords: ["هل مناسب للمصانع","industrial use","factory use","production use","manufacturing","industrial device","factory device","system industry","device industry","industrial system","factory system","industrial usage","factory usage","industrial application","production system","industry application","factory application","industrial setup","manufacturing system","industrial equipment","factory equipment","industry device","production device","industrial machine","factory machine","industrial solution","factory solution","industrial tool","production tool","industry tool"],
  answer: "نعم، مناسب للمصانع الصغيرة والمتوسطة."
},
{
  keywords: ["هل مناسب للبيت","home use","domestic","small project","home project","house use","domestic use","home device","small business","home business","home application","domestic application","home system","house system","home usage","domestic usage","home equipment","house equipment","home solution","small scale","home production","domestic production","home industry","small industry","home tool","house tool","home setup","home device use","domestic device","home feature"],
  answer: "نعم، مناسب أيضًا للمشاريع المنزلية."
},
{
  keywords: ["ابعاد الجهاز","dimensions","size","device size","system size","device dimensions","system dimensions","width height","device width","device height","device depth","system width","system height","system depth","size info","dimension info","device measurement","system measurement","size details","dimension details","device structure size","system structure size","size data","dimension data","device frame size","system frame size","device specs size","system specs size","size specification","dimension specification"],
  answer: "الأبعاد تقريبًا 70×50×100 سم."
},
{
  keywords: ["وزن الجهاز","weight","device weight","system weight","weight device","weight system","mass device","device mass","system mass","weight info","weight details","weight data","device load","system load","weight capacity","device heaviness","system heaviness","device kg","system kg","weight measurement","device measurement weight","system measurement weight","weight spec","device spec weight","system spec weight","weight value","device value weight","system value weight","weight amount","weight info device"],
  answer: "الوزن غير محدد بدقة لكنه متوسط ويسهل نقله."
},
{
  keywords: ["هل فيه عجلات","wheels","mobility","move device","portable","device wheels","system wheels","mobility system","move system","portable device","portable system","device movement","system movement","mobility feature","move feature","portable feature","device transport","system transport","easy move","easy transport","device mobility","system mobility","move capability","transport feature","portable usage","mobility support","device moving","system moving","transport system","portable design"],
  answer: "نعم، مزود بعجلات لسهولة الحركة."
},
{
  keywords: ["هل فيه امان","safety system","protection","safe","device safety","system safety","protection system","safety features","device protection","system protection","risk control","hazard control","safe system","secure device","secure system","safety design","protection design","safety level","device secure","system secure","safe usage","safe operation","protection feature","safety module","protection module","safety support","device safety system","system safety feature","risk protection","safety info"],
  answer: "نعم، مزود بأنظمة أمان متكاملة."
},
{
  keywords: ["هل فيه ضمان","warranty","guarantee","device warranty","system warranty","warranty period","guarantee period","device guarantee","system guarantee","warranty info","guarantee info","warranty details","guarantee details","warranty data","guarantee data","device support","system support","after sale","after sale service","support service","warranty service","guarantee service","device coverage","system coverage","warranty feature","guarantee feature","warranty support","guarantee support","device warranty info","system warranty info"],
  answer: "عادة يكون له ضمان سنة حسب الاتفاق."
},
{
  keywords: ["هل فيه صيانة","maintenance","service","device service","system service","maintenance system","device maintenance","system maintenance","service support","maintenance support","service plan","maintenance plan","device repair","system repair","service details","maintenance details","service info","maintenance info","device upkeep","system upkeep","repair system","repair device","service schedule","maintenance schedule","service feature","maintenance feature","device servicing","system servicing","service data","maintenance data"],
  answer: "نعم، يوجد صيانة دورية للجهاز."
},
{
  keywords: ["هل يوفر طاقة","energy saving","power saving","efficient","energy efficiency","low power","power efficient","energy efficient","saving energy","eco","eco friendly","green energy","energy system","power system","saving system","energy usage","power usage","low consumption","energy cost saving","power cost saving","efficient system","efficient device","energy feature","power feature","energy support","power support","saving feature","eco system","green system","energy benefit"],
  answer: "نعم، موفر للطاقة خاصة مع استخدام الطاقة الشمسية."
},
{
  keywords: ["هل متعدد الوظائف","multi function","multi use","multiple functions","multi system","multi device","multi capability","multi usage","multi purpose","multi feature","multi operation","multi process","multi application","multi role","multi tasks","multi features device","multi system use","multi ability","multi feature system","multi feature device","multi usage system","multi capability system","multi use device","multi design","multi structure","multi setup","multi processing","multi operations","multi solution","multi benefit"],
  answer: "نعم، جهاز متعدد الوظائف في جهاز واحد."
},
{
  keywords: ["هل ذكي","smart","smart system","smart device","intelligent","ai system","smart control","smart feature","smart tech","smart design","smart operation","smart usage","smart control system","smart automation","smart processing","smart function","smart capability","smart solution","smart unit","smart device system","smart machine","intelligent system","intelligent device","smart tech system","smart hardware","smart software","smart integration","smart feature device","smart system control","smart automation system"],
  answer: "نعم، جهاز ذكي يعتمد على نظام تحكم متطور."
},
{
  keywords: ["ايه المشكلة اللي بيحلها","المشكلة ايه","المشروع بيحل ايه","ايه الفكرة من الجهاز","بيحل مشكلة ايه","الموضوع ده معمول ليه","الجهاز ده معمول ليه","ايه الهدف منه","ايه لازمة الجهاز","ليه اتعمل المشروع","ايه المشكلة الأساسية","هو معمول عشان ايه","ايه الفايدة منه","بيفيد في ايه","ايه اللي ناقص وبيعالجه","ليه محتاجينه","ايه المشكلة في السوق","هو بيحل ايه بالظبط","ايه الهدف الاساسي","الجهاز ده معمول ليه اصلا","ايه الغرض منه","ايه المشكلة اللي بيعالجها","ايه المشكلة في الحرارة","ليه مهم الجهاز ده","ايه العيب في الأجهزة القديمة","الجهاز ده بيصلح ايه","ايه المشكلة في الصناعات","هو ليه اتعمل","ايه السبب في فكرته","ايه المشكلة اللي وراه"],
  answer: "المشروع بيعالج مشكلة عدم التحكم الدقيق في درجات الحرارة في الصناعات الغذائية."
},
{
  keywords: ["بيحل المشكلة ازاي","ازاي بيشتغل عشان يحلها","بيظبط الحرارة ازاي","الجهاز بيشتغل ازاي","بيتحكم ازاي","بيعمل ايه عشان يحلها","ازاي بيعالج المشكلة","ايه طريقته في الحل","بيظبط الدنيا ازاي","بيتحكم في الحرارة ازاي","بيحلها بايه","ايه النظام اللي فيه","بيشتغل بايه","بيتحكم في التسخين ازاي","ازاي بيمنع الغلط","بيخلي الحرارة مظبوطة ازاي","ايه اللي بيخليه دقيق","ازاي بيظبط الدرجة","بيشتغل بنظام ايه","ايه طريقته في التحكم","بيتعامل مع الحرارة ازاي","ازاي بيحافظ على الدرجة","ايه اللي جوه بيخليه شغال","بيتحكم اوتوماتيك ازاي","بيشتغل لوحده ازاي","بيظبط الحرارة تلقائي ازاي","ايه اللي بيخليه ذكي","بيحلها تقنياً ازاي","بيعمل ايه جوا","ازاي بيشتغل فعلياً"],
  answer: "بيحل المشكلة باستخدام حساسات دقيقة ونظام تحكم PID لضبط الحرارة."
},
{
  keywords: ["فيه كام وظيفة","كام وظيفة فيه","بيعمل كام حاجة","عدد الوظايف كام","بيعمل ايه كام مرة","فيه كام ميزة","كام حاجة بيعملها","كام استخدام ليه","عدد المميزات كام","كام وظيفة للجهاز","كام شغلانة بيعملها","كام مهمة بيعملها","بيعمل كام دور","فيه كام خاصية","عدد المهام كام","كام استخدام","كام حاجة جوه","كام عملية بيعملها","كام حاجة في جهاز واحد","كام وظيفة مختلفة","كام ميزة فيه","كام استخدام مختلف","عدد الحاجات اللي بيعملها","كام عملية","كام نظام فيه","كام خاصية موجودة","كام شغل فيه","كام ميزة اساسية","كام وظيفة اساسية","كام قدرة تشغيل"],
  answer: "الجهاز يحتوي على 6 وظائف رئيسية."
},
{
  keywords: ["بيعمل ايه","وظايفه ايه","بيستخدم في ايه","ايه استخدامه","بيشتغل في ايه","ايه شغلته","بيعمل ايه بالظبط","ايه استخداماته","بيفيد في ايه","بيستخدم فين","بيعمل ايه جوه","ايه الحاجات اللي بيعملها","ايه المهام بتاعته","بيعمل ايه في المصنع","بيشتغل على ايه","ايه قدراته","ايه اللي يقدر يعمله","ايه اللي بينفذه","بيعمل ايه فعلياً","ايه استخدام الجهاز","ايه استخداماته العملية","ايه الحاجات اللي ينفع فيها","ايه مجالات استخدامه","ايه وظيفته","ايه فايدته العملية","بيستخدم ليه","ايه تطبيقاته","بيعمل ايه في الاكل","ايه شغله في الصناعات","ايه دوره"],
  answer: "بسترة – تسخين – تبريد – خلط – إذابة – تعقيم."
},
{
  keywords: ["فيه تعقيم","بيعقم","هل بيعقم","فيه خاصية تعقيم","بيعمل تعقيم","هل ينفع للتعقيم","بيستخدم في التعقيم","بيعقم الاكل","بيعقم المنتجات","فيه نظام تعقيم","هل فيه تعقيم حراري","بيقدر يعقم","التعقيم موجود","هل فيه ميزة تعقيم","الجهاز بيعقم","هل ينفع تعقيم بيه","فيه امكانية تعقيم","التعقيم شغال فيه","هل بيقتل البكتيريا","ينفع تعقيم","بيعقم ازاي","هل فيه نظام نظافة","هل فيه نظام امان حراري","بيعقم كويس","هل ينفع للمطهرات","هل فيه حرارة عالية","هل التعقيم مظبوط","هل ينفع للمصانع","هل فيه نظام حماية","هل بيطهر"],
  answer: "نعم، يحتوي على وظيفة التعقيم الحراري."
},
{
  keywords: ["فيه بسترة","بيبستر","هل بيبستر","ينفع للبسترة","فيه نظام بسترة","بيستخدم للبسترة","هل فيه بسترة","بيعمل بسترة","بسترة موجودة","هل ينفع للبن","هل ينفع للعصير","بيعمل بسترة ازاي","هل فيه تحكم في البسترة","بيقدر يبستر","هل فيه ميزة بسترة","البسترة شغالة","هل فيه نظام للبسترة","هل ينفع للمنتجات الغذائية","بيشتغل في البسترة","هل بيقتل البكتيريا","هل فيه حرارة مناسبة","هل ينفع للمصانع","هل فيه ضبط حرارة","هل بيبستر كويس","هل فيه جودة بسترة","هل ينفع للشركات","هل فيه دقة في البسترة","هل بيحافظ على الجودة","هل فيه نظام صناعي","هل ينفع للاستخدام"],
  answer: "نعم، الجهاز يدعم عملية البسترة بدقة."
},
{
  keywords: ["فيه تسخين","بيسخن","هل بيسخن","ينفع تسخين","فيه سخان","بيسخن ازاي","هل فيه نظام تسخين","بيستخدم في التسخين","التسخين موجود","هل فيه حرارة عالية","هل ينفع تسخين سوائل","بيسخن بسرعة","هل فيه تحكم في الحرارة","بيقدر يسخن","هل فيه خاصية تسخين","التسخين شغال","هل فيه نظام حرارة","هل ينفع للمطبخ","بيشتغل في التسخين","هل بيوصل لدرجة حرارة","هل فيه دقة في التسخين","هل ينفع للمصانع","هل فيه امان حراري","هل بيسخن كويس","هل فيه كفاءة","هل ينفع للصناعة","هل فيه سرعة تسخين","هل بيحافظ على الحرارة","هل فيه نظام كهرباء","هل بيسخن مضبوط"],
  answer: "نعم، الجهاز مزود بنظام تسخين كهربائي."
},
{
  keywords: ["فيه اذابة شوكولاتة","بيسيح شوكولاتة","هل ينفع للشوكولاتة","بيسيح الشوكولاتة","فيه نظام اذابة","هل ينفع حلويات","بيستخدم للشوكولاتة","هل فيه خاصية اذابة","بيشتغل في الشوكولاتة","هل بيحرق الشوكولاتة","هل فيه تحكم في الشوكولاتة","بيسيح كويس","هل فيه حرارة مظبوطة","هل ينفع لمصانع الشوكولاتة","بيقدر يسيح","هل فيه دقة","هل فيه نظام خاص","هل ينفع للحلويات","بيستخدم في اذابة","هل فيه جودة اذابة","هل بيظبط القوام","هل فيه تحكم حراري","هل ينفع للاكل","هل بيحافظ على الجودة","هل فيه نظام دقيق","هل ينفع للشيفات","هل فيه امان","هل بيشتغل كويس","هل فيه نظام صناعي","هل بيظبط الشوكولاتة"],
  answer: "نعم، يمكن استخدامه لإذابة الشوكولاتة بدون حرقها."
},
{
  keywords: ["ينفع للعسل","بيشتغل على العسل","هل يعالج العسل","بيسيح العسل","فيه نظام للعسل","هل ينفع تسييح عسل","بيستخدم للعسل","هل فيه اذابة عسل","بيظبط العسل","هل بيشيل التبلور","بيسيح التبلور","هل فيه تحكم في العسل","هل ينفع لمصانع العسل","بيشتغل كويس مع العسل","هل فيه دقة","هل بيحافظ على الجودة","هل ينفع للنحل","هل فيه حرارة مناسبة","هل بيظبط القوام","هل فيه نظام اذابة","هل ينفع للمشاريع","هل بيحسن العسل","هل فيه كفاءة","هل ينفع للبيع","هل بيحافظ على الطعم","هل فيه نظام صناعي","هل بيشتغل مضبوط","هل فيه امان","هل بيظبط اللزوجة","هل ينفع استخدام يومي"],
  answer: "نعم، مناسب لمعالجة العسل وإذابة التبلور."
},
{
  keywords: ["بيسجل بيانات","فيه تسجيل","هل بيسجل","بيحفظ بيانات","فيه لوج","بيسجل الشغل","هل فيه تسجيل","بيخزن بيانات","بيحفظ المعلومات","هل فيه ميموري","بيسجل الحرارة","هل فيه تتبع","بيتابع الشغل","بيسجل كل حاجة","هل فيه تخزين","بيحفظ الشغل","هل فيه نظام تسجيل","بيسجل النتائج","هل فيه data","بيعمل log","هل فيه متابعة","بيسجل الدورات","بيحفظ التشغيل","هل فيه نظام ذكي","بيسجل اوتوماتيك","هل فيه مراقبة","بيخزن المعلومات","هل فيه تتبع حراري","بيسجل كل حاجة","هل فيه تسجيل كامل"],
  answer: "نعم، يسجل البيانات لضمان الجودة والمتابعة."
},
{
  keywords: ["بيمنع التلوث","هل بيمنع التلوث","الجهاز نظيف","هل بيحافظ على النظافة","فيه نظام مغلق","هل الاكل بيتلوث","بيحمي الاكل","هل امن غذائيا","فيه حماية من التلوث","هل بيمنع البكتيريا","بيحافظ على الاكل","هل بيأمن المنتج","فيه نظام صحي","هل نظيف في الشغل","بيمنع الهوا يدخل","هل فيه حماية","بيقلل التلوث","هل مناسب للاكل","بيحافظ على السلامة","هل بيأمن الجودة","فيه نظام امان","هل بيحافظ على النظافة العامة","هل فيه نظام مغلق فعلا","هل بيمنع دخول ميكروبات","هل مناسب للمصانع","هل بيحافظ على المنتج","هل بيأمن الاكل","هل بيحمي من الجراثيم","هل فيه نظام صحي كويس","هل بيشتغل بشكل نظيف"],
  answer: "نعم، تصميمه مغلق وبيمنع التلوث وبيحافظ على سلامة الغذاء."
},
{
  keywords: ["بيحافظ على الجودة","هل الجودة ثابتة","الجودة عاملة ازاي","هل المنتج ثابت","بيظبط الجودة","هل بيطلع نفس النتيجة","بيحافظ على الطعم","هل فيه ثبات","هل الجودة مضمونة","هل بيخلي المنتج كويس","بيحسن الجودة","هل بيظبط المنتج","هل فيه تحكم في الجودة","هل المنتج بيطلع مظبوط","هل الجودة عالية","هل بيحافظ على القوام","هل بيظبط الطعم","هل النتيجة ثابتة","هل الجودة بتتغير","هل بيخلي المنتج احسن","هل بيطلع نفس المستوى","هل فيه جودة صناعية","هل بيحافظ على المكونات","هل بيخلي الشغل مظبوط","هل فيه consistency","هل بيظبط كل دفعة","هل بيحافظ على المستوى","هل الجودة بتثبت","هل بيحسن المنتج","هل فيه تحكم كامل"],
  answer: "نعم، بيحافظ على جودة المنتج وثباتها في كل مرة."
},
{
  keywords: ["هل موفر","بيوفر فلوس","هل اقتصادي","هل رخيص","هل بيقلل التكلفة","بيوفر كهربا","هل فيه توفير","هل مناسب للمشاريع","هل قليل التكلفة","بيوفر في الطاقة","هل فيه توفير في الفاتورة","هل بيقلل المصاريف","هل اقتصادي في التشغيل","هل بيوفر على المدى","هل بيقلل الاستهلاك","هل فيه كفاءة طاقة","هل مناسب للميزانية","هل بيستهلك قليل","هل بيوفر طاقة","هل بيقلل الهدر","هل مناسب للناس الصغيرة","هل اقتصادي فعلا","هل فيه عائد كويس","هل بيقلل الخسارة","هل بيوفر في الانتاج","هل بيساعد في الربح","هل بيقلل التكلفة العامة","هل بيشتغل بكفاءة","هل بيوفر في الشغل","هل استثماره كويس"],
  answer: "نعم، الجهاز اقتصادي وبيوفر في الطاقة والتكاليف."
},
{
  keywords: ["سهل الاستخدام","هل سهل","هل بسيط","بيشتغل بسهولة","هل محتاج خبرة","هل معقد","هل سهل التشغيل","هل سهل التحكم","هل ينفع للمبتدئين","هل بسيط في الشغل","هل واجهته سهلة","هل سهل التعلم","هل استخدامه سهل","هل مريح","هل فيه تعقيد","هل سهل في المصنع","هل ينفع للناس الجديدة","هل بسيط في التعامل","هل سهل الفهم","هل تشغيله سهل","هل فيه واجهة سهلة","هل بسيط في الاعداد","هل سهل البرمجة","هل سهل في التحكم","هل فيه خطوات بسيطة","هل سهل في الاستخدام اليومي","هل مناسب للمبتدئ","هل بسيط في الشغل","هل سهل في كل حاجة","هل user friendly"],
  answer: "نعم، سهل الاستخدام وواجهته بسيطة."
},
{
  keywords: ["سريع","هل سريع","اداءه سريع","بيشتغل بسرعة","هل فيه سرعة","هل سريع في الشغل","هل بيخلص بسرعة","هل اداؤه عالي","هل سريع في الانتاج","هل فيه كفاءة عالية","هل بيشتغل بكفاءة","هل سريع في التشغيل","هل بيسخن بسرعة","هل سريع في النتائج","هل بيخلص الدفعة بسرعة","هل سريع في التسخين","هل سريع في التبريد","هل فيه استجابة سريعة","هل سريع في التحكم","هل بيظبط بسرعة","هل بيوفر وقت","هل سريع فعلا","هل فيه سرعة تنفيذ","هل بيشتغل بسرعة عالية","هل مناسب للشغل السريع","هل فيه اداء قوي","هل سريع في المعالجة","هل بيحسن الوقت","هل سريع في النظام","هل فيه سرعة كويسة"],
  answer: "نعم، بيتميز بسرعة الأداء والكفاءة."
},
{
  keywords: ["سعة الجهاز كام","بياخد قد ايه","يسع كام لتر","حجمه قد ايه","السعة التشغيلية كام","بياخد كمية قد ايه","حجم الخزان كام","السعة كام","كام لتر","الجهاز بيشيل قد ايه","حجم التشغيل كام","بياخد كام في المرة","السعة بتاعته ايه","كام كمية","بياخد قد ايه في الدورة","سعته التشغيلية كام","حجم المنتج كام","بياخد مواد قد ايه","كام لتر في الدورة","هل كبير ولا صغير","سعته قد ايه","حجم الشغل كام","بياخد كام مرة","كمية الانتاج كام","السعة الفعلية كام","كام بيشيل","حجم الجهاز من جوه","كام لتر تشغيل","السعة بتاعة الخزان","بياخد كام منتج"],
  answer: "السعة التشغيلية للجهاز حوالي 20 لتر لكل دورة."
},
{
  keywords: ["مصنوع من ايه","الخامة ايه","متصنع من ايه","جسم الجهاز ايه","الخزان معمول من ايه","الماتريال ايه","نوع المعدن ايه","الخامة بتاعته ايه","هل استانلس","هل حديد","هل مقاوم للصدأ","مصنوع من ستانلس","الخامة الغذائية ايه","هل امن غذائيا","هل الخامة كويسة","الخامة نظيفة","هل بيتفاعل مع الاكل","نوع التصنيع ايه","الخامة المستخدمة ايه","هل فيه ستانلس ستيل","الخامة الصحية ايه","هل مقاوم للتآكل","الخامة الصناعية ايه","هل مناسب للاكل","هل الخامة قوية","الخامة بتستحمل","هل فيه جودة في التصنيع","نوع الجسم ايه","الخامة الداخلية ايه","الخامة الخارجية ايه"],
  answer: "مصنوع من ستانلس ستيل 304 مناسب للاستخدام الغذائي."
},
{
  keywords: ["فيه حساسات","ايه الحساسات","نوع الحساسات ايه","بيستخدم حساسات ايه","فيه مستشعرات","الحساسات ايه","ايه انواع الحساسات","فيه قياس حرارة ازاي","بيحدد الحرارة ازاي","ايه نظام القياس","هل فيه دقة قياس","نوع المستشعرات ايه","بيستخدم PT100","فيه DS18B20","هل فيه اكتر من حساس","الحساسات بتقيس ايه","هل فيه تحكم بالحرارة","بيقرأ الحرارة ازاي","هل فيه حساسات دقيقة","هل فيه قياس كويس","ايه نظام الحساسات","هل فيه مراقبة حرارة","الحساسات شغالة ازاي","هل فيه نظام استشعار","هل فيه متابعة حرارة","ايه دقة القياس","هل فيه نظام ذكي","الحساسات بتشتغل ازاي","هل فيه اكتر من نوع","هل فيه دقة عالية"],
  answer: "بيستخدم حساسات زي PT100 و DS18B20 لقياس الحرارة بدقة."
},
{
  keywords: ["بيشتغل على كهربا ولا ايه","مصدر الطاقة ايه","بيشتغل بايه","كهربا ولا شمس","فيه طاقة شمسية","هل كهربا","هل فيه بديل كهربا","بيشتغل ازاي كهربا","هل فيه بطارية","هل فيه سولار","بيشتغل بالطاقة الشمسية","هل فيه مصدرين طاقة","بيستخدم ايه في التشغيل","هل فيه نظام كهربائي","هل فيه شحن","هل فيه بطارية احتياطي","هل فيه طاقة بديلة","هل بيشتغل لو الكهربا قطعت","هل فيه نظام طاقة مزدوج","هل فيه كهربا 220","هل فيه شمس","هل فيه الواح شمسية","هل فيه نظام كهربائي كامل","هل فيه دعم للطاقة","هل فيه كفاءة طاقة","هل بيشتغل بالطاقة المتجددة","هل فيه نظام حديث","هل فيه توفير كهربا","هل فيه طاقة احتياطية","هل فيه نظام تشغيل كامل"],
  answer: "يعمل بالكهرباء 220 فولت ويمكن دعمه بالطاقة الشمسية."
},
{
  keywords: ["فيه امان","هل امن","فيه حماية","هل فيه نظام امان","بيحمي من الحرارة","هل فيه فصل تلقائي","هل فيه حماية زيادة","هل فيه نظام حماية","هل فيه مستشعر امان","هل بيقفل لوحده","هل فيه حماية كهربا","هل فيه امان حراري","هل فيه نظام safety","هل بيحمي المستخدم","هل فيه انذار","هل فيه تحكم في الخطر","هل فيه حماية من الحمل","هل فيه نظام امان كامل","هل فيه حماية من السخونة","هل فيه سيستم امان","هل فيه حماية من الخطأ","هل بيوقف تلقائي","هل فيه نظام تحكم في الامان","هل فيه حماية كويسة","هل فيه safety system","هل بيمنع الخطر","هل فيه حماية للموتور","هل فيه حماية للهيتر","هل فيه نظام ذكي للامان","هل فيه تأمين كامل"],
  answer: "نعم، مزود بأنظمة أمان زي الفصل التلقائي وحساسات الحرارة."
},
{
    "keywords": ["الفرق بين PT100 و DS18B20", "PT100 ايه الفرق", "DS18B20 يختلف ايه", "مين أدق", "حساس بلاتين vs رقمي", "ايهما أفضل", "الفرق في الدقة", "PT100 بيشتغل ازاي", "DS18B20 بيتواصل ازاي", "ايه نوع الاتصال", "1-Wire دي ايه", "مين أسرع", "الفرق في السعر", "لازم الاتنين ولا واحد", "PT100 أزاي", "DS18B20 ليه", "ايه المميز في كل واحد", "مين دقيق أكتر", "الفرق في التوصيل", "ايه الاستخدام المناسب", "مين يتحمل حرارة أعلى", "PT100 بلاتين", "DS18B20 رقمي", "الفرق التقني", "ليه الاتنين موجودين", "مين أفضل للبسترة", "الفرق في الدقة 0.1", "مين أسهل في البرمجة", "الفرق في التكلفة", "مين بيستخدم فين"],
    "answer": "PT100 هو حساس دقيق للغاية من البلاتين، بينما DS18B20 هو حساس رقمي يتواصل عبر 1-Wire. كلاهما يستخدم لقياس الحرارة بدقة."
  },
  {
    "keywords": ["وظيفة Solid State Relay", "SSR ده ايه", "Solid State Relay بيعمل ايه", "SSR 25A ليه", "المفتاح الإلكتروني", "بيتحكم في الهيتر ازاي", "ليه SSR", "بديل الريليه العادي", "مفيش أجزاء متحركة", "بيشتغل ازاي SSR", "بيشغل الهيتر", "بيطفى الهيتر", "التحكم في التسخين", "الإشارة من الـ Arduino", "ليه 25 أمبير", "SSR ايه فايدته", "الـ Solid State Relay وظيفته", "بيوصل الكهربا للهيتر", "ميزته عن الريليه العادي", "بيقطع الكهربا بسرعة", "SSR بينفع للحرارة", "عمره أطول", "مش بيشرشر", "التحكم الدقيق", "بيستخدم في البسترة", "بيشتغل إلكتروني", "صامت", "بيحمي الهيتر", "ازاي بيوصل", "بياخد إشارة من الـ PID"],
    "answer": "هو مفتاح إلكتروني يتحكم في تشغيل وإيقاف الهيتر بناءً على إشارات من وحدة التحكم، ولا يحتوي على أجزاء متحركة."
  },
  {
    "keywords": ["معنى PID Controller", "PID ده ايه", "تحكم PID", "معنى Proportional Integral Derivative", "تناسبي تكاملي تفاضلي", "PID إيه فكرته", "ليه الـ PID", "التحكم بدون تذبذب", "بيضبط الحرارة ازاي", "بيوصل للدرجة بسرعة", "بيمنع التغيير المفاجئ", "الـ PID Controller ايه وظيفته", "التحكم الذكي في الحرارة", "الـ PID أحسن من العادي", "بيخلي الحرارة ثابتة", "ليه بنستخدمه", "معنى الحروف", "P I D كل حرف معنى", "ازاي بيحافظ على الاستقرار", "الـ PID في البسترة", "التحكم التناسبي", "التحكم التكاملي", "التحكم التفاضلي", "مكتشف الـ PID", "بيستخدم فين", "الـ PID Controller بيعمل ايه بالظبط", "من غير PID الحرارة بتتذبذب", "الـ PID يمنع الأوفر شوت", "أهميته في الدقة", "الـ PID في الجهاز الذكي"],
    "answer": "وحدة تحكم تناسبية – تكاملية – تفاضلية، تُستخدم للحفاظ على درجة الحرارة عند قيمة محددة بدقة شديدة بدون تذبذب."
  },
  {
    "keywords": ["ليه ستانلس 304", "ليه اختاروا ستانلس", "مميزات الاستانلس", "الستانلس 304 ليه", "ليه مش حديد عادي", "مقاوم للصدأ", "صحي", "سهل التنظيف", "مش بيتفاعل مع الأكل", "ليه النوع ده بالذات", "فوائد الستانلس", "الستانلس 304 آمن", "ليه مش 316", "الخزان من ستانلس 304 ليه", "هل 304 كويس للأكل", "ليه مش بلاستيك", "الطعام ملامس للستانلس", "الستانلس 304 أكيد آمن", "مش بيصدأ", "سهل التعقيم", "المتانة", "الخامة الأكثر استخداما", "ليه هو الأفضل", "الستانلس 304 مقاوم للأحماض", "ما يتأثرش بالعسل", "ما يتأثرش بالشوكولاتة", "المواصفات الغذائية", "مقاوم للحرارة", "سهل اللحام", "معتمد عالميا"],
    "answer": "لأنه مقاوم للصدأ، صحي، سهل التنظيف، ولا يتفاعل مع الأغذية."
  },
  {
    "keywords": ["العزل الحراري مزدوج الجدار", "غرض العزل", "ليه عزل مزدوج", "الحفاظ على الحرارة", "منع فقدان الحرارة", "توفير الطاقة", "العزل الحراري ليه", "جدارين ليه", "الخزان عزله ازاي", "بيمنع الحرارة تخرج", "توفير الكهربا", "ليه مش جدار واحد", "فايدة العزل", "العزل المزدوج بيعمل ايه", "بيحافظ على درجة الحرارة", "الاستفادة من العزل", "الجهاز معزول كويس", "العزل بيوفر أمان", "يمنع الحروق من بره", "العزل الحراري فوائده", "ليه مزدوج تحديدا", "العزل بيقلل الاستهلاك", "فقدان الحرارة يقل", "العزل ازاي بيشتغل", "الفرق بين العزل الفردي والمزدوج", "العزل المزدوج أهميته", "ليه بنعزل", "توفير في الفاتورة", "العزل بيخلي الحرارة جوه", "العزل الحراري ضروري"],
    "answer": "للحفاظ على درجة الحرارة داخل الخزان ومنع فقدان الحرارة للخارج، مما يوفر الطاقة."
  },
  {
    "keywords": ["الفرق بين العادي و PID", "التحكم العادي ايه عيبه", "التذبذب في الحرارة", "PID أحسن ليه", "نظام عادي vs PID", "الفرق في الثبات", "العادي بيسخن ويبرد", "PID بيوصل بسرعة", "العادي فيه أوفرشوت", "PID بيستقر", "الفرق في الدقة", "العادي بيزيد وينقص", "PID مظبوط", "ليه استبدل العادي", "التحكم التقليدي", "الـ PID حل مشكلة التذبذب", "العادي بينط", "PID شبه التكيف", "الفرق في التشغيل", "العادي رخيص", "PID أغلى بس أحسن", "الفرق في الاستجابة", "العادي بيرجح", "PID بيحافظ على الدرجة", "الفرق في التطبيق الصناعي", "العادي ينفع لأيه", "PID ينفع للأغذية", "الفرق في الحساسية", "PID أذكى", "العادي أغلبه manual"],
    "answer": "النظام العادي يسبب تذبذبًا في الحرارة (زيادة ونقصان)، بينما PID يصل للحرارة المطلوبة بسرعة ويستقر عليها بدقة."
  },
  {
    "keywords": ["برمجة الجهاز", "بيتبرمج ازاي", "ازاي بضبطه", "طريقة البرمجة", "شاشة LCD", "شاشة لمس", "لوحة تحكم رقمية", "بيضبط الحرارة", "بيضبط الوقت", "بيضبط سرعة التحريك", "المستخدم يعمل ايه", "الواجهة سهلة", "بيختار الوظيفة", "بيحدد الدرجة", "بيحدد المدة", "البرمجة خطوة بخطوة", "هل محتاج مهندس", "سهل ولا صعب", "الجهاز بيتبرمج باللمس", "الأزرار على الشاشة", "البرمجة للمستخدم العادي", "كود البرمجة", "بيخزن الإعدادات", "بيغير الإعدادات بسهولة", "واجهة المستخدم", "التفاعل مع الجهاز", "التشغيل manual", "التشغيل الآلي", "بيضبط من القائمة", "بيختار المنتج أولاً"],
    "answer": "عبر شاشة LCD أو شاشة لمس ولوحة تحكم رقمية، حيث يضبط المستخدم درجة الحرارة والوقت وسرعة التحريك."
  },
  {
    "keywords": ["نوع المضخة المستخدمة", "مضخة ايه", "المضخة مواصفاتها", "12V DC", "20 لتر/دقيقة", "قدرة المضخة", "مضخة تدوير المنتج", "بتدور السائل", "المضخة من النوع ده", "فولت المضخة", "مضخة 12 فولت", "الـ flow rate بتاعها", "بيتاخد المنتج منها", "المضخة دي ليه", "بتستخدم فين", "مضخة DC", "نوع المضخة المناسبة", "امل لها", "بتتحرك ازاي", "مضخة عسل", "مضخة شوكولاتة", "بتتحمل الحرارة", "مضخة 20 لتر في الدقيقة", "السعة في الدقيقة", "المضخة بتاعة الخروج", "بتدفع المنتج", "المضخة غاطسة ولا لأ", "أقصى لزوجة", "بتشتغل مع العسل", "مضخة دائرية"],
    "answer": "مضخة 12 فولت DC بقدرة 20 لتر/دقيقة."
  },
  {
    "keywords": ["عدد مراحل تطوير النموذج الأولي", "كام مرحلة", "مراحل التطوير", "5 مراحل", "التصميم الأولي", "تطوير النموذج", "الاختبارات", "التصنيع النهائي", "التسويق", "النموذج الأولي بيمر بكام خطوة", "ازاي بيتطور", "المراحل الأساسية", "كل مرحلة بتعمل ايه", "ترتيب المراحل", "من الفكرة للنموذج", "الـ prototyping مراحله", "كام خطوة عشان يطلع", "المراحل إيه", "النموذج الأولي بيتكون ازاي", "الاختبارات فين", "التسويق في الآخر", "كل مرحلة لوحدها", "العدد كام", "الـ stages كام", "التطوير المتتالي", "النموذج الأولي بيمر بكام أطوار", "التصميم الأولي عامل ايه", "نموذج أولي بعد كده", "الاختبارات بتتم فين", "التصنيع النهائي بعد الاختبارات", "التسويق اخر حاجة"],
    "answer": "5 مراحل: التصميم الأولي، تطوير النموذج، الاختبارات، التصنيع النهائي، التسويق."
  },
  {
    "keywords": ["الاختبارات على النموذج الأولي", "بيختبروا ايه", "الاختبارات إيه", "اختبار كفاءة التسخين", "أداء التحريك", "وحدة التكثيف", "نظام الأمان", "بيعملوا ايه عليه", "بيجربوه ازاي", "بيتأكدوا من ايه", "كل حاجة بتتفحص", "كفاءة الحرارة", "التحريك شغال كويس", "المكثف بيكثف", "الأمان شغال", "الاختبارات الميدانية", "بيشغلوه ويشوفوه", "بيجيبوا عيوب", "بيعدلوا بعدها", "الاختبارات الأساسية", "أهم اختبار", "اختبار الضغط", "اختبار الحرارة", "اختبار التسرب", "اختبار العزل", "بيتأكدوا من الدقة", "بيجربوه على عسل", "بيجربوه على مياه", "نتائج الاختبارات", "بيمر بيه قبل التصنيع"],
    "answer": "اختبار كفاءة التسخين، أداء التحريك، وحدة التكثيف، نظام الأمان."
  },
  {
    "keywords": ["مادة الحشوات", "الحشوات من ايه", "Seals مصنوعة من ايه", "مطاط درجة غذائية", "سيليكون درجة غذائية", "لضمان عدم التسرب", "الحشوات بتاعة الغطاء", "المواد المانعة للتسرب", "الجوانات من ايه", "الختم من ايه", "مادة السنفرة", "الحشوات بتتحمل الحرارة", "مادة آمنة", "مش بتسرب", "السيليكون في الحشوات", "المطاط الغذائي", "الحشوة بتتغير كل كام", "المانع للتسرب", "Seals مادة", "الحشوات في الوصلات", "الخامات المطاطية", "بتتحمل الاستخدام", "بتقفل كويس", "مادة مرنة", "محكمة الغلق", "بتمنع خروج البخار", "بتمنع دخول الهواء", "مناسب للأغذية", "مش بيسيب طعم", "مقاوم للتآكل"],
    "answer": "مطاط أو سيليكون درجة غذائية لضمان عدم التسرب."
  },
  {
    "keywords": ["أقصى ضغط للغطاء العلوي", "الغطاء يتحمل كام ضغط", "الضغط الأقصى", "0.5 بار", "الغطاء العلوي كام بار", "أقصى ضغط للغطاء", "الغطاء محكم قد ايه", "الضغط المسموح", "كام بار يتحمل", "نص بار", "الغطاء يتحمل ضغط خفيف", "أقصى حد للضغط الداخلي", "ضغط التشغيل", "الضغط التصميمي", "0.5 bar يعنى ايه", "يتحمل بخار خفيف", "مش عالي", "لأنه مش أوتوكليف", "الغطاء آمَن لحد كام", "الضغط الأقصى للغطاء", "لو زاد عن كده", "صمام الأمان بيتحرك", "الغطاء حدود ضغطه", "كام بار بالضبط", "نص بار ده قليل", "0.5 بار كام باسكال", "الغطاء مش高压", "مصمم لضغط منخفض", "الغطاء قفله محكم ولكن مش高压", "الضغط الأقصى للغطاء المذكور"],
    "answer": "0.5 بار."
  },
  {
    "keywords": ["تثبيت الحساسات داخل الخزان", "الحساسات بتتركب ازاي", "بيتم تثبيتها ازاي", "معزولة", "ملامسة المنتج", "قياس دقيق", "الحساس في جيب خاص", "بيتم تثبيته بشكل مباشر", "مش بيطفو", "ملامس للسائل", "التثبيت القوي", "عشان القراية تكون صح", "المستشعر يلمس المنتج", "الحساس معزول كهربائيا", "تركيب الحساسات PT100", "تركيب الحساسات DS18B20", "الحساسات فين بالضبط", "في الخزان جوه", "جنب الجدار", "في المنتصف", "التثبيت المباشر", "مفكوكش", "محكم ضد التسرب", "بيتم تثبيته من فوق", "من خلال فتحة خاصة", "يلمس المنتج مباشرة", "دون عوازل حرارية", "القراءة الحقيقية", "التركيب في الـ tank", "ازاي مثبت في الـ wall"],
    "answer": "يتم تركيبها بشكل معزول ومباشر مع ملامسة المنتج لقياس دقيق."
  },
  {
    "keywords": ["الغرض من قاعدة العجلات", "القاعدة ليها عجلات ليه", "ليه فيها عجلات", "تسهيل الحركة", "الجهاز يتحرك بسهولة", "نقل الجهاز", "الصيانة أسهل", "تغيير المكان", "القاعدة المتحركة", "العجلات بتخلي الجهاز مش ثابت", "ليه مش فرامل", "بتسهل الشغل", "تنقل بين الخطوط", "المصنع كله", "من مكان لمكان", "الجهاز مش واقف مكانه", "الحركة بدون رفع", "تسهيل التنظيف", "تسهيل الصيانة", "العجلات عشان كده", "القاعدة دوارة", "توزيع الوزن", "الحركة آمنة", "نقل الجهاز بين المعامل", "لما تحتاج تنقل", "العجلات للعملية", "الغرض الأساسي", "المرونة في التشغيل", "تسهيل على المشغل", "ميزة القاعدة"],
    "answer": "تسهيل حركة الجهاز داخل المصنع."
  },
  {
    "keywords": ["مصدر الطاقة البديل عند انقطاع الكهرباء", "لو قطعت الكهربا", "البديل ايه", "الطاقة الشمسية", "الألواح الشمسية", "البطارية 12 فولت", "مفيش كهربا ايه العمل", "الجهاز شغال بطارية", "الشمس بتشتغل بدل الكهربا", "الاستمرار في التشغيل", "انقطاع الكهرباء الحل", "بيشتغل شمسي", "بطارية احتياطي", "النظام الشمسي بينقذ", "بديل التيار", "حل أزمة الكهربا", "الجهاز عليه طاقة شمسية", "مصدر ثانوي", "الطاقة المتجددة", "بيحول على طول", "مش بيقف", "لو قطع النور", "البديل فوري", "هل في بطارية احتياطي", "الطاقة الشمسية مدمجة", "بيعتمد على الشمس وقت الانقطاع", "الجهاز بياخد من الشمس", "الاستمرارية", "مصدر بديل مضمون", "بيشتغل بدون كهرباء تقليدية"],
    "answer": "الطاقة الشمسية عبر الألواح الشمسية والبطارية 12 فولت."
  },
  {
    "keywords": ["دور المكثف في توفير المياه", "المكثف بيكثف البخار", "بيحول البخار لمياه", "المياه المقطرة بتتكون", "استخدام المياه المقطرة", "توفير المياه", "المكثف فائدته", "البخار كان بيروح فين", "الاستفادة من البخار", "مش بيضيع بخار", "بيحوله لسائل", "المياه المقطرة تستخدم تاني", "بيوفر مياه شرب", "تكثيف البخار", "المكثف وظيفته توفير المياه", "منع الهدر", "استغلال الحرارة", "تقليل الفاقد", "المياه الناتجة نقية", "يستخدمها في حاجة تانية", "دور مهم جدا", "بيحافظ على الموارد", "المياه المقطرة لأغراض أخرى", "تشغيل الـ water jacket", "التبريد بالمياه المقطرة", "منع تراكم القشور", "توفير استهلاك المياه", "كفاءة استخدام المياه", "المكثف بيعمل ايه بالبخار", "الاستفادة من كل حاجة"],
    "answer": "يقوم بتكثيف بخار الماء الخارج من الجهاز وتحويله إلى مياه مقطرة يمكن استخدامها لأغراض أخرى."
  },
  {
    "keywords": ["عدد حساسات الحرارة", "كام حساس حرارة في النظام", "على الأقل اثنان", "واحد للتحكم", "واحد للأمان", "عدد الحساسات", "فيه كام حساس", "المزدوج", "حساس تحكم وحساس أمان", "فيه اكتر من حساس", "العدد حسب التصميم", "ممكن يزيد عن اتنين", "الأساسي اتنين", "ليه حساسين", "حساس PT100 وحساس DS18B20", "يضمنوا دقة وامان", "التحكم بيقرأ", "الأمان يراقب", "لو فشل واحد فيه الثاني", "التكرارية", "العدد الأدنى اتنين", "فيه احتمال 3", "حساسات متعددة", "التوزيع في الخزان", "كل واحد ليه وظيفة", "بيتكلموا مع بعض", "العدد كافي", "عشان القياس الدقيق", "عشان السلامة", "كام حساس بالظبط في التصميم النهائي"],
    "answer": "على الأقل اثنان: واحد للتحكم وواحد للأمان، حسب التصميم."
  },
  {
    "keywords": ["نوع التيار المستخدم للمحرك", "المحرك بتيار ايه", "تيار مستمر 12 فولت", "DC 12V", "نوع التيار", "محرك DC", "ليه مش AC", "التيار المستمر", "فولتية المحرك", "المحرك شغال ببطارية 12V", "عشان البطارية الشمسية", "التيار المستمر مناسب", "نوع الكهربا", "محرك 12 فولت DC", "السيارة نفس الفكرة", "الموتور بيسحب أمبير", "تيار مستمر ليه", "عشان التحكم أسهل", "سهل تغيير السرعة", "PWM", "نوع التيار اللي بيدخل", "التيار محدد كده", "موتور التحريك", "المضخة 12V DC", "التيار المستمر من البطارية", "من اللوح الشمسي", "الـ inverter مش محتاج", "بيسحب طاقة أقل", "نوع التيار ثابت", "الجهاز كله 12V DC للأجزاء المتحركة"],
    "answer": "تيار مستمر 12 فولت."
  },
  {
    "keywords": ["نظام تخزين البيانات المستخدم", "البيانات بتتخزن فين", "SD card", "EEPROM", "بطاقة SD", "ذاكرة تخزين", "نظام التخزين", "بيحفظ على SD", "بيحفظ على EEPROM", "الذاكرة الدائمة", "بتفضل بعد انقطاع الكهربا", "حجم التخزين", "كام بيانات تتخزن", "الجهاز فيه memory", "SD card فايدتها", "EEPROM بتخزن الإعدادات", "التسجيل على كارت", "نظام الملفات", "بيطلع البيانات بعدين", "بيقراها على الكمبيوتر", "تخزين البيانات للجودة", "تتبع الدفعات", "البيانات التاريخية", "تسجيل كل دورة", "الذاكرة غير متطايرة", "تخزين آمن", "بيحافظ على الإعدادات", "بيحفظ آخر تشغيل", "البيانات مش بتروح", "نظام التخزين المزدوج"],
    "answer": "SD card أو EEPROM."
  },
  {
    "keywords": ["منع ارتفاع الضغط داخل الخزان", "ازاي بيمنع الضغط", "صمام أمان", "غطاء محكم بفتحة تهوية", "الحماية من الضغط", "لو زاد الضغط", "صمام الأمان بيتحرك", "بيعمل طقة", "بيعلي الضغط ليه", "الغطاء فيه فتحة", "تهوية للضغط الزائد", "ما ينفجرش", "الجهاز آمن من الضغط", "عنده relief valve", "مش بيضغط عالي", "تصميم مضاد للضغط", "الضغط يخرج من الصمام", "الغطاء مش قفل محكم تماما", "فتحة تهوية صغيرة", "خروج البخار الزائد", "أمان الضغط", "أقصى ضغط 0.5 بار", "لو تعدى البخار يخرج", "ما يتراكمش ضغط", "ضمان سلامة المستخدم", "ما ينفجرش الخزان", "صمام الأمان دور مهم", "الغطاء مصمم بفتحة", "الحماية من الداخل", "منع أي انفجار"],
    "answer": "باستخدام صمام أمان وغطاء محكم مزود بفتحة تهوية."
  },
  {
    "keywords": ["نوع التسخين في الهيتر", "التسخين كهربائي", "مقاومة من سبيكة النيكل", "نوع الهيتر", "السخان كهرباء", "طريقة التسخين", "تسخين بالمقاومة", "الملف السلك", "نيكل كروم", "الأسلاك بتسخن", "التيار بيعدي", "المقاومة تولد حرارة", "نوع عنصر التسخين", "هيتر كهربائي جاف", "مش تسخين بالبخار", "مش تسخين بالغاز", "تسخين مباشر", "ملف مسخن", "سلك مقاومة", "النوع المستخدم", "ليه مفيستعملش حاجة تانية", "بيسخن بسرعة", "الكفاءة عالية", "سهل التحكم فيه", "نوع آمن", "معزول عن المنتج", "التسخين بالمقاومة", "السبيكة بتتحمل الحرارة", "مش بيصدي", "طول عمره طويل"],
    "answer": "تسخين كهربائي بمقاومة من سبيكة النيكل."
  },
  {
    "keywords": ["توصيل الجهاز بنظام تحكم مركزي", "ينفع يوصله بنظام مركزي", "واجهة اتصال", "التحكم المركزي في المصنع", "الجهاز قابل للتكامل", "لو عايز تربطه بنظام المصنع", "موجود خاصية", "SCADA", "مودباص", "الاتصال موجود", "يتحكم فيه من بعيد", "المصنع الكبير", "ربطه بغيره", "في واجهة ولا لأ", "مش مذكور صراحة لكن ممكن", "بسهولة نضيف", "التحكم المركزي يدعم", "الاتصال الصناعي", "بروتوكول الاتصال", "Modbus RTU", "Ethernet", "النظام قابل للتوسع", "ينفع يبقي جزء من خط إنتاج", "الجهاز ذكي", "يدعم التكامل", "الواجهة المناسبة", "بشرط تجهيزها", "شبكة المصنع", "لو المصنع عنده BMS", "التوصيل للـ PLC"],
    "answer": "نعم، إذا تم تجهيزه بواجهة اتصال مناسبة."
  },
  {
    "keywords": ["نوع الشاشة المستخدمة", "الشاشة LCD ولا لمس", "LCD رقمية", "شاشة لمس", "نوع الشاشة", "ديسبلاي نوعه ايه", "شاشة عرض", "بيانات وبرمجة", "LCD 16×2", "شاشة رسومية", "يمكن لمس", "سهل الاستخدام", "النوع الرقمي", "واضحة", "مش غالية", "مناسبة للجهاز", "شاشة بسيطة", "شاشة تحكم", "مكتوب عليها", "الضغط على الأزرار", "شاشة مقاومة", "يمكن 7 segment", "النوع المستخدم في المشروع", "الـ display متطورة", "عرض الأرقام", "عرض الوقت", "نوع الـ HMI", "لوحة تحكم رقمية", "شاشة مدمجة", "واجهة المستخدم الرئيسية"],
    "answer": "LCD رقمية أو شاشة لمس."
  },
  {
    "keywords": ["تنظيف الجهاز", "ازاي بننظفه", "التنظيف يدوي", "نظام CIP", "غسيل يدوي", "لو معنديش CIP", "بينضف بسهولة", "الستانلس سهل تنظيفه", "بالماء الساخن", "بفرشاة ناعمة", "منظفات غذائية", "الشطف بالماء", "التعقيم", "التنظيف الداخلي", "الخزان بيتغسل", "الأنابيب بتنضف", "ازالة البقايا", "التنظيف بعد العسل", "التنظيف بعد الشوكولاتة", "التنظيف التلقائي", "مش محتاج تفكيك", "غسيل Closed", "CIP معناه ايه", "نظام التنظيف المعمول", "التنظيف من الأوساخ", "تنظيف سهل وسريع", "بمواد آمنة", "التشغيل الآمن", "كل جزء بينضف", "الجهاز صحي"],
    "answer": "يمكن تنظيفه يدويًا أو باستخدام نظام CIP إذا تم توفيره."
  },
  {
    "keywords": ["منفذ USB لتفريغ البيانات", "فيه USB", "ينقل البيانات بUSB", "منفذ فلاشة", "تفريغ البيانات USB", "مذكور ولا لأ", "مش مذكور صراحة", "لكن ممكن إضافته", "سهل إضافة USB", "نقل البيانات للكمبيوتر", "بدون USB ازاي", "بالـ SD card", "نفس الفكرة", "منفذ لتحديث البرامج", "تفريغ التقارير", "كabel data", "لو محتاج USB تتضاف", "سهلة التوصيل", "الجهاز قابل للتطوير", "منفذ احتياطي", "بيانات الدفعات", "نقل الملفات", "سهل لو أضفنا", "مش موجود بس ممكن", "مش مشكلة كبيرة", "بديله الـ SD", "الفايدة لو موجود", "التحديثات المستقبلية", "الطلب من العميل", "يمكن اضافته في الإصدار الجديد", "الجهاز جاهز له"],
    "answer": "ليس مذكورًا صراحة، لكن يمكن إضافته لسهولة نقل البيانات."
  },
  {
    "keywords": ["مدة تسخين 20 لتر ماء", "20 لتر ماء تسخين قد ايه", "من 20 لـ 72 درجة", "المدة التقريبية", "15-20 دقيقة", "على حسب الهيتر 1.5 كيلو", "بتعتمد على ايه", "سرعة التسخين", "كام دقيقة تسخن", "أقل من ربع ساعة", "تقريبا 20 دقيقة", "يعتمد على العزل", "الحرارة الأولية", "هل هيتر كفايته", "لو مبدئيا 20 درجة", "بيوصل 72 بسرعة", "أسرع لو الغطاء مقفول", "الزمن تقريبي", "مش ثابت", "الـ 20 دقيقة تقديرية", "في الحسابات طلعت 48 دقيقة بس ده للماء في الواقع", "في الواقع أسرع", "الهيتر 1.5 كيلو", "اختبار فعلي", "الماء أسهل", "المدة الحقيقية", "مع العسل أطول", "التسخين الأولي", "الماء بيسخن بسرعة", "15 دقيقة لو حرارة الغرفة"],
    "answer": "تعتمد على قدرة الهيتر (1.5 kW)، تقريبًا 15-20 دقيقة."
  },
  {
    "keywords": ["نوع المحرك المستخدم في الخلط", "موتور الخلط", "محرك تيار مستمر", "مع عمود وريشة خلط", "نوع موتور الخلط", "بيخلط ازاي", "الريشة بتاعت التقليب", "الموتور ده شغال", "محرك DC", "العمود بينزل جوه", "الريشة بتدور", "الخلط مستمر", "الموتور طاقته", "يدور بسرعة", "نوعه ايه بالضبط", "موتور 12V", "الجزء اللي بيحرك", "طريقة الخلط", "موتور التحريك", "الريشة ستانلس", "العمود طويل", "بيقلب السائل", "الخلط أفقي ولا رأسي", "موتور خارجي", "يركب على الغطاء", "موتور قوي", "مش بيحمل", "يدور بالعسل", "يوزع الحرارة", "يمنع التكتل"],
    "answer": "محرك تيار مستمر مع عمود وريشة خلط."
  },
  {
    "keywords": ["التحكم في سرعة الخلط", "السرعة بتتغير ازاي", "طريقة التحكم في السرعة", "PWM", "بتغير الجهد", "وحدة التحكم بتتحكم", "سرعة المحرك", "تقليل الجهد تقلل السرعة", "إشارة التحكم", "بتضبط RPM", "من شاشة الـLCD", "كتير سرعات", "التحكم التلقائي", "سرعة ثابتة ولا متغيرة", "بتختلف حسب المنتج", "للشوكولاتة سرعة", "للعسل سرعة", "PWM معناه ايه", "التحكم الرقمي", "بتدور ببطء", "بتدور بسرعة", "الموتور DC سهل التحكم فيه", "من الـ Arduino", "من خلال برنامج", "السرعة تتناسب مع الجهد", "بتزيد السرعة", "بتقل السرعة", "التحكم الدقيق", "عشان الخلط المتجانس", "مش بتكسر المنتج", "سهل جدا"],
    "answer": "عبر وحدة التحكم عن طريق تغيير الجهد أو باستخدام PWM."
  },
  {
    "keywords": ["تبريد المنتج", "الجهاز بيبرد ولا لأ", "ينفع يبرد", "وحدة التبريد المائي", "Water Jacket", "ممكن تبرد", "مش تسخين بس", "فيه تبريد", "ازاي بيبرد", "الميه الباردة حوالين الخزان", "بيخفض الحرارة", "يفيد في البسترة", "التبريد من 72 لـ 4 درجات", "ينفع في العسل", "بيبرد بسرعة", "المياة الجارية", "التبريد النشط", "الجهاز متعدد الوظائف وبيبرد", "جزء التبريد فعال", "ميزة إضافية", "كفاءة التبريد", "يستخدم مياه عادية", "يستخدم مياه مبردة", "أهميته في سلامة المنتج", "منع نمو البكتيريا", "التبريد بعد التسخين", "الوحدة الكاملة", "التبريد للشوكولاتة", "التبريد للعسل", "الجهاز عنده تبريد مائي مدمج"],
    "answer": "نعم، باستخدام وحدة التبريد المائي (Water Jacket)."
  },
  {
    "keywords": ["مادة العزل الحراري", "العزل من ايه", "فوم عازل", "ألياف زجاجية", "مادة العزل مش مذكورة تحديدا", "لكن المعروف", "مادة عازلة للحرارة", "فوم بوليريثان", "صوف صخري", "بين الجدارين", "مادة خفيفة", "مش بتتأثر بالحرارة", "الاستخدام الشائع", "السماكة كام", "تخلي الحرارة جوه", "تمنع خروج الحرارة", "العزل ضروري", "المادة الصحيحة", "اللي موجود في السوق", "أتوقع فوم", "ألياف زجاجية مضغوطة", "بيتوسط الجدار الخارجي والداخلي", "العزل بيمنع الفقد", "مادة آمنة", "مش قابلة للاشتعال", "المعيار الصناعي", "عزل حراري عالي", "مش مذكور بالاسم", "لكن نستخدم المعروف", "المواد الشائعة", "تتحمل درجات الحرارة"],
    "answer": "غير مذكورة تحديدًا، لكن عادة ما تكون فوم عازل أو ألياف زجاجية."
  },
  {
    "keywords": ["سماكة جدار الخزان الخارجي", "السمك كام مم", "ستانلس 304 بسمك", "1-2 مم نموذجي", "غير محددة بدقة", "الجدار سمكه كام", "خزان سميك", "يضمن المتانة", "السمك المناسب", "مش رفيع قوي", "مش غالي", "الستانلس بسمك 1 مم", "يستحمل", "الضغط الخفيف", "الخزان الداخلي", "الجدار الخارجي", "الجدار الداخلي", "السمك متوسط", "جدار مزدوج", "كل جدار 1 مم", "السمك المجمع", "المواصفات الهندسية", "تقريبا 1.2 مم", "على حسب التصميم", "كفاية للأغراض الغذائية", "مش هيخرم بسرعة", "سهل اللحام", "السمك القياسي", "مش محتاج أكتر من كده", "خزان 20 لتر سمكه كده", "مناسب للوحدة"],
    "answer": "غير محددة، ولكن ستانلس 304 بسماكة 1-2 مم نموذجي."
  },
  {
    "keywords": ["توصيل اللوح الشمسي بالجهاز", "اللوح الشمسي بيتوصل ازاي", "منظم شحن", "Charge Controller", "للبطارية", "طريقة التوصيل", "الشمسي بيدخل على منظم", "المنظم بيشحن البطارية", "البطارية بتغذي الجهاز", "التوصيل بسيط", "الألواح متصلة بمنظم", "المنظم يمنع الشحن الزائد", "يحمي البطارية", "الـ Charge Controller وظيفته", "بيحول الجهد", "منظم الشحن مهم جدا", "من غير منظم بتتلف البطارية", "الجهاز بيتغذى من البطارية", "الجهاز بيتغذى مباشرة من الألواح", "نظام هجين", "التوصيل بين الألواح والبطارية", "الـ controller المدمج", "سهل التركيب", "الألواح على السطح", "البطارية جوه الجهاز", "التوصيل الداخلي", "الجهاز جاهز للشمسي", "مدخل للشمس", "التصميم كده", "كل القطع موجودة", "توصيل بسيط للمستخدم"],
    "answer": "من خلال منظم شحن (Charge Controller) إلى البطارية."
  },
  {
    "keywords": ["دور الـ EEPROM", "EEPROM بيعمل ايه", "تخزين دائم", "بعد انقطاع الطاقة", "الإعدادات بتفضل", "البيانات مش بتروح", "ذاكرة غير متطايرة", "الـ EEPROM فايدته", "لما تفصل الكهربا", "الإعدادات ترجع", "لا تحتاج إعادة برمجة", "تخزين آخر حالة", "حفظ الـ set points", "ذاكرة صغيرة دائمة", "بتخزن الإعدادات الأساسية", "بتخزن كود الجهاز", "بيقرأ منها عند بدء التشغيل", "بتكتب عليها", "عمرها طويل", "بتتحمل كتابات كثيرة", "تخزين البيانات الهامة", "بديل لـ SD في الأساسي", "بتسجل الأحداث", "لما البطارية تخلص", "البيانات ماتضيعش", "الإعدادات اللي ضبطتها", "بتفضل موجودة", "الـ EEPROM جزء من الـ Arduino", "حجمها صغير", "مهم جدا في التشغيل"],
    "answer": "تخزين الإعدادات والبيانات بشكل دائم حتى بعد انقطاع الطاقة."
  },
  {
    "keywords": ["نوع الموصلات الكهربائية", "الموصلات ايه نوعها", "مقاومة للحرارة", "مقاومة للرطوبة", "معزولة", "كابلات مناسبة", "نوع الأسلاك", "بيوت Cu", "العزل PTFE", "يتحمل الحرارة", "لا تنصهر", "التوصيلات آمنة", "موصلات صناعية", "معزولة جيدا", "مضادة للرطوبة", "بلاستيك مقاوم", "موصلات محكمة", "تتحمل الاهتزاز", "النوع المستخدم", "كابلات السيليكون", "معزول عزل عالي", "يتحمل 100 درجة", "للبسترة", "ليه اتصال", "مناسب للأغذية", "لا يسبب قصر", "آمن كهربائيا", "الموصلات مش بتسخن", "مقاومة جيدة", "توصيل الأجزاء الإلكترونية"],
    "answer": "موصلات مقاومة للحرارة والرطوبة، معزولة."
  },
  {
    "keywords": ["تثبيت حساس PT100", "PT100 بيتثبت ازاي", "جيب خاص داخل الخزان", "ملامسة المنتج مباشرة", "طريقة التركيب", "بيتحط في جيب معدني", "الجيب ملامس للسائل", "الحساس مش بيلامس مباشرة لكن من خلال الجيب", "التثبيت محكم", "من فوق الخزان", "الجيب معزول", "يخرج الحساس من الغطاء", "قابل للإزالة", "سهل الاستبدال", "التثبيت بالخيوط اللولبية", "بيتم ربطه", "لا يتسرب", "مكان التركيب المناسب", "في قلب الخزان", "قريب من الهيتر", "مش لاصق في الجدار", "يلمس السائل فعليا", "قياس دقيق", "التثبيت الميكانيكي", "معزول كهربائيا", "سهل التنظيف", "التركيب الدائم", "بيتم من خلال فتحة مخصصة", "الجيب stainless", "ينقل الحرارة للحساس"],
    "answer": "في جيب خاص داخل الخزان لملامسة المنتج مباشرة."
  },
  {
    "keywords": ["أقصى تيار للـ SSR", "SSR 25A يتحمل كام أمبير", "25 أمبير", "أقصى تيار", "كام أمبير الـ SSR", "الحد الأقصى", "بيشغل حتى 25A", "الهيتر 6.82A مايقارب", "الـ SSR كبير", "متسع", "زيادة أمان", "25 أمبير مستمر", "ذروة أعلى", "آمن للهيتر", "الـ Solid State Relay يتحمل كام", "أكبر من حمل الهيتر كتير", "25A على 220V يعني 5500W", "بالتالي مريح", "لا يتحمل فوق 25A", "يحتاج مبرد", "تيار المقاومة", "مش محتاج وصله أكبر", "التصنيف 25A", "الحد الأقصى المسموح", "يفضل ما تقربش من 25A", "الهيتر 6.82A يبقى تمام", "عمر الـ SSR يطول", "الواحدة مش غالية", "مناسب للجهاز", "الـ SSR 25A اختيار جيد"],
    "answer": "25 أمبير."
  },
  {
    "keywords": ["الجهد التشغيلي للمضخة", "المضخة 12 فولت", "الـ Voltage بتاع المضخة", "12V DC", "جهد التشغيل", "كام فولت تشتغل", "تعمل على 12V", "تيار مستمر", "جهد منخفض", "آمن", "مضخة 12V", "بدون كهرباء عالية", "من البطارية مباشرة", "منظم الجهد", "يمكن تشتغل من 10-14V", "المضخة مصممة لكده", "الجهد الاسمي 12V", "لو زاد عن 12V", "يمكن تتلف", "لو قل عن 12V", "أداء ضعيف", "عشان كده البطارية 12V", "اللوح الشمسي بيدخل على منظم ليعطي 12V", "الجهد ثابت", "مضخة DC عادية", "متوفرة في السوق", "قليلة الاستهلاك", "الجهد آمَن للمستخدم", "ما تصعقش", "مناسب للأجهزة الذكية", "سهل توفيره"],
    "answer": "12 فولت تيار مستمر."
  },
  {
    "keywords": ["انقطاع الطاقة أثناء التشغيل", "أثناء الشغل قطعت الكهربا", "الحل ايه", "النظام الشمسي بديل", "لو الشمسي قطعت", "يتوقف التسخين", "يتم حفظ البيانات", "التعامل مع الانقطاع", "الجهاز بيفهم", "بيحفظ أخر حالة", "عند عودة الكهرباء", "يستأنف ولا لأ", "البيانات مش بتروح", "حفظ الإعدادات", "لا يحدث تلف", "الدفعة تعاد", "يتم تسجيل الانقطاع", "في تخزين في EEPROM", "الجهاز لا يزال يعرض", "التبريد لا يشغله", "المضخة تتوقف", "الخلط يتوقف", "الحساسات بتقف", "لكن البيانات محفوظة", "المشغل يعيد التشغيل", "بدون الشمسي", "الجهاز يقف تماما", "الحرارة تفقد", "يجب إعادة التسخين", "الآمان انه ما بيفسدش المنتج", "الحل هو البطارية الاحتياطية"],
    "answer": "النظام الشمسي يعمل كبديل، وعند انقطاع الكل يتوقف التسخين ويتم حفظ البيانات."
  },
  {
    "keywords": ["مقاومة أرضية", "في grounding", "التأريض", "يجب أن يكون موجود", "لأسباب الأمان", "غير مذكورة نصا", "الأرضي مهم", "يمنع الصعق", "يفضل توصيله", "الجهاز يحتوي على سلك أرضي", "القابس 3 فتحات", "نصيحة أمان", "في حالة حدوث تسرب", "التيار يروح للأرض", "الأجزاء المعدنية مؤرضة", "الستانلس يوصل كهرباء", "لازم تأريض", "غير مذكور في المواصفات", "ولكن سيكون موجود", "في النموذج النهائي", "لازم لكل جهاز كهربائي", "حماية المستخدم", "حماية الجهاز", "الصواعق", "القفلة الأرضية", "الجهاز بدون أرضي خطر", "نصمم على وجوده", "الجهاز آمن مع التأريض", "نوصي به بشدة", "اللوائح تطلبه", "مش هيشتغل منه حاجة"],
    "answer": "يجب أن تكون موجودة لأسباب الأمان، لكن غير مذكورة نصًا."
  },
  {
    "keywords": ["دقة حساس PT100", "PT100 بيقرا بدقة كام", "الدقة 0.1 درجة مئوية", "حساس دقيق جدا", "دقة القياس", "0.1°C", "نص درجة ولا 0.1", "دقة عالية", "المعيار بتاعه", "أدق من الـ DS18B20", "الدقة في الصناعات الغذائية", "PT100 دقته 0.1", "تenth of degree", "يراعي الجودة", "للبسترة يتحكم بـ 0.1", "يضمن السلامة", "الدقة كويسة جدا", "ارضاء لمعايير CCP", "اختيار ممتاز", "دقة ممتازة مقابل السعر", "يقرا حتى 0.01 لو إلكترونيات أحسن", "لكن المعروف 0.1", "تكرر القياس عالي", "PT100 معاير", "قليل الانجراف", "استقرار طويل الأمد", "دقة عالية لكشف التغيرات", "الحساس مناسب للأغذية", "حساس معتمد عالميا", "الدقة بتاعته ممتازة"],
    "answer": "0.1 درجة مئوية."
  },
  {
    "keywords": ["مادة الأنابيب الداخلية", "الأنابيب الداخلية من ايه", "سيليكون درجة غذائية", "قطر 1 بوصة", "قطر الأنابيب", "مادة آمنة", "مش بتتأثر بالحرارة", "مرنة", "سيليكون شفاف", "الأنابيب الداخلية بتاعه المنتج", "بتمرر العسل", "الشوكولاتة السايلة", "المادة المعتمدة FDA", "Food Grade", "السيليكون مقاوم للتشقق", "مش بيسيب طعم", "سهل تنظيفها", "قطرها كبير شوية 1 بوصة", "تسمح بالتدفق", "مادة متينة", "تتحمل الحرارة العالية 120 درجة", "مرنة في التركيب", "الأنابيب دي بتوع الخروج والدخول", "السائل يمر جواها", "السيليكون بديل المطاط", "مش بيتفاعل مع الزيوت", "مش بينشف", "سهل تعقيمها", "المواصفات الغذائية", "بطول مناسب"],
    "answer": "سيليكون درجة غذائية قطر 1 بوصة."
  },
  {
    "keywords": ["عدد العجلات في القاعدة", "العجلات كام واحدة", "4 عجلات", "أربع عجلات", "كل ركن فيه عجلة", "غير مذكور صراحة لكن مفترض", "الأغلب 4", "عجلتين ولا أربع", "توزيع الوزن", "الحركة متزنة", "عجلات دولابية", "حتى تتحرك بسهولة", "أثنين منها بفرامل", "الأفضل 4", "الاستقرار", "الجهاز مش هيتحرك لوحده", "العدد المناسب", "مش هيقلب", "عجل 2 بفرامل 2 بدون", "العجلات البلاستيكية", "يتحمل الوزن", "مش هتغوص في الأرضية", "توزيع الحمل", "قاعدة العجلات مستقرة", "كل عجلة تتحمل 50 كجم", "الوزن الكلي للجهاز", "عدد مناسب لـ 70×50 سم", "عجل دوار", "يسهل المناورة", "مسافة كافية"],
    "answer": "4 عجلات (غير مذكور صراحة لكن مفترض)."
  },
  {
    "keywords": ["الطلاء الخارجي", "الجهاز مطلي ولا لأ", "ستانلس غير مطلي", "مطلي بطبقة واقية", "نوع الطلاء", "لمعة الفولاذ", "طبقة شفافة", "يحافظ على اللمعة", "مقاوم للبصمات", "طلاء الكتروستاتيك", "بودرة كوتنج", "يحمي من الخدش", "الستانلس مش بيصدأ", "ما يحتاجش طلاء عادي", "لكن ممكن طبقة واقية اختيارية", "يظل شكله معدني", "الطلاء يمنع التصاق الأوساخ", "سهل التنظيف", "المواد الآمنة", "الطلاء الغذائي", "ما يطلعش سموم", "لمسة ناعمة", "اللون الطبيعي", "دهان مقاوم للصدا", "طبقة نيكل", "غير مذكور بالتفصيل", "المظهر الجمالي", "السطح الخارجي أملس", "يمنع نمو البكتيريا", "الطلاء اختياري"],
    "answer": "ستانلس غير مطلي، أو مطلي بطبقة واقية."
  },
  {
    "keywords": ["تفريغ المنتج بعد المعالجة", "المنتج بينزل ازاي", "صنبور", "مضخة", "طريقة التفريغ", "اخراج المنتج", "بعد ما يخلص", "يفتح الصنبور", "المضخة تشتغل", "التفريغ بسهولة", "من اسفل الخزان", "صنبر ستانلس", "خرطوم السيليكون", "التفريغ بدون تلامس", "من خلال المضخة", "يضخ المنتج", "الجهاز فيه Valve", "يفتح يطلع المنتج", "ممكن وعاء تحت", "مضخة التفريغ", "تغليف المنتج", "الصنبور واسع", "يناسب اللزوجة", "يخرج العسل", "يخرج الشوكولاتة", "جميع المنتجات السائلة", "لا يبقى بقايا", "التفريغ الكلي", "سهل التحكم في التدفق", "صنبور أمان", "يغلق محكم"],
    "answer": "عبر صنبور أو مضخة."
  },
  {
    "keywords": ["مستوى الضوضاء", "الجهاز واطي ولا عالي", "منخفض نسبيا", "12 فولت ضوضاءه قليل", "المحرك صوته", "المضخة صوته", "نسبة الضوضاء", "مش مزعج", "بالمقارنة بغيره", "يعمل 12V والصوت قليل", "ضوضاء أقل 60 ديسيبل", "ما يضايقش المشغل", "في المصنع مسموح", "هادى", "شغله عادي", "الضوضاء المنخفضة ميزة", "المحركات الصغيرة صوتها مقبول", "العزل يقلل الصوت", "الجهاز مش مزعج", "المستخدم يتحمله", "أقل من الأجهزة التقليدية", "مناسب للمعامل", "مناسب للمنازل", "لا يحتاج أذن واقية", "بيئة عمل مريحة", "المضخة الـ 12V صوتها طفيف", "الـ SSR صامت", "الريلات العادي سمع", "المميز فيه انه هادي", "لا يسبب ضوضاء مزعجة", "صوت الخلط اخف"],
    "answer": "منخفض نسبيًا لأنها تعمل بـ 12 فولت."
  },
  {
    "keywords": ["خاصية Wi-Fi للتحكم عن بعد", "فيه Wi-Fi", "التحكم عن بعد", "إضافة مستقبلية", "غير مذكورة", "لكن ممكن", "سهل إضافتها", "NodeMCU مثلًا", "تطبيق جوال", "مراقبة من البيت", "تشغيله من بره", "الجهاز تقني يسمح", "لو أضفنا موديول Wi-Fi", "يتحكم فيه بالهاتف", "فكرة جيدة", "ليست موجودة حاليا", "لكن المكونات تسمح", "التحديث المستقبلي", "العميل يطلبها", "المشروع قابل للتطوير", "لم نذكرها في المستند", "الاستفادة من IoT", "تسجيل البيانات عن بعد", "الإنذار على الموبايل", "يمكن إضافتها كخيار", "البروتوتوكولات موجودة", "سعر الإضافة بسيط", "سنتيمات إضافية", "مدة الشحن", "سهل ربطة بالشبكة"],
    "answer": "يمكن إضافتها كتحديث مستقبلي، لكن غير مذكورة."
  },
  {
    "keywords": ["نوع الـ Microcontroller", "المتحكم الدقيق ايه", "Arduino", "Raspberry Pi", "نوع البروسيسور", "Microcontroller المستخدم", "بيتحكم بايه", "الـ MCU ايه", "الأردوينو ولا التوت", "الاتنين شغالين", "كل واحد ينفع", "حسب التوفر", "Arduino Mega", "Raspberry Pi 3 أو 4", "الأردوينو أبسط", "راسبيري أقوى", "الجهاز يقبل الاتنين", "مكتوب في المواصفات", "اختياري حسب المطور", "التحكم في الحساسات", "الـ PID ممكن برمجته", "لغة البرمجة C++ أو Python", "كلهم متوافقين", "الـ bootloader", "سهولة التوصيل", "جامعة SOLTECH", "المنصة المفتوحة", "المستخدم يقدر يغير", "الـ microcontroller المناسب", "متوفر في السوق"],
    "answer": "Arduino أو Raspberry Pi."
  },
  {
    "keywords": ["معايرة حساس الحرارة", "ازاي بيعايروه", "باستخدام ماء مغلي", "وماء مثلج", "مرجعين", "طريقة المعايرة", "الحساس يتعاير", "عشان يبقى دقيق", "نقطتين معروفتين", "الماء يغلي 100 درجة", "الماء يثلج 0 درجة", "نقيس ونضبط", "لمبة حرارة قياسية", "مقارنة القيم", "يفرق قد ايه", "نعدل في الكود", "أوفست", "المعايرة كل فترة", "لتجنب الانجراف", "بجهاز معاير", "PT100 بيحتاج معايرة", "سهلة", "تستخدم ماء نقي", "ارتفاع المنطقة يؤثر على الغليان", "يصحح حسب الضغط الجوي", "المعايرة مهمة لـ CCP", "تتم عند التشغيل الأول", "تتم دوريا كل 6 شهور", "باستخدام ترمومتر معتمد", "الجهاز نفسه ممكن يساعد", "شاشة تعرض الفرق"],
    "answer": "باستخدام ماء مغلي وماء مثلج كمرجعين."
  },
  {
    "keywords": ["أقصى وقت للبرمجة", "أقصى وقت للتسخين", "كام ساعة ممكن برمجته", "لعدد ساعات", "يعتمد على البرنامج", "التحكم يسمح بساعات طويلة", "أقصى زمن نظري كبير", "واقعي ساعات", "المستخدم يحدد", "الـ timer كبير", "إعدادات مفتوحة", "أقصى وقت 99 ساعة", "أو 999 دقيقة", "الدقة في البرمجة", "اكتر من اليوم", "ما يحددش إلا البرنامج", "فيه int كبير", "لحد ما تشبع الذاكرة", "إحنا بنقول ساعات", "للتسخين البطيء", "للاستخدامات البحثية", "الماكس يم تعد 24 ساعة", "يصلح للتجفيف", "للمعالجات الطويلة", "لو عاوز يوم كامل", "البرمجة سهلة", "الجهاز يدعمها", "الإعدادات تخزن", "مفيش حد ثابت", "ولكن ساعات طويلة تكفي"],
    "answer": "يعتمد على البرنامج، لكن يمكن ضبطه لساعات."
  },
  {
    "keywords": ["نظام إنذار عند الانتهاء", "في جرس لما يخلص", "بيئن عند الانتهاء", "يمكن برمجته", "جرس أو LED", "صوت أو ضوء", "يخبر المشغل", "تمت المعالجة", "منبه", "ليه مهم", "الجهاز يلفت نظره", "يبقى جاهز", "خاصية سهلة", "تضاف برمجيا", "بزازير بسيطة", "يستخدم الطنان", "ضوء أحمر", "الإعلام بالانتهاء", "متوفرة إذا أردنا", "مذكورة في الميزات", "الجهاز ينبه", "يزيد الأمان", "يمنع نسيان المنتج", "الإنذار الصوتي", "ينفع في المصانع", "صوت مسموع", "يختلف عن إنذار الخطر", "إنذار إتمام التشغيل", "الـ Arduino بيعمله بسهولة", "سماعة أو LED"],
    "answer": "يمكن برمجته بسهولة عن طريق الجرس أو LED."
  },
  {
    "keywords": ["عدد الوظائف", "الجهاز بيعمل كام حاجة", "بيعمل ايه", "الوظائف كام", "فيه كام وظيفة", "بيشتغل في كام حاجة", "مهام الجهاز", "الوحدة بتعمل ايه", "الوظائف الموجودة", "بيعمل بسترة ولا ايه", "فيه خلط", "بيوفر كام خدمة", "كل الوظائف", "الجهاز ده بيعمل ايه بالظبط", "الخواص", "فيه تسخين وتبريد", "ممكن يعمل ايه", "الوظائف المتاحة", "فيه بسترة", "بيعمل ايه غير التسخين", "الوحدة متعددة الوظائف", "فيه كام وضع", "الخدمات اللي يقدمها", "بيستخدم في ايه", "المهام الأساسية", "الجهاز أداءه ايه", "فيه خلط وتسييح", "الست وظائف", "بياذوب شوكولاتة", "فيه تبريد وتسييح"],
    "answer": "ست وظائف: بسترة – إذابة تبلور – إذابة شوكولاتة – خلط – تسخين – تبريد."
  },
  {
    "keywords": ["تسجيل البيانات", "بيحفظ البيانات", "فيه تخزين", "البيانات بتتسجل", "مشكلة غياب التسجيل", "ازاي بيتعامل مع البيانات", "فيه ولا فيه تسجيل", "بيحفظ درجات الحرارة", "بيخزن البيانات", "فيه ميموري", "شاشة LCD ليها تخزين", "فيه SD", "بيحتفظ بالإعدادات", "البيانات بتروح فين", "فيه EEPROM", "ازاي بتابع الجودة", "بيحفظ الوقت", "التتبع ازاي", "فيه سجل", "بيخزن الكل", "تسجيل الدفعات", "الجهاز بيسجل", "فيه ذاكرة", "البيانات بتبقى فين بعد التشغيل", "فيه حفظ للبيانات", "ازاي بتضمن الجودة", "فيه log", "مشكلة التسجيل انحلت ازاي", "بيخزن ازاي", "الجهاز بيحفظ كل حاجة"],
    "answer": "توجد شاشة LCD ووحدة تخزين SD أو EEPROM لتسجيل كل الإعدادات ودرجات الحرارة والوقت لضمان التتبع والجودة."
  },
  {
    "keywords": ["تفاوت الجودة", "الدفعات مش متساوية", "المشكلة في اختلاف الجودة", "بيعمل نفس الجودة", "الدفعات بتطلع زي بعض", "كيف يحل تفاوت الجودة", "الجودة بتتساوى", "كل دفعة زي التانية", "ازاي ضمن الثبات", "الجودة موحدة", "المشكلة دي اتصلحت", "التحكم الآلي فاد ازاي", "ليه الدفعات بتختلف", "جهاز بيخليها زي بعض", "الجودة بقت ثابتة", "بيحافظ على التكرارية", "ازاي كل دفعة تطلع كويسة", "المشكلة في التكرارية", "الحل في ايه", "فيه اتوماسيون", "ازاي الجودة مبقتش تختلف", "الضبط الآلي", "الدقة في كل مرة", "الجهاز وحد الجودة", "الجودة بتتكرر", "ازاي التكرارية بقت عالية", "خلاص الاختلاف راح", "لأول مرة الدفعات زي بعض", "فيه تجانس", "الجودة بقت ثابتة لكل شغلة"],
    "answer": "بفضل التحكم الآلي، كل الدفعات تخرج بجودة متجانسة وثابتة."
  },
  {
    "keywords": ["التلوث", "مخاطر التلوث", "ازاي قلل التلوث", "النظافة", "بيقلل تلوث ايه", "التصميم المغلق", "closed system", "منع التلوث", "تلوث المنتج", "الانتقال بين الاجهزة", "المشكلة في التلوث", "بيحافظ على العقم", "ازاي بيقلل التلوث", "فيه تصميم ازاي", "المنتج بيتعرض للهواء", "النظام المغلق ده", "ايه فايدة التصميم المغلق", "التلوث بين الآلات", "بيحمي من ايه", "الجهاز صحي", "تلوث مصانع الأغذية", "التصميم الصحي", "المنتج ملامس لأي حاجة", "ازاي ضمن النظافة", "التلوث الخارجي", "الجهاز بيحافظ على سلامة المنتج", "فيه عزل", "بيقلل العوامل الخارجية", "التصميم ده ليه", "النظام المغلق ايه فائدته"],
    "answer": "باستخدام تصميم مغلق (Closed System) يقلل من تلوث المنتج أثناء الانتقال بين الأجهزة."
  },
  {
    "keywords": ["سعة الخزان", "بيتسع كام لتر", "الخزان سعته", "يا ترى سعته كام", "بياخد كام", "الجهاز حجمه", "20 لتر", "سعة الدورة", "بيشيل قد ايه", "الكمية لكل دورة", "الحلة تتسع كام", "سعة التشغيل", "أقصى كمية", "الخزان كام لتر", "الوحدة بتاخد كام", "يكفي لمشروع صغير", "سعة الجهاز", "بيعدي كام في المرة", "حجم التشغيل", "الخزان الداخلي", "الجهاز بيحضر كام في الشغلة", "الليترات لكل دورة", "الجهاز سعته كام", "الشغلة الواحدة تستوعب كام", "الخزان 20 لتر", "الكمية اللي بتتسخن مرة واحدة", "أكبر كمية", "الوحدة سعتها التشغيلية", "يا ترى تعبي كام", "سعة الاستخدام"],
    "answer": "20 لترًا لكل دورة."
  },
  {
    "keywords": ["المواد الخام", "الهيكل من ايه", "الخزان مصنوع من ايه", "الستانلس 304", "مادة الهيكل", "بيتصنع من ايه", "الجهاز جسمه من ايه", "خامات التصنيع", "المواد المستخدمة", "الاستانلس ستيل", "نوع المعدن", "الخزان من حديد ايه", "مقاوم للصدأ", "مادة آمنة للغذاء", "الستانلس ده نمرته", "الجهاز ده مصنوع من", "الهيكل الخارجي", "المواد الاساسية", "الخامات الداخلة في الصنع", "بيتكون من ايه", "الجزء اللي ملامس للاكل", "مصنوع من ايه بالظبط", "نوع الخامة", "هل هو ستانلس", "فيه مواصفات", -"الستانلس 304 ده كويس", "ليه اختاروا نوعية دي", "الخامات المفضلة", "بيتكون من الاستانلس", "هيكل الجهاز"],
    "answer": "ستانلس ستيل 304 (Stainless Steel 304)."
  },
  {
    "keywords": ["انواع حساسات الحرارة", "ايه الحساسات الموجودة", "أنواع المستشعرات", "بيستخدم حساسات ايه", "فيه PT100", "فيه NTC", "فيه DS18B20", "الحساسات المستخدمة", "كل الحساسات", "حساس الحرارة نوعه ايه", "انواع الحساسات الحرارية", "بيستخدم ايه في القياس", "حساسات دقيقة", "نوع المستشعرات ايه", "فيه اكتر من حساس", "الحساسات بتقيس ايه", "نظام الحساسات", "بيقرأ الحرارة ازاي", "فيه حساسات ايه بالظبط", "الجهاز فيه حساسات ايه", "مستشعرات الحرارة", "انواعها ايه", "فيه حساس بلاتين", "PT100 ولا غيره", "DS18B20 ده موجود", "فيه NTC ولا لأ", "كل الحساسات موجودة", "الجهاز مزود بحساسات ايه", "الحرارة بتتقاس بايه", "فيه 3 أنواع"],
    "answer": "PT100 و NTC Sensor و DS18B20."
  },
  {
    "keywords": ["نظام التحكم", "التحكم المستخدم", "الوحدة بيتحكم فيها بايه", "نظام التشغيل", "نوع الكنترول", "Digital PID Display", "Arduino ولا Raspberry Pi", "التحكم ايه", "المتحكم الدقيق", "Microcontroller المستخدم", "نظام ذكي", "بيتحكم ازاي", "فيه PID", "الجهاز متحكم فيه بايه", "طريقة التحكم", "التحكم بالحرارة", "اللوحة الإلكترونية", "البرمجة على ايه", "القاعدة الالكترونية", "الدماغ بتاعة الجهاز", "نظام التحكم الرقمي", "الجزء اللي بيفكر", "التحكم بالوحدة", "العقل المدبر للجهاز", "فيه شاشة PID", "بيستخدم ايه كنظام تحكم", "Arduino في الجهاز", "Raspberry Pi شغال", "التحكم في العمليات", "النظام الالكتروني"],
    "answer": "Digital PID Display Microcontroller + (Arduino / Raspberry Pi)."
  },
  {
    "keywords": ["مصادر الطاقة", "بيشتغل بايه", "الطاقة المستخدمة", "فيه كهرباء 220", "فيه طاقة شمسية", "مصادر الكهربا", "الجهاز بياخد طاقة منين", "طريقة التشغيل", "بيوصل بكهربا ولا شمس", "فيه نظام شمسي", "البدائل للكهرباء", "طاقته ايه", "بيشتغل بأي حاجة", "مصادر الطاقة المتاحة", "فيه أكثر من مصدر", "كهرباء عادية", "طاقة شمسية مدمجة", "الجهاز شغال على ايه", "ممكن شمسي", "بيحتاج ايه عشان يشتغل", "مصدر طاقته ايه", "بيتغذى ازاي", "فيه بطارية شمسية", "التوصيلات الكهربائية", "الجهاز ده بيسحب كهربا", "ممكن طاقة بديلة", "الطاقة النظيفة", "مصادر التشغيل", "بيستهلك كهرباء ولا شمس", "فيه طاقة شمسية جنبه"],
    "answer": "كهرباء 220 فولت أو طاقة شمسية."
  },
  {
    "keywords": ["وظيفة المكثف", "المكثف بيعمل ايه", "وحدة المكثف فايدتها", "بيعمل مياه مقطرة", "بيكثف البخار", "ليه فيه مكثف", "دور المكثف", "المكثف بيحول ايه", "البخار بيروح فين", "المياه المقطرة بتتكون ازاي", "فايدة المكثف", "الجهاز فيه مكثف", "بيجمع الميه", "بيمنع البخار يضيع", "استفادة من البخار", "تقليل الفاقد", "وظيفة جهاز التكثيف", "المياه بتتقطر", "ليه المكثف مهم", "بيعمل ايه في البخار", "تحويل البخار لمياه", "الجهاز بيحافظ على المياه", "فيه تكثيف", "المكثف ازاي بيشتغل", "بيستفيد من البخار", "بيعصر البخار", "الجزء ده ايه وظيفته", "المياه المقطرة تتجمع", "فيه استغلال للحرارة", "المكثف فايدته ايه"],
    "answer": "تحويل البخار الناتج إلى مياه مقطرة بدلاً من أن يتبدد."
  },
  {
    "keywords": ["أنظمة الأمان", "فيه امان", "الجهاز فيه حماية", "الأمان ازاي", "يحمي من ايه", "فيه فصل تلقائي", "حماية من الحرارة", "حساس حرارة للأمان", "الحمل الزائد", "السلامة في الجهاز", "ازاي بيمنع الحوادث", "فيه overheating protection", "نظام الأمان مكون من ايه", "الجهاز آمن", "بيفصل لو سخن", "حمى ازاي", "ميزات الأمان", "بيحمي نفسه", "فيه حماية كهربائية", "الأجهزة الأمنية جواه", "فيه High limit", "التلقائي عند ارتفاع الحرارة", "كيف يمنع الخطر", "الجهاز مش بيحرق نفسه", "يهتم بالسلامة", "أجزاء الأمان", "الحماية من السخونة", "فيه safe guards", "يحمي المستخدم", "نظام الأمان كام"],
    "answer": "حساس حرارة، فصل تلقائي عند ارتفاع الحرارة، وحماية من الحمل الزائد."
  },
  {
    "keywords": ["العملاء المستهدفون", "مين هيشتريه", "الزبائن", "الجهاز ده لمين", "مصانع ايه", "معامل ايه", "ينفع في البيت", "ينفع للجامعات", "المنازل تنفع", "مشاريع صغيرة ومتوسطة", "عمال العسل", "شوكولاتة", "مصانع العصائر", "المربى", "الباحثين", "المراكز البحثية", "مين هيستخدمه", "الجمهور المستهدف", "الجهاز موجه لمين", "فئات العملاء", "القطاعات المستهدفة", "ينفع معامل الأغذية", "ينفع مشاريع منزلية", "الجهاز ده مين محتاجه", "تستخدمه المصانع الصغيرة", "بيقدم لمين", "الأسواق المستهدفة", "الجهاز ده هيبيع لمين", "ينفع في الجامعات", "كل اللي شغالين في الأكل"],
    "answer": "مصانع العسل الصغيرة والمتوسطة، معامل الشوكولاتة، مشاريع الأغذية المنزلية، مصانع العصائر والمربى، الجامعات والمراكز البحثية."
  },
  {
    "keywords": ["مصادر الإيرادات", "الجهاز بيجيب فلوس ازاي", "بيع من ايه", "الربح منين", "بيع الجهاز", "الصيانة السنوية", "قطع الغيار", "تحديثات برمجية", "فيه فلوس غير البيع", "الكسب المالي", "الإيرادات من ايه", "نموذج العمل", "بيتكسب ازاي", "فيه خدمات إضافية", "عقود صيانة", "بيع تحديثات", "فيه مصادر دخل", "الفلوس بتجيله منين", "الجهاز بيحقق أرباح ازاي", "البيزنيس موديل", "الإيرادات المتوقعة", "الكسب السنوي", "بيشحن فلوس ايه تاني", "غير سعر الجهاز", "فيه سيرفس", "توفير قطع غيار", "بتوع الصيانة بفلوس", "التطويرات البرمجية بفلوس", "كل المصادر", "الجهاز بيبيع نفسه وخدماته"],
    "answer": "بيع الجهاز، الصيانة السنوية، توفير قطع الغيار، تحديثات برمجية."
  },
  {
    "keywords": ["تكلفة المكونات", "الأجزاء بكام", "القطع بكام", "التكلفة التقريبية", "كام تكلفة الجهاز", "سعر المكونات", "كام الحسبة", "15800 ده ايه", "العدد 15800", "تكلفة التصنيع", "كام المصنعية", "المواد الخام بكام", "كام سعر الخامات", "المكونات كام", "الجهاز كام في المكونات", "تكلفة القطع", "كام الحاجة الواحدة", "سعر التكلفة", "من غير شغل اليد", "كام التكلفة الأولية", "الأسعار التقريبية", "المكونات حسب المستند", "كام الرقم اللي مكتوب", "المكونات الإلكترونية والسخانات بكام", "المجموع 15800", "كام التكلفة الإجمالية للمواد", "حسبة المكونات كام", "كل حاجة في الجهاز بكام", "الرقم اللي في الورق", "التكلفة دي كام"],
    "answer": "15800 وحدة نقدية (حسب المستند)."
  },
  {
    "keywords": ["النظام الشمسي سعره", "الطاقة الشمسية المدمجة بكام", "الألواح والبطارية كام", "تكلفة النظام الشمسي", "25000 وحدة", "النظام الشمسي لوحده بكام", "كام سعر الطاقة الشمسية", "الشمسي كام", "الألواح كام", "البطارية والتوصيلات كام", "تكلفة الطاقة البديلة", "سعر النظام الشمسي الإضافي", "كام بند الطاقة الشمسية", "كلفة الشغل الشمسي", "كام تمن التركيب الشمسي", "25000 دي في ايه", "الشمسي المدمج ده بكام", "النظام الشمسي كام جنيه", "تكلفة الاختيار الشمسي", "الشمسي لوحده كام", "كام سعر المكونات الشمسية", "الجزء الشمسي من التكلفة", "كام التكلفة لو هضيف شمسي", "الشمسي حقه كام", "النظام الشمسي ده غالي", "كام يكلف عشان يشتغل بالشمس", "الطاقة الشمسية فيها كام", "لو أضفت شمسي كام الزيادة", "النظام الشمسي حسب المستند", "سعر الشمسي المدمج مذكور كام"],
    "answer": "25000 وحدة نقدية."
  },
  {
    "keywords": ["مراحل خطة العمل", "خطة العمل خطواتها ايه", "بيتعمل ازاي من البداية", "مراحل التطوير", "ازاي بنصنعه", "التصميم الأولي", "النموذج الأولي", "الاختبارات", "التصنيع النهائي", "التسويق", "الخطة خطوة بخطوة", "ازاي بنبدأ", "من الصفر للنهائي", "ترتيب المراحل", "المراحل الأساسية", "خطوات الشغل", "إزاي بيتم التصنيع", "كل مرحلة بتحصل امتى", "الجهاز بيتطور ازاي", "الـ process", "الخطة التشغيلية", "مراحل الإنتاج", "من الفكرة للسوق", "الجهاز بيتصنع على مراحل", "فيه كام مرحلة", "الخطة كلها بتتكون من ايه", "بيتعمل نموذج أولي", "بيتم اختباره بعدين", "بيتسوق ازاي", "مراحل متسلسلة"],
    "answer": "التصميم الأولي – تطوير النموذج الأولي – الاختبارات – التصنيع النهائي – التسويق."
  },
  {
    "keywords": ["نوع المحرك", "المحرك المستخدم", "بيحرك ازاي", "الموتور بتاع الخلط", "المضخة اللي بتحرك", "12V DC Pump", "المحرك ايه نوعه", "بيخلط ازاي", "التحريك شغال بايه", "الموتور 12 فولت", "نوع موتور التحريك", "الجزء اللي بيحرك السائل", "المضخةللتدوير", "دي سي موتور", "بيخلط بايه", "فيه موتور ايه", "المضخة 12V", "قوة المحرك", "التحريك مستمر", "موتور ايه اللي راكب", "المحرك ده شغال", "نوعه ايه بالظبط", "بياخد كهربا 12V", "المضخة دي بتدور", "المحرك اللي بيعجن", "الموتور بتاع الجهاز", "بيستخدم موتور ازاي", "فيه مضخة للتحريك", "مضخة 20 لتر/دقيقة", "نوع المحرك المستخدم في الخلط"],
    "answer": "Motor لتحريك السائل بشكل مستمر (12V DC Pump)."
  },
  {
    "keywords": ["المنتجات الغذائية", "ينفع لايه", "بيستخدم لمين", "العسل والشوكولاتة", "ينفع للعصائر والمربى", "ينفع للصوصات", "ينفع للبن", "المنتجات اللي تناسبه", "الجهاز ده ليه", "بيطبخ ايه", "بيعالج ايه", "الآكل اللي ينفع", "كل حاجة بتتسخن", "ينفع للعسل بس", "ينفع للشوكولاتة", "ينفع مربى", "ينفع كريما", "ينفع صوصات", "ينفع ألبان", "كل حاجة حساسة للحرارة", "منتجاته", "المواد الغذائية المناسبة", "بيستخدم في تصنيع ايه", "إيه اللي بيتحضر فيه", "المواد الخام الغذائية", "ده ينفع حلويات", "ينفع أكل سائل", "الجهاز ده بيعمل أكل ايه", "الاستخدامات الغذائية", "ينفع في ايه"],
    "answer": "العسل، الشوكولاتة، العصائر، المربى، الكريما، الصوصات، اللبن."
  },
  {
    "keywords": ["الميزة التنافسية", "ليه احسن من غيره", "فيه ايه مميز", "الجهاز ده ليه أختارته", "فيه كام وظيفة في جهاز واحد", "كفاءة طاقة", "تحكم ذكي", "تسجيل بيانات", "تصميم صحي مغلق", "الفرق بينه وبين التقليدي", "الميزات اللي تخليه أحسن", "المنافسة", "ليه هو كويس", "الجهاز ده أيه اللي فيه زيادة", "المنافسين عندهم ايه", "الجهاز ده فريد في ايه", "ليه أدفع فيه", "القيمة المضافة", "المميزات اللي مش موجودة", "كل اللي يميزه", "الميزة الأساسية", "ليه هيكسب السوق", "نقاط قوته", "التفوق على الأجهزة التانية", "إيه اللي يخليه الأفضل", "فيه ايه غير موجود", "أسباب اختياره", "المواصفات الفريدة", "الـ Unique Selling Point", "ليه هو smart"],
    "answer": "تعدد الوظائف في جهاز واحد، كفاءة طاقة، تحكم ذكي، تسجيل بيانات، تصميم صحي مغلق."
  },
  {
    "keywords": ["أبعاد الهيكل", "الجهاز حجمه كام", "طوله وعرضه", "70×50×100", "الأبعاد كام", "الهيكل الخارجي مقاسه", "الفرم حجمه", "كام سم الطول", "كام سم العرض", "كام الارتفاع", "الجهاز واقف قد ايه", "حجمه كبير ولا صغير", "الأبعاد بالمتر", "0.7 * 0.5 * 1 متر", "الطول كام", "العرض كام", "الجهاز شغال حيز كام", "بياخد مساحة كام", "مقاسات الفريم", "الهيكل مقاساته", "الجهاز كام في كام", "الأبعاد الخارجية", "طول الجهاز", "عرض الجهاز", "ارتفاع الجهاز", "كام سنتي", "الجهاز محتاج مكان قد ايه", "كام × كام", "الأبعاد الكلية للهيكل", "الجهاز طوله كام"],
    "answer": "70 × 50 × 100 سم."
  },
  {
    "keywords": ["قطر الخزان", "الخزان قطره كام", "العرض الداخلي", "قطر الحلة", "35 سم", "كام سم القطر", "الخزان واسع قد ايه", "قطر التسخين", "عرض الخزان من جوه", "القطر كام سنتي", "الحلة دايرتها كام", "الخزان عرضه كام", "قطر الوعاء", "القطر الداخلي", "كام سانتي القطر", "القطر 35", "الخزان عرضه 35 سم", "قطر الحلة الداخلية", "الخزان كام عرضه", "سعة الحلة ليها علاقة بالقطر", "القطر 35 سم يعني حجمه كام", "قطر الـ tank", "الخزان ايه عرضه", "قطر المعالجة", "كم سانتي قطر الخزان", "الحلة عرضها كام", "قطر 35 سم بالعرض", "عرض الوعاء", "القطر الداخلي كام", "35 سم ده القطر"],
    "answer": "35 سم."
  },
  {
    "keywords": ["قدرة الهيتر", "الهيتر كام واط", "قوة التسخين", "1.5 كيلو واط", "1500 واط", "السخان كام", "قدرة عنصر التسخين", "الهيتر قوته كام", "بيستهلك كام كهربا", "التسخين كام واط", "السخان الكهربائي كام كيلو", "قدرة الـ heater", "1.5 kW", "كيلو واط كام واط", "قوة السخان", "السخان ده بيسحب كام", "استطاعة الهيتر", "كام واط السخان", "الجهاز بيسخن بكام قدرة", "قدرة التسخين كام", "واطية الهيتر", "بيطلع حرارة قد ايه", "السخان قوته", "1500 واط تعني ايه", "كام كيلو واط الهيتر", "قدرة الهيتر كام كيلو", "الـ Wattage بتاع التسخين", "السخان قوته كام واط", "عشان يسخن بقوة كام", "الهيتر 1.5 كيلو"],
    "answer": "1.5 كيلو واط (1500 واط)."
  },
  {
    "keywords": ["معامل الشوكولاتة", "ينفع في مصانع الشوكولاتة", "للشوكولاتة ينفع", "اذابة الشوكولاتة موجودة", "بيحمي الشوكولاتة من الاحتراق", "الجهاز ينفع للشوكولا", "معامل تصنيع الشوكولاتة تنفع", "بيضبط حرارة الشوكولاتة", "مصانع الشوكولا تشتريه", "ينفع لشغل الشوكولاتة", "الشوكولاتة بتتذاوب فيه", "الماكينه دي بتاعت شوكولاتة", "فيه وظيفة اذابة الشوكولاتة", "الحرارة الدقيقة للشوكولاتة", "الجهاز ده كويس للشوكولاتة", "مصانع الشوكولا تستخدمه", "ينفع في معمل شوكولاتة", "بيحافظ على الشوكولاتة من التكتل", "هل ينفع لصناعة الشوكولاتة", "ممكن استخدمه في الشوكولاتة", "الجهاز بيضبط حرارة الشوكولاتة", "ينفع للشوكولاتة ولا لأ", "الشوكولاتة بتبوظ فيه ولا لأ", "مصانع الشوكولاته الصغيرة تنفع", "ميزة اذابة الشوكولاتة موجودة", "بيستخدم في مصانع الشوكولاتة", "هل هو مناسب للشوكولا", "فيه خاصية للشوكولاتة", "بيحمي الشوكولاتة من الحرق", "ينفع للشوكولاتة البلجيكي"],
    "answer": "نعم، لأنه يحتوي على وظيفة \"إذابة الشوكولاتة\" وضبط حرارة دقيق يمنع الاحتراق."
  },
  {
    "keywords": ["وظيفة شاشة LCD", "الشاشة بتعمل ايه", "بيبان عليها ايه", "بتعرض البيانات", "بتبرمج عليه", "بيظهر الحرارة", "بيظهر الوقت", "مراقبة التشغيل", "الشاشة فايدتها", "بيتحكم من الشاشة", "الشاشة بتظهر ايه", "بتقرأ منها ايه", "بتضبط الجهاز", "بيتشغل من الشاشة", "الـ LCD ايه وظيفته", "بتعرض درجة الحرارة", "بتضبط الاعدادات", "بتوريك كل حاجة", "الشاشة الرقمية بتعمل ايه", "بيظهر الخطأ عليها", "بيظهر البرمجة", "بتستخدم في ايه", "مشاهدة البيانات", "وظيفة شاشة العرض", "بيبان عليها الوقت والحرارة", "بتستخدم في المراقبة", "بيضبط منها الكل", "الشاشة بتاعت التحكم", "الـ display ايه شغله", "شاشة LCD دورها ايه"],
    "answer": "عرض البيانات وبرمجة الإعدادات ومراقبة درجة الحرارة والوقت."
  },
  {
    "keywords": ["مادة الأنابيب", "الأنابيب من ايه", "الخراطيم من ايه", "سيليكون درجة غذائية", "Food Grade Silicon", "مادة الأنابيب الداخلة والخارجة", "المواسير مصنوعة من ايه", "مادة آمنة للاكل", "السيليكون ده كويس", "الأنابيب بتاعة الدخول والخروج", "الخراطيم الشفافة دي ايه", "مادة الـ hoses", "لمادة الملامسة للغذاء", "سيليكون طبي", "مادة مرنة للأنابيب", "المواسير من السيليكون", "مادة الأنابيب الداخلية", "الخامات في الوصلات", "الأنابيب الغذائية", "الخراطيم بتتلامس مع الأكل", "السيليكون ده معتمد", "مادة الأنابيب مقاومة للحرارة", "سيليكون درجة أولى", "مادة الـ piping", "الأنابيب مصنوعة من مادة ايه", "هل السيليكون آمن", "خامة Food grade", "الخراطيم السيليكون", "المواسير المرنة", "أنابيب الدخول من ايه"],
    "answer": "سيليكون درجة غذائية (Food Grade Silicon)."
  },
  {
    "keywords": ["عدد أفراد الفريق", "الفريق كام واحد", "كم عضو", "24 عضو", "الطلبة المشاركين", "عدد المشروع كام شخص", "كام فرد في SOLTECH", "المجموعة فيها كام", "الفريق كام مهندس", "الأسماء كام واحدة", "العدد الإجمالي", "كام طالب في المشروع", "عدد الأعضاء", "الفريق مكون من كام", "بيشتغل عليه كام شخص", "كام واحد اشتغل فيه", "الفريق كام واحد من الاسماء", "الmembers كام", "العدد كام حسب الملف", "المجموعة كام عضو", "عدد الأفراد المذكورين", "كام طالب مشارك", "العدد في SOLTECH", "الفريق كام فرد", "عدد المشاركين", "24 شخص", "الفرقة كام واحد", "المشروع كام واحد اشتغل", "العدد الكلي للأعضاء", "الفريق ده كام مهندس", "جماعة المشروع كام فرد"],
    "answer": "24 عضوًا (من الأسماء المذكورة في ملف SOLTECH)."
  },
  {
    "keywords": ["اسم المشرفين", "المشرفين مين", "الدكاترة المشرفين", "Dr. Arig Elkholly", "Dr. Tamer Elzeny", "المشرفين على المشروع", "المسؤولين العلميين", "الأسماء المشرفة", "مين اللي مشرف", "الدكاترة اللي معاهم", "المشرفين الأساسيين", "المدراء المشرفين", "أسماء المشرفين", "المشرفين من الكلية", "مين اللي متابع", "Dr Arig مين", "Dr Tamer مين", "الأساتذة المشرفين", "المشرفين إتنين", "أسماء الدكاترة", "مين المشرف على الفريق", "المشرفين المذكورين", "الدكتور المسؤول", "رأي المشرفين", "المشرفين الرئيسيين", "اللي بينصحوا في المشروع", "الدكاترة اللي متابعين", "أستاذ المشروع", "المشرفين العلميين", "المشرفين ايه أسمائهم"],
    "answer": "Dr. Arig Elkholly و Dr. Tamer Elzeny."
  },
  {
    "keywords": ["نظام التبريد", "بيبرد ازاي", "التبريد شغال بايه", "Water Jacket", "تبريد مائي", "فيه تبريد مائي", "بيحافظ على برودته ازاي", "نظام التبريد المستخدم", "بيخفض الحرارة ازاي", "طبقة الميه حوالين الخزان", "التبريد بالمايه", "الـ cooling system", "ازاي يبرد المنتج", "المياه اللي بتلف حوالين", "نظام التبريد بالغلاف المائي", "التبريد الخارجي", "بيبرد بسرعة ازاي", "الجهاز مزود بنظام تبريد", "المياه المبردة", "التبريد بالمايه جوا السترة", "بيخلي الحرارة تنزل", "كيفية التبريد", "فيه مبرد مائي", "الـ water jacket شغال", "التبريد ده كفاءته", "نظام التبريد عامل ازاي", "بيستخدم مية عادية ولا مياه مبردة", "التبريد موجود", "ازاي يخفض درجة الحرارة", "نظام التبريد المائي ايه فكرته"],
    "answer": "Water Jacket + تبريد مائي."
  },
  {
    "keywords": ["الأبعاد الكلية", "العرض × العمق", "90 × 65 سم", "الجهاز كام عرض", "كام عمق", "الأبعاد النهائية", "المقاسات الشاملة", "الجهاز من بره عرضه كام", "الجهاز من بره عمقه كام", "الـ Overall Width and Depth", "مقاس الجهاز مع العجل", "طول الجهاز كام", "عرضه كام", "أبعاد القاعدة", "الجهاز كامل كام في كام", "العرض 90 سم", "العمق 65 سم", "مقاسات الجهاز الإجمالية", "البيت المربع بتاع الجهاز", "مساحة الأرضية اللي يشغلها", "الـ Footprint كام", "كام سنتي عرض", "كام سنتي عمق", "الجهاز عريض قد ايه", "الجهاز طويل قد ايه", "العرض × العمق بالأبعاد الكلية", "من الناحية الأمامية كام", "من الجنب كام", "المواصفات الهندسية للأبعاد", "الـ Dimensions الكلية"],
    "answer": "90 × 65 سم."
  },
  {
    "keywords": ["قاعدة العجلات", "العجلات شغالة ازاي", "القاعدة متحركة", "وزن القاعدة", "سعة القاعدة", "قاعدة من الصلب", "بعجلات", "تسهيل الحركة", "الصيانة بتتسهل", "القاعدة بتتحرك", "مصنوعة من ايه القاعدة", "العجلات كام واحدة", "الوزن اللي تتحمله القاعدة", "الجهاز بيتحرك بسهولة", "القاعدة تتحرك ليه", "قاعدة متينة", "عجلات تسهل النقل", "القاعدة الصلبة", "القاعدة دي فايدتها", "الجزء السفلي المتحرك", "القاعدة بتتزن", "الوزن اللي تحمله", "القاعدة مصنوعة من الصلب", "العجلات بتخلي الجهاز يتحرك", "الجهاز سهل النقل", "القاعدة متكاملة", "قاعدة الجهاز", "الجزء تحت العجل", "القاعدة كام وزنها", "سعة القاعدة في الحركة"],
    "answer": "قاعدة متحركة من الصلب بعجلات لتسهيل الحركة والصيانة."
  },
  {
    "keywords": ["نوع البطارية", "البطارية كام فولت", "بطارية 12 فولت", "البطارية المستخدمة", "فولتية البطارية", "بطارية ايه نوعها", "كم فولت البطارية", "الجهاز بيشتغل على بطارية 12V", "بطارية 12 فولت كافية", "نوع البطارية المستعملة", "بطارية الجهاز", "الطاقة التخزينية للبطارية", "البطارية دي ايه نوعها", "بطارية كم فولت", "الجهد الكهربي للبطارية", "بطارية الـ DC", "بالبطارية 12 فولت", "البطارية الشمسية", "الكهرباء المخزنة", "البطارية 12V DC", "نوع البطارية المناسب", "بطارية بكم فولت", "البطارية المستعملة في الطاقة البديلة", "بطارية الجهاز القابلة للشحن", "الجهد المقنن للبطارية", "بطارية الـ 12 فولت دي", "البطارية الموجودة", "بطارية ايه جهدها", "نوع الفولتية", "البطارية كام فولت جهدها"],
    "answer": "بطارية 12 فولت."
  },
  {
    "keywords": ["المشاريع المنزلية", "ينفع في البيت", "للاستخدام المنزلي", "الجهاز ينفع لمشروع بيتي", "ينفع في المنزل", "المشاريع الغذاية المنزلية تنفع", "الجهاز صغير للبيت", "للبيوت ينفع", "المنزليين يستخدموه", "أصحاب المشاريع المنزلية", "ينفع في مطبخ كبير", "الحجم مناسب للبيت", "الجهاز ده يتحط في البيت", "ينفع للأكل البيتي", "الاستخدام المنزلي", "بيستخدم في بيوت", "الجهاز سهل للاستخدام المنزلي", "ينفع لمشروع صغير في البيت", "نعم مناسب", "الجهاز للشغل المنزلي", "لأصحاب البيزنس من البيت", "ينفع لصناعات منزلية", "مشروع عسل في البيت ينفع", "الجهاز ده للاستعمال المنزلي", "مناسب لأعمال الأكل المنزلية", "لسهولة استخدامه في البيت", "ينفع للمنزل ولا لأ", "جهاز منزلي ذكي", "الجهاز للشغل البيتي", "المشاريع الصغيرة في البيت تنفع"],
    "answer": "نعم، لأنه مناسب لأصحاب المشاريع الغذائية المنزلية."
  },
  {
    "keywords": ["قنوات التسويق", "بيتسوق ازاي", "بيبيعوا فين", "البيع المباشر", "السوشيال ميديا", "معارض الصناعة", "الموزعين", "طرق التسويق", "بيوصل للعملاء ازاي", "التوزيع", "القنوات المعتمدة", "بيع اونلاين", "فيه معارض", "بيتسوق عن طريق ايه", "التسويق هيكون فين", "مين هيتولى البيع", "الجهاز هينزل السوق ازاي", "التسويق هينجح ازاي", "الترويج", "قنوات البيع", "الوسائل التسويقية", "بيع عن طريق وكلاء", "السوشيال ميديا هتساعد", "معارض صناعية", "البيع المباشر للعميل", "الموزعين في المحافظات", "التسويق الإلكتروني", "شركاء التوزيع", "القنوات اللي هتوصل", "بيوصل للعميل النهائي ازاي"],
    "answer": "البيع المباشر، السوشيال ميديا، معارض الصناعة، الموزعين."
  },
  {
    "keywords": ["التصميم المغلق", "Closed System", "النظام المغلق ده ايه", "المنتج بيتعرض للهواء ولا لأ", "التلوث بيقل ازاي", "فكرة التصميم المغلق", "المعالجة في الهواء الطلق", "المنتج مغلق عن الخارج", "ايه هو النظام المغلق", "يعني ايه Closed System", "التصميم ده مفهومه", "ازاي بيحمي المنتج", "بيتسبب في تقليل التلوث", "الجهاز مغلق ليه", "المنتج ملامس للهواء ولا", "الغلق ده فايدته", "النظام المغلق ايه مميزاته", "مفهوم Closed System في الأغذية", "ازاي بيمنع التلوث", "التصميم الصحي المغلق", "ليه النظام المغلق احسن", "المنتج بيتحرك في نظام مغلق", "مش بيخرج للهواء", "النظام المغلق لسلامة الغذاء", "فكرة عدم التعرض للهواء", "التصميم ده ايه استخدامه", "التلوث الخارجي بيتجنب ازاي", "ميزات النظام المغلق", "يعني ايه التصميم مش مكشوف", "closed system ازاي بيشتغل"],
    "answer": "نظام لا يتعرض فيه المنتج للهواء الخارجي أثناء المعالجة، مما يقلل التلوث."
  },
  {
    "keywords": ["الهدف الاساسي", "المشروع ليه اتعمل", "الهدف الرئيسي", "الغرض من المشروع", "إيه الهدف من الجهاز", "الهدف الأساسي ايه", "ليه عملناه", "الجهاز ده عشان ايه", "تطوير جهاز ذكي", "تسخين الأغذية الحساسة بدقة", "الحفاظ على الجودة", "منع الاحتراق", "المشروع بيهدف ليه", "الهدف الاستراتيجي", "الغرض من الاختراع", "المشروع ده عشان يحل ايه", "الهدف النهائي", "المشروع عامل نفسه ليه", "الغرض الأساسي", "إيه رؤية المشروع", "الهدف كما هو مذكور", "عشان الأغذية تتعالج بدقة", "منع تلف الأغذية", "الحفاظ على القيمة الغذائية", "الهدف في سطر", "اللي خلقنا نعمل المشروع ده", "الهدف اللي بنبنى عليه", "الرغبة الأساسية من الجهاز", "علشان الأغذية الحساسة", "الهدف الرئيسي في المستندات"],
    "answer": "تطوير جهاز ذكي لتسخين ومعالجة الأغذية الحساسة بدقة مع الحفاظ على الجودة ومنع الاحتراق."
  }

];

// إضافة رسالة
function addMessage(text, type) {
  if (!chatBox) return;

  const msg = document.createElement("div");
  msg.className = "msg " + type;
  msg.innerText = text;

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// 🧠 ذكاء الرد (محسّن)
function getBestResponse(text) {
  const cleanText = text
    .toLowerCase()
    .replace(/[؟?!.,]/g, "")
    .trim();

  let bestMatch = null;
  let maxMatches = 0;

  responses.forEach(item => {
    let matchCount = 0;

    item.keywords.forEach(word => {
      if (cleanText.includes(word)) {
        matchCount++;
      }
    });

    if (matchCount > maxMatches) {
      maxMatches = matchCount;
      bestMatch = item.answer;
    }
  });

  return bestMatch || "ممكن توضح السؤال أكتر؟ 🤔";
}

// إرسال رسالة
function sendMessage() {
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  if (typing) typing.style.display = "flex";

  setTimeout(() => {
    if (typing) typing.style.display = "none";

    const reply = getBestResponse(text);

    addMessage(reply, "ai");
  }, 500);
}

// events (مع حماية)
if (sendBtn) {
  sendBtn.onclick = sendMessage;
}

if (input) {
  input.addEventListener("keypress", e => {
    if (e.key === "Enter") sendMessage();
  });
}

// ✅🔥 حل مشكلة أزرار الاختصارات
window.addEventListener("DOMContentLoaded", () => {
const buttons = document.querySelectorAll(".q-btn");

buttons.forEach(btn => {
btn.addEventListener("click", () => {
if (!input) return;

input.value = btn.innerText;
sendMessage();
});
});
});