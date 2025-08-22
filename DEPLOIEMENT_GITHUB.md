# 🚀 Guide de Déploiement GitHub Pages

## 📋 Prérequis

- Compte GitHub
- Git installé sur votre machine
- Les fichiers du projet prêts

## 🔧 Étapes de Déploiement

### 1. Créer un Repository GitHub

1. Aller sur [github.com](https://github.com)
2. Cliquer sur "New repository"
3. Nommer le repository : `tableau-bord-delinquance` (ou autre nom)
4. Choisir "Public" (pour GitHub Pages gratuit)
5. **Ne pas** initialiser avec README (nous avons déjà nos fichiers)
6. Cliquer "Create repository"

### 2. Pousser le Code

```bash
# Dans le dossier du projet
git init
git add .
git commit -m "Initial commit - Tableau de bord délinquance"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/tableau-bord-delinquance.git
git push -u origin main
```

### 3. Activer GitHub Pages

1. Aller dans votre repository GitHub
2. Cliquer sur "Settings" (onglet)
3. Scroller jusqu'à "Pages" (section)
4. Dans "Source", sélectionner "Deploy from a branch"
5. Dans "Branch", sélectionner "main" et "/ (root)"
6. Cliquer "Save"

### 4. Vérifier le Déploiement

- Attendre 2-5 minutes
- Votre site sera disponible à : `https://VOTRE_USERNAME.github.io/tableau-bord-delinquance/`

## 📁 Structure des Fichiers

```
tableau-bord-delinquance/
├── dashboard_schema_utilisateur.html  # Page principale
├── theme.css                          # Styles
├── theme-init.js                      # Interactions
├── config.js                          # Configuration IA
├── dashboard_haute_garonne.json       # Données
├── communes_haute_garonne_mapping.json
├── georef-france-commune.geojson
├── metadata_dashboard.json
├── api_analyze.py                     # API IA (pour futur)
├── requirements.txt                   # Dépendances Python
├── README.md                          # Documentation
├── README_IA.md                       # Guide IA
├── ACTIVATION_IA.md                   # Guide activation IA
├── METHODOLOGIE_CALCULS.md            # Méthodologie
├── GUIDE_TABLEAU_BORD_AVANCE.md       # Guide avancé
├── CLEANUP.md                         # Documentation nettoyage
├── DEPLOIEMENT_GITHUB.md              # Ce guide
└── .gitignore                         # Exclusion fichiers
```

## 🌐 URL Finale

Votre tableau de bord sera accessible à :
```
https://VOTRE_USERNAME.github.io/tableau-bord-delinquance/
```

## 🔄 Mises à Jour

Pour mettre à jour le site :

```bash
git add .
git commit -m "Mise à jour du tableau de bord"
git push origin main
```

GitHub Pages se met à jour automatiquement en 2-5 minutes.

## 🎯 Fonctionnalités Disponibles

### ✅ Fonctionnel (Version Statique)
- 📊 Tableau de bord interactif
- 🗺️ Carte interactive
- 📈 Graphiques et visualisations
- 🔍 Filtres et comparaisons
- 📋 Données brutes
- ℹ️ Méthodologie

### 🔒 Masqué (Pour Futur)
- 🤖 Analyse IA (code conservé)
- 📊 Insights intelligents

## 🛠️ Personnalisation

### Changer le Nom du Repository

Si vous voulez un nom différent :
1. Renommer le repository dans GitHub Settings
2. L'URL changera automatiquement

### Domaine Personnalisé

Pour un domaine personnalisé :
1. Acheter un domaine (OVH, Namecheap, etc.)
2. Dans GitHub Pages Settings, ajouter le domaine
3. Configurer les DNS selon les instructions GitHub

## 🚨 Dépannage

### Site ne s'affiche pas
- Vérifier que GitHub Pages est activé
- Attendre 5-10 minutes pour le premier déploiement
- Vérifier les logs dans l'onglet "Actions"

### Erreur 404
- Vérifier que `dashboard_schema_utilisateur.html` est à la racine
- Vérifier que le fichier s'appelle exactement comme ça

### Erreur de chargement des données
- Vérifier que tous les fichiers JSON sont présents
- Vérifier les chemins dans le code HTML

## 📞 Support

- **GitHub Pages** : [Documentation officielle](https://pages.github.com/)
- **Problèmes techniques** : Vérifier les logs dans l'onglet "Actions" du repository

## 🎉 Félicitations !

Votre tableau de bord est maintenant en ligne et accessible à tous !
