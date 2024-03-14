// MEMBUAT SCORE MENGGUNAKAN OBJECT DAN MENGEMBALIKAN NILAI STRING MENJADI OBJECT KEMBALI DENGAN parse().
// DAN MENGGUNAKAN localStorage.getItem() UNTUK MENDAPATKAN NILAI DARI localStorage.setItem().
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

/* INI SAMA SEPERTI DI ATAS HANYA SAJA UNTUK REFERENSI JIKA BINGUNG.
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
*/

// FUNGSI UNTUK MEMULAI PERMAINAN
function playGame(playerMove) {
    const computerMove = pickComputerMove();

    // VARIABEL SEBAGAI PENAMPUNG NILAI
    let result = '';

    // UNTUK MEMBANDINGKAN SIAPAKAH YANG MENANG, KALAH, ATAUPUN SERI.
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }

    } else if (playerMove === 'paper'){
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }
        
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    }

    // MEMBUAT STATEMENT UNTUK MENGHITUNG BERAPA KALI KEMENANGAN, KEKALAHAN ATAUAPUN SERI
    if(result === 'You win.') { 
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1
    }

    // MENGGUNAKAN localStorage.setItem() UNTUK MENYIMPAN NILAI SECARA PERMANENT.
    // FYI localStorage HANYA MENDUKUNG STRING MAKA DARI ITU KITA HARUS MENGUBAH NILAI YG BUKAN STRING MENJADI STRING TERLEBIH DAHULU MENGGUNAKAN METODE stringify().
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
        .innerHTML = result;

    document.querySelector('.js-moves')
        .innerHTML = `You
<img src="icons/${playerMove}-emoji.png" class="move-icon">
<img src="icons/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.ties}`;
}

// MEMBUAT FUNGSI DIMANA COMPUTER AKAN MEMILIH rock, paper, atau scissors.
function pickComputerMove() {
    // UNTUK MERANDOM ANGKA.
    const randomNumber = Math.random();

    let computerMove = '';

    // MEMBUAT KONDISI DENGAN if DAN else if UNTUK MEMBANDINGKAN DARI randomNumber MENJADI SEBUAH OUTPUT YANG INGIN DI TAMPILKAN.
    if(randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }else if(randomNumber >= 1 /3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    }else if(randomNumber >= 2 / 3 && randomNumber < 1){
        computerMove = 'scissors';
    }

    return computerMove;
}