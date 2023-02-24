//====================================alert===========================

export function alertButton() {
    const alert = document.querySelector('.alert');
    const arrayalertButton = document.querySelectorAll("#portfolio");
    const alertContent = document.querySelector('.alert__content');
    // console.log(arrayalertButton);

    arrayalertButton.forEach(alertButton => {
        if (alertButton) {
            // const alert = document.querySelector('.alert');
            // console.log(alert);

            alertButton.addEventListener("click", function () {
                alert.classList.add("_open-alert");
            });
        };

    });


    const alertCancel = document.querySelector('.alert__cancel');

    if (alertCancel) {
        // console.log(alertCancel)

        alertCancel.addEventListener("click", function () {
            // const alert = document.querySelector('.alert');
            alert.classList.remove("_open-alert");
        });
    }

    alertContent.addEventListener('click',(event)=>{
        event.stopPropagation();
    })
    alert.addEventListener('click', ()=>{
        alert.classList.remove("_open-alert");
    })
}