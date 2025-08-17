import { CanDeactivateFn } from '@angular/router';

export const canexitGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {
  if (component.hasChanges) {
    alert('please save your page before navigating to the next page')
    return false;
  } else {
    return true
  }
};
