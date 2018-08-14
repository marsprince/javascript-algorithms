interface Callback {
  (...args: any[]): any
}

interface Event {
  id: number
  cb: Callback,
  fired: boolean
}

interface EventObj {
  [type: string]: Event[]
}

class EventEmitter {
  private event: EventObj;
  private id: number;

  constructor() {
    this.event = {};
    this.id = 0;
  }

  on(type: string, cb: Callback) {
    if (!(type in this.event)) {
      this.event[type] = [];
    }
    this.event[type].push({
      id: ++this.id,
      cb,
      fired: false
    });
    return this.id;
  }

  emit(type: string, ...args: any[]) {
    this.event[type] && this.event[type].length !== 0 && this.event[type].forEach(event => {
      event.cb.apply(this, args)
      if (event.fired) {
        this.off(type, event.id)
      }
    })
  }

  off(type: string, id?: number) {
    if(id) {
      const handler = this.event[type];
      const index = handler.findIndex((event => event.id === id));
      handler.splice(index,1);
    } else {
      delete this.event[type]
    }
  }

  once(type: string, cb: Callback) {
    this.on(type, cb);
    const length = this.event[type].length;
    this.event[type][length - 1].fired = true;
    return this.id
  }
}

export default EventEmitter
