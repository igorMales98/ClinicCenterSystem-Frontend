import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable()
export class AllPatientsService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/allPatients';
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }


  searchPatient(selectedFirstName: string, selectedLastName: string, selectedSsn: number) {
    if (selectedFirstName === undefined || selectedFirstName === null) {
      selectedFirstName = '';
    }
    if (selectedLastName === undefined || selectedLastName === null) {
      selectedLastName = '';
    }
    if (selectedSsn === undefined || selectedSsn === null) {
      return this.http.get<User[]>(this.url + '/search1?firstName=' + selectedFirstName + '&lastName=' +
        selectedLastName);
    } else {
      return this.http.get<User[]>(this.url + '/search2?firstName=' + selectedFirstName + '&lastName=' +
        selectedLastName + '&ssn=' + selectedSsn);
    }
  }

}