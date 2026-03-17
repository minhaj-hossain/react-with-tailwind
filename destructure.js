const data =[
    { name: "john", profession: "painter", image: "somelink"},
    { name: "kabir", profession: "job holder", image: "somelink"},
    { name: "dinir", profession: "plunber", image: "somelink"},
    { name: "shahir", profession: "blumber", image: "somelink"}
]

const [
    {name, profession},
    {name: secondName, profession: secondProfession}
] = data;


// console.log(name, profession, secondName,secondProfession)