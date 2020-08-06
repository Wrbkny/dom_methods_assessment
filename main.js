

let buttonElement = document.createElement('BUTTON')
let mainElement = document.createElement('MAIN')
let imageElement = document.createElement('IMG')
let anchorElement = document.createElement('A')
let linkElement = document.createElement('LINK')
imageElement.src='https://www.goldengate.org/assets/1/15/gallerymaindimensionid/color_image_looking_up_tower_3.jpg?2577'
anchorElement.href='https://www.google.com'

document.body.append(buttonElement)
document.body.append(mainElement)
mainElement.append(imageElement)
mainElement.append(anchorElement)
mainElement.append(linkElement)

buttonElement.append('remove')
anchorElement.append('Link to Google')


buttonElement.addEventListener("click", function () {
    mainElement.remove(mainElement)

}


//const buttonElement = document.querySelector ('BUTTON')

//<img; src="https://www.goldengate.org/assets/1/15/gallerymaindimensionid/color_image_looking_up_tower_3.jpg?2577"/>
//</a>

















)
