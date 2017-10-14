var board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
var score=0;

var highScore=localStorage.highScore;

// var value = Math.random() < 0.9 ? 2 : 4;
// Math.random() * (max - min) + min;
function findVacancy()
{
	var arr=[];
	for(let i=0;i<4;i++)
	{
		for(let j=0;j<4;j++)
		{
			if(board[i][j]== 0)
			{
				var obj={};
				obj.x=i;
				obj.y=j;
				arr.push(obj);
			}
		}
	}
	return arr;
}
function place2or4(){
	var value = Math.random() < 0.9 ? 2 : 4;
	
	var arr=findVacancy();
	var r=Math.floor(Math.random() * ((arr.length) - 0) + 0);
	
	var i=arr[r].x;
	var j=arr[r].y;
	board[i][j]=value;
}

function removeSpaces()
{
	//console.log(event.keyCode);
	if(event.keyCode =='40')
	{
	for(let j=0;j<board.length;j++)
	{
		var num=[];
		for(let i=board.length-1;i>=0;i--)
		{
			 
			if(board[i][j]!=0)
			{
				num.push(board[i][j]);
			}
		}
		//console.log(num);
		var k=0;
		for(let i=board.length-1;i>=0;i--)
		{
			if((board.length-1-i)<num.length)
			{
				board[i][j]=num[k];
				k++;
			}
			else{
				board[i][j]=0;
			}
		}
	}
	}
	else if(event.keyCode == '38')
	{
		
		for(let j=0;j<board.length;j++)
		{
			var num=[];
			for(let i=0;i<board.length;i++)
			{
				
				if(board[i][j]!=0)
				{
					num.push(board[i][j]);
				}
			}
			var k=0;
			for(let i=0;i<board.length;i++)
			{
				if(i<num.length)
				{
					board[i][j]=num[k];
					k++;
				}
				else{
					board[i][j]=0;
				}
			}
		}
	}
	else if(event.keyCode == '39')
	{
		//console.log(event);
		for(let i=0;i<board.length;i++)
		{
			var num=[];
			for(let j=board.length-1;j>=0;j--)
			{
				
				if(board[i][j]!=0)
				{
					num.push(board[i][j]);
				}
			}
			//console.log(num);
			var k=0;
			for(let j=board.length-1;j>=0;j--)
			{
				if((board.length-1-j)<num.length)
				{
					board[i][j]=num[k];
					k++;
				}
				else{
					board[i][j]=0;
				}
			}
		}
	}
	else if(event.keyCode=='37'){
		//console.log(event);
		
		for(let i=0;i<board.length;i++)
		{
			var num=[];
			for(let j=0;j<board.length;j++)
			{
				
				if(board[i][j]!=0)
				{
					num.push(board[i][j]);
				}
			}
			
			 var k=0;
			for(let j=0;j<board.length;j++)
			{
				if(j<num.length)
				{
					board[i][j]=num[k];
					k++;
				}
				else{
					board[i][j]=0;
				}
			}
		}

	}

}
function addCos()
{
	if(event.keyCode=='40')
	{
	for(let j=0;j<board.length;j++)
	{
		for(let i=board.length-1;i>0;i--)
		{
			if(board[i][j]==board[i-1][j])
			{
				board[i][j]=board[i][j]+board[i-1][j];
				score=score+board[i][j];
				board[i-1][j]=0;
			}
		}
	}
	}
	else if(event.keyCode=='38')
	{
		for(let j=0;j<board.length;j++)
		{
			for(let i=0;i<board.length-1;i++)
			{
				if(board[i][j]==board[i+1][j])
				{
					board[i][j]=board[i][j]+board[i+1][j];
					score=score+board[i][j];
					board[i+1][j]=0;
				}
			}
		}
	}
	else if(event.keyCode=='39')
	{
		for(let i=0;i<board.length;i++)
		{
			for(let j=board.length-1;j>0;j--)
			{
				if(board[i][j]==board[i][j-1])
				{
					board[i][j]=board[i][j]+board[i][j-1];
					score=score+board[i][j];
					board[i][j-1]=0;
				}
			}
		}
	}
	else if(event.keyCode=='37')
	{
		for(let i=0;i<board.length;i++)
		{
			for(let j=0;j<board.length-1;j++)
			{
				if(board[i][j]==board[i][j+1])
				{
					board[i][j]=board[i][j]+board[i][j+1];
					score=score+board[i][j];
					board[i][j+1]=0;
				}
			}
		}
	}
}

function clearDisplayBoard()
{
	for(let i=0;i<board.length;i++)
	{
		for(let j=0;j<board.length;j++)
		{
			var mydiv=document.querySelector("#div"+i+j);

			mydiv.innerHTML="";
			mydiv.className="";

				mydiv.style.backgroundImage = "";
		}
	}

}

