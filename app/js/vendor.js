/* This files contains references to the vendor libraries
we are using in this project. This is used by webpack in
the production build only. A separate bundle for vendor
code is useful since it's unlikelly to change as often as
the application's code. So all the libraries we references
here will be written to vendor.js so they can be cached
until one of them changes. They only have to download
vendor.js when a vendor library changes with should be
less frequent. Any files that aren't reference here will
be bundle into main.js for the production build.
 */


/* eslint-disable no-unused-vars */
import fetch from 'whatwg-fetch';
