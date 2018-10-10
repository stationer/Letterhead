import $ from 'jquery';
import hljs from 'highlight.js';

$(document).ready(function ($) {

	//Modal & Dropdowns
	var modal_btn = document.querySelectorAll('[data-modal]');
	var close_btn = document.querySelectorAll('[data-dismiss]');

	for (var i = 0; i < modal_btn.length; i++) {
		var thisBtn = modal_btn[i];
		thisBtn.addEventListener("click", function() {
			var modal = document.getElementById(this.dataset.modal);
			modal.style.display = "block";
            modal.classList.add("opened");
		}, false);
	}

	for (var i = 0; i < close_btn.length; i++) {
		var thisBtn = close_btn[i];
		thisBtn.addEventListener("click", function() {
			var modal = document.getElementById(this.dataset.dismiss);
			modal.style.display = "none";
            modal.classList.remove("opened");
		}, false);
	}

    window.onclick = function(event) {
        var modal_open = document.getElementsByClassName('c-modal opened')[0];
        if (event.target == modal_open) {
            modal_open.style.display = "none";
            modal_open.classList.remove("opened");
        }
    };

    class Dropdown {
        /**
         * Initialize the dropdown so that when clicked a dropdown will display
         */
        static initialize() {
            document.querySelectorAll('[data-toggle="dropdown').forEach(link => {
                link.addEventListener('click', function(event) {
                    this.closest('.c-dropdown').classList.toggle('show');
                    document.addEventListener('click', Dropdown.closeDropdown)
                })
            });
        }

        /**
         * Event handler for hiding a visible dropdown, and removing the associated event handler
         * @param event
         */
        static closeDropdown(event) {
            if (null == event.target.closest('.c-dropdown')) {
                document.removeEventListener('click', Dropdown.closeDropdown);
                document.querySelectorAll('.c-dropdown').forEach(dropdown => {
                    dropdown.classList.remove('show');
                })
            }
        }
    }

    Dropdown.initialize();

    class Tab {
        static initialize() {
            document.querySelectorAll('[data-tab]').forEach(link => {
                link.addEventListener('click', function(item) {
                    let tabpane = document.querySelector(this.getAttribute('data-tab'));

                    // Remove active classes from nav-tab items
                    this.closest('.c-tabs').querySelectorAll('li').forEach(tab => tab.classList.remove('active'));
                    this.closest('li').classList.add('active');

                    // Remove existing active classes from tab panes
                    tabpane.parentElement.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
                    tabpane.classList.add("active")
                });
            });
        }
    }

    Tab.initialize();


	//Feather Icons initialize
	feather.replace();

	// Navigation Dropdown
	var coll = document.querySelectorAll(".c-side-nav > li a");
	var i;

	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function(event) {
			this.classList.toggle("active");
			let content = this.nextElementSibling;
			if (content) {
				event.preventDefault();

				if (content.style.maxHeight) {
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
					if (this.closest("ul.sub")) {
						this.closest("ul.sub").style.maxHeight =
							this.closest("ul.sub").scrollHeight + content.scrollHeight + "px";
					}
				}
			}
		});
	}

    hljs.initHighlighting('html');
    var options_table = {
        valueNames: [ 'title', 'status' , 'date' ]
    };
    var userList = new List('users', options_table);

});