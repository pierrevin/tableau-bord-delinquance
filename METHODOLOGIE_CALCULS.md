# 📊 MÉTHODOLOGIE DES CALCULS - DASHBOARD DÉLINQUANCE

## 🎯 OBJECTIF
Ce document détaille la méthodologie de calcul de tous les indicateurs du dashboard de délinquance pour la Haute-Garonne, garantissant la cohérence et la traçabilité des données affichées.

---

## 📋 FILTRES GLOBAUX

### **Filtres applicables à tous les calculs :**
- **Période** : `currentFilters.selectedYears` (années cochées)
- **Type d'infraction** : `currentFilters.infraction` (si différent de 'all')
- **Commune de référence** : `currentFilters.communeRef` (défaut: '31507' - Saint-Paul-sur-Save)
- **Commune de comparaison** : `currentFilters.communeComp` (optionnel)

---

## 🏘️ 1. SAINT-PAUL-SUR-SAVE (Commune de référence)

### **1.1 Infractions totales (période)**
```
Fonction : getCommuneTotals('31507').total_infractions

Logique :
- Si type d'infraction spécifique sélectionné :
  * Source : dashboardData.indicateur_data
  * Filtres : code_insee = '31507' + indicateur = currentFilters.infraction + années sélectionnées
  * Calcul : somme des item.nombre

- Si tous types d'infractions :
  * Source : dashboardData.commune_annee_data
  * Filtres : code_insee = '31507' + années sélectionnées
  * Calcul : somme des item.total_infractions
```

### **1.2 Taux / 1000 hab. (période)**
```
Calcul : (total_infractions / population) × 1000

Population : getCommuneTotals('31507').population
- Source : moyenne de la population sur la période sélectionnée (plus juste statistiquement)
- Format : nombre entier arrondi
```

### **1.3 Tendance temporelle (début→fin)**
```
Calcul : ((Infractions dernière année - Infractions première année) / Infractions première année) × 100

Années : Min et Max de currentFilters.selectedYears
Format : pourcentage avec 1 décimale

Logique :
- Si type d'infraction spécifique : utilise dashboardData.indicateur_data
- Si tous types : utilise dashboardData.commune_annee_data
```

---

## 🏘️ 2. GROUPE DE COMMUNES SIMILAIRES

### **2.1 Sélection des communes similaires**
```
Fonction : getSimilarCommunesCodes()

Critère : Population ±30% de Saint-Paul-sur-Save
Tolérance : 0.3 (30%)
Zone géographique : Haute-Garonne uniquement (codes INSEE commençant par '31')

Calcul :
1. Population moyenne Saint-Paul = moyenne des populations sur toutes les années
2. Fourchette acceptée = [70% × pop_moyenne_SP, 130% × pop_moyenne_SP]
3. Exclusion : Saint-Paul lui-même (code 31507)
4. Filtrage : Communes de la Haute-Garonne uniquement

Résultats :
- Population de référence : Saint-Paul-sur-Save (31507) : 1665,8 hab.
- Fourchette acceptée : 1166 - 2166 habitants
- Nombre de communes similaires : 51 communes
- Moyenne infractions : 81,2 infractions
- Moyenne population : 1615,5 habitants
- Taux moyen : 50,29‰
```

