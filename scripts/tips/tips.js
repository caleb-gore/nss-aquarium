import { getTips } from '../database.js'

const fishTips = getTips()
export const TipsList = () => {
    const tipsHTML = `<aside>
    <h2>Martin's Fish Care Tips</h2>
    <ul>`
    for (const tip of fishTips) {
        tipsHTML += `<li>${tip}</li>`
    }
    tipsHTML += `</ul>
        </aside>`
    return tipsHTML
}