// JavaScript
document.body.addEventListener( 'keyup', function (e) {
  if ( e.keyCode == 13 ) {
    // Simulate clicking on the submit button.
//     triggerEvent( submitButton, 'click' );
    send();
  }
});

var conversation = document.getElementsByClassName("conversation");
var btn = document.getElementsByClassName("btn");
var div;
var name;
var problem;
var answer;
var askedForName = true;
var askedForAge = false;
var msg;
var chicken = [
    "<img src='https://www.sassyhongkong.com/wp-content/uploads/2015/03/wings-flaming-frango.jpg' width='50%' height='50%'/> <br> Dish Name: Piri Piri Chicken. Restaurant Name: Flaming Frango <br> Around $155 HKD for a person's meal <br> 55 G/F, 55 Elgin Street <br> Type chicken to retry.",
  	"<img src='https://coconuts.co/wp-content/uploads/2016/11/rsz_jinjuu2.jpg' /> <br> Dish Name: JinJuu's signature Korean fried chicken. Restaurant Name: Jinjuu. <br> $125 HKD for Signature Fried Chicken with sauce. <br> UG, California Tower, 32 D'Aguilar Street, Central <br> Type chicken to retry.",
  	"<img src='https://coconuts.co/wp-content/uploads/2016/11/rsz_fried_chicken_morsel_-_small_size_hkd68.jpg' /> <br> Dish Name: Fried Chicken Morsels. Restaurant Name: Boomshack. <br> $100 HKD for half chicken or $180 HKD for whole chicken. <br> Shop B, G/F, Wo On Building, No.8-12 Wo On Lane, Central, Hong Kong, China <br> Type chicken to retry."
];

var pizza = ["<img src='https://thehkhub.com/wp-content/uploads/2017/04/Ciao-Chow_Pizza-Margherita-704x470.jpg' /> <br> Dish Name: Margherita Pizza. Restaurant Name: Ciao Chow. <br> $98 HKD. <br> Shop UG-19 Festival Walk. <br> Type pizza to retry.",
             "<img src='https://thehkhub.com/wp-content/uploads/2017/04/208_Pizza_Calabrese-704x469.jpg' /> <br> Dish Name: Pizza Calabrese. Restaurant Name: 208 Duecuento Otto. <br> $208 for one pizza and 2 drinks. <br> 208 Hollywood Road, Sheung Wan <br> Type pizza to retry.",
             "<img src='https://thehkhub.com/wp-content/uploads/2017/04/The-Godfather-at-Paisanos.jpg' /> <br> Dish Name: The Godfather. Restaurant Name: Paisano's Pizzeria. <br> $30 HKD for 12 inches Peperoni Pizza Slice. <br> Locations throughout Hong Kong include Sai Kung, Discovery Bay, Central, Stanley, Wan Chai, TST, and Mong Kok <br> Type pizza to retry."
];

var burger = ["<img src='http://static1.squarespace.com/static/57455bd8d210b81c623fdd0c/5821956bbe6594286f6c84f5/5a793526c83025531dba1fad/1517893006960/best-burgers-Quarter-Master.jpg?format=1000w' /> <br> Dish Name: Classic Burger. Restaurant Name: Quarter Master. <br> $90 HKD <br> 1 Second Street, Sai Ying Pun, Hong Kong <br> Type burger to retry.",
             "<img src='https://www.sassyhongkong.com/wp-content/uploads/2016/09/best-burgers-tai-hang-bar-grill.jpg' /> <br> Dish Name: El Loco Burger. Restaurant Name: Tai Hang Bar & Grill. <br> $180 HKD. <br> G/F, Intelligent Court, 38 Tung Lo Wan Road, Tai Hang <br> Type burger to retry.",
             "<img src='https://images.scrippsnetworks.com/up/tp/Scripps_-_Food_Category_Prod/951/415/0246625_16x9.jpg' /> <br> Dish Name: Peanut Butter & Jam Burger. Restaurant Name: The Big Bite. <br> $100 HKD. <br> Shop 4B, G/F Kar Fu Bldg, 196-202 Java Rd <br> Type burger to retry."];

