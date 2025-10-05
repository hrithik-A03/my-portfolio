import ClientLayout from "@/layouts/ClientLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, ShoppingCart, FileText, User, Briefcase, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Business Websites",
      description: "Professional websites for your business with modern design and functionality",
      features: ["Responsive design", "Contact forms", "Service showcases", "SEO optimized"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Sites",
      description: "Online stores with payment integration and product management",
      features: ["Product catalogs", "Shopping cart", "Payment gateway", "Order tracking"]
    },
    {
      icon: FileText,
      title: "Blog Websites",
      description: "Beautiful blogs for sharing your thoughts and stories with the world",
      features: ["Article management", "Categories & tags", "Comments section", "RSS feeds"]
    },
    {
      icon: User,
      title: "Portfolio Websites",
      description: "Showcase your work and skills with stunning portfolio sites",
      features: ["Project galleries", "About section", "Contact forms", "Testimonials"]
    },
    {
      icon: Globe,
      title: "Landing Pages",
      description: "High-converting landing pages for your products or services",
      features: ["Call-to-action", "Lead capture", "Analytics", "Fast loading"]
    },
    {
      icon: Sparkles,
      title: "Custom Solutions",
      description: "Unique websites tailored to your specific needs and requirements",
      features: ["Custom features", "API integration", "Database setup", "Admin panels"]
    }
  ];

  return (
    <ClientLayout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              My Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I create all kinds of websites using modern AI-powered tools. 
              Here's what I can build for you.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-2 text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-muted/30 rounded-lg p-12">
            <h2 className="text-2xl font-bold mb-4">Need a Website?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Let's discuss your project and create something amazing together
            </p>
            <Link to="/get-quote">
              <Button size="lg">Get a Free Quote</Button>
            </Link>
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}
