import { useState, useEffect } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import ProtectedRoute from "@/components/ProtectedRoute";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { FileText, MessageSquare, Users, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalSubmissions: 0,
    totalFeedback: 0,
    totalUsers: 0,
    newSubmissions: 0,
  });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      // Get total submissions
      const { count: submissionsCount } = await supabase
        .from("Clients")
        .select("*", { count: "exact", head: true });

      // Get new submissions
      const { count: newCount } = await (supabase
        .from("Clients") as any)
        .select("*", { count: "exact", head: true })
        .eq("status", "New");

      // Get total feedback
      const { count: feedbackCount } = await supabase
        .from("feedback")
        .select("*", { count: "exact", head: true });

      // Get total users
      const { count: usersCount } = await supabase
        .from("user_roles")
        .select("*", { count: "exact", head: true });

      setStats({
        totalSubmissions: submissionsCount || 0,
        totalFeedback: feedbackCount || 0,
        totalUsers: usersCount || 0,
        newSubmissions: newCount || 0,
      });
    } catch (error: any) {
      toast({
        title: "Error loading statistics",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <ProtectedRoute requiredRole="admin">
        <AdminLayout>
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </AdminLayout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute requiredRole="admin">
      <AdminLayout>
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Welcome to your admin dashboard
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Submissions
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalSubmissions}</div>
                <p className="text-xs text-muted-foreground">
                  {stats.newSubmissions} new requests
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Feedback
                </CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalFeedback}</div>
                <p className="text-xs text-muted-foreground">
                  Customer testimonials
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalUsers}</div>
                <p className="text-xs text-muted-foreground">
                  Registered accounts
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Conversion Rate
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.totalSubmissions > 0
                    ? Math.round((stats.newSubmissions / stats.totalSubmissions) * 100)
                    : 0}
                  %
                </div>
                <p className="text-xs text-muted-foreground">New vs total</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Navigate to different sections of your dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                <a
                  href="/admin/submissions"
                  className="p-4 border rounded-lg hover:bg-muted transition-colors"
                >
                  <h3 className="font-semibold mb-2">View Submissions</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage client consultation requests
                  </p>
                </a>
                <a
                  href="/admin/feedback"
                  className="p-4 border rounded-lg hover:bg-muted transition-colors"
                >
                  <h3 className="font-semibold mb-2">View Feedback</h3>
                  <p className="text-sm text-muted-foreground">
                    Review customer testimonials
                  </p>
                </a>
                <a
                  href="/admin/users"
                  className="p-4 border rounded-lg hover:bg-muted transition-colors"
                >
                  <h3 className="font-semibold mb-2">Manage Users</h3>
                  <p className="text-sm text-muted-foreground">
                    View and manage user accounts
                  </p>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
