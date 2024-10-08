// DarkModePopup.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useTheme } from '@/utils/ThemeContext';

interface DarkModePopupProps {
  visible: boolean;
  onClose: () => void;
}

const DarkModePopup: React.FC<DarkModePopupProps> = ({ visible, onClose }) => {
  const { setTheme } = useTheme();

  const toggleTheme = (mode: 'light' | 'dark') => {
    setTheme(mode);
    onClose();
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.popup}>
          <Text style={styles.title}>Select Theme</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => toggleTheme('light')}
          >
            <Text style={styles.buttonText}>Light Mode</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => toggleTheme('dark')}
          >
            <Text style={styles.buttonText}>Dark Mode</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
  },
});

export default DarkModePopup;
