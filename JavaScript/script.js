function ageInDays() {
    let hi = 'Assalomu alaykum'
    const birthYear = +prompt(`${hi} tug'ilgan yilingizni kiriting`)
    const ageInDay = (2022 - birthYear) * 365
    const headingOne = document.createElement('h1')
    const textAnswer = document.createTextNode(`Siz jami ${ageInDay} kun yashadingiz !`)
    headingOne.setAttribute('id' , ageInDays)
    headingOne.appendChild(textAnswer)
    document.querySelector('#result').appendChild(headingOne)
}

function elDelete() { 
    document.querySelector('#result').remove()
}
