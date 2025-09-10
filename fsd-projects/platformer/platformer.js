$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(375, 375, 125, 20 );
createPlatform(0, 725, 75, 5);
createPlatform(175, 695, 125, 20);
createPlatform(350, 675, 125, 20);
createPlatform(466.6, 550, 125, 20);
createPlatform(800, 425, 125, 20);
createPlatform(350, 250, 125, 20);
createPlatform(250, 250, 125, 20);
createPlatform(1050, 350, 125, 20);
createPlatform(850, 700, 125, 20);


    // TODO 3 - Create Collectables

createCollectable("hardDrive", 900, 650);
createCollectable("floppyDisk",375, 200);
createCollectable("tape", 1100, 300);

    
    // TODO 4 - Create Cannons
createCannon("right", 800, 0)
createCannon("bottom",700, 2000)
createCannon("right", 600, 1500)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
