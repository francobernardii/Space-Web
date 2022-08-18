//NAV-DESKTOP

const home = document.getElementsByClassName('navHome')
const destination = document.getElementsByClassName('navDestination')
const crew = document.getElementsByClassName('navCrew')
const technology = document.getElementsByClassName('navTechnology')
const logoHome = document.getElementById('logoHome')
const sectionHome = document.getElementById('sectionHome')
const sectionDestination = document.getElementById('sectionDestination')
const sectionCrew = document.getElementById('sectionCrew')
const sectionTechnology = document.getElementById('sectionTechnology')

home[1].addEventListener('click',() => changeTo('Home'))
destination[1].addEventListener('click',() => changeTo('Destination'))
crew[1].addEventListener('click',() => changeTo('Crew'))
technology[1].addEventListener('click',() => changeTo('Technology'))
logoHome.addEventListener('click',() => changeTo('Home'))

//NAV-MOBILE

home[0].addEventListener('click',() => changeTo('Home'))
destination[0].addEventListener('click',() => changeTo('Destination'))
crew[0].addEventListener('click',() => changeTo('Crew'))
technology[0].addEventListener('click',() => changeTo('Technology'))

const buttonHamburguesa = document.getElementById('buttonHamburguesa')
const menuHamburguesa = document.getElementById('menuHamburguesa')
let state = false;

buttonHamburguesa.addEventListener('click',() => toggleMenuHamburguesa())

//FUNCTIONS NAV

function toggleMenuHamburguesa(){
    if(state){
        menuHamburguesa.setAttribute('style','height: 0;')
        state = false
        buttonHamburguesa.setAttribute('src','assets/shared/icon-hamburger.svg')
    }else{
        menuHamburguesa.setAttribute('style','height: 40vh;')
        state = true
        buttonHamburguesa.setAttribute('src','assets/shared/icon-close.svg')
    }
}

function changeTo(option) {
    if(option === 'Home'){
        home[1].classList.add("selected")
        destination[1].classList.remove("selected")
        crew[1].classList.remove("selected")
        technology[1].classList.remove("selected")

        state = true
        toggleMenuHamburguesa()

        sectionHome.classList.add('dFlex')
        sectionHome.classList.remove('dNone')
        sectionDestination.classList.remove('dFlex')
        sectionDestination.classList.add('dNone')
        sectionCrew.classList.remove('dFlex')
        sectionCrew.classList.add('dNone')
        sectionTechnology.classList.remove('dFlex')
        sectionTechnology.classList.add('dNone')

        document.body.classList.add('bodyHome')
        document.body.classList.remove('bodyDestination')
        document.body.classList.remove('bodyCrew')
        document.body.classList.remove('bodyTechnology')
    }

    if(option === 'Destination'){
        destination[1].classList.add("selected")
        home[1].classList.remove("selected")
        crew[1].classList.remove("selected")
        technology[1].classList.remove("selected")

        state = true
        toggleMenuHamburguesa()

        sectionDestination.classList.add('dFlex')
        sectionDestination.classList.remove('dNone')
        sectionHome.classList.remove('dFlex')
        sectionHome.classList.add('dNone')
        sectionCrew.classList.remove('dFlex')
        sectionCrew.classList.add('dNone')
        sectionTechnology.classList.remove('dFlex')
        sectionTechnology.classList.add('dNone')

        document.body.classList.add('bodyDestination')
        document.body.classList.remove('bodyHome')
        document.body.classList.remove('bodyCrew')
        document.body.classList.remove('bodyTechnology')
    }

    if(option === 'Crew'){
        crew[1].classList.add("selected")
        destination[1].classList.remove("selected")
        home[1].classList.remove("selected")
        technology[1].classList.remove("selected")

        state = true
        toggleMenuHamburguesa()

        sectionCrew.classList.add('dFlex')
        sectionCrew.classList.remove('dNone')
        sectionDestination.classList.remove('dFlex')
        sectionDestination.classList.add('dNone')
        sectionHome.classList.remove('dFlex')
        sectionHome.classList.add('dNone')
        sectionTechnology.classList.remove('dFlex')
        sectionTechnology.classList.add('dNone')

        document.body.classList.add('bodyCrew')
        document.body.classList.remove('bodyHome')
        document.body.classList.remove('bodyDestination')
        document.body.classList.remove('bodyTechnology')
    }

    if(option === 'Technology'){
        technology[1].classList.add("selected")
        destination[1].classList.remove("selected")
        crew[1].classList.remove("selected")
        home[1].classList.remove("selected")

        state = true
        toggleMenuHamburguesa()

        sectionTechnology.classList.add('dFlex')
        sectionTechnology.classList.remove('dNone')
        sectionDestination.classList.remove('dFlex')
        sectionDestination.classList.add('dNone')
        sectionHome.classList.remove('dFlex')
        sectionHome.classList.add('dNone')
        sectionCrew.classList.remove('dFlex')
        sectionCrew.classList.add('dNone')

        document.body.classList.add('bodyTechnology')
        document.body.classList.remove('bodyHome')
        document.body.classList.remove('bodyDestination')
        document.body.classList.remove('bodyCrew')
    }


}

