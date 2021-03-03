//Cách 1
const styles = (theme) => ({
    //Key là tên của class : value là css của class
    changeBG : {
        backgroundColor : theme.palette.background.timLim,
    } 
});
//Cach 2
// const styles = () => {
//     return {//Key là tên của class : value là css của class
//     changeBG : {
//         backgroundColor : 'purple',
//     } }
// };
export default styles;