let path = new URL(import.meta.url).pathname

export default class FOOTER extends HTMLElement{
    static async component_footer() {
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
        window.alert('le diste click a footer')
    }

    connectedCallback() {
        Promise.resolve(FOOTER.component_footer()).then(html => {
            this.shadowRoot.innerHTML = html
            let title = this.shadowRoot.querySelector('.selection_title')
            title.addEventListener('click', this)
        })
    }
}

customElements.define('my-footer', FOOTER);