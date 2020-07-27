"use strict";

class SimpleMemberShip
{
    constructor(name)
    {
        this.name = name;
        this.cost = 50;
    }
}

class StandartMemberShip
{
    constructor(name)
    {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMemberShip
{
    constructor(name)
    {
        this.name = name;
        this.cost = 500;
    }
}

class MemberFactory
{
    static list = {
        simple: SimpleMemberShip,
        standart: StandartMemberShip,
        premium: PremiumMemberShip,
    };

    create(name, type = "simple")
    {
        const MemberShip = MemberFactory.list[type] || MemberFactory.list.simple;
        let member = new MemberShip(name);
        member.define = function(){
            console.log(`${this.name}; ${this.cost}`);
        }
        return member;
    }
}

const factory = new MemberFactory();
const members = [
    factory.create("Gokhlia", "premium"),
    factory.create("Ann", "simple"),
    factory.create("Jack", "standart"),
    factory.create("BonBon"),
];

console.log(members);
members.forEach(item => {item.define();})