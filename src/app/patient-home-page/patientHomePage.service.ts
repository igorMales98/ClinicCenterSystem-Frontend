import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {RegistrationRequest} from '../model/registrationRequest';
import {Clinic} from '../model/clinic';
import {any} from 'codelyzer/util/function';
import {ExaminationType} from '../model/examinationType';
import {UserMapperTwo} from '../model/userMapperTwo';
import {PatientHomePageComponent} from './patientHomePage.component';


@Injectable()
export class PatientHomePageService {

  private readonly url: string;
  private loggedUserId: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/auth/medicalStaffProfile/';
  }

  public setLoggedUser(value: string) {
    this.loggedUserId = value;
  }

  public getById(id: number): Observable<User> {
    return this.http.get<User>(this.url + id);
  }

  getAllClinics(): Observable<Clinic[]> {
    return this.http.get<Clinic[]>('http://localhost:8080/auth/getAllClinics');
  }

  getDoctors() {
    return this.http.get<User[]>('http://localhost:8080/auth/getDoctors');
  }

  rateClinic(id: string, selectedOption: string) {
    return this.http.put<any>('http://localhost:8080/auth/rateClinic/' + id + '/' + selectedOption, any).subscribe();
  }

  rateDoctor(id2: string, selectedOption2: string) {
    return this.http.put<any>('http://localhost:8080/auth/rateDoctor/' + id2 + '/' + selectedOption2, any).subscribe();
  }


  getAllTypes() {
    return this.http.get<ExaminationType[]>('http://localhost:8080/getAllMedicalExaminationTypes');
  }

  getSearchedClinics(selectedOption: string) {
    return this.http.get<Clinic[]>('http://localhost:8080/auth/getSearchedClinics/' + selectedOption);
  }

  getSearchedDoctors(selectedOption: string, id: string) {
    return this.http.get<UserMapperTwo[]>('http://localhost:8080/auth/getSearchedDoctors/' + selectedOption + '/' + id);
  }

  sendRequest(selectedType: string, selectedDate: string, selectedClinicId: string, selectedDoctorId: string) {
    return this.http.put<any>('http://localhost:8080/auth/sendMedicalExamRequest/' + selectedType + '/' + selectedDate +
      '/' + selectedClinicId + '/' + selectedDoctorId, any).subscribe();
  }
}
