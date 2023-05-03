let path = new URL(import.meta.url).pathname

class HEADER extends HTMLElement{
    static async component_header() {
        return await ((await fetch(path.replace('.js', '.html'))).text())
    }
    
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        Promise.resolve(HEADER.component_header()).then(html => this.shadowRoot.innerHTML = html)
    }
}

customElements.define('my-header', HEADER);

export default {HEADER, path}