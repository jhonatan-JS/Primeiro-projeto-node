import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toasts } from './styles';

const ToastsContainer: React.FC = () => {
  return (
    <Container>
      <Toasts>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toasts>

      <Toasts type="success">
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toasts>

      <Toasts type="error">
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toasts>
    </Container>
  );
};

export default ToastsContainer;
