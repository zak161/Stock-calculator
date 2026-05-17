const shariaCompanies = [
    { code: "ABRJ", name: "ABRAJ ENERGY SERVICES", arName: "أبراج لخدمات الطاقة", ratio: 0.00035, compliant: true },
    { code: "AACT", name: "AL ANWAR CERAMIC", arName: "الأنوار لبلاط السيراميك", ratio: 0.00151, compliant: true },
    { code: "DBIH", name: "AL BATINAH DEVELOPMENT & INVESTMENT HO.", arName: "الباطنة للتنمية والاستثمار", ratio: 0.00013, compliant: true },
    { code: "AMAT", name: "MADINA TAKAFUL", arName: "المدينة تكافل", ratio: 0.00000, compliant: true },
    { code: "AMCI", name: "ALMAHA CERAMICS", arName: "المها للسيراميك", ratio: 0.00025, compliant: true },
    { code: "AMAN", name: "AMAN REAL ESTATE", arName: "صناديق أمان للاستثمار العقاري", ratio: 0.00000, compliant: true },
    { code: "SPFI", name: "ASAFFA FOODS", arName: "الصفاء للأغذية", ratio: 0.00000, compliant: true },
    { code: "BKNZ", name: "BANK NIZWA", arName: "بنك نزوى", ratio: 0.00000, compliant: true },
    { code: "CSII", name: "COMPUTER STATIONERY INDUSTRY", arName: "صناعة قرطاسية الكمبيوتر", ratio: 0.00000, compliant: true },
    { code: "GMPI", name: "GULF MUSHROOM PRODUCTS", arName: "الخليجية لإنتاج الفطر", ratio: 0.00004, compliant: true },
    { code: "BACS", name: "MAJAN COLLEGE", arName: "كلية مجان", ratio: 0.00000, compliant: true },
    { code: "MGMC", name: "MUSCAT GASES", arName: "مسقط للغازات", ratio: 0.00125, compliant: true },
    { code: "MTMI", name: "MUSCAT THREAD MILLS", arName: "مصانع مسقط للخيوط", ratio: 0.00000, compliant: true },
    { code: "NBII", name: "NATIONAL BISCUIT INDUSTRIES LIMITED", arName: "الوطنية لصناعة البسكويت", ratio: 0.00000, compliant: true },
    { code: "NDTI", name: "NATIONAL DETERGENT", arName: "الوطنية لصناعة المنظفات", ratio: 0.00000, compliant: true },
    { code: "OCAI", name: "OMAN CABLES INDUSTRY", arName: "صناعة الكابلات العمانية", ratio: 0.03357, compliant: true },
    { code: "OCOI", name: "OMAN CEMENT", arName: "اسمنت عمان", ratio: 0.00571, compliant: true },
    { code: "OCCI", name: "OMAN CHROMITE", arName: "الكروم العمانية", ratio: 0.00333, compliant: true },
    { code: "ORCI", name: "OMAN REFRESHMENT", arName: "عمان للمرطبات", ratio: 0.02589, compliant: true },
    { code: "OMRF", name: "OMAN REIT FUND", arName: "صندوق عمان العقاري", ratio: 0.00025, compliant: true },
    { code: "OPCI", name: "OMAN PACKAGING", arName: "العمانية للتغليف", ratio: 0.00000, compliant: true },
    { code: "ORDS", name: "OOREDOO", arName: "أوريدو", ratio: 0.00739, compliant: true },
    { code: "OQEP", name: "OQ EXPLORATION AND PRODUCTION", arName: "أوكيو للاستكشاف والإنتاج", ratio: 0.00104, compliant: true },
    { code: "OQGN", name: "OQ GAS NETWORKS", arName: "أوكيو لشبكات الغاز", ratio: 0.00001, compliant: true },
    { code: "PRFD", name: "THE PEARL REIF", arName: "صندوق اللؤلؤ للاستثمار العقاري", ratio: 0.00000, compliant: true },
    { code: "TAOI", name: "TAKAFUL OMAN", arName: "تكافل عمان للتأمين", ratio: 0.00000, compliant: true },
    { code: "VOES", name: "VOLTAMP ENERGY", arName: "فولتامب للطاقة", ratio: 0.00210, compliant: true },
    { code: "OQBI", name: "OQ BASE INDUSTRIES (SFZ)", arName: "أوكيو للصناعات الأساسية - المنطقة الحرة", ratio: 0.00130, compliant: true },
    { code: "AMII", name: "AL MADINA INVESTMENT HOLDING", arName: "المدينة للاستثمار القابضة", ratio: 0.00001, compliant: true },
    { code: "AJSS", name: "ALJAZEERA SERVICES", arName: "الجزيرة للخدمات", ratio: 0.00130, compliant: true },
    { code: "CMII", name: "CONSTRUCTION MATERIALS INDUSTRIES", arName: "صناعة مواد البناء", ratio: 0.00006, compliant: true },
    { code: "JREF", name: "JABAL REIF", arName: "صندوق جبل العقاري", ratio: 0.00000, compliant: true },
    { code: "SOMS", name: "SHELL OMAN MARKETING COMPANY", arName: "شل العمانية للتسويق", ratio: 0.00503, compliant: true },
    { code: "OETI", name: "OMAN EDUCATION AND TRAINING INVESTMENT", arName: "العمانية للاستثمارات التعليمية والتدريبية", ratio: 0.00306, compliant: true },

    // وردت في المستند كشركة خارجة من المؤشر الشرعي
    { code: "DHOFAR BEVERAGES", name: "DHOFAR BEVERAGES", arName: "ظفار للمشروبات والمواد الغذائية", ratio: 0.00000, compliant: false }
];

