const React = require('react')
const ReactDOMServer = require('react-dom/server');
const { default: styled, ThemeProvider, ServerStyleSheet } = require('styled-components')

const Foo = styled.div(({ theme }) => {
    console.log('theme is', theme) // theme should not be undefined!
    return ({
      color: theme.color.text
  })
})

// `theme` inside Foo is only undefined when Foo is wrapped by Bar
const Bar = styled(Foo)({
  backgroundColor: 'green'
})

const el = React.createElement(
  ThemeProvider, { theme: { color: 'red' } },
  [
    React.createElement(Bar, null, 'Test')
  ]
)

const result = ReactDOMServer.renderToStaticMarkup(
  [
    el
  ]
)

console.log('result is', result)