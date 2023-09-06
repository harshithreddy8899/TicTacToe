let player1name=document.getElementById("Player1_name");
let player2name=document.getElementById("Player2_name");
let player1value=document.getElementById("Player1_value");
let player2value=document.getElementById("Player2_value");

function player(name,value,turns){
    return {name,value,turns};
}
let table_event=document.querySelector(".my-button");
let player1=player(player1name,player1value,0);
let player2=player(player1name,player1value,0);
for(let i=0;i<=0;i++){
    table_event[i].addEventListener('click',function (){
        
        let player_turns=document.getElementById('turns1');

        if(player1.turns==player2.turns&&player1.turns!=5)
        {
            let element_val=table_event[i].value;
            let index=parseInt(element_val);
            fill_check[index]=1;
            check.play(player1,);
            table_event[i].innerHTML="<strong>X</strong>";
            player_turns.textContent=player2name+"'s turn";
        }
        else if(player1.turns!=player2.turns)
        {
            let element_val=table_event[i].value;
            let index=parseInt(element_val);
            fill_check[index]=0;
            check.play(player2);
            table_event[i].innerHTML="<strong>O</strong>";
            player_turns.textContent=player1name+"'s turn";
        }
        else
        {
            if(check.gameCheck()==1)
            {
                player_turns.textContent="player1 won";
            }
            else
            {
                player_turns.textContent="player2 won";
            }
        }

    });
}


const check=(()=>
{
    
    const player=(player,tds)=>{
        player.turns++;
    };
    const gameCheck=()=>{
        if(fill_check[0]==fill_check[1]&&fill_check[1]==fill_check[2])
        {
            return fill_check[0];
        }
        else if(fill_check[3]==fill_check[4]&&fill_check[4]==fill_check[5])
        {
            return fill_check[3];
        }
        else if(fill_check[6]==fill_check[7]&&fill_check[7]==fill_check[8])
        {
            return fill_check[6];
        }
        else if(fill_check[0]==fill_check[3]&&fill_check[3]==fill_check[6])
        {
            return fill_check[0];
        }
        else if(fill_check[1]==fill_check[4]&&fill_check[4]==fill_check[7])
        {
            return fill_check[1];
        }
        else if(fill_check[2]==fill_check[5]&&fill_check[5]==fill_check[8])
        {
            return fill_check[2];
        }
        else if(fill_check[0]==fill_check[4]&&fill_check[4]==fill_check[8])
        {
            return fill_check[0];
        }
    };
})();
