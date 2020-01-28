(function() {

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
    LanguageChange();

    
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
    const socket = new WebSocket('ws://localhost:8082/');

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

    



    unexpanded.mouseenter(function() {
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