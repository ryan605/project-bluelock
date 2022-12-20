document.addEventListener(`DOMContentLoaded`, () =>{
    
    const createTopScorers = (image, title, goals) =>{

        const rowDiv = document.createElement(`div`)
        rowDiv.classList.add(`row`,`mt-3`)

        const bodyDiv = document.createElement(`div`)
        bodyDiv.classList.add(`card`,`col-4`)

        const playerImg = document.createElement(`img`)
        playerImg.classList.add(`card-img-top`)
        playerImg.scr = image

        const playerTitile = document.createElement(`h4`)
        playerTitile.classList.add(`card-title`)
        playerTitile.innerText = title

        const playerScores = document.createElement(`p`)
        playerScores.classList.add(`scores`)
        playerScores.innerText = goals

        //appending

        bodyDiv.appendChild(playerImg)
        bodyDiv.appendChild(playerTitile)
        bodyDiv.appendChild(playerScores)

        rowDiv.appendChild(bodyDiv)

        return rowDiv
    }
    

})