const listedCompanies = [
    { code: "OQEP", name: "OQ Exploration and Production SAOG", arName: "أوكيو للاستكشاف والإنتاج" },
    { code: "BKMB", name: "Bank Muscat SAOG", arName: "بنك مسقط" },
    { code: "ASCO", name: "Asyad Shipping Company SAOG", arName: "شركة أسياد للنقل البحري" },
    { code: "BKSB", name: "Sohar International Bank SAOG", arName: "بنك صحار الدولي" },
    { code: "OQGN", name: "OQ Gas Networks SAOG", arName: "أوكيو لشبكات الغاز" },
    { code: "OQBI", name: "OQ Base Industries (SFZ) SAOG", arName: "أوكيو للصناعات الأساسية - المنطقة الحرة بصحار" },
    { code: "OTEL", name: "Oman Telecommunications Company SAOG", arName: "الشركة العمانية للاتصالات - عمانتل" },
    { code: "NBOB", name: "National Bank of Oman SAOG", arName: "البنك الوطني العماني" },
    { code: "BKDB", name: "Bank Dhofar SAOG", arName: "بنك ظفار" },
    { code: "ABOB", name: "Ahli Bank SAOG", arName: "البنك الأهلي" },
    { code: "OMVS", name: "Oman International Development and Investment Company SAOG", arName: "الشركة العمانية العالمية للتنمية والاستثمار - أومينفست" },
    { code: "OAB", name: "Oman Arab Bank SAOG", arName: "بنك عمان العربي" },
    { code: "ABRJ", name: "Abraj Energy Services SAOG", arName: "أبراج لخدمات الطاقة" },
    { code: "PHPC", name: "Phoenix Power Company SAOG", arName: "شركة العنقاء للطاقة" },
    { code: "BKNZ", name: "Bank Nizwa SAOG", arName: "بنك نزوى" },
    { code: "OCAI", name: "Oman Cables Industry SAOG", arName: "صناعة الكابلات العمانية" },
    { code: "SSPW", name: "Sembcorp Salalah Power & Water Company SAOG", arName: "سيمبكورب صلالة للطاقة والمياه" },
    { code: "ORDS", name: "Omani Qatari Telecommunications Company SAOG", arName: "الشركة العمانية القطرية للاتصالات - أوريدو" },
    { code: "OCOI", name: "Oman Cement Company SAOG", arName: "عمان للإسمنت" },
    { code: "VOES", name: "Voltamp Energy SAOG", arName: "فولتامب للطاقة" },
    { code: "DIDI", name: "Dhofar International Development & Investment SAOG", arName: "ظفار الدولية للتنمية والاستثمار" },
    { code: "LIVA", name: "Liva Group SAOG", arName: "مجموعة ليفا" },
    { code: "SUWP", name: "Al Suwadi Power Company SAOG", arName: "السوادي للطاقة" },
    { code: "NFCI", name: "National Finance Company SAOG", arName: "الشركة الوطنية للتمويل" },
    { code: "BATP", name: "Al Batinah Power SAOG", arName: "الباطنة للطاقة" },
    { code: "OETI", name: "Oman Education & Training Investment Company SAOG", arName: "العمانية للاستثمار في التعليم والتدريب" },
    { code: "SPSI", name: "Salalah Port Services Company SAOG", arName: "خدمات ميناء صلالة" },
    { code: "OFMI", name: "Oman Flour Mills Company SAOG", arName: "مطاحن الدقيق العمانية" },
    { code: "SPFI", name: "A'Saffa Foods SAOG", arName: "الصفاء للأغذية" },
    { code: "ATMI", name: "Al Jazeera Steel Products Company SAOG", arName: "الجزيرة للمنتجات الحديدية" },
    { code: "GECS", name: "Galfar Engineering & Contracting SAOG", arName: "جلفار للهندسة والمقاولات" },
    { code: "SOMP", name: "Shell Oman Marketing Company SAOG - Preferred", arName: "شل العمانية للتسويق - أسهم ممتازة" },
    { code: "SOMS", name: "Shell Oman Marketing Company SAOG", arName: "شل العمانية للتسويق" },
    { code: "MHAS", name: "Al Maha Petroleum Products Marketing Company SAOG", arName: "المها لتسويق المنتجات النفطية" },
    { code: "RNSS", name: "Renaissance Services SAOG", arName: "النهضة للخدمات" },
    { code: "OOMP", name: "Oman Oil Marketing Company SAOG - Preferred", arName: "النفط العمانية للتسويق - أسهم ممتازة" },
    { code: "OOMS", name: "Oman Oil Marketing Company SAOG", arName: "النفط العمانية للتسويق" },
    { code: "ORCI", name: "Oman Refreshment Company SAOG", arName: "المرطبات العمانية" },
    { code: "GFIC", name: "Global Financial Investments Holding SAOG", arName: "العالمية للاستثمارات المالية القابضة" },
    { code: "AAIC", name: "Al Anwar Investments SAOG", arName: "الأنوار للاستثمارات" },
    { code: "AOFS", name: "Al Omaniya Financial Services SAOG", arName: "العمانية للخدمات المالية" },
    { code: "SMNP", name: "SMN Power Holding SAOG", arName: "إس إم إن باور القابضة" },
    { code: "SFMI", name: "Salalah Mills Company SAOG", arName: "مطاحن صلالة" },
    { code: "RCCI", name: "Raysut Cement Company SAOG", arName: "ريسوت للإسمنت" },
    { code: "DFIN", name: "Dhofar Food & Investment SAOG", arName: "ظفار للأغذية والاستثمار" },
    { code: "AJSP", name: "Al Jazeera Services Company SAOG - Preferred", arName: "الجزيرة للخدمات " },
    { code: "AJSS", name: "Al Jazeera Services Company SAOG", arName: "الجزيرة للخدمات" },
    { code: "DICS", name: "Dhofar Insurance Company SAOG", arName: "ظفار للتأمين" },
    { code: "AACT", name: "Al Anwar Ceramic Tiles Company SAOG", arName: "الأنوار لبلاط السيراميك" },
    { code: "OUIC", name: "Oman United Insurance Company SAOG", arName: "العمانية المتحدة للتأمين" },
    { code: "TFCI", name: "Taageer Finance Company SAOG", arName: "تأجير للتمويل" },
    { code: "UFCI", name: "United Finance Company SAOG", arName: "المتحدة للتمويل" },
    { code: "OQIC", name: "Oman Qatar Insurance Company SAOG", arName: "عمان قطر للتأمين" },
    { code: "ORIC", name: "Oman Reinsurance Company SAOG", arName: "العمانية لإعادة التأمين" },
    { code: "BWPC", name: "Barka Water and Power Company SAOG", arName: "بركاء للمياه والطاقة" },
    { code: "MSPW", name: "Musandam Power Company SAOG", arName: "مسندم للطاقة" },
    { code: "AFAI", name: "Al Fajar Al Alamia Company SAOG", arName: "الفجر العالمية" },
    { code: "ONES", name: "Oman National Engineering & Investment Company SAOG", arName: "العمانية الوطنية للهندسة والاستثمار" },
    { code: "SAHS", name: "Sahara Hospitality Company SAOG", arName: "صحارى للضيافة" },
    { code: "MFCI", name: "Muscat Finance SAOG", arName: "مسقط للتمويل" },
    { code: "AMAT", name: "Al Madina Insurance Company SAOG", arName: "المدينة تكافل للتأمين" },
    { code: "GMPI", name: "Gulf Mushroom Products Co. SAOG", arName: "الخليج لإنتاج الفطر" },
    { code: "OEIO", name: "Oman & Emirates Investment Holding Company SAOG", arName: "عمان والإمارات للاستثمار القابضة" },
    { code: "DGEN", name: "Dhofar Generating Company SAOG", arName: "ظفار لتوليد الكهرباء" },
    { code: "TAOI", name: "Takaful Oman Insurance SAOG", arName: "تكافل عمان للتأمين" },
    { code: "KPCS", name: "Al Kamil Power Company SAOG", arName: "الكامل للطاقة" },
    { code: "SHRQ", name: "Sharqiyah Desalination Company SAOG", arName: "الشرقية لتحلية المياه" },
    { code: "MCDE", name: "Muscat City Desalination Company SAOG", arName: "مدينة مسقط لتحلية المياه" },
    { code: "AMCI", name: "Al Maha Ceramics SAOG", arName: "المها للسيراميك" },
    { code: "NDTI", name: "The National Detergent Company SAOG", arName: "الشركة الوطنية للمنظفات الصناعية" },
    { code: "AFIC", name: "Arabia Falcon Insurance SAOG", arName: "العربية فالكون للتأمين" },
    { code: "OCHL", name: "Oman Chlorine SAOG", arName: "عمان كلورين" },
    { code: "BRDE", name: "Barka Desalination Company SAOG", arName: "بركاء لتحلية المياه" },
    { code: "BACS", name: "Majan College SAOG", arName: "كلية مجان" },
    { code: "GHOS", name: "Gulf Hotels (Oman) Company Limited SAOG", arName: "فنادق الخليج - عمان" },
    { code: "DTCS", name: "Dhofar Tourism Company SAOG", arName: "ظفار للسياحة" },
    { code: "OCCI", name: "Oman Chromite Company SAOG", arName: "الكروم العمانية" },
    { code: "SIHC", name: "A'Sharqiya Investment Holding Co. SAOG", arName: "الشرقية للاستثمار القابضة" },
    { code: "NGCI", name: "National Gas Company SAOG", arName: "الغاز الوطنية" },
    { code: "MCTI", name: "Muscat Insurance Company SAOG", arName: "مسقط للتأمين" },
    { code: "NRED", name: "National Real Estate Development and Investments Company SAOG", arName: "الوطنية للتطوير والاستثمار العقاري" },
    { code: "FINC", name: "The Financial Corporation Company SAOG", arName: "الشركة المالية" },
    { code: "UBAR", name: "Ubar Hotels & Resorts SAOG", arName: "أوبار للفنادق والمنتجعات" },
    { code: "OPCI", name: "Omani Packaging Company SAOG", arName: "العمانية للتغليف" },
    { code: "NBII", name: "National Biscuit Industries Limited SAOG", arName: "الوطنية لصناعة البسكويت المحدودة" },
    { code: "CMII", name: "Construction Materials Industries SAOG", arName: "صناعة مواد البناء" },
    { code: "FSCI", name: "Financial Services Company SAOG", arName: "شركة الخدمات المالية" },
    { code: "OFCI", name: "Oman Fisheries Company SAOG", arName: "الأسماك العمانية" },
    { code: "SHPS", name: "Sohar Power Company SAOG", arName: "صحار للطاقة" },
    { code: "MGMC", name: "Muscat Gases Company SAOG", arName: "مسقط للغازات" },
    { code: "GSCI", name: "Gulf Stone Company SAOG", arName: "شركة الخليج للأحجار" },
    { code: "MTMI", name: "Muscat Thread Mills SAOG", arName: "مسقط لصناعة الخيوط" },
    { code: "OSCI", name: "Sweets of Oman SAOG", arName: "حلوى عمان" },
    { code: "HMCI", name: "Hotels Management Company International SAOG", arName: "الشركة العالمية لإدارة الفنادق" },
    { code: "DBCI", name: "Dhofar Beverage and Food Stuff Company SAOG", arName: "ظفار للمشروبات والمواد الغذائية" },
    { code: "AMII", name: "Al Madina Investment Holding Co. SAOG", arName: "المدينة للاستثمار القابضة" },
    { code: "ABHS", name: "Al Buraimi Hotel SAOG", arName: "فندق البريمي" },
    { code: "BWRQ", name: "Bawareq Nizwa International For Investment SAOC", arName: "بوارق نزوى الدولية للاستثمار" },
    { code: "DBIH", name: "Al Batinah Development and Investment Holding Co. SAOG", arName: "الباطنة للتنمية والاستثمار القابضة" },
    { code: "NAPI", name: "National Aluminium Products Company SAOG", arName: "الوطنية لمنتجات الألمنيوم" },
    { code: "OEFI", name: "Omani Euro Food Industries SAOG", arName: "العمانية الأوروبية للصناعات الغذائية" },
    { code: "GICI", name: "Gulf International Chemicals SAOG", arName: "الخليجية الدولية للكيماويات" },
    { code: "HECI", name: "Al Hassan Engineering Company SAOG", arName: "الحسن الهندسية" },
    { code: "NMWI", name: "National Mineral Water Company SAOG", arName: "الوطنية للمياه المعدنية" },
    { code: "OMCI", name: "Oman Ceramics Company SAOG", arName: "عمان للسيراميك" },
    { code: "MGCI", name: "Majan Glass Company SAOG", arName: "مجان للزجاج" },
    { code: "ABMI", name: "Abrasives Manufacturing Company SAOG", arName: "صناعة المواد الكاشطة" }
];

