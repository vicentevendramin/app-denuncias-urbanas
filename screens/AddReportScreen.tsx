import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

const AddReportScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!title || !description) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Simulação de adição de dados (substituir por integração com DB futuramente)
    console.log('Denúncia adicionada:', { title, description });

    Alert.alert('Sucesso', 'Denúncia adicionada com sucesso!');
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Nova Denúncia</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderRadius: 5,
          height: 100,
          textAlignVertical: 'top',
        }}
        placeholder="Descrição"
        multiline
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Salvar" onPress={handleSubmit} />
    </View>
  );
};

export default AddReportScreen;
