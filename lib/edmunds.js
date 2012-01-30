/*
 * edmunds.js: Wrapper for the Edmunds API
 * Not affiliated with Edmunds
 * 
 * Apache 2.0 License 
 */
var edmunds = exports;

//
// Package information loading using pkginfo
// 
require('pkginfo')(module, 'version');

//
// Core methods
//
edmunds.createVehicleClient = require('./edmunds/vehicle').createClient;

