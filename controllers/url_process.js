var connectDB = require('../config/database');
var con = connectDB.config();
var HashMap = require('hashmap');
var webshot = require("webshot");
var md5 = require('md5');
const fs = require('fs');
const dir =  './public/images/';
var express = require('express');
var app = express();
var metaInspector = require('node-metainspector');
//Image Captures Option
var options = {
	streamType : "png",
	windowSize: {
		width: 1024,
		height: 786
	},
	shotSize: {
		width: "all",
		height: "1500"
	}
};
//Image Captures Option End

exports.url = function(req, res){
	var submit_url = req.body.url;
	var submit_category = req.body.category;
	var domainName = null;
	var pos = null;
	var sub = null;
	var givenUrl = null;
	var numOfComment = 0;
	var tmpNumOfComment = 0;
	var tmpDomain = null;
	var list = []; //PUST
	var map = new HashMap();
	var newMap = new HashMap();
	var data = {};
	var fsName = [];

	console.log(submit_category);
	if(submit_category==-1){
		res.end('<h1>Select a Category</h1><a href="/dashboard">Go Back</a>');
		return console.log("Select A category");
	}

	if(submit_url.includes('www.')){
		sub = 'www.';
		pos = submit_url.indexOf(sub)+sub.length;
		givenUrl = submit_url.substring(pos);
	}
	else if (submit_url.includes('http://')) {
		sub = 'http://';
		pos = submit_url.indexOf(sub)+sub.length;
		givenUrl = submit_url.substring(pos);
	}
	else if(submit_url.includes('https://')){
		sub = 'https://';
		pos = submit_url.indexOf(sub)+sub.length;
		givenUrl = submit_url.substring(pos);
	}
	else{
		sub = '';
		pos = 1;
		givenUrl = submit_url;
	}

	if(givenUrl.includes('facebook.com') || givenUrl.includes('fb.com')){
		res.redirect('/dashboard');
		return console.log("Not Possible");
	}

	console.log('Position of '+sub+' = '+pos);

	con.query("SELECT * FROM comments", function(err, result, feild){
		if(err)console.log(err);
		var i=0;
		while(i<result.length){
			domainName = result[i].domain;
			if(domainName.includes(givenUrl)){
				list.push(domainName.substring(givenUrl+1));
			}

			i++;
		}
		console.log("LIST : "+list.length);

		if(list.length>0){
			for(var i=0;i<list.length;i++){
				var str = list[i];
				if (map.get(str)) {
					// System.out.println(sdomai.get(st));
					var key = map.get(str);
					map.set(str, key + 1);
				} else {
					map.set(str, 1);
				}
			}

			// console.log("Entry SET: "+map.entries().length);

			for(var i=0;i<map.entries().length;i++){
				var key = map.keys();
				var value = map.values();
				if(numOfComment<value[i]){
					numOfComment = value[i];
					tmpDomain = key[i];
				}
			}

			// console.log("Domain: "+tmpDomain+" , Comment: "+ numOfComment);

			con.query("SELECT * FROM domain WHERE domain=?", tmpDomain, function(err, result, field){
				if(err) return console.log('Error Found: '+err);
				// console.log(result.length);
				if(result.length>0){
					console.log("This link is already Exists. LENGTH: "+result.length);
				}else {
					var urlTitle;
					client = new metaInspector(tmpDomain, {timeout: 10000});
					client.on('fetch', function(){
						urlTitle = client.title;
						console.log(urlTitle);
						con.query("INSERT INTO `domain` (`domain`, `comment_counter`, `imageId`, `urlTitle`, `category`) VALUES ('"+tmpDomain+"', '"+numOfComment+"', '"+md5(tmpDomain)+"', '"+urlTitle+"', '"+submit_category+"')", function(err, result){
							if(err) return console.log("Cannot Insert");
							console.log(tmpDomain+' Inserted...');
						});
					});
					client.on("error", function(err){
					    console.log(err);
					});
					client.fetch();
				}
			})

			//=========================Image Processing=================================
			var filename = '';
			var files = fs.readdirSync(dir);
			for(var i in files){
					filename = files[i].substring(0, files[i].indexOf('.png'));
					if(filename===md5(tmpDomain)) {
						break;
					}
			}

			if(filename!=md5(tmpDomain)) {
				webshot(tmpDomain, dir+"/"+md5(tmpDomain)+".png", options, (err)=>{
					if(err){
						return console.log(err);
					}
					console.log("Image Successfull Created");
				});
			}
		//=========================/Image Processing=================================
		}else {
				// console.log('length: 0');
				// var uid = req.user;
				// con.query("INSERT INTO comments(`domain`, `userId`) VALUES ('"+submit_url+"', "+uid+")", function(err, res){
				// 	if(err)throw err;
				// 	console.log('Succcessfully Insert');
				// });
			console.log("File Not Found... :(");
		}
	});
	res.redirect('/dashboard');
};
