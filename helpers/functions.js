import Toast from 'react-native-toast-message';

export const Capitalize = string => {
    string = string.replace(/(^\w|\s\w)(\S*)/g, (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase());
    return string;
  };

export const ToastError = (msg) => {
    Toast.show({
        type: 'error',
        text1: 'ERROR',
        text2: msg
    });
}