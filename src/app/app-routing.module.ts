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
import {NurseHomePageComponent} from './nurse-home-page/nurseHomePage.component';

import {ClinicAdministratorHomePageComponent} from './clinic-administrator-home-page/clinic-administrator-home-page.component';
// tslint:disable-next-line:max-line-length
import {ClinicAdministratorProfilePageComponent} from './clinic-administrator-home-page/clinic-administrator-profile-page/clinic-administrator-profile-page.component';
// tslint:disable-next-line:max-line-length
import {EditClinicAdministratorComponent} from './clinic-administrator-home-page/edit-clinic-administrator/edit-clinic-administrator.component';
import {RatingsComponent} from './patient-home-page/ratings/ratings.component';
import {EditPatientProfilePageComponent} from './patient-home-page/edit-patient-profile-page/edit-patient-profile-page.component';
import {ScheduleExamComponent} from './patient-home-page/schedule-exam/schedule-exam.component';
import {TypesOfMedicalExamComponent} from './clinic-administrator-home-page/types-of-medical-exam/types-of-medical-exam.component';
import {AddTypeOfMedicalExamComponent} from './clinic-administrator-home-page/add-type-of-medical-exam/add-type-of-medical-exam.component';
import {CcaHomePageComponent} from './clinic-center-administrator-home-page/ccaHomePage.component';
import {RecipesComponent} from './recipes/recipes.component';
import {ValidatedRecipesComponent} from './validated-recipes/validatedRecipes.component';
// tslint:disable-next-line:import-spacing
import {CcaProfilePageComponent} from
    './clinic-center-administrator-home-page/clinic-center-administrator-profile-page/ccaProfilePage.component';
import {AnnualLeaveAndAbsenceComponent} from './annual-leave-and-absence/annualLeaveAndAbsence.component';
import {VacationAndAbsenceViewComponent} from './clinic-administrator-home-page/vacation-and-absence-view/vacationAndAbsenceView.component';
import {AddDoctorComponent} from './clinic-administrator-home-page/add-doctor/add-doctor.component';
import {ShowAndRemoveDoctorsComponent} from './clinic-administrator-home-page/show-and-remove-doctors/show-and-remove-doctors.component';
import {EditMyClinicComponent} from './clinic-administrator-home-page/edit-my-clinic/edit-my-clinic.component';
import {ShowMyClinicComponent} from './clinic-administrator-home-page/show-my-clinic/show-my-clinic.component';
import {WorkCalendarComponent} from './work-calendar/workCalendar.component';
import {DiagnosisComponent} from './diagnosis/diagnosis.component';


const routes: Routes = [{path: 'register', component: RegistrationComponent},
  {path: 'medicament', component: MedicamentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrationRequests', component: RegistrationRequestComponent},
  {path: 'medicalStaffProfile', component: MedicalStaffProfileComponent},
  {path: 'newClinic', component: ClinicComponent},
  {path: 'activateUser/:id', component: ConfirmationMessageComponent},
  {path: 'nurseHomePage', component: NurseHomePageComponent},
  {path: 'ccaHomePage', component: CcaHomePageComponent},
  {path: 'ccaProfilePage', component: CcaProfilePageComponent},
  {path: 'allValidatedRecipes', component: ValidatedRecipesComponent},
  {path: 'allRecipes', component: RecipesComponent},
  {path: 'editMedicalStaff', component: EditMedicalStaffComponent},
  {path: 'registrationRequest/:id', component: MoreInfoRegisterRequestComponent},
  {path: 'patientHomePage', component: PatientHomePageComponent},
  {path: 'scheduleExam', component: ScheduleExamComponent},
  {path: 'typesOfMedicalExam', component: TypesOfMedicalExamComponent},
  {path: 'addTypeOfMedicalExam', component: AddTypeOfMedicalExamComponent},
  {path: 'patientProfilePage', component: ProfilePageComponent},
  {path: 'ratings', component: RatingsComponent},
  {path: 'allClinics', component: AllClinicsComponent},
  {path: 'editPatientProfilePage', component: EditPatientProfilePageComponent},
  {path: 'doctorHomePage', component: DoctorHomePageComponent},
  {path: 'doctorProfilePage', component: DoctorProfilePageComponent},
  {path: 'clinicAdministratorHomePage', component: ClinicAdministratorHomePageComponent},
  {path: 'clinicAdministratorProfilePage', component: ClinicAdministratorProfilePageComponent},
  {path: 'editClinicAdministrator', component: EditClinicAdministratorComponent},
  {path: 'vacation', component: AnnualLeaveAndAbsenceComponent},
  {path: 'vacationRequests', component: VacationAndAbsenceViewComponent},
  {path: 'absenceRequests', component: VacationAndAbsenceViewComponent},
  {path: 'addDoctor', component: AddDoctorComponent},
  {path: 'showAllDoctors', component: ShowAndRemoveDoctorsComponent},
  {path: 'myClinic', component: ShowMyClinicComponent},
  {path: 'editMyClinic', component: EditMyClinicComponent},
  {path: 'workCalendar', component: WorkCalendarComponent},
  {path: 'diagnosis', component: DiagnosisComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
