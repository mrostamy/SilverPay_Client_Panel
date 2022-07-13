import { Container } from 'inversify';
import { AlertService } from './services/alert_service';
import { AuthService } from './services/auth_service';
import { UserService } from './services/user_service';

export const container = new Container();


container.bind(UserService).to(UserService);
container.bind(AlertService).to(AlertService);
container.bind(AuthService).to(AuthService);