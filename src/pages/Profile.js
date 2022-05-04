const profile = 
`<main id="profile">
    <div>
        <h1>Profile</h1>
        <h2>available next update...</h2>
    </div>
</main>`

export default class SnipxProfile extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = profile
    }
}

window.customElements.define('snipx-profile', SnipxProfile)