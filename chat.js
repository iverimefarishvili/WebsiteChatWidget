let content = 
    `
    <style>
        
  .chat-wrapper {
    position: fixed;
    bottom: 30px;
    right: 30px;
    transform: translateY(300px);
    transition: transform .3s ease-in-out;
    width: 350px;
    display: flex;
    flex-direction: column;
}
.unexpanded-chat-window {
    height: 80px;
    background-color: #e67e22;
    border-radius: 30px 6px 45px 30px;
    cursor: pointer;
    width: 100px;
    float: right;
    position: relative;
}
.unext-text{
    display: none;
    color: white;
    text-align: center;
    margin-left: 40px;
}
.chat-icon{
    width: 80px;
}
.header {
    height: 100px;
    background-color: #e67e22;
    color: white;
    position: absolute;
    top: 0;
    width: 100%;
    border-radius: 6px 6px 0 0;
}
.toolbar{
    float: right;
    height: 100%;
}
.close-icon{
    width: 15px;
    right: 10px;
    top: 10px;
    position: absolute;
    cursor: pointer;
}
.voice-icon{
    width: 18px;
    right: 70px;
    top: 10px;
    position: absolute;
    cursor: pointer;
}
.fold-icon{
    width: 15px;
    position: absolute;
    cursor: pointer;
    right: 50px;
    top: 10px;
}
.fullscreen-icon {
    width: 15px;
    position: absolute;
    cursor: pointer;
    right: 30px;
    top: 10px;
}
.unexpanded-chat-window:hover {
    border-radius: 6px 6px 6px 6px;
    width: 250px;
}
.icon {
    width: 40px;
    position: absolute;
    bottom: 25px;
    left: 30px;
}
.expanded-chat-window {
    display: none;
    height: 550px;
    background-color: #ecf0f1;
    position: relative;
    border-radius: 10px 10px 10px 10px;
}
.chat-wrapper {
    transform: translateY(0); 
}
.title {
    color: white;
    text-align: center;
}
.login {
    display: flex;
    flex-direction: column;
    margin: 40px;
}
.label{
    margin-top: 150px;
    margin-bottom: 15px;
    color: #e67e22;
}
.error{
    color: red;
    margin-top: 5px;
    display: none;
}
.login-name {
    padding-left: 10px;
    height: 45px;
    border-radius: 6px;
    border: solid 1px #e67e22;
}
.login-name:focus {
    outline: none;
}
.login-btn:focus {
    outline: none;
}
.login-btn {
    background-color: #e67e22;
    cursor: pointer;
    height: 35px;
    border-radius: 10px;
    color: white;
    border: none;
    margin-top: 50px;
}
.header-text {
    position: absolute;
    text-align: center;
    top: 20px;
    left: 100px;
}
.languages {
    display: flex;
    position: absolute;
    right: 10px;
    bottom: 0;
}
.languages > p {
    margin: 5px;
    cursor: pointer;
}
.show{
    display: block;
}
.hide {
    display: none;
}
.chat {
    position: relative;
    height: 100%;
}
.input {
    position: absolute;
    bottom: 100px;
    padding: 10px;
    left: 0;
    width: 350px;
}
.messageSupport{
    display: flex;
    margin-bottom: 20px;
}
.message-input{
    height: 75px;
    border-radius: 6px;
    border-style: none;
    margin-bottom: 10px;
    width: 80%;
    padding-left: 20px;
}
.send-btn {
    height: 77px;
    border-radius: 0 6px 6px 0;
    border: solid 1px #e67e22;
    background-color: #e67e22;
    position: absolute;
    color: white;
    right: 32px;
    width: 67px;
}
.send-btn:focus {
    outline: none;
}
.message-input:focus {
    outline: none;
}
.messages {
    display: flex;
    margin-top: 84px;
    
}
.received-message{
    width: 100%;
    height: auto;
    position: relative;
}
.received-message-icon{
    width: 40px;
    height: 40px;
}
.received-message-text {
    background-color: #e67e22;
    font-size: 13px;
    padding: 11px;
    border-radius: 6px 30px 30px;
    margin-left: 5px;
    width: auto;
    color: white;
}

.messages > ul {
    list-style: none;
    padding-left: 8px;
    width: 100%;
    overflow: auto;
    height: 337px;
   
}

.person {
    position: absolute;
    bottom: -4px;
    font-size: 12px;
    left: -2px;
}

.list {
    display: flex;
}
.message-text {
    background-color: green;
    width: 100%;
}
.sent-message {
    width: 100%;
    height: 60px; 
    /* height:auto; */
}
.message-text {
    background-color: green;
    width: auto;
    font-size: 13px;
    padding: 9px;
    border-radius: 30px 6px 30px 30px;
    color: white;
    float: right;
    margin-right: 10px;
}
.sent {
    width: 100%;
    height: auto;
}

/* width */
::-webkit-scrollbar {
    width: 5px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  
    </style>
    <div class="chat-wrapper">
    <audio class="audio" src="inflicted.mp3" preload="metadata">
        <p>Alas, your browser doesn't support html5 audio.</p>
    </audio>
    <div class="popup">

    </div>
    <div class="unexpanded-chat-window">
        <!-- <div class="title">
            Chat</div> -->
            <img class="icon" src="../email.png" alt="">
            <p class="unext-text">ონლაინ<br> კონსულტაცია</p>
    </div>
    <div class="expanded-chat-window">
        <div class="header">
            <p class="header-text">ონლაინ კონსულტაცია</p>
            <img class="chat-icon" src="../conversation.png" alt="">
            <div class="toolbar">
                <img class="close-icon" src="../close-white.png" alt="">
                <img class="fold-icon" src="../dash.png" alt="">
                <img class="voice-icon" src="../voice.png" onclick="turnAudio()" alt="">
                <img class="fullscreen-icon" src="../expand.png" onclick="sdsda()" alt="">
            </div>
            <div class="languages">
                <p class="geo" onclick="LanguageChange('GEO')">GEO</p>
                <p class="eng" onclick="LanguageChange('ENG')">ENG</p>
                <p class="rus" onclick="LanguageChange('RUS')">RUS</p>
            </div>
        </div>
        <div class="login">
            <label class="label" for="login-name">შეიყვანეთ სახელი</label>
            <input type="text" name="login-name" class="login-name" id="login-name" required>
            <span class="error">გთხოვთ შეიყვანოთ სახელი</span>
            <button type="submit" class="login-btn">ჩატის დაწყება</button>
        </div>
        <div class="chat hide">
            <div class="loader-wrapper">
                <!-- <div class="loader">
                  <span>{</span><span>}</span>
                </div> -->
              </div>
            <div class="messages">
                
                <ul class="append">
                    <li class="received">
                        <div class="received-message">
                            <div class="list" >
                                <img class="received-message-icon" src="../user.png" alt="">
                                <p class="received-message-text">რით შემიძლია დაგეხმაროთ?</p>
                            </div>
                            
                            <p class="person">გიორგი</p>
                            
                        </div>
                    </li>
                    <li class="received">
                        <div class="received-message">
                            <div class="list" >
                                <img class="received-message-icon" src="../user.png" alt="">
                                <p class="received-message-text">რით შემიძლია დაგეხმაროთ?</p>
                            </div>
                            
                            <p class="person">გიორგი</p>
                            
                        </div>
                    </li>
                    <li class="sent">
                        <div class="sent-message">
                            <p class="message-text">არაფრით, მადლობა</p>
                        </div>
                    </li>
                    <li class="received">
                        <div class="received-message">
                            <div class="list" >
                                <img class="received-message-icon" src="../user.png" alt="">
                                <p class="received-message-text">რით შემიძლია დაგეხმაროთ?</p>
                            </div>
                            
                            <p class="person">გიორგი</p>
                            
                        </div>
                    </li>
                </ul>
                
            </div>

            <div class="input">
                <div id="messageSupport">
                  
                  <input type="text" autocomplete="off" class="message-input" id="newMessage" placeholder="პასუხი">
                  <button type="submit" class="send-btn">გაგზავნა</button>
                </div>
            </div>
        </div>
    </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  <script src="https://cdn.socket.io/socket.io-1.0.0.js"></script>
  <script src="../chat.js"></script> `;

