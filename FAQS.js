const msg_list = document.getElementById("send-messages");
const msg_input = document.getElementById("message-input");
const no_msg = document.getElementById("no-msg");

function sendMessage() {
	//console.log(msg_input.value);
	linode = document.createElement("li");
	textNode = document.createTextNode(msg_input.value);

	linode.appendChild(textNode);
	//console.log(linode);
	msg_list.appendChild(linode);

	// clear the input
	msg_input.value = "";

	msg_list.removeChild(no_msg);
}
