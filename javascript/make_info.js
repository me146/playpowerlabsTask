var second_container_1=new PIXI.Container();
function create_info_container()
{
            
            second_container_1.width=window.screen.availWidth;
            second_container_1.width=Math.min(window.screen.availWidth,600 );
            second_container_1.height=window.screen.availHeight
            second_container_1.x =0;
            second_container_1.visible=true;
            



            app.stage.addChild(second_container_1);
            xyz=second_container_1;
            let second_rectangle = new PIXI.Graphics();
            second_rectangle.beginFill(0x1b1054);
            second_rectangle.drawRect(0, 0,Math.min(window.screen.availWidth,600 ),window.screen.availHeight );
            second_rectangle.endFill();
            second_rectangle.x =(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2;

            second_container_1.addChild(second_rectangle);

            let second_rectangle_tittle = new PIXI.Graphics();
            second_rectangle_tittle.beginFill(0x231863);
            second_rectangle_tittle.drawRect(0, 0,Math.min(window.screen.availWidth,600 ),window.screen.availHeight*8/100 );
            second_rectangle_tittle.endFill();
            second_rectangle_tittle.x =(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2;
            
            second_container_1.addChild(second_rectangle_tittle);

            let style2 = new PIXI.TextStyle({
                fontFamily: "Arial",
                fontSize: 30,
                wordWrap: true,
                breakWords: true,
                wordWrapWidth: 250,
                align: "center",
                fill: "white"
            });
            var second_rectangle_tittle_text=new PIXI.Text("COPYKAT",style2);
            var second_rectangle_tittle_text_x=(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+(second_rectangle_tittle.width-second_rectangle_tittle_text.width)/2;
            var second_rectangle_tittle_text_y=(second_rectangle_tittle.height-second_rectangle_tittle_text.height)/2;
            
            second_rectangle_tittle_text.position.set(second_rectangle_tittle_text_x,second_rectangle_tittle_text_y);
            second_container_1.addChild(second_rectangle_tittle_text);

            var second_rectangle_instruction=new PIXI.Text("How To Play",style2);
            let second_rectangle_roundBox1 = new PIXI.Graphics();
            second_rectangle_roundBox1.beginFill(0x593ee6);
            second_rectangle_roundBox1.drawRoundedRect(0, 0,second_rectangle_instruction.width+30,second_rectangle_instruction.height+30, 20)
            second_rectangle_roundBox1.endFill();
            second_rectangle_roundBox1.x = (window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+(second_rectangle.width-second_rectangle_instruction.width-30)/2;
            second_rectangle_roundBox1.y = second_rectangle_tittle.height+20;

            
            var second_rectangle_instruction_x=(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+(second_rectangle.width-second_rectangle_instruction.width)/2;
            var second_rectangle_instruction_y=second_rectangle_tittle.height+20+(second_rectangle_roundBox1.height-second_rectangle_instruction.height)/2;
            second_rectangle_instruction.position.set(second_rectangle_instruction_x,second_rectangle_instruction_y);



            second_container_1.addChild(second_rectangle_roundBox1);
            second_container_1.addChild(second_rectangle_instruction);

            var second_rectangle_tips=new PIXI.Text("Remember and  Repeat the Sequence of color",style2);
            let second_rectangle_roundBox2 = new PIXI.Graphics();
            second_rectangle_roundBox2.beginFill(0x593ee6);
            second_rectangle_roundBox2.drawRoundedRect(0, 0,second_rectangle_tips.width+60,second_rectangle_tips.height+60, 20)
            second_rectangle_roundBox2.endFill();
            second_rectangle_roundBox2.x = (window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+(second_rectangle.width-second_rectangle_tips.width-60)/2;
            second_rectangle_roundBox2.y = second_rectangle_roundBox1.y+second_rectangle_roundBox1.height*1.8;

            var second_rectangle_tips_x=second_rectangle_roundBox2.x+30;
            var second_rectangle_tips_y=second_rectangle_roundBox1.y+second_rectangle_roundBox1.height*1.8+30;
            second_rectangle_tips.position.set(second_rectangle_tips_x,second_rectangle_tips_y);

            second_container_1.addChild(second_rectangle_roundBox2);
            second_container_1.addChild(second_rectangle_tips);

            var second_rectangle_button=new PIXI.Graphics();
            second_rectangle_button.beginFill(0xFFFFFF);
            second_rectangle_button.drawRoundedRect(0, 0,120,60,20)
            second_rectangle_button.endFill();
            second_rectangle_button.x = second_rectangle.x+(second_rectangle.width-120)/2;
            second_rectangle_button.y = second_rectangle_roundBox2.y+second_rectangle_roundBox2.height*1.5;
            second_rectangle_button.mypara=5;

            let style3 = new PIXI.TextStyle({
                fontFamily: "Arial",
                fontSize: 30,
                wordWrap: true,
                breakWords: true,
                wordWrapWidth: 80,
                align: "center",
                fill: "black"
            });
            var second_rectangle_start_text=new PIXI.Text("back",style3);
            var second_rectangle_start_text_x=second_rectangle_button.x+(120-second_rectangle_start_text.width)/2;
            var second_rectangle_start_text_y=second_rectangle_button.y+(60-second_rectangle_start_text.height)/2;
            second_rectangle_start_text.position.set(second_rectangle_start_text_x,second_rectangle_start_text_y);

            var dropShadowFilter = new PIXI.filters.DropShadowFilter();
            dropShadowFilter.color=0xa3a2a0;
            dropShadowFilter.distance=5;
            second_rectangle_button.filters=[dropShadowFilter];

            second_container_1.addChild(second_rectangle_button);
            second_container_1.addChild(second_rectangle_start_text);

            second_rectangle_button.interactive=true;

           

            second_rectangle_button.mouseover=function(mousedata)
            {
                this.width=150;
                this.x=this.x-15;
            }

            second_rectangle_button.mouseout=function(mousedata)
            {
                this.width=120;
                this.x=this.x+15;
            }

            second_rectangle_button.on("mousedown",clickthyu);
            second_rectangle_button.on("touchstart",clickthyu);

            function clickthyu()
            {
                second_container_1.visible=false;
                //alert(second_container_1.visible);
                //chal_to_bhegu_kar_to();
                
                //create_first_container();
                //alert("ddddd");
            }
           

}


            //var temp=0;

            function chal_to_bhegu_kar_to()
            {                
                create_fourth_container();     
            }
