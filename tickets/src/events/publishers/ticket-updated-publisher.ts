import { Publisher, Subjects, TicketUpdatedEvent } from '@acticketstest/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
  }
