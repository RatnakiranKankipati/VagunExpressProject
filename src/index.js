import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { AppProvider } from './context'


createRoot(document.getElementById('root')).render(
    <AppProvider>
<App />
    </AppProvider>
)
