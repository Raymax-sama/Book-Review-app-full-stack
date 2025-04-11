# Book Review App - Full Stack Project

## Aperçu du projet

Ce projet est une application complète de critiques de livres qui permet aux utilisateurs de découvrir, évaluer et partager leurs opinions sur différents livres. L'application offre une interface utilisateur moderne et réactive, avec des fonctionnalités premium pour les utilisateurs qui souhaitent une expérience améliorée.

## Technologies utilisées

### Frontend
- React 19
- TypeScript
- React Router v7
- Tailwind CSS
- Vite
- Axios pour les requêtes API

### Backend
- Strapi CMS (v5.12.4)
- PostgreSQL
- Node.js
- JWT pour l'authentification
- Stripe pour les paiements

## Fonctionnalités implémentées

- **Interface utilisateur responsive** avec une barre latérale et une navigation
- **Système d'authentification** (inscription et connexion)
- **Catalogue de livres** avec filtrage par genre
- **Pages de détail des livres** avec informations et critiques
- **Système de critiques** permettant aux utilisateurs de noter et commenter les livres
- **Profil utilisateur** pour gérer ses informations
- **Abonnement premium** avec différentes options de paiement

## Structure du projet
Book Review app full stack/
├── frontend/                 # Application React
│   ├── src/
│   │   ├── components/       # Composants réutilisables
│   │   ├── pages/            # Pages de l'application
│   │   └── App.tsx           # Point d'entrée de l'application
│   └── ...
└── backend/
└── strapiPoject/         # API Strapi
├── src/
│   ├── api/          # Modèles et contrôleurs
│   └── extensions/   # Extensions Strapi
└── ...


## Modèles de données

### Livre (Book)
- Titre
- Auteur
- Genre
- Description
- Image
- Relation avec les critiques

### Critique (Review)
- Note
- Commentaire
- Relation avec le livre
- Relation avec l'utilisateur

### Utilisateur (User)
- Nom d'utilisateur
- Email
- Mot de passe
- Type d'abonnement (gratuit/premium)
- Nombre de critiques

## À faire

1. **Intégration Backend-Frontend**
   - Connecter les formulaires React aux endpoints Strapi
   - Implémenter la gestion des tokens JWT

2. **Fonctionnalités utilisateur**
   - Finaliser la gestion du profil utilisateur
   - Implémenter les listes de favoris

3. **Système de recherche**
   - Ajouter une barre de recherche pour trouver des livres

4. **Intégration de Stripe**
   - Finaliser le processus de paiement pour l'abonnement premium

5. **Tests**
   - Ajouter des tests unitaires et d'intégration

6. **Déploiement**
   - Configurer l'environnement de production
   - Déployer l'application sur un service d'hébergement

## Comment démarrer le projet

### Backend (Strapi)
```bash
cd backend/strapiPoject
npm run develop
```

### Frontend (React)
```bash
cd frontend
npm run dev
```