import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/user/services/auth.service';
import { ISession } from '../shared/events.model';
import { VoterService } from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() evendId: number;
  visibleSessions: ISession[] = [];

  constructor(
    private voterService: VoterService,
    public authService: AuthService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.sessions) return;
    this.filterSessions(this.filterBy);

    this.sortBy === 'name'
      ? this.visibleSessions.sort(sortByNameAsc)
      : this.visibleSessions.sort(sortByDesc);
  }
  filterSessions(filterBy: string) {
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter((s) => {
        return s.level.toLocaleLowerCase() === filterBy;
      });
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(
        this.evendId,
        session,
        this.authService.currentUser.userName
      );
    } else {
      this.voterService.addVoter(
        this.evendId,
        session,
        this.authService.currentUser.userName
      );
    }

    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByDesc);
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(
      session,
      this.authService.currentUser.userName
    );
  }
}

function sortByNameAsc(s1: ISession, s2: ISession): number {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}

function sortByDesc(s1: ISession, s2: ISession): number {
  return s2.voters.length - s1.voters.length;
}
