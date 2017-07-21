$(function(){

  $('#category').on('change', function(){
    $('.articles-list').empty();
    $('.main-nav').css({'height':'auto', 'justify-content':'flex-start'});
    $('.articles').css('display', 'flex');
    $('.loader').css('display', 'block');

    var input = $('#category').val();

    var geturl = 'https://api.nytimes.com/svc/topstories/v2/' + input + '.json';
    geturl += '?' + $.param({
      'api-key': '54d43868054141fc8972cfb3facb34c3'
    });
    $.ajax({
      url: geturl,
      method: 'GET',
    }).done(function(data) {
       function hasImage(entry){
         return entry.multimedia.length
       }
       var newArray = data.results.filter(hasImage)
       newArray.splice(12);

       $.each(newArray, function(key, value){
        var imgurl = value.multimedia[4].url;
        var txt = value['abstract'];
        var link = value.url;
        var listitem = '<li class="article-item" style="background-image:url('+imgurl+')"><a href="'+link+'" target="blank"><div class="txt"><p>'+txt+'</p></div></a></li>';
        console.log(listitem);
        console.log(imgurl);


        $('.articles-list').append(listitem);
        $('.loader').hide();
        
        

      });
    }).fail(function(err) {
      throw err;
    });

  });
});