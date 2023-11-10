// The concept of lexical scope is that a nested function have access to the variables created in the parent function
function parentfunction() {
    let array1 = [1, 2, 3, 4, 5, 6];
    function subfunction1() {
        console.log(array1);
        function subfunction2() {
            console.log(array1)
        } subfunction2();

    } subfunction1();

}
parentfunction();
//the scope of variables created in a parent function is to all its subfunctions