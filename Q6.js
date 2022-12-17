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
    if (FsubmitBtn() == "紫色、藍色、皮膚色、白色"
     || FsubmitBtn() == "紫色、藍色、白色、皮膚色"
     || FsubmitBtn() == "紫色、皮膚色、藍色、白色"
     || FsubmitBtn() == "紫色、皮膚色、白色、藍色"
     || FsubmitBtn() == "紫色、白色、皮膚色、藍色"
     || FsubmitBtn() == "紫色、白色、藍色、皮膚色"
     || FsubmitBtn() == "藍色、皮膚色、白色、紫色"
     || FsubmitBtn() == "藍色、皮膚色、紫色、白色"
     || FsubmitBtn() == "藍色、紫色、皮膚色、白色"
     || FsubmitBtn() == "藍色、紫色、白色、皮膚色"
     || FsubmitBtn() == "藍色、白色、紫色、皮膚色"
     || FsubmitBtn() == "藍色、白色、皮膚色、紫色"
     || FsubmitBtn() == "白色、紫色、皮膚色、藍色"
     || FsubmitBtn() == "白色、紫色、藍色、皮膚色"
     || FsubmitBtn() == "白色、藍色、紫色、皮膚色"
     || FsubmitBtn() == "白色、藍色、皮膚色、紫色"
     || FsubmitBtn() == "白色、皮膚色、藍色、紫色"
     || FsubmitBtn() == "白色、皮膚色、紫色、藍色"
     || FsubmitBtn() == "皮膚色、白色、紫色、藍色"
     || FsubmitBtn() == "皮膚色、白色、藍色、紫色"
     || FsubmitBtn() == "皮膚色、藍色、白色、紫色"
     || FsubmitBtn() == "皮膚色、藍色、紫色、白色"
     || FsubmitBtn() == "皮膚色、紫色、藍色、白色"
     || FsubmitBtn() == "皮膚色、紫色、白色、藍色"){
        alert("(●'◡'●)👍👍👍")
        window.location.assign("./mould.html")
    }
    else {alert("🤦‍♂️🤷‍♂️🤔🤔🤔❌❌❌❌")}
})

})


