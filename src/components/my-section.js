let path = new URL(import.meta.url).pathname

export default class SECTION extends HTMLElement{
    static async component_section() {
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
        window.alert('le diste click a Section')
    }

    connectedCallback() {
        Promise.resolve(SECTION.component_section()).then(html => {
            this.shadowRoot.innerHTML = html
            let title = this.shadowRoot.querySelector('.selection_title')
            title.addEventListener('click', this)
        })
    }
}

customElements.define('my-section', SECTION);