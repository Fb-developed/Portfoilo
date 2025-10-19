import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const posts = [
  {
    title: "Building Scalable REST APIs with Django",
    description: "Learn best practices for designing and implementing REST APIs that can handle millions of requests.",
    date: "2024-03-15",
    tags: ["Django", "REST API", "Backend"],
    readTime: "8 min read"
  },
  {
    title: "Microservices Architecture with Python",
    description: "A deep dive into building microservices using Flask, Docker, and Kubernetes.",
    date: "2024-02-20",
    tags: ["Microservices", "Flask", "Docker"],
    readTime: "12 min read"
  },
  {
    title: "PostgreSQL Performance Optimization",
    description: "Tips and tricks for optimizing database queries and improving PostgreSQL performance.",
    date: "2024-01-10",
    tags: ["PostgreSQL", "Database", "Performance"],
    readTime: "10 min read"
  }
];

const Blog = () => {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Technical Blog</h1>
          <p className="text-xl text-muted-foreground">
            Sharing insights, tutorials, and lessons learned from building software
          </p>
        </div>

        <div className="grid gap-6 mt-12">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-2xl hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
