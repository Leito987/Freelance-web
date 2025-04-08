export interface PostMetadata {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  readingTime?: string;
}

// Mock data for blog posts to avoid file system operations
const blogPosts: PostMetadata[] = [
  {
    id: "getting-started-with-react",
    title: "Débuter avec React.js en 2023",
    date: "2023-05-15",
    excerpt: "Un guide complet pour démarrer avec React.js en 2023, couvrant les bases et les meilleures pratiques.",
    category: "Frontend",
    tags: ["React", "JavaScript", "Web Development"],
    author: {
      name: "Jean Dupont",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    readingTime: "8 min"
  },
  {
    id: "optimizing-website-performance",
    title: "Optimiser les performances de votre site web",
    date: "2023-06-22",
    excerpt: "Découvrez comment améliorer significativement les performances de votre site web avec ces techniques éprouvées.",
    category: "Performance",
    tags: ["Web Performance", "Optimization", "UX"],
    author: {
      name: "Marie Laurent",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    readingTime: "12 min"
  },
  {
    id: "mobile-app-development-trends",
    title: "Tendances du développement d'applications mobiles en 2023",
    date: "2023-07-10",
    excerpt: "Explorez les dernières tendances et technologies qui façonnent le développement d'applications mobiles cette année.",
    category: "Mobile",
    tags: ["Mobile Development", "React Native", "Flutter"],
    author: {
      name: "Thomas Mercier",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    coverImage: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    readingTime: "10 min"
  },
  {
    id: "typescript-best-practices",
    title: "Meilleures pratiques TypeScript pour 2023",
    date: "2023-08-05",
    excerpt: "Apprenez les meilleures pratiques pour utiliser TypeScript efficacement dans vos projets modernes.",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    author: {
      name: "Sophie Bernard",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    coverImage: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    readingTime: "15 min"
  },
  {
    id: "serverless-architecture",
    title: "Architecture Serverless: Guide complet",
    date: "2023-09-12",
    excerpt: "Tout ce que vous devez savoir sur l'architecture serverless et comment l'implémenter efficacement.",
    category: "Backend",
    tags: ["Serverless", "AWS", "Cloud"],
    author: {
      name: "Jean Dupont",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    readingTime: "18 min"
  }
];

export function getSortedPostsMetadata(): PostMetadata[] {
  // Sort posts by date
  return [...blogPosts].sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  return blogPosts.map(post => post.id);
}

export function getPostCategories() {
  const categories = new Set<string>();
  blogPosts.forEach(post => categories.add(post.category));
  return Array.from(categories);
}

export function getPostTags() {
  const tags = new Set<string>();
  blogPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
}

export function getPostsByCategory(category: string) {
  return blogPosts.filter(post => post.category === category);
}

export function getPostsByTag(tag: string) {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function getPostData(id: string) {
  const post = blogPosts.find(post => post.id === id);
  
  if (!post) {
    return null;
  }
  
  // Mock content for the post
  const content = `
# ${post.title}

${post.excerpt}

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.

## Main Content

Sed euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.

\`\`\`javascript
// Example code
function example() {
  console.log("Hello World!");
}
\`\`\`

## Conclusion

Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
  `;
  
  return {
    id,
    content,
    ...post
  };
}
