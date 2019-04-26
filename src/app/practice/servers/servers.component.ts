import { Component, OnInit } from '@angular/core';

@Component({
  /* selector: '[app-servers]', */
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private allowNewServer = false;
  private title:string = 'Hello';
  private serverCreationStatus = 'No server created';
  private serverName = 'Test Server';
  private servers = ['Test Server', 'Dev Server'];

  constructor() { }

  ngOnInit() {
    setTimeout( () => this.allowNewServer = true, 2000);
  }

  onCreateServer(event) {
    this.serverCreationStatus = 'Server created';
    this.servers.push(this.serverName);
    console.log(event);
  }

  onUpdateServer(event) {
    this.serverName = event.target.value
    console.log(event);
  }

}
