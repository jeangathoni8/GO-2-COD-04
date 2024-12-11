import React from 'react';

interface PasswordStrengthMeterProps {
  strength: number;
}

export const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({ strength }) => {
  const getStrengthLabel = (score: number): string => {
    if (score >= 0.8) return 'Very Strong';
    if (score >= 0.6) return 'Strong';
    if (score >= 0.4) return 'Medium';
    return 'Weak';
  };

  const getStrengthColor = (score: number): string => {
    if (score >= 0.8) return 'bg-accent-500';
    if (score >= 0.6) return 'bg-primary-500';
    if (score >= 0.4) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="w-full space-y-2">
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${getStrengthColor(strength)} transition-all duration-300`}
          style={{ width: `${strength * 100}%` }}
        />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Strength: <span className="font-medium">{getStrengthLabel(strength)}</span>
      </p>
    </div>
  );
};