import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const skills = [
  "Python", "Django", "Flask", "FastAPI",
  "PostgreSQL", "MongoDB", "Redis",
  "REST APIs", "GraphQL", "WebSocket",
  "Docker", "Kubernetes", "AWS",
  "Git", "CI/CD", "Microservices",
  "Test-Driven Development", "Agile"
];

const About = () => {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Senior Python Developer with a passion for building scalable solutions
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">My Journey</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              With over 8 years of experience in backend development, I specialize in building robust, 
              scalable systems using Python and modern frameworks. My expertise spans from designing 
              RESTful APIs to architecting microservices that handle millions of requests.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              I believe in writing clean, maintainable code and following best practices like test-driven 
              development. I'm passionate about mentoring junior developers and contributing to open-source 
              projects that make a difference.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              When I'm not coding, you'll find me exploring new technologies, contributing to tech 
              communities, or writing technical articles to share knowledge with fellow developers.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm py-1.5 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Core Values</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Quality Over Speed</h3>
              <p className="text-muted-foreground">
                I prioritize writing maintainable, well-tested code that stands the test of time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Technology evolves rapidly, and I'm committed to staying current with best practices and new tools.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                Great software is built by great teams. I value open communication and knowledge sharing.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
