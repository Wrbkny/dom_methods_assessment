

const htmlElement = document.createElement('HTML')
const headElement = document.createElement('HEAD')
const metaElement = document.createElement('META')
const titleElement = document.createElement('TITLE')
const bodyElement = document.createElement('BODY')
const buttonElement = document.createElement('BUTTON')
const mainElement = document.createElement('MAIN')
const scriptElement = document.createElement('SCRIPT')
const imgElement = document.createElement('IMG')
const aElement = document.createElement('A')

imgElement.classList.add('image')
//imgElement.img = src;"https://www.shutterstock.com/image-photo/cannes-france-may-15-2018-chewbacca-1227212848" ;alt="Simply Easy Learning" ;width="200"
//height="80" 
//document.body.appendChild(imgElement)

aElement.classList.add('link')
buttonElement.append('remove')
aElement.append('Link to Google')

htmlElement.appendChild(headElement)
htmlElement.appendChild(bodyElement)
headElement.appendChild(metaElement)
headElement.appendChild(titleElement)
bodyElement.appendChild(buttonElement)
bodyElement.appendChild(mainElement)
bodyElement.appendChild(scriptElement)
mainElement.appendChild(imgElement)
mainElement.appendChild(aElement)

console.log(htmlElement)
