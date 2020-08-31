import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllInMonthFromProviderDTO from '../dtos/IFindAllInMonthFromProviderDTO';

export default interface IAppointmentsRepository {
    create(date: ICreateAppointmentDTO): Promise<Appointment>;
    findByDate(date: Date): Promise<Appointment | undefined>;
    findAllInMonthFromProviderDTO(
        data: IFindAllInMonthFromProviderDTO,
    ): Promise<Appointment[]>;
}
