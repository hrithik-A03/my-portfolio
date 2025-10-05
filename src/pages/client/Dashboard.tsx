import ClientLayout from "@/layouts/ClientLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Users } from "lucide-react";
export default function ClientDashboard() {
  return <ClientLayout>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Hi, I'm Hrithik</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">I specialize in creating stunning websites and portfolios using Lovable AI tools. Transform your ideas into beautiful, responsive web experiences. </p>
          <Link to="/client/bookings">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Quality Service</CardTitle>
                <CardDescription>
                  Top-notch solutions tailored to your specific needs
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Star className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Expert Team</CardTitle>
                <CardDescription>
                  Experienced professionals dedicated to your success
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Client Focused</CardTitle>
                <CardDescription>
                  Your satisfaction is my top priority
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Request a free consultation and discover how we can help your business grow
          </p>
          <Link to="/client/bookings">
            <Button size="lg">Request a Quote</Button>
          </Link>
        </div>
      </section>
    </ClientLayout>;
}