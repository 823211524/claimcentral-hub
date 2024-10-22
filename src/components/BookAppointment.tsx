import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BookingForm from './BookingForm';
import { toast } from "sonner";

const BookAppointment = () => {
  const username = localStorage.getItem('currentUser');
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    toast.success("Logged out successfully");
    navigate('/signin');  // Changed from '/login' to '/signin'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Book Medical Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Welcome, {username}! Please arrange your medical appointment below.</p>
          <BookingForm />
          <div className="mt-6 flex justify-between">
            <Button onClick={handleGoHome} variant="outline">Go to Home</Button>
            <Button onClick={handleLogout} variant="destructive">Logout</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookAppointment;