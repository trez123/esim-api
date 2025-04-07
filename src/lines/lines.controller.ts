import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { LinesService } from './lines.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  CreateLineResponse,
  GetLineAvailableRefillsResponse,
  GetLineDetailsResponse,
  GetLinesResponse,
  LineAuditLogsResponse,
  RefillLinesResponse,
} from './dto/lines-response';
import {
  CreateLineDto,
  TurnOnLineAutoRefillDto,
  RefillLineDto,
  UpdateDeactivationDateDto,
  UpdateLineNotesDto,
  TurnOffLineAutoRefillDto,
} from './dto/line.dto';
import { TransactionsResponse } from 'src/transactions/dto/transactions-response';

@ApiTags('Lines')
@Controller('lines')
export class LinesController {
  constructor(private readonly linesService: LinesService) {}

  @Get('/')
  @ApiBearerAuth('Authorization')
  @ApiOperation({
    summary: 'Used for information regarding a specific line',
    description:
      'This request returns a list of lines belonging to the account, their configuration, and running parameters, including data usage, rate plan, billing cycle, count of data, and any notes they may have.',
    operationId: 'getLines',
  })
  @ApiResponse({
    status: 200,
    description: 'lines Fetched Successfully',
    type: GetLinesResponse,
  })
  async getSimCards(
    @Query() params: { [key: string]: string | number | boolean },
  ): Promise<GetLinesResponse> {
    return this.linesService.get_lines(params);
  }

  @Get('filter_data')
  @ApiBearerAuth('Authorization')
  @ApiOperation({
    summary: 'Receives a list of possible Line statuses ',
    description:
      'This request receives a list of possible Line statuses (Registered, Activated, Deactivated) and auto refill status IDs for filtering purposes in other API requests.',
    operationId: 'gitLinesFilterData',
  })
  @ApiResponse({
    status: 200,
    description: 'lines filter data fetched Successfully',
  })
  async gitLinesFilterData(
    @Query() params: { [key: string]: string | number | boolean },
  ): Promise<any> {
    return this.linesService.get_lines_filter_data(params);
  }

  @Get('get_details/:SIM_iccid')
  @ApiBearerAuth('Authorization')
  @ApiOperation({
    summary: 'Receives details for the specific Line',
    description:
      'This request receives details for the specific Line, including Line’s usage, remaining data/days, auto refill info, currency, etc.',
    operationId: 'getLineDetails',
  })
  @ApiResponse({
    status: 200,
    description: 'line details fetched Successfully',
    type: GetLineDetailsResponse,
  })
  async getLineDetails(
    @Query() params: { [key: string]: string | number | boolean },
    @Param('SIM_iccid') simIccid: string,
  ): Promise<GetLineDetailsResponse> {
    const result = this.linesService.get_line_details(simIccid, params);
    return result;
  }

  @Get('get_line_available_refils/:SIM_iccid')
  @ApiBearerAuth('Authorization')
  @ApiOperation({
    summary: 'Receives a list of available refills for a Line',
    description:
      'This request receives a list of available refills for a Line. It displays such values as the amount of data, price (in USD and EUR), and the number of days for all available refills for the chosen iccid.',
    operationId: 'getLineAvailableRefils',
  })
  @ApiResponse({
    status: 200,
    description: 'line available refills fetched Successfully',
    type: GetLineAvailableRefillsResponse,
  })
  async getLineAvailableRefils(
    @Query() params: { [key: string]: string | number | boolean },
    @Param('SIM_iccid') simIccid: string,
  ): Promise<GetLineAvailableRefillsResponse> {
    const result = this.linesService.get_line_available_refils(
      simIccid,
      params,
    );
    return result;
  }

  @Get('get_line_transactions/:SIM_iccid')
  @ApiBearerAuth('Authorization')
  @ApiOperation({
    summary: 'Receives a list of cash transactions by iccid',
    description:
      'This request receives a list of cash transactions by iccid, including the date of the transaction, refill amount, payment method (balance or card), transaction ID, status, and the reason for the transaction.',
    operationId: 'getLineTransactions',
  })
  @ApiResponse({
    status: 200,
    description: 'line transactions fetched Successfully',
    type: TransactionsResponse,
  })
  async getLineTransactions(
    @Query() params: { [key: string]: string | number | boolean },
    @Param('SIM_iccid') simIccid: string,
  ): Promise<TransactionsResponse> {
    const result = this.linesService.get_line_transactions(simIccid, params);
    return result;
  }

