var Alexa = require('alexa-sdk');
var https = require('https');

var QuoteDataObj = {
                    Lincoln: [
                        "Government of the people, by the people, for the people, shall not perish from the Earth.",
                        "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
                        "Whatever you are, be a good one.",
                        "America will never be destroyed from the outside. If we falter and lose our freedoms, it will be because we destroyed ourselves.",
                        "No man has a good enough memory to be a successful liar.",
                        "You cannot escape the responsibility of tomorrow by evading it today.",
                        "Be sure you put your feet in the right place, then stand firm.",
                        "I remember my mother's prayers and they have always followed me. They have clung to me all my life.",
                        "Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing.",
                        "The best way to get a bad law repealed is to enforce it strictly.",
                        "The highest art is always the most religious, and the greatest artist is always a devout person.",
                        "Don't worry when you are not recognized, but strive to be worthy of recognition.",
                        "You can fool all the people some of the time, and some of the people all the time, but you cannot fool all the people all the time.",
                        "Do I not destroy my enemies when I make them my friends?",
                        "I have always found that mercy bears richer fruits than strict justice.",
                        "Most folks are as happy as they make up their minds to be.",
                        "A house divided against itself cannot stand.",
                        "When I do good I feel good, when I do bad I feel bad, and that's my religion."
                        "I am not bound to win, but I am bound to be true. I am not bound to succeed, but I am bound to live by the light that I have. I must stand with anybody that stands right, and stand with him while he is right, and part with him when he goes wrong.",
                        "I do the very best I know how - the very best I can; and I mean to keep on doing so until the end."
                        ],
                    Einstein: [
                        "Imagination is more important than knowledge.",
                        "If the facts don't fit the theory, change the facts.",
                        "Life is like riding a bicycle. To keep your balance you must keep moving.",
                        "A teacher can never truly teach unless he is still learning himself. ",
                        "A lamp can never light another lamp unless it continues to burn its own flame. The teacher who has come to the end of his subject, who has no living traffic with his knowledge but merely repeats his lesson to his students, can only load their minds, he cannot quicken them.",
                        "You can't cross the sea merely by standing and staring at the water.",
                        "Where the mind is without fear and the head is held high Where knowledge is free.",
                        "It is very simple to be happy, but it is very difficult to be simple.",
                        "Go not to the temple to put flowers upon the feet of God, first fill your own house with the fragrance of love. Go not to the temple to light candles before the altar of God, first remove the darkness of sin from your heart. Go not to the temple to bow down your head in prayer, first learn to bow in humility before your fellow men. Go not to the temple to pray on bended knees, first bend down to lift someone who is down trodden. Go not to the temple to ask for forgiveness for your sins, first forgive from your heart those who have sinned against you.",
                        "Reach high, for stars lie hidden in you. Dream deep, for every dream precedes the goal.",
                        "The one who plants trees, knowing that he will never sit in their shade, has at least started to understand the meaning of life.",
                        "Everything comes to us that belongs to us if we create the capacity to receive it.",
                        "A lamp can only light another lamp when it continues to burn in its own flame.",
                        "If you cry because the sun has gone out of your life, your tears will prevent you from seeing the stars.",
                        "... let us unite, not in spite of our differences, but through them. For differences can never be wiped away, and life would be so much the poorer without them. Let all human races keep their own personalities, and yet come together, not in a uniformity that is dead, but in a unity that is living.",
                        "I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy.",
                        "The highest education is that which does not merely give us information but makes our life in harmony with all existence.",
                        "The small wisdom is like water in a glass: clear, transparent, pure. The great wisdom is like the water in the sea: dark, mysterious, impenetrable.",
                        "The most important lesson that man can learn from life, is not that there is pain in this world, but that it is possible for him to transmute it into joy.",
                        "The roots below the earth claim no rewards for making the branches fruitful.",
                        "Great suffering brings with it the power of great endurance. When sorrow is deepest all the forces of patience and courage are banded together to do their duty. So while we are cowards before petty troubles, great sorrows make us brave by rousing our truer manhood.",
                        "If I can't make it through one door, I'll go through another door- or i'll make a door. Something terrific will come no matter how dark the present.",
                        "Don't limit a child to your own learning, for he was born in another time.",
                        "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",
                        "Man is worse than an animal when he is an animal.",
                        "The main object of teaching is not to give explanations, but to knock at the doors of the mind.",
                        "We are hidden in ourselves, like a truth hidden in isolated facts. When we know that this One in us is One in all, then our truth is revealed.",
                        "The biggest changes in a women's nature are brought by love; in man, by ambition",
                        "The greatest distance in this World is not that between living and death, it is when I am just before you, and you don't know that I Love You.",
                        "Love is the only reality and it is not a mere sentiment. It is the ultimate truth that lies at the heart of creation.",
                        "Life itself is a strange mixture. We have to take it as it is, try to understand it, and then to better it.",
                        "Let us not pray to be sheltered from dangers but to be fearless when facing them.",
                        "Everything comes to us that belongs to us if we create the capacity to receive it.",
                        "Life is perpetually creative because it contains in itself that surplus which ever overflows the boundaries of the immediate time and space, restlessly pursuing its adventure of expression in the varied forms of self-realization.",
                        "The highest education is that which does not merely give us information but makes our life in harmony with all existence.",
                        "Every child comes with the message that God is not yet discouraged of man."
                        ],
                 Gibran: [
                      "You talk when you cease to be at peace with your thoughts.",
                      "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.",
                      "One day you will ask me which is more important? My life or yours? I will say mine and you will walk away not knowing that you are my life.",
                      "If you love somebody, let them go, for if they return, they were always yours. If they don’t, they never were.",
                      "Beauty is not in the face; beauty is a light in the heart.",
                      "Your children are not your children. They are the sons and daughters of Life’s longing for itself.",
                      "I have learned silence from the talkative, toleration from the intolerant, and kindness from the unkind; yet strange, I am ungrateful to these teachers.",
                      "Tenderness and kindness are not signs of weakness and despair, but manifestations of strength and resolution.",
                      "We are all like the bright moon, we still have our darker side.",
                      "No human relation gives one possession in another—every two souls are absolutely different. In friendship or in love, the two side by side raise hands together to find what one cannot reach alone.",
                      "It takes a minute to have a crush on someone, an hour to like someone, and a day to love someone… but it takes a lifetime to forget someone.",
                      "You give but little when you give of your possessions. It is when you give of yourself that you truly give.",
                      "Generosity is giving more than you can, and pride is taking less than you need.",
                      "To belittle, you have to be little.",
                      "We choose our joys and sorrows long before we experience them.",
                      "You pray in your distress and in your need; would that you might pray also in the fullness of your joy and in your days of abundance.",
                      "The smallest act of kindness is worth more than the greatest intention.",
                      "Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.",
                      "You may forget with whom you laughed, but you will never forget with whom you wept.",
                      "To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to.",
                      "Love knows not its own depth until the hour of separation.",
                      "The appearance of things changes according to the emotions; and thus we see magic and beauty in them, while the magic and beauty are really in ourselves.",
                      "Your living is determined not so much by what life brings to you as by the attitude you bring to life; not so much by what happens to you as by the way your mind looks at what happens.",
                      "They deem me mad because I will not sell my days for gold; and I deem them mad because they think my days have a price.",
                      "Trust in dreams, for in them is the hidden gate to eternity.",
                      "When you reach the end of what you should know, you will be at the beginning of what you should sense."
                      ],
                  Tagore: [
                      "Few are those who see with their own eyes and feel with their own hearts.",
                      "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
                      "Unthinking respect for authority is the greatest enemy of truth.",
                      "Try not to become a man of success, but rather try to become a man of value.",
                      "I am by heritage a Jew, by citizenship a Swiss, and by makeup a human being, and only a human being, without any special attachment to any state or national entity whatsoever.",
                      "Great spirits have always encountered violent opposition from mediocre minds.",
                      "Not everything that can be counted counts, and not everything that counts can be counted.",
                      "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
                      "Look deep into nature, and then you will understand everything better.",
                      "All religions, arts and sciences are branches of the same tree.",
                      "Any intelligent fool can make things bigger and more complex… It takes a touch of genius – and a lot of courage to move in the opposite direction.",
                      "A man should look for what is, and not for what he thinks should be.",
                      "In the middle of difficulty lies opportunity.",
                      "A person who never made a mistake never tried anything new.",
                      "Education is what remains after one has forgotten what one has learned in school.",
                      "A table, a chair, a bowl of fruit and a violin; what else does a man need to be happy?",
                      "A human being is part of a whole called by us the universe.",
                      "The important thing is to not stop questioning. Curiosity has its own reason for existing.",
                      "A question that sometimes drives me hazy: am I or are the others crazy?",
                      "Anger dwells only in the bosom of fools.",
                      "Life is like riding a bicycle. To keep your balance you must keep moving.",
                      "Concern for man and his fate must always form the chief interest of all technical endeavors. Never forget this in the midst of your diagrams and equations.",
                      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
                      "All that is valuable in human society depends upon the opportunity for development accorded the individual.",
                      "Once you stop learning, you start dying.",
                      "It’s not that I’m so smart, it’s just that I stay with problems longer.",
                      "It has become appallingly obvious that our technology has exceeded our humanity.",
                      "Only one who devotes himself to a cause with his whole strength and soul can be a true master. For this reason mastery demands all of a person.",
                      "He who can no longer pause to wonder and stand rapt in awe, is as good as dead; his eyes are closed.",
                      "I have no special talent. I am only passionately curious.",
                      "Weak people revenge. Strong people forgive. Intelligent people ignore.",
                      "A ship is always safe at shore but that is not what it’s built for.",
                      "What is right is not always popular, and what is popular is not always right.",
                      "Education is not the learning of facts, it’s rather the training of the mind to think.",
                      "I speak to everyone in the same way, whether he is the garbage man or the president of the university.",
                      "I am thankful for all of those who said NO to me. Its because of them I’m doing it myself.",
                      "Never give up on what you really want to do. The person with big dreams is more powerful than the one with all the facts.",
                      "Common sense is the collection of prejudices acquired by age eighteen."
                      ]
};

