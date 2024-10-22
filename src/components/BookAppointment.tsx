import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BookingForm from './BookingForm';

const BookAppointment = () => {
  const username = localStorage.getItem('currentUser');

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Book Medical Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Welcome, {username}! Please arrange your medical appointment below.</p>
          <BookingForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default BookAppointment;