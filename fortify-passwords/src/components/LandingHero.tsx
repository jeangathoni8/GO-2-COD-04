import React from 'react';
import { Shield, Lock, Key } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LandingHero: React.FC = () => {
  return (
    <div className="py-20 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Shield className="w-20 h-20 text-primary-600 dark:text-primary-400" />
        </div>
        <h1 className="mt-6 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          Secure Your Digital Life
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Generate strong, unique passwords to protect your online accounts with our advanced password generator.
        </p>
        <div className="mt-10">
          <Link
            to="/generator"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            Start Generating
            <Key className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              icon: Shield,
              title: 'Secure Generation',
              description: 'Uses cryptographically secure methods to generate truly random passwords'
            },
            {
              icon: Lock,
              title: 'Customizable Options',
              description: 'Tailor your passwords with various character sets and length options'
            },
            {
              icon: Key,
              title: 'Strength Analysis',
              description: 'Get instant feedback on password strength and security'
            }
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="flex justify-center">
                <Icon className="w-10 h-10 text-accent-600 dark:text-accent-400" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};