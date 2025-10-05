// src/components/Navigation.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { toast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_, session) => setUser(session?.user ?? null)
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({ title: "Logged out", description: "You have been successfully logged out." });
      navigate("/");
    } catch {
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#packages" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href === "/") navigate("/");
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 border-b border-border/20 backdrop-blur-md bg-background/70 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <motion.div
          className="text-2xl font-extrabold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/")}
        >
          hrithikStudio
        </motion.div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.href || location.hash === item.href;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-primary ${
                  isActive ? "text-primary" : "text-foreground/70"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-gradient-to-r from-primary to-pink-500 transition-all duration-300 scale-x-0 origin-left ${
                    isActive ? "scale-x-100" : "hover:scale-x-100"
                  }`}
                />
              </button>
            );
          })}
          {user && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="ml-4 rounded-xl border-primary/30 hover:bg-primary/10 transition duration-300"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          )}
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden px-4 pb-4 border-t border-border/20 bg-background/80 backdrop-blur-xl shadow-lg"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-3 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition duration-300"
              >
                {item.label}
              </button>
            ))}
            {user && (
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-4 rounded-lg border-primary/20 hover:bg-primary/10 transition duration-300"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
