export const CLINIC_INFO = {
  nameAr: "عيادات لوميير ديرما",
  nameEn: "LUMIÈRE DERMA",
  tagline: "نخبة طب الجلدية والتجميل والليزر في جدة",
  mohLicense: "ترخيص وزارة الصحة رقم: 4010298471",
  sfdaNote: "جميع الأجهزة والحقن معتمدة من هيئة الغذاء والدواء السعودية (SFDA) والأمريكية (FDA)",
  phoneDisplay: "9200 33845",
  phoneTel: "+966920033845",
  mobileDisplay: "055 892 4410",
  whatsappNumber: "966558924410",
  googleRating: "4.9",
  googleReviewsCount: "+1,480",
  googleMapsUrl: "https://maps.google.com/?q=21.5762,39.1505",
  address: {
    city: "جدة",
    district: "حي الروضة",
    street: "تقاطع طريق الملك عبد العزيز مع شارع صاري - برج لوميير الطبي (الطابق الثالث والرابع)",
    landmark: "مواقف خاصة ومجانية مع خدمة صف السيارات (Valet Parking) مجاناً للمراجعات",
  },
  workingHours: [
    {
      days: "السبت – الخميس (الفترة الصباحية)",
      hours: "9:30 صباحاً – 1:30 ظهراً",
      badge: "عيادات الصباح",
    },
    {
      days: "السبت – الخميس (الفترة المسائية)",
      hours: "4:00 عصراً – 10:30 مساءً",
      badge: "الفترة المسائية",
    },
    {
      days: "يوم الجمعة",
      hours: "4:30 عصراً – 9:30 مساءً",
      badge: "دوام مسائي خاص",
    },
  ],
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    "مرحباً عيادات لوميير ديرما جدة ✨، أرغب في حجز استشارة تجميلية والاستفسار عن المواعيد المتاحة.";
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`;
}

export const NAV_LINKS = [
  { label: "الخدمات", href: "#services" },
  { label: "التقنيات المعتمدة", href: "#technologies" },
  { label: "قبل وبعد", href: "#before-after" },
  { label: "أطباؤنا", href: "#doctors" },
  { label: "آراء المراجعين", href: "#reviews" },
  { label: "الموقع والمواعيد", href: "#location" },
];

export interface TechDevice {
  id: string;
  nameEn: string;
  nameAr: string;
  origin: string;
  approvalBadge: string;
  category: string;
  description: string;
  highlights: string[];
}

export const ACCREDITED_DEVICES: TechDevice[] = [
  {
    id: "morpheus8",
    nameEn: "Morpheus8 PRO",
    nameAr: "مورفيوس 8 لشد ونحت البشرة",
    origin: "InMode — الولايات المتحدة",
    approvalBadge: "معتمد FDA & SFDA",
    category: "الشد غير الجراحي وتحفيز الكولاجين",
    description:
      "التقنية الذهبية الأولى عالمياً التي تدمج الترددات الحرارية المجزأة (RF) مع الميكرونيدلينغ المطلي بالذهب لشد الوجه والرقبة وعلاج المسام والندبات بدقة فائقة.",
    highlights: ["شد اللغلوغ وتحديد الفك", "بدون جراحة أو فترة نقاهة طويلة", "نتائج تدوم حتى 18 شهراً"],
  },
  {
    id: "candela",
    nameEn: "Candela GentleLase Pro-U",
    nameAr: "كانديلا جنتل ليز برو البارد",
    origin: "Candela Medical — أمريكا",
    approvalBadge: "المعيار الذهبي عالمياً",
    category: "إزالة الشعر بالليزر البارد",
    description:
      "أحدث إصدار من جهاز ألكسندرايت الأمريكي المزود بنظام التبريد الديناميكي (DCD) لحماية البشرة وإزالة الشعر بنعومة فائقة وبدون أي شعور بالحرارة.",
    highlights: ["تبريد ذكي مضاعف", "آمن وفعّال للبشرة الحنطية والفاتحة", "نعومة فورية وتقليل المسام"],
  },
  {
    id: "hydrafacial",
    nameEn: "Hydrafacial MD® Syndeo",
    nameAr: "هيدرافيشل MD الجيل الجديد",
    origin: "Hydrafacial — كاليفورنيا",
    approvalBadge: "براءة اختراع Vortex-Fusion",
    category: "التنظيف الملكي والنضارة الفورية",
    description:
      "الجهاز الأصلي المعتمد لتنظيف المسام بعمق، إزالة الرؤوس السوداء، وتغذية البشرة بمضادات الأكسدة وحمض الهيالورونيك والبيبتيدات في جلسة واحدة.",
    highlights: ["إشراقة فورية قبل المناسبات", "سيرومات أصلية مختومة", "مناسب للبشرة الحساسة"],
  },
  {
    id: "fotona4d",
    nameEn: "Fotona 4D® TimeWalker",
    nameAr: "فوتونا 4D للشد الرباعي",
    origin: "Fotona — الاتحاد الأوروبي",
    approvalBadge: "تقنية الليزر الرباعي",
    category: "تجديد شباب البشرة والشد الداخلي",
    description:
      "منظومة ليزر رباعية الأبعاد تعمل من داخل الفم وخارجه لشد الطيات الأنفية، توريد الشفاه طبيعياً، ورفع الوجنتين وتحفيز الكولاجين بأربع مراحل متكاملة.",
    highlights: ["شد رباعي بدون إبر", "توريد طبيعي للشفاه", "تحفيز فوري لطبقات الأدمة"],
  },
];

export interface ServiceItem {
  id: string;
  category: "injectables" | "laser" | "lifting" | "facial";
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  features: string[];
  priceStart: string;
  priceUnit: string;
  duration: string;
  image: string;
  whatsappText: string;
}

export const FEATURED_SERVICES: ServiceItem[] = [
  {
    id: "filler-botox-glow",
    category: "injectables",
    title: "نضارة البشرة وإبر الفيلر والبوتوكس",
    subtitle: "تحديد الملامح الطبيعية وإبر النضارة الملكية",
    badge: "الأكثر طلباً في جدة",
    description:
      "حقن تجميلية دقيقة بأجود المواد السويسرية والأمريكية المعتمدة (Juvederm, Restylane, Profhilo) لمنحكِ امتلاءً طبيعياً غير مبالغ فيه وإشراقة مخملية.",
    features: [
      "فيلر الشفاه الروسي والفرنسي الطبيعي وتحديد الكونتور",
      "إبر البروفايلو، العنبر، الجوري، والسلمون (DNA) للنضارة الفورية",
      "بوتوكس رفع الحواجب وعلاج التجاعيد التعبيرية والابتسامة اللثوية",
    ],
    priceStart: "650",
    priceUnit: "ر.س",
    duration: "30 - 45 دقيقة",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85",
    whatsappText:
      "مرحباً عيادات لوميير ديرما، أرغب في حجز موعد لخدمة (نضارة البشرة وإبر الفيلر والبوتوكس) والاستفسار عن العروض الحالية.",
  },
  {
    id: "cold-laser-hair",
    category: "laser",
    title: "إزالة الشعر بأحدث أجهزة الليزر البارد",
    subtitle: "Candela GentleLase Pro & DEKA Again",
    badge: "تبريد مضاعف بدون ألم",
    description:
      "جلسات ليزر بارد بخصوصية تامة على يد ممارسات صحيات مرخصات، مع استخدام عدسات شخصية معقمة لكل مراجعة لضمان أعلى معايير الأمان والنعومة.",
    features: [
      "باقات الجسم الكامل مع الرتوش المجانية",
      "نظام تبريد هوائي وغازي مزدوج يمنع التهيج والتصبغ",
      "أجهزة مخصصة للشعر الوبري والسميك لجميع درجات البشرة",
    ],
    priceStart: "299",
    priceUnit: "ر.س",
    duration: "45 - 60 دقيقة",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=85",
    whatsappText:
      "مرحباً عيادات لوميير ديرما، أرغب في حجز موعد لخدمة (إزالة الشعر بأحدث أجهزة الليزر البارد) والاستفسار عن باقات الجسم الكامل.",
  },
  {
    id: "skin-lifting-morpheus",
    category: "lifting",
    title: "شد وتجديد البشرة بتقنيات الموجات والميكرونيدلينغ",
    subtitle: "Morpheus8 • Fotona 4D • Ultraformer MPT",
    badge: "بديل الجراحة الآمن",
    description:
      "بروتوكولات علاجية متطورة لشد ترهلات الوجه والرقبة، نحت خط الفك (Jawline)، وعلاج المسام الواسعة وآثار الندبات بدمج الميكرونيدلينغ الذهبي والإكسوزوم.",
    features: [
      "مورفيوس 8 مع بلازما الغنية بالصفائح أو الإكسوزوم النقي",
      "شد الرقبة واللغلوغ بتقنية الألترافورمر MPT بدون ألم",
      "فوتونا 4D للشد الرباعي وتجديد الكولاجين العميق",
    ],
    priceStart: "950",
    priceUnit: "ر.س",
    duration: "45 - 60 دقيقة",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1000&q=85",
    whatsappText:
      "مرحباً عيادات لوميير ديرما، أرغب في حجز استشارة لخدمة (شد وتجديد البشرة بتقنيات الموجات والميكرونيدلينغ - مورفيوس 8 / فوتونا).",
  },
  {
    id: "royal-hydrafacial",
    category: "facial",
    title: "تنظيف البشرة العميق والعلاجات الملكية",
    subtitle: "Hydrafacial MD® • تقشير بارد • ماسك الذهب 24K",
    badge: "إشراقة المناسبات",
    description:
      "دلّلي بشرتكِ بتجربة سبا طبي فاخر يجمع بين التنظيف الهيدروجيني العميق، الأكسجين النقي، والماسكات العلاجية الملكية لاستعادة صفاء البشرة وتوهجها الفوري.",
    features: [
      "جلسة هيدرافيشل MD الأصلية بـ 12 خطوة متكاملة",
      "التقشير البارد (Cosmelan / Dermamelan) لتوحيد اللون",
      "توريد الشفاه بالليزر وتفتيح الهالات السوداء حول العين",
    ],
    priceStart: "380",
    priceUnit: "ر.س",
    duration: "50 دقيقة",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85",
    whatsappText:
      "مرحباً عيادات لوميير ديرما، أرغب في حجز موعد لخدمة (تنظيف البشرة العميق والعلاجات الملكية - هيدرافيشل MD).",
  },
];

export interface SeasonalPackage {
  id: string;
  name: string;
  tag: string;
  includes: string[];
  originalPrice: string;
  offerPrice: string;
  whatsappText: string;
}

export const SEASONAL_PACKAGES: SeasonalPackage[] = [
  {
    id: "bridal-royal-glow",
    name: "باقة الإشراقة الملكية المتكاملة",
    tag: "وفّري 35% • لفترة محدودة",
    includes: [
      "جلسة هيدرافيشل MD الملكي بالذهب",
      "إبرة نضارة سويسرية (Profhilo أو Jalupro)",
      "جلسة ليزر كربوني لتوحيد اللون وإغلاق المسام",
      "كشف واستشارة مجانية مع استشارية الجلدية",
    ],
    originalPrice: "2,450",
    offerPrice: "1,590",
    whatsappText:
      "مرحباً عيادات لوميير ديرما ✨، أرغب بحجز (باقة الإشراقة الملكية المتكاملة - بسعر 1,590 ر.س).",
  },
  {
    id: "laser-vip-pack",
    name: "باقة الليزر البارد VIP (3 جلسات)",
    tag: "الأكثر مبيعاً في جدة",
    includes: [
      "3 جلسات ليزر جسم كامل بجهاز Candela Pro",
      "3 جلسات رتوش مجانية شاملة",
      "جلسة تشقير حواجب ووجه بالليزر مجاناً",
      "عدسة شخصية خاصة + كريم عناية طبي بعد الجلسة",
    ],
    originalPrice: "1,650",
    offerPrice: "1,090",
    whatsappText:
      "مرحباً عيادات لوميير ديرما ✨، أرغب بحجز (باقة الليزر البارد VIP - 3 جلسات بسعر 1,090 ر.س).",
  },
  {
    id: "contour-youth-pack",
    name: "باقة الكونتور وشد البشرة غير الجراحي",
    tag: "نتائج فورية وطبيعية",
    includes: [
      "1 مل فيلر سويسري/فرنسي (شفاه أو وجنتين)",
      "بوتوكس كامل للجبين وحول العين (الأمريكي الأصلي)",
      "جلسة مورفيوس 8 أو فوتونا 4D لشد وتحديد الفك",
      "متابعة مجانية بعد أسبوعين مع الطبيب المعالج",
    ],
    originalPrice: "3,400",
    offerPrice: "2,290",
    whatsappText:
      "مرحباً عيادات لوميير ديرما ✨، أرغب بحجز (باقة الكونتور وشد البشرة غير الجراحي - بسعر 2,290 ر.س).",
  },
];

export interface BeforeAfterCase {
  id: string;
  title: string;
  subtitle: string;
  treatment: string;
  sessions: string;
  doctor: string;
  duration: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-glow-lifting",
    title: "نضارة البروفايلو الملكية وشد المسام بمورفيوس 8",
    subtitle: "تحسن ملمس البشرة، إخفاء التصبغات السطحية، واستعادة الامتلاء الطبيعي",
    treatment: "Morpheus8 + إبرة Profhilo السويسرية",
    sessions: "جلستان (بفاصل 4 أسابيع)",
    doctor: "د. لمى بنت عبد الرحمن القحطاني",
    duration: "النتيجة بعد 6 أسابيع",
    description:
      "مراجعة في العقد الثالث كانت تعاني من بهتان البشرة واتساع المسام مع خطوط دقيقة؛ تم تطبيق بروتوكول الدمج بين الميكرونيدلينغ الذهبي وحقن الهيالورونيك النقي.",
    // High-res close-up skin portrait images
    beforeImage:
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1100&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1100&q=85",
    beforeLabel: "قبل الجلسة — بهتان ومسام واضحة",
    afterLabel: "بعد الجلسة — صفاء زجاجي وشد طبيعي",
  },
  {
    id: "case-contour-filler",
    title: "تحديد الفك (Jawline) وتوريد وامتلاء الشفاه الطبيعي",
    subtitle: "تناسق مثالي للملامح بالتقنية الفرنسية دون تغيير الهوية الطبيعية للوجه",
    treatment: "فيلر Juvederm + تقنية Fotona LipLase",
    sessions: "جلسة واحدة (45 دقيقة)",
    doctor: "د. طارق بن فيصل السليمان",
    duration: "نتيجة فورية بعد الجلسة",
    description:
      "إعادة رسم إطار الوجه السفلي وتوريد الشفاه مع امتلاء ناعم ومتوازن يحافظ على الحركة الطبيعية للابتسامة.",
    beforeImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1100&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=85",
    beforeLabel: "قبل الإجراء — فقدان طفيف للحجم",
    afterLabel: "بعد الإجراء — تحديد متناغم وإشراقة",
  },
  {
    id: "case-pigmentation-hydrafacial",
    title: "علاج التصبغات وتوحيد لون البشرة بالليزر والهيدرافيشل",
    subtitle: "تصفية البشرة من آثار الشمس وعلاج الكلف السطحي بآمان تام",
    treatment: "Hydrafacial MD + ليزر التفتيح البارد",
    sessions: "3 جلسات متتالية",
    doctor: "د. سارة بنت محمد العتيبي",
    duration: "النتيجة بعد 4 أسابيع",
    description:
      "برنامج متكامل لتنقية المسام وعلاج التصبغات الناتجة عن أشعة الشمس في أجواء جدة الساحلية مع ترطيب عميق لطبقات الأدمة.",
    beforeImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1100&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1100&q=85",
    beforeLabel: "قبل البرنامج — عدم تجانس اللون",
    afterLabel: "بعد البرنامج — توحيد لون ونضارة مخملية",
  },
];

export interface DoctorProfile {
  id: string;
  name: string;
  title: string;
  scfhsNumber: string;
  scfhsRank: string;
  experienceYears: string;
  fellowship: string;
  specialties: string[];
  image: string;
  whatsappText: string;
}

export const DOCTORS_LIST: DoctorProfile[] = [
  {
    id: "dr-lama",
    name: "د. لمى بنت عبد الرحمن القحطاني",
    title: "استشارية طب وجراحة الجلدية والتجميل والليزر",
    scfhsNumber: "ترخيص الهيئة السعودية (SCFHS): 18-J-04921",
    scfhsRank: "مصنفة بدرجة استشاري أول — SCFHS",
    experienceYears: "+14 سنة خبرة",
    fellowship: "البورد السعودي والزمالة الكندية في الحقن التجميلي والليزر",
    specialties: ["الحقن التجميلي المتقدم", "بروتوكولات النضارة والشد", "علاج الندبات والتصبغات"],
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=85",
    whatsappText:
      "مرحباً عيادات لوميير ديرما، أرغب في حجز موعد استشارة مع الدكتورة لمى القحطاني.",
  },
  {
    id: "dr-tariq",
    name: "د. طارق بن فيصل السليمان",
    title: "استشاري التجميل غير الجراحي وتناسق الملامح",
    scfhsNumber: "ترخيص الهيئة السعودية (SCFHS): 16-J-08314",
    scfhsRank: "مصنف بدرجة استشاري — SCFHS",
    experienceYears: "+16 سنة خبرة",
    fellowship: "زمالة الأكاديمية الأوروبية لطب التجميل ومكافحة الشيخوخة (باريس)",
    specialties: ["نحت وتحديد الفك (تكساس)", "الشد بالخيوط الذهبية ومورفيوس 8", "فيلر الشفاه والوجنتين"],
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=85",
    whatsappText:
      "مرحباً عيادات لوميير ديرما، أرغب في حجز موعد استشارة مع الدكتور طارق السليمان.",
  },
  {
    id: "dr-sara",
    name: "د. سارة بنت محمد العتيبي",
    title: "نائب أول جلدية وتجميل وعلاجات الشعر التجديدية",
    scfhsNumber: "ترخيص الهيئة السعودية (SCFHS): 20-J-11290",
    scfhsRank: "مصنفة ومعتمدة — SCFHS",
    experienceYears: "+10 سنوات خبرة",
    fellowship: "عضو الجمعية الأمريكية لليزر الجلدي والطب التجديدي (ASLMS)",
    specialties: ["علاجات الشعر بالإكسوزوم والريجينيرا", "فوتونا 4D وليزر الفراكشنال", "إبر النضارة السويسرية"],
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85",
    whatsappText:
      "مرحباً عيادات لوميير ديرما، أرغب في حجز موعد استشارة مع الدكتورة سارة العتيبي.",
  },
];

export interface TestimonialReview {
  id: string;
  author: string;
  neighborhood: string;
  dateAgo: string;
  rating: number;
  serviceTag: string;
  comment: string;
  verifiedGoogle: boolean;
}

export const GOOGLE_REVIEWS: TestimonialReview[] = [
  {
    id: "rev-1",
    author: "نوف عبد الله الغامدي",
    neighborhood: "جدة - حي الشاطئ",
    dateAgo: "قبل أسبوع",
    rating: 5,
    serviceTag: "إبرة البروفايلو وفيلر الشفاه",
    comment:
      "تجربة تفوق الوصف! كنت متخوفة جداً من أن يبدو الفيلر مبالغاً فيه، لكن د. لمى يدها خفيفة جداً وذوقها راقٍ، النتيجة طبيعية لدرجة أن الجميع يسألني عن سر نضارة بشرتي. الاستقبال في فرع الروضة قمة في الرقي والخصوصية.",
    verifiedGoogle: true,
  },
  {
    id: "rev-2",
    author: "أمل محمد باوزير",
    neighborhood: "جدة - حي الزهراء",
    dateAgo: "قبل أسبوعين",
    rating: 5,
    serviceTag: "ليزر بارد كانديلا برو",
    comment:
      "أفضل عيادة ليزر جربتها في جدة بلا منازع! الأجهزة حديثة جداً والتبريد ممتاز ما حسيت بأي ألم، والممرضات قمة في الاحترافية والنظافة والتعقيم، والمواعيد دقيقة بالثانية بدون انتظار.",
    verifiedGoogle: true,
  },
  {
    id: "rev-3",
    author: "ريم بنت خالد الحربي",
    neighborhood: "جدة - حي المحمدية",
    dateAgo: "قبل 3 أسابيع",
    rating: 5,
    serviceTag: "جلسة مورفيوس 8 لشد البشرة",
    comment:
      "سويت جلسة مورفيوس 8 مع الإكسوزوم عند د. طارق السليمان، فرق شاسع في شد خط الفك والمسام صغرت بشكل ملحوظ من أول شهر. العيادة فخمة جداً وخدمة الفاليه مريحة.",
    verifiedGoogle: true,
  },
  {
    id: "rev-4",
    author: "لجين سلطان الشهري",
    neighborhood: "جدة - حي الروضة",
    dateAgo: "قبل شهر",
    rating: 5,
    serviceTag: "هيدرافيشل MD الملكي",
    comment:
      "حجزت باقة الإشراقة الملكية قبل زواجي، جلسة الهيدرافيشل عندهم أصلية والسيرومات تفتح أمامك. بشرتي صارت مثل الزجاج ما شاء الله، أنصح كل عروس في جدة بزيارتهم.",
    verifiedGoogle: true,
  },
  {
    id: "rev-5",
    author: "دانة فهد القثامي",
    neighborhood: "جدة - أبحر الشمالية",
    dateAgo: "قبل شهر",
    rating: 5,
    serviceTag: "علاج الشعر بالإكسوزوم",
    comment:
      "مع د. سارة العتيبي بدأت كورس الإكسوزوم للشعر، التساقط وقف بنسبة 80% خلال شهرين وبدأت البيبي هير تطلع. أمانة علمية عالية وما ينصحونك إلا بالشيء اللي فعلاً تحتاجينه.",
    verifiedGoogle: true,
  },
  {
    id: "rev-6",
    author: "مها عبد العزيز الزهراني",
    neighborhood: "جدة - حي الخالدية",
    dateAgo: "قبل شهرين",
    rating: 5,
    serviceTag: "فوتونا 4D وتوريد الشفاه",
    comment:
      "المكان يشرح الصدر من أول ما تدخلين، ريحة العيادة، الضيافة السعودية الفاخرة، تعامل موظفات الاستقبال، والأهم أمانة الأطباء. جربت فوتونا 4D للوجه وتوريد الشفاه والنتيجة خيالية.",
    verifiedGoogle: true,
  },
];
