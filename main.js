function speak()
{
    setTimeout()
    {
        take_snapshot();
        save();
        timeinterval();
           5000;
    }
    UtterThis = set SpeechSynthesisUtterance = speak_data;

    img_id = document.getElementById("selfie1").value;
}

function speak()
{
    setTimeout()
    {
        take_snapshot();
        save();
        timeinterval();
           10000;
    }
    UtterThis = set SpeechSynthesisUtterance = speak_data;

    img_id = document.getElementById("selfie2").value;
}

function speak()
{
    setTimeout()
    {
        take_snapshot();
        save();
        timeinterval();
           15000;
    }
    UtterThis = set SpeechSynthesisUtterance = speak_data;

    img_id = document.getElementById("selfie3").value;
}

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri)
    {
        if(img_id == "selfie1") {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="' + data_uri +' "/>';
        }

        if(img_id == "selfie2") {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="' + data_uri +' "/>';
        }

        if(img_id == "selfie3") {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="' + data_uri +' "/>';
        }
    });