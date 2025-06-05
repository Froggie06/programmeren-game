//. Bovenkleding
const cmdShirt = document.getElementById('cmdShirt')
const trui = document.getElementById('trui')
const jurk = document.getElementById('jurk')
const tourHoodie = document.getElementById('tourHoodie')

//. Onderkleding 
const jeans = document.getElementById('jeans')
const korteBroek = document.getElementById('korteBroek')
const rokje = document.getElementById('rokje')

//. Schoenen
const sneakers = document.getElementById('sneakers')
const laarzen = document.getElementById('laarzen')

//. Special outfits
const iceonmyteethOutfit = document.getElementById('iceonmyteethOutfit')

//. Knoppen
const knopShirt = document.getElementById('cmdShirtKnop')
const knopTrui = document.getElementById('truiKnop')
const knopJurk = document.getElementById('jurkKnop')
const knopTourHoodie = document.getElementById('tourHoodieKnop')

const knopJeans = document.getElementById('jeansKnop')
const knopKorteBroek = document.getElementById('korteBroekKnop')
const knopRokje = document.getElementById('rokjeKnop')

const knopSneakers = document.getElementById('sneakersKnop')
const knopLaarzen = document.getElementById('laarzenKnop')

const knopIceonmyteethOutfit = document.getElementById('iceonmyteethOutfitKnop')

const removerButton = document.getElementById('removerButton')

const cmdButton = document.getElementById('cmdButton')
//. audio
const audio = document.getElementById('audioSan')
const knoppen = document.querySelectorAll('button')

//. Video popup
const finishButton = document.getElementById('finishButton')
const videoPopup = document.getElementById('videoPopup')
const sluitPopup = document.getElementById('sluitPopup')
const iceonmyteethMV = document.getElementById('iceonmyteethMV')


//. Catogorieknoppen
const bovenkledingKnoppen = [
  { knop: knopShirt, item: cmdShirt },
  { knop: knopTrui, item: trui },
  { knop: knopJurk, item: jurk },
  { knop: knopTourHoodie, item: tourHoodie },
]

const onderkledingKnoppen = [
    { knop: knopJeans, item: jeans },
    { knop: knopKorteBroek, item: korteBroek },
    { knop: knopRokje, item: rokje },
]

const schoenenKnoppen = [
    { knop: knopSneakers, item: sneakers },
    { knop: knopLaarzen, item: laarzen },
]

const specialOutfitsKnoppen = [
    { knop: knopIceonmyteethOutfit, item: iceonmyteethOutfit },
]


//. Categorieenitems 
const bovenkleding = [cmdShirt, trui, jurk, tourHoodie]
const onderkleding = [jeans, korteBroek, rokje]
const schoenen = [sneakers, laarzen]
const specialOutfits = [iceonmyteethOutfit,]



//. functies
function buttonBovenkleding() {
bovenkledingKnoppen.forEach(({ knop, item }) => {
  knop.addEventListener('click', () => {
    const zichtbaar = !item.classList.contains('onzichtbaar')

    bovenkleding.forEach(i => {
      i.classList.add('onzichtbaar')
    })
    specialOutfits.forEach(i => {
        i.classList.add('onzichtbaar')
    })

    item.classList.toggle('onzichtbaar', zichtbaar)

    checkKledingKeuze()
  })
})
}

function buttonsOnderkleding() {
onderkledingKnoppen.forEach(({ knop, item }) => {
  knop.addEventListener('click', () => {
    const zichtbaar = !item.classList.contains('onzichtbaar')

    onderkleding.forEach(i => {
      i.classList.add('onzichtbaar')
    })
    specialOutfits.forEach(i => {
        i.classList.add('onzichtbaar')
    })

    item.classList.toggle('onzichtbaar', zichtbaar)

    checkKledingKeuze()
  })
})
}

function buttonsschoenen() {
schoenenKnoppen.forEach(({ knop, item }) => {
  knop.addEventListener('click', () => {
    const zichtbaar = !item.classList.contains('onzichtbaar')

    schoenen.forEach(i => {
      i.classList.add('onzichtbaar')
    })
    specialOutfits.forEach(i => {
        i.classList.add('onzichtbaar')
    })

    item.classList.toggle('onzichtbaar', zichtbaar)

    checkKledingKeuze()
  })
})
}

function buttonSpecialOutfits() {
specialOutfitsKnoppen.forEach(({ knop, item }) => {
  knop.addEventListener('click', () => {
    const zichtbaar = !item.classList.contains('onzichtbaar')

    //. alles onzichtbaar 
    specialOutfits.forEach(i => {
        i.classList.add('onzichtbaar')
    })
    bovenkleding.forEach(i => {
        i.classList.add('onzichtbaar')
    })
    onderkleding.forEach(i => {
        i.classList.add('onzichtbaar')
    })
    schoenen.forEach(i => {
        i.classList.add('onzichtbaar')
    })

    item.classList.toggle('onzichtbaar', zichtbaar)

    checkKledingKeuze()
  })
})
}

