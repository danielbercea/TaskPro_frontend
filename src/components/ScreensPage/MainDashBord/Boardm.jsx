import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import Column from './Columns.jsx';
import { ModalAddColumn } from './BoardModals';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectColumns,
  selectCurrentDashboard,
} from '../../../redux/dashboards/dashboardsSelectors';
import {
  AddColumnButton,
  ButtonPls,
  ColumnsAndButton,
  IconPls,
} from './Boardm.styled';
import sprite from '../../../images/sprite.svg';
import {
  deleteCard,
  addCard,
} from '../../../redux/dashboards/dashboardsOperations';

const Boardm = () => {
  const [showModalAddColumn, setShowModalAddColumn] = useState(false);
  const currentDashboard = useSelector(selectCurrentDashboard);
  const columns = useSelector(selectColumns);
  const [bcolumns, setBColumns] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (columns && columns.length > 0) {
      setBColumns(columns);
    }
  }, [columns]);

  const onDragEnd = result => {
    const { destination, source, type } = result;

    if (!destination) return;

    const startIndex = source.index;
    const endIndex = destination.index;
    const sourceId = source.droppableId;
    const destId = destination.droppableId;

    if (startIndex === endIndex && sourceId === destId) return;

    if (type === 'column') {
      const columnToMove = bcolumns[startIndex];
      let buffer = [...bcolumns];
      buffer.splice(startIndex, 1);
      buffer.splice(endIndex, 0, columnToMove);
      setBColumns(buffer);
      return;
    }

    if (type === 'card') {
      const sourceColumn = bcolumns.find(column => column._id === sourceId);
      const destColumn = bcolumns.find(column => column._id === destId);
      const cardToMove = sourceColumn.cards[startIndex];

      dispatch(deleteCard(cardToMove._id));

      dispatch(
        addCard({
          columnId: destColumn._id,
          title: cardToMove.title,
          description: cardToMove.description,
          priority: cardToMove.priority,
          deadline: cardToMove.deadline,
        })
      );

      return;
    }
  };

  return (
    <ColumnsAndButton>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-columns"
          id="all-columns"
          direction="horizontal"
          type="column"
        >
          {provided => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ display: 'flex', gap: '18px' }}
            >
              {Array.isArray(bcolumns) &&
                bcolumns.length > 0 &&
                bcolumns.map((kolumn, index) => {
                  return (
                    <Column key={kolumn._id} column={kolumn} index={index} />
                  );
                })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <AddColumnButton onClick={() => setShowModalAddColumn(true)}>
        <ButtonPls>
          <IconPls>
            <use href={sprite + '#icon-plus'} />
          </IconPls>
        </ButtonPls>
        Add another column
      </AddColumnButton>

      {showModalAddColumn && (
        <ModalAddColumn
          dashboardId={currentDashboard?._id}
          onClose={() => setShowModalAddColumn(false)}
        />
      )}
    </ColumnsAndButton>
  );
};

export default Boardm;
