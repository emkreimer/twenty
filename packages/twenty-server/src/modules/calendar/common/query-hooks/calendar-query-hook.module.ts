import { Module } from '@nestjs/common';

import { ObjectMetadataRepositoryModule } from 'src/engine/object-metadata-repository/object-metadata-repository.module';
import { WorkspaceMemberWorkspaceEntity } from 'src/modules/workspace-member/standard-objects/workspace-member.workspace-entity';
import { ConnectedAccountWorkspaceEntity } from 'src/modules/connected-account/standard-objects/connected-account.workspace-entity';
import { TwentyORMModule } from 'src/engine/twenty-orm/twenty-orm.module';
import { CalendarEventFindManyPreQueryHook } from 'src/modules/calendar/common/query-hooks/calendar-event/calendar-event-find-many.pre-query.hook';
import { CalendarEventFindOnePreQueryHook } from 'src/modules/calendar/common/query-hooks/calendar-event/calendar-event-find-one.pre-query-hook';
import { CanAccessCalendarEventService } from 'src/modules/calendar/common/query-hooks/calendar-event/services/can-access-calendar-event.service';
import { CalendarChannelEventAssociationWorkspaceEntity } from 'src/modules/calendar/common/standard-objects/calendar-channel-event-association.workspace-entity';
import { CalendarChannelWorkspaceEntity } from 'src/modules/calendar/common/standard-objects/calendar-channel.workspace-entity';

@Module({
  imports: [
    TwentyORMModule.forFeature([
      CalendarChannelEventAssociationWorkspaceEntity,
      CalendarChannelWorkspaceEntity,
    ]),
    ObjectMetadataRepositoryModule.forFeature([
      ConnectedAccountWorkspaceEntity,
      WorkspaceMemberWorkspaceEntity,
    ]),
  ],
  providers: [
    CanAccessCalendarEventService,
    CalendarEventFindOnePreQueryHook,
    CalendarEventFindManyPreQueryHook,
  ],
})
export class CalendarQueryHookModule {}
