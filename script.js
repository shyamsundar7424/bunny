document.addEventListener('DOMContentLoaded', function () {
    let walletAmount = localStorage.getItem('walletAmount') ? parseInt(localStorage.getItem('walletAmount')) : 0;
    let level = 1;
  
    const walletAmountElement = document.getElementById('walletAmount');
    const levelElement = document.getElementById('level');
    const mineButton = document.getElementById('mineButton');
  
    walletAmountElement.textContent = walletAmount;
  
    mineButton.addEventListener('click', function () {
      walletAmount++;
      walletAmountElement.textContent = walletAmount;
  
      if (walletAmount >= 1000 && level < 2) {
        level = 2;
        walletAmount += 2;
        levelElement.textContent = level;
      } else if (walletAmount >= 2000 && level < 3) {
        level = 3;
        walletAmount += 3;
        levelElement.textContent = level;
      } else if (walletAmount >= 5000 && level < 4) {
        level = 4;
        walletAmount += 4;
        levelElement.textContent = level;
      } else if (walletAmount >= 10000 && level < 5) {
        level = 5;
        walletAmount += 3;
        levelElement.textContent = level;
      } else if (walletAmount >= 20000 && level < 6) {
        level = 6;
        walletAmount += 5;
        levelElement.textContent = level;
      } else if (walletAmount >= 30000 && level < 7) {
        level = 7;
        walletAmount += 6;
        levelElement.textContent = level;
      }
      else if (walletAmount >= 40000 && level < 8) {
        level = 8;
        walletAmount += 7;
        levelElement.textContent = level;
      }
      else if (walletAmount >= 50000 && level < 9) {
        level = 9;
        walletAmount += 8;
        levelElement.textContent = level;
      }
      else if (walletAmount >= 60000 && level < 10) {
        level = 10;
        walletAmount += 9;
        levelElement.textContent = level;
      }
  
      localStorage.setItem('walletAmount', walletAmount.toString());
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Bunny Mining!");
});

  