import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">AI Specialist</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Hi, I'm Hrithik </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4"></p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I specialize in creating stunning websites and portfolios using{" "}
            <span className="text-primary font-semibold">AI</span> tools. 
            Transform your ideas into beautiful, responsive web experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={() => document.getElementById('packages')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              View Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" onClick={() => document.getElementById('portfolio')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              <Code2 className="mr-2 h-5 w-5" />
              See My Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3-7</div>
              <div className="text-sm text-muted-foreground">Days Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