var vegetarian = ["<img src='https://res.cloudinary.com/hio22hxcn/image/upload/v1486975749/wconyxlog1hw05nnchrj.jpg' /> <br> Dish Name: Tofu Dumplings. Restaurant Name: Kung Tak Lam Shanghai Vegetarian Cuisine. <br> $60 HKD. <br> 10/F, World Trade Centre, 280 Gloucester Road, Causeway Bay <br> Type vegetarian to retry.",
                 "<img src='https://res.cloudinary.com/hio22hxcn/image/upload/v1443768197/uihe6lxdmi5rwgbdyp3u.jpg' /> <br> Dish Name: There is no dish XD. Restaurant Name: Ahisma Buffet! <br> $68 HKD per person. <br> Shop B, G/F, Wah Hai Mansion, 10-16 Fort Street. North Point <br> Type vegetarian to retry.",
                 "<img src='https://res.cloudinary.com/hio22hxcn/image/upload/v1437104356/iu4dfiqqgtiqtyzrfvg2.jpg' /> <br> Dish Name: Vushi (vegan sushi). Restaurant Name: Mana! Fast Slow Food. <br> $60 HKD <br> Type vegetarian to retry. "];

function getRandomChicken() {
    var randomChicken = 
        chicken[Math.floor(Math.random() * chicken.length)];
    chicken.splice(chicken.indexOf(randomChicken), 1);
  	if(!null) {
      return randomChicken;
    }else {return "Sorry, try another category, we BEEP don't have any BOOP more options for chicken😫😡. ";}
}

function getRandomPizza() {
    var randomPizza = 
        pizza[Math.floor(Math.random() * pizza.length)];
    pizza.splice(pizza.indexOf(randomPizza), 1);
  	if(randomPizza !== undefined ) {
      return randomPizza;
    }else {return "Sorry, try another category, we BEEP don't have any BOOP more options for pizza☹️👿. ";}
}

function getRandomBurger() {
    var randomBurger = 
        burger[Math.floor(Math.random() * burger.length)];
    burger.splice(burger.indexOf(randomBurger), 1);
  	if(randomBurger !== undefined) {
      return randomBurger;
    }else {return "Sorry, try another category, we BEEP don't have any BOOP more options for burgers😥👺. ";}
}

function getRandomVegetarian() {
    var randomVegetarian = 
        vegetarian[Math.floor(Math.random() * vegetarian.length)];
    vegetarian.splice(vegetarian.indexOf(randomVegetarian), 1);
  	if(!null) {
      return randomVegetarian;
    }else {return "Sorry, try another category, we BEEP don't have any BOOP more options for vegetarian meals. ";}
}

function autoscroll() {
    var elem = document.getElementsByClassName('conversation');
    elem[0].scrollTop = elem[0].scrollHeight;
}

function yourMessage() {
    div = document.createElement("DIV");
    div.setAttribute("class", "balloon you");
    div.innerHTML = "<span class='userName'>You</span><br/>" + userInput.value;
    conversation[0].appendChild(div);

    return userInput.value;
}

function botMessage(str) {
    div = document.createElement("DIV");
    div.setAttribute("class", "balloon him");
    div.innerHTML = "<span class='botName'>KFCbot</span><br/>" + str;
    conversation[0].appendChild(div);
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function send() {
    
    var message = yourMessage().toLowerCase();
    userInput.value = "";
    if (askedForName === true) {
        name = message;
        name = toTitleCase(name);
        console.log(name);
        botMessage("Hello " + name + " :D, would you like to eat chicken, pizza, burgers, or vegetarian?");
        askedForName = false;
    }

    //if statements here!
    else if (message.includes('chicken')) {
        botMessage(getRandomChicken());
    } else if (message.includes('pizza')) {
        botMessage(getRandomPizza());
    } else if (message.includes('burger')) {
      	botMessage(getRandomBurger());
    } else if (message.includes('vegetarian')) {
      botMessage(getRandomVegetarian());
    }
  	  else if (
        botMessage("What do you mean? ")
    );
    autoscroll();
}
botMessage("Hello, welcome to KuickFoodChatbot, quick question, what's your name?");