class Freelancer {
    constructor(name, profession, startingPrice) {
        this.name = name;
        this.profession = profession;
        this.startingPrice = startingPrice;
    }
}

const freelancers = [
    new Freelancer('Cleatis Van Lake', 'Professional Cuddler', 500),
    new Freelancer('Laura Muller', 'Videographer', 100),
    new Freelancer('John Arbuckle', 'Golf Ball Diver', 2000),
    new Freelancer('Cyrus Bruskie', 'Cinematographer', 800),
    new Freelancer('Vivian Verucci', 'Motivational Eater', 50),
];

const newRandomFreelancer = () => {
    return freelancers[Math.floor(Math.random() * freelancers.length)];
}

let priceContainer = [];

const getTotal = (price) => {
    priceContainer.push(price);
    const startingPrice = 0;
    let average = priceContainer.reduce((accumulator, currentPrice) => accumulator + currentPrice, startingPrice) / priceContainer.length;
    return Math.round(average * 100) / 100;
}

const displayRandomFreelancer = () => {
    const freelancer = newRandomFreelancer();
    document.querySelector('.title p').innerHTML = 'Average Starting Price: $' + getTotal(freelancer.startingPrice) + ' an hour';
    document.querySelector("section.one").innerHTML += '<p>' + freelancer.name + '</p>';
    document.querySelector("section.two").innerHTML += '<p>' + freelancer.profession + '</p>';
    document.querySelector("section.three").innerHTML += '<p>$' + freelancer.startingPrice + ' an hour.</p>';

}

setInterval(displayRandomFreelancer, 3000);
displayRandomFreelancer();
displayRandomFreelancer();