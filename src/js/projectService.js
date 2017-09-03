myapp.factory('ProjectService', function($q,  $http){
	return {
		getDetails : function() {
			/*
			console.log(userDetails);
			var sendDetailsDefer = $q.defer();
			Restangular.one('/sendDetails').post('',userDetails).then(function(data) {
				if(data.returnCode == "SUCCESS") {
			sendDetailsDefer.resolve(data.data);
			} else {
				sendDetailsDefer.reject();
			}
		}, function(err){
			sendDetailsDefer.reject(err);
		});
	return clientEnquiryTaskRejectStatusDefer.promise;*/
	},

	getJSData : function(payload) {
		var data = {};
    var url = "https://api.github.com/search/";
    var promise = $http.get(url + 'repositories?q=' + payload, { cache: true }).then(function (response) {
    	data = response.data;
    });
    return data;
	},

        clientEnquiryTaskRejectStatus : function(payload){
            var clientEnquiryTaskRejectStatusDefer = $q.defer();
            Restangular.one('/clientTaskRejectStatus').post('',payload).then(function(data) {
	            if(data.returnCode == "SUCCESS") {
						clientEnquiryTaskRejectStatusDefer.resolve(data.data);
					} else {
						clientEnquiryTaskRejectStatusDefer.reject();
					}
				}, function(err){
					clientEnquiryTaskRejectStatusDefer.reject(err);
				});
			return clientEnquiryTaskRejectStatusDefer.promise;
    }
  }
});