### **2.1.1 Liste des communes similaires (2020-2024)**
```
Code INSEE | Commune | Population | Différence | Infractions | Taux
----------|---------|------------|------------|-------------|-----
31003 | Aigrefeuille | 1306 hab. | -21,6% | 21 | 16,08‰
31028 | Commune 31028 | 1241 hab. | -25,5% | 50 | 40,30‰
31036 | Commune 31036 | 1611 hab. | -3,3% | 40 | 24,82‰
31037 | Commune 31037 | 1609 hab. | -3,4% | 236 | 146,71‰
31052 | Commune 31052 | 1625 hab. | -2,5% | 66 | 40,62‰
31053 | Commune 31053 | 1248 hab. | -25,1% | 59 | 47,28‰
31057 | Commune 31057 | 1528 hab. | -8,3% | 23 | 15,05‰
31075 | Commune 31075 | 1248 hab. | -25,1% | 16 | 12,82‰
31080 | Commune 31080 | 1657 hab. | -0,5% | 100 | 60,36‰
31136 | Commune 31136 | 2292 hab. | +37,6% | 61 | 26,62‰
31161 | Commune 31161 | 1378 hab. | -17,3% | 61 | 44,25‰
31184 | Commune 31184 | 2070 hab. | +24,2% | 174 | 84,07‰
31193 | Commune 31193 | 1881 hab. | +12,9% | 107 | 56,87‰
31206 | Commune 31206 | 1327 hab. | -20,3% | 0 | 0,00‰
31210 | Commune 31210 | 1346 hab. | -19,2% | 49 | 36,41‰
31212 | Commune 31212 | 1905 hab. | +14,3% | 110 | 57,75‰
31224 | Commune 31224 | 1179 hab. | -29,2% | 178 | 151,03‰
31228 | Commune 31228 | 2342 hab. | +40,6% | 187 | 79,84‰
31239 | Commune 31239 | 1626 hab. | -2,4% | 136 | 83,64‰
31247 | Commune 31247 | 1291 hab. | -22,5% | 20 | 15,49‰
31249 | Commune 31249 | 1235 hab. | -25,9% | 0 | 0,00‰
31252 | Commune 31252 | 1948 hab. | +17,0% | 29 | 14,88‰
31259 | Commune 31259 | 2059 hab. | +23,6% | 228 | 110,75‰
31261 | Commune 31261 | 1170 hab. | -29,8% | 17 | 14,53‰
31269 | Commune 31269 | 1626 hab. | -2,4% | 70 | 43,05‰
31277 | Commune 31277 | 1600 hab. | -4,0% | 32 | 20,01‰
31281 | Commune 31281 | 1310 hab. | -21,3% | 8 | 6,11‰
31284 | Commune 31284 | 1620 hab. | -2,7% | 25 | 15,43‰
31297 | Commune 31297 | 2206 hab. | +32,4% | 121 | 54,85‰
31311 | Commune 31311 | 1215 hab. | -27,0% | 14 | 11,52‰
31334 | Commune 31334 | 1338 hab. | -19,7% | 5 | 3,74‰
31355 | Commune 31355 | 1832 hab. | +10,0% | 47 | 25,65‰
31356 | Commune 31356 | 1934 hab. | +16,1% | 89 | 46,02‰
31383 | Commune 31383 | 1273 hab. | -23,6% | 9 | 7,07‰
31384 | Commune 31384 | 1791 hab. | +7,5% | 83 | 46,34‰
31407 | Commune 31407 | 1247 hab. | -25,2% | 6 | 4,81‰
31462 | Commune 31462 | 2111 hab. | +26,7% | 467 | 221,22‰
31475 | Commune 31475 | 1613 hab. | -3,2% | 56 | 34,71‰
31478 | Commune 31478 | 1257 hab. | -24,6% | 16 | 12,73‰
31481 | Commune 31481 | 2096 hab. | +25,8% | 112 | 53,44‰
31486 | Commune 31486 | 1679 hab. | +0,8% | 52 | 30,97‰
31495 | Commune 31495 | 1291 hab. | -22,5% | 22 | 17,04‰
31516 | Commune 31516 | 2146 hab. | +28,9% | 121 | 56,37‰
31523 | Commune 31523 | 1741 hab. | +4,5% | 322 | 184,95‰
31563 | Commune 31563 | 1408 hab. | -15,5% | 27 | 19,17‰
31575 | Commune 31575 | 1220 hab. | -26,8% | 208 | 170,49‰
31581 | Commune 31581 | 1636 hab. | -1,8% | 30 | 18,34‰
31585 | Commune 31585 | 1739 hab. | +4,4% | 29 | 16,67‰
31587 | Commune 31587 | 1671 hab. | +0,3% | 103 | 61,65‰
31589 | Commune 31589 | 1460 hab. | -12,3% | 61 | 41,77‰
31592 | Commune 31592 | 2208 hab. | +32,6% | 40 | 18,11‰
```

