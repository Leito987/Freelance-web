import { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import Container from "~/components/Container";
import ShareButtons from "~/components/ShareButtons";
import CommentSection from "~/components/CommentSection";
import { ClientOnly } from "~/utils/client-only";
import { getPostData } from "~/lib/blog";
import { formatDate } from "~/utils/date-formatter";

export const meta: MetaFunction = ({ data }) => {
  if (!data?.post) {
    return [
      { title: "Article non trouvé | DevFreelance" },
      { name: "description", content: "L'article que vous recherchez n'existe pas." },
    ];
  }
  
  return [
    { title: `${data.post.title} | DevFreelance` },
    { name: "description", content: data.post.excerpt },
    { property: "og:title", content: data.post.title },
    { property: "og:description", content: data.post.excerpt },
    { property: "og:image", content: data.post.coverImage },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug;
  
  if (!slug) {
    throw new Response("Not Found", { status: 404 });
  }
  
  // This will be executed on the server, but we're using mock data
  // so it's safe to use here
  const post = getPostData(slug);
  
  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }
  
  return { post };
}

function BlogPostContent() {
  const { post } = useLoaderData<typeof loader>();
  const [htmlContent, setHtmlContent] = useState("");
  
  useEffect(() => {
    // In a real app, we would use a markdown parser here
    // For now, we'll just do a simple conversion
    const html = post.content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold my-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold my-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold my-2">$1</h3>')
      .replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gm, '<em>$1</em>')
      .replace(/\n/gm, '<br />')
      .replace(/```([\s\S]*?)```/gm, (match, p1) => {
        return `<pre class="bg-gray-100 p-4 rounded my-4 overflow-x-auto"><code>${p1.replace(/</g, '<').replace(/>/g, '>')}</code></pre>`;
      });
    
    setHtmlContent(html);
  }, [post.content]);
  
  return (
    <Container>
      <article className="py-12">
        {/* Hero Section */}
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="p-8 text-white w-full">
              <div className="mb-2 flex items-center text-sm">
                <span>{formatDate(post.date)}</span>
                <span className="mx-2">•</span>
                <span>{post.readingTime}</span>
                <span className="mx-2">•</span>
                <span>{post.category}</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span>{post.author.name}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
            
            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <a 
                  key={tag} 
                  href={`/blog/tag/${tag.toLowerCase()}`}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition"
                >
                  #{tag}
                </a>
              ))}
            </div>
            
            {/* Share */}
            <div className="mt-12 border-t border-b border-gray-200 py-6">
              <ShareButtons title={post.title} />
            </div>
            
            {/* Comments */}
            <div className="mt-12">
              <CommentSection postId={post.id} />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">À propos de l'auteur</h3>
                <div className="flex items-center mb-4">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{post.author.name}</h4>
                    <p className="text-gray-600">Développeur Web</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Passionné par le développement web et les nouvelles technologies, {post.author.name} partage régulièrement ses connaissances et expériences sur ce blog.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Besoin d'aide sur votre projet ?</h3>
                <p className="mb-4">
                  Je suis disponible pour vous accompagner dans la réalisation de votre projet web ou mobile.
                </p>
                <a 
                  href="/contact" 
                  className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Me contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
}

export default function BlogPost() {
  const params = useParams();
  
  return (
    <ClientOnly fallback={
      <Container>
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-8">Chargement de l'article...</h1>
        </div>
      </Container>
    }>
      {() => <BlogPostContent />}
    </ClientOnly>
  );
}
