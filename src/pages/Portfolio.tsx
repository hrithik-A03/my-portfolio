import ClientLayout from "@/layouts/ClientLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const websites = [
    {
      title: "Project One",
      description: "A modern business website with clean design",
      url: "https://example.com",
      category: "Business"
    },
    {
      title: "Project Two",
      description: "Portfolio website for a creative professional",
      url: "https://example.com",
      category: "Portfolio"
    },
    {
      title: "Project Three",
      description: "E-commerce store with product showcase",
      url: "https://example.com",
      category: "E-commerce"
    }
    // Add your actual websites here
  ];

  return (
    <ClientLayout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              My Websites
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out the websites I've created. Each project showcases my growing skills 
              in web development.
            </p>
          </div>

          {/* Websites Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websites.map((website, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2">
                    <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded">
                      {website.category}
                    </span>
                  </div>
                  <CardTitle>{website.title}</CardTitle>
                  <CardDescription>{website.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href={website.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full gap-2">
                      Visit Site <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State if no websites */}
          {websites.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">
                I'm currently working on my first projects. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </ClientLayout>
  );
}
