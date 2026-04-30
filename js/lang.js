let translations = {}

async function loadtranslations() {
    try {
        const response = await fetch('Lang.json')
        translations = await response.json()

        const movcuddil = localStorage.getItem('lang')
        changeLang(movcuddil)
    }
    catch (error) {
        console.log("Xeta Bas Verdi")
    }
}

function changeLang(lang) {
    const elements = document.querySelectorAll('[data-key]')

    elements.forEach(item => {
        const key = item.getAttribute('data-key')

        if (translations[lang] && translations[lang][key]) {
            item.textContent = translations[lang][key]
        }
    })
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
}

loadtranslations()