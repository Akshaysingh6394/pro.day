const promiseDayDate = new Date("February 11, 2024 09:47:00")
.getTime()

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = promiseDayDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
    `${days}d ${hours}h ${minutes}m ${seconds}s`

    if(timeRemaining < 0){
        clearInterval(countdownInterval);
        document.getElementById("countdown").style.display = "none";

        const proposalMessage = document.getElementById("proposalMessage");
        proposalMessage.style.display = "block";
        proposalMessage.innerHTML = "Happy Promise Day Mrs Shivani❤️❤️❤️ <br>I promise to dream with you, celebrate with you,<br> and walk beside you through whatever life brings.<br> I vow to laugh with you and comfort you during times of joy and times of sorrow.<br> I promise to always pursue you, to fight for you, and love you unconditionally and wholeheartedly for the rest of my life.";

    }
})