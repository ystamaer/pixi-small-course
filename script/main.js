const app = new PIXI.Application({
    width: 256,
    height: 256,
    backgroundColor: 0x1099bb,
});

document.body.appendChild(app.view);

let style = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fill: "white",
});

let message = new PIXI.Text("Hello!", style)

app.stage.addChild(message);

let value = 0;

message.x = 100;
message.y = 100;

app.ticker.add((delta) => {
    value++;
    message.text = value;
});
