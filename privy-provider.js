import React from 'react'
import {PrivyProvider as Provider} from '@privy-io/expo';
import {base} from 'viem/chains';

export function PrivyProvider({ children }) {
  return (
    <Provider
        appId='clsq47yxx00q0tqmb6zy8yknq'
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