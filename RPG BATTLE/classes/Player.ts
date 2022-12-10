class Player {

    id:number
    name:string
    title:string
    monsters: Array<Monster>

    constructor(id:number, name:string, title:string, monsters:Array<Monster>){
        this.name = name
        this.id = id
        this.title = title
        this.monsters = monsters
    }
}