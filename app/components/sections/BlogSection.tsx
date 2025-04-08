import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "~/components/Container";
import BlogPostCard from "~/components/BlogPostCard";
import Button from "~/components/Button";
import { getSortedPostsMetadata } from "~/lib/blog";
import type { PostMetadata } from "~/lib/blog";

export default function BlogSection() {
  const [latestPosts, setLatestPosts] = useState<PostMetadata[]>([]);
  
  useEffect(() => {
    setLatestPosts(getSortedPostsMetadata().slice(0, 3));
  }, []);
  
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Découvrez mes derniers articles sur le développement web et mobile
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/blog" variant="primary">
            Voir tous les articles
          </Button>
        </div>
      </Container>
    </section>
  );
}
