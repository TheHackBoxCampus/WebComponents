let path = new URL(import.meta.url).pathname

export default class NAV extends HTMLElement{
    static async component_nav() {
        return await ((await fetch(path.replace('.js', '.html'))).text())
    }
    
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        Promise.resolve(NAV.component_nav()).then(html => this.shadowRoot.innerHTML = html)
    }
}

customElements.define('my-nav', NAV);