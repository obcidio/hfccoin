import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailValidator} from '../../shared/form-validator';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isShowNav: boolean;
  isFixed: boolean = false;
  isShowFirst: boolean = false;
  isShow: boolean = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z]{1,}[A-Za-z ]*$')]],
      email: ['', [Validators.required, emailValidator(/\S+@\S+\.\S+/)]],
    });

    (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const scrollTop = window.scrollY;
    let winHeight = window.innerHeight;
    if (scrollTop > winHeight) {
      this.isFixed = true;
    } else if (scrollTop == 0) {
      this.isFixed = false;
    }

    const nav = document.getElementById('nav');
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
      nav.classList.add('nav-colored');
    } else {
      nav.classList.remove('nav-colored');
    }
  }

  showModalFirst(): void {
    this.isShowFirst = true;
  }
  showModal(): void {
    this.isShow = true;
  }

  closeModal(): void {
    this.isShowFirst = false;
    this.isShow = false;
  }

  closeMobNav(): void {
    this.isShowNav = false;
  }

  showNavFunc(): void {
    this.isShowNav = !this.isShowNav;
    if (this.isShowNav == true) {
      this.isFixed = true;
    }
  }
}
