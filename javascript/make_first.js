function create_first_container(dabo)
{
    var first_container=new PIXI.Container();
    first_container.width=window.screen.availWidth;
    app.stage.addChild(first_container);

            let rectangle = new PIXI.Graphics();
            rectangle.beginFill(0x5c40f7);
            rectangle.drawRect(0, 0,Math.min(window.screen.availWidth,600 ),window.innerHeight );
            rectangle.endFill();
            rectangle.x =(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2;
            
            var should_be_this_width=Math.min(window.screen.availWidth,600 );
            var should_be_this_height=window.innerHeight*50/100;
            should_be_this_width=(should_be_this_width*80)/100;
            var should_be_this_padding=(Math.min(window.screen.availWidth,600 )*10)/100;
           
            let roundBox1 = new PIXI.Graphics();
            roundBox1.lineStyle(2, 0xFFFFFF, 1);
            roundBox1.beginFill(0x000000);
            roundBox1.drawRoundedRect(0, 0,should_be_this_width, should_be_this_height, 20)
            roundBox1.endFill();
            roundBox1.x = (window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2 + should_be_this_padding;
            roundBox1.y = (window.screen.availWidth*5)/100;

            let dummy = new PIXI.Graphics();
            dummy.beginFill(0x000000);
            dummy.drawRoundedRect(0, 0, should_be_this_width, should_be_this_height, 20)
            dummy.endFill();
            dummy.x = (window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2 + should_be_this_padding;
            dummy.y = (window.screen.availWidth*5)/100;

            let roundBox2 = new PIXI.Graphics();
            roundBox2.lineStyle(2, 0xFFFFFF, 1);
            roundBox2.beginFill(0x000000);
            roundBox2.drawRoundedRect(0, 0, rectangle.width-50, ((rectangle.width-50)*110)/550+20, 20)
            roundBox2.endFill();
            roundBox2.x = (window.innerWidth-rectangle.width)/2+25;
            roundBox2.y = should_be_this_height+((window.screen.availWidth*5)/100)-40;

            first_container.addChild(rectangle); 
            first_container.addChild(roundBox1);
            first_container.addChild(roundBox2);
            first_container.addChild(dummy);
            
            PIXI.loader.add("images/front_tittle.png").load(setup);
            function setup() 
            {
                let logo = new PIXI.Sprite(PIXI.loader.resources["images/front_tittle.png"].texture);
                logo.x= (window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+should_be_this_padding+roundBox1.width*10/100;
                logo.y=((window.screen.availWidth*5)/100)+roundBox1.height*10/100;
                logo.height=roundBox1.height*80/100;
                logo.width=roundBox1.width*80/100;
                first_container.addChild(logo);
            }

            let style = new PIXI.TextStyle({
                fontFamily: "Arial",
                fontSize: (roundBox2.width*110)/550 ,
                fill: "white",
                dropShadow: true,
                dropShadowColor: "#818181",
                
            });

            let message = new PIXI.Text("COPYKAT",style);
            var y_of_message=should_be_this_height+((window.screen.availWidth*5)/100)-40+roundBox2.height*7/100;
            message.position.set((window.innerWidth-rectangle.width)/2+35,y_of_message);
            
            first_container.addChild(message);

            let style1 = new PIXI.TextStyle({
                fontFamily: "Arial",
                fontSize: 14,
                fill: "white"
            });
            let loading_message = new PIXI.Text("Loading,Please wait",style1);
            //var loading_message_y=should_be_this_height+((window.screen.availWidth*5)/100)+((rectangle.width-50)*110)/550+15;
            var loading_message_y=y_of_message+15+message.height;
            var loading_message_x=(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+should_be_this_padding+(roundBox1.width-200)/2+38
            loading_message.position.set(loading_message_x,loading_message_y);
            first_container.addChild(loading_message);

            let ellipse = new PIXI.Graphics();
            ellipse.beginFill(0xd8e3e6);
            ellipse.drawEllipse(0, 0, 20, 10);
            ellipse.endFill();
            var gain_percentage=(100-(20/rectangle.width)*100)/2;
            ellipse.x = (window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+should_be_this_padding+(roundBox1.width-200)/2+20;
            ellipse.y = loading_message.y+loading_message.height+22;
            first_container.addChild(ellipse);

            let progress = new PIXI.Graphics();
            progress.beginFill(0xd8e3e6);
            progress.drawRect(0, 0, 200, 5);
            progress.endFill();
            progress.x = (window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+should_be_this_padding+(roundBox1.width-200)/2;
            progress.y = loading_message.y+loading_message.height+20;
            first_container.addChild(progress);

            app.ticker.add(delta=>gameLoop(delta));
            var k=0;
            var destination=(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+should_be_this_padding+(roundBox1.width-200)/2+200;
            function gameLoop(delta)
            {
                //Move the cat 1 pixel 
                ellipse.x += 3;
                if(ellipse.x+20>=destination)
                {
                    k++;
                    ellipse.x=(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2+should_be_this_padding+(roundBox1.width-200)/2+20;
                }

                if(k==6)
                {
                    first_container.visible=false;
                    create_second_container(dabo);
                }
            }
            

            
            
}