const toggle = document.getElementById("toggoleDarkMode");
        const body = document.querySelector("body");
        const footer = document.getElementById("footer");


        // Check if the user's preferred theme is stored in localStorage
const preferredTheme = localStorage.getItem('theme');

toggle.classList.add("bi-brightness-high-fill");
footer.classList.add("bg-body-tertiary");

// If the preferred theme is "dark", apply the dark theme on page load
if (preferredTheme === 'dark') {
  activateDarkMode();
}

toggle.addEventListener('click', function () {
  // Toggle the classList
  this.classList.toggle('bi-moon');
  this.classList.toggle('bi-brightness-high-fill');


  // Check if the dark mode is active after toggling
  const isDarkModeActive = this.classList.contains('bi-moon'); 

  // Store the user's preferred theme in localStorage
  localStorage.setItem('theme', isDarkModeActive ? 'dark' : 'light');

  // Apply the appropriate theme based on the classList
  if (isDarkModeActive) {
    activateDarkMode();
  } else {
    activateLightMode();
  }
});

// Function to apply the dark mode styles
function activateDarkMode() {
  body.style.background = 'black';
  body.style.color = 'white';
  footer.classList.remove('bg-body-tertiary');
  toggle.classList.remove("bi-brightness-high-fill");
  toggle.classList.add("bi-moon");
  body.style.transition = '1.5s';
  footer.style.transition = '1.5s';
}

// Function to apply the light mode styles
function activateLightMode() {
  body.style.background = 'white';
  body.style.color = 'black';
  footer.classList.add('bg-body-tertiary');
  body.style.transition = '1.5s';
  footer.style.transition = '1.5s';
}
/////////////////////////////////////////////////////////////////////////translation
const translations = {
  en:{
      home: "Home",
      industry : "Industry",
      buy:"Buy & Sale",
      rent: "Rent",
      full: "Full projects",
      realestate : "Real Estate",
      services: "Services",
      acc:"Accounting Business",
      con:"Consulting Business",
      law:"Lawyer Business",
      spe:"Specialized Business",
      lic:"Licensing Business",
      exe:"Executive Business",
      other:"Other services",
      about : "About us",
      career : "Career",
      language : "Language",
      english : "English",
      arabic : "Arabic",
      com : "Company",
      coms : "Companies Servics",
      inm : "Investment management",
      rlin : "Real Estate Investment",
      inrl : "Industry Real Estate",
      submit : "Sumbit",
      view:"View Details",
      inin:"Industry Investment",
      cn:"Continue",
      location: "Location",
      workh:"Work hours",
      hours:"From 11Am to 7Pm, From Saturday to Thursday",
      contact:"Contact us",
      vision:"Our vision",
      mission:"Our mission"
  },
  ar:{
      home: "الرئــــــــيسية",
      industry : "صنـــاعي",
      buy:"بـــــيع & شراء",
      rent: "الايـــــجار",
      full: "مشروعـــــات قائـــــمة",
      realestate : "عقــــــــارات",
      services : "خدماتنـــــا",
      acc:"اعمـــــال المحاسبة",
      con:"اعمـــــال استشارية",
      law:"اعمـــــال المحاماه",
      spe:"اعمـــــال تخصصية",
      lic:"اعمـــــال التراخيص",
      exe:"اعمـــــال تنفيذية",
      other:"خدمـــــات اخري",
      about : "من نـــــحن",
      career : "وظائـــــف",
      language : "اختر لغة",
      english : "الانجليزية",
      arabic : "العربية",
      com : "الشريـــــكة",
      coms: "خدمـــــات الشريكات",
      inm : "ادارة الاستثمـــــار",
      rlin: "الاستثمـــــار العقاري",
      inrl: "عقـــــارات صناعي",
      submit :"ســـــجل",
      view:"عرض التفاصيل",
      inin:"الاستثمـــــار الصناعي",
      cn:"اكمـــــل",
      location:"الموقـــــع",
      workh:"سعات العمل",
      hours:"من الساعة 11 صباحا حتي 7 مسائا, من السبت الي الخميس",
      contact:"تواصل معنـــــا",
      vision:"رؤيتنـــــا",
      mission:"اهدافنـــــا",
  },
};

const languageSelector = document.querySelector('select');

languageSelector.addEventListener("change",(event) =>{
    setLanguage(event.target.value);
    localStorage.setItem("lang",event.target.value);
});

document.addEventListener("DOMContentLoaded", ()=>{
    setLanguage(localStorage.getItem("lang"));
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-i18n");
        element.textContent = translations[language][translationKey];
    });
    document.dir = language === "ar" ? "rtl" : "ltr";
};