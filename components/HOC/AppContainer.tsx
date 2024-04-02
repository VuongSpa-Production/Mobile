/**
 * AppContainer.tsx
 * Copyright (c) 2024 CLB DevTeam.
 * Licensed under the MIT License.
 */


import React from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type AppContainerProps = {
    children: React.ReactNode;
};

const AppContainer = ({ children }: AppContainerProps) => {
    const insets = useSafeAreaInsets()

    return (
        <ScrollView style={{
            marginTop: insets.top
        }}
        >
            {children}
        </ScrollView>
    );
}

export default AppContainer;