function create_fifth_container(x)
{
    var fifth_container=new PIXI.Container();
            fifth_container.width=window.screen.availWidth;
            app.stage.addChild(fifth_container);
            
            let fifth_rectangle = new PIXI.Graphics();
            fifth_rectangle.beginFill(0x222958);
            fifth_rectangle.drawRect(0, 0,Math.min(window.screen.availWidth,600 ),window.innerHeight );
            fifth_rectangle.endFill();
            fifth_rectangle.name="zzz";
            fifth_rectangle.x =(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2;

            fifth_container.addChild(fifth_rectangle);

            let fifth_rectangle_tittle = new PIXI.Graphics();
            fifth_rectangle_tittle.beginFill(0x222958);
            fifth_rectangle_tittle.drawRect(0, 0,Math.min(window.screen.availWidth,600 ),window.innerHeight*8/100 );
            fifth_rectangle_tittle.endFill();
            fifth_rectangle_tittle.x =(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2;

            fifth_container.addChild(fifth_rectangle_tittle);

            let style20 = new PIXI.TextStyle({
                fontFamily: "Arial",
                fontSize: 30,
                wordWrap: true,
                breakWords: true,
                wordWrapWidth: 250,
                align: "center",
                fill: "white"
            });

            var fifth_rectangle_tittle_text=new PIXI.Text("COPYKAT",style20);
            var fifth_rectangle_tittle_text_x=(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+(fifth_rectangle_tittle.width-fifth_rectangle_tittle_text.width)/2;
            var fifth_rectangle_tittle_text_y=(fifth_rectangle_tittle.height-fifth_rectangle_tittle_text.height)/2;
            
            fifth_rectangle_tittle_text.position.set(fifth_rectangle_tittle_text_x,fifth_rectangle_tittle_text_y);
            fifth_container.addChild(fifth_rectangle_tittle_text);

            let fifth_rectangle_scorecard = new PIXI.Graphics();
            fifth_rectangle_scorecard.beginFill(0x353c66);
            fifth_rectangle_scorecard.drawRect(0, 0,Math.min(window.screen.availWidth,600 ),window.innerHeight*8/100 );
            fifth_rectangle_scorecard.endFill();
            fifth_rectangle_scorecard.x =(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2;
            fifth_rectangle_scorecard.y=fifth_rectangle_tittle.height+window.innerHeight*30/100;
            fifth_container.addChild(fifth_rectangle_scorecard);

            var fifth_rectangle_scorecard_text=new PIXI.Text("SCORECARD",style20);
            var fifth_rectangle_scorecard_text_x=(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+(fifth_rectangle_tittle.width-fifth_rectangle_scorecard_text.width)/2;
            var fifth_rectangle_scorecard_text_y=fifth_rectangle_scorecard.y+(fifth_rectangle_tittle.height-fifth_rectangle_scorecard_text.height)/2;
            
            fifth_rectangle_scorecard_text.position.set(fifth_rectangle_scorecard_text_x,fifth_rectangle_scorecard_text_y);
            fifth_container.addChild(fifth_rectangle_scorecard_text);

            var coin;
            PIXI.loader.add("images/part_2.png").add("images/part_1.png").add("images/star.png").load(setup3);
            function setup3() 
            {
                var bg_1=new PIXI.Sprite(PIXI.loader.resources["images/part_1.png"].texture);
                bg_1.width=fifth_rectangle.width;
                bg_1.height=window.innerHeight*30/100;
                bg_1.x=fifth_rectangle.x;
                bg_1.y=fifth_rectangle_tittle.height;
                bg_1.visible=true;
                fifth_container.addChild(bg_1);


                var bg_2=new PIXI.Sprite(PIXI.loader.resources["images/part_2.png"].texture);
                bg_2.width=fifth_rectangle.width;
                bg_2.height=window.innerHeight*30/100;
                bg_2.x=fifth_rectangle.x;
                bg_2.y=fifth_rectangle_tittle.height;
                bg_2.visible=false;
                fifth_container.addChild(bg_2);

                var chal_badal_to_re=setInterval(badal,300);

                var star=new PIXI.Sprite(PIXI.loader.resources["images/star.png"].texture);
                star.width=Math.min(window.innerHeight*50/100,window.screen.availWidth);
                star.height=Math.min(window.innerHeight*30/100,window.innerHeight);
                star.x=fifth_rectangle.x+(fifth_rectangle.width-star.width)/2-3;
                star.y=fifth_rectangle_tittle.height;
                star.visible=true;
                fifth_container.addChild(star);

                let style25 = new PIXI.TextStyle({
                    fontFamily: "Arial",
                    fontSize: 70,
                    wordWrap: true,
                    breakWords: true,
                    wordWrapWidth: 250,
                    align: "center",
                    fill: "black"
                });

                var total_score=new PIXI.Text((score_result[0]+score_result[1]+score_result[2]),style25);
                var total_score_x=fifth_rectangle_tittle.x+(fifth_rectangle_tittle.width-total_score.width)/2;
                var total_score_y=fifth_rectangle_tittle.height+(window.innerHeight*30/100-total_score.height)/2;
                
                total_score.position.set(total_score_x,total_score_y);
                fifth_container.addChild(total_score);
                

                var varo=1;
                function badal()
                {
                    if(varo%2==1)
                    {
                        bg_2.visible=true;
                        bg_1.visible=false;
                        varo++;
                    }
                    else
                    {
                        varo++;
                        bg_2.visible=false;
                        bg_1.visible=true;
                    }
                    
                }
            }

            

            let fifth_rectangle_scorecard_round_one = new PIXI.Graphics();
            fifth_rectangle_scorecard_round_one.beginFill(0x191e41);
            fifth_rectangle_scorecard_round_one.drawRoundedRect(0, 0,Math.min(window.screen.availWidth,600 )-70,window.innerHeight*6/100,10     );
            fifth_rectangle_scorecard_round_one.endFill();
            fifth_rectangle_scorecard_round_one.visible=false;
            fifth_rectangle_scorecard_round_one.x =(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+35;
            fifth_rectangle_scorecard_round_one.y=fifth_rectangle_scorecard.y+fifth_rectangle_scorecard.height+20;
            fifth_container.addChild(fifth_rectangle_scorecard_round_one);

            let fifth_rectangle_scorecard_round_two = new PIXI.Graphics();
            fifth_rectangle_scorecard_round_two.beginFill(0x191e41);
            fifth_rectangle_scorecard_round_two.drawRoundedRect(0, 0,Math.min(window.screen.availWidth,600 )-70,window.innerHeight*6/100,10     );
            fifth_rectangle_scorecard_round_two.endFill();
            fifth_rectangle_scorecard_round_two.visible=false;
            fifth_rectangle_scorecard_round_two.x =(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+35;
            fifth_rectangle_scorecard_round_two.y=fifth_rectangle_scorecard_round_one.y+fifth_rectangle_scorecard_round_one.height;
            fifth_container.addChild(fifth_rectangle_scorecard_round_two);

            let fifth_rectangle_scorecard_round_three = new PIXI.Graphics();
            fifth_rectangle_scorecard_round_three.beginFill(0x191e41);
            fifth_rectangle_scorecard_round_three.drawRoundedRect(0, 0,Math.min(window.screen.availWidth,600 )-70,window.innerHeight*6/100,10     );
            fifth_rectangle_scorecard_round_three.endFill();
            fifth_rectangle_scorecard_round_three.visible=false;
            fifth_rectangle_scorecard_round_three.x =(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+35;
            fifth_rectangle_scorecard_round_three.y=fifth_rectangle_scorecard_round_two.y+fifth_rectangle_scorecard_round_two.height;
            fifth_container.addChild(fifth_rectangle_scorecard_round_three);


            let style21 = new PIXI.TextStyle({
                fontFamily: "Arial",
                fontSize: 20,
                wordWrap: true,
                breakWords: true,
                wordWrapWidth: 250,
                align: "center",
                fill: "white"
            });

            var fifth_rectangle_round_one=new PIXI.Text("Round  1",style21);
            var fifth_rectangle_round_one_x=fifth_rectangle_scorecard_round_one.x+10;
            var fifth_rectangle_round_one_y=fifth_rectangle_scorecard_round_one.y+(fifth_rectangle_scorecard_round_one.height-fifth_rectangle_round_one.height)/2;
            
            fifth_rectangle_round_one.position.set(fifth_rectangle_round_one_x,fifth_rectangle_round_one_y);
            fifth_container.addChild(fifth_rectangle_round_one);

            var fifth_rectangle_round_two=new PIXI.Text("Round  2",style21);
            var fifth_rectangle_round_two_x=fifth_rectangle_scorecard_round_two.x+10;
            var fifth_rectangle_round_two_y=fifth_rectangle_scorecard_round_two.y+(fifth_rectangle_scorecard_round_two.height-fifth_rectangle_round_two.height)/2;
            
            fifth_rectangle_round_two.position.set(fifth_rectangle_round_two_x,fifth_rectangle_round_two_y);
            fifth_container.addChild(fifth_rectangle_round_two);


            var fifth_rectangle_round_three=new PIXI.Text("Round  3",style21);
            var fifth_rectangle_round_three_x=fifth_rectangle_scorecard_round_three.x+10;
            var fifth_rectangle_round_three_y=fifth_rectangle_scorecard_round_three.y+(fifth_rectangle_scorecard_round_three.height-fifth_rectangle_round_three.height)/2;
            
            fifth_rectangle_round_three.position.set(fifth_rectangle_round_three_x,fifth_rectangle_round_three_y);
            fifth_container.addChild(fifth_rectangle_round_three);

            //result

            var fifth_rectangle_round_one_result=new PIXI.Text(score_result[0]+" ",style21);
            var fifth_rectangle_round_one_result_x=fifth_rectangle_scorecard_round_one.x+fifth_rectangle_scorecard_round_one.width-30;
            var fifth_rectangle_round_one_result_y=fifth_rectangle_scorecard_round_one.y+(fifth_rectangle_scorecard_round_one.height-fifth_rectangle_round_one.height)/2;
            
            fifth_rectangle_round_one_result.position.set(fifth_rectangle_round_one_result_x,fifth_rectangle_round_one_result_y);
            fifth_container.addChild(fifth_rectangle_round_one_result);

            var fifth_rectangle_round_two_result=new PIXI.Text(score_result[1]+" ",style21);
            var fifth_rectangle_round_two_result_x=fifth_rectangle_scorecard_round_two.x+fifth_rectangle_scorecard_round_two.width-30;
            var fifth_rectangle_round_two_result_y=fifth_rectangle_scorecard_round_two.y+(fifth_rectangle_scorecard_round_two.height-fifth_rectangle_round_two.height)/2;
            
            fifth_rectangle_round_two_result.position.set(fifth_rectangle_round_two_result_x,fifth_rectangle_round_two_result_y);
            fifth_container.addChild(fifth_rectangle_round_two_result);


            var fifth_rectangle_round_three_result=new PIXI.Text(score_result[2]+" ",style21);
            var fifth_rectangle_round_three_result_x=fifth_rectangle_scorecard_round_three.x+fifth_rectangle_scorecard_round_three.width-30;
            var fifth_rectangle_round_three_result_y=fifth_rectangle_scorecard_round_three.y+(fifth_rectangle_scorecard_round_three.height-fifth_rectangle_round_three.height)/2;
            
            fifth_rectangle_round_three_result.position.set(fifth_rectangle_round_three_result_x,fifth_rectangle_round_three_result_y);
            fifth_container.addChild(fifth_rectangle_round_three_result);

            var max_index=0;
            var max_value=score_result[0];
            for(var i=1;i<3;i++)
            {
                if(score_result[i]>max_value)
                {
                    max_value=score_result[i];
                    max_index=i;
                }
            }

            coin=new PIXI.Graphics();
            coin.beginFill(0xe1c352);
            coin.drawCircle(0, 0, 15);
            coin.endFill();
            coin.x = 60;
            coin.y = 60;
            fifth_container.addChild(coin);
            
            if(max_index==0)
            {
                fifth_rectangle_scorecard_round_one.visible=true;
                coin.x=fifth_rectangle_round_one_result.x-30;
                //alert(coin.height);
                coin.y=fifth_rectangle_scorecard_round_one.y+15+(fifth_rectangle_scorecard_round_one.height-30)/2;
                
            }
            else if(max_index==1)
            {
                fifth_rectangle_scorecard_round_two.visible=true;
                coin.x=fifth_rectangle_round_two_result.x-30;
                //alert(coin.height);
                coin.y=fifth_rectangle_scorecard_round_two.y+15+(fifth_rectangle_scorecard_round_two.height-30)/2;
            }
            else
            {
                fifth_rectangle_scorecard_round_three.visible=true;
                coin.x=fifth_rectangle_round_three_result.x-30;
                //alert(coin.height);
                coin.y=fifth_rectangle_scorecard_round_three.y+15+(fifth_rectangle_scorecard_round_three.height-30)/2;
            }




            var fifth_rectangle_button=new PIXI.Graphics();
            fifth_rectangle_button.beginFill(0xFFFFFF);
            fifth_rectangle_button.drawRoundedRect(0, 0,150,60,20)
            fifth_rectangle_button.endFill();
            fifth_rectangle_button.x = fifth_rectangle.x+(fifth_rectangle.width-150)/2;
            fifth_rectangle_button.y = fifth_rectangle_round_three_result.y+60;
            fifth_rectangle_button.mypara=5;
            fifth_rectangle_button.interactive=true;
            fifth_rectangle_button.on("mousedown",kar_farithi_chalu);
            fifth_rectangle_button.on('touchstart',kar_farithi_chalu);

            fifth_container.addChild(fifth_rectangle_button);

            let style3 = new PIXI.TextStyle({
                fontFamily: "Arial",
                fontSize: 20,
                wordWrap: true,
                breakWords: true,
                wordWrapWidth: 90,
                align: "center",
                fill: "black"
            });
            var fifth_rectangle_start_text=new PIXI.Text("Continue",style3);
            var fifth_rectangle_start_text_x=fifth_rectangle_button.x+(150-fifth_rectangle_start_text.width)/2;
            var fifth_rectangle_start_text_y=fifth_rectangle_button.y+(60-fifth_rectangle_start_text.height)/2;
            fifth_rectangle_start_text.position.set(fifth_rectangle_start_text_x,fifth_rectangle_start_text_y);

            fifth_container.addChild(fifth_rectangle_start_text);


            function kar_farithi_chalu()
            {
                
                turn="watch";
                leval=1;

                sound=0;
                round=1;
                score=0;
                sequance=[];
                score_result=[0,0,0];
                i=0;
                j=0;
                current=0;
                revious=-1;
                fifth_container.visible=false;
                //x.visible=true;
                location.reload();
                //create_third_container();
                //start_game();
                //create_fourth_container();
            }
}