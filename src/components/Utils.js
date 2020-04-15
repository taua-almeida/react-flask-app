import Swal from 'sweetalert2';

class Utils {

  alertCatch(title = "Ooops", text = "Something unexpected happened here", icon = "") {
    Swal.fire({
      title: title,
      text: text,
      showCancelButton: true,
      showConfirmButton: false,
    })
  }

  loading() {
    Swal.showLoading();
  }

  cancelLoading() {
    Swal.close();
  }


}

export default new Utils();