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
