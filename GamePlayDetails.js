let GlobalUserName = "";
let GlobalUserPoints = Number(-1);

function setGlobalUserName(name) {
  GlobalUserName = name;
}

function setGlobalUserPoints(points) {
  GlobalUserPoints = points;
}

function getGlobalUserName() {
  return GlobalUserName;
}

function getGlobalUserPoints() {
  return GlobalUserPoints;
}

export { getGlobalUserName, setGlobalUserName, getGlobalUserPoints, setGlobalUserPoints };