//HOME

const buttonExplore = document.getElementById('buttonExplore')

buttonExplore.addEventListener('click',() => changeTo('Destination'))

//DESTINATION

const Moon = document.getElementById('destinationMoon')
const Mars = document.getElementById('destinationMars')
const Europa = document.getElementById('destinationEuropa')
const Titan = document.getElementById('destinationTitan')

//Destination Info to Update

Moon.addEventListener('click',() => changeDestination('Moon'))
Mars.addEventListener('click',() => changeDestination('Mars'))
Europa.addEventListener('click',() => changeDestination('Europa'))
Titan.addEventListener('click',() => changeDestination('Titan'))

const destinationTitle = document.getElementById('destinationTitle')
const destinationDescription = document.getElementById('destinationDescription')
const destinationDistance = document.getElementById('destinationDistance')
const destinationTime = document.getElementById('destinationTime')
const destinationImage = document.getElementById('destinationImage')

async function changeDestination(option) {
    let moonData
    let marsData
    let europaData
    let titanData

    await fetch("../data.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        moonData = jsondata.destinations[0]
        marsData = jsondata.destinations[1]
        europaData = jsondata.destinations[2]
        titanData = jsondata.destinations[3]
    });

    if(option === 'Moon'){
        Moon.classList.add("selected")
        Mars.classList.remove("selected")
        Europa.classList.remove("selected")
        Titan.classList.remove("selected")

        destinationTitle.innerHTML = moonData.name.toUpperCase()
        destinationDescription.innerHTML = moonData.description
        destinationDistance.innerHTML = moonData.distance
        destinationTime.innerHTML = moonData.travel
        destinationImage.setAttribute('src',moonData.images.png)
    }

    if(option === 'Mars'){
        Mars.classList.add("selected")
        Moon.classList.remove("selected")
        Europa.classList.remove("selected")
        Titan.classList.remove("selected")

        destinationTitle.innerHTML = marsData.name.toUpperCase()
        destinationDescription.innerHTML = marsData.description
        destinationDistance.innerHTML = marsData.distance
        destinationTime.innerHTML = marsData.travel
        destinationImage.setAttribute('src',marsData.images.png)
    }

    if(option === 'Europa'){
        Europa.classList.add("selected")
        Moon.classList.remove("selected")
        Mars.classList.remove("selected")
        Titan.classList.remove("selected")

        destinationTitle.innerHTML = europaData.name.toUpperCase()
        destinationDescription.innerHTML = europaData.description
        destinationDistance.innerHTML = europaData.distance
        destinationTime.innerHTML = europaData.travel
        destinationImage.setAttribute('src',europaData.images.png)
    }

    if(option === 'Titan'){
        Titan.classList.add("selected")
        Mars.classList.remove("selected")
        Europa.classList.remove("selected")
        Moon.classList.remove("selected")

        destinationTitle.innerHTML = titanData.name.toUpperCase()
        destinationDescription.innerHTML = titanData.description
        destinationDistance.innerHTML = titanData.distance
        destinationTime.innerHTML = titanData.travel
        destinationImage.setAttribute('src',titanData.images.png)
    }
    
}

//CREW

const crewMember = document.getElementsByClassName('dot')

crewMember[0].addEventListener('click',() => changeCrew('1'))
crewMember[1].addEventListener('click',() => changeCrew('2'))
crewMember[2].addEventListener('click',() => changeCrew('3'))
crewMember[3].addEventListener('click',() => changeCrew('4'))

