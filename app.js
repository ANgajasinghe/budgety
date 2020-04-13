
// IFFEs
var budgetController = (function () {

    var Expense = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems:{
            exp:[],
            inc:[]
        },
        total:{
            exp : 0,
            inc : 0,
        }
       
    }

    return{
        addItem:function(type,des,val){
            var newItem;
            
            //create new id
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length-1].id +1;
            }
            else{
                ID = 0;
            }

            //Create new item based on 'inc' or 'exp' type
            if(type === 'exp'){
                newItem = new Expense(ID,des,val);
            }else if(type === 'inc'){
                newItem = new Expense(ID,des,val);
            }

            //Push it into data structure
            data.allItems[type].push(newItem);

            //Return new element 
            return newItem; 
        },
        testing:function(){
            console.log(data);
        } 
    }
   
    
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

        var input,newItem;
        //1.get field input data
        input = UiCrtl.getInput();

        //2.add item to budget controller
        newItem = budgetCrtl.addItem(input.type,input.description,input.value);
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