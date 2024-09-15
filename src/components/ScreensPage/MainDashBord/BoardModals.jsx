import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectColumns } from '../../../redux/dashboards/dashboardsSelectors.js';
import {
  addCard,
  addColumn,
  editCard,
  editColumn,
} from '../../../redux/dashboards/dashboardsOperations.js';
import {
  CloseModalBtn,
  Dline,
  Dot,
  DotDiv,
  Label,
  ModalM,
  ModalsOverlay,
  ModalSubmitButton,
  ModalTitle,
  PlsIcon,
  PlusButton,
  TextArea,
  TitleInput,
} from './BoardModals.styled';
import sprite from '../../../images/sprite.svg';

// ModalAddColumn Component
const ModalAddColumn = ({ dashboardId, onClose }) => {
  const [columnTitle, setColumnTitle] = useState('');
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const columns = useSelector(selectColumns);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = e => {
      if (e.target.classList.contains('modals-overlay')) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  const handleAddColumn = () => {
    dispatch(addColumn({ dashboardId, title: columnTitle }));
    onClose();
  };

  return ReactDOM.createPortal(
    <ModalsOverlay>
      <ModalM className="modal modalAddColumn">
        <CloseModalBtn className="modal-close-btn" onClick={onClose}>
          &times;
        </CloseModalBtn>
        <ModalTitle>Add column</ModalTitle>
        <TitleInput
          type="text"
          placeholder="Title"
          value={columnTitle}
          onChange={e => setColumnTitle(e.target.value)}
        />
        <ModalSubmitButton type="button" onClick={handleAddColumn}>
          <PlusButton>
            <PlsIcon>
              <use href={sprite + '#icon-plus'} />
            </PlsIcon>
          </PlusButton>
          Add
        </ModalSubmitButton>
      </ModalM>
    </ModalsOverlay>,
    document.getElementById('modal-root-addColumn')
  );
};

// ModalEditColumn Component
const ModalEditColumn = ({ title, columnId, onClose }) => {
  const [columnTitle, setColumnTitle] = useState(title);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = e => {
      if (e.target.classList.contains('modals-overlay')) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  const handleEditColumn = () => {
    dispatch(editColumn({ columnId, title: columnTitle }));
    onClose();
  };

  return ReactDOM.createPortal(
    <ModalsOverlay>
      <ModalM className="modal modalEditColumn">
        <CloseModalBtn className="modal-close-btn" onClick={onClose}>
          &times;
        </CloseModalBtn>
        <ModalTitle>Edit column</ModalTitle>
        <TitleInput
          type="text"
          placeholder="Title"
          value={columnTitle}
          onChange={e => setColumnTitle(e.target.value)}
        />
        <ModalSubmitButton type="button" onClick={handleEditColumn}>
          <PlusButton>
            <PlsIcon>
              <use href={sprite + '#icon-plus'} />
            </PlsIcon>
          </PlusButton>
          Edit
        </ModalSubmitButton>
      </ModalM>
    </ModalsOverlay>,
    document.getElementById('modal-root-addColumn')
  );
};

// ModalAddCard Component
const ModalAddCard = ({ columnId, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [labelColor, setLabelColor] = useState('');
  const [deadline, setDeadline] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = e => {
      if (e.target.classList.contains('modals-overlay')) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  const handleAddCard = () => {
    let priority;
    switch (labelColor) {
      case 'blue':
        priority = 'high';
        break;
      case 'pink':
        priority = 'medium';
        break;
      case 'green':
        priority = 'low';
        break;
      default:
        priority = 'without';
    }

    dispatch(
      addCard({
        columnId,
        title,
        description,
        priority,
        deadline: new Date(deadline),
      })
    );
    onClose();
  };

  return ReactDOM.createPortal(
    <ModalsOverlay>
      <ModalM className="modal modalAddCard">
        <CloseModalBtn className="modal-close-btn" onClick={onClose}>
          &times;
        </CloseModalBtn>
        <ModalTitle>Add card</ModalTitle>
        <TitleInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextArea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <DotDiv>
          <Label>Label color</Label>
          <div className="colors">
            <Dot
              className={`color blue ${
                labelColor === 'blue' ? 'selected' : ''
              }`}
              onClick={() => setLabelColor('blue')}
            ></Dot>
            <Dot
              className={`color pink ${
                labelColor === 'pink' ? 'selected' : ''
              }`}
              onClick={() => setLabelColor('pink')}
            ></Dot>
            <Dot
              className={`color green ${
                labelColor === 'green' ? 'selected' : ''
              }`}
              onClick={() => setLabelColor('green')}
            ></Dot>
            <Dot
              className={`color black ${
                labelColor === 'black' ? 'selected' : ''
              }`}
              onClick={() => setLabelColor('black')}
            ></Dot>
          </div>
        </DotDiv>
        <Dline>
          <Label>Deadline</Label>
          <input
            type="date"
            value={deadline}
            onChange={e => setDeadline(e.target.value)}
          />
        </Dline>
        <ModalSubmitButton type="button" onClick={handleAddCard}>
          <PlusButton>
            <PlsIcon>
              <use href={sprite + '#icon-plus'} />
            </PlsIcon>
          </PlusButton>
          Add
        </ModalSubmitButton>
      </ModalM>
    </ModalsOverlay>,
    document.getElementById('modal-root-addCard')
  );
};

// ModalEditCard Component
const ModalEditCard = ({ card, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);
  const [labelColor, setLabelColor] = useState(() => {
    switch (card.priority) {
      case 'high':
        return 'blue';
      case 'medium':
        return 'pink';
      case 'low':
        return 'green';
      default:
        return 'black';
    }
  });
  const [deadline, setDeadline] = useState(card.deadline.substr(0, 10));

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = e => {
      if (e.target.classList.contains('modals-overlay')) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  const handleModifyCard = () => {
    let priority;
    switch (labelColor) {
      case 'blue':
        priority = 'high';
        break;
      case 'pink':
        priority = 'medium';
        break;
      case 'green':
        priority = 'low';
        break;
      default:
        priority = 'without';
    }
    dispatch(
      editCard({
        cardId: card._id,
        title,
        description,
        priority,
        deadline: new Date(deadline),
        owner: card.owner,
      })
    );
    onClose();
  };

  return ReactDOM.createPortal(
    <ModalsOverlay>
      <ModalM className="modal modalEditCard">
        <CloseModalBtn className="modal-close-btn" onClick={onClose}>
          &times;
        </CloseModalBtn>
        <ModalTitle>Edit card</ModalTitle>
        <TitleInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextArea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <DotDiv>
          <Label>Label color</Label>
          <div className="colors">
            <Dot
              className={`color blue ${
                labelColor === 'blue' ? 'selected' : ''
              }`}
              onClick={() => setLabelColor('blue')}
            ></Dot>
            <Dot
              className={`color pink ${
                labelColor === 'pink' ? 'selected' : ''
              }`}
              onClick={() => setLabelColor('pink')}
            ></Dot>
            <Dot
              className={`color green ${
                labelColor === 'green' ? 'selected' : ''
              }`}
              onClick={() => setLabelColor('green')}
            ></Dot>
            <Dot
              className={`color black ${
                labelColor === 'black' ? 'selected' : ''
              }`}
              onClick={() => setLabelColor('black')}
            ></Dot>
          </div>
        </DotDiv>
        <Dline>
          <Label>Deadline</Label>
          <input
            type="date"
            value={deadline}
            onChange={e => setDeadline(e.target.value)}
          />
        </Dline>
        <ModalSubmitButton type="button" onClick={handleModifyCard}>
          <PlusButton>
            <PlsIcon>
              <use href={sprite + '#icon-plus'} />
            </PlsIcon>
          </PlusButton>
          Edit
        </ModalSubmitButton>
      </ModalM>
    </ModalsOverlay>,
    document.getElementById('modal-root-addCard')
  );
};

export { ModalAddColumn, ModalEditColumn, ModalAddCard, ModalEditCard };
