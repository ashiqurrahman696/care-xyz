import Swal from "sweetalert2";

export const showAlert = (title, message, icon) => {
    Swal.fire({
        title: title,
        text: message,
        icon: icon
    });
}