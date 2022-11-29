import '../css/style.css'
import { Footer } from './components/Footer'
import {Header} from './components/Header'
import { MainBody } from './components/MainBody'


document.querySelector('#app').innerHTML = `
  
  ${Header()}
  ${MainBody()}
  ${Footer()}

  
`