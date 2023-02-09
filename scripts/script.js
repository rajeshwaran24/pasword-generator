const outputEl=document.getElementById('output');
const copyEl=document.getElementById('btn-copy');
const lengthEl=document.getElementById('length');
const numberEl=document.getElementById('number');
const capitalEl=document.getElementById('captial');
const smallEl=document.getElementById('small');
const symbolEl=document.getElementById('symbol');
const formEl=document.getElementById('form');


// addEventListener

copyEl.addEventListener('click',async()=>{
    const pass=outputEl.value;
    if(pass){
        await navigator.clipboard.writeText(pass);
        alert('password copied')
    }
    else{
        alert('There is no password to copy')
    }
})


function generateRandomChar(min,max)
{
    const limit=max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*limit)+min);
}

function capitalValue(){
    return generateRandomChar(65,90);
}

function smallValue(){
    return generateRandomChar(97,122);
}

function numberValue(){
    return generateRandomChar(48,57);
}

function symbolValue(){
    const symbol="`!@#$%^&*()_-=+[]{};':,./<>?\|"
    return symbol[Math.floor(Math.random()*symbol.length)];
}

const functionArray=[
    {
        element:numberEl,
        fun:numberValue
    },

    {
        element:capitalEl,
        fun:capitalValue
    },

    {
        element:smallEl,
        fun:smallValue
    },

    {
        element:symbolEl,
        fun:symbolValue
    }
];
formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
    const limits=lengthEl.value;

    let generatePassword="";

    const funArray=functionArray.filter(({element})=>element.checked);

    for(i=0;i<limits;i++){
    const index=Math.floor(Math.random()*funArray.length);

    const letter=funArray[index].fun();
    generatePassword=generatePassword+letter;
}
outputEl.value=generatePassword;
console.log(generatePassword)
});


rKf0nu