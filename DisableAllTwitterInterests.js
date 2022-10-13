//go to the interests page in your settings at twitter.com
//open js console
//paste this in, and run
//found at https://www.neowin.net/guides/turn-off-topic-suggestions-and-interests-at-twitter-with-this-handy-script/
//
//
//if you cannot paste, try "allow paste" first - feckin' pseudo security

var timer=1000; document.querySelectorAll( "div > input[type='checkbox']:checked" ).forEach((interest) => { setTimeout( function(){interest.click(); interest.scrollIntoView()},timer ); timer+=2000; });

