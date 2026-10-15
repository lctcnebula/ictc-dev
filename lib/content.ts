// All site content lives here. Every list renders however many items it holds,
// so adding a program, event, slide, school or grant type is just adding an entry.
// Program, event, school and contact facts come from techcampus.org.

export const site = {
  name: "Lake County Tech Campus Foundation",
  short: "LCTC Foundation",
  tagline: "Skills. Success. Future.",
  motto: "A School of Opportunity that encourages a passion for learning.",
  email: "edelrio@techcampus.org",
  phone: "(847) 223-6681",
  phoneHref: "tel:+18472236681",
  address: "19525 West Washington St., Grayslake, IL 60030",
  campusUrl: "https://www.techcampus.org",
  enrollUrl: "https://www.techcampus.org/studentsparents/how-to-enroll",
  scholarshipsUrl: "https://www.techcampus.org/studentsparents/scholarships",
  calendarUrl: "https://www.techcampus.org/calendar",
  tourUrl: "https://www.techcampus.org/community/schedule-a-tour",
  itemDonationUrl: "https://www.techcampus.org/community/donations",
  internshipUrl: "https://www.techcampus.org/about-us/internship-interest-form-for-businesses",
};

export const stats = [
  { value: 2500, suffix: "+", label: "high school students" },
  { value: 22, label: "member high schools" },
  { value: 18, label: "career programs" },
  { value: 100, suffix: "+", label: "college credits available" },
];

export const slides = [
  { src: "/assets/img/welding.jpg", caption: "Welding / Fabrication", alt: "A welding student in a helmet working at a bench as sparks fly", w: 1024, h: 683 },
  { src: "/assets/img/nursing.jpg", caption: "Health careers", alt: "Nursing and EMT students smiling during a simulation exercise", w: 1024, h: 738 },
  { src: "/assets/img/culinary.jpg", caption: "Culinary Arts", alt: "A culinary student in chef whites piping icing in a teaching kitchen", w: 1024, h: 683 },
  { src: "/assets/img/construction.jpg", caption: "Construction Skills", alt: "Three students in hard hats measuring a wooden frame", w: 1024, h: 683 },
  { src: "/assets/img/cosmetology.jpg", caption: "Cosmetology", alt: "Cosmetology students styling hair for guests", w: 1024, h: 683 },
];

export type Category = "health" | "safety" | "trades" | "tech" | "service";

export const categories: { id: Category; label: string }[] = [
  { id: "health", label: "Health" },
  { id: "safety", label: "Public safety" },
  { id: "trades", label: "Trades & transport" },
  { id: "tech", label: "Tech & media" },
  { id: "service", label: "Service & education" },
];

export type Program = {
  slug: string;
  name: string;
  cat: Category;
  icon: string;
  image: string;
  length: string;
  summary: string;
  learn: string[];
  outcome: string;
  sourcePath: string;
};

