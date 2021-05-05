window.onload = function () {
	$(".button").on("click", function () {
		// console.log("clicked")
		let form = $("#search-input").val();
		let instance = $("#instance").val();
		let label = $("#label").val(); //how do I handle getting value from this form
		let bucket_name = $("#bucket").val();
		let confidence = $("#confidence").val();

		console.log({form, instance, label, bucket_name, confidence});

		let url = `https://dgoe3u7tfe.execute-api.us-east-1.amazonaws.com/getLinks?data=${form}&num_images=${instance}&label=${label}&bucket_name=${bucket_name}&confidence=${confidence}`

		$.ajax({
			url: url,
			method: "POST",
			crossDomain: true,
			type: "json",
			headers: {'Access-Control-Allow-Origin': 'https://dgoe3u7tfe.execute-api.us-east-1.amazonaws.com'},
			success: function() {
				$('#search-form').hide()
				$('#success-message').show()
			}
		})
	});
};
