import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';
import { login } from 'services/user-service';
import { auth } from './firebaseConfig';
import {
  getLocalStorage,
  getUserInformation,
  setLocalStorage,
} from '../../utils/localStorageHelper';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error } = useSelector((state: any) => state.auth);
  const [trigger, setTrigger] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserInformation();
        if (user) {
          setTrigger(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [isLoggedIn]);

  const handleLogin = async () => {
    // const response = await signInWithEmailAndPassword(auth, email, password);
    // const accessToken = await response.user.getIdToken();

    // await setLocalStorage('accessToken', accessToken);
    // dispatch(login());
  };

  // if (trigger) {
  //   console.log(user);
  //   alert(user.fullname);
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error && <Text style={styles.error}>{error}</Text>}
      {/* {isLoggedIn && <Text style={styles.error}>{isLoggedIn}</Text>} */}
      <Button title="Login" onPress={handleLogin} />
      {loading && <ActivityIndicator size="large" style={styles.loader} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  loader: {
    marginTop: 10,
  },
});

export default LoginScreen;
