window.onload = () => {

    let delay = 1000;

    $('#click').click(() => {
        $('#lafo').animate({
            left: "700px",
            opacity: "0"
        }, delay, () => {
            console.log("animasi sudah selesai!");
        });
    });

    let lafoCount = $('.forant').length;
    let lafoWidth = $('.forant').width();
    let lafoHeight = $('.forant').height();
    let totalWidth = lafoCount * lafoWidth;

    $('#lafo-container').css({
        width: totalWidth
    })

    $('#slider-mask').css({
        width: lafoWidth,
        height: lafoHeight
    })

    let currentLeft = 0;

    $('#laquo').click(() => {
        currentLeft += lafoWidth;
        if (currentLeft == lafoWidth) currentLeft = -totalWidth + lafoWidth
        $('#lafo-container').animate({
            left: currentLeft
        }, delay, () => {

        });
    });

    $('#raquo').click(() => {
        currentLeft -= lafoWidth;
        if (currentLeft == -totalWidth) currentLeft = 0
        $('#lafo-container').animate({
            left: currentLeft
        }, delay, () => {

        });
    });
}