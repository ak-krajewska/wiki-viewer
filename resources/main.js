$(document).ready(function() {
    //when searchis clicked run code
    $('#search').click(function(){
        //gets search input
        var searchTerm = $('#searchTerm').val();
        console.log(searchTerm);
        //API url with search input
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
        
        
        //https://en.wikipedia.org/w/api.php?action=opensearch&search=plant&format=json&callback=?
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data){
                //do this on success
                console.log(data[1][0]);//tag
                console.log(data[2][0]);//description
                console.log(data[3][0]);//url
                var tag = data[1][0];
                var description = data[2][0];
                var wikiurl = data[3][0];
                //$('#output').prepend('<div class="jumbotron"><p><a href="' + wikiurl + '">' + tag + '</a></p><p>' + description + '</p></div>');
                //output every possible definition
                $('#output').html('');
                for (var i = 0; i<data[1].length; i++){
                    $('#output').append('<div class="jumbotron"><p><a href="' + data[3][i] + '">' + data[1][i] + '</a></p><p>' + data[2][i] + '</p></div>');
                }
                
            }
            
        });
    });
    
});