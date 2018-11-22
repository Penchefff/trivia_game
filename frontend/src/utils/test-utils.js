import React from 'react'
import {render} from 'react-testing-library'
import {ThemeProvider} from 'emotion-theming'
import {
  theme as themes,
} from '@sumup/circuit-ui';

const { circuit } = themes;

const customRender = (node, options) => render(
  <ThemeProvider theme={circuit}>
  {node}
  </ThemeProvider>,
    options,
  )

// re-export everything
export * from 'react-testing-library'

// override render method
export {customRender as render}
