<?php
/**
 * Elgg FB Login plugin
 *
 * @package ElggFbLogin
 */


elgg_register_event_handler('init', 'system', 'elgg_fblogin_init');

function elgg_fblogin_init() {

	$site_url = elgg_get_site_url();

	elgg_extend_view('forms/register', 'elgg_fblogin/login');
	elgg_extend_view('forms/login', 'elgg_fblogin/login');

	elgg_register_js("facebook_init", $site_url.'mod/elgg_fblogin/js/facebook_init.js');
}