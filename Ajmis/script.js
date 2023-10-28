$(document).ready(function() {
    const $heart = $("#heart");
    const $modal = $("#modal");
    const $paper = $(".paper");

    function openModal() {
        $modal.fadeIn(500);
        $paper.fadeIn(500);
    }

    function closeModal() {
        $paper.fadeOut(1000, function() {
            $modal.fadeOut(500);
        });
    }

    $heart.click(openModal);

    $("#close").click(closeModal);

    $modal.click(function(event) {
        if (event.target === $modal[0]) {
            closeModal();
        }
    });
});
