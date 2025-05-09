// app/index.tsx (or a new file like screens/LoginScreen.tsx)

import React, { useState } from 'react';
import { storeToken } from '../utils/auth';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity, // More customizable than Button
  StyleSheet,
  Alert, // For simple feedback
  KeyboardAvoidingView, // Helps prevent keyboard from covering inputs
  Platform, // For platform-specific behavior
} from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    // TODO: Replace with actual API call for authentication
    console.log('Attempting login...');
    // Simulate successful login and getting a token
    const fakeApiToken = `fake-token-${Date.now()}`;

    if (fakeApiToken) { // Check if login was successful
      try {
        await storeToken(fakeApiToken); // Use the imported function
        Alert.alert('Success', 'Logged in successfully!');
        router.replace('/')
      } catch (error) {
         Alert.alert('Error', 'Failed to store login session.');
      }
    } else {
      Alert.alert('Error', 'Invalid credentials.');
    }
  };


  return (
    // KeyboardAvoidingView helps push content up when keyboard appears
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888" // Light gray placeholder text
          value={email}
          onChangeText={setEmail} // Updates the email state
          keyboardType="email-address" // Shows email keyboard layout
          autoCapitalize="none" // Prevents auto-capitalization
          autoComplete="email" // Helps with autofill
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword} // Updates the password state
          secureTextEntry={true} // Hides the password input
          autoComplete="password" // Helps with autofill
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        {/* Add links for password reset or sign up */}
        {/*
        <TouchableOpacity onPress={() => console.log('Forgot Password pressed')}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Sign Up pressed')}>
          <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
        */}
      </View>
    </KeyboardAvoidingView>
  );
}

// StyleSheet for organizing styles
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up full screen
    backgroundColor: '#f0f0f0', // Light background color
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    paddingHorizontal: 30, // Add some side padding
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff', // White background for input
    borderWidth: 1,
    borderColor: '#ccc', // Gray border
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333', // Dark text color
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF', // Blue background color (iOS style)
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10, // Add some space above the button
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007AFF',
    marginTop: 15,
    fontSize: 14,
  },
});
