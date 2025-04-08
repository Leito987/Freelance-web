import { useState } from "react";

interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  content: string;
  replies?: Comment[];
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  // Mock comments data
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: {
        name: "Sophie Martin",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      date: "Il y a 2 jours",
      content: "Excellent article ! J'ai beaucoup appris sur ce sujet. Merci pour le partage.",
      replies: [
        {
          id: "1-1",
          author: {
            name: "Jean Dupont",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
          },
          date: "Il y a 1 jour",
          content: "Merci Sophie ! Je suis ravi que cet article vous ait été utile."
        }
      ]
    },
    {
      id: "2",
      author: {
        name: "Pierre Durand",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      date: "Il y a 3 jours",
      content: "Très intéressant. Avez-vous des ressources supplémentaires à recommander sur ce sujet ?"
    }
  ]);
  
  const [newComment, setNewComment] = useState("");
  
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim()) return;
    
    // Add new comment
    const comment: Comment = {
      id: Date.now().toString(),
      author: {
        name: "Vous",
        avatar: "https://randomuser.me/api/portraits/lego/1.jpg"
      },
      date: "À l'instant",
      content: newComment
    };
    
    setComments([comment, ...comments]);
    setNewComment("");
  };
  
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Commentaires ({comments.length})</h3>
      
      {/* Comment form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Laissez un commentaire..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Publier
        </button>
      </form>
      
      {/* Comments list */}
      <div className="space-y-6">
        {comments.map(comment => (
          <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-0">
            {/* Main comment */}
            <div className="flex items-start gap-4">
              <img
                src={comment.author.avatar}
                alt={comment.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold">{comment.author.name}</h4>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-700">{comment.content}</p>
                <button className="text-sm text-blue-600 mt-2 hover:text-blue-800">
                  Répondre
                </button>
              </div>
            </div>
            
            {/* Replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="ml-14 mt-4 space-y-4">
                {comment.replies.map(reply => (
                  <div key={reply.id} className="flex items-start gap-4">
                    <img
                      src={reply.author.avatar}
                      alt={reply.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold">{reply.author.name}</h4>
                        <span className="text-sm text-gray-500">{reply.date}</span>
                      </div>
                      <p className="text-gray-700">{reply.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
