/* ===== THÈME INITIALISATION - SaaS 2025 ===== */

// Initialisation du thème au chargement
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
});

function initTheme() {
    initChartJSTheme();
    initLeafletTheme();
    initThemeToggle();
    initMicroInteractions();
}

// ===== CHART.JS THÈME =====
function initChartJSTheme() {
    // Configuration globale Chart.js
    Chart.defaults.font.family = 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif';
    Chart.defaults.font.size = 12;
    Chart.defaults.color = getThemeColors().textSecondary;
    
    // Palette de couleurs dynamique
    const palette = [
        '#3b82f6', // Bleu primaire
        '#8b5cf6', // Violet
        '#10b981', // Vert
        '#f59e0b', // Orange
        '#ef4444', // Rouge
        '#06b6d4', // Cyan
        '#84cc16', // Lime
        '#f97316', // Orange foncé
        '#ec4899', // Rose
        '#6366f1'  // Indigo
    ];
    
    // Couleurs dynamiques basées sur le thème
    function getThemeColors() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        return {
            bg: isDark ? '#1e293b' : '#ffffff',
            textPrimary: isDark ? '#f8fafc' : '#0f172a',
            textSecondary: isDark ? '#cbd5e1' : '#475569',
            textMuted: isDark ? '#94a3b8' : '#64748b',
            border: isDark ? '#334155' : '#e2e8f0',
            grid: isDark ? '#334155' : '#f1f5f9'
        };
    }
    
    // Configuration des plugins
    Chart.defaults.plugins.legend.position = 'bottom';
    Chart.defaults.plugins.legend.usePointStyle = true;
    Chart.defaults.plugins.legend.labels.padding = 20;
    Chart.defaults.plugins.legend.labels.usePointStyle = true;
    Chart.defaults.plugins.legend.labels.pointStyle = 'circle';
    
    // Configuration des tooltips
    Chart.defaults.plugins.tooltip.backgroundColor = getThemeColors().textPrimary;
    Chart.defaults.plugins.tooltip.titleColor = getThemeColors().bg;
    Chart.defaults.plugins.tooltip.bodyColor = getThemeColors().bg;
    Chart.defaults.plugins.tooltip.borderColor = getThemeColors().border;
    Chart.defaults.plugins.tooltip.borderWidth = 1;
    Chart.defaults.plugins.tooltip.cornerRadius = 8;
    Chart.defaults.plugins.tooltip.padding = 12;
    Chart.defaults.plugins.tooltip.displayColors = true;
    
    // Configuration des animations
    Chart.defaults.animation.duration = 800;
    Chart.defaults.animation.easing = 'easeOutQuart';
    
    // Configuration des grilles
    Chart.defaults.scales.linear.grid.color = getThemeColors().grid;
    Chart.defaults.scales.linear.grid.borderColor = getThemeColors().border;
    Chart.defaults.scales.linear.grid.lineWidth = 1;
    Chart.defaults.scales.linear.ticks.color = getThemeColors().textSecondary;
    Chart.defaults.scales.linear.ticks.font.size = 11;
    
    Chart.defaults.scales.category.grid.color = getThemeColors().grid;
    Chart.defaults.scales.category.grid.borderColor = getThemeColors().border;
    Chart.defaults.scales.category.grid.lineWidth = 1;
    Chart.defaults.scales.category.ticks.color = getThemeColors().textSecondary;
    Chart.defaults.scales.category.ticks.font.size = 11;
    
    // Fonctions utilitaires pour les options de graphiques
    window.makeBarOptions = function() {
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        color: getThemeColors().textSecondary
                    }
                },
                tooltip: {
                    backgroundColor: getThemeColors().textPrimary,
                    titleColor: getThemeColors().bg,
                    bodyColor: getThemeColors().bg,
                    borderColor: getThemeColors().border,
                    borderWidth: 1,
                    cornerRadius: 8,
                    padding: 12
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: getThemeColors().grid,
                        borderColor: getThemeColors().border
                    },
                    ticks: {
                        color: getThemeColors().textSecondary,
                        font: { size: 11 }
                    },
                    title: {
                        display: true,
                        text: 'Nombre d\'infractions',
                        color: getThemeColors().textSecondary,
                        font: { size: 12, weight: '500' }
                    }
                },
                x: {
                    grid: {
                        color: getThemeColors().grid,
                        borderColor: getThemeColors().border
                    },
                    ticks: {
                        color: getThemeColors().textSecondary,
                        font: { size: 11 }
                    }
                }
            },
            animation: {
                duration: 800,
                easing: 'easeOutQuart'
            }
        };
    };
    
    window.makeLineOptions = function() {
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        color: getThemeColors().textSecondary
                    }
                },
                tooltip: {
                    backgroundColor: getThemeColors().textPrimary,
                    titleColor: getThemeColors().bg,
                    bodyColor: getThemeColors().bg,
                    borderColor: getThemeColors().border,
                    borderWidth: 1,
                    cornerRadius: 8,
                    padding: 12
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: getThemeColors().grid,
                        borderColor: getThemeColors().border
                    },
                    ticks: {
                        color: getThemeColors().textSecondary,
                        font: { size: 11 }
                    },
                    title: {
                        display: true,
                        text: 'Taux / 1000 hab.',
                        color: getThemeColors().textSecondary,
                        font: { size: 12, weight: '500' }
                    }
                },
                x: {
                    grid: {
                        color: getThemeColors().grid,
                        borderColor: getThemeColors().border
                    },
                    ticks: {
                        color: getThemeColors().textSecondary,
                        font: { size: 11 }
                    }
                }
            },
            elements: {
                line: {
                    tension: 0.4
                },
                point: {
                    radius: 4,
                    hoverRadius: 6
                }
            },
            animation: {
                duration: 800,
                easing: 'easeOutQuart'
            }
        };
    };
    
    window.makeDoughnutOptions = function() {
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        color: getThemeColors().textSecondary
                    }
                },
                tooltip: {
                    backgroundColor: getThemeColors().textPrimary,
                    titleColor: getThemeColors().bg,
                    bodyColor: getThemeColors().bg,
                    borderColor: getThemeColors().border,
                    borderWidth: 1,
                    cornerRadius: 8,
                    padding: 12
                }
            },
            animation: {
                duration: 800,
                easing: 'easeOutQuart'
            }
        };
    };
    
    // Palette globale
    window.chartPalette = palette;
}

