import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ICashProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IUserRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

import User from '../infra/typeorm/entities/User';

interface IRequest {
    name: string;
    email: string;
    password: string;
}

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUserRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,

        @inject('CacheProvider')
        private cacheProvider: ICashProvider,
    ) {}

    public async execute({ name, email, password }: IRequest): Promise<User> {
        const checkUserExist = await this.usersRepository.findByEmail(email);

        if (checkUserExist) {
            throw new AppError('Email address already used');
        }

        const hashdPassword = await this.hashProvider.generateHash(password);

        const user = this.usersRepository.create({
            name,
            email,
            password: hashdPassword,
        });

        await this.cacheProvider.invalidatePrefix('providers-list');

        return user;
    }
}

export default CreateUserService;
