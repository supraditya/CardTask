
function loadAPI()
{
    // $("#result").load("https://picsum.photos/id/0/info");
    // alert("Page has been loaded");
    var url = "https://picsum.photos/id/0/info";
    $.ajax
    ({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function(data)
        {
            var result = data;
            console.log(result);
            // JSON object fetched in var data
            var title1=document.getElementById('title1');
            title1.innerHTML=result.author;
            var url=result.url;
            console.log(url);
        }
    });
    
}