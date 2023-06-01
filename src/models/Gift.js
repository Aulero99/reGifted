export class Gift{
    constructor(data){
        this.id = data.id
        this.tag = data.tag || ''
        this.url = data.url || 'https://media1.tenor.com/images/b278a5a006340b8946457552adec56c5/tenor.gif?itemid=7991240'
        this.opened = data.opened || false
        this.creatorId = data.creatorId || ''
    }
}