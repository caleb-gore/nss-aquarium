import { getFish } from './database.js'
import { FishList } from './fish/FishList.js'
import { TipsList } from './tips/tips.js'
// import { Header } from './header.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

const container = document.querySelector("#container")
container.innerHTML =  FishList()

