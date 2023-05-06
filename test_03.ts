function getClockAngle(hh_mm: string): number {
  const hh = +hh_mm.split(":")[0];
  const mm = +hh_mm.split(":")[1];

  let hHandClock = getHourToHandClock(hh, mm);
  let mHandClock = getMinuteToHandClock(mm);
  let mAngle = getAngle(mHandClock);
  let hAngle = getAngle(hHandClock);
  let hmAngle = hAngle - mAngle;

  hmAngle = Math.abs(hmAngle);
  if (hmAngle > 180) {
    hmAngle = 360 - hmAngle;
  }
  // return the shorter angle between the hour and minute hands of the clock, in degree
  return hmAngle;
}

function getMinuteToHandClock(minute: number): number {
  return minute / 5;
}

function getHourToHandClock(hour: number, minute: number): number {
  let m = minute / 60;
  let h = hour % 12;
  return h + m;
}

function getAngle(n: number): number {
  return n * 30;
}

// นาทีละ 4.5 องศา
// 5 นาที = 22.5 องศา
// ขีดละ 30 องศา
// นาทีควรหาร 5
// ถ้านาทีคือ 30, 30 / 5 = 6, 6 * 30 = 180, 180 องศา
// 17:30, เข็มนาที = 180, เข็มชั่วโมง = 165, 165 - 180 = 15 องศา
// getClockAngle(“09:00”)===90
// getClockAngle(“17:30”)===15
let resultA = getClockAngle("09:00");
let resultB = getClockAngle("17:30");
let resultC = getClockAngle("13:50");
let resultD = getClockAngle("10:00");
console.log("09:00: ", resultA);
console.log("17:30: ", resultB);
console.log("13:50: ", resultC);
console.log("10:00: ", resultD);
