interface Callback {
  (...args: any[]): any
}

interface Event {
  id: number
  cb: Callback
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
      cb
    });
    return this.id;
  }

  emit(type: string, ...args: any[]) {
    this.event[type] && this.event[type].length !== 0 && this.event[type].forEach(event => {
      event.cb.apply(this, args)
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
}

export default EventEmitter
