import React from 'react'
import {PrivyProvider as Provider} from '@privy-io/expo';
import {base} from 'viem/chains';

export function PrivyProvider({ children }) {
  return (
    <Provider
        appId={process.EXPO_PUBLIC_PRIVY_APP_ID}
        config={{
            loginMethods: ['email', 'wallet', 'google'],
            defaultChain: base,
            appearance: {
                theme: 'light',
                accentColor: '#676FFF',
                logo: 'your-logo-url'
            },
            embeddedWallets: {
                createOnLogin: 'users-without-wallets',
                noPromptOnSignature: true
            }
        }}
    >
        {children}
    </Provider>
  )
}