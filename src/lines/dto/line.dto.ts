import { ApiProperty } from '@nestjs/swagger';

class DataBundle {
  @ApiProperty({ example: 42 })
  id: number;

  @ApiProperty({ example: 'Active' })
  status: string;

  @ApiProperty({ example: 102400 })
  allowed_usage_kb: number;

  @ApiProperty({ example: 51200 })
  active_kb: number;

  @ApiProperty({ example: 51200 })
  remaining_usage_kb: number;

  @ApiProperty({ example: 10 })
  validity: number;

  @ApiProperty({
    example: '2022-08-11 11:57:27',
    required: false,
    nullable: true,
  })
  assigned_at: string;

  @ApiProperty({
    example: '2022-08-11 12:07:00',
    required: false,
    nullable: true,
  })
  activated_at: string;

  @ApiProperty({ example: null, required: false, nullable: true })
  terminated_at: string | null;

  @ApiProperty({ example: '2022-08-21 11:57:27', required: false })
  expire_at: string;
}

export class SimCard {
  @ApiProperty({ description: 'The ICCID of the SIM card' })
  iccid: string;

  @ApiProperty({ description: 'The status of the SIM card' })
  status: string;

  @ApiProperty({
    description: 'Notes regarding the SIM card',
    required: false,
    nullable: true,
  })
  notes: string | null;

  @ApiProperty({
    description: 'Deactivation date',
    required: false,
    nullable: true,
  })
  deactivation_date: string | null;

  @ApiProperty({
    description: 'Expiration date',
    required: false,
    nullable: true,
  })
  expired_at: string | null;

  @ApiProperty({ description: 'Total allowed usage in kilobytes' })
  allowed_usage_kb: number;

  @ApiProperty({ description: 'Remaining usage in kilobytes' })
  remaining_usage_kb: number;

  @ApiProperty({ description: 'Length of time the sim card is available' })
  remaining_days: number;

  @ApiProperty({ description: 'Bundle' })
  bundle: string;

  @ApiProperty({ type: [DataBundle], description: 'List of data bundles' })
  data_bundles: DataBundle[];
}

export class SimpleSimCard {
  @ApiProperty({ example: '8965972579000123456' })
  iccid: string;

  @ApiProperty({ example: 'LPA:1$consumer.ppp.local$TN20210805541629D9E05F37' })
  lpa_code: string;
}

export class Lines {
  @ApiProperty({ example: 1 })
  from: number;

  @ApiProperty({ example: 2 })
  to: number;

  @ApiProperty({ example: 1 })
  last_page: number;

  @ApiProperty({ example: 25 })
  per_page: number;

  @ApiProperty({ example: 2 })
  total: number;

  @ApiProperty({ example: 1 })
  current_page: number;

  @ApiProperty({ type: [SimCard], description: 'List of sim Cards' })
  items: SimCard[];
}

export class CreateLineDto {
  @ApiProperty({ example: 1024 })
  refill_mb: number;

  @ApiProperty({ example: 7, nullable: true })
  refill_days: number;

  @ApiProperty({ example: 2 })
  bundle_id: number;

  @ApiProperty({ example: 1 })
  count: number;
}

export class RefillLineDto {
  @ApiProperty()
  amount_mb: number;

  @ApiProperty()
  amount_days: number;
}

export class UpdateLineNotesDto {
  @ApiProperty()
  notes: string;
}

export class UpdateDeactivationDateDto {
  @ApiProperty()
  deactivation_date: string;
}

export class TurnOnLineAutoRefillDto {
  @ApiProperty()
  amount_mb: number;

  @ApiProperty()
  amount_days: number;

  @ApiProperty()
  bill_protect_amount: number;
}

export class TurnOffLineAutoRefillDto {
  @ApiProperty({ example: 'success' })
  ack: string;

  @ApiProperty({ example: 'Auto-refill was turned OFF' })
  message: string;
}

class AutoRefillItem {
  @ApiProperty({ example: '100MB/10DAYS' })
  title: string;

  @ApiProperty({ example: 100 })
  amount_mb: number;

  @ApiProperty({ example: 10, required: false, nullable: true })
  amount_days: number | null;

  @ApiProperty({ example: 3 })
  price_usd: number;
}

export class DetailedSimCard {
  @ApiProperty({ example: '8965972579000123456' })
  iccid: string;

  @ApiProperty({ example: '34590100123456' })
  msisdn: string;

  @ApiProperty({ example: 'LPA:1$consumer.ppp.local$TN20210805541629D9E05F37' })
  lpa_code: string;

  @ApiProperty({ example: '' })
  deactivation_date: string;

  @ApiProperty({ example: 102400 })
  allowed_usage_kb: number;

  @ApiProperty({ example: 51200 })
  remaining_usage_kb: number;

  @ApiProperty({ example: 5, required: false, nullable: true })
  remaining_days: number;

  @ApiProperty({ example: 'Activated' })
  status: string;

  @ApiProperty({ example: 96 })
  bundle_id: number;

  @ApiProperty({ example: 'Aquila' })
  bundle: string;

  @ApiProperty({ example: false })
  auto_refill_turned_on: boolean;

  @ApiProperty({ example: 0 })
  auto_refill_amount_mb: number;

  @ApiProperty({ example: 0 })
  auto_refill_price: number;

  @ApiProperty({ example: 'usd' })
  auto_refill_currency: string;

  @ApiProperty({ type: [AutoRefillItem] })
  auto_refill_list: AutoRefillItem[];

  @ApiProperty({ example: '' })
  notes: string;

  @ApiProperty({ type: [DataBundle] })
  data_bundles: DataBundle[];
}

export class AvailableRefill {
  @ApiProperty({ example: '1GB' })
  title: string;

  @ApiProperty({ example: 1024 })
  amount_mb: number;

  @ApiProperty({ example: 10 })
  amount_days: number;

  @ApiProperty({ example: 7 })
  price_usd: number;
}

export class AuditLog {
  @ApiProperty({ example: '2024-09-24 09:15:59' })
  date: string;

  @ApiProperty({ example: 'Status' })
  field: string;

  @ApiProperty({ example: 'Deactivated' })
  prior_value: string;

  @ApiProperty({ example: 'Activated' })
  value: string;

  @ApiProperty({ example: 'System' })
  user_name: string;

  @ApiProperty({ example: '' })
  description: string;
}
