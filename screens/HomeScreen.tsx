import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { getReports, Report } from '../services/reportService';
import { globalStyles } from '../styles/globalStyles';

export default function HomeScreen({ navigation }: any) {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    const fetchReports = async () => {
      const data = await getReports();
      setReports(data);
    };
    fetchReports();
  }, []);

  const renderItem = ({ item }: { item: Report }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ReportDetails', { id: item.id })}
      style={globalStyles.card}
    >
      <Text style={globalStyles.title}>{item.title}</Text>
      <Text style={globalStyles.text}>{item.description}</Text>
    </TouchableOpacity>
  );

  if (reports.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>Sem relatórios no momento.</Text>
        <Button title="Adicionar Denúncia" onPress={() => navigation.navigate('AddReport')} />
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <Button
        title="Adicionar Denúncia"
        onPress={() => navigation.navigate('AddReport')}
        color="#2196F3"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
