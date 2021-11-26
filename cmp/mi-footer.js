class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Calderón Uriostegui Jonathan.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
