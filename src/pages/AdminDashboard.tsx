import React, { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LogOut, RefreshCw, Users, Calendar, CreditCard } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import EmailPreviewDialog from "@/components/EmailPreviewDialog";

interface Booking {
  id: string;
  created_at: string;
  date: string;
  people: number;
  name: string;
  email: string;
  phone_country: string;
  phone: string;
  phone_type: string;
  needs_transfer: boolean;
  hotel_name: string | null;
  hotel_address: string | null;
  pickup_time: string;
  comment: string | null;
  boat_price_thb: number;
  deposit_thb: number;
  captain_price_thb: number;
  transfer_price_thb: number;
  payment_status: string;
  stripe_session_id: string | null;
}

const AdminDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, sess) => {
      setSession(sess);
      if (!sess) navigate('/admin-login');
    });

    supabase.auth.getSession().then(({ data: { session: sess } }) => {
      if (!sess) navigate('/admin-login');
      else {
        setSession(sess);
        fetchBookings();
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchBookings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      setBookings((data as Booking[]) || []);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin-login');
  };

  const statusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-600 hover:bg-green-700">Payé</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-600 hover:bg-yellow-700">En attente</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const stats = {
    total: bookings.length,
    completed: bookings.filter(b => b.payment_status === 'completed').length,
    pending: bookings.filter(b => b.payment_status === 'pending').length,
    totalRevenue: bookings.filter(b => b.payment_status === 'completed').reduce((sum, b) => sum + b.boat_price_thb, 0),
  };

  if (!session) return null;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-800/80 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">🛥️ Admin — Réservations</h1>
          <div className="flex items-center gap-3">
            <Button onClick={fetchBookings} variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:text-white">
              <RefreshCw className="w-4 h-4 mr-1" /> Rafraîchir
            </Button>
            <Button onClick={handleLogout} variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <LogOut className="w-4 h-4 mr-1" /> Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total réservations", value: stats.total, icon: Calendar, color: "text-blue-400" },
            { label: "Payées", value: stats.completed, icon: CreditCard, color: "text-green-400" },
            { label: "En attente", value: stats.pending, icon: Users, color: "text-yellow-400" },
            { label: "Revenu total", value: `฿${stats.totalRevenue.toLocaleString()}`, icon: CreditCard, color: "text-emerald-400" },
          ].map((stat, i) => (
            <Card key={i} className="bg-slate-800 border-slate-700">
              <CardContent className="p-4 flex items-center gap-3">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <div>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Table */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Toutes les réservations</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-slate-400 text-center py-8">Chargement...</p>
            ) : bookings.length === 0 ? (
              <p className="text-slate-400 text-center py-8">Aucune réservation pour le moment.</p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-700">
                      <TableHead className="text-slate-300">Date tour</TableHead>
                      <TableHead className="text-slate-300">Client</TableHead>
                      <TableHead className="text-slate-300">Téléphone</TableHead>
                      <TableHead className="text-slate-300">Pers.</TableHead>
                      <TableHead className="text-slate-300">Heure</TableHead>
                      <TableHead className="text-slate-300">Transfert</TableHead>
                      <TableHead className="text-slate-300">Prix total</TableHead>
                      <TableHead className="text-slate-300">Acompte</TableHead>
                      <TableHead className="text-slate-300">Capitaine</TableHead>
                      <TableHead className="text-slate-300">Statut</TableHead>
                      <TableHead className="text-slate-300">Emails</TableHead>
                      <TableHead className="text-slate-300">Créé le</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((b) => (
                      <TableRow key={b.id} className="border-slate-700 hover:bg-slate-700/50">
                        <TableCell className="text-white font-medium">{b.date}</TableCell>
                        <TableCell>
                          <div className="text-white">{b.name}</div>
                          <div className="text-xs text-slate-400">{b.email}</div>
                        </TableCell>
                        <TableCell className="text-slate-300">
                          <div>{b.phone_country} {b.phone}</div>
                          <div className="text-xs text-slate-400">{b.phone_type}</div>
                        </TableCell>
                        <TableCell className="text-white">{b.people}</TableCell>
                        <TableCell className="text-slate-300">{b.pickup_time}</TableCell>
                        <TableCell>
                          {b.needs_transfer ? (
                            <div>
                              <Badge className="bg-blue-600 text-xs">Oui</Badge>
                              {b.hotel_name && <div className="text-xs text-slate-400 mt-1">{b.hotel_name}</div>}
                            </div>
                          ) : (
                            <span className="text-slate-500">Non</span>
                          )}
                        </TableCell>
                        <TableCell className="text-white">฿{b.boat_price_thb.toLocaleString()}</TableCell>
                        <TableCell className="text-emerald-400">฿{b.deposit_thb.toLocaleString()}</TableCell>
                        <TableCell className="text-orange-400">฿{b.captain_price_thb.toLocaleString()}</TableCell>
                        <TableCell>{statusBadge(b.payment_status)}</TableCell>
                        <TableCell className="text-slate-400 text-xs">
                          {new Date(b.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
