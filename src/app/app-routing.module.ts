import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {MedicamentComponent} from './medicament/medicament.component';
import {LoginComponent} from './login/login.component';
import {RegistrationRequestComponent} from './registration-request/registrationRequest.component';
import {MoreInfoRegisterRequestComponent} from './more-info/more-info-register-request/moreInfoRegisterRequest.component';
import {MedicalStaffProfileComponent} from './medical-staff-profile/medicalStaffProfile.component';
import {EditMedicalStaffComponent} from './edit-medical-staff/editMedicalStaff.component';
import {PatientHomePageComponent} from './patient-home-page/patientHomePage.component';
import {ProfilePageComponent} from './patient-home-page/profile-page/profile-page.component';
import {AllClinicsComponent} from './patient-home-page/all-clinics/all-clinics.component';
import {ClinicComponent} from './clinic/clinic.component';
import {ConfirmationMessageComponent} from './confirmation-message/confirmation-message.component';
import {DoctorHomePageComponent} from './doctor-home-page/doctor-home-page.component';
import {DoctorProfilePageComponent} from './doctor-home-page/doctor-profile-page/doctor-profile-page.component';
import {ClinicAdministratorHomePageComponent} from './clinic-administrator-home-page/clinic-administrator-home-page.component';
// tslint:disable-next-line:max-line-length
import {ClinicAdministratorProfilePageComponent} from './clinic-administrator-home-page/clinic-administrator-profile-page/clinic-administrator-profile-page.component';

const routes: Routes = [{path: 'register', component: RegistrationComponent},
  {path: 'medicament', component: MedicamentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrationRequests', component: RegistrationRequestComponent},
  {path: 'medicalStaffProfile', component: MedicalStaffProfileComponent},
  {path: 'newClinic', component: ClinicComponent},
  {path: 'activateUser/:id', component: ConfirmationMessageComponent},
  {path: 'editMedicalStaff', component: EditMedicalStaffComponent},
  {path: 'registrationRequest/:id', component: MoreInfoRegisterRequestComponent},
  {
    path: 'patientHomePage', component: PatientHomePageComponent, children: [{
      path: 'patientProfilePage', component: ProfilePageComponent
    }, {path: 'allClinics', component: AllClinicsComponent}]
  },
  {
    path: 'doctorHomePage', component: DoctorHomePageComponent, children: [{
      path: 'doctorProfilePage', component: DoctorProfilePageComponent
    },
    ]
  },
  {
    path: 'clinicAdministratorHomePage', component: ClinicAdministratorHomePageComponent, children: [{
      path: 'clinicAdministratorProfilePage', component: ClinicAdministratorProfilePageComponent
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
