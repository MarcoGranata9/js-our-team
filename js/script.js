const myTeam = [
{
    name : "Wayne Barnett",
    job : "Founder & CEO",
    img : "wayne-barnett-founder-ceo.jpg"
},
{
    name : "Angela Caroll",
    job : "Chief Editor",
    img : "angela-caroll-chief-editor.jpg"
},
{
    name : "Walter Gordon",
    job : "Office Manager",
    img : "walter-gordon-office-manager.jpg"
},
{
    name : "Angela Lopez",
    job : "Social Media Manager",
    img : "angela-lopez-social-media-manager.jpg"
},
{
    name : "Scott Estrada",
    job : "Developer",
    img : "scott-estrada-developer.jpg"
},
{
    name : "Barbara Ramos",
    job : "Graphic Designer",
    img : "barbara-ramos-graphic-designer.jpg"
}
]

const col = document.querySelector(".col")
console.log(col);
let teamString = ""

for (let i = 0; i < myTeam.length; i++) {
    const objects = myTeam[i];

    teamString += `
    <div class="card">
        <img src="img/${objects.img}" alt="">
        <h3>${objects.name}</h3>
        <p>${objects.job}</p>
    </div>
    `
    console.log(teamString);
}

col.innerHTML = teamString