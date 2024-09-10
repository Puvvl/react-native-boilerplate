# React Native Boilerplate

This React Native boilerplate project is designed to accelerate your mobile app development by providing a robust starting point with built-in authentication, environment variable management, TypeScript support, and more. It includes essential tools and configurations to ensure a scalable and maintainable codebase.

## Features

- **Authentication**: Supports multiple authentication methods, including:
  - Email and password
  - Google Sign-In
  - Apple Sign-In
- **Environment Variables**: Managed with `react-native-dotenv` for secure and easy configuration.
- **Navigation**: Integrated with React Navigation for smooth screen transitions and navigation flows.
- **TypeScript**: Fully typed with TypeScript to ensure code quality and reduce runtime errors.
- **Linting and Formatting**: Configured with ESLint and Prettier for consistent code style and automatic formatting.
- **Path Aliases**: Simplifies imports using path aliases for better project structure and readability.
- **Expo Development**: Supports Expo with custom development builds using `expo-dev-client` for native modules.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) (recommended for dependency management)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) for development builds and running the project
- [EAS CLI](https://docs.expo.dev/build/setup/) for creating custom development builds


## Getting Started

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Puvvl/react-native-boilerplate.git
   cd react-native-boilerplate
   ```

2. **Install dependencies**

  ```bash
  yarn install
  ```

3. **Set up environment variables**

  Create a .env file in the root directory with the necessary environment variables

  

    FIREBASE_API_KEY=your-api-key
    FIREBASE_AUTH_DOMAIN=your-auth-domain
    FIREBASE_PROJECT_ID=your-project-id
    FIREBASE_STORAGE_BUCKET=your-storage-bucket
    FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    FIREBASE_APP_ID=your-app-id
    FIREBASE_MEASUREMENT_ID=your-measurement-id
    EXPO_CLIENT_ID=your-expo-client-id
    IOS_CLIENT_ID=your-ios-client-id
    ANDROID_CLIENT_ID=your-android-client-id

### Running the App

1. **Start the development server**

  ```bash
  yarn start
  ```

2. **Create a development build with EAS**

  For native modules, use EAS to create a development build

  ```bash
  eas build --profile development --platform all
  ```

  Install the generated build on your device and connect to the local dev server with

  ```bash
  yarn start --dev-client
  ```

## Available Scripts

`yarn start`: Start the development server with Expo.

`yarn android`: Run the app on an Android emulator or connected device.

`yarn ios`: Run the app on an iOS simulator or connected device.

`yarn lint`: Run ESLint to check for code style issues.

`yarn lint:fix`: Run ESLint to fix for code style issues.

`yarn format`: Run Prettier to format the code.

## Environment Variables

Environment variables are managed using `react-native-dotenv`. Make sure to add a `.env` file in the root directory and configure it according to your project’s requirements. The variables include keys for Firebase configuration and client IDs for Google sign-in.

## Linting and Formatting

**ESLint**: Configured with recommended rules for React Native, TypeScript, and Prettier integration.
**Prettier**: Ensures consistent code formatting across the project.

## Path Aliases

Path aliases are set up to simplify imports and keep your code clean and maintainable. The aliases are defined in `babel.config.js` and `tsconfig.json` to ensure consistency across the project.


## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License

This complete README includes all the detailed setup and configuration instructions, code examples, and project information as requested. Feel free to adjust the details according to your specific project and repository. Let me know if there's anything else you'd like to add or modify!
