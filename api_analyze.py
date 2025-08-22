from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
from datetime import datetime
import json
from dotenv import load_dotenv

# Charger les variables d'environnement depuis .env
load_dotenv()

app = Flask(__name__)
CORS(app)  # Permettre les requêtes cross-origin

# Configuration OpenAI
openai.api_key = os.getenv('OPENAI_API_KEY', 'your-api-key-here')

@app.route('/api/analyze', methods=['POST'])
def analyze():
    try:
        data = request.json
        
        # Préparer le prompt optimisé
        prompt = create_optimized_prompt(data)
        
        # Appel à OpenAI
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {
                    "role": "system",
                    "content": """Tu es un expert en criminologie et analyse territoriale spécialisé dans l'analyse de la délinquance en France. 
                    
Ton expertise couvre :
- L'analyse des tendances criminelles territoriales
- Les facteurs socio-économiques et géographiques
- Les bonnes pratiques de prévention
- Les recommandations opérationnelles pour les collectivités

Tu dois fournir des analyses :
- Factuelles et basées sur les données
- Contextualisées géographiquement et temporellement
- Actionnables pour les décideurs locaux
- Nuancées et évitant les généralisations hâtives

Format de réponse : Analyse structurée avec sections claires."""
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.3,
            max_tokens=800
        )
        
        # Log de l'utilisation
        log_analysis(data, response.usage)
        
        return jsonify({
            'success': True,
            'content': response.choices[0].message.content,
            'model': 'gpt-4',
            'usage': {
                'prompt_tokens': response.usage.prompt_tokens,
                'completion_tokens': response.usage.completion_tokens,
                'total_tokens': response.usage.total_tokens
            }
        })
        
    except Exception as e:
        print(f"Erreur lors de l'analyse IA: {str(e)}")
        return jsonify({
            'success': False,
            'error': str(e),
            'fallback': True
        }), 500

def create_optimized_prompt(data):
    """Créer un prompt optimisé pour l'analyse criminologique"""
    
    # Formatage des données
    commune_name = data.get('communeName', 'Commune inconnue')
    population = data.get('population', 0)
    period = data.get('period', 'Période non spécifiée')
    infraction_type = data.get('infractionType', 'Toutes les infractions')
    
    total_infractions = data.get('totalInfractions', 0)
    rate_per_1000 = data.get('ratePer1000', 0)
    evolution_percent = data.get('evolutionPercent', 0)
    vs_similar_percent = data.get('vsSimilarPercent', 0)
    vs_compared_percent = data.get('vsComparedPercent', 0)
    
    similar_communes = data.get('similarCommunes', [])
    compared_commune = data.get('comparedCommune', None)
    
    # Construction du prompt
    prompt = f"""
ANALYSE CRIMINOLOGIQUE TERRITORIALE

CONTEXTE GÉOGRAPHIQUE :
- Commune analysée : {commune_name} ({population:,} habitants)
- Département : Haute-Garonne (31)
- Période d'analyse : {period}
- Type d'infraction : {infraction_type}

INDICATEURS CLÉS :
- Nombre total d'infractions : {total_infractions}
- Taux pour 1000 habitants : {rate_per_1000:.1f}‰
- Évolution temporelle : {evolution_percent:+.1f}%
- Position vs communes similaires : {vs_similar_percent:+.1f}%
{f"- Comparaison avec {compared_commune} : {vs_compared_percent:+.1f}%" if compared_commune else ""}

COMMUNES SIMILAIRES (même taille démographique) :
{', '.join(similar_communes[:5]) if similar_communes else 'Aucune donnée'}

MISSION :
Produis une analyse experte structurée incluant :

1. 📊 DIAGNOSTIC DE LA SITUATION
   - Évaluation du niveau de délinquance
   - Positionnement relatif dans le territoire
   - Tendances significatives

2. 🔍 FACTEURS EXPLICATIFS
   - Éléments géographiques (proximité Toulouse, ruralité/urbanité)
   - Facteurs socio-économiques possibles
   - Contexte territorial spécifique

3. 📈 ANALYSE DES TENDANCES
   - Interprétation de l'évolution temporelle
   - Comparaison avec les communes similaires
   - Signification des variations

4. 💡 RECOMMANDATIONS OPÉRATIONNELLES
   - Actions prioritaires pour les élus
   - Mesures de prévention adaptées
   - Suivi et évaluation

5. 🎯 POINTS D'ATTENTION
   - Risques identifiés
   - Opportunités d'amélioration
   - Indicateurs à surveiller

Style : Professionnel, factuel, actionnable. Évite les généralisations. Base tes analyses sur les données fournies.
"""
    
    return prompt

def log_analysis(data, usage):
    """Logger l'utilisation de l'API pour le suivi"""
    log_entry = {
        'timestamp': datetime.now().isoformat(),
        'commune': data.get('communeName'),
        'period': data.get('period'),
        'tokens_used': usage.total_tokens,
        'cost_estimate': usage.total_tokens * 0.00003  # Estimation coût GPT-4
    }
    
    try:
        with open('ai_analysis_log.json', 'a') as f:
            f.write(json.dumps(log_entry) + '\n')
    except:
        pass  # Ignorer les erreurs de logging

@app.route('/api/health', methods=['GET'])
def health_check():
    """Endpoint de santé pour vérifier que l'API fonctionne"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'openai_configured': bool(openai.api_key and openai.api_key != 'your-api-key-here')
    })

if __name__ == '__main__':
    # Vérifier la configuration
    if not openai.api_key or openai.api_key == 'your-api-key-here':
        print("⚠️  ATTENTION: Clé API OpenAI non configurée!")
        print("   Définissez la variable d'environnement OPENAI_API_KEY")
        print("   ou modifiez directement la clé dans le code")
    
    print("🚀 Serveur d'analyse IA démarré sur http://localhost:5001")
    print("   Endpoint: POST /api/analyze")
    print("   Health check: GET /api/health")
    
    app.run(host='0.0.0.0', port=5001, debug=True)
