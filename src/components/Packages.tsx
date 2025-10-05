import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Basic",
      price: "₹3,700",
      description: "Perfect for small projects and personal websites",
      features: [
        "2 responsive pages",
        "Social media integration",
        "3-day delivery",
        "2 revisions",
        "1 plugin/extension",
        "Mobile optimized"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "₹6,475",
      description: "Ideal for professional portfolios and business sites",
      features: [
        "5 responsive pages",
        "3-4 custom design assets",
        "Social media integration",
        "5-day delivery",
        "3 revisions",
        "2 plugins/extensions",
        "SEO optimized",
        "Contact forms"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "₹14,800",
      description: "Complete solution for complex web applications",
      features: [
        "8 responsive pages",
        "3-4 custom design assets",
        "Advanced animations",
        "7-day delivery",
        "Unlimited revisions",
        "4 plugins/extensions",
        "Priority support",
        "Database integration",
        "Admin panel"
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Service Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your needs. All packages include responsive design and Lovable AI implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <Card 
              key={pkg.name} 
              className={cn(
                "relative overflow-hidden transition-all duration-300 hover:shadow-xl",
                pkg.popular && "border-primary shadow-lg scale-105"
              )}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-sm font-semibold">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name} Package</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="text-4xl font-bold text-primary mt-4">{pkg.price}</div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant={pkg.popular ? "gradient" : "default"} 
                  className="w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}