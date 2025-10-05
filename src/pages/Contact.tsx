import ClientLayout from "@/layouts/ClientLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, MapPin, Briefcase, Linkedin } from "lucide-react";

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:hrithikshanthi03@gmail.com";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918549956554", "_blank");
  };

  const handleFiverrClick = () => {
    window.open("https://www.fiverr.com/i_am_hrithik", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/rethik-roshan-a-5285aa15a", "_blank");
  };

  return (
    <ClientLayout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <CardTitle>Email Me</CardTitle>
                <CardDescription>
                  Send me an email and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium mb-4">hrithikshanthi03@gmail.com</p>
                <Button onClick={handleEmailClick} className="w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <CardTitle>WhatsApp</CardTitle>
                <CardDescription>
                  Message me on WhatsApp for quick communication
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium mb-4">+91 8549956554</p>
                <Button onClick={handleWhatsAppClick} className="w-full">
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Professional Links */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 text-green-600 mb-4">
                  <Briefcase className="h-6 w-6" />
                </div>
                <CardTitle>Fiverr</CardTitle>
                <CardDescription>
                  Explore my freelance services and projects on Fiverr.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleFiverrClick}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:opacity-90"
                >
                  View Fiverr Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
                  <Linkedin className="h-6 w-6" />
                </div>
                <CardTitle>LinkedIn</CardTitle>
                <CardDescription>
                  Connect with me professionally on LinkedIn.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleLinkedInClick}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-90"
                >
                  Visit LinkedIn Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Working Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    I'm available for consultation and project discussions. Feel free to reach out
                    anytime, and I'll respond as soon as I can!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </ClientLayout>
  );
}