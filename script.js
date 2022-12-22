const EURviuw = document.querySelector('.eur')
const USDviuw = document.querySelector('.usd')
const eurInRub = document.querySelector('.eur-in-rub')
const eurInput = document.querySelector('.eur-input')
const usdInRub = document.querySelector('.usd-in-rub')
const usdInput = document.querySelector('.usd-input')
const KGSviuw = document.querySelector('.kgs')
const kgsInRub = document.querySelector('.kgs-in-rub')
const kgsInput = document.querySelector('.kgs-input')
const KZTviuw = document.querySelector('.kzt')
const kztInRub = document.querySelector('.kzt-in-rub')
const kztInput = document.querySelector('.kzt-input')
const INRviuw = document.querySelector('.inr')
const inrInRub = document.querySelector('.inr-in-rub')
const inrInput = document.querySelector('.inr-input')
const CNYviuw = document.querySelector('.cny')
const cnyInRub = document.querySelector('.cny-in-rub')
const cnyInput = document.querySelector('.cny-input')
const UZSviuw = document.querySelector('.uzs')
const uzsInRub = document.querySelector('.uzs-in-rub')
const uzsInput = document.querySelector('.uzs-input')


const valute = {
    EUR: "",
    USD: "",
    KGS: "",
    KZT: "",
    INR: "",
    CNY: "",
    UZS: "",
}

axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
    .then((res) => {
        valute.EUR = res.data.Valute.EUR.Value
        valute.USD = res.data.Valute.USD.Value
        EURviuw.textContent = valute.EUR
        USDviuw.textContent = valute.USD
        valute.KGS = res.data.Valute.KGS.Value
        KGSviuw.textContent = valute.KGS
        valute.KZT = res.data.Valute.KZT.Value
        KZTviuw.textContent = valute.KZT
        valute.INR = res.data.Valute.INR.Value
        INRviuw.textContent = valute.INR
        valute.CNY = res.data.Valute.CNY.Value
        CNYviuw.textContent = valute.CNY
        valute.UZS = res.data.Valute.UZS.Value
        UZSviuw.textContent = valute.UZS
    })

eurInput.addEventListener('change', () => {
    if (!Number.isInteger(+eurInput.value)) {
        eurInRub.textContent = "Вы ввели не число"
    } else if (eurInput.value === '') {
        eurInRub.textContent = 0
    } else {
        eurInRub.textContent = Math.round(+eurInput.value * valute.EUR) + " Руб"
    }
})

usdInput.addEventListener('change', () => {
    if (!Number.isInteger(+usdInput.value)) {
        usdInRub.textContent = "Вы ввели не число"
    } else if (usdInput.value === '') {
        usdInRub.textContent = 0
    } else {
        usdInRub.textContent = Math.round(+usdInput.value * valute.USD) + " Руб"
    }
})


kgsInput.addEventListener('change', () => {
    if (!Number.isInteger(+kgsInput.value)) {
        kgsInRub.textContent = "Вы ввели не число"
    } else if (kgsInput.value === '') {
        kgsInRub.textContent = 0
    } else {
        kgsInRub.textContent = Math.round(+kgsInput.value * valute.KGS) + " Руб"
    }
})


kztInput.addEventListener('change', () => {
    if (!Number.isInteger(+kztInput.value)) {
        kztInRub.textContent = "Вы ввели не число"
    } else if (kztInput.value === '') {
        kztInRub.textContent = 0
    } else {
        kztInRub.textContent = Math.round(+kztInput.value * valute.KZT) + " Руб"
    }
})

inrInput.addEventListener('change', () => {
    if (!Number.isInteger(+inrInput.value)) {
        inrInRub.textContent = "Вы ввели не число"
    } else if (inrInput.value === '') {
        inrInRub.textContent = 0
    } else {
        inrInRub.textContent = Math.round(+inrInput.value * valute.INR) + " Руб"
    }
})

cnyInput.addEventListener('change', () => {
    if (!Number.isInteger(+cnyInput.value)) {
        cnyInRub.textContent = "Вы ввели не число"
    } else if (cnyInput.value === '') {
        cnyInRub.textContent = 0
    } else {
        cnyInRub.textContent = Math.round(+cnyInput.value * valute.CNY) + " Руб"
    }
})

uzsInput.addEventListener('change', () => {
    if (!Number.isInteger(+uzsInput.value)) {
        uzsInRub.textContent = "Вы ввели не число"
    } else if (uzsInput.value === '') {
        uzsInRub.textContent = 0
    } else {
        uzsInRub.textContent = Math.round(+uzsInput.value * valute.UZS) + " Руб"
    }
})

function insert(num) {
    document.form.textView.value =
        document.form.textView.value + num;
}

function clean() {
    document.form.textView.value = "";
}


function back() {
    var exp = document.form.textView.value;
    document.form.textView.value = exp.substring(0, exp.lenght - 1);
}

function equal() {
    let exp = document.form.textView.value;
    if (exp) {
        document.form.textView.value = eval(exp);
    }
}