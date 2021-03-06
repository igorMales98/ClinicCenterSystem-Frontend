import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';
import {Room} from '../../model/room';
import {OperationRequest} from '../../model/operationRequest';
import {any} from 'codelyzer/util/function';
import {Observable} from 'rxjs';

@Injectable()
export class ScheduleOperationService {

  constructor(private http: HttpClient) {

  }

  getOperationRequest(requestId: string) {
    return this.http.get<OperationRequest>('http://localhost:8080/getMedicalOperationById/' + requestId);
  }

  getAvailableRooms(id: string, date: string, term: string) {
    return this.http.get<Room[]>('http://localhost:8080/getClinicOperationRooms/' + id + '/' + date + '/' + term);
  }

  getAvailableTermsForDoctor(id: string, date: string) {
    return this.http.get<string[]>('http://localhost:8080/getAvailableTermsForDoctor/' + id + '/' + date);
  }

  saveOperation(operationRequest: OperationRequest, selectedRoom: string, date: string,
                requestId: string, selectedTerm: string, selectedDoctors: number[]) {
    return this.http.post<OperationRequest>('http://localhost:8080/saveOperation/' + selectedRoom + '/' + date +
      '/'  + requestId + '/' + selectedTerm + '/' + selectedDoctors, operationRequest).subscribe();
  }

  getAvailableDoctorsForOperation(date: string, term: string, clinicId: string, doctorId: string) {
    return this.http.get<Doctor[]>('http://localhost:8080/getAvailableDoctorsForOperation/' + date + '/' + term +
      '/' + clinicId + '/' + doctorId);
  }

  public searchRoom(selectedName: string, selectedNumber: number): Observable<Room[]> {
    return this.http.get<Room[]>('http://localhost:8080/operationRooms/search?name=' + selectedName + '&number=' + selectedNumber);
  }
}

interface Doctor {
  id: number;
  firstName: string;
}