// Bookmarked Places and their coordinates
// Future upgrade - make them come from a database such as DynamoDB
// NOTE: All entries to be in lower case, and no space between coordinates
var BookmarkedObj = {
    "my office": "40.819940,-73.950431",
    "my in laws": "40.667101,-73.949807",
    "the airport": "40.641360,-73.778150"
};

// User and Google API configuration related variables
// 1. Setting Coordinates for your home / origin
var user_origin = "40.745908,-73.946989";
var user_destination = "XXXXXX"; // keep it as XXXXXX as it will be replaced later

// 2. Google Maps Directions API Related Data
// 2a. API Key - Unique for every user
var google_api_key = "AIzaSyBsB8q2NOK9DCuwIsOOSkqwD6VnRpP83oI"; // CHANGE IT WITH YOUR API KEY

// 2b. Setting the configurable options for the API
var google_api_traffic_model = "best_guess"; // it can be optimistic & pessimistic too
var google_api_departure_time = "now"; // now will mean the current time

// 2c. Deconstructing the API URL
// https://maps.googleapis.com/maps/api/directions/json?origin=40.745908,-73.946989&traffic_model=best_guess&key=AIzaSyBsB8q2NOK9DCuwIs00SkqwD6VnRpP83oI&departure_time=now
var google_api_host = "maps.googleapis.com";
var google_api_path = "/maps/api/directions/json?origin=" + user_origin + "&destination=" + user_destination + "&key=" + google_api_key + "&traffic_model=" + google_api_traffic_model + "&departure_time=" + google_api_departure_time;

