import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce REST API",
    description: "Full-featured REST API for e-commerce platform with Django REST Framework, PostgreSQL, Redis caching, and Celery for async tasks.",
    tech: ["Python", "Django", "DRF", "PostgreSQL", "Redis", "Celery", "Docker"],
    github: "https://github.com",
    demo: "https://demo.example.com"
  },
  {
    title: "Microservices Architecture",
    description: "Scalable microservices system using Flask, RabbitMQ for message queuing, and Kubernetes for orchestration.",
    tech: ["Python", "Flask", "RabbitMQ", "Docker", "Kubernetes", "PostgreSQL"],
    github: "https://github.com"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Real-time data processing pipeline with Python, Apache Kafka, and FastAPI serving analytics data to React dashboard.",
    tech: ["Python", "FastAPI", "Kafka", "PostgreSQL", "React", "WebSocket"],
    github: "https://github.com",
    demo: "https://demo.example.com"
  },
  {
    title: "ML Model Deployment Pipeline",
    description: "End-to-end ML pipeline for training, versioning, and deploying machine learning models with MLflow and FastAPI.",
    tech: ["Python", "FastAPI", "MLflow", "Scikit-learn", "Docker", "AWS"],
    github: "https://github.com"
  }
];

const Projects = () => {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Featured Projects</h1>
          <p className="text-xl text-muted-foreground">
            A selection of my recent work in backend development and system architecture
          </p>
        </div>

        <div className="grid gap-6 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
