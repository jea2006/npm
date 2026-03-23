🚀 Astro Project
📌 Description

Astro Project est une application web interactive en 2D permettant d’explorer le système solaire de manière immersive.

L’utilisateur peut :

Explorer les planètes et le Soleil
Obtenir des informations détaillées sur chaque astre
Visualiser des images issues de la NASA
Personnaliser la planète Mars
Sauvegarder ses modifications en base de données

Ce projet combine front-end interactif, back-end Node.js, base de données MySQL et API externe.

👥 Membres du groupe
Baba Ibrahim Yattassaye
Jean-Cédric Eboua
🛠️ Technologies utilisées
Front-end
HTML
CSS
JavaScript
p5.js
Back-end
Node.js
Express
Base de données
MySQL (phpMyAdmin)
API externe
NASA Image and Video Library API
⚙️ Installation du projet
1. Cloner le repository
git clone https://github.com/jea2006/npm
cd TON-REPO
2. Installer les dépendances
npm install
🗄️ Configuration de la base de données
3. Créer la base de données

Créer une base de données nommée :

astral_db
4. Créer les tables

Exécuter les requêtes SQL suivantes dans phpMyAdmin :

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  age INT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  last_login DATETIME NULL
);

CREATE TABLE IF NOT EXISTS planets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(50) NOT NULL,
  position FLOAT,
  speed FLOAT,
  description TEXT,
  color VARCHAR(50),
  radius FLOAT,
  image VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS customisations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  celestial_body_id INT,
  celestial_body_type VARCHAR(50),
  custom_name VARCHAR(100),
  color VARCHAR(50),
  surface_type VARCHAR(100),
  size INT
);

CREATE TABLE IF NOT EXISTS systeme_solaire (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  level INT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
5. Insérer les données initiales
INSERT INTO planets (name, type, position, speed, description, color, radius) VALUES
('Mercure', 'planet', 1, 4.8, 'La plus proche du Soleil', 'gray', 10),
('Vénus', 'planet', 2, 3.5, 'Planète très chaude', 'yellow', 12),
('Terre', 'planet', 3, 3.0, 'Notre planète', 'blue', 14),
('Mars', 'planet', 4, 2.4, 'La planète rouge', 'red', 12),
('Jupiter', 'planet', 5, 1.3, 'Géante gazeuse', 'orange', 22),
('Saturne', 'planet', 6, 1.0, 'Avec ses anneaux', 'gold', 20),
('Uranus', 'planet', 7, 0.7, 'Planète glacée', 'lightblue', 18),
('Neptune', 'planet', 8, 0.6, 'Très éloignée', 'blue', 18),
('Pluton', 'planet', 9, 0.5, 'Planète naine', 'white', 10);
🔐 Configuration (IMPORTANT)

Créer un fichier config.js à la racine :

const config = {
  db: {
    host: "localhost",
    user: "root",
    password: "root",
    database: "astral_db",
    port: 8889
  }
};

module.exports = config;

⚠️ Ne pas ajouter ce fichier sur GitHub
➡️ Ajouter config.js dans .gitignore

💡 Ports selon l’environnement
Mac (MAMP) → 8889
Windows (XAMPP / WAMP) → 3306
▶️ Lancer le projet
1. Démarrer le serveur
node app.js
2. Accéder à l’application

Ouvrir dans le navigateur :

http://localhost:8081
🎮 Fonctionnalités principales
Exploration interactive du système solaire
Interaction avec les planètes
Affichage d’informations dynamiques
Intégration d’images NASA
Connexion utilisateur
Customisation de Mars
Sauvegarde en base de données
🧠 Structure du projet
/public
  ├── index.html
  ├── connexion.html
  ├── mode.html
  ├── explorer.html
  ├── customisation.html
  ├── js/
  ├── css/

/routes
/services
/config.js (local uniquement)
app.js
⚠️ Important
Le repository doit être PUBLIC
Le fichier config.js doit être ignoré
Le projet doit fonctionner après installation
🚀 Évolutions possibles
Customisation de toutes les planètes
Amélioration du design et des animations
Ajout d’un profil utilisateur
Sauvegarde avancée
Ajout de sons et d’effets immersifs
✅ Conclusion

Astro Project est une application combinant :

Visualisation interactive
Développement full-stack
Base de données
API externe

Le projet est conçu pour être évolutif, immersif et pédagogique.
