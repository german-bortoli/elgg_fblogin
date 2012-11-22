elgg.provide('elgg.fblogin');

elgg.fblogin.init = function() {
	elgg.fblogin.load_sdk();
}

/**
TODO: LAUNCH AN AJAX CALL TO REGISTER/LOGIN, THEN FORWARD
**/

elgg.fblogin.login = function() {
	 FB.login(function(response) {

        if (response.authResponse) {
            // connected
            FB.api('/me', function(response) {
       			elgg.system_message('Good to see you, ' + response.name + '.');
     		});
            console.log(response);
        } else {
            elgg.register_error('error de coneccion!');
        }
    }, {scope: 'publish_stream, offline_access, user_location, user_hometown, user_about_me, user_birthday , user_education_history, user_status, user_website, user_work_history'});
}

elgg.fblogin.load_sdk = function() {
		 // Additional JS functions here
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '452948744747366', // App ID
      //channelUrl : '//WWW.YOUR_DOMAIN.COM/channel.html', // Channel File TODO ADD THIS https://developers.facebook.com/docs/reference/javascript/#channel
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });

    // Additional init code here

    $('.fbLoginBtn').removeClass('hidden');

  };

  // Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));
}

elgg.register_hook_handler('init', 'system', elgg.fblogin.init);

//Add this in future to do share pages inside elgg
// FB.ui(
//   {
//    method: 'feed',
//    name: 'The Facebook SDK for Javascript',
//    caption: 'Bringing Facebook to the desktop and mobile web',
//    description: (
//       'A small JavaScript library that allows you to harness ' +
//       'the power of Facebook, bringing the user\'s identity, ' +
//       'social graph and distribution power to your site.'
//    ),
//    link: 'https://developers.facebook.com/docs/reference/javascript/',
//    picture: 'http://www.fbrell.com/public/f8.jpg'
//   },
//   function(response) {
//     if (response && response.post_id) {
//       alert('Post was published.');
//     } else {
//       alert('Post was not published.');
//     }
//   }
// );