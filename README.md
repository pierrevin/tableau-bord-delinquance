# 📊 Tableau de Bord - Délinquance Haute-Garonne

## 🎯 Objectif

Ce projet permet d'analyser et de comparer les données de délinquance dans la Haute-Garonne (31) avec un focus particulier sur Saint-Paul-sur-Save (31507). Il fournit un tableau de bord interactif pour visualiser les tendances et faire des comparaisons entre communes.

## 📁 Fichiers Principaux

### 📊 Données Extraites
- **`haute_garonne_complete.csv`** (6.8MB) - Données complètes de toutes les communes de la Haute-Garonne
- **`dashboard_haute_garonne.json`** (2.2MB) - Données structurées pour le tableau de bord
- **`haute_garonne_communes_summary.csv`** (123KB) - Résumé par commune et par année

### 🖥️ Tableau de Bord
- **`dashboard_haute_garonne.html`** - Tableau de bord interactif (ouvrir dans un navigateur)

### 📋 Résumés
- **`resume_final_haute_garonne.json`** - Résumé complet de toutes les données
- **`resume_final_saint_paul_save.json`** - Résumé spécifique à Saint-Paul-sur-Save
- **`metadata_dashboard.json`** - Métadonnées du projet

### 🔧 Scripts
- **`extract_haute_garonne_complete.py`** - Script d'extraction de toutes les données
- **`extract_saint_paul_parquet.py`** - Script d'extraction spécifique à Saint-Paul
- **`resume_final_haute_garonne.py`** - Script de génération du résumé final

## 🚀 Utilisation

### 1. Ouvrir le Tableau de Bord
```bash
# Ouvrir le fichier HTML dans votre navigateur
open dashboard_haute_garonne.html
```

### 2. Fonctionnalités du Tableau de Bord

#### 📈 Graphiques Disponibles
- **Évolution des infractions par année** - Comparaison Haute-Garonne vs Saint-Paul
- **Top 10 des communes** - Classement par nombre d'infractions (2024)
- **Comparaison interactive** - Filtrage par année et type d'infraction
- **Focus Saint-Paul-sur-Save** - Évolution et classement spécifique

#### 🎛️ Contrôles Interactifs
- **Sélecteur d'année** : 2016-2024
- **Sélecteur d'indicateur** : Toutes les infractions, Destructions, Escroqueries, etc.

#### 📊 Statistiques en Temps Réel
- Nombre total de communes
- Total des infractions
- Période couverte
- Rang de Saint-Paul-sur-Save

## 📊 Données Disponibles

### 🏘️ Couverture
- **586 communes** de la Haute-Garonne
- **Période** : 2016-2024
- **47,665 enregistrements** diffusés
- **15 types d'indicateurs** différents

### 🎯 Focus Saint-Paul-sur-Save (31507)
- Données complètes par année
- Classement départemental
- Évolution des infractions
- Comparaison avec les autres communes

### 📈 Indicateurs Principaux
1. Vols avec armes
2. Usage de stupéfiants (AFD)
3. Trafic de stupéfiants
4. Vols violents sans arme
5. Usage de stupéfiants

## 🔍 Analyses Possibles

### Comparaisons
- **Saint-Paul vs Haute-Garonne** : Évolution globale
- **Saint-Paul vs autres communes** : Classement et positionnement
- **Évolution temporelle** : Tendances par année
- **Types d'infractions** : Répartition par catégorie

### Insights
- **Tendances** : Augmentation/diminution des infractions
- **Positionnement** : Rang de Saint-Paul dans le département
- **Spécificités** : Types d'infractions prédominants
- **Comparaisons** : Performance relative aux autres communes

## 🛠️ Réexécution des Scripts

### Extraire toutes les données
```bash
python3 extract_haute_garonne_complete.py
```

### Générer le résumé final
```bash
python3 resume_final_haute_garonne.py
```

### Extraire Saint-Paul uniquement
```bash
python3 extract_saint_paul_parquet.py
```

## 📋 Prérequis

- Python 3.x
- pandas
- pyarrow
- Navigateur web moderne (pour le tableau de bord)

## 📊 Statistiques Clés

### Haute-Garonne (2016-2024)
- **Total infractions** : ~600,000
- **Moyenne annuelle** : ~75,000 infractions
- **Pic en 2022** : 75,453 infractions
- **Baisse en 2020** : 63,559 infractions (COVID-19)

### Saint-Paul-sur-Save
- **Code INSEE** : 31507
- **Données disponibles** : 2016-2024
- **Position** : Analyse détaillée dans le tableau de bord

## 🎯 Utilisation Recommandée

1. **Ouvrir le tableau de bord** dans un navigateur
2. **Explorer les graphiques** pour comprendre les tendances
3. **Utiliser les filtres** pour des analyses spécifiques
4. **Comparer Saint-Paul** avec d'autres communes
5. **Analyser l'évolution** temporelle des infractions

## 📞 Support

Pour toute question ou problème :
- Vérifiez que tous les fichiers sont présents
- Assurez-vous que le navigateur supporte JavaScript
- Consultez les fichiers JSON pour les données brutes

---

*Données source : Ministère de l'Intérieur - Statistiques de délinquance*
*Période : 2016-2024*
*Géographie : Haute-Garonne (31)*
