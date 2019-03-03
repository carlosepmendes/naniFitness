import { Subscription } from 'rxjs';
import { AuthService } from './../../auth/auth-service.service';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  sub: Subscription;
  authStatus: boolean;
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.sub = this.authService.authChange.subscribe( function(authStatus) { this.authStatus = authStatus; } );
  }

  onClose() {
    this.closeSidenav.emit();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