document.addEventListener("DOMContentLoaded", function () {
    fillCompanySelect();
});

function fillCompanySelect() {
    const companySelect = document.getElementById("companySelect");

    shariaCompanies.forEach(function (company, index) {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = company.code + " - " + company.arName;
        companySelect.appendChild(option);
    });
}

function formatOMR(value) {
    return Number(value).toLocaleString("en-US", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
    }) + " ر.ع";
}

function calculateCommission(amount, isHalfCommission) {
    let commission;

    if (amount < 286) {
        commission = 1.050;
    } else {
        commission = amount * 0.003675;
    }

    if (isHalfCommission) {
        commission = commission / 2;
    }

    return commission;
}

function calculateProfit() {
    const shares = Number(document.getElementById("shares").value);
    const buyPrice = Number(document.getElementById("buyPrice").value);
    const sellPrice = Number(document.getElementById("sellPrice").value);
    const isHalfCommission = document.getElementById("halfCommission").checked;

    const resultBox = document.getElementById("result");
    const resultTitle = document.getElementById("resultTitle");

    if (shares <= 0 || buyPrice <= 0 || sellPrice <= 0) {
        alert("يرجى إدخال جميع البيانات بشكل صحيح");
        return;
    }

    const buyAmount = shares * buyPrice;
    const sellAmount = shares * sellPrice;

    const buyCommission = calculateCommission(buyAmount, isHalfCommission);
    const sellCommission = calculateCommission(sellAmount, isHalfCommission);

    const totalCost = buyAmount + buyCommission;
    const totalRevenue = sellAmount - sellCommission;

    const profit = totalRevenue - totalCost;
    const profitPercent = (profit / totalCost) * 100;

    document.getElementById("buyAmount").textContent = formatOMR(buyAmount);
    document.getElementById("sellAmount").textContent = formatOMR(sellAmount);
    document.getElementById("buyCommission").textContent = formatOMR(buyCommission);
    document.getElementById("sellCommission").textContent = formatOMR(sellCommission);
    document.getElementById("profitValue").textContent = formatOMR(profit);
    document.getElementById("profitPercent").textContent = profitPercent.toFixed(2) + "%";

    resultBox.classList.remove("hidden", "profit", "loss", "neutral");

    if (profit > 0) {
        resultTitle.textContent = "يوجد ربح";
        resultBox.classList.add("profit");
    } else if (profit < 0) {
        resultTitle.textContent = "توجد خسارة";
        resultBox.classList.add("loss");
    } else {
        resultTitle.textContent = "لا يوجد ربح أو خسارة";
        resultBox.classList.add("neutral");
    }
}

function calculatePurification() {
    const shares = Number(document.getElementById("shares").value);
    const companyIndex = document.getElementById("companySelect").value;

    const purificationResult = document.getElementById("purificationResult");
    const purificationTitle = document.getElementById("purificationTitle");

    if (companyIndex === "") {
        alert("يرجى اختيار الشركة أولًا");
        return;
    }

    if (shares <= 0) {
        alert("يرجى إدخال عدد الأسهم لحساب مبلغ التطهير");
        return;
    }

    const company = shariaCompanies[companyIndex];
    const purificationAmount = shares * company.ratio;

    document.getElementById("companyCode").textContent = company.code;
    document.getElementById("companyName").textContent = company.arName + " / " + company.name;
    document.getElementById("purificationRatio").textContent = company.ratio.toFixed(5) + " ر.ع لكل سهم";
    document.getElementById("purificationAmount").textContent = formatOMR(purificationAmount);

    purificationResult.classList.remove("hidden", "sharia-compliant", "sharia-not-compliant", "neutral");

    if (company.compliant) {
        purificationTitle.textContent = "الشركة متوافقة شرعًا";
        document.getElementById("shariaStatus").textContent = "متوافقة شرعًا";
        purificationResult.classList.add("sharia-compliant");
    } else {
        purificationTitle.textContent = "الشركة غير متوافقة شرعًا";
        document.getElementById("shariaStatus").textContent = "غير متوافقة / خارجة من المؤشر الشرعي";
        purificationResult.classList.add("sharia-not-compliant");
    }
}