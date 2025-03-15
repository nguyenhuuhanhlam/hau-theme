import { createRoot } from 'react-dom/client'

import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MainRouter from './routes'

createRoot(document.getElementById('root')).render(<MainRouter/>)
