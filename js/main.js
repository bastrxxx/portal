// Example starter JavaScript for disabling form submissions if there are invalid fields
		(function () {
		  'use strict'

		  // Fetch all the forms we want to apply custom Bootstrap validation styles to
		  var forms = document.querySelectorAll('.needs-validation')

		  // Loop over them and prevent submission
		  Array.prototype.slice.call(forms)
			.forEach(function (form) {
			  form.addEventListener('submit', function (event) {
				if (!form.checkValidity()) {
				  event.preventDefault()
				  event.stopPropagation()
				}

				form.classList.add('was-validated')
			  }, false)
			})
		})()
		
		const togglePassword = document.querySelector('#togglePassword');
		const togglePassword2 = document.querySelector('#togglePassword2');
		const password = document.querySelector('#password');
		const password2 = document.querySelector('#password2');
		togglePassword.addEventListener('click', function (e) {
			// toggle the type attribute
			const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
			password.setAttribute('type', type);
			// toggle the eye / eye slash icon
			this.classList.toggle('bi-eye');
		});
		togglePassword2.addEventListener('click', function (e) {
			// toggle the type attribute
			const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
			password2.setAttribute('type', type);
			// toggle the eye / eye slash icon
			this.classList.toggle('bi-eye');
		});
		
		
		// create an Observer instance
