//////////////////////////////////////////////////////////////////
//
// Fortune Cookie Generator
//
//////////////////////////////////////////

 var generateFortuneCookie = function () {
    // This is where your code for the Fortune Cookie generator goes.
    // You will use the fortunesList variable defined lower in this file
    // to supply your fortune cookies with text.

    // TODO: Grab the paragraph with the ID
    // `fortune-cookie-text` to be able to insert text into that element.
    var fortuneCookieText = document.getElementById("fortune-cookie-text");


    // TODO: Update the Previous Fortunes list with the current `innerText`
    // value of `#fortune-cookie-text`. Follow these steps:
        // 1. Create a new `li` element with the `document.createElement()` method.
        var myLi = document.createElement("li");
        // 2. Set the `innerText` of that element equal to the `innerText` of
        //    the `#fortune-cookie-text` element.
        myLi.innerHTML = fortuneCookieText.innerHTML;
        // 3. Select the `#previous-fortunes-container` container and use
        //    `appendChild()` to append the new `li` element you created above.
   var previousFortunesContainer = document.getElementById("previous-fortunes-container");
        // 4. You should see the previous fortune cookie saying show up in the list.
      previousFortunesContainer.appendChild(myLi);

    // TODO: Select a new (random) fortune cookie saying from the data stored in the
    // `fortunesList` variable. (HINT: You will use `Math.floor()` and
    // `Math.random()` to accomplish this.) Use this data to update the
    // `innerText` of the `#fortune-cookie-text` element.
var randomNumber = Math.floor(Math.random()*fortunesList.length);
var newSaying = fortunesList[randomNumber];
   fortuneCookieText.innerHTML = newSaying;

 };

 // The following data list is provided for you to use in your code.
var fortunesList = [
  "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship. Buddha",
  "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path. Buddha",
  "Three things cannot be long hidden: the sun, the moon, and the truth. Buddha",
  "The mind is everything. What you think you become. Buddha",
  "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared. Buddha",
  "You will not be punished for your anger, you will be punished by your anger. Buddha",
  "What we think, we become. Buddha",
  "There are only two mistakes one can make along the road to truth; not going all the way, and not starting. Buddha",
  "Better than a thousand hollow words, is one word that brings peace. Buddha",
  "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves. Buddha",
  "It is better to conquer yourself than to win a thousand battles. Then the victory is yours. It cannot be taken from you, not by angels or by demons, heaven or hell. Buddha",
  "Whatever words we utter should be chosen with care for people will hear them and be influenced by them for good or ill. Buddha",
  "You, yourself, as much as anybody in the entire universe, deserve your love and affection. Buddha",
  "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind. Buddha",
  "If you are depressed you are living in the past.  If you are anxious you are living in the future.  If you are at peace, you are living in the present. Lao Tzu",
  "Holding on to anger is like drinking poison and expecting the other person to die. Buddha",
  "Each morning we are born again.  What we do today is what matters most. Buddha",
  "The root of suffering is attachment. Buddha",
  "If you truly loved yourself, you could never hurt another. Buddah",
  "Every thought you produce, anything you say, any action you do, it bears your signature. Thich Nhat Hanh",
  "We have more possibilities available in each moment than we realize. Thich Nhat Hanh",
  "You must love in such a way that the person you love feels free. Thich Nhat Hanh",
  "If we believe that tomorrow will be better, we can bear a hardship today. Thich Nhat Hanh",
  "Walk as if you are kissing the earth with your feet. Thich Nhat Hanh",
  "When I let go of what I am, I may become what I might be. Lao Tzu",
  "In the end, only three things matter: how you loved, how much you loved, how gently you lived, and how gracefully you let go of the things not meant for you.  Buddha",
    // "Fortune favors the brave."
  ]
