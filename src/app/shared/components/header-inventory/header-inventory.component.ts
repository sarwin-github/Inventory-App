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
		//$('#body-row .collapse').collapse('hide'); 

		// Collapse/Expand icon
		document.getElementById('collapse-icon').classList.add('fa-times');
	}

	SidebarCollapse () {
		// set image on collapse
		this.setImageCollapse();

		// set text collapse
		this.setTextIconCollapse();
	}

	setTextIconCollapse(){
		document.getElementsByClassName('menu-collapsed')[0].classList.toggle('d-none');
		document.getElementsByClassName('sidebar-submenu')[0].classList.toggle('d-none');

		let sidebarContainer = document.getElementById('sidebar-container');
		let collapseIcon = document.getElementById('collapse-icon');

		sidebarContainer.classList.toggle('sidebar-expanded');
		sidebarContainer.classList.toggle('sidebar-collapsed');

		// Collapse/Expand icon
		collapseIcon.classList.toggle('fa-bars');
	}

	setImageCollapse(){
		let image =  document.getElementById("logo");

		if(this.collapse) image.setAttribute("src", "assets/images/logo.svg");
		else image.setAttribute("src", "assets/images/logo-only.svg");

		if(this.collapse) this.collapse = false;
		else this.collapse = true;
	}

}