// ===== LEAFLET THÈME =====
function initLeafletTheme() {
    // Configuration par défaut Leaflet
    window.leafletDefaults = {
        tileLayer: {
            light: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        }
    };
    
    // Styles pour les polygones
    window.getPolygonStyle = function(feature, isHighlighted = false, isCompared = false) {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        if (isHighlighted) {
            return {
                fillColor: '#3b82f6',
                weight: 3,
                opacity: 1,
                color: '#1d4ed8',
                fillOpacity: 0.7
            };
        }
        
        if (isCompared) {
            return {
                fillColor: '#10b981',
                weight: 2,
                opacity: 1,
                color: '#059669',
                fillOpacity: 0.6
            };
        }
        
        return {
            fillColor: isDark ? '#475569' : '#e2e8f0',
            weight: 1,
            opacity: 0.8,
            color: isDark ? '#64748b' : '#cbd5e1',
            fillOpacity: 0.3
        };
    };
    
    // Styles pour les popups
    window.getPopupStyle = function() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        return {
            className: 'custom-popup',
            style: {
                backgroundColor: isDark ? '#1e293b' : '#ffffff',
                color: isDark ? '#f8fafc' : '#0f172a',
                border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                borderRadius: '8px',
                padding: '12px',
                fontSize: '14px',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
            }
        };
    };
}

// ===== BOUTON THÈME =====
function initThemeToggle() {
    // Créer le bouton de thème
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Basculer le thème');
    themeToggle.innerHTML = `
        <svg class="sun-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
        <svg class="moon-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="display: none;">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
    `;
    
    document.body.appendChild(themeToggle);
    
    // Fonction de basculement du thème
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Mettre à jour les icônes
        const sunIcon = themeToggle.querySelector('.sun-icon');
        const moonIcon = themeToggle.querySelector('.moon-icon');
        
        if (newTheme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
        
        // Mettre à jour les graphiques existants
        updateChartColors();
        
        // Mettre à jour la carte si elle existe
        if (window.map) {
            updateMapTheme();
        }
    }
    
    // Événement de clic
    themeToggle.addEventListener('click', toggleTheme);
    
    // Initialiser le thème depuis localStorage ou préférence système
    function initThemeFromStorage() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        let theme = savedTheme || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
        
        // Mettre à jour l'icône
        const sunIcon = themeToggle.querySelector('.sun-icon');
        const moonIcon = themeToggle.querySelector('.moon-icon');
        
        if (theme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
    
    // Écouter les changements de préférence système
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateChartColors();
        }
    });
    
    initThemeFromStorage();
}

// ===== MICRO-INTERACTIONS =====
function initMicroInteractions() {
    // Animation des cartes au chargement
    animateCards();
    
    // Skeleton loaders
    showSkeletonLoaders();
    
    // États vides
    createEmptyStates();
}

function animateCards() {
    const cards = document.querySelectorAll('.card, .kpi-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function showSkeletonLoaders() {
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(element => {
        element.innerHTML = `
            <div class="loading-spinner"></div>
            <span>Chargement en cours...</span>
        `;
    });
}

function createEmptyStates() {
    const emptyStates = document.querySelectorAll('.empty-state');
    emptyStates.forEach(element => {
        if (!element.querySelector('svg')) {
            element.innerHTML = `
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                <p>Aucune donnée disponible</p>
            `;
        }
    });
}

// ===== UTILITAIRES =====
function updateChartColors() {
    // Mettre à jour les couleurs des graphiques existants
    const charts = Chart.instances;
    Object.values(charts).forEach(chart => {
        if (chart.options && chart.options.plugins) {
            const colors = getThemeColors();
            chart.options.plugins.tooltip.backgroundColor = colors.textPrimary;
            chart.options.plugins.tooltip.titleColor = colors.bg;
            chart.options.plugins.tooltip.bodyColor = colors.bg;
            chart.options.plugins.legend.labels.color = colors.textSecondary;
            chart.update('none');
        }
    });
}

function updateMapTheme() {
    if (window.map) {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const tileLayer = isDark ? window.leafletDefaults.tileLayer.dark : window.leafletDefaults.tileLayer.light;
        
        // Mettre à jour la couche de tuiles
        window.map.eachLayer((layer) => {
            if (layer instanceof L.TileLayer) {
                window.map.removeLayer(layer);
            }
        });
        
        L.tileLayer(tileLayer, {
            attribution: '© OpenStreetMap contributors'
        }).addTo(window.map);
    }
}

// Fonction utilitaire pour obtenir les couleurs du thème
function getThemeColors() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
        bg: isDark ? '#1e293b' : '#ffffff',
        textPrimary: isDark ? '#f8fafc' : '#0f172a',
        textSecondary: isDark ? '#cbd5e1' : '#475569',
        textMuted: isDark ? '#94a3b8' : '#64748b',
        border: isDark ? '#334155' : '#e2e8f0',
        grid: isDark ? '#334155' : '#f1f5f9'
    };
}
