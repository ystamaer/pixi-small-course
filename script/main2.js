const app = new PIXI.Application({
    width: 256,
    height: 256,
    backgroundColor: 0x1099bb,
});

document.body.appendChild(app.view);

PIXI.Loader.shared
    .add("images/water-droplets.jpg")
    .load(setup);

function setup() {
    let texture = PIXI.utils.TextureCache["images/water-droplets.jpg"]
    texture.frame = new PIXI.Rectangle(10, 10, 80, 90);
    let target = new PIXI.Sprite(texture);
    app.stage.addChild(target);
}