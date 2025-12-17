var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawblade(x, y){
var hitZoneSize = 25;
var damageFromObstacle = 10;
var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
sawBladeHitZone.x = x;
sawBladeHitZone.y = y;
game.addGameItem(sawBladeHitZone); 
var obstacleImage = draw.bitmap("img/crashfih.png");
obstacleImage.x = -55
obstacleImage.y = -25
obstacleImage.scaleX = .45
obstacleImage.scaleY = .45
sawBladeHitZone.addChild(obstacleImage); 

}
// createSawblade(400, groundY - 45)
// createSawblade(600, groundY - 100)
// createSawblade(900, groundY - 45)

function createEnemy(x, y){
var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.rect(50, 50, "red");
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
enemy.velocityX = -4
game.addGameItem(enemy);
enemy.onPlayerCollision = function () {
  game.changeIntegrity(-10)
};
enemy.onProjectileCollison = function () {
  game.increaseScore(100);
enemy.fadeOut();
}
}
// createEnemy(400, groundY - 10);
// createEnemy(800, groundY - 100);
// createEnemy(1200, groundY - 50);
function createReward(x, y){
  var reward = game.createGameItem("reward", 25)
  var greenSquare = draw.rect(50, 50, "green")
  greenSquare.x = -25
  greenSquare.y = -25
  reward.addChild(greenSquare)
  reward.x = x
  reward.y = y
  reward.velocityX = -2
  game.addGameItem(reward)
  reward.onPlayerCollision = function(){
    game.changeIntegrity(20)
  }
}
function createMarker(x, y){
  var marker = game.createGameItem("marker", 200)
  var yellowPole = draw.rect(10, 1000, "yellow")
  yellowPole.x = -25
  yellowPole.y = -25
  marker.addChild(yellowPole)
  marker.x = x
  marker.y = y
  marker.velocityX = -1
  game.addGameItem(marker)
  marker.onPlayerCollision = function(){
    startLevel()
  }
  marker.onProjectileCollison = function(){
    startLevel()
  }
}
function startLevel() {
      // TODO 13 goes below here
var level = levelData[currentLevel]
var levelObjects = level.gameItems
for (var i =0; i < levelObjects.length; i++){
  var eachObject = levelObjects[i]
  if (eachObject.type === "sawblade"){
    createSawblade(eachObject.x, eachObject.y)
  } else if (eachObject.type === "reward"){
    createReward(eachObject.x, eachObject.y)
  } else if (eachObject.type === "marker"){
    createMarker(eachObject.x, eachObject.y)
  } else if (eachObject.type === "enemy"){
    createEnemy(eachObject.x, eachObject.y)
  }
}
      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
