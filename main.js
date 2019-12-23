var gameData = {
  hp: 10,
  maxhp: 10,
  stamina: 10,
  maxStamina: 10,
  seeds: 0,
  gold: 0,
  seedsPerClick: 1,
  seedsPerClickCost: 10,
  xpDigging: 0,
  xpFarming: 0,
}

function digSeeds() {
  if (gameData.stamina >= 1) {
    gameData.stamina --;
    gameData.seeds += gameData.seedsPerClick;
    document.getElementById("seedsDug").innerHTML = gameData.seeds + " seeds";
    document.getElementById("stamina").innerHTML = gameData.stamina + " / " + gameData.maxStamina + " stamina";
  }
}

function buySeedsPerClick() {
  if (gameData.gold >= gameData.seedsPerClickCost) {
    gameData.gold -= gameData.seedsPerClickCost
    gameData.seedsPerClick += 1
    gameData.seedsPerClickCost *= 2
  }
}
