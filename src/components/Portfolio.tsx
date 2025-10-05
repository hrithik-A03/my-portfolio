import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "premium",
      description: "Full-featured online store with payment integration",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Lovable AI", "Supabase", "Stripe"],
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "standard",
      description: "Creative portfolio for a digital artist",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Lovable AI", "Tailwind CSS"],
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Business Landing Page",
      category: "basic",
      description: "Professional landing page for a startup",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Lovable AI"],
      liveUrl: "#",
    },
    {
      id: 4,
      title: "SaaS Dashboard",
      category: "premium",
      description: "Analytics dashboard with real-time data",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Lovable AI", "Charts", "API"],
      liveUrl: "#",
    },
    {
      id: 5,
      title: "Restaurant Website",
      category: "standard",
      description: "Modern restaurant site with online reservations",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Lovable AI", "Forms"],
      liveUrl: "#",
    },
    {
      id: 6,
      title: "Personal Blog",
      category: "basic",
      description: "Clean and minimal blog design",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Lovable AI", "CMS"],
      liveUrl: "#",
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects built with Lovable AI. Each one showcases clean code, 
            modern design, and exceptional user experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={filter === "all" ? "gradient" : "outline"}
            onClick={() => setFilter("all")}
          >
            All Projects
          </Button>
          <Button
            variant={filter === "basic" ? "gradient" : "outline"}
            onClick={() => setFilter("basic")}
          >
            Basic
          </Button>
          <Button
            variant={filter === "standard" ? "gradient" : "outline"}
            onClick={() => setFilter("standard")}
          >
            Standard
          </Button>
          <Button
            variant={filter === "premium" ? "gradient" : "outline"}
            onClick={() => setFilter("premium")}
          >
            Premium
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-video bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <Button variant="gradient" size="sm" className="w-full">
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Site
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;