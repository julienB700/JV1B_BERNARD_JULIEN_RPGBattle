class Monster {

    id:number
    name:string
    mana:number
    pv:number
    attack:number
    defense:number
    special:number
    specialRecover:boolean
    playable:boolean
    dead: boolean

    
    constructor(id:number, name:string, mana:number, pv:number, attack:number, defense:number, special:number){
        this.attack = attack
        this.defense = defense
        this.id = id
        this.mana = mana
        this.special = special
        this.playable = false
        this.specialRecover = false
        this.dead = false
    }


    gotAttacked(howMuch:number){
        this.pv = this.pv - howMuch;
        if(this.pv < 0){
            this.pv = 0
            this.dead = true
        }
    }
}