export const programs: Program[] = [
  {
    slug: "automotive-collision-repair", name: "Automotive Collision Repair", cat: "trades", icon: "🚗", image: "/assets/img/auto.jpg", length: "Two years",
    summary: "Repair and refinish damaged vehicles to factory specifications using an industry-endorsed curriculum.",
    learn: ["Automobile construction and sheet metal repair", "MIG welding and body alignment", "Refinishing, painting and finish matching", "Damage estimating and shop management"],
    outcome: "Internship opportunities in working collision shops.",
    sourcePath: "/programs/automotive-collision-repair",
  },
  {
    slug: "automotive-service", name: "Automotive Service", cat: "trades", icon: "🔧", image: "/assets/img/auto.jpg", length: "Two years",
    summary: "A solid foundation for the automotive service industry, built in four phases.",
    learn: ["Brakes", "Steering and suspension", "Electrical systems", "Engine performance"],
    outcome: "Prepares students for ASE (Automotive Service Excellence) certification exams, with chances for paid dealership internships.",
    sourcePath: "/programs/automotive-service",
  },
  {
    slug: "biomedical-science", name: "Biomedical Science", cat: "health", icon: "🧬", image: "/assets/img/nurse-sim.jpg", length: "Project Lead The Way",
    summary: "Biology and medicine through hands-on projects, from heart disease and diabetes to infection.",
    learn: ["Investigating a medical mystery through history and autopsy evidence", "How disease relates to changes in body systems", "Interactions of human body systems", "Lab and design skills used in medicine"],
    outcome: "A strong start for college study in health and life sciences.",
    sourcePath: "/programs/biomedical-science",
  },
  {
    slug: "certified-nurse-assisting", name: "Certified Nurse Assisting", cat: "health", icon: "🩺", image: "/assets/img/nursing.jpg", length: "One year",
    summary: "Prepares students to work as nurse assistants and to move on to nursing programs.",
    learn: ["Basic nursing skills in lecture and lab", "At least 42 clinical hours in long-term care facilities", "Patient care, safety and communication"],
    outcome: "Eligible for the written exam for the Illinois nurse assistant state certificate.",
    sourcePath: "/programs/certified-nurse-assisting",
  },
  {
    slug: "construction-skills-management", name: "Construction Skills & Management", cat: "trades", icon: "🏗️", image: "/assets/img/construction.jpg", length: "Two years",
    summary: "Conventional construction methods in year one, planning and scheduling in year two.",
    learn: ["Carpentry, HVAC, electrical and plumbing", "Construction safety and environmental impact", "Hands-on work with building materials and tools", "Project planning, sequencing and scheduling"],
    outcome: "Case studies and guest speakers connect students with careers in the field.",
    sourcePath: "/programs/construction-skills-management",
  },
  {
    slug: "cosmetology", name: "Cosmetology", cat: "service", icon: "💇", image: "/assets/img/cosmetology.jpg", length: "Two years",
    summary: "In-depth training in hair, skin and nail services in a salon-like setting.",
    learn: ["Foundational theory and core concepts", "Hands-on hair, skin and nail services", "Serving real guests in the Style Tech student salon"],
    outcome: "Completes the 1,500 training hours needed to sit for the Illinois State Board of Cosmetology licensing exam.",
    sourcePath: "/programs/cosmetology",
  },
  {
    slug: "criminal-justice", name: "Intro to Criminal Justice & Policing", cat: "safety", icon: "🚓", image: "/assets/img/mentoring.jpg", length: "One year",
    summary: "The legal process and the administration of justice in American society.",
    learn: ["The criminal process from policing to corrections", "Adjudication and sentencing", "Social, moral and political issues in justice", "The role of police in a free society"],
    outcome: "A springboard to careers across the criminal justice system.",
    sourcePath: "/programs/criminal-justice",
  },
  {
    slug: "culinary-arts", name: "Culinary Arts", cat: "service", icon: "🍳", image: "/assets/img/culinary.jpg", length: "Two years",
    summary: "Culinary and hospitality education for the many roles in the hospitality industry.",
    learn: ["Safe, sanitary kitchen operation", "Knife skills, classical cooking, baking and pastry", "Menu planning, purchasing and inventory", "Front-of-house service at the Tech Campus Café"],
    outcome: "Practice through special events, competitions and the campus café.",
    sourcePath: "/programs/culinary-arts",
  },
  {
    slug: "cybersecurity", name: "Cybersecurity", cat: "tech", icon: "🔐", image: "/assets/img/laptops.jpg", length: "One year",
    summary: "How to protect systems, networks and personal information, and how attackers think.",
    learn: ["Securing computers and digital devices", "Networking fundamentals", "Cybersecurity vocabulary and practice", "Online safety and critical thinking"],
    outcome: "A strong foundation for further study in cybersecurity. No experience needed.",
    sourcePath: "/programs/cybersecurity",
  },
  {
    slug: "early-education-teaching", name: "Early Education & Teaching", cat: "service", icon: "🍎", image: "/assets/img/mentoring.jpg", length: "Two years",
    summary: "Careers serving children, practiced daily in the Tech Campus Preschool.",
    learn: ["Planning age-appropriate activities", "Positive guidance of child behavior", "Child safety and nutrition", "Social, emotional and intellectual development"],
    outcome: "Hands-on teaching in two on-campus preschool labs.",
    sourcePath: "/programs/early-education-teaching",
  },
  {
    slug: "emergency-medical-services", name: "Emergency Medical Services", cat: "health", icon: "🚑", image: "/assets/img/nursing.jpg", length: "One year (seniors)",
    summary: "Prepares seniors for the Illinois Department of Public Health EMT-B licensure exam.",
    learn: ["AHA Healthcare Provider CPR", "Patient assessment and stabilization", "Hospital ER clinical experience", "Ride-alongs with local Fire/EMS departments"],
    outcome: "Eligible for the IDPH EMT-B licensure examination.",
    sourcePath: "/programs/emergency-medical-services",
  },
  {
    slug: "firefighting", name: "Firefighting", cat: "safety", icon: "🚒", image: "/assets/img/sparks.jpg", length: "One year",
    summary: "Training for entry-level firefighter positions on a working fire engine.",
    learn: ["Fire chemistry and suppression", "Self-contained breathing apparatus", "Ladders, forcible entry and ventilation", "Search and rescue and hose evolutions"],
    outcome: "Ready to pursue entry-level firefighting roles.",
    sourcePath: "/programs/firefighting",
  },
  {
    slug: "game-programming-virtualization", name: "Game Programming & Virtualization", cat: "tech", icon: "🎮", image: "/assets/img/laptops.jpg", length: "Two years",
    summary: "Build video games and professional programs with industry-standard languages.",
    learn: ["Programming fundamentals at your own pace", "Industry-standard coding languages", "2D and 3D animation", "Virtual reality and simulation"],
    outcome: "Portfolio-ready projects for computer science study.",
    sourcePath: "/programs/game-programming-virtualization",
  },
  {
    slug: "industrial-technology", name: "Industrial Technology", cat: "trades", icon: "⚙️", image: "/assets/img/welder-shop.jpg", length: "Two years",
    summary: "Maintain, repair and run machinery at the College of Lake County's Advanced Technology Center.",
    learn: ["Hydraulics and machine alignment", "Electricity and electronics", "Computerized equipment maintenance", "Preventative and predictive maintenance"],
    outcome: "Ready for industrial and food manufacturing employers.",
    sourcePath: "/programs/industrial-technology",
  },
  {
    slug: "law-enforcement-csi", name: "Criminal Justice Careers & Forensic Investigation", cat: "safety", icon: "🔎", image: "/assets/img/laptops.jpg", length: "One year",
    summary: "Explore careers in law enforcement, courts, corrections and private security, plus forensic science.",
    learn: ["Duties and ethics across justice careers", "Scientific methods in forensic investigation", "Evidence handling", "Individual and group career exercises"],
    outcome: "A clear picture of which justice career fits you.",
    sourcePath: "/programs/law-enforcement-csi",
  },
  {
    slug: "medical-assisting", name: "Medical Assisting", cat: "health", icon: "💉", image: "/assets/img/nurse-sim.jpg", length: "One year",
    summary: "Administrative and clinical training for one of the fastest-growing roles in healthcare.",
    learn: ["Vital signs, injections and medication administration", "Drawing blood, EKGs and glucose testing", "Medical office administration", "Working alongside physicians and PAs"],
    outcome: "Students become Certified Medical Receptionists.",
    sourcePath: "/programs/medical-assisting",
  },
  {
    slug: "multimedia", name: "Multimedia", cat: "tech", icon: "🎬", image: "/assets/img/laptops.jpg", length: "Two years",
    summary: "Design, art and digital media, from 2D composition to video editing.",
    learn: ["Photoshop, Illustrator and InDesign", "HTML and Adobe XD web design", "Digital video editing", "2D and 3D composition"],
    outcome: "Adobe application certifications after second semester.",
    sourcePath: "/programs/multimedia",
  },
  {
    slug: "welding-fabrication", name: "Welding / Fabrication", cat: "trades", icon: "🔥", image: "/assets/img/welding.jpg", length: "Two years",
    summary: "Shop safety, cutting and every major welding process, applied to real fabrication projects.",
    learn: ["Stick, MIG and TIG arc welding", "Oxy-fuel welding and plasma cutting", "Blueprint reading and weld symbols", "Layout, fit-up and fabrication"],
    outcome: "The American Welding Society recognizes the program as an Educational Instruction Member.",
    sourcePath: "/programs/weldingfabrication",
  },
];

