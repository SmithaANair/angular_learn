import {Component} from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    private serverId: number = 1;
    private serverStatus = 'offline';

}