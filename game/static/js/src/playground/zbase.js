class XiaoxinGamePlayground{
    constructor(root) {
        this.root = root;
        this.$playground = $(`<div class="xiaoxin-game-playground"></div>`);

        this.root.$xiaoxin_game.append(this.$playground);
        this.width = this.$playground.width();
        this.height = this.$playground.height();
        this.game_map = new GameMap(this);

        // this.hide();

        this.start();
    }

    start() {
    }

    show() {      //打开playground界面
        this.$playground.show();
    }

    hide() {      //关闭playground界面
        this.$playground.hide();
    }

}
