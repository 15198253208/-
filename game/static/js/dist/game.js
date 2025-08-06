class XiaoxinGameMenu{
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class="xiaoxin-game-menu">
    <div class = "xiaoixin-game-menu-field">
        <div class = "xiaoxin-game-menu-field-item xiaoxin-game-menu-field-item-single-mode">
            单人模式
        </div>
        <br />
        <div class = "xiaoxin-game-menu-field-item xiaoxin-game-menu-field-item-multi-mode">
            多人模式
        </div>
        <br />
        <div class = "xiaoxin-game-menu-field-item xiaoxin-game-menu-field-item-settings">
            设置
        </div>
    </div>
</div>
`);
        this.root.$xiaoxin_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.xiaoxin-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.xiaoxin-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.xiaoxin-game-menu-field-item-settings');

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$single_mode.click(function() {
            outer.hide();
            outer.root.playground.show();
        });
        this.$multi_mode.click(function() {
            console.log("click multi mode");
        });
        this.$settings.click(function() {
            console.log("click settings");
        });
    }

    show() {      //打开menu界面
        this.$menu.show();
    }
    hide() {      //关闭menu界面
        this.$menu.hide();
    }
}
let Xiaoxin_Game_Objects = [];

class XiaoxinGameObject{
    constructor() {
        Xiaoxin_Game_Objects.push(this);

        this.has_called_start = false; // 是否执行过start函数
        this.timedelta = 0; // 当前帧距离上一帧的时间间隔
    }

    start() { // 只会在第一帧执行一次

    }

    update() { // 每一帧都会执行一次

    }

    on_destroy() { // 在被销毁前执行一次

    }

    destroy() { // 销毁该物体
        this.on_destroy();

        for(let i = 0; i < Xiaoxin_Game_Objects.length; i++ ) {
            if(Xiaoxin_Game_Objects[i] === this) {
                Xiaoxin_Game_Objects.splice(i, 1);
                break;
            }
        }
    }

}

let last_timestamp;

let Xiaoxin_Game_Animation = function(timestamp) {
    for(let i = 0; i < Xiaoxin_Game_Objects.length; i ++) {
        let obj = Xiaoxin_Game_Objects[i];
        if (!obj.has_called_start) {
            obj.start();
            obj.has_called_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;

    requestAnimationFrame(Xiaoxin_Game_Animation);
}

requestAnimationFrame(Xiaoxin_Game_Animation);
class GameMap extends XiaoxinGameObject{
    constructor(playground) {
        super();
        this.playground = playground;
        this.$canvas = $(`<canvas></canvas>`);
        this.ctx = this.$canvas[0].getContext('2d');
        this.ctx.canvas.width = this.playground.width;
        this.ctx.canvas.height = this.playground.height;
        this.playground.$playground.append(this.$canvas);
    }

    start() {
    }

    update() {
        this.render();
    }

    render() {
        this.ctx.fillStyle = "rgba(0, 0, 0)";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}
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
export class XiaoxinGame{
    constructor(id) {
        this.id = id;
        this.$xiaoxin_game = $('#' + id);
      //  this.menu = new XiaoxinGameMenu(this);
        this.playground = new XiaoxinGamePlayground(this);

        this.start();
    }

    start(){
    }

}
