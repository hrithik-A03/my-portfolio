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
        { name, role, content, rating, created_at: new Date().toISOString() },
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
      {/* ... JSX as before ... */}
    </ClientLayout>
  );
}
