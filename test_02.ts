function getHandScore(input: string): number {
  const cards = input.split(" ");

  let mapSuite = new Map<string, string[]>();
  for (const card of cards) {
    let suit = card[0];
    // let value = getValue(card.slice(1));
    let value = card.slice(1);

    if (mapSuite.has(suit)) {
      let existValue = mapSuite.get(suit);
      if (existValue) {
        existValue.push(value);
        mapSuite.set(suit, existValue);
      }
    } else {
      mapSuite.set(suit, [value]);
    }
  }

  let maxValue = 0;
  for (const suitKey of mapSuite.keys()) {
    let values = mapSuite.get(suitKey);
    if (values) {
      let val = calValue(values);
      if (val > maxValue) maxValue = val;
    }
  }

  return maxValue;
}

function getValue(rank: string): number {
  switch (rank) {
    case "A":
      return 11;
    case "J":
    case "Q":
    case "K":
      return 10;
    default:
      return parseInt(rank, 10);
  }
}

function calValue(values: string[]): number {
  if (values.length === 3) {
    if (values.every((v) => v.toLocaleUpperCase() == "A")) {
      return 35;
    } else if (values.every((v) => v == "8")) {
      return 32.5;
    }
  }

  let result = values.reduce((sum, v) => {
    return sum + getValue(v);
  }, 0);
  return result;
}

console.log(getHandScore("S8 S10 CA"));
console.log(getHandScore("S8 S8 S8"));
console.log(getHandScore("HA HA HA"));