export type CampusEvent = { date: string; time: string; title: string; text: string; image: string; alt: string };

// Past events drop off automatically, so this list can grow indefinitely.
export const events: CampusEvent[] = [
  { date: "2026-10-17", time: "8:00 AM – 2:00 PM", title: "Cosmetology Saturdays", text: "Book a salon service with Tech Campus cosmetology students.", image: "/assets/img/nails.jpg", alt: "A cosmetology student giving a manicure" },
  { date: "2026-10-22", time: "10:30 AM – 3:00 PM", title: "Celebration of Partnerships", text: "Honoring the businesses and community partners behind our programs.", image: "/assets/img/construction.jpg", alt: "Students in hard hats working on a construction project" },
  { date: "2026-11-12", time: "4:00 – 7:00 PM", title: "Tour of Tech", text: "An open house for families. Walk the labs and talk with instructors.", image: "/assets/img/laptops.jpg", alt: "Students working together on laptops in a classroom" },
  { date: "2026-11-14", time: "8:00 AM – 2:00 PM", title: "Cosmetology Saturdays", text: "Another chance to book a service at the Style Tech student salon.", image: "/assets/img/salon.jpg", alt: "Cosmetology students laughing while giving manicures" },
];

export function upcomingEvents(now = new Date()) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return events
    .filter(e => new Date(e.date + "T00:00:00") >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export const memberSchools = [
  "Alden-Hebron", "Antioch", "Deerfield", "Grant", "Grayslake Central", "Grayslake North",
  "Highland Park", "Johnsburg", "Lake Forest", "Lake Zurich", "Lakes", "Libertyville",
  "Mundelein", "North Chicago", "Richmond-Burton", "Round Lake", "Stevenson", "Vernon Hills",
  "Warren", "Wauconda", "Waukegan", "Zion-Benton",
];

export type GrantType = { id: string; name: string; icon: string; text: string };

export const grantTypes: GrantType[] = [
  { id: "scholarship", name: "Scholarship", icon: "🎓", text: "For graduating students heading to college, an apprenticeship or straight into the workforce." },
  { id: "tools", name: "Tools & equipment grant", icon: "🧰", text: "Starter kits, uniforms, protective gear and program supplies." },
  { id: "certification", name: "Certification fee grant", icon: "📜", text: "Exam and licensing fees for industry certifications like ASE, CNA, EMT-B or Adobe." },
  { id: "fees", name: "Program fee assistance", icon: "🧾", text: "Help with Tech Campus course and lab fees." },
  { id: "emergency", name: "Emergency need", icon: "🤝", text: "Transportation, clothing or other urgent costs that could keep you from finishing." },
];

// Outside scholarships listed on techcampus.org. Deadlines change each year, so we link out.
export const outsideScholarships = [
  { name: "Automotive Service Tool Scholarship", who: "Graduating seniors in the Automotive Service program", award: "Hand tool kits valued at over $1,800", how: "Get the form from your Automotive Service instructor", url: "https://www.techcampus.org/studentsparents/scholarships" },
  { name: "Mike Rowe Works Scholarship", who: "Seniors and graduates enrolling in a trade program", award: "Work ethic scholarships", how: "Apply online", url: "https://www.mikeroweworks.org/scholarship/" },
  { name: "Horatio Alger Career & Technical Scholarship", who: "Students in career or technical programs with financial need", award: "Varies", how: "Apply online", url: "https://scholars.horatioalger.org/horatio-alger-scholarship-applications/" },
  { name: "Beauty & Wellness Professionals Scholarship", who: "Students pursuing a beauty industry career, DACA recipients included", award: "$2,500", how: "Apply online", url: "https://www.beautyschoolsdirectory.com/cosmetology-school-scholarships" },
  { name: "Scholarships for LGBTQ+ Students", who: "LGBTQ+ students in beauty and wellness programs", award: "Varies", how: "See the list", url: "https://www.beautyschoolsdirectory.com/financial-aid/scholarships/lgbtq-students" },
];

export const photoCredits = [
  { text: "Welding, culinary, cosmetology, nursing and EMT photos", by: "COD Newsroom (College of DuPage)", byUrl: "https://www.flickr.com/photos/41431665@N07", license: "CC BY 2.0" },
  { text: "Graduates", by: "breezy421", byUrl: "https://www.flickr.com/photos/60202180@N00/152285899", license: "CC BY 2.0" },
  { text: "Culinary event", by: "VIUDeepBay", byUrl: "https://www.flickr.com/photos/44080391@N07/5401734615", license: "CC BY 2.0" },
  { text: "Carpentry and auto", by: "USDA Forest Service, Pacific Northwest Region", byUrl: "https://www.flickr.com/photos/135886671@N08", license: "public domain" },
  { text: "Mentoring and laptops", by: "U.S. Army Cyber Command", byUrl: "https://www.flickr.com/photos/131622585@N06", license: "public domain" },
];
