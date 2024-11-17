import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { addReport } from '../services/reportService';
import { globalStyles } from '../styles/globalStyles';

export default function ReportFormScreen({ navigation }: any) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    if (!title || !description) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    await addReport({
      title,
      description,
      date: new Date().toISOString().split('T')[0],
    });

    Alert.alert('Sucesso', 'Denúncia criada!');
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder="Título"
        style={globalStyles.text}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Descrição"
        style={globalStyles.text}
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}
