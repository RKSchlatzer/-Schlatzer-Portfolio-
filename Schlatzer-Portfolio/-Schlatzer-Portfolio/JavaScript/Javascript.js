function Clicky() {
    document.getElementById("ClickReturnText").innerHTML = "Thanks For Clicking!";
}

function ChangeUp() {
    var TextInput = document.getElementById('TextInput');
    var TextOutput = document.getElementById("TextOutput");
    var Changed = TextInput.value;
    TextOutput.value = Changed
}
