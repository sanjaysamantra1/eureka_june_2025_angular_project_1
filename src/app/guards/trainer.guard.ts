import { CanActivateFn } from '@angular/router';

export const trainerGuard: CanActivateFn = (route, state) => {
  const userRole: string = 'trainer';
  if (userRole === 'trainer') {
    return true;
  } else {
    alert('Sorry!!! you dont have Access to this page')
    return false;
  }
};
