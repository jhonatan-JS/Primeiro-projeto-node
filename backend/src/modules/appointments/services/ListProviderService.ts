import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import IUserRepository from '@modules/users/repositories/IUsersRepository';

import { classToClass } from 'class-transformer';
import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
    user_id: string;
}

@injectable()
class ListProvidersServices {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUserRepository,

        @inject('CacheProvider')
        private cacheProvider: ICacheProvider,
    ) {}

    public async execute({ user_id }: IRequest): Promise<User[]> {
        let users = await this.cacheProvider.recover<User[]>(
            `providers-list:${user_id}`,
        );

        if (!users) {
            users = await this.usersRepository.findAllProviders({
                except_user_id: user_id,
            });

            await this.cacheProvider.save(
                `providers-list:${user_id}`,
                classToClass(users),
            );
        }

        return users;
    }
}

export default ListProvidersServices;
