document.addEventListener(`DOMContentLoaded`, () =>{

    const topScorer = document.getElementById(`player`)
    const searchRow = document.getElementById(`search-result`)
    const topScorerLink = document.getElementById(`countries-link`)
    const teamLink = document.getElementById(`team-link`)

    //click events
    topScorerLink.addEventListener(`click`, () => {
        topScorer.removeAttribute("hidden")
        topScorer.style.display="flex"
    })
    //search event listener
    const searchForm = document.getElementById(`search-form`)
    const searchInput = document.getElementById(`search`)
    

    searchForm.addEventListener(`submit`, (e) =>{
        e.preventDefault()
        const query = searchInput.value
        searchPlayer(query)
        topScorer.style.display="none"
        searchRow.style.display="flex"
        searchRow.removeAttribute("hidden")
    })




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
   //load top scorers
   const loadTopScorers = () => {

    fetch(`http://localhost:3000/response`)
         .then((response) => response.json())
         .then((data) =>{
            for(let i=0; i<data.length; i++){

            const imageData = data[i].player            
            const image = imageData.photo

            const playerData = data[i].player
            const title = playerData.name

            const goalData = data[i].statistics
            const goals = goalData.statistics

            const playerElement = createTopScorers(image, title, goals)

            topScorer.appendChild(playerElement)
            
            }
         })


   }
   loadTopScorers()
   
   const searchPlayer = (player) =>{
    fetch(`${SEARCH}${player}`)
        .then((response) => response.json())
        .then((data) =>{
            const playerDataList = data.player
            const searchResult = playerDataList.map(
                playerData =>{
                    const title = playerData.name
                    const image = playerData.photo

                    return searchPlayer(title, image)
                }
            )
            searchRow.replaceChild(...searchResult)
        })
   }
})
