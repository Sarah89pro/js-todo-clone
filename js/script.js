/************
 * TO DO APP *
 ************/
$(document).ready(function() {

    var toDoItems = [
        {
            text: "Learn a new language",
            completed: true
        },
        {
            text: "Run a Marathon",
            completed: false
        },
        {
            text: "Climb a mountain",
            completed: false
        },
        {
            text: "Pursue your passion",
            completed: true
        },
        {
            text: "See the Northern Lights",
            completed: false
        },
        {
            text: "Plant a tree and watch it grow",
            completed: true
        },
        {
            text: "Go on a road trip",
            completed: true
        },
        {
            text: "Conquer your biggest fear",
            completed: false
        },
        {
            text: "Go on a meditation retreat",
            completed: true
        },
        {
            text: "Do something crazy and out of character",
            completed: true
        },

    ];

    //REFS
    var list = $(".todos");
    var newInput= $(".add-todo");
    var template= $("#template li");

    //POPOLAZIONE TO DO LIST
    for (var i = 0; i < toDoItems.length; i++) {
        var toDo = toDoItems[i];

        //Template
        var item = template.clone();
        item.find(".text").text(toDo.text);

        //aggiunta alla lista
        list.append(item);
    }

    //INSERIMENTO NUOVO ELEMENTO
    newInput.keyup(function(event) {
        console.log(event.which);

        if(event.which ===13) { //code enter key
            var text =newInput.val().trim();

            if(text !== "") {
                console.log(text);

                //Template
                var item = template.clone();
                item.find(".text").text(text);

                //Aggiunta alla lista
                list.append(item);

                //reset
                newInput.val("");
            }
        }
    });

    //RIMOZIONE TO DO ITEM
    $("body").on("click", ".todos li i", function(){
        $(this).parent().remove();

    });


    //end doc ready
});