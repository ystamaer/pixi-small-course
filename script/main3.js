// https://www.codeandweb.com/tp-online/index.html?layout=horizontal&show-settings=false
const app = new PIXI.Application({
    width: 256,
    height: 256,
    backgroundColor: 0x1099bb,
});

document.body.appendChild(app.view);

PIXI.Loader.shared
    .add("images/atlas.json")
    .load(setup);

function setup() {
    let id = PIXI.Loader.shared.resources["images/atlas.json"].textures;
    let sprite = new PIXI.Sprite(id["coint.png"]);

    sprite.anchor.set(0,0);

    sprite.x = 100;
    sprite.y = 100;

    app.stage.addChild(sprite);
}