// Muscat Stock Exchange: Q2 2026 Sharia compliance and purification list.
const shariaData = {
    ABRJ: 0.00002,
    AACT: 0.00103,
    DBIH: 0.00003,
    AJSS: 0.00050,
    KPCS: 0.00030,
    AMAT: 0.00000,
    AMII: 0.00006,
    AMCI: 0.00000,
    AMAN: 0.00000,
    SPFI: 0.00000,
    BKNZ: 0.00000,
    DTCS: 0.00034,
    GMPI: 0.00000,
    JREF: 0.00000,
    BACS: 0.00000,
    MGMC: 0.00019,
    MTMI: 0.00000,
    NBII: 0.00000,
    OCAI: 0.00000,
    OCOI: 0.00029,
    OCCI: 0.00000,
    OETI: 0.00580,
    OMIF: 0.00017,
    ORCI: 0.01075,
    OMRF: 0.00001,
    OPCI: 0.00000,
    ORDS: 0.00444,
    OQBI: 0.00023,
    OQEP: 0.00092,
    OQGN: 0.0000014,
    PRFD: 0.00000,
    SAHS: 0.01624,
    SSPW: 0.00010,
    SOMS: 0.00160,
    TAOI: 0.00000,
    VOES: 0.00002
};

const extraCompanies = [
    { code: "AMAN", name: "Aman Real Estate Investment Fund", arName: "صندوق أمان للاستثمار العقاري" },
    { code: "CSII", name: "Computer Stationery Industry", arName: "صناعة قرطاسية الكمبيوتر" },
    { code: "OMRF", name: "Oman REIT Fund", arName: "صندوق عمان العقاري" },
    { code: "PRFD", name: "The Pearl REIF", arName: "صندوق اللؤلؤ للاستثمار العقاري" },
    { code: "JREF", name: "Jabal REIF", arName: "صندوق جبل للاستثمار العقاري" },
    { code: "OMIF", name: "OMIFCO", arName: "العمانية الهندية للسماد" }
];