function display()
{
	for(let i=0;i<board.length;i++)
	{
		for(let j=0;j<board.length;j++)
		{
			if(board[i][j]==0)
			{
				var mydiv=document.querySelector("#div"+i+j);

				
				mydiv.className +="cell0";
				// mydiv.style.backgroundImage = "url('static/img/blank.jpg')";

				mydiv.style.backgroundImage = "url('static/img/blank.jpg')";

			}
			else if(board[i][j]==2)
			{
				var mydiv=document.querySelector("#div"+i+j);

				mydiv.innerHTML="2";
				mydiv.className +="cell2";
				 //mydiv.style.backgroundImage = "url('static/img/2.png')";

				mydiv.style.backgroundImage = "url('static/img/2.png')";

			}
			else if(board[i][j]==4)
			{
				var mydiv=document.querySelector("#div"+i+j);

				mydiv.innerHTML="4";
				mydiv.className +="cell4";

				//mydiv.style.backgroundImage = "url('static/img/4.png')";

				mydiv.style.backgroundImage = "url('static/img/4.png')";

			}
			else if(board[i][j]==8)
			{
				var mydiv=document.querySelector("#div"+i+j);
 
				mydiv.innerHTML="8";
				mydiv.className +="cell8";
				//mydiv.style.backgroundImage = "url('static/img/8.png')";
			}
			else if(board[i][j]==16)
			{
				var mydiv=document.querySelector("#div"+i+j);
				mydiv.innerHTML="16";
				mydiv.className +="cell16";
				//mydiv.style.backgroundImage = "url('static/img/16.png')";
				mydiv.style.backgroundImage = "url('static/img/8.png')";
			}
			else if(board[i][j]==16)
			{
				var mydiv=document.querySelector("#div"+i+j)
				mydiv.style.backgroundImage = "url('static/img/16.png')";
			}
			else if(board[i][j]==32)
			{
				var mydiv=document.querySelector("#div"+i+j);
				mydiv.innerHTML="32";
				mydiv.className +="cell32";
				//mydiv.style.backgroundImage = "url('static/img/32.png')";

				mydiv.style.backgroundImage = "url('static/img/32.png')";
			}
			else if(board[i][j]==64)
			{
				var mydiv=document.querySelector("#div"+i+j);
				mydiv.innerHTML="64";
				mydiv.className +="cell64";
				//mydiv.style.backgroundImage = "url('static/img/64.png')";

				mydiv.style.backgroundImage = "url('static/img/64.png')";
			}
			else if(board[i][j]==128)
			{
				var mydiv=document.querySelector("#div"+i+j);
				mydiv.innerHTML="128";
				mydiv.className +="cell128";
				//mydiv.style.backgroundImage = "url('static/img/128.png')";

				mydiv.style.backgroundImage = "url('static/img/128.png')";
			}
			else if(board[i][j]==256)
			{
				var mydiv=document.querySelector("#div"+i+j);
				mydiv.innerHTML="256";
				mydiv.className +="cell256";
				//mydiv.style.backgroundImage = "url('static/img/256.png')";

				mydiv.style.backgroundImage = "url('static/img/256.png')";
			}
			else if(board[i][j]==512)
			{
				var mydiv=document.querySelector("#div"+i+j);
				mydiv.innerHTML="512";
				mydiv.className +="cell512";
				//mydiv.style.backgroundImage = "url('static/img/512.png')";
				mydiv.style.backgroundImage = "url('static/img/512.png')";
			}
			else if(board[i][j]==1024)
			{
				var mydiv=document.querySelector("#div"+i+j);
				mydiv.innerHTML="1024";
				mydiv.className +="cell1024";
				//mydiv.style.backgroundImage = "url('static/img/1024.png')";
				mydiv.style.backgroundImage = "url('static/img/1024.png')";
			}
			else if(board[i][j]==2048)
			{
				var mydiv=document.querySelector("#div"+i+j);
				mydiv.innerHTML="2048";
				mydiv.className +="cell2048";
				//mydiv.style.backgroundImage = "url('static/img/2048.png')";

				mydiv.style.backgroundImage = "url('static/img/2048.png')";

			}
		}
	}
}

function checkAddOrNot(temparr,arr)
{
	for(let i=0;i<temparr.length;i++)
	{
		for(let j=0;j<temparr.length;j++)
		{
			if(temparr[i][j]!=arr[i][j])
			{
				return true;
			}
		}
	}
	return false;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


function highScoreIs(currentScore)
{
	if(currentScore>highScore)
	{
		highScore=currentScore;
		localStorage.highScore=highScore;
	}
}



function afterHitKey()
{
	document.onkeydown = checkKey;
	document.onkeyup = keyUp;

	function keyUp()
	{
		 sleep(100);
		 clearDisplayBoard();
	    display();

	    highScoreIs(score);
	    document.querySelector("#score").innerHTML=score;
	    document.querySelector("#high-score").innerHTML=highScore;

	    document.querySelector("#score").innerHTML=score;

	}

   function checkKey(e) {
   	var temparr=[[],[],[],[]]
   	for(let i=0;i<board.length;i++)
   	{
   		for(let j=0;j<board.length;j++)
   		{
   			temparr[i][j]=board[i][j];
   		}
   	}

   	if(checkEnd())
   	{
   		console.log("Game End");

   	}
    e = e || window.event;

    if (e.keyCode == '38') {
       

    }
    else if (e.keyCode == '40') {
       

    }
    else if (e.keyCode == '37') {
       
    }
    else if (e.keyCode == '39') {
      
    }
         removeSpaces();
        addCos();
        removeSpaces();
        clearDisplayBoard();
	    display();
	    if(checkAddOrNot(temparr,board))
         place2or4();
    	
        
       

	}

	
}

function checkEnd()
{
	for(let i=0;i<board.length;i++)
	{
		for(let j=0;j<board.length;j++)
		{
			if(board[i][j]==0)
			{
				return false;
			}
		}
		for(let j=0;j<board.length-1;j++)
		{
			if(board[i][j]==board[i][j+1])
			{
				return false;
			}
		}
	}
	for(let j=0;j<board.length;j++)
	{
		for(let i=0;i<board.length-1;i++)
		{
			if(board[i][j]==board[i+1][j])
			{
				return false;
			}
		}
	}
	return true;
}

function main()
{

	place2or4();
	place2or4();
	display();
	document.querySelector("#score").innerHTML=score;
	document.querySelector("#high-score").innerHTML=highScore;
	afterHitKey();
}

window.addEventListener("load",main);