import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const ClaimSearch = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Search Claims</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Input placeholder="Enter claim ID or claimant name" />
          <Button>Search</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClaimSearch;