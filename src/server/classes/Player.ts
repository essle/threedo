import {Socket} from 'socket.io';

const CONFIG = require('./../../../config.json');

class Player {

    private readonly socket: Socket;
    public readonly id: string;
    public slot?: number;

    constructor(socket: Socket) {
        this.socket = socket;
        this.id = CONFIG.IP_ONCE ? socket.request.connection.remoteAddress : socket.id;
        this.slot = null;
    }

    send(key: string, data: any): void {
        this.socket.emit(`player:${key}`, data);
    }

    join(room: string, slot: number): void {
        this.socket.join(room);
        this.slot = slot;
    }

    leave(room: string): void {
        this.socket.leave(room);
        this.slot = null;
    }

}

export default Player;