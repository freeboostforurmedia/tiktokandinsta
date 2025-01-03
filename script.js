
document.getElementById('getFollowersButton').addEventListener('click', playPrankSound);
document.getElementById('getLikesButton').addEventListener('click', playPrankSound);
document.getElementById('getInstaLikesButton').addEventListener('click', playPrankSound);
document.getElementById('getFbFollowersButton').addEventListener('click', playPrankSound);

function playPrankSound() {
    var sound = document.getElementById('prankSound');
    sound.play();
}
