const stoneGame = (piles) => {
  let playerChange = true;
  let alicePile = [];
  let bobPile = [];
  piles.sort((a, b) => b - a);
  for (let index = 0; index < piles.length; index++) {
    if (playerChange) {
      alicePile.push(piles[index]);
      playerChange = !playerChange;
    } else if (!playerChange) {
      bobPile.push(piles[index]);
      playerChange = !playerChange;
    }
  }
  let aliceCount = alicePile.reduce((a, b) => a + b);
  let bobCount = bobPile.reduce((a, b) => a + b);
  return aliceCount > bobCount ? true : false;
};

//console.log(stoneGame([5, 3, 4, 5]));
