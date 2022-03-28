

/**
 * @name MessageHandler_Halola
 * @author Halola
 * @authorId 737323631117598811
 * @version 0.0.3
 * @description abc
 * @source https://github.com/g2asell2019
 * @updateUrl https://raw.githubusercontent.com/oSumAtrIX/BetterDiscordPlugins/master/
 */
 class MessageHandler_Halola {
	getName() {
		return "MessageHandler_Halola";
	}
	getDescription() {
		return "MessageHandler";
	}
	getVersion() {
		return "0.0.3";
	}
	getAuthor() {
		return "Halola";
	}
	stop() {
        clearInterval(window.myInterval);

	}
	start() {
        // ------------------------------------CONFIG-----------------------------------------------
        
        
        var delay = 5000;
        var listMessage_Halola = ["message1", "message2", "message3"];
        var listChannel_Halola = ["935844251013623818","935844251013623819"];

        // ------------------------------------CONFIG-----------------------------------------------



        window.messAction = ZLibrary.DiscordModules.MessageActions;
        function MessageHandler_Halola(messAction, listMessage_Halola, listChannel_Halola = []) {
            

            // choose a random message
            var randomMessage = random_item(listMessage_Halola);

            // choose a random channel
            if (listChannel_Halola.length >= 2) {
                window.channelId = random_item(listChannel_Halola);
            }
            else{
                window.channelId = listChannel_Halola[0];
            }
            //var randomChannel = random_item(listChannel);
            // send message
            var content = {
                "content": randomMessage,
                "tts": false,
                "invalidEmojis": [],
                "validNonShortcutEmojis": []
            }
            // check messAction is defined
            if (typeof messAction == 'undefined') {
                var messAction = ZLibrary.DiscordModules.MessageActions;
            }

            // send message every 30 seconds
            messAction._sendMessage(window.channelId, content, {})
            console.log("sent to ", channelId, " with message" , randomMessage);
        }

        function random_item(items)
        {
        
            return items[Math.floor(Math.random()*items.length)];
            
        }

        window.myInterval = setInterval(() => {
            MessageHandler_Halola(window.messAction, listMessage_Halola, listChannel_Halola);
        }, delay);
	}

	onSwitch() {
		//clearInterval(window.myInterval);
	}
}