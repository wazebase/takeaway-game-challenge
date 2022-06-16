export class Message {
    constructor(message: string, className: string, iconClass?: string) {
        this.message = message;
        this.messageClass = className;
        this.iconClass = iconClass;
    }
    message: string;
    messageClass: string;
    iconClass?: string;
}