// a separate function that takes out the quote and returns the author and quote
function getQuoteFunction(author) {
    
    console.log("Getting into getQuoteFunction");
    
    // Get random author if author is not defined
    if (author === undefined) {
        
        var totalauthors = Object.keys(QuoteDataObj).length;
        var rand = Math.floor(Math.random() * totalauthors);
        
        // random author name
        author = Object.keys(QuoteDataObj)[rand];
    }
    
    // check the author if it exists, and have a single author name
    switch (author) {
        case 'Lincoln': author = 'Lincoln'; break;
        case 'Abraham Lincoln': author = 'Lincoln'; break;
        case 'Abe Lincoln': author = 'Lincoln'; break;
        case 'Einstein': author = 'Einstein'; break;
        case 'Albert Einstein': author = 'Einstein'; break;
        default: author = "Unknown";
    }
    
    // if author is unknown, return false
    if (author == "Unknown") {
        console.log("Author not found. Return false");
        return false;
    }
    
    // Get total quotations for the author from the QuoteDataObj object
    var totalquotations = QuoteDataObj[author].length;
    
    // Select a random quotation
    var randquote = Math.floor(Math.random() * totalquotations);
    var quote = QuoteDataObj[author][randquote];
    
    console.log("Return author and quote");
    
    // return both the author name and quote as an array
    return [author, quote];
}

