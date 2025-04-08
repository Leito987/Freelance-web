import { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import Container from "~/components/Container";
import BlogPostCard from "~/components/BlogPostCard";
import BlogSidebar from "~/components/BlogSidebar";
import { ClientOnly } from "~/utils/client-only";
import { getPostsByTag, getPostCategories, getPostTags } from "~/lib/blog";
import type { PostMetadata } from "~/lib/blog";

export const meta: MetaFunction = ({ params }) => {
  const tag = params.tag;
  return [
    { title: `Articles sur #${tag} | DevFreelance` },
    { name: "description", content: `Découvrez tous nos articles avec le tag #${tag}.` },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const tag = params.tag;
  
  if (!tag) {
    throw new Response("Tag Not Found", { status: 404 });
  }
  
  // Find the actual tag with correct casing
  const tags = getPostTags();
  const matchedTag = tags.find(
    t => t.toLowerCase() === tag.toLowerCase()
  );
  
  if (!matchedTag) {
    throw new Response("Tag Not Found", { status: 404 });
  }
  
  return { tag: matchedTag };
}

function TagContent() {
  const { tag } = useLoaderData<typeof loader>();
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  
  useEffect(() => {
    setPosts(getPostsByTag(tag));
    setCategories(getPostCategories());
    setTags(getPostTags());
  }, [tag]);
  
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-2 text-center">Tag: #{tag}</h1>
        <p className="text-center text-gray-600 mb-12">
          {posts.length} article{posts.length !== 1 ? 's' : ''} avec ce tag
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
                  Aucun article trouvé avec ce tag.
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

export default function TagPage() {
  const params = useParams();
  
  return (
    <ClientOnly fallback={
      <Container>
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-8">Tag: #{params.tag}</h1>
          <p>Chargement des articles...</p>
        </div>
      </Container>
    }>
      {() => <TagContent />}
    </ClientOnly>
  );
}
