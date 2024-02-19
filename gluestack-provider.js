import { GluestackUIProvider as Provider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

export function GluestackUIProvider({ children }) {
  return (
    <Provider config={config}>
      {children}
    </Provider>
  )
}