### **2.2 Infractions moyennes**
```
Fonction : getSimilarCommunesAverage().total_infractions

Logique :
1. Pour chaque commune similaire : getCommuneTotals(code)
2. Somme totale des infractions de toutes les communes similaires
3. Division par le nombre de communes similaires
4. Arrondi à l'entier le plus proche

Filtres appliqués : Années + Type d'infraction
```

### **2.3 Taux moyen / 1000 hab.**
```
Calcul : (Infractions moyennes / Population moyenne) × 1000

Population moyenne : getSimilarCommunesAverage().population
- Calcul : moyenne des populations des communes similaires
- Format : nombre entier
```

### **2.4 Évolution moyenne**
```
Calcul : Moyenne des évolutions individuelles de chaque commune similaire

Fonction : calculateEvolution(similarData)
- Applique la même logique que pour Saint-Paul
- Moyenne arithmétique des évolutions
```

---

## 🏘️ 3. COMMUNE COMPARÉE (si sélectionnée)

### **3.1 Infractions totales**
```
Fonction : getCommuneTotals(currentFilters.communeComp).total_infractions

Même logique que Saint-Paul mais pour la commune sélectionnée
Filtres appliqués : Années + Type d'infraction
```

### **3.2 Taux / 1000 hab.**
```
Calcul : (total_infractions / population) × 1000

Population : getCommuneTotals(currentFilters.communeComp).population
- Source : moyenne de la population sur la période sélectionnée (plus juste statistiquement)
```

### **3.3 Évolution**
```
Fonction : calculateEvolution(comparisonData)
- Même logique que Saint-Paul
- Applique les filtres sélectionnés
```

---

## 🔧 FONCTIONS CLÉS

### **getCommuneTotals(codeCommune)**
```javascript
// Si type d'infraction spécifique sélectionné
if (currentFilters.infraction && currentFilters.infraction !== 'all') {
    // Utiliser les données détaillées par type
    const filteredData = dashboardData.indicateur_data.filter(item => 
        item.code_insee === codeCommune && 
        item.indicateur === currentFilters.infraction &&
        currentFilters.selectedYears.includes(parseInt(item.annee))
    );
    
    const totalInfractions = filteredData.reduce((sum, item) => sum + (item.nombre || 0), 0);
    const population = getPopulationFromCommuneData(codeCommune);
    
    return { total_infractions: totalInfractions, population: population };
} else {
    // Utiliser les données agrégées pour toutes les infractions
    const allCommuneData = dashboardData.commune_annee_data.filter(item => 
        item.code_insee === codeCommune && 
        currentFilters.selectedYears.includes(parseInt(item.annee))
    );
    
    const totalInfractions = allCommuneData.reduce((sum, item) => sum + item.total_infractions, 0);
    const population = allCommuneData[0].population;
    
    return { total_infractions: totalInfractions, population: population };
}
```

### **getSimilarCommunesAverage()**
```javascript
const similarCodes = getSimilarCommunesCodes();
let totalInfractions = 0;
let totalPopulation = 0;
let communeCount = 0;

similarCodes.forEach(code => {
    const communeTotals = getCommuneTotals(code);
    if (communeTotals) {
        totalInfractions += communeTotals.total_infractions;
        totalPopulation += communeTotals.population;
        communeCount++;
    }
});

const avgInfractions = totalInfractions / communeCount;
const avgPopulation = totalPopulation / communeCount;

return {
    total_infractions: Math.round(avgInfractions),
    population: Math.round(avgPopulation),
    commune_name: 'Moyenne communes similaires',
    commune_count: communeCount
};
```

### **calculateFilteredInfractions(communeCode)**
```javascript
// Utilisé pour les badges des communes
let filteredData = dashboardData.indicateur_data.filter(item => 
    item.code_insee === communeCode
);

// Filtrer par années sélectionnées
if (currentFilters.selectedYears && currentFilters.selectedYears.length > 0) {
    filteredData = filteredData.filter(item => 
        currentFilters.selectedYears.includes(parseInt(item.annee))
    );
}

// Filtrer par type d'infraction
if (currentFilters.infraction && currentFilters.infraction !== 'all') {
    const selectedType = infractionTypes[currentFilters.infraction];
    if (selectedType) {
        filteredData = filteredData.filter(item => item.indicateur === selectedType);
    }
}

return filteredData.reduce((sum, item) => sum + (item.nombre || 0), 0);
```

