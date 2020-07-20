import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  Avatar,
  Title,
  Subheading,
  Button,
  TextInput,
  Card,
} from 'react-native-paper';

import Header from '../../components/Login/HeaderLogin';

import style from './styles';

const Register = ({navigation}) => {
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
  const [step, setStep] = useState('personalData');

  const personalData = (
    <ScrollView style={{width: Dimensions.get('window').width}}>
      <Header />
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TextInput
          style={style.fields}
          keyboardType="email-address"
          label="Email"
          mode="outlined"
        />

        <TextInput style={style.fields} label="Nome Completo" mode="outlined" />
        <TextInput
          style={style.fields}
          keyboardType="numeric"
          label="Telefone"
          mode="outlined"
        />

        <TextInput
          style={style.fields}
          secureTextEntry
          label="Senha"
          mode="outlined"
        />
        <TextInput style={style.fields} label="Cidade" mode="outlined" />

        <Button
          style={style.fields}
          mode="contained"
          onPress={() => setStep('vehicleData')}>
          Continuar
        </Button>
      </KeyboardAvoidingView>
    </ScrollView>
  );

  const vehicleData = (
    <ScrollView style={{width: Dimensions.get('window').width}}>
      <Header />

      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TextInput
          style={style.fields}
          label="Qual o seu veiculo?"
          mode="outlined"
        />
        <TextInput style={style.fields} label="Marca" mode="outlined" />
        <TextInput style={style.fields} label="Modelo" mode="outlined" />
        <TextInput style={style.fields} label="Ano" mode="outlined" />
        <TextInput
          style={style.fields}
          label="Placa do Veiculo"
          mode="outlined"
        />
        <Button
          style={style.fields}
          mode="contained"
          onPress={() => setStep('uploadDocuments')}>
          Continuar
        </Button>
      </KeyboardAvoidingView>
    </ScrollView>
  );

  const uploadDocuments = (
    <View style={style.container}>
      <View style={{width: Dimensions.get('window').width}}>
        <Header />
      </View>
      <Card style={style.card}>
        <Card.Title
          title="Upload de Documentos"
          subtitle="Carteina Nacional De Habilitação - CNH"
          left={LeftContent}
        />
        <Card.Cover
          source={{
            uri:
              'https://www.mobiletime.com.br/wp-content/uploads/2019/09/unnamed3.jpg',
          }}
        />
        <Card.Actions>
          <Button>Escolher</Button>
        </Card.Actions>
      </Card>
      <Button
        style={style.fields}
        mode="contained"
        onPress={() => navigation.navigate('Login')}>
        Cadastrar
      </Button>
    </View>
  );

  const steps = {
    personalData: personalData,
    vehicleData: vehicleData,
    uploadDocuments: uploadDocuments,
  };

  const getStep = stepNow => steps[stepNow] || personalData;

  return <View style={style.container}>{getStep(step)}</View>;
};

export default Register;
