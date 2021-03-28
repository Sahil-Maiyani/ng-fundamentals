import { Injectable } from '@angular/core';

declare let toastr;

@Injectable()
export class ToastrService {
    success(message: string, title?: string) {
        toastr.success(message, title, { 'positionClass': 'toast-bottom-right' })
    }
}