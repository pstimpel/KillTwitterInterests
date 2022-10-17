//go to the interests page in your settings at twitter.com
//open js console
//paste this in, and run
//found at https://www.neowin.net/guides/turn-off-topic-suggestions-and-interests-at-twitter-with-this-handy-script/
//
//
//if you cannot paste, try "allow paste" or "allow pasting" first - feckin' pseudo security https://stackoverflow.com/questions/26596858/how-to-disable-paste-protection-in-mozilla-firefox-developer-console

var timer=1000; document.querySelectorAll( "div > input[type='checkbox']:checked" ).forEach((interest) => { setTimeout( function(){interest.click(); interest.scrollIntoView()},timer ); timer+=2000; });

