import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header-inventory',
  templateUrl: './header-inventory.component.html',
  styleUrls: ['./header-inventory.component.scss']
})
export class HeaderInventoryComponent implements OnInit {
	public collapse: boolean = false;
	constructor() { }

	ngOnInit(): void {
		// Hide submenus
		$('#body-row .collapse').collapse('hide'); 

		// Collapse/Expand icon
		document.getElementById('collapse-icon').classList.add('fa-times');
	}

	SidebarCollapse () {
		$('.menu-collapsed').toggleClass('d-none');
		$('.sidebar-submenu').toggleClass('d-none');
		$('.submenu-icon').toggleClass('d-none');
		$('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');

		// Treating d-flex/d-none on separators with title
		var SeparatorTitle = $('.sidebar-separator-title');
		if ( SeparatorTitle.hasClass('d-flex') ) SeparatorTitle.removeClass('d-flex');
		else SeparatorTitle.addClass('d-flex');
	

		// Collapse/Expand icon
		$('#collapse-icon').toggleClass('fa-bars');
		this.setImageCollapse();
	}

	setImageCollapse(){
		let image =  document.getElementById("logo");

		if(this.collapse) image.setAttribute("src", "assets/images/logo.svg");
		else image.setAttribute("src", "assets/images/logo-only.svg");

		if(this.collapse) this.collapse = false;
		else this.collapse = true;
	}

}
