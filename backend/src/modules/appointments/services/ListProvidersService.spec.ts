import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProviderService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('UpdateProfile', () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();

        listProviders = new ListProvidersService(fakeUsersRepository);
    });

    it('should be able to this the providers', async () => {
        const user1 = await fakeUsersRepository.create({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456',
        });

        const user2 = await fakeUsersRepository.create({
            name: 'John Trê',
            email: 'johndtre@example.com',
            password: '123456',
        });

        const loggedUser = await fakeUsersRepository.create({
            name: 'John qua',
            email: 'johndqua@example.com',
            password: '123456',
        });

        const providers = await listProviders.execute({
            user_id: loggedUser.id,
        });

        expect(providers).toEqual([user1, user2]);
    });
});