(function() {
    //$('body').append(content);
    let chatInfo = {
      messages: [],
      room: undefined,
      userId: undefined,
      currentUser: undefined,
    };

    let activeLanguage = {};

    let languages = {
      georgian: {
        "ONLINE_CONSULTATION": "ონლაინ კონსულტაცია",
        "INPUT_NAME": "შეიყვანეთ სახელი",
        "OPEN_CHAT": "ჩატის დაწყება",
        "SEND": "გაგზავნა",
        "ANSWER": "პასუხი"
      },
      english: {
        "ONLINE_CONSULTATION": "online consultation",
        "INPUT_NAME": "input name",
        "OPEN_CHAT": "start chat",
        "SEND": "send",
        "ANSWER": "answer"
      },
      russian: {

      }
    }
    
    const chatPage = $(document);
    const chat = $('.chat-wrapper');
    const unexpanded = $('.unexpanded-chat-window');
    const expanded = $('.expanded-chat-window');
    const loginBtn = $('.login-btn');
    const sendBtn = $('.send-btn');
    const chatBox = $('.chat');

    // function myFunction() {
    //   let audio = new Audio('https://www.youtube.com/watch?v=OsyUolZgINM');
    //   setTimeout(() => {
    //      audio.play();
    //   }, 1000);
    // }
    // myFunction();

    Constructor = () => {
      let x = navigator.language;
      console.log(x);
      setTimeout(() => {
        supportPopup();
      }, 2000);
    }

    supportPopup = () => {
      setTimeout(() => {
        $('.popup').addClass('hide');
        $('.popup').removeClass('show');
      }, 6000)
    }
    
    play = () => {
      $('.audio').get(0).play();
    }

    turnAudio = () => {
      if ($('.voice-icon').attr('src') === '../voice.png') {
        $('.voice-icon').attr('src', '../no-voice.png')
        $('.audio').attr('src', '///');
      } else {
        $('.voice-icon').attr('src', '../voice.png')
        $('.audio').attr('src', 'inflicted.mp3');
      }
    }

    LanguageChange = (language) => {
      if (language === 'GEO') {
        $('.unext-text').text("ონლაინ <br>კონსულტაცია");
        $('.header-text').text("ონლაინ კონსულტაცია");
        $('.login-btn').text("ჩატის დაწყება");
        $('.error').text("გთხოვთ შეიყვანოთ სახელი");
        $('.label').text("შეიყვანეთ სახელი");
        $('.message-input').attr("placeholder", "პასუხი");
        $('.send-btn').text("გაგზავნა");
      }
      if (language === 'ENG') {
        $('.unext-text').text("Online <br>consultation");
        $('.header-text').text("Online consultation");
        $('.login-btn').text("Open chat");
        $('.error').text("Please input name");
        $('.label').text("Input name");
        $('.message-input').attr("placeholder", "answer");
        $('.send-btn').text("Send");
      }
      if (language === 'RUS') {
        $('.unext-text').text("Онлайн <br>консультация");
        $('.header-text').text("Онлайн консультация");
        $('.login-btn').text("Открыть чат");
        $('.error').text("пожалуйста Введите имя");
        $('.label').text("Введите имя");
        $('.message-input').attr("placeholder", "Ответ");
        $('.send-btn').text("Отправить");
      }

      
    }

    
    // const audio = $('#audio');
    const audio = new Audio('./travis.mp3');
    console.log(audio);

    function playAudio() {
      console.log(audio);
      setTimeout(() => {
        audio.play();
      }, 1000)
      
      //await $('#audio')[0].play();
    }

    
    socketOn = (param) => {

      if (param === 'close') {
        socket.close();
        return;
      }

      socket = new WebSocket('ws://localhost:8082/')

      // When a connection is made
      socket.onopen = function() {
        console.log('Opened connection ');

        // send data to the server
        var json = JSON.stringify({ message: 'Hello ' });
        socket.send(json);
      }

      socket.onmessage = function(event) {
        console.log(event.data);
        ReceivedMessage(event.data.message);
      }
      
      // A connection could not be made
      socket.onerror = function(event) {
        console.log(event);
      }
      
      // A connection was closed
      socket.onclose = function(code, reason) {
        console.log(code, reason);
      }
    }

    closeChat = () => {
      socketOn('close');
      expanded.find('.login').removeClass('hide');
      expanded.find('.chat').removeClass('show');
      expanded.find('.chat').addClass('hide');
    }

    unexpanded.mouseenter(() => {
      $('.popup').removeClass('show');
      $('.popup').addClass('hide');
      unexpanded.find('.unext-text').removeClass('hide')
      unexpanded.find('.unext-text').addClass('show');
    }).mouseleave(function() {
      unexpanded.find('.unext-text').removeClass('show')
      unexpanded.find('.unext-text').addClass('hide')
    });

    ToggleChatWindow =  () => {
        chat.toggleClass('opened');
        unexpanded
        .addClass(
          chat.hasClass('opened')
            ? 'hide'
            : 'show'
          );
        unexpanded
          .removeClass(
            chat.hasClass('opened')
              ? 'show'
              : 'hide'
            );
        expanded
        .addClass(
            chat.hasClass('opened')
              ? 'show'
              : 'hide'
            );
        expanded
        .removeClass(
            chat.hasClass('opened')
              ? 'hide'
              : 'show'
            );
    }

    ShowChatInitiationDisplay = () => {
      expanded.find('.login').addClass('hide');
      expanded.find('.chat').removeClass('hide');
      expanded.find('.chat').addClass('show');
    }

    ShowAppropriateChatDisplay = () => {
      chat.room && chat.room.id
        ? ShowChatRoomDisplay()
        : ShowChatInitiationDisplay();
    },

    loginChat = () => {
      const name = $('.login-name')
        .val()
        .trim()
      if (name.length < 1) {
        $('.error').addClass('show');
      } else {
        ShowAppropriateChatDisplay();
        socketOn();
      }
      
      // axios.post('/session/load', { name, email }).then(response => {
      //   chat.userId = email;
      //   chat.room = response.data;
      //   helpers.ShowAppropriateChatDisplay();
      // });
    }

    ShowChatRoomDisplay = () => {
      expanded.find('.login').addClass('hide');
      expanded.find('.chat').addClass('show');

      // const chatManager = new Chatkit.ChatManager({
      //   userId: chat.userId,
      //   instanceLocator: PUSHER_INSTANCE_LOCATOR,
      //   tokenProvider: new Chatkit.TokenProvider({
      //     url: '/session/auth',
      //   }),
      // });

      // chatManager
      //   .connect()
      //   .then(currentUser => {
      //     chatInfo.currentUser = currentUser;

      //     currentUser
      //       .fetchMessages({
      //         roomId: chatInfo.room.id,
      //         direction: 'older',
      //       })
      //       .then(
      //         messages => {
      //           chatBody.find('.loader-wrapper').hide();
      //           chatBody.find('.input, .messages').show();

      //           messages.forEach(message => helpers.NewChatMessage(message));

      //           currentUser.subscribeToRoom({
      //             roomId: chat.room.id,
      //             hooks: {
      //               onMessage: message => helpers.NewChatMessage(message),
      //             },
      //           });
      //         },
      //         err => {
      //           console.error(err);
      //         }
      //       );
      //   })
      //   .catch(err => {
      //     console.log(err, 'Connection error');
      //   });
    }

    ReceivedMessage = (message) => {
      chatBox.find('.messages').find('.append').append(
        `<li class="received">
        <div class="received-message">
            <div class="list" >
                <img class="received-message-icon" src="../user.png" alt="">
                <p class="received-message-text">${message}</p>
            </div>
            
            <p class="person">გიორგი</p>
            
        </div>
      </li>`
      );
      let myDiv = $(".append").get(0);
      $(".append").scrollTop(myDiv.scrollHeight);
      play();
    }

    NewChatMessage = (message) => {
      chatBox.find('.messages').find('.append').append(
        `<li class="sent">
        <div class="sent-message">
            <p class="message-text">${message}</p>
        </div>
        </li>`
      );
      let myDiv = $(".append").get(0);
      $(".append").scrollTop(myDiv.scrollHeight);
      // if (chat.messages[message.id] === undefined) {
      //   const messageClass =
      //     message.sender.id !== chat.userId ? 'support' : 'user';

      //   // chatBox.find('.messages').append(
      //   //   `<li class="message ${messageClass}">
      //   //                 <div class="sender">${message.sender.name}</div>
      //   //                 <div class="message">${message}</div>
      //   //             </li>`
      //   // );

      //   chat.messages[message.id] = message;

      //   chatBody.scrollTop(chatBody[0].scrollHeight);
      // }
    }

    SendMessageToSupport = (evt) => {
      
      evt.preventDefault();

      const message = $('#newMessage')
        .val()
        .trim();
      NewChatMessage(message);
      var json = JSON.stringify(message);
      socket.send(json);

      // chat.currentUser.sendMessage(
      //   { text: message, roomId: chat.room.id },
      //   msgId => {
      //     console.log('Message added!');
      //   },
      //   error => {
      //     console.log(`Error adding message to ${chat.room.id}: ${error}`);
      //   }
      // );

      $('#newMessage').val('');
    }
    
    Constructor();
    unexpanded.on('click', ToggleChatWindow);
    $('.close-icon').on('click', ToggleChatWindow);
    $('.fold-icon').on('click', ToggleChatWindow);
    loginBtn.on('click', loginChat);
    sendBtn.on('click', SendMessageToSupport);
})();