import { Injectable } from '@nestjs/common';
import {
  CreateLineResponse,
  GetLineAvailableRefillsResponse,
  GetLineDetailsResponse,
  GetLinesResponse,
  LineAuditLogsResponse,
  RefillLinesResponse,
} from './dto/lines-response';
import { KeepgoService } from 'src/shared/services/keepgo/keepgo.service';
import {
  CreateLineDto,
  TurnOnLineAutoRefillDto,
  RefillLineDto,
  TurnOffLineAutoRefillDto,
  UpdateDeactivationDateDto,
  UpdateLineNotesDto,
} from './dto/line.dto';
import { TransactionsResponse } from 'src/transactions/dto/transactions-response';

@Injectable()
export class LinesService {
  constructor(private keepgoService: KeepgoService) {}

  async get_lines(params?: {
    [key: string]: string | number | boolean;
  }): Promise<GetLinesResponse> {
    const queryParams = { ...params };
    const result = await this.keepgoService.get(`/api/v2/lines`, queryParams);
    return result;
  }

  async get_lines_filter_data(params?: {
    [key: string]: string | number | boolean;
  }): Promise<any> {
    const queryParams = { ...params };
    const result = await this.keepgoService.get(
      `/api/v2/lines/filter_data`,
      queryParams,
    );
    return result;
  }

  async get_line_details(
    simIccid: string,
    params?: { [key: string]: string | number | boolean },
  ): Promise<GetLineDetailsResponse> {
    const queryParams = { ...params };
    const result = await this.keepgoService.get(
      `/api/v2/line/${simIccid}/get_details`,
      queryParams,
    );
    return result;
  }

  async get_line_available_refils(
    simIccid: string,
    params?: { [key: string]: string | number | boolean },
  ): Promise<GetLineAvailableRefillsResponse> {
    const queryParams = { ...params };
    const result = await this.keepgoService.get(
      `/api/v2/line/${simIccid}/available_refills`,
      queryParams,
    );
    return result;
  }

  async get_line_transactions(
    simIccid: string,
    params?: { [key: string]: string | number | boolean },
  ): Promise<TransactionsResponse> {
    const queryParams = { ...params };
    const result = await this.keepgoService.get(
      `/api/v2/line/${simIccid}/transactions`,
      queryParams,
    );
    return result;
  }

  async get_line_audit_logs(
    simIccid: string,
    params?: { [key: string]: string | number | boolean },
  ): Promise<LineAuditLogsResponse> {
    const result = await this.keepgoService.get(
      `/api/v2/line/${simIccid}/audit_logs`,
      params,
    );

    return result;
  }

  async create_line(data: CreateLineDto): Promise<CreateLineResponse> {
    const result = await this.keepgoService.post(`/api/v2/line/create`, data);
    return result;
  }

  async refill_line(
    simIccid: string,
    data: RefillLineDto,
  ): Promise<RefillLinesResponse> {
    const result = await this.keepgoService.post(
      `/api/v2/line/${simIccid}/refill`,
      data,
    );
    return result;
  }

  async update_line_notes(
    simIccid: string,
    data: UpdateLineNotesDto,
  ): Promise<any> {
    const result = await this.keepgoService.put(
      `/api/v2/line/${simIccid}/update_notes`,
      data,
    );
    return result;
  }

  async update_line_deactivation_date(
    simIccid: string,
    data: UpdateDeactivationDateDto,
  ): Promise<any> {
    const result = await this.keepgoService.put(
      `/api/v2/line/${simIccid}/deactivation_date`,
      data,
    );
    return result;
  }

  async turn_on_line_auto_refill(
    simIccid: string,
    data: TurnOnLineAutoRefillDto,
  ): Promise<any> {
    const result = await this.keepgoService.post(
      `/api/v2/line/${simIccid}/turn_on_auto_refill`,
      data,
    );
    return result;
  }

  async turn_off_line_auto_refill(
    simIccid: string,
    data: TurnOffLineAutoRefillDto,
  ): Promise<any> {
    const result = await this.keepgoService.put(
      `/api/v2/line/${simIccid}/turn_off_auto_refill`,
      data,
    );
    return result;
  }
}
