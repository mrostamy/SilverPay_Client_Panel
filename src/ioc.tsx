import { Container } from 'inversify';
import { AlertService } from './services/alert_service';
import { AuthService } from './services/auth/auth_service';
import { NotificationService } from './services/notification_sevice';
import { UserService } from './services/panel/user/user_service';

export const container = new Container();


container.bind(UserService).to(UserService);
container.bind(AlertService).to(AlertService);
container.bind(AuthService).to(AuthService);
container.bind(NotificationService).to(NotificationService);