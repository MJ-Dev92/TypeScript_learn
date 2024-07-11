import { BaseComponent } from "../../component.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="note">
            <h2 class="todo__title"></h2>
            <input type='checkbox' class="todo__checkbox"></input>
        </section>`);

    const titleElement = this.element.querySelector(
      ".todo__title"
    )! as HTMLHeadElement;
    titleElement.textContent = title;

    const bodyElement = this.element.querySelector(
      ".todo__body"
    )! as HTMLInputElement;
    bodyElement.textContent = todo;
  }
}
