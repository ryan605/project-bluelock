document.addEventListener(`DOMContentLoaded`,() =>{
    
const createFeaturedTeams = (image, title, player_image, name, club_description) =>{
    const cardDiv = document.createElement (`div`)
    cardDiv.classList.add(`card`,`col-12`)

    const rowDiv = document.createElement(`div`)
    rowDiv.classList.add(`row`)

    const imgDiv = document.createElement(`div`)
    imgDiv.classList.add(`col-6`)

    const bodyDiv = document.createElement(`div`)
    bodyDiv.classList.add(`col-6`,`card-body`)

    const teamImg = document.createElement(`img`)
    imgDiv.classList.add(`card-img`)
    teamImg.src = image

    const clubTitle = document.createElement(`h2`)
    clubTitle.classList.add(`card-title`)
    clubTitle.innerText = title

    const playerImg = document.createElement(`img`)
    playerImg.classList.add(`player-image`)
    playerImg.scr = player_image

    const playerName = document.createElement(`p`)
    playerName.classList.add(`player-name`)
    playerName.innerText = name

    const clubDescription = document.createElement(`p`)
    clubDescription.classList.add(`card-text`)
    clubDescription.innerText = club_description

    bodyDiv.appendChild(clubTitle)
    bodyDiv.appendChild(playerImg)
    bodyDiv.appendChild(playername)
    bodyDiv.appendChild(clubDescription)

    imgDiv.appendChild(teamImg)

    rowDiv.appendChild(imgDiv)
    rowDiv.appendChild(bodyDiv)

    cardDiv.appendChild(rowDiv)

return cardDiv()

}
    
    
})




const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '21b12f990amsh5e740a5393b2ccdp1db4f2jsn99cc3bdfcb4e',
		'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
	}
};


fetch('https://api-football-beta.p.rapidapi.com/players/topscorers?season=2019&league=39',options)
	.then(response => response.json())
	.then((data) => {
        console.log(data)
    })
    
