const app = new PIXI.Application({
    width: 640,
    height: 640,
    background: 0x1099bb
});

document.body.appendChild(app.view);

const  container = new PIXI.Container();
app.stage.addChild(container);

const texture = new PIXI.Texture.from("images/atlas.png");

const smile = new PIXI.Sprite(texture);
container.addChild(smile);

container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

app.ticker.add((delta) => {
    container.rotation -= 0.01 * delta;
});