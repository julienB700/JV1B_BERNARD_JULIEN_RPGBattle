const app = Vue.createApp({
    data(){
        return {
            GoodMonsters:{
                1:{
                    name:"Salandit", pvmax: 100, pv: 100, attack: 50, defense:20, specialAttack: 100, hasAttacked: false
                },
                2:{
                    name:"Vulpix", pvmax: 100, pv: 100, attack: 50, defense:20, specialAttack: 100, hasAttacked: false
                },
                3:{
                    name:"Trevenant", pvmax: 100, pv: 100, attack: 50, defense:20, specialAttack: 100, hasAttacked: false
                },
                4:{
                    name:"Zygarde", pvmax: 100, pv: 100, attack: 50, defense:20, specialAttack: 100, hasAttacked: false
                }
            },
            BadMonsters:{
                1:{
                    name:"foe1", pvmax: 100, pv: 100, attack: 50, defense:20, specialAttack: 100, hasAttacked: false
                },
                2:{
                    name:"foe2", pvmax: 100, pv: 100, attack: 50, defense:20, specialAttack: 100, hasAttacked: false
                },
                3:{
                    name:"foe3", pvmax: 100, pv: 100, attack: 50, defense:20, specialAttack: 100, hasAttacked: false
                },
            }
        
        }
    },
    methods: {
    }
})