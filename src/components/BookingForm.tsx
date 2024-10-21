import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [provider, setProvider] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    toast.success("Booking request submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="provider" className="block text-sm font-medium text-gray-700">Medical Service Provider</label>
        <Select onValueChange={setProvider} value={provider}>
          <SelectTrigger id="provider">
            <SelectValue placeholder="Select a provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dr-boikobo">Dr. Boikobo</SelectItem>
            <SelectItem value="dr-mokgalong">Dr. Mokgalong</SelectItem>
            <SelectItem value="dr-lekgowe">Dr. Lekgowe</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Required</label>
        <Input
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          placeholder="e.g., Consultation, X-ray, Physical Therapy"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
        />
      </div>
      <Button type="submit">Submit Booking Request</Button>
    </form>
  );
};

export default BookingForm;