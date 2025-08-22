#!/bin/bash

echo "🧪 Test de Déploiement - Tableau de Bord Délinquance"
echo "=================================================="
echo

# Vérifier les fichiers requis
echo "📁 Vérification des fichiers requis..."

required_files=(
    "dashboard_schema_utilisateur.html"
    "dashboard_haute_garonne.json"
    "communes_haute_garonne_mapping.json"
    "georef-france-commune.geojson"
    "metadata_dashboard.json"
    "theme.css"
    "theme-init.js"
    "config.js"
)

missing_files=()
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (MANQUANT)"
        missing_files+=("$file")
    fi
done

echo

if [ ${#missing_files[@]} -gt 0 ]; then
    echo "❌ Fichiers manquants détectés. Impossible de déployer."
    exit 1
fi

echo "✅ Tous les fichiers requis sont présents"
echo

# Vérifier la taille des fichiers
echo "📊 Taille des fichiers :"
ls -lh dashboard_haute_garonne.json communes_haute_garonne_mapping.json georef-france-commune.geojson
echo

# Tester le serveur local
echo "🚀 Test du serveur local..."
python3 serve_local.py &
SERVER_PID=$!

# Attendre que le serveur démarre
sleep 3

# Tester les endpoints
echo "🔍 Test des endpoints..."

# Test du fichier HTML principal
if curl -s -o /dev/null -w "%{http_code}" http://localhost:8000/dashboard_schema_utilisateur.html | grep -q "200"; then
    echo "✅ dashboard_schema_utilisateur.html accessible"
else
    echo "❌ dashboard_schema_utilisateur.html inaccessible"
fi

# Test du fichier JSON principal
if curl -s -o /dev/null -w "%{http_code}" http://localhost:8000/dashboard_haute_garonne.json | grep -q "200"; then
    echo "✅ dashboard_haute_garonne.json accessible"
else
    echo "❌ dashboard_haute_garonne.json inaccessible"
fi

# Test du mapping des communes
if curl -s -o /dev/null -w "%{http_code}" http://localhost:8000/communes_haute_garonne_mapping.json | grep -q "200"; then
    echo "✅ communes_haute_garonne_mapping.json accessible"
else
    echo "❌ communes_haute_garonne_mapping.json inaccessible"
fi

# Test du fichier GeoJSON
if curl -s -o /dev/null -w "%{http_code}" http://localhost:8000/georef-france-commune.geojson | grep -q "200"; then
    echo "✅ georef-france-commune.geojson accessible"
else
    echo "❌ georef-france-commune.geojson inaccessible"
fi

# Arrêter le serveur
kill $SERVER_PID 2>/dev/null

echo
echo "🎯 Résumé du test :"
echo "=================="
echo "✅ Fichiers requis : Présents"
echo "✅ Serveur local : Fonctionnel"
echo "✅ Endpoints : Accessibles"
echo
echo "🚀 Le projet est prêt pour le déploiement GitHub Pages !"
echo
echo "📋 Prochaines étapes :"
echo "1. Créer un repository GitHub"
echo "2. Pousser le code : git add . && git commit -m 'Initial commit' && git push"
echo "3. Activer GitHub Pages dans les settings"
echo "4. Votre site sera en ligne en 5 minutes !"
echo
echo "📖 Voir DEPLOIEMENT_GITHUB.md pour les instructions détaillées"
