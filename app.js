
// IFFEs
var budgetController = (function () {

    

   
    
})();



var UIController = (function () {

    var DOMStrings = {
        inputType:'.add__type',
        inputDes:'.add__description',
        inputValue:'.add__value',
        addBtn:'.add__btn'
    }

    var obj = {
        getInput:function(){
            return{
                type : document.querySelector(DOMStrings.inputType).value,//Wll be either inc or exp
                description : document.querySelector(DOMStrings.inputDes).value,
                value :document.querySelector(DOMStrings.inputValue).value
            }
            
        },
        getDOM:function(){
            return DOMStrings; 
        }
    }
   return obj;
   
})();



//GLOBAL CONTROLLER
var controller = (function (budgetCrtl,UiCrtl) {

    var DOM = UiCrtl.getDOM();
    var ctrlAddItem = function(){
        //1.get field input data
        var input = UiCrtl.getInput();
        console.log(input);
         
        //2.add item to budget controller
        //3.add item to the UI
        //4.calculate the budget 
        //5.display the budget on the UI  
    };

    var setupEventListner = function(){
        document.querySelector(DOM.addBtn).addEventListener('click',ctrlAddItem);
        //global event listener any where in the document 
        document.addEventListener('keypress',function(event){
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            } 
        });
    };

    return{
        init:function(){
            console.log('Application is started');
            setupEventListner();
        }
    };


})(budgetController,UIController);

controller.init();