---

## 📊 MAPPING DES TYPES D'INFRACTIONS

```javascript
const infractionTypes = {
    'destructions_degradations': 'Destructions et dégradations volontaires',
    'escroqueries': 'Escroqueries et fraudes aux moyens de paiement',
    'vols_avec_violence': 'Vols avec violence',
    'trafic_stupefiants': 'Trafic de stupéfiants',
    'violences_physiques': 'Violences physiques',
    'vols_sans_violence': 'Vols sans violence',
    'atteintes_aux_biens': 'Atteintes aux biens',
    'atteintes_aux_personnes': 'Atteintes aux personnes',
    'autres_infractions': 'Autres infractions'
};
```

---

## 🎨 AFFICHAGE DES COMPARAISONS

### **updateComparisonDisplay(elementId, referenceValue, similarValue, comparisonValue, type)**
```javascript
// Couleurs selon la performance de Saint-Paul
if (type === 'infractions' || type === 'taux') {
    // Plus c'est bas, mieux c'est
    colorClass = referenceValue <= similarValue ? 'positive' : 'negative';
} else if (type === 'evolution') {
    // Négatif = baisse = positif
    colorClass = referenceValue <= similarValue ? 'positive' : 'negative';
}

// Formatage selon le type
if (type === 'taux') {
    displayValue = parseFloat(similarValue).toFixed(2) + '‰';
} else if (type === 'infractions') {
    displayValue = Math.round(similarValue).toLocaleString();
} else if (type === 'evolution') {
    displayValue = parseFloat(similarValue).toFixed(1) + '%';
}
```

---

## 🔍 GARANTIES DE COHÉRENCE

✅ **Tous les calculs respectent les filtres sélectionnés**
- Années : `currentFilters.selectedYears`
- Type d'infraction : `currentFilters.infraction`

✅ **Source de données appropriée selon le filtre**
- Type spécifique : `dashboardData.indicateur_data` (détail par type)
- Tous types : `dashboardData.commune_annee_data` (totaux agrégés)

✅ **Population cohérente**
- Utilise la moyenne de la population sur la période sélectionnée (plus juste statistiquement)
- Même source pour tous les calculs de taux

✅ **Évolution temporelle cohérente**
- Calculée entre première et dernière année de la période
- Respecte le filtre par type d'infraction

✅ **Badges des communes dynamiques**
- Population : `getCommuneTotals().population.toLocaleString()`
- Infractions : `calculateFilteredInfractions()` (avec filtres appliqués)

---

## 🐛 DÉBOGAGE

### **Logs de débogage disponibles :**
```javascript
console.log('=== DEBUG KPIs ===');
console.log('Saint-Paul - Infractions:', totalInfractions, 'Taux:', tauxPourMille, 'Évolution:', evolution);
console.log('Moyenne similaires - Infractions:', similarAvgInfractions, 'Taux:', similarAvgTaux, 'Évolution:', similarAvgEvolution);
console.log('Commune comparée - Infractions:', comparisonAvgInfractions, 'Taux:', comparisonAvgTaux, 'Évolution:', comparisonAvgEvolution);
console.log('Population Saint-Paul:', population);
console.log('Similar Average Object:', similarAverage);
console.log('Similar Codes:', getSimilarCommunesCodes());
```

---

## 📝 NOTES IMPORTANTES

1. **Cohérence des filtres** : Tous les indicateurs utilisent les mêmes filtres globaux
2. **Population** : Toujours basée sur la première année de la période sélectionnée
3. **Arrondis** : Les infractions sont arrondies à l'entier, les taux à 2 décimales
4. **Évolution** : Calculée en pourcentage avec 1 décimale
5. **Couleurs** : Vert = positif (Saint-Paul performe mieux), Rouge = négatif
6. **Badges** : Population formatée avec séparateurs de milliers
