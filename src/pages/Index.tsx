import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Header from '@/components/Header';
import DashboardStats from '@/components/DashboardStats';
import RecentClaims from '@/components/RecentClaims';
import ClaimSearch from '@/components/ClaimSearch';

const Index = () => {
  const [username, setUsername] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      navigate('/login');
    } else {
      setUsername(currentUser);
    }
  }, [navigate]);

  const handleBookAppointment = () => {
    navigate('/book-appointment');
  };

  if (!username) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome, {username}</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={handleBookAppointment}>Book Medical Appointment</Button>
          </CardContent>
        </Card>
        <DashboardStats />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <RecentClaims />
          <ClaimSearch />
        </div>
      </main>
    </div>
  );
};

export default Index;