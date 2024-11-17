import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getReportById, Report } from '../services/reportService';
import { globalStyles } from '../styles/globalStyles';

export default function ReportDetailsScreen({ route }: any) {
  const [report, setReport] = useState<Report | null>(null); // Permitir null ou um objeto Report

  useEffect(() => {
    const fetchReport = async () => {
      const data = await getReportById(route.params.id);
      if (data) {
        setReport(data);
      } else {
        setReport(null); // Define como null caso não encontre o relatório
      }
    };
    fetchReport();
  }, [route.params.id]);

  if (!report) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{report.title}</Text>
      <Text style={globalStyles.text}>{report.description}</Text>
      <Text style={globalStyles.text}>Data: {report.date}</Text>
    </View>
  );
}
