import { ApiProperty } from '@nestjs/swagger';
import {
  AuditLog,
  AvailableRefill,
  DetailedSimCard,
  Lines,
  SimCard,
  SimpleSimCard,
} from './line.dto';

export class GetLinesResponse {
  @ApiProperty({ example: 'success' })
  ack: string;

  @ApiProperty({ type: Lines })
  sim_cards: Lines;
}

export class GetLineDetailsResponse {
  @ApiProperty({ example: 'success' })
  ack: string;

  @ApiProperty({
    type: DetailedSimCard,
    description: 'Complete details of esim used to activate',
  })
  sim_card: DetailedSimCard;
}

export class GetLineAvailableRefillsResponse {
  @ApiProperty({ example: 'success' })
  ack: string;

  @ApiProperty({
    type: [AvailableRefill],
    description: 'List of available refills',
  })
  available_refills: AvailableRefill[];
}

export class CreateLineResponse {
  @ApiProperty({ example: 'success' })
  ack: string;

  @ApiProperty({ type: SimpleSimCard })
  sim_card: SimpleSimCard;

  @ApiProperty({ example: 'txn_3QGSuzDa8hPbCgP82ohcn81o' })
  transaction_id: string;
}

export class RefillLinesResponse {
  @ApiProperty({ example: 'success' })
  ack: string;

  @ApiProperty({ example: 356 })
  data_bundle_id: number;

  @ApiProperty({ example: 'AB_32321_42' })
  transaction_id: string;
}

class Data {
  @ApiProperty({ type: [AuditLog] })
  data: AuditLog[];
}

export class LineAuditLogsResponse {
  @ApiProperty({ example: 'success' })
  ack: string;

  @ApiProperty({ type: Data })
  audit_logs: Data;
}
