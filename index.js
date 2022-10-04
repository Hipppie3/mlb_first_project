
// Fetch request and add Data to allCards
fetch("https://statsapi.web.nhl.com/api/v1/people/8475343")
.then(res => res.json())
.then(data =>
 console.log(data)
)
fetch("https://statsapi.web.nhl.com/api/v1/teams/15?expand=team.roster")
.then(res => res.json())
.then(data =>
 console.log(data.teams[0].roster)
)



