import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const calEvents = [
      { id: 1, name: 'Birthday' },
      { id: 2, name: 'Party' },
      { id: 3, name: 'Diner with Friends' },
      { id: 4, name: 'Football' },
      { id: 5, name: 'Class' },
      { id: 6, name: 'Some super fun shit' }
    ];
    return {calEvents};
  }
}
