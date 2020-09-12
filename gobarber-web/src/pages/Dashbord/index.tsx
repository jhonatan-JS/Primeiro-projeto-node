import React, { useState } from 'react';

import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schadule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [sectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem-vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schadule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars2.githubusercontent.com/u/62979297?s=460&u=9b5e6fb6cf022d78e38e18eb6bad997f5d6a3503&v=4"
                alt="Jhonatan Santos"
              />

              <strong>Jhonatan Santos</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/62979297?s=460&u=9b5e6fb6cf022d78e38e18eb6bad997f5d6a3503&v=4"
                  alt="Jhonatan Santos"
                />

                <strong>Jhonatan Santos</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/62979297?s=460&u=9b5e6fb6cf022d78e38e18eb6bad997f5d6a3503&v=4"
                  alt="Jhonatan Santos"
                />

                <strong>Jhonatan Santos</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <div>
              <Appointment>
                <span>
                  <FiClock />
                  08:00
                </span>

                <div>
                  <img
                    src="https://avatars2.githubusercontent.com/u/62979297?s=460&u=9b5e6fb6cf022d78e38e18eb6bad997f5d6a3503&v=4"
                    alt="Jhonatan Santos"
                  />

                  <strong>Jhonatan Santos</strong>
                </div>
              </Appointment>
            </div>
          </Section>
        </Schadule>

        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
