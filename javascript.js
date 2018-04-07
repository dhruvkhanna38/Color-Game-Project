var num = 6;
var colors = generateRandomColors(num);
var h1 =document.querySelector("h1"); 
var result = document.querySelector("#result"); 
var colorDisplay = document.querySelector("#colorDisplay");
var divs = document.querySelectorAll(".square");
var pickedColor= pickColor(colors);
var newColors = document.querySelector("#newColors");
var easy = document.querySelector("#easy");
var hard  = document.querySelector("#hard");
easy.addEventListener("click" , function(){
                           num = 3;
                           easy.classList.add("selected");
                           hard.classList.remove("selected");
                           colors = generateRandomColors(num);
                           pickedColor = pickColor(colors);
                           colorDisplay.textContent = pickedColor ;
                           colorDisplay.style.textTransform = "uppercase";
                           result.textContent = "";

                           for(var i =0;i<num;i++)
                           { divs[i].style.backgroundColor = colors[i] ;
                           }
                           for(var i = num;i<6;i++)
                           {
                            divs[i].style.display = "none" ;
                           }


});
hard.addEventListener("click" , function(){
                                num =6;
                                hard.classList.add("selected");
                                easy.classList.remove("selected");
                                colors = generateRandomColors(num);
                                pickedColor = pickColor(colors);
                                colorDisplay.textContent = pickedColor ;
                                colorDisplay.style.textTransform = "uppercase";
                                result.textContent = "";

                              for(var i =0;i<6;i++)
                            { divs[i].style.backgroundColor = colors[i] ;
                              divs[i].style.display = "block" ;
                            }


});
newColors.addEventListener("click" , function(){
                       num = 6;
                       //change colors array
                       colors = generateRandomColors(num);
                       //change pick color
                       pickedColor = pickColor(colors);
                       //change heading
                       colorDisplay.textContent = pickedColor ;
                       colorDisplay.style.textTransform = "uppercase";
                       //reset heading color
                       h1.style.backgroundColor = "#4682B4";
                       //change color of squares
                       for(var i =0;i<divs.length;i++)
                        divs[i].style.backgroundColor = colors[i] ;
                       if(newColors.textContent === "Play Again")
                        newColors.textContent = "New Colors";
                      //remove span
                      result.textContent = "";
                      //select hard by default
                      hard.classList.add("selected");
                      easy.classList.remove("selected");
})
for(var i=0;i<divs.length;i++)
{
	divs[i].style.backgroundColor = colors[i] ;
	//clicking event
	divs[i].addEventListener("click" , function(){
                                            if(this.style.backgroundColor !== pickedColor)
                                            	{this.style.backgroundColor = "#232323";
                                                       result.textContent = "Try Again";}
                                             else 
                                             {
                                             	result.textContent = "Correct";
                                             	for(var j =0;j<colors.length;j++)
                                             	{
                                             		divs[j].style.backgroundColor = pickedColor ;
                                             	}
                                             	h1.style.backgroundColor = pickedColor;
                                              newColors.textContent = "Play Again";
                                             }          

	});
}


colorDisplay.textContent = pickedColor ;
colorDisplay.style.textTransform = "uppercase";

function pickColor(colors)
{  var index = Math.floor(Math.random() * colors.length);
	return colors[index];

}
function generateRandomColors(num){
    var a =[];

    for(var i=0;i<num;i++)
    {  var k1 = Math.floor(Math.random() * 256);
       var k2 = Math.floor(Math.random() * 256);
       var k3 = Math.floor(Math.random() * 256);
       var color = "rgb(" + k1 +", " + k2 + ", " + k3 + ")";
       a.push(color);
    }

    return a;

}
