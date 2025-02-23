// Surah to Starting Page Mapping (Sample: starting page number for each Surah)
const surahs = [
    { name: "الفاتحة", startPage: 1 },
    { name: "البقرة", startPage: 2 },
    { name: "آل عمران", startPage: 50 },
    { name: "النساء", startPage: 77 },
    { name: "المائدة", startPage: 106 },
    { name: "الأنعام", startPage: 128 },
    { name: "الأعراف", startPage: 151 },
    { name: "الأنفال", startPage: 177 },
    { name: "التوبة", startPage: 187 },
    { name: "يونس", startPage: 208 },
    { name: "هود", startPage: 221 },
    { name: "يوسف", startPage: 235 },
    { name: "الرعد", startPage: 249 },
    { name: "إبراهيم", startPage: 255 },
    { name: "الحجر", startPage: 262 },
    { name: "النحل", startPage: 267 },
    { name: "الإسراء", startPage: 282 },
    { name: "الكهف", startPage: 293 },
    { name: "مريم", startPage: 305 },
    { name: "طه", startPage: 312 },
    { name: "الأنبياء", startPage: 322 },
    { name: "الحج", startPage: 332 },
    { name: "المؤمنون", startPage: 342 },
    { name: "النور", startPage: 350 },
    { name: "الفرقان", startPage: 359 },
    { name: "الشعراء", startPage: 367 },
    { name: "النمل", startPage: 377 },
    { name: "القصص", startPage: 385 },
    { name: "العنكبوت", startPage: 396 },
    { name: "الروم", startPage: 404 },
    { name: "لقمان", startPage: 411 },
    { name: "السجدة", startPage: 415 },
    { name: "الأحزاب", startPage: 418 },
    { name: "سبأ", startPage: 428 },
    { name: "فاطر", startPage: 434 },
    { name: "يس", startPage: 440 },
    { name: "الصافات", startPage: 446 },
    { name: "ص", startPage: 453 },
    { name: "الزمر", startPage: 458 },
    { name: "غافر", startPage: 467 },
    { name: "فصلت", startPage: 477 },
    { name: "الشورى", startPage: 483 },
    { name: "الزخرف", startPage: 489 },
    { name: "الدخان", startPage: 496 },
    { name: "الجاثية", startPage: 499 },
    { name: "الأحقاف", startPage: 502 },
    { name: "محمد", startPage: 507 },
    { name: "الفتح", startPage: 511 },
    { name: "الحجرات", startPage: 515 },
    { name: "ق", startPage: 518 },
    { name: "الذاريات", startPage: 520 },
    { name: "الطور", startPage: 523 },
    { name: "النجم", startPage: 526 },
    { name: "القمر", startPage: 528 },
    { name: "الرحمن", startPage: 531 },
    { name: "الواقعة", startPage: 534 },
    { name: "الحديد", startPage: 537 },
    { name: "المجادلة", startPage: 542 },
    { name: "الحشر", startPage: 545 },
    { name: "الممتحنة", startPage: 549 },
    { name: "الصف", startPage: 551 },
    { name: "الجمعة", startPage: 553 },
    { name: "المنافقون", startPage: 554 },
    { name: "التغابن", startPage: 556 },
    { name: "الطلاق", startPage: 558 },
    { name: "التحريم", startPage: 560 },
    { name: "الملك", startPage: 562 },
    { name: "القلم", startPage: 564 },
    { name: "الحاقة", startPage: 566 },
    { name: "المعارج", startPage: 568 },
    { name: "نوح", startPage: 570 },
    { name: "الجن", startPage: 572 },
    { name: "المزمل", startPage: 574 },
    { name: "المدثر", startPage: 575 },
    { name: "القيامة", startPage: 577 },
    { name: "الإنسان", startPage: 578 },
    { name: "المرسلات", startPage: 580 },
    { name: "النبأ", startPage: 582 },
    { name: "النازعات", startPage: 583 },
    { name: "عبس", startPage: 585 },
    { name: "التكوير", startPage: 586 },
    { name: "الانفطار", startPage: 587 },
    { name: "المطففين", startPage: 587 },
    { name: "الانشقاق", startPage: 589 },
    { name: "البروج", startPage: 590 },
    { name: "الطارق", startPage: 591 },
    { name: "الأعلى", startPage: 591 },
    { name: "الغاشية", startPage: 592 },
    { name: "الفجر", startPage: 592 },
    { name: "البلد", startPage: 594 },
    { name: "الشمس", startPage: 595 },
    { name: "الليل", startPage: 595 },
    { name: "الضحى", startPage: 596 },
    { name: "الشرح", startPage: 596 },
    { name: "التين", startPage: 597 },
    { name: "العلق", startPage: 597 },
    { name: "القدر", startPage: 598 },
    { name: "البينة", startPage: 598 },
    { name: "الزلزلة", startPage: 599 },
    { name: "العاديات", startPage: 599 },
    { name: "القارعة", startPage: 600 },
    { name: "التكاثر", startPage: 600 },
    { name: "العصر", startPage: 601 },
    { name: "الهمزة", startPage: 601 },
    { name: "الفيل", startPage: 601 },
    { name: "قريش", startPage: 602 },
    { name: "الماعون", startPage: 602 },
    { name: "الكوثر", startPage: 602 },
    { name: "الكافرون", startPage: 603 },
    { name: "النصر", startPage: 603 },
    { name: "المسد", startPage: 604 },
    { name: "الإخلاص", startPage: 604 },
    { name: "الفلق", startPage: 604 },
    { name: "الناس", startPage: 604 }
];

// Load last visited page from localStorage or default to page 50
let currentPage = localStorage.getItem('currentPage') ? parseInt(localStorage.getItem('currentPage')) : 50;
const totalPages = 604; // Total pages in the Quran
const pageInput = document.getElementById('pageInput');
const pageNumberText = document.getElementById('pageNumberText');
const quranPage = document.getElementById('quranPage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const surahSelect = document.getElementById('surahSelect');

// Update the page and localStorage
function updatePage(page) {
    currentPage = page;
    localStorage.setItem('currentPage', page); // Save to localStorage
    pageNumberText.textContent = `الصفحة ${page}`;
    quranPage.src = `https://raw.githubusercontent.com/BetimShala/quran-images-api/refs/heads/master/quran-images/${page}.png`;
    pageInput.value = page; // Update input field
}

// Generate Surah Dropdown
function populateSurahDropdown() {
    surahs.forEach(surah => {
        const option = document.createElement('option');
        option.value = surah.startPage;
        option.textContent = surah.name;
        surahSelect.appendChild(option);
    });
}

// Next and Previous Button Functions
nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        updatePage(currentPage + 1);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        updatePage(currentPage - 1);
    }
});

// Go to specific page based on user input
pageInput.addEventListener('change', () => {
    const page = parseInt(pageInput.value);
    if (page >= 1 && page <= totalPages) {
        updatePage(page);
    }
});

// Surah Dropdown (Go to starting page of the selected Surah)
surahSelect.addEventListener('change', () => {
    const selectedPage = parseInt(surahSelect.value);
    if (selectedPage) {
        updatePage(selectedPage);
    }
});

document.getElementById('idk').addEventListener('click', () => {
    window.history.back();
})

// Initial Load
updatePage(currentPage);
populateSurahDropdown();