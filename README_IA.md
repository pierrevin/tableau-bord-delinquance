# Configuration de l'Analyse IA

## 🚀 Installation et Configuration

### 1. Installation des dépendances
```bash
pip3 install -r requirements.txt
```

### 2. Configuration de la clé API OpenAI

#### Option A : Variable d'environnement (recommandée)
```bash
export OPENAI_API_KEY="sk-votre-cle-api-ici"
```

#### Option B : Fichier .env
Créez un fichier `.env` à la racine du projet :
```bash
# Configuration OpenAI
OPENAI_API_KEY=sk-votre-cle-api-ici

# Configuration du serveur
FLASK_ENV=development
FLASK_DEBUG=True
```

#### Option C : Modification directe du code
Dans `api_analyze.py`, ligne 12, remplacez :
```python
openai.api_key = os.getenv('OPENAI_API_KEY', 'your-api-key-here')
```
par :
```python
openai.api_key = 'sk-votre-cle-api-ici'
```

### 3. Obtenir une clé API OpenAI

1. Allez sur [platform.openai.com](https://platform.openai.com)
2. Créez un compte ou connectez-vous
3. Allez dans "API Keys"
4. Cliquez sur "Create new secret key"
5. Copiez la clé (commence par `sk-`)

⚠️ **Important** : Ne partagez jamais votre clé API publiquement !

### 4. Démarrer le serveur IA

```bash
python3 api_analyze.py
```

Le serveur démarre sur `http://localhost:5001`

### 5. Tester la configuration

```bash
curl http://localhost:5001/api/health
```

Vous devriez voir :
```json
{
  "status": "healthy",
  "openai_configured": true
}
```

## 💰 Coûts estimés

- **GPT-4** : ~$0.03 pour 1000 tokens
- **Analyse typique** : 500-800 tokens
- **Coût par analyse** : ~$0.015-0.024

## 🔧 Utilisation

1. Démarrez le serveur IA : `python3 api_analyze.py`
2. Démarrez le serveur web : `python3 -m http.server 8001`
3. Ouvrez le dashboard : `http://localhost:8001/dashboard_schema_utilisateur.html`
4. Cliquez sur "🤖 Lancer l'analyse IA"

## 📊 Logs d'utilisation

Les analyses sont loggées dans `ai_analysis_log.json` avec :
- Timestamp
- Commune analysée
- Période
- Tokens utilisés
- Coût estimé

## 🛠️ Dépannage

### Erreur "API key not found"
- Vérifiez que la clé API est correctement configurée
- Testez avec : `echo $OPENAI_API_KEY`

### Erreur "Rate limit exceeded"
- Attendez quelques minutes
- Vérifiez votre quota sur platform.openai.com

### Erreur de connexion
- Vérifiez que le serveur IA tourne sur le port 5001
- Testez : `curl http://localhost:5001/api/health`

