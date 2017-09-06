var controller = function(app, con){
	// var passport = require('passport');
	var passport = require('passport');//Call The Login Routes
	var md5 = require('md5');
	var ArrayList = require('ArrayList');
	var url = require('../controllers/url_process');//Call The Login Routes
	var HashMap = require('HashMap');
	var map = new HashMap();
	var domainList = [];
	var categories = [];
	var commentList = [];
	var imageList = [];
	var newDomainList = [];
	var commentId = [];
	var newComment = [];
	var newUserId = [];
	var urlTitleList = [];
	var newUsername = [];
	var newPhoto = [];
	//Route Homepage
	app.get('/', function(req, res){
		var sql = "SELECT comments.comment AS comment, domain.domain AS domain, domain.imageId as imageId, comment_counter as cCount, urlTitle as url, category as cat FROM comments LEFT JOIN domain ON comments.domain = domain.domain";
		con.query(sql, function(err, result){
			if(err) return console.log(err);

			for(i=result.length-1;i>=0;i--){
				if(result[i].domain==null) continue;
				commentId.push(result[i].id);
				commentList.push(result[i].comment);
				if(domainList.includes(result[i].domain)){
					continue;
				}else {
					imageList.push(result[i].imageId);
					domainList.push(result[i].domain);
					urlTitleList.push(result[i].url);
					if(categories.includes(result[i].domain)) continue;
					categories.push(result[i].cat);
				}
			}
			if(domainList.length==0){
				if(req.isAuthenticated()){
					res.render('index',{
						sighInBtn: 'Dashboard',
						authTitle: 'Homepage',
						isAuth: req.isAuthenticated(),
						domains: null,
						images:null
					});
				}else{
					res.render('index',{
						sighInBtn: 'Sign in',
						authTitle: 'Homepage',
						isAuth: req.isAuthenticated(),
						domains: null,
						images:null
					});
				}
			}else{
				domainList.forEach(function(domain){
					con.query("SELECT comments.userId as userId, comments.comment as comment, comments.domain as domain, user.givenName as name, user.photo as uPhoto, user.id as uid FROM comments LEFT JOIN user ON comments.userId=user.id WHERE domain=?",domain, function(err, row){
						// console.log(row);
						if(err)return console.log(err);
						var arraylist = new ArrayList();
						var domains = new ArrayList();
						var userId = new ArrayList();
						var username = new ArrayList();
						var photo = new ArrayList();
						for(var j=0;j<row.length;j++){
							userId.push(row[j].userId);
							arraylist.push(row[j].comment);
							username.push(row[j].name);
							photo.push(row[j].uPhoto);
							// if(domains.includes(row[j].domain)) continue;
							// domains.push(row[j].domain);
						}
						newUserId.push(userId);
						newComment.push(arraylist);
						newUsername.push(username);
						newPhoto.push(photo);
						if(domain==domainList[domainList.length-1]){///Already dcreament above
							if(req.isAuthenticated()){
								res.render('index',{
									sighInBtn: 'Dashboard',
									authTitle: 'Homepage',
									isAuth: req.isAuthenticated(),
									domains: domainList,
									images: imageList,
									comments: newComment,
									users: newUserId,
									urlTitle: urlTitleList,
									users: newUsername,
									photos: newPhoto,
									categories: categories
								});
							}else{
								res.render('index',{
									sighInBtn: 'Sigh in',
									authTitle: 'Homepage',
									isAuth: req.isAuthenticated(),
									domains: domainList,
									images: imageList,
									comments: newComment,
									users: newUserId,
									urlTitle: urlTitleList,
									users: newUsername,
									photos: newPhoto,
									categories: categories
								});
							}
						}
					});
				});
			}
		});
	});
	//Route Login Page
	app.get('/login', function(req, res){
	  if(req.isAuthenticated()){
	  	res.redirect('dashboard');
	  }
	  else{
	  	res.render('login', {uid: req.user,sighInBtn: 'Sign in', authTitle: 'Sign in', isAuth: true, message: ''});
	  }
	});

	// Session Start and Route Login Page
	app.post('/login', passport.authenticate(
		'local', {
			successRedirect: '/dashboard',
			failureRedirect: '/login'
		})
	);
	//Session END
	app.get('/logout', function(req, res){
	  req.logout();
	  req.session.destroy();
	  res.redirect('/');
	});
	//Route Dashboard
	app.get('/dashboard', function(req, res){
	  if(req.isAuthenticated()){

	  	res.render('dashboard', {uid: req.user, sighInBtn: 'Dashboard', authTitle: 'Dashboard', isAuth: req.isAuthenticated()});
	  }
	  else{
	  	res.redirect('/login');
	  }
	});
	app.post('/dashboard', url.url);
	//Route View
	app.get('/dashboard/view', function(req, res){
	  if(req.isAuthenticated()){
	  	res.render('view', {uid: req.user, sighInBtn: 'Dashboard', authTitle: 'View', isAuth: req.isAuthenticated()});
	  }
	  else{
	  	res.redirect('/login');
	  }
	});
	//Route Account
	app.get('/dashboard/account', function(req, res){
	  if(req.isAuthenticated()){
	  	res.render('account', {sighInBtn: 'Dashboard', authTitle: 'Account', isAuth: req.isAuthenticated()});
	  }
	  else{
	  	res.redirect('/login');
	  }
	});
	app.get('*', function(req, res){
		res.render('404', {authTitle: 'Error'});
	});
};
module.exports = controller;
