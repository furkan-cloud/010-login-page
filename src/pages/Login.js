import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

const realPassword = 'furkan';
const realMailAddress = 'furkan@gmail.com';

const Login = ({ navigation }) => {
  const [mailAdress, setMailAdress] = useState('');
  const [userPassword, setUserPassword] = useState('');

  console.log(mailAdress);
  console.log(userPassword);

  const validation = (email, pass) => {
    return (email == realMailAddress && pass == realPassword
      ? navigation.navigate('Home')
      : console.warn('incorrect user'));
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Login Page</Text>
        <View>
          <TextInput
            placeholder="Please enter your mailAdress"
            value={mailAdress}
            onChangeText={(value) => setMailAdress(value)}
          />
          <TextInput
            placeholder="Please enter your username"
            value={userPassword}
            onChangeText={(value) => setUserPassword(value)}
          />
        </View>
        <TouchableOpacity onPress={() => validation(mailAdress, userPassword)}>
          <Text>Giriş</Text>
        </TouchableOpacity>

        <Button
          title="Second Page"
          onPress={() => navigation.navigate('SecondPage')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
