// do chưa ổn lắm phần js và css nên em tìm trên mạng khá nhiều
// khai báo 
let words = ["courage", "researcher", "uniform", "past", "lace", "correspondence"];
let title = document.getElementById("title");
const userInput = document.getElementById("textarea");
const scoreDisplay = document.getElementById("score");
const messageDisplay = document.getElementById("message");
let score = 0;
let currentWord = '';


// tạo mảng random thay đổi từ trong mảng
function changeWord() {
    let index = Math.floor(Math.random() * words.length);
    currentWord = words[index];
    title.innerText = currentWord;
}

// tạo hành động nghe nút enter thì sẽ kiẻm tra kết quả
userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});


// kiểm tra và thông báo kết quả
function checkAnswer() {
    if (userInput.value === currentWord) {
        score += 1;
        messageDisplay.innerText = "Correct!";
        messageDisplay.style.color = "green";
        
    } else {
        score -= 1;
        messageDisplay.innerText = "Incorrect!";
        messageDisplay.style.color = "red";
    }
    scoreDisplay.innerText = "Score: " + score;
    userInput.value = '';
    changeWord(); 
}    


changeWord();
// Cập nhật từ khóa mỗi 10 giây
setInterval(changeWord, 10000);

//
