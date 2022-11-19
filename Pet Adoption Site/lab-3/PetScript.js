//JS code for the Pet Shop Site

//load event connects the functions of the buttons to the site
window.onload = function () {
    document.getElementById("categoryBtn").onclick = categoryChanged_Click;
    document.getElementById("submitBtn").onclick = dataEntered_Click;
    document.getElementById("submitAdoptionBtn").onclick = adoptionsEntered_Click;
}

//this function lets the user submit their data and it changes the adoption header to have their name
var dataEntered_Click = function () {

    var adoptionDiv = document.getElementById("adoptionsHead");

    var adopterName = document.getElementById("txtName").value;

    //makes sure that the user sumbitted a name
    if (adopterName !== "") {
        var newHeaderNode = document.createElement("h3");
        var textNode = document.createTextNode(adopterName + "'S ADOPTIONS");
        newHeaderNode.appendChild(textNode);
        newHeaderNode.style.color = "lightskyblue";
        newHeaderNode.style.fontSize = "20px";
        newHeaderNode.style.fontFamily = "Lucida Sans";
        newHeaderNode.style.backgroundColor = "darkgreen";
        newHeaderNode.style.textDecoration = "underline";

        adoptionDiv.removeChild(document.getElementById("adoptionHeader"));
        adoptionDiv.appendChild(newHeaderNode);
    }
}

//keeps track of the number of adoptions for each type of pet
var birdCount = 0;
var catCount = 0;
var dogCount = 0;

//user is notified about the number of adoptions they made when they are ready to submit
var adoptionsEntered_Click = function () {

    alert("Congrats! You've adopted " + birdCount + " birds, " + catCount + " cats, and "
        + dogCount + " dogs!");
}

//this function is basically the pet class, it creates pets given the information
function pet(imageURL, name, birthdate, age, description, availability) {
    this.imageURL = imageURL;
    this.name = name;
    this.birthdate = birthdate;
    this.age = age;
    this.description = description;
    this.availability = availability;
}

//this function creates an image node with the given image url
function createPetImg(imageURL) {
    var imageNode = document.createElement("img");
    imageNode.src = imageURL;
    imageNode.style.width = "100px";
    imageNode.style.height = "100px";
    imageNode.style.borderWidth = "2px";

    return imageNode;
}

//this function creates the text node with the given data
function createPetText(name, birthdate, age, description, availability) {

    var textNode = document.createTextNode(name + " - Birthday: " + birthdate +
        " - Age: " + age + " - " + description + " - Status: " + availability);

    return textNode;
}

//this function creates the adopt button for each pet
function createAdoptBtn(pet) {

    //button created here
    var btnNode = document.createElement("button");

    //sets the imageURL as the value so that the image can be stored later if the pet is adopted
    btnNode.value = pet.imageURL;

    //sets button text and size
    btnNode.innerText = "Adopt";
    btnNode.style.width = "100px";
    btnNode.style.height = "20px";
    btnNode.style.marginTop = "5px";

    return btnNode;
}

