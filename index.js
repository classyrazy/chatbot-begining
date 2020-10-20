document.onstart = delayWelcomeMesssage1();
document.onstart = delayWelcomeMesssage2();
document.onstart = delayWelcomeMesssage3();

var inputText = document.querySelector("input");
var submitBtn = document.querySelector(".submitbtn");
var UserTextcon = document.querySelector(".user-text-con");
var chatBotTalk = document.querySelector(".chatbot-talk")
var inputCon = document.querySelector(".input-con");
var formCon = document.querySelector("form");
var adjMsg = document.createElement("p");

function displayOthers(){
    var displayOthersArray = ["I'm a simple bot that can help you with some basic calculation just specify by writing calculate and what you want to calculate", " I can also solve some mathematical operations like Pythagoras theorem just specify calculate e.g 'calculate pythagoras hypotenuse' ", "I'm a simple bot that can help you with some basic calculation, I can also solve some mathematical operations like Pythagoras theorem", "You can ask some basic calculations questions from me just e.g 'calculate 2*2 ", "you can also ask me to solve  and  pythagoras theorem, just say 'calculate hypotenuse or calculate pythagoras'"]
    var  displayOtherstext = document.createElement("p");
    displayOtherstext.textContent = displayOthersArray[Math.floor(Math.random() * displayOthersArray.length)];
    displayOtherstext.classList.add("p-test");
    displayOtherstext.classList.add("ptest");
    chatBotTalk.appendChild(displayOtherstext);
}
// setTimeout(function() {
//     testP3.classList.add("p-test");
//     testP3.style.transform = "rotate(360deg)"
// }, 6000);

setTimeout(function(){
    let tellTheme = document.createElement("p")
    tellTheme.innerText = "Do you know you can change theme of the page just scroll to the top of the page or refresh and choose the one you want:)"
    tellTheme.classList.add("p-test")
    tellTheme.classList.add("ptest")
    chatBotTalk.appendChild(tellTheme)
}, 30000)


