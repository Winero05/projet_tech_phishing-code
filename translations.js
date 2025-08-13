// Système de traductions multilingues
const translations = {
    fr: {
        // Header
        hero_title: "Protection Anti-Phishing Intelligente",
        hero_subtitle: "Détectez et prévenez les attaques de phishing avec notre technologie avancée",
        accuracy_rate: "Taux de précision",
        scans_done: "Analyses effectuées",
        monitoring: "Surveillance",
        
        // Navigation
        url_scan: "Scan URL",
        file_scan: "Scan Fichier",
        url_scan_title: "Vérifier un lien suspect",
        file_scan_title: "Vérifier un fichier",
        url_placeholder: "Entrez l'URL à vérifier...",
        file_drop_text: "Glissez-déposez votre fichier ici ou cliquez pour sélectionner",
        analyze: "Analyser",
        scan_file: "Scanner le fichier",
        
        // Éducation
        education_title: "Sensibilisation à la Cybersécurité",
        what_is_phishing: "Qu'est-ce que le phishing ?",
        phishing_description: "Le phishing est un type d’attaque d’ingénierie sociale dans laquelle un cybercriminel en se faisant passer pour une personne de confiance utilise des e-mails ou d’autres messages textuels pour voler des informations sensibles tel que les informations personnelles, les données bancaires et les données  des entreprises.",
        warning_signs: "Signes d'alerte",
        warning_1: "Liens de dons gratuits sur les réseaux sociaux",
        warning_2: "Erreurs d'orthographe ou de grammaire",
        warning_3: "Sentiment d'urgence ou de menace",
        warning_4: "Liens suspects ou domaines inconnus",
        best_practices: "Bonnes pratiques",
        tip_1_title: "Vérifiez les liens",
        tip_1_desc: "Survolez les liens sans cliquer pour voir la vraie destination",
        tip_2_title: "Protégez vos identifiants",
        tip_2_desc: "Ne donnez jamais vos mots de passe par email",
        emergency_title: "En cas d'attaque",
        emergency_1: "Changez immédiatement vos mots de passe",
        emergency_2: "Contactez votre banque si nécessaire",
        emergency_3: "Signalez au CERT https://cert.tg/ "  ,
        emergency_4: "Analysez votre système",
        
        // Chatbot
        chatbot_title: "Assistant Cybersécurité",
        chatbot_welcome: "Bonjour ! Je suis votre assistant cybersécurité. Comment puis-je vous aider aujourd'hui ?",
        chatbot_placeholder: "Posez votre question...",
        
        // Footer
        contact: "Contact",
        resources: "Ressources",
        privacy: "Confidentialité",
        terms: "Conditions",
        all_rights: "Tous droits réservés",
        full_report: "Rapport complet"
    },
    
    en: {
        hero_title: "Intelligent Anti-Phishing Protection",
        hero_subtitle: "Detect and prevent phishing attacks with our advanced technology",
        accuracy_rate: "Accuracy Rate",
        scans_done: "Scans Completed",
        monitoring: "Monitoring",
        url_scan: "URL Scan",
        file_scan: "File Scan",
        url_scan_title: "Check a suspicious link",
        file_scan_title: "Check a file",
        url_placeholder: "Enter URL to check...",
        file_drop_text: "Drag and drop your file here or click to select",
        analyze: "Analyze",
        scan_file: "Scan File",
        education_title: "Cybersecurity Awareness",
        what_is_phishing: "What is phishing?",
        phishing_description: "Phishing is a type of social engineering attack in which a cybercriminal, posing as a trusted person, uses emails or other text messages to steal sensitive information such as personal information, banking data, and company data.",
        warning_signs: "Warning Signs",
        warning_1: "Free donation links on social media",
        warning_2: "Spelling or grammar errors",
        warning_3: "Sense of urgency or threat",
        warning_4: "Suspicious links or unknown domains",
        best_practices: "Best Practices",
        tip_1_title: "Check links",
        tip_1_desc: "Hover over links without clicking to see the real destination",
        tip_2_title: "Protect your credentials",
        tip_2_desc: "Never give your passwords by email",
        emergency_title: "In case of attack",
        emergency_1: "Change your passwords immediately",
        emergency_2: "Contact your bank if necessary",
        emergency_3: "Report to CERT https://www.cert.tg",
        emergency_4: "Scan your system",
        chatbot_title: "Cybersecurity Assistant",
        chatbot_welcome: "Hello! I'm your cybersecurity assistant. How can I help you today?",
        chatbot_placeholder: "Ask your question...",
        contact: "Contact",
        resources: "Resources",
        privacy: "Privacy",
        terms: "Terms",
        all_rights: "All rights reserved",
        full_report: "Full Report"
    },
    
    ewe: {
        hero_title: "Nunya ƒe Ametakpɔkpɔ Tsi Tre Ðe Fishing Ŋu",
        hero_subtitle: "De dzesi amedzidzedze siwo nye ameflunyawo eye nàxe mɔ ɖe enu kple míaƒe mɔ̃ɖaŋununya deŋgɔ",
        accuracy_rate: "Kpɔɖeŋu",
        scans_done: "Kpɔɖeŋuwo",
        monitoring: "Kpɔɖeŋu",
        url_scan: "URL Kpɔɖeŋu",
        file_scan: "File Kpɔɖeŋu",
        url_scan_title: "Kpɔ URL aɖe",
        file_scan_title: "Kpɔ file aɖe",
        url_placeholder: "Ɖe URL si wòdi be wòkpɔ...",
        file_drop_text: "Ɖe file wò ƒo eye wòdi be wòkpɔ",
        analyze: "Kpɔɖeŋu",
        scan_file: "Kpɔ File",
        education_title: "Cybersecurity ƒe ƒuƒoƒo",
        what_is_phishing: "Nukae nye ameflunyawo?",
        phishing_description: "Fishing nye hadomenuwɔnawo ƒe amedzidzedze ƒomevi aɖe si me Internet dzi nuvlowɔla, si wɔ eɖokui abe amesi dzi woka ɖo ene, zãa e-mail alo nyatakaka bubuwo tsɔ fia nyatakaka veviwo abe ame ŋutɔ ƒe nyatakakawo, gadzraɖoƒe ŋuti nyatakakawo, kple dɔwɔƒea ƒe nyatakakawo ene.",
        warning_signs: "Kpɔɖeŋu ƒe ƒuƒoƒo",
        warning_1: "Nudzɔdzɔ ƒe kadodowo femaxee le hadomenyatakakadzraɖoƒewo",
        warning_2: "Ŋɔŋlɔ alo gbeŋutise ƒe vodadawo",
        warning_3: "Kpata alo ŋɔdzidoname ƒe seselelãme",
        warning_4: "Kadodo siwo ŋu ɖikeke le alo domenyiŋusẽfianu siwo womenya o",
        best_practices: "Nuwɔna nyuitɔwo kekeake",
        tip_1_title: "Kpɔ kadodoawo ɖa",
        tip_1_desc: "Tsɔ asi ƒo ɖe kadodoawo dzi evɔ màzi edzi be nàkpɔ afi si nèyina ŋutɔŋutɔ o",
        tip_2_title: "Ta wò ɖaseɖigbalẽwo ta",
        tip_2_desc: "Mègatsɔ wò nyagbewo ana to e-mail dzi gbeɖe o",
        emergency_title: "Ne amedzidzedze aɖe dzɔ",
        emergency_1: "Trɔ wò nyagbewo enumake",
        emergency_2: "Te ɖe wò gadzraɖoƒe ŋu ne ehiã",
        emergency_3: "Nyatakaka na CERT https://cert.tg/",
        emergency_4: "Dzro wò ɖoɖoa me",
        chatbot_title: "Cybersecurity Assistant",
        chatbot_welcome: "Hello! I'm your cybersecurity assistant. How can I help you today?",
        chatbot_placeholder: "Ask your question...",
        contact: "Contact",
        resources: "Resources",
        privacy: "Privacy",
        terms: "Terms",
        all_rights: "All rights reserved",
        full_report: "Full Report"
    },
    
   /* kab: {
        hero_title: "Phishing ƒoƒo ƒe ƒuƒoƒo",
        hero_subtitle: "Kpɔe eye woƒo phishing ƒe ƒoƒo ƒe ƒuƒoƒo",
        accuracy_rate: "Kpɔɖeŋu",
        scans_done: "Kpɔɖeŋuwo",
        monitoring: "Kpɔɖeŋu",
        url_scan: "URL Kpɔɖeŋu",
        file_scan: "File Kpɔɖeŋu",
        url_scan_title: "Kpɔ URL aɖe",
        file_scan_title: "Kpɔ file aɖe",
        url_placeholder: "Ɖe URL si wòdi be wòkpɔ...",
        file_drop_text: "Ɖe file wò ƒo eye wòdi be wòkpɔ",
        analyze: "Kpɔɖeŋu",
        scan_file: "Kpɔ File",
        education_title: "Cybersecurity ƒe ƒuƒoƒo",
        what_is_phishing: "Nye nye phishing?",
        phishing_description: "Phishing nye ƒoƒo ƒe ƒuƒoƒo si woƒo be woƒo woƒo ƒe ƒuƒoƒo",
        warning_signs: "Kpɔɖeŋu ƒe ƒuƒoƒo",
        warning_1: "Free donation links on social media",
        warning_2: "Spelling or grammar errors",
        warning_3: "Sense of urgency or threat",
        warning_4: "Suspicious links or unknown domains",
        best_practices: "Best Practices",
        tip_1_title: "Check links",
        tip_1_desc: "Hover over links without clicking to see the real destination",
        tip_2_title: "Protect your credentials",
        tip_2_desc: "Never give your passwords by email",
        emergency_title: "In case of attack",
        emergency_1: "Change your passwords immediately",
        emergency_2: "Contact your bank if necessary",
        emergency_3: "Report to CERT (https://cert.tg/)",
        emergency_4: "Scan your system",
        chatbot_title: "Cybersecurity Assistant",
        chatbot_welcome: "Hello! I'm your cybersecurity assistant. How can I help you today?",
        chatbot_placeholder: "Ask your question...",
        contact: "Contact",
        resources: "Resources",
        privacy: "Privacy",
        terms: "Terms",
        all_rights: "All rights reserved",
        full_report: "Full Report"
    }*/
};

// Fonction pour changer de langue
function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    updateTranslations();
}

// Fonction pour mettre à jour les traductions
function updateTranslations() {
    const lang = localStorage.getItem('language') || 'fr';
    const currentTranslations = translations[lang];
    
    // Mettre à jour tous les éléments avec data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (currentTranslations[key]) {
            element.textContent = currentTranslations[key];
        }
    });
    
    // Mettre à jour les placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (currentTranslations[key]) {
            element.placeholder = currentTranslations[key];
        }
    });
}

// Initialiser les traductions au chargement
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'fr';
    document.getElementById('languageSelect').value = savedLang;
    updateTranslations();
});
