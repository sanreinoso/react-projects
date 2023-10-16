import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'

const app = createRoot(document.getElementById('app'))

app.render(<App></App>)