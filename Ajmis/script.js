$(document).ready(function() {
    const $heart = $("#heart");
    const $modal = $("#modal");
    const $paper = $(".paper");
    const $music = $("#background-music")[0]; // Get the audio element as a DOM object
    $music.volume = 0.05; // Set the volume to 0.5 (half volume)
    function openModal() {
        $modal.fadeIn(500);
        $paper.fadeIn(1000);
        $music.currentTime = 0;
        $music.play(); // Start playing the background music
    }

    function closeModal() {
        $paper.fadeOut(1000, function() {
            $modal.fadeOut(500);
        });
        $music.pause(); // Pause the background music when closing the modal
    }

    $heart.click(openModal);

    $("#close").click(closeModal);

    $modal.click(function(event) {
        if (event.target === $modal[0]) {
            closeModal();
        }
    });
});
