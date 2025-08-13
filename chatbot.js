// Chatbot Cybersécurité
class CybersecurityChatbot {
    constructor() {
        this.messages = [];
        this.isOpen = false;
        this.init();
    }

    init() {
        this.bindEvents();
        this.addWelcomeMessage();
    }

    bindEvents() {
        // Gestion de l'input
        const input = document.getElementById('chatbotInput');
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }

        // Gestion du drag & drop pour les fichiers
        const fileDropZone = document.getElementById('fileDropZone');
        if (fileDropZone) {
            fileDropZone.addEventListener('dragover', (e) => {
                e.preventDefault();
                fileDropZone.classList.add('drag-over');
            });

            fileDropZone.addEventListener('dragleave', () => {
                fileDropZone.classList.remove('drag-over');
            });

            fileDropZone.addEventListener('drop', (e) => {
                e.preventDefault();
                fileDropZone.classList.remove('drag-over');
                const files = e.dataTransfer.files;
                if (files.length > 0) {
                    document.getElementById('fileInput').files = files;
                    this.updateFileInput();
                }
            });

            fileDropZone.addEventListener('click', () => {
                document.getElementById('fileInput').click();
            });
        }

        // Gestion du changement de fichier
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.addEventListener('change', () => {
                this.updateFileInput();
            });
        }
    }

    updateFileInput() {
        const fileInput = document.getElementById('fileInput');
        const fileScanBtn = document.getElementById('fileScanBtn');
        const fileDropZone = document.getElementById('fileDropZone');
        
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            fileScanBtn.disabled = false;
            fileDropZone.innerHTML = `
                <i class="fas fa-file-alt"></i>
                <p>${file.name}</p>
                <small>${this.formatFileSize(file.size)}</small>
            `;
        } else {
            fileScanBtn.disabled = true;
            fileDropZone.innerHTML = `
                <i class="fas fa-cloud-upload-alt"></i>
                <p data-translate="file_drop_text">Glissez-déposez votre fichier ici ou cliquez pour sélectionner</p>
            `;
        }
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    addWelcomeMessage() {
        const welcomeMessage = {
            type: 'bot',
            content: this.getTranslation('chatbot_welcome') || 'Bonjour ! Je suis votre assistant cybersécurité. Comment puis-je vous aider aujourd\'hui ?'
        };
        this.addMessage(welcomeMessage);
    }

    sendMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input.value.trim();
        
        if (message) {
            // Ajouter le message utilisateur
            this.addMessage({
                type: 'user',
                content: message
            });

            // Simuler la réponse du bot
            setTimeout(() => {
                const response = this.generateResponse(message);
                this.addMessage({
                    type: 'bot',
                    content: response
                });
            }, 1000);

            input.value = '';
        }
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Réponses prédéfinies
        const responses = {
            'phishing': 'Le phishing est une technique frauduleuse utilisée par les cybercriminels pour voler vos informations personnelles. Ils se font passer pour des entités de confiance comme votre banque ou un service en ligne.',
            'mot de passe': 'Pour protéger vos mots de passe : utilisez des mots de passe forts et uniques, activez l\'authentification à deux facteurs, et ne les partagez jamais.',
            'virus': 'Pour éviter les virus : gardez votre système à jour, utilisez un antivirus, ne téléchargez que depuis des sources fiables, et méfiez-vous des pièces jointes.',
            'email': 'Pour sécuriser vos emails : vérifiez l\'expéditeur, ne cliquez pas sur des liens suspects, ne téléchargez pas de pièces jointes inattendues.',
            'réseaux sociaux': 'Sur les réseaux sociaux : ajustez vos paramètres de confidentialité, ne partagez pas d\'informations sensibles, méfiez-vous des demandes d\'amis inconnus.',
            'banque': 'Pour la sécurité bancaire : utilisez uniquement les sites officiels de votre banque, vérifiez l\'URL, ne partagez jamais vos codes d\'accès.',
            'aide': 'Je peux vous aider avec : la sécurité des mots de passe, la protection contre les virus, la sécurité des emails, la protection sur les réseaux sociaux, et la sécurité bancaire.',
            'scan': 'Pour scanner un lien ou un fichier suspect, utilisez les outils de scan en haut de la page. Ils analyseront le contenu pour détecter les menaces.',
            'urgence': 'En cas d\'urgence : changez immédiatement vos mots de passe, contactez votre banque si nécessaire, signalez l\'incident au CERT, , et analysez votre système.'
        };

        // Chercher une réponse appropriée
        for (const [keyword, response] of Object.entries(responses)) {
            if (lowerMessage.includes(keyword)) {
                return response;
            }
        }

        // Réponse par défaut
        return 'Je ne comprends pas votre question. Pouvez-vous reformuler ou me poser une question sur la cybersécurité, les mots de passe, les virus, les emails, ou la sécurité bancaire ?';
    }

    addMessage(message) {
        this.messages.push(message);
        this.displayMessage(message);
    }

    displayMessage(message) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.type}-message`;
        
        messageElement.innerHTML = `
            <div class="message-content">
                <p>${message.content}</p>
            </div>
        `;
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    getTranslation(key) {
        const lang = localStorage.getItem('language') || 'fr';
        const translations = window.translations || {};
        return translations[lang]?.[key] || '';
    }
}

// Fonctions utilitaires
function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    const notificationBadge = document.getElementById('notificationBadge');
    
    if (chatbotWindow.classList.contains('open')) {
        chatbotWindow.classList.remove('open');
    } else {
        chatbotWindow.classList.add('open');
        notificationBadge.style.display = 'none';
    }
}

function switchTab(tabName) {
    // Masquer tous les tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Désactiver tous les boutons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activer le tab sélectionné
    document.getElementById(tabName + 'Tab').classList.add('active');
    event.target.classList.add('active');
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeIcon = document.querySelector('.theme-toggle i');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    }
}

// Initialiser le chatbot au chargement
document.addEventListener('DOMContentLoaded', () => {
    new CybersecurityChatbot();
    
    // Restaurer le thème
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.querySelector('.theme-toggle i').className = 'fas fa-sun';
    }
});
