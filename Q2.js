window.addEventListener("load", function (params){
    let answerInput = document.getElementById("answer");
    let submitBtn = document.getElementById("btn")

    function FsubmitBtn(value){
        let str = "";
        let submitValue = answerInput.value;
        str = submitValue;
        return str
    }

submitBtn.addEventListener("click", function(e){
    if (FsubmitBtn() == "行天宮"){
        alert("(●'◡'●)👍👍👍")
        window.location.assign("./Q3.html")
    }
    else {alert("🤦‍♂️🤷‍♂️🤔🤔🤔❌❌❌❌")}
})

})


