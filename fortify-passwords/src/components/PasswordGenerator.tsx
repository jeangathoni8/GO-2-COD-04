import React, { useState } from 'react';
import { Copy, RefreshCw } from 'lucide-react';
import { PasswordOptions, GeneratedPassword } from '../types/password';
import { generatePassword, calculateStrength } from '../utils/passwordGenerator';
import { PasswordStrengthMeter } from './PasswordStrengthMeter';

export const PasswordGenerator: React.FC = () => {
  const [options, setOptions] = useState<PasswordOptions>({
    length: 16,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSpecialChars: true,
    quantity: 1
  });

  const [passwords, setPasswords] = useState<GeneratedPassword[]>([]);
  const [copied, setCopied] = useState<boolean>(false);

  const handleGenerate = () => {
    const newPasswords = Array.from({ length: options.quantity }, () => {
      const value = generatePassword(options);
      return {
        value,
        strengthScore: calculateStrength(value)
      };
    });
    setPasswords(newPasswords);
    setCopied(false);
  };

  const handleCopy = async (password: string) => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Password Generator</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password Length: {options.length}
            </label>
            <input
              type="range"
              min="8"
              max="32"
              value={options.length}
              onChange={(e) => setOptions({ ...options, length: Number(e.target.value) })}
              className="w-full accent-primary-600 dark:accent-primary-400"
            />
          </div>

          <div className="space-y-2">
            {[
              { key: 'includeUppercase', label: 'Uppercase Letters (A-Z)' },
              { key: 'includeLowercase', label: 'Lowercase Letters (a-z)' },
              { key: 'includeNumbers', label: 'Numbers (0-9)' },
              { key: 'includeSpecialChars', label: 'Special Characters (!@#$%^&*)' }
            ].map(({ key, label }) => (
              <label key={key} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={options[key as keyof PasswordOptions] as boolean}
                  onChange={(e) => setOptions({ ...options, [key]: e.target.checked })}
                  className="rounded text-primary-600 dark:text-primary-400"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
              </label>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Number of Passwords: {options.quantity}
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={options.quantity}
              onChange={(e) => setOptions({ ...options, quantity: Number(e.target.value) })}
              className="w-full accent-primary-600 dark:accent-primary-400"
            />
          </div>

          <button
            onClick={handleGenerate}
            className="w-full flex items-center justify-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Generate Password{options.quantity > 1 ? 's' : ''}</span>
          </button>
        </div>
      </div>

      {passwords.length > 0 && (
        <div className="space-y-4">
          {passwords.map((password, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-mono text-lg dark:text-white">{password.value}</p>
                <button
                  onClick={() => handleCopy(password.value)}
                  className="p-2 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  title="Copy to clipboard"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
              <PasswordStrengthMeter strength={password.strengthScore} />
            </div>
          ))}
        </div>
      )}

      {copied && (
        <div className="fixed bottom-4 right-4 bg-accent-500 text-white px-4 py-2 rounded-md shadow-lg">
          Password copied to clipboard!
        </div>
      )}
    </div>
  );
};