interface IceCream {
    flavor: string;
    scoops: number;
    instruction: string;
}

let myIceCream: IceCream = {
    flavor: "vainilla",
    scoops: 5,
    instruction: " "
}

function tooManyScoop(desert: IceCream) {
    if (desert.scoops >= 4) {
        return desert.scoops + 'to many scoops!'
    } else {
        return 'you order will be ready soon!'
    }
}
console.log(tooManyScoop({ flavor: "vainilla", scoops: 3, instruction: " " }))

interface Sundae extends IceCream {
    sauce: "chocolate" | "caramelo" | "strawberry";
    nuts?: boolean;
    whipperdCream?: boolean;
    instructions?: boolean;
}

let myIceCreamSundae: Sundae ={
    flavor: "vainilla",
    scoops: 2,
    sauce: "caramelo",
    nuts: true,
    instruction: " "
}

function tooManyScoops(desert: Sundae) {
    if (desert.scoops >= 4) {
        return desert.scoops + 'to many scoops!'
    } else {
        return 'you order will be ready soon!'
    }
}
console.log(tooManyScoops({ flavor: "vainilla", scoops: 2, instruction: " " , sauce:"caramelo", nuts: true}))