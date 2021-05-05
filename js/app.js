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

(function ($) {

  $(document).foundation();

})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcGkuanMiLCJfaW5pdC1mb3VuZGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0JChcIi5idXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coXCJjbGlja2VkXCIpXG5cdFx0bGV0IGZvcm0gPSAkKFwiI3NlYXJjaC1pbnB1dFwiKS52YWwoKTtcblx0XHRsZXQgaW5zdGFuY2UgPSAkKFwiI2luc3RhbmNlXCIpLnZhbCgpO1xuXHRcdGxldCBsYWJlbCA9ICQoXCIjbGFiZWxcIikudmFsKCk7IC8vaG93IGRvIEkgaGFuZGxlIGdldHRpbmcgdmFsdWUgZnJvbSB0aGlzIGZvcm1cblx0XHRsZXQgYnVja2V0X25hbWUgPSAkKFwiI2J1Y2tldFwiKS52YWwoKTtcblx0XHRsZXQgY29uZmlkZW5jZSA9ICQoXCIjY29uZmlkZW5jZVwiKS52YWwoKTtcblxuXHRcdGNvbnNvbGUubG9nKHtmb3JtLCBpbnN0YW5jZSwgbGFiZWwsIGJ1Y2tldF9uYW1lLCBjb25maWRlbmNlfSk7XG5cblx0XHRsZXQgdXJsID0gYGh0dHBzOi8vZGdvZTN1N3RmZS5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9nZXRMaW5rcz9kYXRhPSR7Zm9ybX0mbnVtX2ltYWdlcz0ke2luc3RhbmNlfSZsYWJlbD0ke2xhYmVsfSZidWNrZXRfbmFtZT0ke2J1Y2tldF9uYW1lfSZjb25maWRlbmNlPSR7Y29uZmlkZW5jZX1gXG5cblx0XHQkLmFqYXgoe1xuXHRcdFx0dXJsOiB1cmwsXG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0Y3Jvc3NEb21haW46IHRydWUsXG5cdFx0XHR0eXBlOiBcImpzb25cIixcblx0XHRcdGhlYWRlcnM6IHsnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJ2h0dHBzOi8vZGdvZTN1N3RmZS5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbSd9LFxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJyNzZWFyY2gtZm9ybScpLmhpZGUoKVxuXHRcdFx0XHQkKCcjc3VjY2Vzcy1tZXNzYWdlJykuc2hvdygpXG5cdFx0XHR9XG5cdFx0fSlcblx0fSk7XG59O1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgJChkb2N1bWVudCkuZm91bmRhdGlvbigpO1xuXG59KShqUXVlcnkpO1xuIl19
