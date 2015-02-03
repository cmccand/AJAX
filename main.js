$(document).ready(function () {
  // stuff goes here
  page.init();
});


var page = {

  init: function () {
    page.initStyling();
    page.initEvents();
  },
  initStyling: function () {
    console.log('init styling');

  },
  initEvents: function () {
    console.log('init events');
  },
  config: {
    baseUrl: 'https://api.instagram.com/v1/',
    clientId: '548e6c673769427a8fdc5bf0d7f1c09f',
    // lat: '42.358430800000000000',
    // lng: '-71.0597732'
    q: 'cmccand14'

  },
  getUser: function () {
    $.ajax({
      url: page.config.baseUrl + 'users/search?' + 'q=' + page.config.q + '&client_id=' + page.config.clientId,
      type: 'GET',
      dataType: 'JSONP',
      success: function (data) {
        console.log(data);
        data.data.forEach(function(item, idx, arr) {
          $('.container').append('<img src="' + item.images.standard_resolution.url + '">');
        });

      },
      error: function (error) {
        console.log(error);
      }
    });
  },
  getPhotosByTag: function (term) {
    $.ajax({
      url: page.config.baseUrl + 'tags/' + term + '/media/recent?client_id=' + page.config.clientId,
      type: 'GET',
      dataType: 'JSONP',
      success: function (data) {
        console.log(page.config.baseUrl + 'tags/' + term + '/media/recent?client_id=' + page.config.clientId);
        console.log(data);
        data.data.forEach(function(item, idx, arr) {
          $('.container').append('<img src="' + item.images.standard_resolution.url + '">');
        });
      },
      error: function (error) {
        console.log(error);
      }
    });
  }
};
