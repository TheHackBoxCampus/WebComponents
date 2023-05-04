let path = new URL(import.meta.url).pathname

class HEADER extends HTMLElement{
    static async component_header() {
        return await ((await fetch(path.replace('.js', '.html'))).text())
    }
 
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
    }

    handleEvent(e) {
        (e.type === 'click') ? this.clickEvent(e) : false
    }

    clickEvent(e) {
        window.alert('le diste click a header')
    }

    connectedCallback() {
        Promise.resolve(HEADER.component_header()).then(html => {
            this.shadowRoot.innerHTML = html
            let title = this.shadowRoot.querySelector('.selection_title')
            title.addEventListener('click', this)
        })
    }
}

customElements.define('my-header', HEADER);

export default {HEADER, path}