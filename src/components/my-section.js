let path = new URL(import.meta.url).pathname

export default class SECTION extends HTMLElement{
    static async component_section() {
        return await ((await fetch(path.replace('.js', '.html'))).text())
    }
    
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        Promise.resolve(SECTION.component_section()).then(html => this.shadowRoot.innerHTML = html)
    }
}

customElements.define('my-section', SECTION);