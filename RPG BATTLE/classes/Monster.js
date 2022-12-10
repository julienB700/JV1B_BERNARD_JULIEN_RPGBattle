export default class Monster{

    id
    name
    mana
    pv
    attack
    defense
    special
    specialRecover
    dead

    
    constructor(id, name, mana, pvmax, attack, defense, special){
        this.pvmax = pvmax
        this.attack = attack
        this.defense = defense
        this.name = name
        this.id = id
        this.mana = mana
        this.special = special
        this.specialRecover = false
        this.dead = false
    }

    getId(){return this.id}
    
    getName(){return this.name}
    getAttack(){return this.attack}
    getDefense(){ return this.defense}
    getPvmax(){return this.pvmax}
    getMana(){return this.mana}
    getSpecial(){return this.special}
    killed(){this.dead=true}


}