const allCompanies = [
    ...listedCompanies.map(function (company) {
        const ratio = shariaData[company.code];

        return {
            code: company.code,
            name: company.name,
            arName: company.arName,
            ratio: typeof ratio === "number" ? ratio : 0,
            compliant: typeof ratio === "number",
            listed: true
        };
    }),

    ...extraCompanies.map(function (company) {
        const ratio = shariaData[company.code];
        return {
            code: company.code,
            name: company.name,
            arName: company.arName,
            ratio: typeof ratio === "number" ? ratio : 0,
            compliant: typeof ratio === "number",
            listed: false
        };
    })
];

document.addEventListener("DOMContentLoaded", function () {
    fillCompanySelect();
    setupBottomMenu();
});


function setupBottomMenu() {
    const menuItems = document.querySelectorAll(".bottom-menu__item");
    const pages = document.querySelectorAll(".calculator-page");

    menuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const targetPageId = item.getAttribute("data-page");

            pages.forEach(function (page) {
                page.classList.toggle("active", page.id === targetPageId);
            });

            menuItems.forEach(function (menuItem) {
                const isActive = menuItem === item;
                menuItem.classList.toggle("active", isActive);
                menuItem.setAttribute("aria-selected", isActive ? "true" : "false");
            });

            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });
}

