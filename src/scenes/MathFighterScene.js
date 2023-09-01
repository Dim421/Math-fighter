import Phaser from "phaser";
export default class MathFighterScene extends Phaser.Scene {
  constructor() {
    super("Math-fighter-scene");
  }
  init() {
    this.gameHalfWidth = this.scale.width * 0.5
    this.gameHalfHeight = this.scale.height * 0.5
    this.player = undefined
    this.enemy = undefined
    this.slash = undefined
  }
  preload() {
    this.load.image("background", "images/bg_layer1.png");
    this.load.image("fight-bg", "images/fight-bg.png");
    this.load.image("tile", "images/tile.png");
    this.load.spritesheet("player", "images/warrior1.png", {
      frameHeight: 80,
      frameWidth: 80,
    });
    this.load.spritesheet("enemy", "images/warrior2.png", {
      frameHeight: 80,
      frameWidth: 80,
    });
    this.load.spritesheet("numbers", "images/numbers.png", {
      frameHeight: 71.25,
      frameWidth: 131,
    });
    this.load.spritesheet("slash", "images/slash.png", {
      frameHeight: 88,
      frameWidth: 42,
    });
  }
  create() {
    this.add.image(240, 320, "background");
    const fight_bg = this.add.image(240, 160, "fight-bg");
    const tile = this.physics.add.staticImage(
      240,
      fight_bg.height - 40,
      "tile"
    );
    this.player = this.physics.add.sprite (
        this.gameHalfWidth - 150,
        this.gameHalfHeight - 200,    'player')
        .setBounce(0.2)
        .setOffset( -20, -10)
    this.enemy = this.physics.add.sprite (
        this.gameHalfWidth + 150,
        this.gameHalfHeight - 200,    'enemy')
        .setBounce(0.2)
        .setOffset( -20, -10)
        .setFlipX(true)

    this.physics.add.collider(this.player, tile)
    this.physics.add.collider(this.enemy, tile)
  }

  update() {

  }
}