// get data from a URL asynchronously.
// Once you get the data, call the callback method with the response
function getData(options, callback) {
    
    var text = "";
    
    https.get(options, function(res) {
        res.on("data", function(chunk) {
            text += chunk.toString('utf-8');
        });
        
        res.on('end', function() {
            return callback(text);
        });
    }).on('error', function(e) {
        text = 'error' + e.message;
        console.error("Got error: " + e.message);
        return callback('ERROR');
    });
}

var handlers = {
    
    // When launched without any action
    'LaunchRequest': function() {
        
        console.log("Launch Request Handler Called");
        
        // Forward it to Introduction Handler
        this.emit('Introduction');
    },
    
    // can go under LaunchRequest also, but separating it out, just to look cool
    'Introduction': function() {
        
        console.log("Introduction Handler called.");
        
        // The user opened the skill without providing any action or intent
        var speechOutput = "Hi, I am Eva, your cloud based personal assistant. You can ask me to read quotes from Einstein or Lincoln, or ask me to get route information.";
        
        // In case the user did not provide any input
        var repromptText = "Sorry, I did not receive any input. Do you need help?";

        // Setting the attributes property for data persistence, especially when using the :ask action
        // If the user says Yes to the repromptText question, the script will know what to do next
        this.attributes['type'] = "help";
        
        // Just speak it out through an Alexa Device
        this.emit(':ask', speechOutput, repromptText);
    },
    
    // Defined Intents linked with Skill Start Here
    
    // Intent - When a user asks for a random quote
    'RandomQuote': function () {
        
        console.log("RandomQuote Intent Handler Called");
        
        // Call the getQuoteFunction() to get an array of author and quotation
        var getQuote = getQuoteFunction();
        var author = getQuote[0];
        var quote = getQuote[1];
        
        // The cardTitle & cardContent is important for Alexa App and Echo Show Devices
        var cardTitle = "Quotation from " + author;
        var cardContent = quote;
        var speechOutput = author + " said, " + quote;
        
        // Speak out the output along with card information
        this.emit(':tellWithCard', speechOutput, cardTitle, cardContent);
        
    },
    
    // Intent - When a user asks for quote from a specific author
    'AuthorQuote': function () {
        
        console.log("Author Quote Intent Handler Called.");
        
        // Get the author name from the Slot Value specific to this intent
        var author = this.event.request.intent.slots.author.value;
        var getQuote = getQuoteFunction(author);
        
        // if getQuoteFunction wasn't able to detect the author, then send to Unhandled Intent
        if (!getQuote) {
            this.emit('Unhandled');
        }
        
        // Override the author name with the one received from the getQuoteFunction
        author = getQuote[0];
        var quote = getQuote[1];
        
        var cardTitle = "Quotation from " + author;
        var cardContent = quote;
        var speechOutput = author + " said, " + quote;
        
        this.emit(':tellWithCard', speechOutput, cardTitle, cardContent);
    },
    
    'GetBookmarks': function() {
        
        // Get the list of Keys for BookmarkedObj
        var keys = Object.keys(BookmarkedObj);
        var destinations = "";
        
        // Now iterate through the object and create a statement of the places
        for (i = 0; i < keys.length; i++) {
            
            // if it is the last destination, add the keyword "and"
            if (i == (keys.length -1)) {
                destinations += "and ";
            }
            
            // add the destinations and append comma with each to make it a proper speech
            destinations += keys[i] + ", ";
        }
        
        var speechOutput = "Your bookmarked places are " + destinations;
        
        this.emit(":tell", speechOutput);
    },
    
        // If the user asks for help
    'AMAZON.HelpIntent': function () {
      
      console.log("Help Intent Handler called");
      
      // Setting the attributes property for data persistence, especially when using the :ask action
      this.attributes['type'] = "bookmarks";
      
      var speechOutput = "I have the ability to read out quotes and get route information. To read out quotes, you can try saying, ask Eva for a random quote, or ask Eva for a quote from Einstein. To get route information you can try saying, ask Eva, how much time will it take you to reach office? I also have a few places bookmarked for easy access. Do you want me to read them out to you?";
      var repromptText = "Sorry, I did not receive any input. Do you want me to read out your bookmarked destinations?"
      
      this.emit(":ask", speechOutput, repromptText);
    },

    // If the user says Yes to a question
    'AMAZON.YesIntent': function () {
        
        console.log("Yes Intent Handler Called");
        
        if (this.attributes['type']) {
            // get the type of request from attributes property
            var reqtype = this.attributes['type'];
            var speechOutput = "Sorry, I do not understand how to process that.";
            
            switch (reqtype) {
                case 'bookmarks': this.emit('GetBookmarks'); break;
                case 'help': this.emit('AMAZON.HelpIntent'); break;
                default: this.emit(":tell", speechOutput);
            }
        } else {
            var speechOutput = "Sorry, I am not sure what you are saying Yes for.";
            this.emit(":tell", speechOutput);
        }
    },
    
    // If the user says No to a question
    'AMAZON.NoIntent': function () {
        
        console.log("No Intent Handler Called");
        
    },

    // Getting the route information
    'GetRoute': function () {
      
      // lot the slot value
      console.log("Slots -> " + JSON.stringify(this.event.request.intent.slots));
      
      // destination address - can be the bookmark's coordinates, or a postal address
      var destination = "";
      
      // what alexa should speak out when a destination is provided
      var speakdestination = "";
      
      // SUPER IMPORTANT
      // The "this" object is assigned to "self"
      // It will be used when the getData function is called
      var self = this;
      
      var slotvalue = "";
      // First check if the user requested a bookmarked place
      if (this.event.request.intent.slots.bookmarks.value) {
          
          slotvalue = this.event.request.intent.slots.bookmarks.value;
          console.log("Bookmarks slot was detected with value " + slotvalue);
          
      }
      
      // Otherwise consider the destination processed by AMAZON.PostalAddress slot type
      else if (this.event.request.intent.slots.postaladdress.value) {
          
          slotvalue = this.event.request.intent.slots.postaladdress.value;
          console.log("PostalAddress slot was detected with value " + slotvalue);
          
      }
      
      slotvalue = slotvalue.toLowerCase();

      // First try to get the value from bookmarks
      if (BookmarkedObj[slotvalue]) {
          destination = BookmarkedObj[slotvalue];
          speakdestination = slotvalue.replace("my ", "your ");
      } else {
          destination = slotvalue;
          speakdestination = destination;
      }
      
      // Now check, if you got the destination. If you didn't, then ask for it
      if (destination === "") {
          var speechOutput = "Where would you like to go today?";
          var repromptText = "Sorry, I did not receive any input. Do you want me to read out your bookmarked destinations?";
          
          // based on repromptText, setting the attribute property's type as bookmarks so that YesIntent can manage it
          this.attributes['type'] = "bookmarks";
          
          this.emit(":ask", speechOutput, repromptText);
          return;
      }
      
      // Get the final google API path
      // replacing XXX (user_destination variable) with a url encoded version of the destination
      var final_api_path = google_api_path.replace(user_destination, encodeURIComponent(destination));
      
      // parameters to pass to the https.get method
      var options = {
          host: google_api_host,
          // in path below, user_destination variable XXXXXX was replaced with a url encoded actual destination
          path: final_api_path,
          method:'GET'
      };
      
      // Log the complete Google URL for your review
      console.log("Google API Path -> https://" + google_api_host + final_api_path);
      
      // call the getData function to get the URL, asynchronously
      // Note that the callback parameter in the getData function is an anonymous function which processes jsondata
      getData(options, function (jsondata) {
          
          if (jsondata == 'ERROR') {
              var speechOutput = "Sorry, an error occurred getting data from Google. Please try again.";
              // call "self" instead of "this" because "this" will have a different value within this function
              self.emit(":tell", speechOutput);
          }
          else {
              
              var routeinfo = JSON.parse(jsondata);
              
              // 1. Check the status first
              var status = routeinfo.status;
              
              // 2. If status is OK, then read out a nice description
              if (status == "OK") {
                  
                  // Get the duration in traffic from the json array
                  var duration = routeinfo.routes[0].legs[0].duration_in_traffic.text;
                  // Google API returns "min" in response. replace the "min" with "minute"
                  duration = duration.replace("min","minute");
                  
                  // Get the value in seconds too so that you can do the time calculation
                  var seconds = routeinfo.routes[0].legs[0].duration_in_traffic.value;
                  
                  // Initialise a new date, add 300 seconds (5 minutes) to it,
                  // to compensate for the delay it will take to get to your vehicle.
                  // Then get the hour and the minute only, and not the complete date.
                  var nd = new Date();
                  var ld = new Date(nd.getTime() + ((seconds + 300) * 1000));
                  var timeinhhmm = ld.toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit'});
                  //var timeinhhmm = ld.toLocaleTimeString("en-US", {timeZone: 'Asia/Kolkata', hour:'2-digit', minute:'2-digit'});
                  // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
                  
                  var speechOutput = "It will take you " + duration + " to reach " + speakdestination + ". You will reach around <say-as interpret-as=\"time\">" + timeinhhmm + "</say-as> if you leave within 5 minutes.";
                  self.emit(":tell", speechOutput);
                  
              } else {
                  
                  // whether the status is REQUEST_DENIED or ZERO_RESULTS, a common message is shown
                  var speechOutput = "Sorry, I was not able to get traffic information for your destination " + speakdestination + ". Please try a different destination.";
                  self.emit(":tell", speechOutput);
                  
              }
          }
      });
      

    },
    
    
    // Intent - Unhandled. It is not a built-in intent.
    'Unhandled': function () {
        
        console.log("Unhandled Intent Handler Called.");
        
        this.emit(':tell', "Sorry, I am unable to understand. For help, ask Eva, and say you need Help.");
    }
};

// export the handler for node.js
exports.handler = function(event, context, callback) {
    
    // alexa object via the alexa-sdk
    var alexa = Alexa.handler(event, context, callback);
    
    // register & execute all the handlers/intents that are created
    alexa.registerHandlers(handlers);
    alexa.execute();
};
