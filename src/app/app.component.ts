import { Component, OnInit } from '@angular/core';
import {UserService} from './service/user.service';
import {ApiService} from './service/api.service';
import {Router} from '@angular/router';
import {
  faClinicMedical, faClipboardList,
  faExternalLinkAlt,
  faHome, faNotesMedical, faPlusSquare, faPrescriptionBottleAlt,
  faSignInAlt,
  faSignOutAlt,
  faUserCircle,
  faUserPlus, faUsers, faUsersCog
} from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  role = null;
  faSignOut = faSignOutAlt;
  faRegister = faUserPlus;
  faLogin = faSignInAlt;
  faHome = faHome;
  faClinics = faClinicMedical;
  faPatients = faUsers;
  faPrescription = faPrescriptionBottleAlt;
  faUserCircle = faUserCircle;
  faRecord = faNotesMedical;
  faSchedule = faClipboardList;
  faStartExam = faExternalLinkAlt;
  faAdmins = faUsersCog;
  faMedicament = faPlusSquare;
  user: string;

  constructor( private apiService: ApiService, private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role');
  }

  logout() {
    this.userService.currentUser = null;
    sessionStorage.clear();
    this.router.navigate(['/login']);
    this.ngOnInit();
  }

  medicalRecord() {
    this.userService.getMyInfo();
    this.user = this.userService.currentUser.id;
    this.router.navigate(['/patientMedicalRecord/' + this.user]);
  }
}
