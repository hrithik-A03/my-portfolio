import { useState, useEffect } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import ProtectedRoute from "@/components/ProtectedRoute";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Eye } from "lucide-react";

interface Submission {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  service_type: string | null;
  budget: string | null;
  project_details: string | null;
  status: string | null;
  internal_notes: string | null;
  created_at: string;
  updated_at: string | null;
}

export default function Submissions() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from("Clients")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSubmissions((data as any) || []);
    } catch (error: any) {
      toast({
        title: "Error loading submissions",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from("Clients")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setSubmissions(submissions.filter((s) => s.id !== id));
      toast({
        title: "Success",
        description: "Submission deleted successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleUpdateStatus = async (id: string, status: string, notes?: string) => {
    try {
      const { error } = await (supabase
        .from("Clients") as any)
        .update({ status, internal_notes: notes })
        .eq("id", id);

      if (error) throw error;

      await loadSubmissions();
      setDialogOpen(false);
      toast({
        title: "Success",
        description: "Submission updated successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case "New":
        return "bg-blue-500";
      case "In Progress":
        return "bg-yellow-500";
      case "Completed":
        return "bg-green-500";
      default:
        return "bg-gray-500";
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
            <h1 className="text-4xl font-bold text-foreground">Submissions</h1>
            <p className="text-muted-foreground mt-2">
              Manage client consultation requests
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Submissions</CardTitle>
              <CardDescription>
                View and manage all client requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="font-medium">{submission.name}</TableCell>
                        <TableCell>{submission.email || "N/A"}</TableCell>
                        <TableCell>{submission.phone || "N/A"}</TableCell>
                        <TableCell>{submission.service_type || "N/A"}</TableCell>
                        <TableCell>{submission.budget || "N/A"}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(submission.status)}>
                            {submission.status || "New"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(submission.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setSelectedSubmission(submission);
                                setDialogOpen(true);
                              }}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDelete(submission.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {submissions.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    No submissions yet
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Detail Dialog */}
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Submission Details</DialogTitle>
              </DialogHeader>
              {selectedSubmission && (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Name</Label>
                      <p className="text-sm mt-1">{selectedSubmission.name}</p>
                    </div>
                    <div>
                      <Label>Email</Label>
                      <p className="text-sm mt-1">{selectedSubmission.email || "N/A"}</p>
                    </div>
                    <div>
                      <Label>Phone</Label>
                      <p className="text-sm mt-1">{selectedSubmission.phone || "N/A"}</p>
                    </div>
                    <div>
                      <Label>Service Type</Label>
                      <p className="text-sm mt-1">{selectedSubmission.service_type || "N/A"}</p>
                    </div>
                    <div>
                      <Label>Budget</Label>
                      <p className="text-sm mt-1">{selectedSubmission.budget || "N/A"}</p>
                    </div>
                  </div>

                  <div>
                    <Label>Project Details</Label>
                    <p className="text-sm mt-1 p-3 bg-muted rounded-md">
                      {selectedSubmission.project_details || "N/A"}
                    </p>
                  </div>

                  <div>
                    <Label>Status</Label>
                    <Select
                      defaultValue={selectedSubmission.status || "New"}
                      onValueChange={(value) => {
                        setSelectedSubmission({ ...selectedSubmission, status: value });
                      }}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="In Progress">In Progress</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Internal Notes</Label>
                    <Textarea
                      defaultValue={selectedSubmission.internal_notes || ""}
                      onChange={(e) => {
                        setSelectedSubmission({
                          ...selectedSubmission,
                          internal_notes: e.target.value,
                        });
                      }}
                      className="mt-1"
                      placeholder="Add internal notes..."
                    />
                  </div>

                  <Button
                    onClick={() =>
                      handleUpdateStatus(
                        selectedSubmission.id,
                        selectedSubmission.status || "New",
                        selectedSubmission.internal_notes || undefined
                      )
                    }
                    className="w-full"
                  >
                    Save Changes
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
