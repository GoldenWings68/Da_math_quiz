function usergame() {
    player1name = document.getElementById("player1input").value;
    player2name = document.getElementById("player2input").value;

    localStorage.setItem("Player_1", player1name);
    localStorage.setItem("Player_2", player2name);

    window.location = "gamepage.html";

}