// cmdButton.addEventListener('click',() => {
//   const cmdShirtZichtbaar = !cmdShirt.classList.contains('onzichtbaar')
//   const jeansZichtbaar = !jeans.classList.contains('onzichtbaar')
//   const sneakersZichtbaar = !sneakers.classList.contains('onzichtbaar')

//     cmdShirt.classList.add('onzichtbaar', cmdShirtZichtbaar)
//     jeans.classList.add('onzichtbaar', jeansZichtbaar)
//     sneakers.classList.add('onzichtbaar', sneakersZichtbaar)
// })

//. finish button
function checkKledingKeuze() {
    const bovenGekozen = bovenkleding.some(i => !i.classList.contains('onzichtbaar'))
    const onderGekozen = onderkleding.some(i => !i.classList.contains('onzichtbaar'))
    const schoenenGekozen = schoenen.some(i => !i.classList.contains('onzichtbaar'))
    const specialActief = specialOutfits.some(i => !i.classList.contains('onzichtbaar'))

    const showFinishButton =
    (bovenGekozen && onderGekozen && schoenenGekozen && !specialActief) ||  //. volledige outfit
    (specialActief && !bovenGekozen && !onderGekozen && !schoenenGekozen)    //. alleen special

  finishButton.classList.toggle('onzichtbaar', !showFinishButton)
}

//. Effect van github zie 1e script - ik snap hoe het werkt met math random
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

//. finishbutton popup + confetti
function buttonFinish() {
finishButton.addEventListener('click', () => {
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: Math.floor(randomInRange(50, 100)),
    origin: { y: 0.6 }
  })

  const specialActief = specialOutfits.some(i => !i.classList.contains('onzichtbaar'))

  if (specialActief) {
    videoPopup.classList.add('active')
    iceonmyteethMV.play()

    if (iceonmyteethMV.requestFullscreen) {
      iceonmyteethMV.requestFullscreen()
    }
  }
})
}

//. Sluitknop popup
function buttonSluitPopup() {
sluitPopup.addEventListener('click', () => {
  iceonmyteethMV.pause()
  iceonmyteethMV.currentTime = 0
  videoPopup.classList.remove('active')
})
}

function iceommyteethMVClose() {
iceonmyteethMV.addEventListener('ended', () => {
  sluitPopup.click()
})
}

//. audio
function audioEffect() {
knoppen.forEach(knop => {
    knop.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.play();
    });
});
}

//. Herlaad pagina voor nieuwe start
function buttonRefresh() {
removerButton.addEventListener('click', () => {
  location.reload()
})
}

//. Functie aanroepen
buttonBovenkleding()
buttonsOnderkleding()
buttonsschoenen()
buttonSpecialOutfits()
buttonFinish()
buttonSluitPopup()
iceommyteethMVClose()
audioEffect()
buttonRefresh()

//. Oude code 

// //. Bovenkleding
// knopShirt.addEventListener('click', () => {
//     const cmdShirtZichtbaar = !cmdShirt.classList.contains('onzichtbaar')

//     cmdShirt.classList.toggle('onzichtbaar', cmdShirtZichtbaar)

//     trui.classList.add('onzichtbaar')
//     jurk.classList.add('onzichtbaar')
//     tourHoodie.classList.add('onzichtbaar')
    
// })


// knopTrui.addEventListener('click',() => {
//     const truiZichtbaar = !trui.classList.contains('onzichtbaar')

//     trui.classList.toggle('onzichtbaar', truiZichtbaar)

//     cmdShirt.classList.add('onzichtbaar')
//     jurk.classList.add('onzichtbaar')
//     tourHoodie.classList.add('onzichtbaar')
    
// })

// knopJurk.addEventListener('click',() => {
//     const jurkZichtbaar = !jurk.classList.contains('onzichtbaar')

//     jurk.classList.toggle('onzichtbaar', jurkZichtbaar)

//     cmdShirt.classList.add('onzichtbaar')
//     trui.classList.add('onzichtbaar')
//     tourHoodie.classList.add('onzichtbaar')
//     jeans.classList.add('onzichtbaar')
    
// })

// knopTourHoodie.addEventListener('click',() => {
//     const tourHoodieZichtbaar = !tourHoodie.classList.contains('onzichtbaar')

//     tourHoodie.classList.toggle('onzichtbaar', tourHoodieZichtbaar)

//     cmdShirt.classList.add('onzichtbaar')
//     trui.classList.add('onzichtbaar')
//     jurk.classList.add('onzichtbaar')
    
// })

// //. Onderkleding
// knopJeans.addEventListener('click',() => {
//     const jeansZichtbaar = !jeans.classList.contains('onzichtbaar')

//     jeans.classList.toggle('onzichtbaar', jeansZichtbaar)
    
//     jurk.classList.add('onzichtbaar')

// })