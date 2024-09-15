import React, { useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { FaPen, FaTrash, FaArrowCircleRight } from 'react-icons/fa';
import { ModalEditCard } from './BoardModals';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteCard,
  addCard,
} from '../../../redux/dashboards/dashboardsOperations';
import { CardFooter, CardM, CardContnt } from './Card.styled';
import { selectColumns } from '../../../redux/dashboards/dashboardsSelectors';

const Card = ({ card, index }) => {
  const [showModalEditCard, setShowModalEditCard] = useState(false);
  const columns = useSelector(selectColumns);
  const dispatch = useDispatch();

  const getPriorityColor = priority => {
    switch (priority) {
      case 'high':
        return '#8FA1D0';
      case 'medium':
        return '#E09CB5';
      case 'low':
        return '#BEDBB0';
      default:
        return 'rgb(102, 98, 98)';
    }
  };

  const changeColumn = () => {
    const fromColIndex = columns.findIndex(col => col._id === card.owner);
    const toColIndex = (fromColIndex + 1) % columns.length;
    const newOwner = columns[toColIndex]._id;

    dispatch(deleteCard(card._id));
    dispatch(
      addCard({
        columnId: newOwner,
        title: card.title,
        description: card.description,
        priority: card.priority,
        deadline: card.deadline,
      })
    );
  };

  const deleteKard = () => {
    dispatch(deleteCard(card._id));
  };

  return (
    <Draggable draggableId={card._id} index={index}>
      {provided => (
        <CardM
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            marginRight: '8px',
          }}
        >
          <div
            className="card-priority-bar"
            style={{ backgroundColor: getPriorityColor(card.priority) }}
          ></div>
          <CardContnt>
            <h4 className="card-title">{card.title}</h4>
            <p className="card-description">{card.description}</p>
            <CardFooter>
              <div className="card-info">
                <div className="card-priority">
                  <span className="card-footer-text">Priority</span>
                  <div className="card-priority-div">
                    <div
                      className="card-priority-bullet"
                      style={{
                        backgroundColor: getPriorityColor(card.priority),
                      }}
                    ></div>
                    <span className="card-footer-data">{card.priority}</span>
                  </div>
                </div>
                <div className="card-deadline">
                  <span className="card-footer-text">Deadline</span>
                  <span className="card-footer-data">
                    {card.deadline.substr(0, 10)}
                  </span>
                </div>
              </div>
              <div className="card-actions">
                <button className="card-button" onClick={changeColumn}>
                  <FaArrowCircleRight />
                </button>
                <button
                  className="card-button"
                  onClick={() => setShowModalEditCard(true)}
                >
                  <FaPen />
                </button>
                {showModalEditCard && (
                  <ModalEditCard
                    columnId={card.owner}
                    card={card}
                    onClose={() => setShowModalEditCard(false)}
                  />
                )}
                <button className="card-button" onClick={deleteKard}>
                  <FaTrash />
                </button>
              </div>
            </CardFooter>
          </CardContnt>
        </CardM>
      )}
    </Draggable>
  );
};

export default Card;
