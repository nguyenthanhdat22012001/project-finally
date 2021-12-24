   /************** handle noti dialog***************/
 export  const handleNotiDialog = (enqueueSnackbar,message, status) => {
    enqueueSnackbar(message, {
      variant: status,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    });
  };

  export const  scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}