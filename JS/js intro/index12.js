function addPoints(points, homeTeam, awayTeam, result) {
  let copyPoint = points.slice();
  if (result === 'win') {
    copyPoint[homeTeam - 1] += 3;
  } else if (result === 'lose') {
    copyPoint[awayTeam - 1] += 3;
  } else {
    copyPoint[homeTeam - 1] += 1;
    copyPoint[awayTeam - 1] += 1;
  }
  return copyPoint;
}
const points = [44, 41, 40, 35, 30, 22, 10, 7];
const rez = addPoints(points, 3, 6, 'lose');
console.log(points);
console.log(rez);
