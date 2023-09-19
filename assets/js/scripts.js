var quote = $('.stuff')
var muscle = 'biceps'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
    headers:{'X-Api-Key': 'bQQv3qWq5kHalNjh19VAPQ==OdFpPSD3HrbB6vz5'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result[0]);
        var count = Math.floor(Math.random()* 10);
        console.log(count);
        quote.append('<p>' + result[count].name+'</p>');
        quote.append('<h2>' + result[count].difficulty + '</h2>');
        quote.append('<p>' + result[count].instructions + '</p>');
        
    },
    });
// $.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps')
//     .then(function(data){
//         var hi = data.content;
//         console.log(data)

//         quote.append(hi)
//     });