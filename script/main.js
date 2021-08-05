const app = new PIXI.Application({
    width: 256,
    height: 256,
    backgroundColor: 0x1099bb,
});

document.body.appendChild(app.view);

PIXI.Loader.shared
    .add("images/cat.png")
    .load(setup);

function setup() {
    let cat = new PIXI.Sprite(PIXI.Loader.shared.resources["images/cat.png"].texture);

    app.stage.addChild(cat);

    /*let Sprite = PIXI.Sprite;
    let cattwo = new Sprite(PIXI.Loader.shared.resources["images/cat.png"].texture);
    cattwo.x = 50;
    cattwo.y = 50;

    app.stage.addChild(cattwo);*/

    cat.x = 100;
    cat.y = 100;

    // cat.width = 50;
    // cat.height = 100;
    cat.scale.set(1);
    cat.anchor.set(0.5); // точка вращения

    app.ticker.add((delta) => {
        cat.rotation -= 0.01 *delta;
    });
}