//Les monstres alliés
let salandit = new Monster(0, "Salandit", 100, 500, 250, 150, 600)
let vulpix = new Monster(1, "Vulpix", 100, 500, 250, 150, 600)
let trevenant = new Monster(2, "Trevenant", 100, 500, 250, 150, 600)
let zygarde = new Monster(3, "Zygarde", 100, 500, 250, 150, 600)

//monstres méchants
let bad1 = new Monster(4, "foe1", 100, 500, 250, 150, 600)
let bad2 = new Monster(5, "foe2", 100, 500, 250, 150, 600)
let bad3 = new Monster(6, "foe3", 100, 500, 250, 150, 600)

//Players
let player = new Player(0, "Joueur 1", "The Hunter", [salandit, vulpix, trevenant, zygarde])
let ai = new Player(1, "AI", "The Bomber", [bad1, bad2, bad3])

//The game
let game = new Game(0, 0, [player, ai])


