import React, { useState } from 'react';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import Card from './Card';
import { ModalAddCard, ModalEditColumn } from './BoardModals';
import { FaPen, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteColumn } from '../../../redux/dashboards/dashboardsOperations';
import { Pillar } from './Column.styled';
import { ModalSubmitButton, PlsIcon, PlusButton } from './BoardModals.styled';
import sprite from '../../../images/sprite.svg';

const Column = ({ column, index }) => {
  const [showModalAddCard, setShowModalAddCard] = useState(false);
  const [showModalEditColumn, setShowModalEditColumn] = useState(false);
  const dispatch = useDispatch();

  const deleteKolumn = () => {
    dispatch(deleteColumn(column._id));
  };

  return (
    <Draggable draggableId={column._id} index={index}>
      {provided => (
        <Pillar
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{
            ...provided.draggableProps.style,
            height: '99%',
          }}
        >
          <div className="column-title" {...provided.dragHandleProps}>
            {column.title}
            <div className="title-icons" id={column.title}>
              <button
                type="button"
                onClick={() => setShowModalEditColumn(true)}
              >
                <FaPen />
              </button>
              {showModalEditColumn && (
                <ModalEditColumn
                  title={column.title}
                  columnId={column._id}
                  onClose={() => setShowModalEditColumn(false)}
                />
              )}
              <button type="button" onClick={deleteKolumn}>
                <FaTrash />
              </button>
            </div>
          </div>
          <Droppable droppableId={column._id} type="card">
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  overflowY: 'auto',
                  overflowX: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  maxHeight: '456px', // Fixed height for consistency
                }}
              >
                {Array.isArray(column.cards) &&
                  column.cards.map((card, index) => (
                    <Card key={card._id} card={card} index={index} />
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <ModalSubmitButton
            $margintop="14px"
            onClick={() => setShowModalAddCard(true)}
          >
            <PlusButton>
              <PlsIcon>
                <use href={sprite + '#icon-plus'} />
              </PlsIcon>
            </PlusButton>
            Add another card
          </ModalSubmitButton>

          {showModalAddCard && (
            <ModalAddCard
              columnId={column._id}
              onClose={() => setShowModalAddCard(false)}
            />
          )}
        </Pillar>
      )}
    </Draggable>
  );
};

export default Column;
