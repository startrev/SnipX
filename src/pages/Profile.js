const profile = 
`<main>
    <div>
        <div>profile page</div>
    </div>
</main>`

export default class SnipxProfile extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = profile
    }
}

window.customElements.define('snipx-profile', SnipxProfile)