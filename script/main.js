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

    document.addEventListener("keydown", function (event) {
        if (event.keyCode ===37) {
            // console.log("left");
            cat.x -=5;
        }
        if (event.keyCode ===38) {
            // console.log("up");
            cat.y -=5;
        }
        if (event.keyCode ===39) {
            // console.log("right");
            cat.x +=5;
        }
        if (event.keyCode ===40) {
            // console.log("down");
            cat.y +=5;
        }
    });

    let box = new PIXI.Graphics();
    box.beginFill(0xccff99);
    box.drawRect(0, 0,64,64);
    box.endFill();
    box.x = 96;
    box.y = 96;
    app.stage.addChild(box);

    app.ticker.add((delta) => {
        if (hitRectangle(cat, box)) {
            box.tint = 0xff3300;
        } else {
            box.tint = 0xccff99;
        }
    });

}

function hitRectangle(r1, r2) {

    let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

    //hit will determine whether there's a collision
    hit = false;

    //Find the center points of each sprite
    r1.centerX = r1.x;
    r1.centerY = r1.y;
    r2.centerX = r2.x;
    r2.centerY = r2.y;

    //Find the half-widths and half-heights of each sprite
    r1.halfWidth = r1.width / 2;
    r1.halfHeight = r1.height / 2;
    r2.halfWidth = r2.width / 2;
    r2.halfHeight = r2.height / 2;

    //Calculate the distance vector between the sprites
    vx = r1.centerX - r2.centerX;
    vy = r1.centerY - r2.centerY;

    //Figure out the combined half-widths and half-heights
    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;

    //Check for a collision on the x axis
    if (Math.abs(vx) < combinedHalfWidths) {

      //A collision might be occurring. Check for a collision on the y axis
      if (Math.abs(vy) < combinedHalfHeights) {

        //There's definitely a collision happening
        hit = true;
      } else {

        //There's no collision on the y axis
        hit = false;
      }
    } else {

      //There's no collision on the x axis
      hit = false;
    }

    //`hit` will be either `true` or `false`
    return hit;
}