//this giant function changes the pets displayed depending on the category chosen when the button is clicked
var categoryChanged_Click = function () {

    //this stores the category that is chosen on the site
    var chosenCategory = document.getElementById("ddlPetCategories").value;

    //this stores the div that shows off the pets
    var displayNode = document.getElementById("petDisplay");

    //creates an array to store the birds
    var birdList = [];

    //if the bird category is chosen, then this will be executed
    if (chosenCategory == "Birds") {

        //empties out the entire div first
        displayNode.innerHTML = "";

        //all 10 brids are created here
        var bird1 = new pet("../images/birds/bird1.jpg", "Cheddar", "Nov 11", 11, "Cute yellow bird", "Available");
        birdList.push(bird1);

        var bird2 = new pet("../images/birds/bird2.jpg", "Cherry", "Nov 12", 11, "Cute red bird", "Available");
        birdList.push(bird2);

        var bird3 = new pet("../images/birds/bird3.jpg", "Sam", "Nov 13", 11, "Cute toucan", "Available");
        birdList.push(bird3);

        var bird4 = new pet("../images/birds/bird4.jpg", "Sprite", "April 12", 2, "Baby blue and green bird", "Available");
        birdList.push(bird4);

        var bird5 = new pet("../images/birds/bird5.jpg", "Harold", "June 15", 5, "Majestic Cuckatoo bird", "Available");
        birdList.push(bird5);

        var bird6 = new pet("../images/birds/bird6.jpg", "Dirt", "May 23", 5, "Cute brown bird", "Available");
        birdList.push(bird6);

        var bird7 = new pet("../images/birds/bird7.jpg", "Fireball", "Feb 22", 7, "Angry fiesty bird", "Available");
        birdList.push(bird7);

        var bird8 = new pet("../images/birds/bird8.jpg", "Infrared", "Sep 30", 9, "Cool, red and black bird", "Available");
        birdList.push(bird8);

        var bird9 = new pet("../images/birds/bird9.png", "Mordecai", "July 31", 10, "Beautiful blue bird", "Available");
        birdList.push(bird9);

        var bird10 = new pet("../images/birds/bird10.jpg", "Athena", "Aug 14", 20, "Large, aggressive owl", "Available");
        birdList.push(bird10);

        //loop here that goes through the array and creates divs for each bird
        for (var i = 0; i < birdList.length; i++) {

            //creates div node here and sets some style elements
            var divNode = document.createElement("div");
            divNode.id = birdList[i].imageURL;
            divNode.style.marginBottom = "10px";
            divNode.style.marginTop = "10px";
            divNode.style.paddingTop = "5px";
            divNode.style.paddingBottom = "5px";
            divNode.style.backgroundColor = "limegreen";

            //calls image function to create the image node
            var imageNode = createPetImg(birdList[i].imageURL);

            //creates text here with function
            var textNode = createPetText(birdList[i].name, birdList[i].birthdate, birdList[i].age,
                birdList[i].description, birdList[i].availability);

            //creates the button here and creates an event that will add the image of the pet
            //to the adopted list if it is clicked on
            var btnNode = createAdoptBtn(birdList[i]);
            btnNode.addEventListener("click", function () {

                birdCount++;

                var adooptedList = document.getElementById("adoptedList");

                //the button's value was the src for the image of the pet
                var imageNode = createPetImg(this.value);
                imageNode.style.marginRight = "5px";
                
                adooptedList.appendChild(imageNode);
            });

            //creates two break nodes here to space out the data
            var brNode1 = document.createElement('br');
            var brNode2 = document.createElement('br');

            //adds all the nodes to the div node
            divNode.appendChild(imageNode);
            divNode.appendChild(brNode1);
            divNode.appendChild(textNode);
            divNode.appendChild(brNode2);
            divNode.appendChild(btnNode);

            //displays the pet in the target div
            displayNode.appendChild(divNode);
        }
    }

    //creates an array for the cats
    var catList = [];

    //code that executes when cats are chosen
    if (chosenCategory == "Cats") {

        //clears the display
        displayNode.innerHTML = "";

        //creates all the cats here and adds them to the array
        var cat1 = new pet("../images/cats/cat1.jpg", "Sylvester", "June 20", 12, "Cute gray tomcat", "Available");
        catList.push(cat1);

        var cat2 = new pet("../images/cats/cat2.jpg", "Garfield", "Oct 12", 20, "Grumpy orange cat", "Available");
        catList.push(cat2);

        var cat3 = new pet("../images/cats/cat3.jpg", "Chocolate", "Dec 14", 14, "Active brown cat", "Available");
        catList.push(cat3);

        var cat4 = new pet("../images/cats/cat4.jpg", "Midnight", "Oct 31", 13, "Lazy black cat", "Available");
        catList.push(cat4);

        var cat5 = new pet("../images/cats/cat5.png", "Ash", "March 11", 1, "Baby gray kitten", "Available");
        catList.push(cat5);

        var cat6 = new pet("../images/cats/cat6.jpg", "Snowball", "Dec 23", 4, "Small white cat", "Available");
        catList.push(cat6);

        var cat7 = new pet("../images/cats/cat7.jpg", "Merlin", "June 10", 9, "Sleepy black cat", "Available");
        catList.push(cat7);

        var cat8 = new pet("../images/cats/cat8.jpg", "Spite", "Nov 6", 11, "Aggressive orange cat", "Available");
        catList.push(cat8);

        var cat9 = new pet("../images/cats/cat9.jpg", "Caramel", "June 2", 4, "Friendly orange cat", "Available");
        catList.push(cat9);

        var cat10 = new pet("../images/cats/cat10.jpg", "Lionel", "July 19", 15, "Large dominant cat", "Available");
        catList.push(cat10);

        //loop here that goes through the array and creates divs for each cat
        for (var i = 0; i < catList.length; i++) {

            //creates div node here and sets some style elements
            var divNode = document.createElement("div");
            divNode.style.marginBottom = "10px";
            divNode.style.marginTop = "10px";
            divNode.style.backgroundColor = "limegreen";

            //calls image function to create the image node
            var imageNode = createPetImg(catList[i].imageURL);

            //creates text here with function
            var textNode = createPetText(catList[i].name, catList[i].birthdate, catList[i].age,
                catList[i].description, catList[i].availability);

            //creates the button here and creates an event that will add the image of the pet
            //to the adopted list if it is clicked on
            var btnNode = createAdoptBtn(catList[i]);
            btnNode.addEventListener("click", function () {

                catCount++;

                var adooptedList = document.getElementById("adoptedList");

                //the button's value was the src for the image of the pet
                var imageNode = createPetImg(this.value);
                imageNode.style.marginRight = "5px";

                adooptedList.appendChild(imageNode);

            });

            //creates two break nodes here to space out the data
            var brNode1 = document.createElement('br');
            var brNode2 = document.createElement('br');

            //adds all the nodes to the div node
            divNode.appendChild(imageNode);
            divNode.appendChild(brNode1);
            divNode.appendChild(textNode);
            divNode.appendChild(brNode2);
            divNode.appendChild(btnNode);

            //displays the pet in the target div
            displayNode.appendChild(divNode);
        }

    }

    //creates array for the dogs
    var dogList = [];

    //code that executes if dog category was chosen
    if (chosenCategory == "Dogs") {

        //clears the display
        displayNode.innerHTML = "";

        //creates all the dogs and adds them to the array
        var dog1 = new pet("../images/dogs/dog1.jpg", "Spot", "July 19", 3, "Cute active brown dog", "Available");
        dogList.push(dog1);

        var dog2 = new pet("../images/dogs/dog2.jpg", "Fluffy", "March 4", 2, "Tiny fluffy dog", "Available");
        dogList.push(dog2);

        var dog3 = new pet("../images/dogs/dog3.jpg", "Johhny", "Aug 23", 5, "Large playful dog", "Available");
        dogList.push(dog3);

        var dog4 = new pet("../images/dogs/dog4.jpg", "Molly", "Sept 12", 6, "Fun jolly dog", "Available");
        dogList.push(dog4);

        var dog5 = new pet("../images/dogs/dog5.jpeg", "Penelope", "Feb 23", 3, "Small cute fluffy white dog", "Available");
        dogList.push(dog5);

        var dog6 = new pet("../images/dogs/dog6.jpg", "Spencer", "May 18", 5, "Tiny slow pug", "Available");
        dogList.push(dog6);

        var dog7 = new pet("../images/dogs/dog7.jpg", "Lauren", "Jan 9", 8, "Super playful dog", "Available");
        dogList.push(dog7);

        var dog8 = new pet("../images/dogs/dog8.jpeg", "Dusk", "Nov 19", 4, "Small black pug", "Available");
        dogList.push(dog8);

        var dog9 = new pet("../images/dogs/dog9.jpg", "Fang", "Oct 16", 7, "Small fox-like dog", "Available");
        dogList.push(dog9);

        var dog10 = new pet("../images/dogs/dog10.jpg", "Matt", "June 3", 19, "Old friendly dog", "Available");
        dogList.push(dog10);

        //loop here that goes through the array and creates divs for each dog
        for (var i = 0; i < dogList.length; i++) {

            //creates div node here and sets some style elements
            var divNode = document.createElement("div");
            divNode.style.marginBottom = "10px";
            divNode.style.marginTop = "10px";
            divNode.style.backgroundColor = "limegreen";

            //calls image function to create the image node
            var imageNode = createPetImg(dogList[i].imageURL);

            //creates text here with function
            var textNode = createPetText(dogList[i].name, dogList[i].birthdate, dogList[i].age,
                dogList[i].description, dogList[i].availability);

            //creates the button here and creates an event that will add the image of the pet
            //to the adopted list if it is clicked on
            var btnNode = createAdoptBtn(dogList[i]);
            btnNode.addEventListener("click", function () {

                dogCount++;

                var adooptedList = document.getElementById("adoptedList");

                //the button's value was the src for the image of the pet
                var imageNode = createPetImg(this.value);
                imageNode.style.marginRight = "5px";

                adooptedList.appendChild(imageNode);

            });

            //create break nodes here
            var brNode1 = document.createElement('br');
            var brNode2 = document.createElement('br');

            //adds the nodes to the pet div
            divNode.appendChild(imageNode);
            divNode.appendChild(brNode1);
            divNode.appendChild(textNode);
            divNode.appendChild(brNode2);
            divNode.appendChild(btnNode);

            //displays the pet in the target div
            displayNode.appendChild(divNode);
        }
    }
}