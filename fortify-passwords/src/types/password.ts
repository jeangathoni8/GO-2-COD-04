export interface PasswordOptions {
    length: number;
    includeUppercase: boolean;
    includeLowercase: boolean;
    includeNumbers: boolean;
    includeSpecialChars: boolean;
    quantity: number;
  }
  
  export interface GeneratedPassword {
    value: string;
    strengthScore: number;
  }