let path = new URL(import.meta.url).pathname

export default class FOOTER extends HTMLElement{
    static async component_footer() {
        return await ((await fetch(path.replace('.js', '.html'))).text())
    }
    
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        Promise.resolve(FOOTER.component_footer()).then(html => this.shadowRoot.innerHTML = html)
    }
}

customElements.define('my-footer', FOOTER);