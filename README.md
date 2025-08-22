# 📊 Tableau de Bord - Délinquance Haute-Garonne

## 🎯 Objectif

Ce projet permet d'analyser et de comparer les données de délinquance dans la Haute-Garonne (31) avec un focus particulier sur Saint-Paul-sur-Save (31507). Il fournit un tableau de bord interactif pour visualiser les tendances et faire des comparaisons entre communes.

## 🌐 Accès en Ligne

**Votre tableau de bord est maintenant en ligne !**
```
https://pierrevin.github.io/tableau-bord-delinquance/
```

## 📁 Structure du Projet

### 🎨 Interface Utilisateur
- **`dashboard_schema_utilisateur.html`** - Tableau de bord principal interactif
- **`theme.css`** - Styles CSS modernes
- **`theme-init.js`** - Interactions et initialisation
- **`config.js`** - Configuration IA (désactivée par défaut)

### 📊 Données
- **`dashboard_haute_garonne.json`** (2.2MB) - Données structurées pour le tableau de bord
- **`communes_haute_garonne_mapping.json`** - Mapping des codes INSEE vers noms de communes
- **`georef-france-commune.geojson`** (3.7MB) - Données géographiques des communes
- **`metadata_dashboard.json`** - Métadonnées du projet

### 🤖 Intelligence Artificielle (Optionnel)
- **`api_analyze.py`** - API d'analyse IA avec OpenAI
- **`requirements.txt`** - Dépendances Python

### 📚 Documentation
- **`README.md`** - Ce fichier
- **`README_IA.md`** - Guide de l'IA
- **`ACTIVATION_IA.md`** - Comment activer l'IA
- **`METHODOLOGIE_CALCULS.md`** - Méthodologie des calculs
- **`GUIDE_TABLEAU_BORD_AVANCE.md`** - Guide d'utilisation avancé
- **`DEPLOIEMENT_GITHUB.md`** - Guide de déploiement
- **`TEST_LOCAL.md`** - Guide de test local
- **`CLEANUP.md`** - Documentation du nettoyage

## 🚀 Utilisation

### 1. Version En Ligne (Recommandée)
Ouvrez directement : https://pierrevin.github.io/tableau-bord-delinquance/

### 2. Version Locale
```bash
# Lancer le serveur local
python3 serve_local.py

# Puis ouvrir : http://localhost:8000/dashboard_schema_utilisateur.html
```

## 🎯 Fonctionnalités

### 📈 Tableau de Bord Interactif
- **KPIs synthétiques** - Indicateurs clés de performance
- **Graphiques de répartition** - Par type d'infraction
- **Comparaisons visuelles** - Entre communes
- **Analyse temporelle** - Évolution dans le temps
- **Carte interactive** - Visualisation géographique

### 🎛️ Contrôles Interactifs
- **Commune de référence** - Saint-Paul-sur-Save par défaut
- **Commune de comparaison** - Sélection libre
- **Période** - 2016-2024, filtrable par année
- **Type d'infraction** - 10 catégories disponibles

### 📊 Données Brutes
- **Tableau filtrable** - Toutes les données
- **Export CSV/JSON** - Téléchargement des données
- **Recherche** - Filtrage avancé

### 🤖 Intelligence Artificielle (Masquée)
- **Analyse contextuelle** - Insights intelligents
- **Recommandations** - Basées sur les données
- **Comparaisons avancées** - IA-powered

## 📊 Couverture des Données

### 🏘️ Géographie
- **586 communes** de la Haute-Garonne
- **Période** : 2016-2024
- **Focus** : Saint-Paul-sur-Save (31507)

### 📈 Types d'Infractions
1. Destructions et dégradations
2. Escroqueries
3. Vols avec violence
4. Trafic de stupéfiants
5. Violences physiques
6. Vols sans violence
7. Atteintes aux biens
8. Atteintes aux personnes
9. Autres infractions

## 🔍 Analyses Disponibles

### Comparaisons
- **Saint-Paul vs Haute-Garonne** - Évolution globale
- **Saint-Paul vs communes similaires** - Population comparable
- **Saint-Paul vs commune spécifique** - Comparaison libre
- **Évolution temporelle** - Tendances par année

### Insights
- **Tendances** - Augmentation/diminution des infractions
- **Positionnement** - Rang de Saint-Paul dans le département
- **Spécificités** - Types d'infractions prédominants
- **Comparaisons** - Performance relative

## 🛠️ Développement

### Test Local
```bash
# Vérifier que tout fonctionne
./test_deployment.sh

# Lancer le serveur local
python3 serve_local.py
```

### Activation de l'IA
Voir `ACTIVATION_IA.md` pour activer l'analyse IA.

## 📋 Prérequis

### Pour l'utilisation
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)

### Pour le développement
- Python 3.x
- Dépendances : `pip install -r requirements.txt`

## 🎯 Utilisation Recommandée

1. **Ouvrir le tableau de bord** en ligne ou localement
2. **Explorer les KPIs** pour comprendre la situation globale
3. **Utiliser les filtres** pour des analyses spécifiques
4. **Comparer les communes** avec les graphiques
5. **Analyser l'évolution** temporelle
6. **Consulter les données brutes** pour plus de détails

## 🚨 Dépannage

### Erreur "Failed to fetch"
- **Cause** : Fichier ouvert en `file://` au lieu de `http://`
- **Solution** : Utiliser le serveur local ou la version en ligne

### Données ne se chargent pas
- Vérifier que tous les fichiers JSON sont présents
- Vérifier la connexion internet (version en ligne)

## 📞 Support

- **Documentation** : Voir les fichiers README dans le projet
- **Test local** : Utiliser `./test_deployment.sh`
- **Déploiement** : Voir `DEPLOIEMENT_GITHUB.md`

---

*Données source : Ministère de l'Intérieur - Statistiques de délinquance*  
*Période : 2016-2024*  
*Géographie : Haute-Garonne (31)*  
*Déployé sur GitHub Pages*
