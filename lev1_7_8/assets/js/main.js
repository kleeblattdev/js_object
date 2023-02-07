let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

console.log(myMusic);

myMusic.forEach((key,index) =>{

    document.write(myMusic[index].artist + "<br/>" + myMusic[index].title + "<br/>" + myMusic[index].medium + "<br/>");

    console.log(myMusic[index].artist);
    console.log(myMusic[index].title);
    console.log(myMusic[index].medium);

    if(myMusic[index].release_year > 1975){
        console.log(myMusic[index].release_year);
        document.write(myMusic[index].release_year + "<br/>")
    }
})


/////////////// lev1_8

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
        street: "Don Valley Business Park",
        city: "Toronto",
        postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
        street: "34 Lawrence Ave",
        city: "Toronto",
        postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.forEach((key, index)=>{
    console.log(studentData[index].name);
    console.log(studentData[index].coop);
    console.log(studentData[index].address.city);
    console.log(studentData[index].emails);
})
