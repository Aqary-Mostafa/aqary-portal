'use client';

import { consoleLog } from '@/utils/console-log';

export const loadState = <T>(key: string): T | undefined => {
  try {
    if (typeof window === 'undefined') return undefined;

    const serializedState = localStorage.getItem(key);
    const data = serializedState
      ? (JSON.parse(serializedState) as T)
      : undefined;

    return data;
  } catch (error) {
    consoleLog('Error loading state from localStorage:', error);
    return undefined;
  }
};

export const saveState = (key: string, state: unknown) => {
  try {
    if (typeof window === 'undefined') return;

    const filteredState = JSON.parse(
      JSON.stringify(state, (key, value) =>
        key.startsWith('_') ? undefined : value,
      ),
    );

    const serializedState = JSON.stringify(filteredState);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    consoleLog('Error saving state to localStorage:', error);
  }
};
