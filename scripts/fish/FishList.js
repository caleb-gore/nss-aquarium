import { getFish } from "../database.js";

export const FishList = () => {
    const fishes = getFish()
    let htmlString = '<article class="fishList">'
    for (const fish of fishes) {
        htmlString += `
    <section class="fish card">
        <div><img class="fish_image image--card" src="${fish.image}" /></div>
        <div class="fish_name">${fish.name}</div>
        <div class="fish__species">${fish.species}</div>
        <div class="fish__length">${fish.length}</div>
        <div class="fish__location">${fish.location}</div>
        <div class="fish__diet">${fish.food}</div>
    </section>`
}
htmlString += `
</article>`
console.log(htmlString)

    return htmlString
}