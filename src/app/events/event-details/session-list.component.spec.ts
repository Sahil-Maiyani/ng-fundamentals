import { ISession } from '../shared/events.model';
import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockAuthService, mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });
  describe('ngOnChanges', () => {
    it('should filter the sessions correctly', () => {
      component.sessions = <ISession[]>[
        { name: 'session1', level: 'intermediate' },
        { name: 'session2', level: 'beginner' },
        { name: 'session3', level: 'intermediate' },
      ];
      component.sortBy = 'name';
      component.filterBy = 'intermediate';
      component.evendId = 4;

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
    });
  });
});
