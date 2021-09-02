import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./src/templates/theme.js"
import ClientOnly from "./src/clientOnly.js"
import { CssBaseline } from "@material-ui/core"
import GlobalContextProvider from "./src/context/GlobalContextProvider"

export default function MuiRootWrapper({ element }) {
  try {
    return (
      <ClientOnly>
        <ThemeProvider theme={theme}>
          <GlobalContextProvider>
            <CssBaseline />
            {element}
          </GlobalContextProvider>
        </ThemeProvider>
      </ClientOnly>
    )
  } catch (e) {
    return (
      <ClientOnly>
        <ThemeProvider theme={theme}>
          <GlobalContextProvider>
            <CssBaseline />
            {element}
          </GlobalContextProvider>
        </ThemeProvider>
      </ClientOnly>
    )
  }
}