submitBtn.addEventListener("click", function (e){
    //prevent from submiting
    e.preventDefault();
    //text div
    var textDiv = document.createElement("div");
    textDiv.classList.add("text-div");
    //user text
    var newUserText = document.createElement("p");
    newUserText.innerText = inputText.value;
    newUserText.classList.add("user-text-class");
    textDiv.appendChild(newUserText);
    chatBotTalk.appendChild(textDiv);
    
    

    if(newUserText.innerText === "" || newUserText.innerText == " "){
       textDiv.style.display = "none";
       newUserText.style.display = "none";
    }else{console.log("mad2")}
    if(newUserText.textContent.includes("name is") || newUserText.textContent.includes("my name")){
        var lastIndex = newUserText.textContent.lastIndexOf(" ");
            let theResultOfName = newUserText.textContent.slice(lastIndex);
            var insertNameOfuser = document.createElement("p");
            let greetingArray = ["Hello " + theResultOfName + ", how are you doing today?", "What's up " + theResultOfName, "hello " + theResultOfName + " how are you doing"];
            insertNameOfuser.innerText = greetingArray[Math.floor(Math.random()*greetingArray.length)]; 
            insertNameOfuser.classList.add("p-test");
            insertNameOfuser.classList.add("ptest");
            chatBotTalk.appendChild(insertNameOfuser);
                if(newUserText.textContent.slice(lastIndex).includes("is") || newUserText.textContent.slice(lastIndex).includes("name") || newUserText.textContent.slice(lastIndex).includes("my")){
                insertNameOfuser.style.display = "none";
                var insertNameOfuserIfMistake = document.createElement("p");
                insertNameOfuserIfMistake.innerText = "Say your name and don't stress my life you can try writing your name in this format " + '"my name is john"';
                insertNameOfuserIfMistake.classList.add("p-test");
                insertNameOfuserIfMistake.classList.add("ptest");
                chatBotTalk.appendChild(insertNameOfuserIfMistake);
            }
            
        }else if(newUserText.textContent.includes("hello") || newUserText.textContent.includes("how you") || newUserText.textContent.includes("how are you") || newUserText.textContent.includes("what's up") || newUserText.textContent.includes("whats up") || newUserText.textContent.includes("what's supping") || newUserText.textContent.includes("What going on") || newUserText.textContent.includes("how is things") || newUserText.textContent.includes("how do you do") || newUserText.textContent.includes("how far")){
                var replyOfGreetings = document.createElement("p");
                var replyOfGreetingsArray = ["I'm good so what can I do for you today?", "I'm okay what are we getting on today?", "I'm fine how about you what are we getting our hand into today?", "So what do you want me to help you with today?", "what is it again ooooo?", "what can i help you with?", "I'm cool what shall it be today."]
                replyOfGreetings.textContent = replyOfGreetingsArray[Math.floor(Math.random()*replyOfGreetingsArray.length)];
                replyOfGreetings.classList.add("p-test");
                replyOfGreetings.classList.add("ptest");
                chatBotTalk.appendChild(replyOfGreetings);
            }else if(newUserText.textContent.includes("fine") || newUserText.textContent.includes("good") || newUserText.textContent.includes("cool") || newUserText.textContent.includes("I'm cool") || newUserText.textContent.includes("I'm good") || newUserText.textContent.includes("I'm fine") || newUserText.textContent.includes("I'm okay") ){
                var replyOfGreetings = document.createElement("p");
                var replyOfGreetingsArray = ["That's good so what can I do for you today?", "Okay so what are we getting on today?", "So what do you want me to help you with today", "what can i do for you?", "what's can i help you with?"]
                replyOfGreetings.textContent = replyOfGreetingsArray[Math.floor(Math.random()*replyOfGreetingsArray.length)];
                replyOfGreetings.classList.add("p-test");
                replyOfGreetings.classList.add("ptest");
                chatBotTalk.appendChild(replyOfGreetings);
            }else if(newUserText.textContent.includes("calculate pythagoras") || newUserText.textContent.includes("Pythagoras") || newUserText.textContent.includes("Pythagoras calculate") || newUserText.textContent.includes("pythagoras")){
                    var pythagorasMsg = document.createElement("p");
                    pythagorasMsg.textContent = "which side do you want to calculate";
                    pythagorasMsg.classList.add("p-test");
                    pythagorasMsg.classList.add("ptest");
                    chatBotTalk.appendChild(pythagorasMsg);
                }else if(newUserText.textContent.includes("calculate hypotenuse") || newUserText.textContent.includes("Hypotenuse") || newUserText.textContent.includes("hypotenuse") || newUserText.textContent.includes("hypotenus") || newUserText.textContent.includes("Hypotenuse") || newUserText.textContent.includes("Hyp") || newUserText.textContent.includes("hyp")){
                    var oppMsg = document.createElement("p")
                    oppMsg.textContent = "Your Opposite?";
                    oppMsg.classList.add("p-test")
                    oppMsg.classList.add("ptest")
                    chatBotTalk.appendChild(oppMsg)
                    var oppPythDiv = document.createElement("form");
                    oppPythDiv.classList.add("form-con")
                    var oppInput = document.createElement("input");
                    oppInput.setAttribute("placeholder", "Your Opposite?");
                    var oppSubmitBtn = document.createElement("button");
                    oppSubmitBtn.classList.add("submitbtn")
                    oppSubmitBtn.textContent = "next"
                    oppInput.classList.add("input-bar")
                    oppPythDiv.appendChild(oppInput);
                    oppPythDiv.appendChild(oppSubmitBtn);
                    inputCon.style.display = "none";
                    oppSubmitBtn.addEventListener("click", function(e){
                        e.preventDefault();
                        var opposite = oppInput.value;
                        console.log(opposite);
                        var textDiv = document.createElement("div");
                        textDiv.classList.add("text-div");
                        var opptext = document.createElement("p");
                        opptext.innerText = oppInput.value;
                        opptext.classList.add("user-text-class");
                        textDiv.appendChild(opptext);
                        chatBotTalk.appendChild(textDiv);
                        oppInput.value = "";
                        if(opptext.innerText === "" || opptext.innerText === " "){
                            var incaseOppNothing = document.createElement("p");
                            incaseOppNothing.innerText = "Specify your Opposite jaree!! if you want to cancel just type cancel";
                            incaseOppNothing.classList.add("p-test");
                            incaseOppNothing.classList.add("ptest");
                            chatBotTalk.appendChild(incaseOppNothing);
                            console.log("what is happning")
                            textDiv.style.display = "none";
                            opptext.style.display = "none";
                            adjMsg.style.display = "none";
                        }else{console.log("madooo ")}

                        if(isNaN(opposite)){

                            var incaseOppNothing = document.createElement("p");
                            incaseOppNothing.innerText = "Specify your Opposite jaree!! if you want to cancel just type cancel";
                            incaseOppNothing.classList.add("p-test");
                            incaseOppNothing.classList.add("ptest");
                            chatBotTalk.appendChild(incaseOppNothing);

                            
                            
                            if(opposite === "cancel" || opposite ==="Cancel"){
                                function ifUserCancel(){
                                    incaseOppNothing.style.display = "none";
                                    textDiv.style.display = "none";
                                    opptext.style.display = "none";
                                    var cancelMsg = document.createElement("p");
                                    cancelMsg.innerText = "cancelled!! what else would you want me to do for you";
                                    cancelMsg.classList.add("p-test");
                                    cancelMsg.classList.add("ptest");
                                    chatBotTalk.appendChild(cancelMsg);
                                    oppInput.style.display = "none";
                                    oppSubmitBtn.style.display = "none";
                                    inputCon.style.display = "flex";

                                }
                                ifUserCancel();
                            }
                        }else{
                            var adjMsg = document.createElement("p")
                            adjMsg.textContent = "Your Adjacent ?";
                            adjMsg.classList.add("p-test")
                            adjMsg.classList.add("ptest")
                            chatBotTalk.appendChild(adjMsg)
                                var adjPythDiv = document.createElement("form");
                                adjPythDiv.classList.add("form-con")
                        var adjInput = document.createElement("input");
                        adjInput.setAttribute("placeholder", "Your Adjacent?");
                        adjInput.classList.add("input-bar")
                        var adjSubmitBtn = document.createElement("button");
                        adjSubmitBtn.textContent = "Solve";
                        adjSubmitBtn.classList.add("submitbtn")
                        adjPythDiv.appendChild(adjInput);
                        adjPythDiv.appendChild(adjSubmitBtn);
                        oppPythDiv.style.display = "none";
                        adjSubmitBtn.addEventListener("click", function(e){
                            e.preventDefault();
                            var adjacent = adjInput.value;
                            console.log(adjacent);
                            var textDiv = document.createElement("div");
                            textDiv.classList.add("text-div");
                            var adjText = document.createElement("p");
                            adjText.innerText = adjInput.value;
                            adjText.classList.add("user-text-class");
                            textDiv.appendChild(adjText);
                            chatBotTalk.appendChild(textDiv);
                            adjInput.value = "";
                            


                            if (adjText.innerText === "" || adjText.innerText === " "){
                                textDiv.style.display = "none";
                                adjText.style.display = "none";
                                var incaseAdjNothing = document.createElement("p");
                                incaseAdjNothing.innerText = "Specify your Adjacent jaree!! if you want to cancel just type cancel";
                                incaseAdjNothing.classList.add("p-test");
                                incaseAdjNothing.classList.add("ptest");
                                chatBotTalk.appendChild(incaseAdjNothing);
                            }else if(isNaN(adjacent)){
                            var incaseAdjNothing = document.createElement("p");
                            incaseAdjNothing.innerText = "Specify your Adjacent jaree!! if you want to cancel just type cancel";
                            incaseAdjNothing.classList.add("p-test");
                            incaseAdjNothing.classList.add("ptest");
                            chatBotTalk.appendChild(incaseAdjNothing);

                            if(adjacent === "cancel" || adjacent ==="Cancel"){
                                    incaseAdjNothing.style.display = "none";
                                    var cancelMsg = document.createElement("p");
                                    cancelMsg.innerText = "Cancelled!! what else would you want me to do for you";
                                    cancelMsg.classList.add("p-test");
                                    cancelMsg.classList.add("ptest");
                                    chatBotTalk.appendChild(cancelMsg);
                                    adjInput.style.display = "none";
                                    adjSubmitBtn.style.display = "none";
                                    inputCon.style.display = "flex";
                            }

                            }else{
                                var hypAnser = Math.sqrt(opposite**2 + adjacent**2);
                            var hypAnserText = document.createElement("p");
                                hypAnserText.innerText = "Your hypothenus is " + hypAnser;
                                hypAnserText.classList.add("p-test"); 
                                hypAnserText.classList.add("ptest");
                                chatBotTalk.appendChild(hypAnserText);

                                    adjInput.style.display = "none";
                                    adjSubmitBtn.style.display = "none";
                                    inputCon.style.display = "flex";
                            }
                                
                            })
                            
                            formCon.appendChild(adjPythDiv);
                     }
                        
                    })
                    formCon.appendChild(oppPythDiv);
                    
                    
                    
                }else if(newUserText.textContent.includes("calculate opposite") || newUserText.textContent.includes("Opposite") || newUserText.textContent.includes("opposite") || newUserText.textContent.includes("Opp") || newUserText.textContent.includes("opp")){
                    var askHypMsg = document.createElement("p")
                    askHypMsg.textContent = "Your Hypotenus?";
                    askHypMsg.classList.add("p-test")
                    askHypMsg.classList.add("ptest")
                    chatBotTalk.appendChild(askHypMsg)

                    var askHypPythDiv = document.createElement("form");
                    askHypPythDiv.classList.add("form-con");
                    var askHypInput = document.createElement("input");
                    askHypInput.setAttribute("placeholder", "Your Hypotenus?");
                    var askHypSubmitBtn = document.createElement("button");
                    askHypSubmitBtn.classList.add("submitbtn")
                    askHypSubmitBtn.textContent = "next"
                    askHypInput.classList.add("input-bar")
                    askHypPythDiv.appendChild(askHypInput);
                    askHypPythDiv.appendChild(askHypSubmitBtn);
                    

                    inputCon.style.display = "none";
                    askHypSubmitBtn.addEventListener("click", function(e){
                        e.preventDefault();
                        var hypUnderOpp = askHypInput.value;
                        console.log(hypUnderOpp);
                        var textDiv = document.createElement("div");
                        textDiv.classList.add("text-div");
                        var hypUnderOppText = document.createElement("p")
                        hypUnderOppText.innerText = askHypInput.value;
                        hypUnderOppText.classList.add("user-text-class")
                        textDiv.appendChild(hypUnderOppText)
                        chatBotTalk.appendChild(textDiv);
                        askHypInput.value = "";

                        if(hypUnderOppText.innerText === "" ||hypUnderOppText.innerText === " "){
                            var incaseHypUnderOppNothing = document.createElement("p")
                            incaseHypUnderOppNothing.innerText = "Specify your Hypotenus jaree!! if you want to cancel just type cancel"; 
                            incaseHypUnderOppNothing.classList.add("p-test");
                            incaseHypUnderOppNothing.classList.add("ptest");
                            chatBotTalk.appendChild(incaseHypUnderOppNothing);
                            textDiv.style.display = "none";
                            hypUnderOppText.style.display = "none";
                            adjText.style.display = "none";
                        }
                        if(isNaN(hypUnderOpp)){
                            var incaseHypUnderOppNothing = document.createElement("p");
                            incaseHypUnderOppNothing.innerText = "Specify your Hypotenus jaree!! if you want to cancel just type cancel";
                            incaseHypUnderOppNothing.classList.add("p-test");
                            incaseHypUnderOppNothing.classList.add("ptest");
                            chatBotTalk.appendChild(incaseHypUnderOppNothing);


                            if(hypUnderOpp === "cancel" || hypUnderOpp === "Cancel"){
                                function ifUserCancel(){
                                    incaseHypUnderOppNothing.style.display = "none";
                                    var cancelMsg = document.createElement("p");
                                    cancelMsg.innerText = "Cancelled!! what else would you want me to do for you";
                                    cancelMsg.classList.add("p-test");
                                    cancelMsg.classList.add("ptest");
                                    chatBotTalk.appendChild(cancelMsg);
                                    askHypInput.style.display = "none";
                                    askHypSubmitBtn.style.display = "none";
                                    inputCon.style.display = "flex";

                                }
                                ifUserCancel();
                            }
                        }else{
                                var adjMsg = document.createElement("p")
                                adjMsg.textContent = "Your Adjacent ?";
                                adjMsg.classList.add("p-test")
                                adjMsg.classList.add("ptest")
                                chatBotTalk.appendChild(adjMsg)
                                var adjPythDiv = document.createElement("form");
                                adjPythDiv.classList.add("form-con")
                                var adjInput = document.createElement("input");
                                adjInput.setAttribute("placeholder", "Your Adjacent?");
                                adjInput.classList.add("input-bar")
                                var adjSubmitBtn = document.createElement("button");
                                adjSubmitBtn.textContent = "Solve";
                                adjSubmitBtn.classList.add("submitbtn")
                                adjPythDiv.appendChild(adjInput);
                                adjPythDiv.appendChild(adjSubmitBtn);
                                askHypPythDiv.style.display = "none";
                                formCon.appendChild(adjPythDiv);
                                adjSubmitBtn.addEventListener("click", function(e){
                                    e.preventDefault();
                                    var adjacent = adjInput.value;
                                    console.log(adjacent);
                                    var textDiv = document.createElement("div");
                                    textDiv.classList.add("text-div");
                                    var adjText = document.createElement("p");
                                    adjText.innerText = adjInput.value;
                                    adjText.classList.add("user-text-class");
                                    textDiv.appendChild(adjText);
                                    chatBotTalk.appendChild(textDiv);
                                    adjInput.value = "";


                                    if (adjText.innerText === "" || adjText.innerText === " "){
                                        textDiv.style.display = "none";
                                        adjText.style.display = "none";
                                        var incaseAdjNothing = document.createElement("p");
                                        incaseAdjNothing.innerText = "Specify your Adjacent jaree!! if you want to cancel just type cancel";
                                        incaseAdjNothing.classList.add("p-test");
                                        incaseAdjNothing.classList.add("ptest");
                                        chatBotTalk.appendChild(incaseAdjNothing);
                                    }else if(isNaN(adjacent)){
                                        var incaseAdjNothing = document.createElement("p");
                                        incaseAdjNothing.innerText = "Specify your Adjacent jaree!! if you want to cancel just type cancel";
                                        incaseAdjNothing.classList.add("p-test");
                                        incaseAdjNothing.classList.add("ptest");
                                        chatBotTalk.appendChild(incaseAdjNothing);

                                        if(adjacent === "cancel" || adjacent ==="Cancel"){
                                            incaseAdjNothing.style.display = "none";
                                            textDiv.style.display = "none";
                                            adjText.style.display = "none";
                                            var cancelMsg = document.createElement("p");
                                            cancelMsg.innerText = "cancelled!! what else would you want me to do for you";
                                            cancelMsg.classList.add("p-test");
                                            cancelMsg.classList.add("ptest");
                                            chatBotTalk.appendChild(cancelMsg);
                                            adjInput.style.display = "none";
                                            adjSubmitBtn.style.display = "none";
                                            inputCon.style.display = "flex"; 
                                        }


                                    }else{
                                        console.log("good")
                                        var oppFirst = hypUnderOpp**2 - adjacent**2;
                                        var oppAnser = Math.sqrt(oppFirst);
                                        console.log(oppAnser)

                                        var oppAnserText = document.createElement("p");
                                        oppAnserText.innerText = "Your Opposite is " + oppAnser;
                                        oppAnserText.classList.add("p-test"); 
                                        oppAnserText.classList.add("ptest");
                                        chatBotTalk.appendChild(oppAnserText);

                                        adjInput.style.display = "none";
                                        adjSubmitBtn.style.display = "none";
                                        inputCon.style.display = "flex";

                                        console.log(Math.sign(oppFirst))
                                    if(Math.sign(oppFirst) === -1){
                                        console.log("you are getting it")
                                        var oppSecond = adjacent**2 - hypUnderOpp**2;
                                        console.log(Math.sqrt(oppSecond))
                                        var oppAnser = Math.sqrt(oppSecond)
                                        oppAnserText.innerText = "Your Opposite is " + oppAnser+ "  Your Hypotenuse suppose to be greater than your Adjacent but because im not olodo like you i gave you a correct answer";
                                    }

                                    if(isNaN(oppAnser)){
                                        console.log ("anser is wrong")

                                        oppAnserText.innerText = "Olodo!! Your Opposite is not a number";
                                    }


                                    }
                                })
                            
                        }
                    });
                    formCon.appendChild(askHypPythDiv)



                    
                }else if(newUserText.textContent.includes("calculate adjacent") || newUserText.textContent.includes("Adjacent") || newUserText.textContent.includes("Calculate adjacent") || newUserText.textContent.includes("Calculate Adjacent") || newUserText.textContent.includes("adjacent") || newUserText.textContent.includes("Adj") || newUserText.textContent.includes("adj")){
                    var oppMsg = document.createElement("p")
                    oppMsg.textContent = "Your Opposite?";
                    oppMsg.classList.add("p-test")
                    oppMsg.classList.add("ptest")
                    chatBotTalk.appendChild(oppMsg)

                    var oppPythDiv = document.createElement("form");
                    oppPythDiv.classList.add("form-con")
                    var oppInput = document.createElement("input");
                    oppInput.setAttribute("placeholder", "Your Opposite?");

                    var oppSubmitBtn = document.createElement("button");
                    oppSubmitBtn.classList.add("submitbtn")
                    oppSubmitBtn.textContent = "next"
                    oppInput.classList.add("input-bar")
                    oppPythDiv.appendChild(oppInput);
                    oppPythDiv.appendChild(oppSubmitBtn);
                    inputCon.style.display = "none";
                    formCon.appendChild(oppPythDiv)
                    oppSubmitBtn.addEventListener("click", function(e){
                        e.preventDefault();
                        var opposite = oppInput.value;
                        console.log(opposite);

                        var textDiv = document.createElement("div");
                        textDiv.classList.add("text-div");
                        var opptext = document.createElement("p");
                        opptext.innerText = oppInput.value;
                        opptext.classList.add("user-text-class");
                        textDiv.appendChild(opptext);
                        chatBotTalk.appendChild(textDiv);
                        oppInput.value = "";

                        if(opptext.innerText === "" || opptext.innerText === " "){
                            var incaseOppNothing = document.createElement("p");
                            incaseOppNothing.innerText = "Specify your Opposite jaree!! if you want to cancel just type cancel";
                            incaseOppNothing.classList.add("p-test");
                            incaseOppNothing.classList.add("ptest");
                            chatBotTalk.appendChild(incaseOppNothing);
                            console.log("what is happning")
                            textDiv.style.display = "none";
                            opptext.style.display = "none";
                            askHypMsg.style.display = "none";
                        }

                        if(isNaN(opposite)){

                            var incaseOppNothing = document.createElement("p");
                            incaseOppNothing.innerText = "Specify your Opposite jaree!! if you want to cancel just type cancel";
                            incaseOppNothing.classList.add("p-test");
                            incaseOppNothing.classList.add("ptest");
                            chatBotTalk.appendChild(incaseOppNothing);

                            if(opposite === "cancel" || opposite ==="Cancel"){
                                function ifUserCancel(){
                                    incaseOppNothing.style.display = "none";
                                    textDiv.style.display = "none";
                                    opptext.style.display = "none";
                                    var cancelMsg = document.createElement("p");
                                    cancelMsg.innerText = "cancelled!! what else would you want me to do for you";
                                    cancelMsg.classList.add("p-test");
                                    cancelMsg.classList.add("ptest");
                                    chatBotTalk.appendChild(cancelMsg);
                                    oppInput.style.display = "none";
                                    oppSubmitBtn.style.display = "none";
                                    inputCon.style.display = "flex";
                                }
                                ifUserCancel();
                            }   
                        }else{
                            var askHypMsg = document.createElement("p")
                            askHypMsg.textContent = "Your Hypotenus?";
                            askHypMsg.classList.add("p-test")
                            askHypMsg.classList.add("ptest")
                            chatBotTalk.appendChild(askHypMsg)
                            var askHypPythDiv = document.createElement("form");
                            askHypPythDiv.classList.add("form-con");
                            var askHypInput = document.createElement("input");
                            askHypInput.setAttribute("placeholder", "Your Hypotenus?");

                            var askHypSubmitBtn = document.createElement("button");
                            askHypSubmitBtn.classList.add("submitbtn")
                            askHypSubmitBtn.textContent = "Solve"
                            askHypInput.classList.add("input-bar")
                            askHypPythDiv.appendChild(askHypInput);
                            askHypPythDiv.appendChild(askHypSubmitBtn);
                            oppPythDiv.style.display = "none";
                            formCon.appendChild(askHypPythDiv)

                            askHypSubmitBtn.addEventListener("click", function(e){
                                e.preventDefault();
                                var hypUnderAdj = askHypInput.value;
                                console.log(hypUnderAdj);
                                var textDiv = document.createElement("div");
                                textDiv.classList.add("text-div");

                                var hypUnderAdjText = document.createElement("p")
                                hypUnderAdjText.innerText = askHypInput.value;
                                hypUnderAdjText.classList.add("user-text-class")
                                textDiv.appendChild(hypUnderAdjText)
                                chatBotTalk.appendChild(textDiv);
                                askHypInput.value = "";

                                if(hypUnderAdjText.innerText === "" ||hypUnderAdjText.innerText === " "){
                                textDiv.style.display = "none";
                                hypUnderAdjText.style.display = "none";
                                var incaseHypUnderAdjNothing = document.createElement("p");
                                incaseHypUnderAdjNothing.innerText = "Specify your Hypotenuse jaree!! if you want to cancel just type cancel";
                                incaseHypUnderAdjNothing.classList.add("p-test");
                                incaseHypUnderAdjNothing.classList.add("ptest");
                                chatBotTalk.appendChild(incaseHypUnderAdjNothing);

                                }else if(isNaN(hypUnderAdj)){
                                    var incaseHypUnderAdjNothing = document.createElement("p");
                                    incaseHypUnderAdjNothing.innerText = "Specify your Hypotenuse jaree!! if you want to cancel just type cancel";
                                    incaseHypUnderAdjNothing.classList.add("p-test");
                                    incaseHypUnderAdjNothing.classList.add("ptest");
                                    chatBotTalk.appendChild(incaseHypUnderAdjNothing);

                                    if(hypUnderAdj === "cancel" || hypUnderAdj ==="Cancel"){
                                        incaseHypUnderAdjNothing.style.display = "none";
                                        var cancelMsg = document.createElement("p");
                                        cancelMsg.innerText = "Cancelled!! what else would you want me to do for you";
                                        cancelMsg.classList.add("p-test");
                                        cancelMsg.classList.add("ptest");
                                        chatBotTalk.appendChild(cancelMsg);
                                        askHypInput.style.display = "none";
                                        askHypSubmitBtn.style.display = "none";
                                        inputCon.style.display = "flex";
                                    }

                                }else{
                                    var adjFirst = hypUnderAdj**2 - opposite**2;
                                    var adjAnser = Math.sqrt(adjFirst);

                                    var adjAnserText = document.createElement("p");
                                    adjAnserText.innerText = "Your Adjacent is " + adjAnser;
                                    adjAnserText.classList.add("p-test"); 
                                    adjAnserText.classList.add("ptest");
                                    chatBotTalk.appendChild(adjAnserText); 
                                    askHypInput.style.display = "none";
                                    askHypSubmitBtn.style.display = "none";
                                    inputCon.style.display = "flex";
                                    console.log(Math.sign(adjFirst))
                                    if(Math.sign(adjFirst) === -1){
                                        console.log("you are getting it")
                                        var adjSecond = opposite**2 - hypUnderAdj**2;
                                        console.log(Math.sqrt(adjSecond))
                                        var adjAnser = Math.sqrt(adjSecond)
                                        adjAnserText.innerText = "Your Adjacent is " + adjAnser+ "  Your Hypotenuse suppose to be greater than your opposite but because im not olodo like you i gave you a correct answer";
                                    }

                                    if(isNaN(adjAnser)){
                                        console.log ("anser is wrong")

                                        adjAnserText.innerText = "Olodo!! Your Adjacent is not a number";
                                    }
                                }

                            })

                        }
                    })


                }
                // 
                else{
                displayOthers();
            }

    inputText.value = "";

});



