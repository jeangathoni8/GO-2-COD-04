# Fortify Passwords

A modern, secure password generator built with React, TypeScript, and Tailwind CSS. Generate strong, cryptographically secure passwords with a beautiful and intuitive user interface.

![Fortify Passwords](https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=2000&h=600)

## Features

- 🔐 Cryptographically secure password generation
- 🎨 Beautiful, responsive design with dark mode support
- ⚡ Real-time password strength analysis
- 🎛️ Customizable password options:
  - Password length (8-32 characters)
  - Character sets (uppercase, lowercase, numbers, special characters)
  - Multiple password generation (up to 10 at once)
- 📋 One-click copy to clipboard
- 🌙 Light/Dark/System theme support
- ⌨️ Keyboard accessible
- 📱 Mobile-friendly interface

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router
- **Build Tool**: Vite
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jeangathoni8/GO-2-COD-04.git
cd fortify-passwords
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Security

Fortify Passwords uses the Web Crypto API's `crypto.getRandomValues()` for generating cryptographically secure random values. This ensures that generated passwords are truly random and secure.

Password strength is calculated based on:

- Password length
- Character set variety
- Character distribution

No passwords are stored or transmitted - all generation happens locally in your browser.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI Framework by [Tailwind CSS](https://tailwindcss.com/)
- Built with [Vite](https://vitejs.dev/)
