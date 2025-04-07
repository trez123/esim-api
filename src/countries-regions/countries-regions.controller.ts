import { Controller, Get, Query } from '@nestjs/common';
import { CountriesRegionsService } from './countries-regions.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  CountriesResponse,
  RegionsResponse,
} from './dto/countries-regions-response';

@ApiTags('Countries/Regions')
@Controller('/')
@ApiBearerAuth('Authorization')
export class CountriesRegionsController {
  constructor(
    private readonly countriesRegionsService: CountriesRegionsService,
  ) {}

  @Get('countries')
  @ApiBearerAuth('Authorization')
  @ApiOperation({
    summary: 'Get a list of countries',
    description:
      'The request returns a list of country names exactly as they appear on the Keepgo platform.',
    operationId: 'getCountries',
  })
  @ApiResponse({
    status: 200,
    description: 'countries Fetched Successfully',
    type: CountriesResponse,
  })
  async getCountries(
    @Query() params: { [key: string]: string | number | boolean },
  ): Promise<CountriesResponse> {
    return this.countriesRegionsService.get_countries(params);
  }

  @Get('regions')
  @ApiBearerAuth('Authorization')
  @ApiOperation({
    summary: 'Get a list of regions',
    description:
      'The request reveals a list of all regions where Keepgo products have coverage.',
    operationId: 'getRegions',
  })
  @ApiResponse({
    status: 200,
    description: 'regions Fetched Successfully',
    type: RegionsResponse,
  })
  async getRegions(
    @Query() params: { [key: string]: string | number | boolean },
  ): Promise<RegionsResponse> {
    return this.countriesRegionsService.get_regions(params);
  }
}
