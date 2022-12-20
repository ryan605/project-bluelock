let TEAM_API = (`http://localhost:3000/response`)

document.addEventListener(`DOMContentLoaded`,() =>{
    
const createFeaturedTeams = (image, title, player_image, name,) =>{
    const mainDiv = document.createElement(`div`)
    mainDiv.classList.add(`row`,`mt-1`)

    const cardDiv = document.createElement (`div`)
    cardDiv.classList.add(`card`,`col-12`)

    const rowDiv = document.createElement(`div`)
    rowDiv.classList.add(`row`)

    const imgDiv = document.createElement(`div`)
    imgDiv.classList.add(`col-6`)

    const teamImg = document.createElement(`img`)
    imgDiv.classList.add(`card-img`)
    teamImg.src = image

    const secondDiv = document.createElement(`div`)
    secondDiv.classList.add(`card-img-top`)

    const playerImg = document.createElement(`img`)
    playerImg.classList.add(`player-image`,`mt-5`)
    playerImg.scr = player_image

    const bodyDiv = document.createElement(`div`)
    bodyDiv.classList.add(`col-6`,`card-body`)

    const clubTitle = document.createElement(`h2`)
    clubTitle.classList.add(`card-title`)
    clubTitle.innerText = title

    const playerName = document.createElement(`p`)
    playerName.classList.add(`player-name`)
    playerName.innerText = name

  //appending images
  imgDiv.appendChild(teamImg)
  secondDiv.appendChild(playerImg)

  //append innermost nodes
  bodyDiv.appendChild(clubTitle)
  bodyDiv.appendChild(playerName)

  //append divs
  rowDiv.appendChild(imgDiv)
  rowDiv.appendChild(secondDiv)
  rowDiv.appendChild(bodyDiv)

  cardDiv.appendChild(rowDiv)
  mainDiv.appendChild(cardDiv)

  return cardDiv
   
}
document.getElementById(`featuredElement`).appen(
    createFeaturedTeams(`bluelock.pneg`,`js`,`ihskbd`)
)


    //load featured teams
 const loadFeaturedTeams = () => {
     fetch(TEAM_API)
         .then((response) => response.json())
         .then((data) => {
           const teamData = data[0]

           const image = teamData.statistics.logo
           
           const title = teamData.statistics.name
           
           const player_image = teamData.player.photo
           
           const name = teamData.player.name

           const featuredElement = createFeaturedTeams(image, title, player_image, name)
           document.getElementById(`featured-team`).appendChild(featuredElement)

           
       })
    
 }
 loadFeaturedTeams()
})
const createTopScorers = (photo, scores, jina) =>{
    const divCard = document.createElement(`div`)
    divCard.classList.add(`card`,`col-4`)

    const playerImage = document.createElement(`img`)
    playerImage.classList.add(`card-img-top`)
    playerImage.src = photo

    const playerJina = document.createElement(`h4`)
    playerJina.classList.add(`card-title`)
    playerJina.innerText = jina

    const playerScores = document.createElement(`p`)
    playerScores.classList.add(`scores`)
    playerScores.innerText = scores

    //append 
    divCard.appendChild(playerImage)
    divCard.appendChild(playerJina)
    divCard.appendChild(playerScores)
}

// //load top scorers
 const loadTopScorers = () =>{
     fetch(`http://localhost:3000/response`)
         .then((response) => response.json())
         .then((data) => {
             const playerData = data[0]
             const jina = playerData.player.name
             const scores = playerData.statistics.goals
             const photo = playerData.player.photo
            const teamElement = createTopScorers(jina, scores, photo)
             document.getElementById(`scorers-category`).appendchild(...teamElement)
         }) 
        


 }
loadTopScorers()
