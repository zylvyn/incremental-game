var gameData = {
  hp: 10,
  maxhp: 10,
  stamina: 0,
  maxstamina: 10,
  seeds: 0,
  gold: 0,
  seedsPerClick: 1
}

function digSeeds() {
  gameData.seeds += gameData.seedsPerClick
  document.getElementById("seedsDug").innerHTML = gameData.seedsDug + " seeds"
}
