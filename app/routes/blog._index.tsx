import { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Container from "~/components/Container";
import BlogPostCard from "~/components/BlogPostCard";
import BlogSidebar from "~/components/BlogSidebar";
import BlogPagination from "~/components/BlogPagination";
import { ClientOnly } from "~/utils/client-only";
import { getSortedPostsMetadata, getPostCategories, getPostTags } from "~/lib/blog";
import type { PostMetadata } from "~/lib/blog";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog | DevFreelance" },
    { name: "description", content: "Articles et ressources sur le développement web et mobile, les technologies modernes et les bonnes pratiques." },
  ];
};

function BlogContent() {
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    setPosts(getSortedPostsMetadata());
    setCategories(getPostCategories());
    setTags(getPostTags());
  }, []);

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentPosts.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <BlogPagination 
                  currentPage={currentPage} 
                  totalPages={totalPages} 
                  onPageChange={handlePageChange} 
                />
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

export default function Blog() {
  return (
    <ClientOnly fallback={
      <Container>
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <p>Chargement des articles...</p>
        </div>
      </Container>
    }>
      {() => <BlogContent />}
    </ClientOnly>
  );
}
