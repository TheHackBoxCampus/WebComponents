let path = new URL(import.meta.url).pathname

export default class SELECTION extends HTMLElement{
    static async component_selection() {
        return await ((await fetch(path.replace('.js', '.html'))).text())
    }
    
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        Promise.resolve(SELECTION.component_selection()).then(html => this.shadowRoot.innerHTML = html)
    }
}

customElements.define('my-selection', SELECTION);