function fillCompanySelect() {
    const companySelect = document.getElementById("companySelect");

    allCompanies.forEach(function (company, index) {
        const option = document.createElement("option");
        option.value = index;

        if (company.listed) {
            option.textContent = company.code + " - " + company.arName;
        } else {
            option.textContent = company.code + " - " + company.arName;
        }

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
    // Published commission: 0.35%, minimum OMR 1; retain the original VAT model.
    const commission = Math.max(1, amount * 0.0035) * 1.05;
    return isHalfCommission ? commission / 2 : commission;
}

// Solve sale proceeds minus the estimated sale commission = acquisition cost.
function calculateBreakevenSaleAmount(acquisitionCost, isHalfCommission) {
    const factor = isHalfCommission ? 0.5 : 1;
    const minFee = calculateCommission(0, isHalfCommission);
    const rate = 0.0035 * 1.05 * factor;
    return Math.max(acquisitionCost + minFee, acquisitionCost / (1 - rate));
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
    const sharesInput = document.getElementById("purificationShares") || document.getElementById("shares");
    const shares = Number(sharesInput.value);
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

    const company = allCompanies[companyIndex];
    const purificationAmount = shares * company.ratio;

    document.getElementById("companyCode").textContent = company.code;
    document.getElementById("companyName").textContent = company.arName + " / " + company.name;

    purificationResult.classList.remove("hidden", "sharia-compliant", "sharia-not-compliant", "neutral");

    if (company.compliant) {
        purificationTitle.textContent = "الشركة متوافقة شرعًا";
        document.getElementById("shariaStatus").textContent = "متوافقة شرعًا";
        document.getElementById("purificationRatio").textContent = company.ratio.toLocaleString("en-US", { minimumFractionDigits: 5, maximumFractionDigits: 7 }) + " ر.ع لكل سهم";
        document.getElementById("purificationAmount").textContent = purificationAmount.toLocaleString("en-US", { minimumFractionDigits: 3, maximumFractionDigits: 7 }) + " ر.ع";
        purificationResult.classList.add("sharia-compliant");
    } else {
        purificationTitle.textContent = "الشركة غير مدرجة في قائمة التوافق الشرعي";
        document.getElementById("shariaStatus").textContent = "غير مدرجة في القائمة";
        document.getElementById("purificationRatio").textContent = "غير متاحة";
        document.getElementById("purificationAmount").textContent = "غير متاح";
        purificationResult.classList.add("sharia-not-compliant");
    }
}

function calculateBreakeven() {
    const oldShares = Number(document.getElementById("oldShares").value);
    const oldPrice = Number(document.getElementById("oldPrice").value);
    const newShares = Number(document.getElementById("newShares").value);
    const newPrice = Number(document.getElementById("newPrice").value);
    const resultBox = document.getElementById("breakevenResult");

    if (!Number.isSafeInteger(oldShares) || oldShares <= 0 ||
        !Number.isSafeInteger(newShares) || newShares <= 0 ||
        !Number.isFinite(oldPrice) || oldPrice <= 0 ||
        !Number.isFinite(newPrice) || newPrice <= 0) {
        resultBox.classList.add("hidden");
        alert("يرجى إدخال عدد الأسهم بأعداد صحيحة والأسعار بقيم موجبة");
        return;
    }

    const totalShares = oldShares + newShares;
    const totalCostOMR = oldShares * oldPrice + newShares * newPrice;
    if (!Number.isSafeInteger(totalShares) || !Number.isFinite(totalCostOMR)) {
        resultBox.classList.add("hidden");
        alert("يرجى إدخال قيم ضمن النطاق المسموح");
        return;
    }
    const isHalfCommission = document.getElementById("breakevenHalfCommission").checked;
    // Existing break-even includes a hypothetical sale fee; remove it before
    // adding the new purchase and recomputing one sale fee for all shares.
    const oldSaleAmount = oldShares * oldPrice;
    const newAmount = newShares * newPrice;
    const oldAcquisitionCost = oldSaleAmount - calculateCommission(oldSaleAmount, isHalfCommission);
    if (oldAcquisitionCost <= 0) {
        resultBox.classList.add("hidden");
        alert("سعر التعادل الحالي منخفض جدًا مقارنة بعمولة البيع المقدّرة");
        return;
    }
    const baseCost = oldAcquisitionCost + newAmount;
    const buyFees = calculateCommission(newAmount, isHalfCommission);
    const acquisitionCost = baseCost + buyFees;
    const saleAmount = calculateBreakevenSaleAmount(acquisitionCost, isHalfCommission);
    if (!Number.isFinite(saleAmount)) {
        resultBox.classList.add("hidden");
        alert("يرجى إدخال قيم ضمن النطاق المسموح");
        return;
    }
    const sellFee = calculateCommission(saleAmount, isHalfCommission);
    const breakevenPrice = saleAmount * 1000 / totalShares;
    const formatBaisa = value => value.toLocaleString("en-US", { maximumFractionDigits: 6 }) + " بيسة";
    const omrText = (breakevenPrice / 1000).toLocaleString("en-US", {
        minimumFractionDigits: 3, maximumFractionDigits: 9
    });

    document.getElementById("breakevenTotalShares").textContent = totalShares.toLocaleString("en-US");
    document.getElementById("breakevenTotalCost").textContent = formatOMR(baseCost);
    document.getElementById("breakevenAverage").textContent = formatBaisa(totalCostOMR * 1000 / totalShares);
    document.getElementById("breakevenBuyFees").textContent = formatOMR(buyFees);
    document.getElementById("breakevenSellFee").textContent = formatOMR(sellFee);
    document.getElementById("breakevenPrice").textContent = formatBaisa(breakevenPrice);
    document.getElementById("breakevenPriceOMR").textContent = omrText + " ر.ع";
    resultBox.classList.remove("hidden");
}
