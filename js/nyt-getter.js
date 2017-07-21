$(function(){

  $('#category').on('change', function(){
    $('.main-nav').css({'height':'100px', 'justify-content':'flex-start'});
    $('.logo').css('max-width', '12%');
    $('.loader').css('display', 'block');

    var input = $('#category').val();

    var url = 'https://api.nytimes.com/svc/topstories/v2/' + input + '.json';
    url += '?' + $.param({
      'api-key': '54d43868054141fc8972cfb3facb34c3'
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });

  });
});