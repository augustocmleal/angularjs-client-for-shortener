(function() {
	'use strict';
	angular.module("module.main")
	.directive("headerTemplate", [HeaderTemplate]);

	function HeaderTemplate() {
		return {
			template :
					"<header>"+
						"<nav class='container-fluid header_contato'>"+
							"<div class='header_contato_bloco'><span class='glyphicon glyphicon-map-marker'></span> Niterói - Rio de Janeiro - Brasil</div>  "+
							"<div class='header_contato_bloco'><span class='glyphicon glyphicon-earphone'></span> (21) 98174-1109</div> "+
							"<div class='header_contato_bloco'><span class='glyphicon glyphicon-envelope'></span> contato@augustoleal.com.br</div>"+
							"<div class='header_contato_bloco'> "+
								"<div class='header_contato_bloco'> "+
								"<a href='https://api.whatsapp.com/send?phone=5521981741109' target='_blank'> <div class='header_social whatsapp-icon'> <i class='fa fa-whatsapp' aria-hidden='true'></i> Whatsapp</div></a>"+	
								"<a href='https://www.linkedin.com/in/augusto-magalh%C3%A3es-14928617/' target='_blank'> <div class='header_social linkedin-icon'> <i class='fa fa-linkedin' aria-hidden='true'></i> Linkedin</div></a>"+
								"<a href='https://www.facebook.com/augusto.magalhaes.leal' target='_blank'> <div class='header_social facebook-icon'> <i class='fa fa-facebook' aria-hidden='true'></i> Facebook</div></a>"+
								"<a href='https://www.instagram.com/augustocmleal/' target='_blank'> <div class='header_social instagram-icon'>  <i class='fa fa-instagram' aria-hidden='true'></i> Instagram</div></a>"+
							"</div>"+
						"</nav>"+
					"</header>"
		};
	};
})();