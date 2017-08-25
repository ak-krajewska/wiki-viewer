$(document).ready(function() {
    //when searchis clicked run code
    $('#search').click(function(){
        //gets search input
        var searchTerm = $('#searchTerm').val();
        
        //API url with search input
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
        
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data){
                //do this on success
                $('#output').html(''); // clear any previous results
                for (var i = 0; i<data[1].length; i++){
                    $('#output').append('<div class="jumbotron"><p><a href="' + data[3][i] + '">' + data[1][i] + '</a></p><p>' + data[2][i] + '</p></div>');
                }
                
            }
            
        });
    });
    
});