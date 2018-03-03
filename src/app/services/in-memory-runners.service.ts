import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryRunnersService implements InMemoryDbService {
  createDb() {
    const runners = [
      { id: 1, name: 'Mark Herrera', age: 35 },
      { id: 2, name: 'Matthew Scicluna', age: 30 },
      { id: 3, name: 'Mark Axiaq', age: 27 },
      { id: 4, name: 'James Anastasi', age: 32 },
      { id: 5, name: 'Samantha Camilleri', age: 25 }
    ];
    return { runners };
  }
}
