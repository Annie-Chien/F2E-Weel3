import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
  ListContainer,
  SDecoLight,
  SListHeader,
  SLogItem,
  DroppableContainer,
  Scorebar,
  Innerbar,
} from './List.style';

const LogItem = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <SLogItem
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <span>{item.score}</span>
            <p>{item.content}</p>
          </SLogItem>
        );
      }}
    </Draggable>
  );
};

const List = ({ checkButton }) => {
  const [itemObj, setItemObj] = useState({
    productBacklog: {
      items: [
        {
          content: '後台職缺管理功能（資訊上架、下架、顯示應徵者資料）',
          id: 'log0',
          score: 8,
        },
        { content: '應徵者的線上履歷編輯器', id: 'log1', score: 5 },
        { content: '會員系統（登入、註冊、權限管理）', id: 'log2', score: 13 },
        {
          content: '前台職缺列表、應徵',
          id: 'log3',
          score: 8,
        },
      ],
    },
    sprintBacklog: {
      items: [],
    },
  });
  const [totalScore, setTotalScore] = useState(0);

  const onDragEnd = (event) => {
    const { source, destination } = event;
    if (!destination) {
      return;
    }
    let newItemObj = { ...itemObj };
    const [remove] = newItemObj[source.droppableId].items.splice(
      source.index,
      1
    );
    newItemObj[destination.droppableId].items.splice(
      destination.index,
      0,
      remove
    );
    setItemObj(newItemObj);
    const newTotalScore = newItemObj.sprintBacklog.items.reduce(
      (acc, val) => acc + val.score,
      0
    );
    setTotalScore(newTotalScore);
  };
  checkButton(totalScore, itemObj.sprintBacklog.items.length);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ListContainer>
        <SDecoLight />
        <SListHeader>
          <h2>產品待辦清單</h2>
          <small>Product Backlog</small>
        </SListHeader>
        <Droppable droppableId="productBacklog">
          {(provided, snapshot) => (
            <DroppableContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {itemObj.productBacklog.items.map((item, index) => (
                <LogItem item={item} index={index} key={item.id} />
              ))}
              {provided.placeholder}
            </DroppableContainer>
          )}
        </Droppable>
      </ListContainer>
      <ListContainer sec>
        <SDecoLight sec />
        <SListHeader sec>
          <h2>開發Ａ組的短衝待辦清單</h2>
          <small>Sprint Backlog</small>
        </SListHeader>
        <Droppable droppableId="sprintBacklog">
          {(provided, snapshot) => (
            <DroppableContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {itemObj.sprintBacklog.items.map((item, index) => (
                <LogItem item={item} index={index} key={item.id} />
              ))}
              {provided.placeholder}
            </DroppableContainer>
          )}
        </Droppable>
        <Scorebar>
          <span>{totalScore} / 20 (5人)</span>

          <Innerbar
            width={2.025 * totalScore > 42 ? 42 : 2.025 * totalScore}
            bgColor={
              totalScore > 20 ? 'var(--clr-danger)' : 'var(--clr-role-team1)'
            }
          />
        </Scorebar>
      </ListContainer>
    </DragDropContext>
  );
};

export default List;
