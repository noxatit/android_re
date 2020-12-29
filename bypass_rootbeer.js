setImmediate(function() {
	console.log("[*] Starting script ...");

	Java.perform(function() {
		var RootCheck = Java.use('\u266b.\u1d64');

		RootCheck['₤'].implementation = function () {
			console.log("Skip root");
			return false;
		}

		RootCheck['θ'].overload().implementation = function () {
			console.log("Skip root");
			return false;
		}
	})

	console.log("[*] Finish script !");
})