  @Get('get_line_audit_logs/:SIM_iccid')
  @ApiBearerAuth('Authorization')
  @ApiOperation({
    summary: 'Receives an audit log and system actions for the specific Line',
    description:
      'This request receives an audit log and system actions for the specific Line, including action performed, prior value, current value, and username of a person or entity acting.',
    operationId: 'getLineAuditLogs',
  })
  @ApiResponse({
    status: 200,
    description: 'line audit logs fetched Successfully',
    type: LineAuditLogsResponse,
  })
  async getLineAuditLogs(
    @Query() params: { [key: string]: string | number | boolean },
    @Param('SIM_iccid') simIccid: string,
  ): Promise<LineAuditLogsResponse> {
    const result = this.linesService.get_line_audit_logs(simIccid, params);
    return result;
  }

  @Post('create_line')
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: CreateLineDto })
  @ApiOperation({
    summary: 'used to create a Line.',
    description:
      'This request is used to create a Line. The request body is required to contain such information as: Bundle ID, refill MB, refill Days, count(optional); Values refill MB and refill Days - must use one of the values from the /bundles command',
    operationId: 'createLine',
  })
  @ApiResponse({
    status: 200,
    description: 'line created Successfully',
    type: CreateLineResponse,
  })
  async createLine(@Body() data: CreateLineDto): Promise<CreateLineResponse> {
    const result = this.linesService.create_line(data);
    return result;
  }

  @Post('refill_line/:SIM_iccid')
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: RefillLineDto })
  @ApiOperation({
    summary: 'Used to refill the Line',
    description:
      'This request is used to refill the Line with a certain amount of data for a specific period (number of days).',
    operationId: 'refillLine',
  })
  @ApiResponse({
    status: 200,
    description: 'line refilled Successfully',
    type: RefillLinesResponse,
  })
  async refillLine(
    @Param('SIM_iccid') simIccid: string,
    @Body() data: RefillLineDto,
  ): Promise<RefillLinesResponse> {
    const result = this.linesService.refill_line(simIccid, data);
    return result;
  }

  @Put('update_line_notes/:SIM_iccid')
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: UpdateLineNotesDto })
  @ApiOperation({
    summary: 'Used to update the notes of the Line',
    description:
      'This request is used to update the notes of the Line. The request body is the required parameter. Using notes, you can bring more order to how lines are displayed on your platform and easily find the required line based on the notes attached.',
    operationId: 'updateLineNotes',
  })
  @ApiResponse({
    status: 200,
    description: 'line notes updated Successfully',
  })
  async updateLineNotes(
    @Param('SIM_iccid') simIccid: string,
    @Body() data: UpdateLineNotesDto,
  ): Promise<any> {
    const result = this.linesService.update_line_notes(simIccid, data);
    return result;
  }

  @Put('/update_line_deactivation_date/:SIM_iccid')
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: UpdateDeactivationDateDto })
  @ApiOperation({
    summary: 'Used to update the deactivation date of the Line',
    description:
      'This request is used to update the deactivation date of the Line. The deactivation_date is the date when the line will be automatically deactivated in the future. If deactivation_date is set as a past date, the line will be deactivated.',
    operationId: 'updateLineDeactivationDate',
  })
  @ApiResponse({
    status: 200,
    description: 'line deactivation date updated Successfully',
  })
  async updateLineDeactivationDate(
    @Param('SIM_iccid') simIccid: string,
    @Body() data: UpdateDeactivationDateDto,
  ): Promise<any> {
    const result = this.linesService.update_line_deactivation_date(
      simIccid,
      data,
    );
    return result;
  }

  @Post('/turn_on_line_auto_refill/:SIM_iccid')
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: UpdateDeactivationDateDto })
  @ApiOperation({
    summary: 'Used to turn on Auto-Refill for the Line.',
    operationId: 'turnOnLineAutoRefill',
  })
  @ApiResponse({
    status: 200,
    description: 'line auto refill updated and turned on Successfully',
  })
  async turnOnLineAutoRefill(
    @Param('SIM_iccid') simIccid: string,
    @Body() data: TurnOnLineAutoRefillDto,
  ): Promise<any> {
    const result = this.linesService.turn_on_line_auto_refill(simIccid, data);
    return result;
  }

  @Put('/turn_off_line_auto_refill/:SIM_iccid')
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: UpdateDeactivationDateDto })
  @ApiOperation({
    summary: 'Used to turn off Auto-Refill for the Line.',
    operationId: 'turnOffLineAutoRefill',
  })
  @ApiResponse({
    status: 200,
    description: 'line auto refill updated and turned off Successfully',
  })
  async turnOffLineAutoRefill(
    @Param('SIM_iccid') simIccid: string,
    @Body() data: TurnOffLineAutoRefillDto,
  ): Promise<any> {
    const result = this.linesService.turn_off_line_auto_refill(simIccid, data);
    return result;
  }
}
