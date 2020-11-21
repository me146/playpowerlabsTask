function create_third_container()
{
    var third_container=new PIXI.Container();
            third_container.width=window.screen.availWidth;
            app.stage.addChild(third_container);

            let third_rectangle = new PIXI.Graphics();
            third_rectangle.beginFill(0x1b1054);
            third_rectangle.drawRect(0, 0,Math.min(window.screen.availWidth,600 ),window.innerHeight );
            third_rectangle.endFill();
            third_rectangle.x =(window.screen.availWidth-(Math.min(window.screen.availWidth,600)))/2;

            third_container.addChild(third_rectangle);

            var video=PIXI.Texture.from('videos/countdown.mp4');
            var sprite=new PIXI.Sprite(video);
            sprite.width=third_rectangle.width;
            sprite.height=third_rectangle.height;
            sprite.x=third_rectangle.x;
            sprite.y=third_rectangle.y;
            third_container.addChild(sprite);

            var puruthyu=setInterval(patavo,16000);

            function patavo()
            {
                window.clearInterval(puruthyu);
                create_fourth_container()
            }
            
}