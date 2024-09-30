import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { User } from "../../types/User";

const MySwal = withReactContent(Swal);

interface DeleteConfirmationModalProps {
  user: User | null;
  onConfirm: () => void;
  onCancel?: () => void;
}

const DeleteConfirmationModal = ({
  user,
  onConfirm,
  onCancel,
}: DeleteConfirmationModalProps) => {
  const showDeleteConfirmation = () => {
    if (!user) return;

    MySwal.fire({
      title: "¿Estás seguro?",
      text: `Estás a punto de eliminar al usuario ${user.name.first} ${user.name.last}. Esta acción no se puede deshacer.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7066e0",
      cancelButtonColor: "#6e7881",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
        MySwal.fire(
          "Eliminado",
          `El usuario ${user.name.first} ${user.name.last} ha sido eliminado.`,
          "success"
        );
      } else if (onCancel) {
        onCancel();
      }
    });
  };


  return { showDeleteConfirmation };
};

export default DeleteConfirmationModal;
