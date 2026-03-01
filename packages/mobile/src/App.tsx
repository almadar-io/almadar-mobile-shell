import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  ThemeProvider,
  EventBusProvider,
} from '@almadar/mobile/providers';
import { AppNavigator } from './navigation/AppNavigator';

// {{GENERATED_SCHEMA_IMPORT}}
// Compiler replaces this with: import schema from './generated/schema.json';
const schema = { orbitals: [] }; // Placeholder

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <EventBusProvider>
            <NavigationContainer>
              <AppNavigator schema={schema} />
            </NavigationContainer>
          </EventBusProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
