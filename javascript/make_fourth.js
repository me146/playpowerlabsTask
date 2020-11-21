function create_fourth_container()
{
    var time_out_function;
    var click=0;
    var fourth_container=new PIXI.Container();
            fourth_container.width=window.screen.availWidth;
            app.stage.addChild(fourth_container);

            let fourth_rectangle = new PIXI.Graphics();
            fourth_rectangle.beginFill(0x222958);
            fourth_rectangle.drawRect(0, 0,Math.min(window.screen.availWidth,600 ),window.innerHeight );
            fourth_rectangle.endFill();
            fourth_rectangle.name="zzz";
            fourth_rectangle.x =(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2;

            fourth_container.addChild(fourth_rectangle);
            fourth_rectangle.interactive=true;
            fourth_rectangle.on("mousedown",start_game);
            fourth_rectangle.on("touchstart",start_game);

            let fourth_rectangle_tittle = new PIXI.Graphics();
            fourth_rectangle_tittle.beginFill(0x222958);
            fourth_rectangle_tittle.drawRect(0, 0,Math.min(window.screen.availWidth,600 ),window.innerHeight*8/100 );
            fourth_rectangle_tittle.endFill();
            fourth_rectangle_tittle.x =(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2;
            
            fourth_container.addChild(fourth_rectangle_tittle);

            let style10 = new PIXI.TextStyle({
                fontFamily: "Arial",
                fontSize: 30,
                wordWrap: true,
                breakWords: true,
                wordWrapWidth: 250,
                align: "center",
                fill: "white"
            });
            var fourth_rectangle_tittle_text=new PIXI.Text("COPYKAT",style10);
            var fourth_rectangle_tittle_text_x=(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+(fourth_rectangle_tittle.width-fourth_rectangle_tittle_text.width)/2;
            var fourth_rectangle_tittle_text_y=(fourth_rectangle_tittle.height-fourth_rectangle_tittle_text.height)/2;
            
            fourth_rectangle_tittle_text.position.set(fourth_rectangle_tittle_text_x,fourth_rectangle_tittle_text_y);
            fourth_container.addChild(fourth_rectangle_tittle_text);

            let fourth_rectangle_stats = new PIXI.Graphics();
            fourth_rectangle_stats.beginFill(0x574aa1);
            fourth_rectangle_stats.drawRect(0, 0,Math.min(window.screen.availWidth,600 ),window.innerHeight*6/100 );
            fourth_rectangle_stats.endFill();
            fourth_rectangle_stats.x =(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2;
            fourth_rectangle_stats.y=fourth_rectangle_tittle.y+fourth_rectangle_tittle.height;
            
            let style12 = new PIXI.TextStyle({
                fontFamily: "Arial",
                fontSize: 20,
                wordWrap: true,
                breakWords: true,
                wordWrapWidth: 250,
                align: "center",
                fill: "white"
            });
            var fourth_rectangle_stats_round=new PIXI.Text("Round: "+round+"/3",style12);
            var fourth_rectangle_stats_round_x=fourth_rectangle_stats.x+10;
            var fourth_rectangle_stats_round_y=fourth_rectangle_stats.y+(fourth_rectangle_stats.height-fourth_rectangle_stats_round.height)/2;
            fourth_rectangle_stats_round.position.set(fourth_rectangle_stats_round_x,fourth_rectangle_stats_round_y);

            var fourth_rectangle_stats_score=new PIXI.Text("Score: "+score,style12);
            var fourth_rectangle_stats_score_x=fourth_rectangle_stats.x+fourth_rectangle_stats.width-fourth_rectangle_stats_score.width-10;
            var fourth_rectangle_stats_score_y=fourth_rectangle_stats.y+(fourth_rectangle_stats.height-fourth_rectangle_stats_score.height)/2;
            fourth_rectangle_stats_score.position.set(fourth_rectangle_stats_score_x,fourth_rectangle_stats_score_y);

            var fourth_rectangle_stats_target=new PIXI.Text("Watch",style12);
            var fourth_rectangle_stats_target_x=fourth_rectangle_stats.x+(fourth_rectangle_stats.width-fourth_rectangle_stats_target.width)/2;
            var fourth_rectangle_stats_target_y=fourth_rectangle_stats.y+(fourth_rectangle_stats.height-fourth_rectangle_stats_target.height)/2;
            fourth_rectangle_stats_target.position.set(fourth_rectangle_stats_target_x,fourth_rectangle_stats_target_y);


            fourth_container.addChild(fourth_rectangle_stats);
            fourth_container.addChild(fourth_rectangle_stats_round);
            fourth_container.addChild(fourth_rectangle_stats_score);
            fourth_container.addChild(fourth_rectangle_stats_target);

            let fourth_rectangle_commnet = new PIXI.Graphics();
            fourth_rectangle_commnet.beginFill(0x6b7cc2);
            fourth_rectangle_commnet.drawRect(0, 0,Math.min(window.screen.availWidth,600 ),window.innerHeight*25/100 );
            fourth_rectangle_commnet.endFill();
            fourth_rectangle_commnet.x =(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2;
            fourth_rectangle_commnet.y=(500)/2;
            fourth_rectangle_commnet.alpha=0.8;
            fourth_rectangle_commnet.visible=false;


            let style13 = new PIXI.TextStyle({
                fontFamily: "Arial",
                fontSize: 30,
                wordWrap: true,
                breakWords: true,
                wordWrapWidth: 400,
                align: "center",
                fill: "white"
            });
            let fourth_rectangle_commnet_line=new PIXI.Text("Incorrect! Try Again",style13);
            fourth_rectangle_commnet_line.visible=false;
            var fourth_rectangle_commnet_line_x=fourth_rectangle_commnet.x+(fourth_rectangle_commnet.width-fourth_rectangle_commnet_line.width)/2;
            var fourth_rectangle_commnet_line_y=fourth_rectangle_commnet.y+(fourth_rectangle_commnet.height-fourth_rectangle_commnet_line.height)/2;
            fourth_rectangle_commnet_line.position.set(fourth_rectangle_commnet_line_x,fourth_rectangle_commnet_line_y);




            let fourth_rectangle_roundBox2 = new PIXI.Graphics();
            fourth_rectangle_roundBox2.beginFill(0x593ee6);
            //fourth_rectangle_roundBox2.lineStyle(5, 0xFFFFFF, 10)
            fourth_rectangle_roundBox2.drawRoundedRect(0, 0,fourth_rectangle.width*30/100,fourth_rectangle.height*30/100, 20)
            fourth_rectangle_roundBox2.endFill();
            fourth_rectangle_roundBox2.x =0;
            fourth_rectangle_roundBox2.y =0;
            fourth_rectangle_roundBox2.alpha=0.1;
            fourth_rectangle_roundBox2.visible=false;
            fourth_rectangle_roundBox2.interactive=true;

            var filter = new PIXI.filters.AdjustmentFilter();
                

            var values=[];

            PIXI.loader.add("images/1.png").add("images/2.png").add("images/3.png").add("images/4.png").add("images/tick.png").add("images/sound.png").add("images/disable_sound.png").add("images/info.png").load(setup);
            function setup() 
            {
                var pink = new PIXI.Sprite(PIXI.loader.resources["images/1.png"].texture);
                pink.x=(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+fourth_rectangle.width*17/100;
                pink.y=fourth_rectangle_stats.y+fourth_rectangle_stats.height+40;
                pink.height=fourth_rectangle.height*30/100;
                pink.width=fourth_rectangle.width*30/100;
                pink.myname=1;
                pink.interactive=true;
                pink.fre=345;
                pink.name="pink_color";
                pink.on("mousedown",onClick);
                pink.on('touchstart',onClick);
                pink.on("mouseup",upClick);
                pink.on("touchend",upClick);
                add_value_to_array(pink);
                fourth_container.addChild(pink);

                var yellow = new PIXI.Sprite(PIXI.loader.resources["images/2.png"].texture);
                yellow.x=pink.x+fourth_rectangle.width*5/100+pink.width;
                yellow.y=fourth_rectangle_stats.y+fourth_rectangle_stats.height+40;
                yellow.height=fourth_rectangle.height*30/100;
                yellow.width=fourth_rectangle.width*30/100;
                yellow.myname=2;
                yellow.interactive=true;
                yellow.fre=445;
                yellow.on("mousedown",onClick);
                yellow.on('touchstart',onClick);
                yellow.on("mouseup",upClick);
                yellow.on("touchend",upClick);
                add_value_to_array(yellow);
                fourth_container.addChild(yellow);

                var green = new PIXI.Sprite(PIXI.loader.resources["images/3.png"].texture);
                green.x=pink.x;
                green.y=pink.y+pink.height+fourth_rectangle.width*5/100 ;
                green.height=fourth_rectangle.height*30/100;
                green.width=fourth_rectangle.width*30/100;
                green.myname=3;
                green.interactive=true;
                green.fre=545;
                green.on("mousedown",onClick);
                green.on('touchstart',onClick);
                green.on("mouseup",upClick);
                green.on("touchend",upClick);
                add_value_to_array(green);
                fourth_container.addChild(green);

                var batali = new PIXI.Sprite(PIXI.loader.resources["images/4.png"].texture);
                batali.x=green.x+fourth_rectangle.width*5/100+green.width;
                batali.y=green.y;
                batali.height=fourth_rectangle.height*30/100;
                batali.width=fourth_rectangle.width*30/100;
                batali.myname=4;
                batali.interactive=true;
                batali.fre=645;
                batali.on("mousedown",onClick);
                batali.on("touchstart",onClick);
                batali.on("mouseup",upClick);
                batali.on("touchend",upClick);
                add_value_to_array(batali);
                fourth_container.addChild(batali);


                var tick=new PIXI.Sprite(PIXI.loader.resources["images/tick.png"].texture);
                tick.x=10;
                tick.y=10;
                tick.width=fourth_rectangle.width*30/100;
                tick.height=fourth_rectangle.height*30/100;
                tick.alpha=0.6;
                tick.visible=false;
                add_value_to_array(tick);
                fourth_container.addChild(tick)

                var sound=new PIXI.Sprite(PIXI.loader.resources["images/sound.png"].texture);
                sound.x=fourth_rectangle_tittle.x+fourth_rectangle_tittle.width-(fourth_rectangle_tittle.height-6)-6;
                sound.y=fourth_rectangle_tittle.y+3;
                sound.width=fourth_rectangle_tittle.height-6;
                sound.height=fourth_rectangle_tittle.height-6;
                sound.alpha=1;
                sound.interactive=true;
                sound.visible=true;
                sound.on("mousedown",avajChalu);
                sound.on("touchstart",avajChalu);
                add_value_to_array(sound);
                fourth_container.addChild(sound)

                var disable_sound=new PIXI.Sprite(PIXI.loader.resources["images/disable_sound.png"].texture);
                disable_sound.x=fourth_rectangle_tittle.x+fourth_rectangle_tittle.width-(fourth_rectangle_tittle.height-6)-6;
                disable_sound.y=fourth_rectangle_tittle.y+3;
                disable_sound.width=fourth_rectangle_tittle.height-6;
                disable_sound.height=fourth_rectangle_tittle.height-6;
                disable_sound.alpha=1;
                disable_sound.visible=false;
                disable_sound.interactive=true;
                disable_sound.on("mousedown",avajBandh);
                disable_sound.on("touchstart",avajBandh);
                add_value_to_array(disable_sound);
                fourth_container.addChild(disable_sound)

                var info=new PIXI.Sprite(PIXI.loader.resources["images/info.png"].texture);
                info.x=fourth_rectangle_tittle.x+6;
                info.y=fourth_rectangle_tittle.y+3;
                info.width=fourth_rectangle_tittle.height-6;
                info.height=fourth_rectangle_tittle.height-6;
                info.alpha=1;
                info.visible=true;
                info.interactive=true;
                info.on("mousedown",infode);
                info.on("touchstart",infode);
                add_value_to_array(info);
                fourth_container.addChild(info)

                start_game();
                fourth_container.addChild(fourth_rectangle_commnet);
                fourth_container.addChild(fourth_rectangle_commnet_line);
            }

            fourth_container.addChild(fourth_rectangle_roundBox2);
            var cot=0;

            function avajChalu()
            {
                values[5].visible=false;
                values[6].visible=true;
                sound=1;
            }

            function avajBandh()
            {
                values[5].visible=true;
                values[6].visible=false;
                sound=0;
            }

            function infode()
            {
                create_info_container();
            }

            function onClick()
            {
                click++;
                if(turn=="user")
                {
                    fourth_rectangle_roundBox2.width=this.width;
                    fourth_rectangle_roundBox2.height=this.height;
                    fourth_rectangle_roundBox2.x=this.x;
                    fourth_rectangle_roundBox2.y=this.y;
                    fourth_rectangle_roundBox2.visible=true;
                    
                    if(sound==0)
                        playTone(this.fre, "sine", 1);
                    this.filters = [filter];
                    requestAnimationFrame(animate1);

                    if(sequance[current]!=(this.myname)-1)
                    {
                        round++;

                        fourth_rectangle_stats_round.text="Round: "+Math.min(round,3)+"/3";

                        current=0;
                        previous=-1;
                        if(round==4)
                        {
                            fourth_rectangle_commnet_line.text="GAME OVER"
                            fourth_rectangle_commnet_line.visible=true;
                            var fourth_rectangle_commnet_line_x=fourth_rectangle_commnet.x+(fourth_rectangle_commnet.width-fourth_rectangle_commnet_line.width)/2;
                            var fourth_rectangle_commnet_line_y=fourth_rectangle_commnet.y+(fourth_rectangle_commnet.height-fourth_rectangle_commnet_line.height)/2;
                            fourth_rectangle_commnet_line.position.set(fourth_rectangle_commnet_line_x,fourth_rectangle_commnet_line_y);
                            fourth_rectangle_commnet.visible=true;

                            window.clearInterval(time_out_function);

                            score_result[round-2]=score;
                            score_result[2]=score_result[2]-score_result[1];
                            score_result[1]=score_result[1]-score_result[0];


                            //start_game();
                            
                            var mokal_ane_ayathi=setInterval(moklu_bhai,1000);
                            
                            function moklu_bhai()
                            {
                                window.clearInterval(mokal_ane_ayathi);
                                fourth_container.visible=false;
                                app.stage.removeChild(fourth_container);
                                create_fifth_container(fourth_container);
                            }
                            
                            
                            
                        }
                        else
                        {
                            fourth_rectangle_commnet_line.text="Incorrect! Try Again";
                            //fourth_rectangle_commnet_line.visible=false;
                            fourth_rectangle_commnet_line_x=fourth_rectangle_commnet.x+(fourth_rectangle_commnet.width-fourth_rectangle_commnet_line.width)/2;
                            fourth_rectangle_commnet_line_y=fourth_rectangle_commnet.y+(fourth_rectangle_commnet.height-fourth_rectangle_commnet_line.height)/2;
                            fourth_rectangle_commnet_line.position.set(fourth_rectangle_commnet_line_x,fourth_rectangle_commnet_line_y);

                            fourth_rectangle_commnet_line.visible=true;
                            fourth_rectangle_commnet.visible=true;
                            turn="watch";
                            fourth_rectangle_stats_target.text="Watch";

                            window.clearInterval(time_out_function);

                            score_result[round-2]=score;
                            console.log(score_result);

                            if(fourth_container.visible)
                            {
                                start_game();
                            }
                            
                        
                        }
                        //console.log(check(this.myname-1));
                    }
                    else
                    {
                        previous=current;
                        current++;
                        if(current==sequance.length)
                        {

                            values[4].x=this.x;
                            values[4].y=this.y;
                            values[4].visible=true;

                            score++;
                            fourth_rectangle_stats_score.text="Score: "+score;

                            current=0;
                            previous=-1;
                            console.log("win");
                            turn="watch";
                            fourth_rectangle_stats_target.text="Watch";
                            window.clearInterval(time_out_function);
                            if(fourth_container.visible)
                            {
                                start_game();
                            }
                        }
                    }
                }    
                
            }

            function upClick()
            {
                
                
                    this.filters = [];
                    fourth_rectangle_roundBox2.visible=false;
                
            }

            function check(x)
            {
                //console.log(sequance);
                //console.log(x);
                //console.log(sequance[current]+" "+parseInt("0"+x))
                return sequance[current]==parseInt("0"+x);
            }

            function animate1() 
            {
               
                filter.gamma=0.6;
                filter.saturation=0.6;
                filter.red=2.8;
                filter.green=2.8;
                filter.blue=3.2;
                filter.alpha=0.2;
                
                requestAnimationFrame(animate1);
            }

            function add_value_to_array(x)
            {
                values.push(x);
                //alert(x.myname);
            }


            
            function start_game()
            {
                //alert(values.length);

                
                    if(!(turn=="user"))
                    {
                        sequance=[];
                        i=0;
                        j=0;
                        for(var k=0;k<score+1;k++)
                        {
                            sequance.push(Math.floor(Math.random() * 4 ));
                        }

                        //console.log(sequance);
                        
                        app_aene=setInterval(current_sound,1000)
                        kad_aene=setInterval(remove_sound,1200);

                       
                    }
                    
                
            }

            

            function current_sound()
            {
                

                fourth_rectangle_commnet_line.visible=false;
                fourth_rectangle_commnet.visible=false;
                if(i==sequance.length-1)
                {
                    window.clearInterval(app_aene); 
                }

                values[4].visible=false;
                onshow(values[sequance[i]]);
                i++;
            }

            function remove_sound()
            {
                if(j==sequance.length-1)
                {
                    window.clearInterval(kad_aene);
                    turn="user";

                    time_out_function=setInterval(time_out_k,6000);
                    console.log(time_out_function);
                    fourth_rectangle_stats_target.text="";
                    console.log(turn);
                }

                upshow(values[sequance[j]]);
                j++;

                
            }



            function onshow(x)
            {
                fourth_rectangle_roundBox2.width=x.width;
                fourth_rectangle_roundBox2.height=x.height;
                fourth_rectangle_roundBox2.x=x.x;
                fourth_rectangle_roundBox2.y=x.y;
                fourth_rectangle_roundBox2.visible=true;
                if(sound==0)
                    playTone(x.fre, "sine", 1);
                x.filters = [filter];
                requestAnimationFrame(animate2);
                
            }

            function animate2() 
            {
               
                filter.gamma=0.6;
                filter.saturation=0.6;
                filter.red=2.8;
                filter.green=2.8;
                filter.blue=3.2;
                filter.alpha=0.2;
                
                requestAnimationFrame(animate2);
            }


            function upshow(x)
            {
                x.filters = [];
                console.log("jdjdjjd");
                fourth_rectangle_roundBox2.visible=false;
            }


            function time_out_k()
            {
                //console.log(time_out_function);
                if(click==0)
                {
                    window.clearInterval(time_out_function);
                    fourth_rectangle_commnet_line.text="TIME OUT"
                    fourth_rectangle_commnet_line.visible=true;
                    var fourth_rectangle_commnet_line_x=fourth_rectangle_commnet.x+(fourth_rectangle_commnet.width-fourth_rectangle_commnet_line.width)/2;
                    var fourth_rectangle_commnet_line_y=fourth_rectangle_commnet.y+(fourth_rectangle_commnet.height-fourth_rectangle_commnet_line.height)/2;                    fourth_rectangle_commnet_line.position.set(fourth_rectangle_commnet_line_x,fourth_rectangle_commnet_line_y);
                    fourth_rectangle_commnet.visible=true;

                    turn="watch";
                    fourth_rectangle_stats_target.text="Watch";
                    start_game();
                }
                else
                {
                    click=0;
                }
                
                //alert("aaaa");
            }
}