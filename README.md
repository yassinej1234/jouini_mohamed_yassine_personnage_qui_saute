# 🎮 Runner Game – JavaScript Web Game

## 📌 Description du projet

Ce projet est un jeu de type **runner** développé en HTML, CSS et JavaScript.
Le joueur contrôle un personnage qui avance automatiquement et doit **sauter** ou **s’accroupir** pour éviter des obstacles.
Le score augmente avec le temps (distance parcourue), et la difficulté évolue progressivement.

---

## 🛠️ Technologies utilisées

* **HTML5** : structure de la page et intégration du jeu
* **CSS3** : design, animations, responsive design
* **JavaScript (Vanilla JS)** : logique du jeu, gestion des événements clavier, collisions, score
* **DOM API** : manipulation dynamique des عناصر de la page

---

## 🎯 Fonctionnalités principales

* 🧍 Personnage avec images (animation saut / normal)
* 🦘 Système de saut avec gravité réaliste
* 🧎 Possibilité de s’accroupir
* 🌵 Génération aléatoire d’obstacles (sol et air)
* 💥 Détection de collision précise
* 📊 Score dynamique (HUD en temps réel)
* ⚡ Augmentation progressive de la difficulté
* 🌄 Background animé (effet de défilement)
* 🛑 Arrêt du background lors du Game Over
* 💀 Écran Game Over avec score final
* 🔁 Bouton “Rejouer” stylé
* 📱 Design responsive (adapté mobile et desktop)

---



## 🚀 Nouveautés explorées

Durant ce projet, j’ai appris et découvert :

* L’utilisation de **requestAnimationFrame** pour créer une boucle de jeu fluide
* La gestion de la **gravité et des mouvements physiques simples**
* La détection de collision avec **getBoundingClientRect()**
* La manipulation avancée du **DOM en temps réel**
* La création d’un **design responsive avec CSS (vw, clamp, media queries)**
* L’intégration d’animations CSS (background scrolling)
* Structurer un projet web comme un **mini jeu vidéo**

---

## ⚠️ Difficultés rencontrées

* Le personnage ne sautait pas correctement (problème de physique et de velocity)
* Difficulté à gérer les collisions précises
* Adapter le jeu à différentes tailles d’écran (responsive)
* Synchroniser animation + logique (images du personnage)
* Gestion des positions en CSS (bottom / left dynamiques)

---

## ✅ Solutions apportées

* Ajustement des valeurs de **gravité et vitesse de saut**
* Utilisation de **getComputedStyle()** pour récupérer les positions
* Mise en place de **getBoundingClientRect()** pour les collisions
* Utilisation de **clamp() et vw** pour rendre le design responsive
* Tests répétés + debug avec `console.log()`
* Recherche sur la documentation MDN et essais pratiques

---

## 🎉 Conclusion

Ce projet m’a permis de mieux comprendre :

* Le développement de jeux en JavaScript
* La logique événementielle
* L’optimisation et la structure d’un projet web interactif

C’est une excellente base pour évoluer vers des projets plus avancés (jeux 2D, canvas, frameworks, etc.).

---
