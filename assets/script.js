jQuery(document).ready(function($) {
    var getJsonReq = {};
    getJsonReq["option"] = "OP_3"
    updateCoinFlip(getJsonReq);

    $('#coin').on('click', function() {
        var updateJsonReq = {};
        updateJsonReq["option"] = "OP_4"
        updateCoinFlip(updateJsonReq);

        var flipResult = Math.random();
        $('#coin').removeClass();
        setTimeout(function() {
            if (flipResult <= 0.5) {
                $('#coin').addClass('filp-heads');
                console.log('it is head');
            } else {
                $('#coin').addClass('filp-tails');
                console.log('it is tails');
            }
        }, 100);
    });

    $('#flip-again').on('click', function() {
        $("#coin").trigger("click");
    });
});

function updateCoinFlip(reqJson) {
    $.ajax({
        type: "POST",
        cache: false,
        url: "https://script.google.com/macros/s/AKfycbxkVHdPS7zgzc7WiiMtfPtrA6cThC6JGRCGFSDxAIVyROkgiJE/exec",
        data: JSON.stringify(reqJson),
        success: function(data) {
            $("#flip-number").html("flip number: " + data["data"]);
        },
        error: function(xhr, text, error) {
            console.log('failed to update flip number..');
        }
    });
    return false;
}