var blackBack = document.querySelector("link");
var firstThemeClass = document.querySelector(".first-theme");
firstThemeClass.addEventListener("click", function (){
    blackBack.setAttribute("href", "./css/black.css");
    firstThemeClass.style.padding = "15px";
    firstThemeClass.style.border = "3px solid white";
});

var whiteBack = document.querySelector("link");
var secondThemeClass = document.querySelector(".second-theme");
secondThemeClass.addEventListener("click", function (){
    whiteBack.setAttribute("href", "./css/white.css");
    secondThemeClass.style.padding = "15px";
    secondThemeClass.style.border = "3px solid black";
});

var defaultBack = document.querySelector("link");
var thirdThemeClass = document.querySelector(".third-theme");
thirdThemeClass.addEventListener("click", function (){
    defaultBack.setAttribute("href", "./css/style.css");
    thirdThemeClass.style.padding = "15px";
    thirdThemeClass.style.border = "3px solid white";
});

function delayWelcomeMesssage1(){
    var testP = document.querySelector(".ptest1");
    setTimeout(function() {
        testP.classList.add("p-test");
        testP.style.transition = "all 3s ease";
        testP.style.transform = "rotate(360deg)";
    }, 2000);
};

function delayWelcomeMesssage2(){
    let testP2 = document.querySelector(".ptest2");
    setTimeout(function() {
        testP2.classList.add("p-test");
        testP2.style.transform = "rotate(360deg)"
    }, 4000);
};

function delayWelcomeMesssage3(){
    let testP3 = document.querySelector(".ptest3");
    setTimeout(function() {
        testP3.classList.add("p-test");
        testP3.style.transform = "rotate(360deg)"
    }, 6000);
};



