document.addEventListener(`DOMContentLoaded`, () =>{

    const topScorer = document.getElementById(`player`)
    const searchRow = document.getElementById(`search-result`)
    const topScorerLink = document.getElementById(`countries-link`)
    const team = document.getElementById(`team`)
    const teamLink = document.getElementById(`team-link`)

    //click events
    topScorerLink.addEventListener(`click`, () => {
        topScorer.removeAttribute("hidden")
        topScorer.style.display="flex"
    })
    teamLink.addEventListener(`click`, () => {
        team.removeAttribute("hidden")
        team.style.display="flex"
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

    const createTeams = (image, tag) => {
        const divRow = document.createElement(`div`)
        divRow.classList.add(`row`,`mt-3`)

        const divBody = document.createElement(`div`)
        divBody.classList.add(`card`,`col-4`)

        const divImg = document.createElement(`div`)
        divImg.classList.add(`img-div`)

        const teamImg = document.createElement(`img`)
        teamImg.classList.add(`card-img-top`)
        teamImg.src=image

        const teamTitle = document.createElement(`h4`)
        teamTitle.classList.add(`team-title`)
        teamTitle.innerText=tag

        //appending
        divImg.appendChild(teamImg)

        divBody.appendChild(divImg)
        divBody.appendChild(teamTitle)
        
        divRow.appendChild(divBody)

        return divRow
    }

    const loadTeams = () => {
        fetch(`http://localhost:3000/response`)
             .then((response) => response.json())
             .then((data) =>{
                for(let i=0; i<data.length; i++){
                    const teamData = data[i].statistics
                    
                    const image = teamData.logo

                    const tag = teamData.name

                    const teamElement = createTeams(image, tag)

                    team.appendChild(teamElement)
                    }

             })
    }
    loadTeams()
    



    const createTopScorers = (photo, title) =>{

        const rowDiv = document.createElement(`div`)
        rowDiv.classList.add(`row`,`mt-3`)

        const bodyDiv = document.createElement(`div`)
        bodyDiv.classList.add(`card`,`col-4`)

        const imgDiv = document.createElement(`div`)
        imgDiv.classList.add(`img-div`)

        const playerImg = document.createElement(`img`)
        playerImg.classList.add(`card-img-top`)
        playerImg.scr = photo

        const playerTitile = document.createElement(`h4`)
        playerTitile.classList.add(`card-title`)
        playerTitile.innerText = title


        //appending

        imgDiv.appendChild(playerImg)

        bodyDiv.appendChild(imgDiv)
        bodyDiv.appendChild(playerTitile)
        

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

           
            const playerElement = createTopScorers(image, title)

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

                    return searchPlayer(title)
                }
            )
            searchRow.replaceChild(...searchResult)
        })
   }
})
