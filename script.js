
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
            var title2=document.getElementById('title2');
            var title3=document.getElementById('title3');
            var title4=document.getElementById('title4');
            title1.innerHTML="By: "+result.author;
            title2.innerHTML="By: "+result.author;
            title3.innerHTML="By: "+result.author;
            title4.innerHTML="By: "+result.author;
            var dim1=document.getElementById('dim1');
            var dim2=document.getElementById('dim2');
            var dim3=document.getElementById('dim3');
            var dim4=document.getElementById('dim4');
            dim1.innerHTML=result.height+" x "+result.width;
            dim2.innerHTML=result.height+" x "+result.width;
            dim3.innerHTML=result.height+" x "+result.width;
            dim4.innerHTML=result.height+" x "+result.width;
            var url1=result.url;
            console.log(url1);
            var url2=result.download_url;
            $(".download").attr("href",url2);
            // $(".card-img-top").attr("src",url1);
             $("a").click(
                 function(e) {   
                     e.preventDefault();           
                     //open download link in new page
                     window.open( $(this).attr("href") );
                 }
             );
             $("#img1").attr("src",url2);
             $("#img2").attr("src",url2);
             $("#img3").attr("src",url2);
             $("#img4").attr("src",url2);

        }
    });
    
}