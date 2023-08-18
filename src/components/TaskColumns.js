import { Flex, Text } from "@chakra-ui/react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Column = ({ column, tasks }) => {
  return (
    <Flex rounded="3px" bg="column-bg" w="400px" flexDir="column">
      <Flex align="center" rounded="3px 3px 0 0" px="1rem" mb="1rem">
        <Text
          fontSize="17px"
          fontWeight={600}
          bg={column.id === "column-1" ? "#C5D7BD" : column.id === "column-2" ? "#F5D6C6" : column.id === "column-3" ? "#D2B48C" : "#CDDC39"}
          p="2px 10px"
          rounded="5px"
        >
          {column.title}
        </Text>
        <Text
          fontSize="17px"
          fontWeight={600}
          bg={column.id === "column-1" ? "#C5D7BD" : column.id === "column-2" ? "#F5D6C6" : column.id === "column-3" ? "#D2B48C" : "#CDDC39"}
          p="2px 10px"
          ml="5px"
          rounded="5px"
        >
          {tasks.length}
        </Text>
      </Flex>
      <hr className="mb-5" />

      <Droppable droppableId={column.id}>
        {(droppableProvided, droppableSnapshot) => (
          <Flex px="1.5rem" flex={1} flexDir="column" ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <Flex
                    mb="1rem"
                    h="72px"
                    bg="card-bg"
                    rounded="3px"
                    p="1.5rem"
                    outline="2px solid"
                    outlineColor={draggableSnapshot.isDragging ? "card-border" : "transparent"}
                    boxShadow={draggableSnapshot.isDragging ? "0 5px 10px rgba(0, 0, 0, 0.6)" : "unset"}
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                  >
                    <Text>{task.content}</Text>
                  </Flex>
                )}
              </Draggable>
            ))}
          </Flex>
        )}
      </Droppable>
    </Flex>
  );
};

export default Column;
