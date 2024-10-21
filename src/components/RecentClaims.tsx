import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const RecentClaims = () => {
  const recentClaims = [
    { id: '001', name: 'Bernard Matlho', date: '2023-05-01', status: 'Pending' },
    { id: '002', name: 'Kali Mamonyane', date: '2023-04-28', status: 'Approved' },
    { id: '003', name: 'Andile Sejamitlwa', date: '2023-04-25', status: 'Under Review' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Claims</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Claim ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentClaims.map((claim) => (
              <TableRow key={claim.id}>
                <TableCell>{claim.id}</TableCell>
                <TableCell>{claim.name}</TableCell>
                <TableCell>{claim.date}</TableCell>
                <TableCell>{claim.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentClaims;