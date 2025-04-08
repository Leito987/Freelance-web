import { Link } from "@remix-run/react";

interface BlogSidebarProps {
  categories: string[];
  tags: string[];
}

export default function BlogSidebar({ categories, tags }: BlogSidebarProps) {
  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Rechercher</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher un article..."
            className="w-full border border-gray-300 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute right-3 top-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Categories */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Catégories</h3>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category}>
              <Link 
                to={`/blog/category/${category.toLowerCase()}`}
                className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>{category}</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded-full">
                  {/* In a real app, we would count posts per category */}
                  {Math.floor(Math.random() * 10) + 1}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Tags */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link 
              key={tag}
              to={`/blog/tag/${tag.toLowerCase()}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Newsletter */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Newsletter</h3>
        <p className="text-gray-700 mb-4">
          Abonnez-vous pour recevoir les derniers articles et actualités.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Votre email"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            S'abonner
          </button>
        </form>
      </div>
    </div>
  );
}
