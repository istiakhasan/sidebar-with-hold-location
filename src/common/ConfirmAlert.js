
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
const ConfirmAlert = ({yesFunction,title,message}) => {
  confirmAlert({
    title: title,
    message: message,
    overlayClassName: "confirm-class",
    
    buttons: [
      {
        label: "Yes",
        onClick: yesFunction,
        className:"bg-danger"
      },
      {
        label: "No",
        onClick: () => ()=>"",
      },
    ],
  })

   
};

export default ConfirmAlert;