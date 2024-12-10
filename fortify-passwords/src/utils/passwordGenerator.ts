import { PasswordOptions } from "../types/password";

const CHAR_SETS = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    special: '!@#$%^&*()_+-=[]{}|;:,.<>?'
  };
  
  export const generatePassword = (options: PasswordOptions): string => {
    let chars = '';
    if (options.includeUppercase) chars += CHAR_SETS.uppercase;
    if (options.includeLowercase) chars += CHAR_SETS.lowercase;
    if (options.includeNumbers) chars += CHAR_SETS.numbers;
    if (options.includeSpecialChars) chars += CHAR_SETS.special;
  
    if (!chars) chars = CHAR_SETS.lowercase + CHAR_SETS.numbers;
  
    let password = '';
    const array = new Uint32Array(options.length);
    crypto.getRandomValues(array);
    
    for (let i = 0; i < options.length; i++) {
      password += chars[array[i] % chars.length];
    }
  
    return password;
  };
  
  export const calculateStrength = (password: string): number => {
    const length = password.length;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
  
    const variety = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
    const lengthScore = Math.min(length / 20, 1);
    const varietyScore = variety / 4;
  
    return (lengthScore * 0.7 + varietyScore * 0.3);
  };