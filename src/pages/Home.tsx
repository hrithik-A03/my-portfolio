import ClientLayout from "@/layouts/ClientLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";

export default function Home() {
  return (
    <ClientLayout>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Web Designer</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Hi, I'm Hrithik
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
           A passionate beginner web designer and developer who loves bringing creative ideas to life through clean, modern, and user-friendly websites. <br />

I’ve recently started my journey in web design, focusing on building personal portfolios, small business websites, and creative landing pages. <br/> <p>My goal is to help individuals and startups establish their online presence with simple yet impactful designs.</p>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio">
              <Button size="lg" className="gap-2">
                Check My Work <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/get-quote">
              <Button size="lg" variant="outline" className="gap-2">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border bg-card">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Modern Development</h3>
              <p className="text-sm text-muted-foreground">
                Using cutting-edge AI tools to build responsive, modern websites
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border bg-card">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Clean Design</h3>
              <p className="text-sm text-muted-foreground">
                Simple, beautiful designs that put your content first
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border bg-card">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Turnaround</h3>
              <p className="text-sm text-muted-foreground">
                Fast delivery without compromising on quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's work together to create something amazing. Get a free quote today!
          </p>
          <Link to="/get-quote">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </section>
    </ClientLayout>
  );
}
