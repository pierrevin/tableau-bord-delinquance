// Configuration pour l'Intelligence Artificielle
// Modifier ces valeurs pour activer/désactiver l'IA

const AI_CONFIG = {
    // Activer/désactiver l'IA
    enabled: false,
    
    // URL de l'API IA
    // Pour GitHub Pages (statique) : laisser false
    // Pour déploiement avec API : mettre true et configurer l'URL
    apiUrl: 'http://localhost:5001/api/analyze',
    
    // Configuration alternative pour déploiement
    production: {
        enabled: false,
        apiUrl: 'https://votre-api.onrender.com/api/analyze' // À remplacer par votre URL d'API
    }
};

// Fonction pour obtenir la configuration selon l'environnement
function getAIConfig() {
    // Détecter si on est en production (GitHub Pages, Netlify, etc.)
    const isProduction = window.location.hostname !== 'localhost' && 
                        window.location.hostname !== '127.0.0.1';
    
    if (isProduction && AI_CONFIG.production.enabled) {
        return AI_CONFIG.production;
    }
    
    return {
        enabled: AI_CONFIG.enabled,
        apiUrl: AI_CONFIG.apiUrl
    };
}

// Instructions pour activer l'IA :
// 1. Créer une API sur Render/Railway/Fly.io avec api_analyze.py
// 2. Configurer la variable d'environnement OPENAI_API_KEY
// 3. Mettre à jour production.apiUrl avec votre URL d'API
// 4. Mettre production.enabled = true
// 5. Redéployer le site
