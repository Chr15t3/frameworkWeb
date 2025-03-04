//Alias que criamos para usar no método on.
type Callback = () => void

export class Eventing {
  // eventos fora do constructor, para serem chamados apenas após a criação do usuário
  events: { [key: string]: Callback[] } = {}

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName]

    if (!handlers || handlers.length === 0) {
      return
    }

    handlers.forEach((callback) => {
      callback()
    })
  }
}
