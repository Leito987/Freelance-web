import { Project } from "~/components/ProjectCard";

export const projects: Project[] = [
  {
    id: "ecommerce-plateforme",
    title: "Plateforme E-commerce",
    description: "Développement d'une plateforme e-commerce complète avec gestion des produits, panier d'achat, paiement sécurisé et tableau de bord administrateur.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "E-commerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    link: "/portfolio/ecommerce-plateforme"
  },
  {
    id: "application-mobile-sante",
    title: "Application Mobile Santé",
    description: "Application mobile permettant aux utilisateurs de suivre leur activité physique, leur alimentation et leur sommeil avec des visualisations de données personnalisées.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Application Mobile",
    technologies: ["React Native", "Firebase", "Redux", "HealthKit", "Google Fit"],
    link: "/portfolio/application-mobile-sante"
  },
  {
    id: "dashboard-analytique",
    title: "Dashboard Analytique",
    description: "Tableau de bord analytique pour une entreprise SaaS permettant de visualiser les métriques clés, les tendances utilisateurs et les revenus en temps réel.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Web Application",
    technologies: ["Vue.js", "D3.js", "Node.js", "PostgreSQL", "Docker"],
    link: "/portfolio/dashboard-analytique"
  },
  {
    id: "site-immobilier",
    title: "Site Immobilier",
    description: "Plateforme immobilière avec recherche avancée, filtres personnalisés, carte interactive et système de prise de rendez-vous pour les visites.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Site Web",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Google Maps API"],
    link: "/portfolio/site-immobilier"
  },
  {
    id: "application-gestion-projet",
    title: "Application de Gestion de Projet",
    description: "Outil de gestion de projet collaboratif avec fonctionnalités de suivi des tâches, diagrammes de Gantt, tableaux Kanban et rapports d'avancement.",
    imageUrl: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Web Application",
    technologies: ["Angular", "TypeScript", "Express", "MongoDB", "Socket.io"],
    link: "/portfolio/application-gestion-projet"
  },
  {
    id: "refonte-site-corporate",
    title: "Refonte Site Corporate",
    description: "Refonte complète du site web d'une entreprise internationale avec amélioration de l'expérience utilisateur, optimisation SEO et intégration multilingue.",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Site Web",
    technologies: ["WordPress", "PHP", "SASS", "JavaScript", "MySQL"],
    link: "/portfolio/refonte-site-corporate"
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projects;
  return projects.filter(project => project.category === category);
}
