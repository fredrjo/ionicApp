angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'The Wall',
    lastText: 'All the stuff you need to know',
    img: 'http://image.flaticon.com/icons/svg/230/230301.svg'
  }, {
    id: 1,
    name: 'Posts',
    lastText: 'Hey, it\'s me',
    img: 'http://image.flaticon.com/icons/svg/230/230370.svg'
  }, {
    id: 2,
    name: 'Alarms',
    lastText: 'Smells like something burn',
    img: 'http://image.flaticon.com/icons/svg/149/149844.svg'
  }, {
    id: 3,
    name: 'Alarms by building',
    lastText: '...',
    img: 'http://image.flaticon.com/icons/svg/149/149988.svg'
  }, {
    id: 4,
    name: 'Map',
    lastText: 'This is wicked good ice cream.',
    img: 'http://image.flaticon.com/icons/svg/149/149224.svg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
