import { useState } from "react";
import ClientLayout from "@/layouts/ClientLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, MapPin, Briefcase, Linkedin, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function Contact() {
  const { toast } = useToast();

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

  // --- Feedback form state ---
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !content || rating === 0) {
      toast({
        title: "Missing fields",
        description: "Please fill all required fields and select a rating.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.from("feedback").insert([
        {
          name,
          role,
          content,
          rating,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      toast({
        title: "Thank you!",
        description: "Your feedback has been submitted successfully.",
      });

      setName("");
      setRole("");
      setContent("");
      setRating(0);
    } catch (error: any) {
      toast({
        title: "Submission failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
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
          <Card className="bg-muted/30 mb-16">
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

          {/* Feedback Section */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Share Your Feedback
                </CardTitle>
                <CardDescription className="text-center">
                  I’d love to hear your thoughts! Your feedback helps me improve.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name *</label>
                    <Input
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Role</label>
                    <Input
                      placeholder="e.g. Client, Developer, Designer..."
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Feedback *</label>
                    <Textarea
                      placeholder="Write your feedback..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Rating *</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          onClick={() => setRating(star)}
                          className={`h-6 w-6 cursor-pointer transition ${
                            star <= rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full mt-4"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit Feedback"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}
