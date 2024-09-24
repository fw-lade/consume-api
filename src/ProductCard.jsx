import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const ProductCard = ({title, id, image, count, price, description}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <div>
      <div className="card" key={id} onClick={onOpen}>
        <img className="img" src={image} alt="" />
        <div className="card-text">
          <h1>{title}</h1>
          {/* <p>{item.description}</p> */}
          <p>Price: ${price}</p>
          <span>available units: {count}</span>
        </div>
      </div>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <div className="popover">
              <h1>{title}</h1>
              <img className="im" src={image} alt="" />
              <p>{description}</p>
            </div>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProductCard;
