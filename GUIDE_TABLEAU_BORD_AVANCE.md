# 🚀 Guide d'Utilisation - Tableau de Bord Avancé

## 🎯 **FONCTIONNALITÉS PRINCIPALES**

### **🗺️ Carte Interactive**
- **Visualisation** : 586 communes de la Haute-Garonne
- **Indicateurs** : Nombre d'infractions, taux pour 1000 hab., population
- **Interactivité** : Clic pour sélectionner, popup avec détails
- **Couleurs** : Vert (faible) → Rouge (élevé) selon l'intensité
- **Saint-Paul-sur-Save** : Mis en évidence en violet

### **🎛️ Filtres Dynamiques**
- **🗓️ Période** : 2016-2024 ou année spécifique
- **🏘️ Commune** : Sélection directe ou toutes les communes
- **🏗️ Type d'infraction** : Toutes ou catégories spécifiques
- **👥 Mode de comparaison** : Une commune / Plusieurs / vs Moyenne

### **📊 Indicateurs en Temps Réel**
- **Commune sélectionnée** : Code INSEE
- **Infractions totales** : Nombre avec évolution %
- **Population** : Nombre d'habitants
- **Rang départemental** : Position sur 586 communes

### **📈 Graphiques Analytiques**
1. **Évolution temporelle** : Courbe d'évolution par année
2. **Classement des communes** : Top 10 par infractions
3. **Répartition par type** : Donut chart des catégories
4. **Corrélation Population/Infractions** : Nuage de points

## 🎮 **UTILISATION INTERACTIVE**

### **Navigation sur la Carte**
```
🖱️ Clic simple → Sélectionne la commune
🖱️ Clic multiple → Ajoute/retire de la sélection (mode multi)
🔍 Zoom → Molette de souris
📍 Déplacement → Clic + glisser
ℹ️ Info → Survol pour popup
```

### **Changement d'Indicateur**
```
📊 Sélecteur carte (haut-droite) :
   - Nombre d'infractions
   - Taux pour 1000 hab.
   - Population
```

### **Modes de Comparaison**
```
👤 Une commune → Focus sur une seule commune
👥 Plusieurs communes → Sélection multiple sur la carte
⚖️ vs Moyenne département → Comparaison avec la moyenne
```

## 📱 **INTERFACE RESPONSIVE**

### **🖥️ Bureau (Largeur > 1200px)**
- **Layout** : Carte (50%) + Indicateurs (50%)
- **Graphiques** : 2x2 grille
- **Filtres** : Tous visibles en ligne

### **📱 Mobile/Tablette (Largeur < 1200px)**
- **Layout** : Carte (haut) + Indicateurs (bas)
- **Graphiques** : 1 colonne
- **Filtres** : Empilés verticalement

## 🔍 **ANALYSES POSSIBLES**

### **Comparaisons Temporelles**
```
📈 Évolution 2016-2024 → Tendance générale
📊 Année par année → Variations saisonnières
🎯 Focus période → Analyse d'une année spécifique
```

### **Comparaisons Spatiales**
```
🏘️ Commune vs Commune → Comparaison directe
🏆 Classement → Position relative
📊 Corrélation → Population vs Infractions
```

### **Analyses par Type**
```
🏗️ Catégories → Destructions, Escroqueries, etc.
📊 Répartition → Pourcentage par type
📈 Évolution → Tendance par catégorie
```

## 🎯 **CAS D'USAGE CONCRETS**

### **Pour Saint-Paul-sur-Save (31507)**
1. **Sélectionner** la commune sur la carte
2. **Comparer** avec d'autres communes similaires
3. **Analyser** l'évolution temporelle
4. **Identifier** les types d'infractions prédominants

### **Pour une Analyse Départementale**
1. **Choisir** "Toutes les communes"
2. **Filtrer** par période ou type d'infraction
3. **Identifier** les zones à forte concentration
4. **Comparer** les tendances régionales

### **Pour une Étude Comparative**
1. **Sélectionner** plusieurs communes
2. **Changer** l'indicateur de la carte
3. **Analyser** les corrélations
4. **Identifier** les patterns

## 🛠️ **DÉMARRAGE RAPIDE**

### **Option 1 : Serveur Automatique**
```bash
python3 start_advanced_dashboard.py
```
→ Ouvre automatiquement le navigateur

### **Option 2 : Serveur Manuel**
```bash
python3 -m http.server 8000
```
→ Puis ouvrir : http://localhost:8000/dashboard_avance_phase1.html

### **Option 3 : Fichier Direct**
```bash
open dashboard_avance_phase1.html
```
→ Attention : certaines fonctionnalités peuvent être limitées

## 📊 **INTERPRÉTATION DES DONNÉES**

### **Couleurs de la Carte**
```
🟢 Vert clair → Faible taux d'infractions
🟡 Jaune → Taux moyen
🟠 Orange → Taux élevé
🔴 Rouge → Très élevé
🟣 Violet → Saint-Paul-sur-Save (mis en évidence)
```

### **Taille des Cercles**
```
🔵 Petit → Faible valeur
🔵 Moyen → Valeur moyenne
🔵 Grand → Forte valeur
```

### **Évolution des KPIs**
```
📈 Flèche verte → Amélioration (diminution)
📉 Flèche rouge → Dégradation (augmentation)
➡️ Stable → Pas de changement
```

## 🔧 **DÉPANNAGE**

### **Problème de Chargement**
```
❌ "Erreur lors du chargement des données"
💡 Vérifiez que dashboard_haute_garonne.json existe
💡 Utilisez le serveur local (pas le fichier direct)
```

### **Carte Ne S'affiche Pas**
```
❌ Carte vide ou erreur
💡 Vérifiez la connexion internet (tiles OpenStreetMap)
💡 Rechargez la page
💡 Vérifiez la console du navigateur (F12)
```

### **Graphiques Manquants**
```
❌ Graphiques vides
💡 Vérifiez que Chart.js se charge
💡 Rechargez la page
💡 Vérifiez les données dans la console
```

## 🎨 **PERSONNALISATION**

### **Changement de Thème**
```css
/* Dans le fichier HTML, section <style> */
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
}
```

### **Ajout de Données**
```javascript
// Dans la section <script>
dashboardData.indicateur_data.push({
    code_insee: "31507",
    annee: "2024",
    indicateur: "Nouveau type",
    nombre: 42
});
```

## 📈 **ÉVOLUTIONS FUTURES**

### **Phase 2 (Prévue)**
- [ ] Filtres par population
- [ ] Export PDF/Excel
- [ ] Sauvegarde des configurations
- [ ] Alertes automatiques

### **Phase 3 (Prévue)**
- [ ] Prédictions IA
- [ ] Corrélations avancées
- [ ] Recommandations
- [ ] Mode présentation

---

**🎉 Le tableau de bord est maintenant opérationnel ! Explorez les données et découvrez les insights sur la délinquance en Haute-Garonne.**
