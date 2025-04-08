import { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import Container from "~/components/Container";
import BlogPostCard from "~/components/BlogPostCard";
import BlogSidebar from "~/components/BlogSidebar";
import { ClientOnly } from "~/utils/client-only";
import { getPostsByCategory, getPostCategories, getPostTags } from "~/lib/blog";
import type { PostMetadata } from "~/lib/blog";

export const meta: MetaFunction = ({ params }) => {
  const category = params.category;
  return [
    { title: `Articles sur ${category} | DevFreelance` },
    { name: "description", content: `Découvrez tous nos articles sur la catégorie ${category}.` },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const category = params.category;
  
  if (!category) {
    throw new Response("Category Not Found", { status: 404 });
  }
  
  // Find the actual category with correct casing
  const categories = getPostCategories();
  const matchedCategory = categories.find(
    c => c.toLowerCase() === category.toLowerCase()
  );
  
  if (!matchedCategory) {
    throw new Response("Category Not Found", { status: 404 });
  }
  
  return { category: matchedCategory };
}

function CategoryContent() {
  const { category } = useLoaderData<typeof loader>();
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  
  useEffect(() => {
    setPosts(getPostsByCategory(category));
    setCategories(getPostCategories());
    setTags(getPostTags());
  }, [category]);
  
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-2 text-center">Catégorie: {category}</h1>
        <p className="text-center text-gray-600 mb-12">
          {posts.length} article{posts.length !== 1 ? 's' : ''} dans cette catégorie
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post, index) => (
                  <BlogPostCard key={post.id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600">
                  Aucun article trouvé dans cette catégorie.
                </p>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <BlogSidebar categories={categories} tags={tags} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default function CategoryPage() {
  const params = useParams();
  
  return (
    <ClientOnly fallback={
      <Container>
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-8">Catégorie: {params.category}</h1>
          <p>Chargement des articles...</p>
        </div>
      </Container>
    }>
      {() => <CategoryContent />}
    </ClientOnly>
  );
}
