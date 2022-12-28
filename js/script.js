const button=document.querySelectorAll('button');
        const input=document.getElementById('7');
        let add=0;
        let text="";
        let Ans="";
        let signbutton=0;
        let count=0;
let signs=["+","-","/","*","."];
        // console.log(typeof(signs[2]));
        
        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener('click',()=>{
                console.log(text.length);
                if(text.length!=0){    
                    let li=text[text.length-1];
                    function fun(e){
                        if(e==li){
                            return 1;
                        }
                        else{
                            return 0;
                        }
                    }
                                  
                    if(signs.find(fun)==li &&button[i].value=='*'){
                        signbutton=1;
                    }
                    if(signs.find(fun)==li &&button[i].value=='+'){
                        signbutton=1;
                    }
                    if(signs.find(fun)==li &&button[i].value=='-'){
                        signbutton=1;
                    }
                    if(signs.find(fun)==li &&button[i].value=='/'){
                        signbutton=1;
                    }
                    if(signs.find(fun)==li &&button[i].value=='.'){
                        signbutton=1;
                    }
                    
                }
                if(button[i].value=='='){
                    text=eval(text).toString();
                    console.log(Ans);
                    input.value=text;
                    
                }
                else if(button[i].value=='.'){
                    if(count>0){
                        input.value=text;
                    }
                    else{
                        text=text+button[i].value;
                        input.value=text;
                    }
                    count++;
                }
                    else{   
                        if(signbutton==1){
                            input.value=text;
                             signbutton=0;
                        }
                        else{
                            if(text.length==0&& (button[i].value=='+')){
                                input.value=text;
                            }
                            else if(text.length==0&& (button[i].value=='-')){
                                input.value=text;
                            }
                            else if(text.length==0&& (button[i].value=='/')){
                                input.value=text;
                            }
                            else if(text.length==0&& (button[i].value=='*')){
                                input.value=text;
                            }
                            else{
                                text=text+button[i].value;
                                input.value=text;
                            }
                        
                    }
                }
                if(button[i].value=='C'){
                                text="";
                                input.value=text;
                           
            
                            }  

            })   
        }


    
        
    

        