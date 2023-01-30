<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'i6992174_wp2' );

/** Database username */
define( 'DB_USER', 'i6992174_wp2' );

/** Database password */
define( 'DB_PASSWORD', 'M.ThWjJcGcFq12UNzdG72' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '3WMkHncUOCo5QWvkPKLZKtVwhxiJqxt4Tb9sfMAPNyYsKIkdcza7Mwd3Xh7yazsg');
define('SECURE_AUTH_KEY',  'h102DJZet0pzr5TVjNRSY1SvamrtN9CdmQCypkOoigupFmprFZM7Lz7Erz27UgLQ');
define('LOGGED_IN_KEY',    'Z6mfMP2mnHpMWzNavrUHh6bsx3GU6rKUI812Y5u1JnwtnIg9DYpl3gle8mU5uY1G');
define('NONCE_KEY',        'Fzv0GX1MZDh3dI87wD0deYfyNzOJlXmAaWPELiPPvXqfbw0e5La6yQlI9uC63oiG');
define('AUTH_SALT',        '5jRvgoD9cxezdm5sbgLzoJJa9Ki2IoBHSf8oI4WIdyO3A1rl75LGA9IkPiAmviXh');
define('SECURE_AUTH_SALT', 'NvN7PbHrSCjFrQJKwXaxfMh3zAq054UEEm3mMhnYBQZQcI25SAy7IyuR1aVuP2Px');
define('LOGGED_IN_SALT',   'HzZm41PS3lMmLdwR1hsyTKo8h7yVj7La5bbazJZrhhalpMgWRz9mwtPTr7o0uOVh');
define('NONCE_SALT',       'QJOtFJCWRFFrxTZfkGD1BZ0Pk6EntzetonryLSVlAYQ8B5xGaXVxmBWm06J7Litm');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');
define('FS_CHMOD_DIR',0755);
define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
