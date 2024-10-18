import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BarChart, Users, FileText, AlertCircle } from "lucide-react"
import Header from '@/components/Header';
import DashboardStats from '@/components/DashboardStats';
import RecentClaims from '@/components/RecentClaims';
import ClaimSearch from '@/components/ClaimSearch';

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
      </main>
    </div>
  );
};

export default Index;