const crewName = document.getElementById('crewName')
const crewRol = document.getElementById('crewRol')
const crewBio = document.getElementById('crewBio')
const crewImage = document.getElementById('crewImage')

async function changeCrew(option) {
    let memberOneData
    let memberTwoData
    let memberThreeData
    let memberFourData

    await fetch("../data.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        memberOneData = jsondata.crew[0]
        memberTwoData = jsondata.crew[1]
        memberThreeData = jsondata.crew[2]
        memberFourData = jsondata.crew[3]
    });

    if(option === '1'){
        crewMember[0].classList.add("selected")
        crewMember[1].classList.remove("selected")
        crewMember[2].classList.remove("selected")
        crewMember[3].classList.remove("selected")

        crewName.innerHTML = memberOneData.name.toUpperCase()
        crewRol.innerHTML = memberOneData.role.toUpperCase()
        crewBio.innerHTML = memberOneData.bio
        crewImage.setAttribute('src',memberOneData.images.png)
    }

    if(option === '2'){
        crewMember[1].classList.add("selected")
        crewMember[0].classList.remove("selected")
        crewMember[2].classList.remove("selected")
        crewMember[3].classList.remove("selected")

        crewName.innerHTML = memberTwoData.name.toUpperCase()
        crewRol.innerHTML = memberTwoData.role.toUpperCase()
        crewBio.innerHTML = memberTwoData.bio
        crewImage.setAttribute('src',memberTwoData.images.png)
    }
    
    if(option === '3'){
        crewMember[2].classList.add("selected")
        crewMember[0].classList.remove("selected")
        crewMember[1].classList.remove("selected")
        crewMember[3].classList.remove("selected")

        crewName.innerHTML = memberThreeData.name.toUpperCase()
        crewRol.innerHTML = memberThreeData.role.toUpperCase()
        crewBio.innerHTML = memberThreeData.bio
        crewImage.setAttribute('src',memberThreeData.images.png)
    }

    if(option === '4'){
        crewMember[3].classList.add("selected")
        crewMember[0].classList.remove("selected")
        crewMember[1].classList.remove("selected")
        crewMember[2].classList.remove("selected")

        crewName.innerHTML = memberFourData.name.toUpperCase()
        crewRol.innerHTML = memberFourData.role.toUpperCase()
        crewBio.innerHTML = memberFourData.bio
        crewImage.setAttribute('src',memberFourData.images.png)
    }
}

//TECHNOLOGY

const technology1 = document.getElementById('technology1')
const technology2 = document.getElementById('technology2')
const technology3 = document.getElementById('technology3')

technology1.addEventListener('click', () => changeTechnology('1'))
technology2.addEventListener('click', () => changeTechnology('2'))
technology3.addEventListener('click', () => changeTechnology('3'))

const technologyTitle = document.getElementById('technologyTitle')
const technologyDescription = document.getElementById('technologyDescription')
const technologyImage = document.getElementById('technologyImage')

async function changeTechnology(option) {
    let technologyOneData
    let technologyTwoData
    let technologyThreeData

    await fetch("../data.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        technologyOneData = jsondata.technology[0]
        technologyTwoData = jsondata.technology[1]
        technologyThreeData = jsondata.technology[2]
    });

    if(option === '1'){
        technology1.classList.add("selected")
        technology2.classList.remove("selected")
        technology3.classList.remove("selected")

        technologyTitle.innerHTML = technologyOneData.name.toUpperCase()
        technologyDescription.innerHTML = technologyOneData.description
        technologyImage.setAttribute('src',technologyOneData.images.portrait)
    }

    if(option === '2'){
        technology2.classList.add("selected")
        technology1.classList.remove("selected")
        technology3.classList.remove("selected")

        technologyTitle.innerHTML = technologyTwoData.name.toUpperCase()
        technologyDescription.innerHTML = technologyTwoData.description
        technologyImage.setAttribute('src',technologyTwoData.images.portrait)
    }

    if(option === '3'){
        technology3.classList.add("selected")
        technology1.classList.remove("selected")
        technology2.classList.remove("selected")

        technologyTitle.innerHTML = technologyThreeData.name.toUpperCase()
        technologyDescription.innerHTML = technologyThreeData.description
        technologyImage.setAttribute('src',technologyThreeData.images.portrait)
    }
}
