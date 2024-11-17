import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface ReportCardProps {
  title: string;
  description: string;
  onPress: () => void;
}

export default function ReportCard({ title, description, onPress }: ReportCardProps) {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginBottom: 10, padding: 15, backgroundColor: '#fff', borderRadius: 5 }}>
      <Text style={{ fontWeight: 'bold' }}>{title}</Text>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
}
