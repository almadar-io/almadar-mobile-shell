import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// {{GENERATED_PAGE_IMPORTS}}
// Compiler generates: import { HomePage, TasksPage, ... } from '../generated/pages';

const Stack = createNativeStackNavigator();

interface AppNavigatorProps {
  schema: any;
}

export const AppNavigator: React.FC<AppNavigatorProps> = ({ schema }) => {
  // {{GENERATED_NAVIGATION_CONFIG}}
  // Compiler injects navigation configuration based on schema pages

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#111827',
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
    >
      {/* {{GENERATED_ROUTES}} */}
      {/* Compiler generates: <Stack.Screen name="Home" component={HomePage} /> */}
    </Stack.Navigator>
  );
};
