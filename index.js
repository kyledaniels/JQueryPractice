
// // $('h1').click(function(){
// //     $('h1').css('color','purple');
// // })

// // $('button').click(function(){
// //     $('h1').css('color','purple');
// // })

// $('input').keypress(function(event){
//     console.log(event.key);
// });


// $(document).keypress(function(event){
//    $("h1").text(event.key);
// });

$("h1").on("click", function(){
    $("h1").css("color", "purple");
})

$("h1").before("<button>New</button>");

$("h1").after("<button>New</button>");

$("h1").prepend("<button>Before</button>");

$("h1").append("<button>After</button>");