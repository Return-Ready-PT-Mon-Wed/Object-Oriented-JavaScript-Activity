let post = {
    name: "",
    message: function Message(text){
        if(text.length <= 140){
            message = text;
        }
        else {
            alert("Message cannot be longer than 140 character.")
        }
    },
    AddLetter: function(letter){
        if(this.message.length < 140){
            this.message += letter;
        }
        else {
            alert("Message cannot be longer than 140 character.")
        }
    },
    DeleteLetter: function(){
        if(this.message.length > 0){
            this.message = this.message.substring(0, this.message.length - 1);
        }
    },
    ViewMessage(){
        return this.message;
    }
}

post['name'] = "Nick Satinover";
post.Message("New Message");