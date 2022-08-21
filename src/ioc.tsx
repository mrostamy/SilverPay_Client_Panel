import { Container } from 'inversify';
import { EntrySerivce } from './services/accountant/entry_service';
import { FactorService } from './services/accountant/factor_service ';
import { AlertService } from './services/alert_service';
import { AuthService } from './services/auth/auth_service';
import { BlogGroupService } from './services/blog/blog_group_service';
import { BlogService } from './services/blog/blog_service ';
import { InventoryService } from './services/inventory_service';
import { GateService } from './services/panel/gate_service';
import { BankCardService } from './services/panel/user/bankCard_service';
import { DocumentService } from './services/panel/user/document_service';
import { EasyPayService } from './services/panel/user/easy_pay_service';
import { NotificationService } from './services/panel/user/notification_sevice';
import { TicketService } from './services/panel/user/ticket_service';
import { UserService } from './services/panel/user/user_service';
import { WalletService } from './services/panel/user/wallet_service';

export const container = new Container();


container.bind(UserService).to(UserService);
container.bind(AlertService).to(AlertService);
container.bind(AuthService).to(AuthService);
container.bind(NotificationService).to(NotificationService);
container.bind(BankCardService).to(BankCardService);
container.bind(DocumentService).to(DocumentService);
container.bind(WalletService).to(WalletService);
container.bind(TicketService).to(TicketService);
container.bind(GateService).to(GateService);
container.bind(EasyPayService).to(EasyPayService);
container.bind(BlogGroupService).to(BlogGroupService);
container.bind(BlogService).to(BlogService);
container.bind(InventoryService).to(InventoryService);
container.bind(EntrySerivce).to(EntrySerivce);
container.bind(FactorService).to(FactorService);