//Dependencies
console.log('the bot is starting!');
var twit = require('twit')
var config = require('./config');
var Twitter = new twit(config);

var retweet = function(){
    var params = {
        q: '時津風 OR ときつかぜ',
        result_type: 'popular'
    }
    Twitter.get('search/tweets',params,function (err,data) {
        // if there are no errors
        if(!err){
            // grab ID of retweet
            var retweetId = data.statuses[0].id_str;
            // tell twitter to retweet
            Twitter.post('statuses/retweet/:id',
                {
                    id: retweetId
                },
                function(err, response){
                    if (response) {
                        console.log('Retweeted!!!');
                    }
                    // if there was an error while tweeting
                    if (err) {
                        console.log('Error tweeting');
                    }
            }
            );
        }
        // if unable to Search a tweet
        else{
            console.log('Error searching');
        }
    }
    );
}

retweet();
// retweet every 3 minutes
setInterval(retweet, 180000);