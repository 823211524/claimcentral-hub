import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Header from '@/components/Header';
import DashboardStats from '@/components/DashboardStats';
import RecentClaims from '@/components/RecentClaims';
import ClaimSearch from '@/components/ClaimSearch';
import BookingForm from '@/components/BookingForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Motor Vehicle Accident Fund Claimants Dashboard</h1>
        <DashboardStats />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <RecentClaims />
          <ClaimSearch />
        </div>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Arrange Medical Appointment</CardTitle>
          </CardHeader>
          <CardContent>
            <BookingForm />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;