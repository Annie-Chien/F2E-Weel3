//Styles
import {
  SBacklog,
  SBacklogHeader,
  SDecoLight,
  SBacklogContent,
  SCaption,
  SArrow,
  SBacklogList,
  SDemoItem,
  SStoryItem,
} from './Backlog.styles';
//Images
import { hand } from '../../shared/images';
//DnD
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
//================================================//

const Backlog = ({ variant, storyList, updateStoryList }) => {
  //list 內的空格數量
  let emptyItemNum;

  if (variant === 'demo') {
    emptyItemNum = 3;
  } else {
    emptyItemNum = 4 - storyList.length;
  }

  const onDragEnd = (event) => {
    const { source, destination } = event;
    if (!destination) {
      return;
    }
    // 拷貝新的items (來自state)
    let newList = [...storyList];
    // 從source.index剪下被拖曳的元素
    const [remove] = newList.splice(source.index, 1);
    //在destination.index位置貼上被拖曳的元素
    newList.splice(destination.index, 0, remove);
    // 設定新的 List
    updateStoryList(newList);
  };

  return (
    // <SBacklog>
    //   <SDecoLight />
    //   <SBacklogHeader>
    //     <h2>產品待辦清單</h2>
    //     <small>Product Backlog</small>
    //   </SBacklogHeader>
    //   <SBacklogContent>
    //     <SCaption>
    //       <span>高</span>
    //       <SArrow />
    //       <span>低</span>
    //     </SCaption>
    //     <SBacklogList>
    //       {variant === 'demo' ? (
    //         <SDemoItem>
    //           <img src={hand} alt="hand" />
    //         </SDemoItem>
    //       ) : null}
    //       {storyList.map((story, index) => (
    //         <li key={index}>
    //           <SStoryItem key={index}>{story}</SStoryItem>
    //         </li>
    //       ))}
    //       {Array.from(new Array(emptyItemNum), (_, index) => {
    //         return <li key={index}></li>;
    //       })}
    //     </SBacklogList>
    //   </SBacklogContent>
    // </SBacklog>

    //FIXME: FIXME: FIXME: FIXME: FIXME: FIXME: FIXME:
    <DragDropContext onDragEnd={onDragEnd}>
      <SBacklog>
        <SDecoLight />
        <SBacklogHeader>
          <h2>產品待辦清單</h2>
          <small>Product Backlog</small>
        </SBacklogHeader>
        <SBacklogContent>
          <SCaption>
            <span>高</span>
            <SArrow />
            <span>低</span>
          </SCaption>
          <Droppable droppableId="drop-id">
            {(provided) => {
              return (
                <SBacklogList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {variant === 'demo' ? (
                    <SDemoItem>
                      <img src={hand} alt="hand" />
                    </SDemoItem>
                  ) : null}
                  {storyList.map((story, index) => (
                    <li key={index}>
                      <Draggable
                        draggableId={'id_' + index}
                        index={index}
                        key={index}
                      >
                        {(provided) => (
                          <SStoryItem
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            {story}
                          </SStoryItem>
                        )}
                      </Draggable>
                    </li>
                  ))}
                  {Array.from(new Array(emptyItemNum), (_, index) => {
                    return <li key={index}></li>;
                  })}
                  {provided.placeholder}
                </SBacklogList>
              );
            }}
          </Droppable>
        </SBacklogContent>
      </SBacklog>
    </DragDropContext>
  );
};

export default Backlog;
