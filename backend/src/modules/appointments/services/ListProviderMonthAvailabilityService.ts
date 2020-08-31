import { injectable, inject } from 'tsyringe';

import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
    provider_id: string;
    year: number;
    month: number;
}

type IResponse = Array<{
    day: number;
    availability: boolean;
}>;

@injectable()
class ListProviderMonthAvailabilityService {
    constructor(
        @inject('AppointmentsRepository')
        private appointmentsRepository: IAppointmentsRepository,
    ) {}

    public async execute({
        provider_id,
        year,
        month,
    }: IRequest): Promise<IResponse> {
        const appointments = await this.appointmentsRepository.findAllInMonthFromProviderDTO(
            {
                provider_id,
                year,
                month,
            },
        );

        console.log(appointments);

        return [{ day: 1, availability: false }];
    }
}

export default ListProviderMonthAvailabilityService;
