class XiaoxinGame{
    constructor(id) {
        this.id = id;
        this.$xiaoxin_game = $('#' + id);
        this.menu = new XiaoxinGameMenu(this);
        this.playground = new XiaoxinGamePlayground(this);

        this.start();
    }

    start(){
    }

}
