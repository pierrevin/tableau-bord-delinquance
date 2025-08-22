# 🤖 Guide d'Activation de l'Intelligence Artificielle

## 📋 État Actuel

L'IA est actuellement **désactivée** pour la version statique (GitHub Pages). Le code est conservé pour un déploiement futur.

## 🚀 Comment Activer l'IA

### Option 1 : Déploiement Simple (Recommandé)

1. **Créer une API sur Render** (gratuit) :
   - Créer un compte sur [render.com](https://render.com)
   - Créer un nouveau "Web Service"
   - Connecter votre repository GitHub
   - Configurer :
     - **Build Command** : `pip install -r requirements.txt`
     - **Start Command** : `python api_analyze.py`
     - **Environment Variables** : `OPENAI_API_KEY=votre_clé_openai`

2. **Modifier `config.js`** :
   ```javascript
   production: {
       enabled: true, // Changer à true
       apiUrl: 'https://votre-app.onrender.com/api/analyze' // Votre URL Render
   }
   ```

3. **Redéployer le site** sur GitHub Pages

### Option 2 : Déploiement Local

1. **Installer les dépendances** :
   ```bash
   pip install -r requirements.txt
   ```

2. **Configurer la clé OpenAI** :
   ```bash
   export OPENAI_API_KEY=votre_clé_openai
   ```

3. **Lancer l'API** :
   ```bash
   python api_analyze.py
   ```

4. **Modifier `config.js`** :
   ```javascript
   enabled: true, // Changer à true
   ```

## 🔧 Configuration Détaillée

### Variables d'Environnement Requises

- `OPENAI_API_KEY` : Votre clé API OpenAI

### Endpoints API

- `POST /api/analyze` : Analyse IA des données

### Format des Données

L'API attend un JSON avec :
```json
{
  "communeName": "Saint-Paul-sur-Save",
  "population": 1574,
  "period": "2020-2024",
  "infractionType": "Toutes les infractions",
  "totalInfractions": 105,
  "ratePer1000": 66.7,
  "evolutionPercent": -5.2,
  "vsSimilarPercent": 12.3,
  "vsComparedPercent": -8.1,
  "comparedCommune": "Aigrefeuille",
  "similarCommunes": ["Commune1", "Commune2"],
  "earliestYear": 2020,
  "latestYear": 2024
}
```

## 🌐 Services d'Hébergement Recommandés

### Gratuits
- **Render** : Simple, gratuit, support Python
- **Railway** : Rapide, gratuit, bonne performance
- **Fly.io** : Performant, gratuit, global

### Payants (si besoin)
- **Heroku** : Classique, payant
- **AWS Lambda** : Serverless, pay-per-use
- **Google Cloud Functions** : Serverless, pay-per-use

## 🔒 Sécurité

- ✅ La clé OpenAI reste côté serveur
- ✅ CORS configuré pour votre domaine
- ✅ Validation des données d'entrée
- ✅ Gestion d'erreurs robuste

## 📊 Monitoring

L'API inclut :
- Logs des requêtes
- Métriques d'utilisation
- Gestion des erreurs
- Timeout configuré

## 🚨 Dépannage

### Erreur CORS
- Vérifier que l'URL dans `config.js` est correcte
- S'assurer que l'API autorise votre domaine

### Erreur OpenAI
- Vérifier que `OPENAI_API_KEY` est configurée
- Vérifier le solde de votre compte OpenAI

### Erreur 500
- Vérifier les logs de l'API
- S'assurer que toutes les dépendances sont installées

## 📞 Support

Pour toute question :
1. Vérifier les logs de l'API
2. Tester l'endpoint directement
3. Vérifier la configuration dans `config.js`
