import { User, UserProps } from "../models/User"
import { View } from "./View"

export class UserForm extends View<User, UserProps> {
  constructor(parent: Element, model: User) {
    super(parent, model)
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.save-model": this.onSaveClick,
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
    }
  }

  onSaveClick = (): void => {
    this.model.save()
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input")
    const name = input.value
    this.model.set({ name })
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  template(): string {
    return `
      <div>
        <input  placeholder = "${this.model.get("name")}"/>
        <button class = "set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save User</button>
      </div>
      `
  }
}
