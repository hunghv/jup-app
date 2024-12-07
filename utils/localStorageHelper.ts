import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'UserInformation';

export const setLocalStorage = async (
  key: string,
  value: any
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting data in localStorage', error);
  }
};

export const getUserInformation = async (): Promise<any | null> => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    return value ? JSON.parse(value) : null; // Parse dữ liệu ra và trả về
  } catch (error) {
    console.error('Error getting data from localStorage', error);
    return null;
  }
};

export const getLocalStorage = async (key: string): Promise<any | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null; // Parse dữ liệu ra và trả về
  } catch (error) {
    console.error('Error getting data from localStorage', error);
    return null;
  }
};

export const removeLocalStorage = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key); // Xóa item khỏi localStorage
  } catch (error) {
    console.error('Error removing data from localStorage', error);
  }
};
